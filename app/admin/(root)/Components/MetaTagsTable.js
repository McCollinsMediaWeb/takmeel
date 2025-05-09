import { useState } from 'react';
import styles from '../styles.module.css';

function MetaTagsTable({ metaTagsData, setDataChanged, setCreateNewMetaTag, setMetaTagToEdit, loading }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMetaTagId, setSelectedMetaTagId] = useState(null);

    const handleDeleteClick = (metaTagId) => {
        setSelectedMetaTagId(metaTagId);
        setIsOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedMetaTagId) {
            console.warn("No meta tag ID selected for deletion");
            return;
        }

        try {
            const response = await fetch(`/api/meta-tags?id=${selectedMetaTagId}`, {
                method: 'DELETE',
            });

            const result = await response.json();

            if (response.ok && result.success) {
                console.log("Meta tag deleted successfully:", selectedMetaTagId);
                // Optionally trigger a re-fetch of metaTag list or update state here
            } else {
                console.error("Failed to delete meta tag:", result.message || result.error);
            }
        } catch (error) {
            console.error("An error occurred while deleting the meta tag:", error);
        } finally {
            setIsOpen(false);
            setSelectedMetaTagId(null);
            setDataChanged((value) => !value);
        }
    };


    const handleCancelDelete = () => {
        setIsOpen(false);
        setSelectedMetaTagId(null);
    };

    const handleEditClick = (metaTag) => {
        setMetaTagToEdit(metaTag);
        setCreateNewMetaTag(true);
    };

    return (
        <div className={styles.tableContainer}>

            {loading ? (
                <div className={styles.spinnerContainer}>
                    <div className={styles.spinner}></div>
                </div>
            ) : (
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th>SI. No</th>
                            <th>Meta Page URL</th>
                            <th>Meta Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {metaTagsData?.map((metaTag, index) => (
                            <tr key={metaTag._id}>
                                <td>{index + 1}</td>
                                <td>{metaTag.metaPageUrl}</td>
                                <td style={{
                                    maxWidth: '600px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }} >{metaTag.metaContent}</td>
                                <td>
                                    <button className={styles.editButton} onClick={() => handleEditClick(metaTag)}>Edit</button>
                                    <button className={styles.deleteButton} onClick={() => handleDeleteClick(metaTag._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                        <div className={styles.modalActions}>
                            <button className={styles.editButton} onClick={handleCancelDelete}>Cancel</button>
                            <button className={styles.deleteButton} onClick={handleConfirmDelete}>OK</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default MetaTagsTable;