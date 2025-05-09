import { useEffect, useRef, useState } from 'react';
import styles from '../meta.module.css';

function AddMetaTagsForm({
    setCreateNewMetaTag,
    setDataChanged,
    editMode = false,
    metaTagToEdit = null,
    setMetaTagToEdit
}) {
    const [metaPageUrl, setMetaPageUrl] = useState(metaTagToEdit?.metaPageUrl || '');
    const [metaContent, setMetaContent] = useState(metaTagToEdit?.metaContent || '');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const payload = {
                metaPageUrl,
                metaContent
            };

            const response = await fetch(
                editMode ? `/api/meta-tags?id=${metaTagToEdit?._id}` : '/api/meta-tags',
                {
                    method: editMode ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (response.ok) {
                alert(editMode ? 'Meta Tag updated successfully!' : 'Meta Tag created successfully!');
                setCreateNewMetaTag(false);
                setDataChanged((value) => !value);
            } else {
                // Handle error response
                const err = await response.json(); // Try to parse response as JSON
                alert((editMode ? 'Failed to update news: ' : 'Failed to post news: ') + (err.message || err.error || 'Unknown error'));
            }
        } catch (error) {
            // Catch network or unexpected errors
            alert('Error: ' + error.message);
        } finally {
            setIsSubmitting(false);
            setMetaPageUrl('');
            setMetaContent('');
            setMetaTagToEdit(null)
        }
    };


    return (
        <section className={styles.formCard}>
            <h2 className={styles.formTitle}>
                {editMode ? 'Edit Meta Tag' : 'Add New Meta Tag'}
            </h2>
            <form className={styles.basicForm} onSubmit={handleSubmit}>
                <div className={styles.formsRow} style={{ marginTop: '30px' }}>


                    <div className={styles.formGroup}>
                        <label htmlFor="metaPageUrl">Meta Page URL</label>
                        <input
                            type="text"
                            id="metaPageUrl"
                            className={styles.formControl}
                            placeholder="e.g. /contact-us"
                            value={metaPageUrl}
                            onChange={(e) => setMetaPageUrl(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="metaContent">Meta Content</label>
                    <textarea
                        id="metaContent"
                        className={styles.formControl}
                        rows="6"
                        style={{ height: "auto", minHeight: "150px" }}
                        value={metaContent}
                        onChange={(e) => setMetaContent(e.target.value)}
                        required
                    ></textarea>
                </div>

                <button type="submit" className={styles.signInButton} disabled={isSubmitting}>
                    {isSubmitting
                        ? (editMode ? 'Updating...' : 'Creating...')
                        : (editMode ? 'Update Meta Tag' : 'Create Meta Tag')}
                </button>
                <button type="button" onClick={() => setCreateNewMetaTag(prev => !prev)} className={styles.cancelButton}>
                    Cancel
                </button>
            </form>
        </section>
    );
}

export default AddMetaTagsForm;
