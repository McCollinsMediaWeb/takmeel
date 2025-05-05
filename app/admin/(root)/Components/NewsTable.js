import { useEffect, useRef, useState } from 'react';
import styles from '../styles.module.css';

function NewsTable({ newsData, setDataChanged, setCreateNewPage, setNewsToEdit }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNewsId, setSelectedNewsId] = useState(null);

    const handleDeleteClick = (newsId) => {
        setSelectedNewsId(newsId);
        setIsOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedNewsId) {
            console.warn("No news ID selected for deletion");
            return;
        }

        try {
            const response = await fetch(`/api/news?id=${selectedNewsId}`, {
                method: 'DELETE',
            });

            const result = await response.json();

            if (response.ok && result.success) {
                console.log("News deleted successfully:", selectedNewsId);
                // Optionally trigger a re-fetch of news list or update state here
            } else {
                console.error("Failed to delete news:", result.message || result.error);
            }
        } catch (error) {
            console.error("An error occurred while deleting the news:", error);
        } finally {
            setIsOpen(false);
            setSelectedNewsId(null);
            setDataChanged((value) => !value)
        }
    };


    const handleCancelDelete = () => {
        setIsOpen(false);
        setSelectedNewsId(null);
    };

    const handleEditClick = (news) => {
        setNewsToEdit(news);
        setCreateNewPage(true);
    };

    return (
        <div className={styles.tableContainer}>
            <table className={styles.dataTable}>
                <thead>
                    <tr>
                        <th>Cover Image</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Heading</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newsData?.map((news, index) => (
                        <tr key={news._id}>
                            <td><img src={news.coverImage} alt="Cover" width={60} /></td>
                            <td>{news.date}</td>
                            <td>{news.category}</td>
                            <td>{news.heading}</td>
                            <td>
                                <span className={news.visibility ? styles.statusVisible : styles.statusHidden}>
                                    {news.visibility ? "Visible" : "Hidden"}
                                </span>
                            </td>
                            <td>
                                <button className={styles.editButton} onClick={() => handleEditClick(news)}>Edit</button>
                                <button className={styles.deleteButton} onClick={() => handleDeleteClick(news._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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

export default NewsTable;