// import { useEffect, useState } from 'react';
// import styles from '../news.module.css';

// function AddNewsForm({
//     setCreateNewPage,
//     setDataChanged,
//     editMode = false,
//     newsToEdit = null
// }) {
//     const defaultDate = new Date().toLocaleDateString('en-US', {
//         month: 'long',
//         day: 'numeric',
//         year: 'numeric'
//     });

//     const [file, setFile] = useState(null);
//     const [date, setDate] = useState(newsToEdit?.date || defaultDate);
//     const [category, setCategory] = useState(newsToEdit?.category || '');
//     const [newsHeading, setNewsHeading] = useState(newsToEdit?.heading || '');
//     const [newsContent, setNewsContent] = useState(newsToEdit?.content || '');
//     const [visibility, setVisibility] = useState(newsToEdit?.visibility ?? true);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [previewUrl, setPreviewUrl] = useState(newsToEdit?.coverImage || null);

//     const imgUpload = async (file) => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", "takmeelwebsite");

//         try {
//             const response = await fetch("https://api.cloudinary.com/v1_1/dje8fshak/image/upload", {
//                 method: "POST",
//                 body: formData,
//             });
//             const data = await response.json();
//             return data.secure_url;
//         } catch (error) {
//             console.error("Error uploading image:", error);
//             throw error;
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         try {
//             let imageUrl = previewUrl;

//             if (file) {
//                 imageUrl = await imgUpload(file);
//             }

//             const payload = {
//                 coverImage: imageUrl,
//                 date,
//                 category,
//                 heading: newsHeading,
//                 content: newsContent,
//                 visibility
//             };

//             const response = await fetch(
//                 editMode ? `/api/news/${newsToEdit._id}` : '/api/news',
//                 {
//                     method: editMode ? 'PUT' : 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(payload),
//                 }
//             );

//             if (response.ok) {
//                 alert(editMode ? 'News updated successfully!' : 'News posted successfully!');
//                 setCreateNewPage(false);
//                 setDataChanged((value) => !value);
//             } else {
//                 const err = await response.text();
//                 alert((editMode ? 'Failed to update news: ' : 'Failed to post news: ') + err);
//             }
//         } catch (error) {
//             alert('Error: ' + error.message);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <section className={styles.formCard}>
//             <h2 className={styles.formTitle}>
//                 {editMode ? 'Edit News' : 'Add New News'}
//             </h2>
//             <form className={styles.basicForm} onSubmit={handleSubmit}>
//                 <div className={styles.fileInput}>
//                     <label htmlFor="coverImage" className={styles.fileInputLabel}>Choose Cover Image</label>
//                     <input
//                         type="file"
//                         id="coverImage"
//                         className={styles.formFileInput}
//                         accept="image/*"
//                         onChange={(e) => {
//                             const selectedFile = e.target.files[0];
//                             if (selectedFile) {
//                                 setFile(selectedFile);
//                                 const reader = new FileReader();
//                                 reader.onload = () => {
//                                     setPreviewUrl(reader.result);
//                                 };
//                                 reader.readAsDataURL(selectedFile);
//                             }
//                         }}
//                     />
//                     <span className={styles.fileInputText}>{file ? file.name : 'No file chosen'}</span>
//                 </div>

//                 {previewUrl && (
//                     <div className={styles.imagePreviewWrapper}>
//                         <img src={previewUrl} alt="Preview" className={styles.imagePreview} />
//                         <button
//                             type="button"
//                             className={styles.removeImageBtn}
//                             onClick={() => {
//                                 setFile(null);
//                                 setPreviewUrl(null);
//                             }}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                 )}

//                 <small className={styles.formText}>Upload a cover image for the news article</small>

//                 <div className={styles.formsRow} style={{ marginTop: '30px' }}>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="newsDate">Date</label>
//                         <input
//                             type="text"
//                             id="newsDate"
//                             className={styles.formControl}
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)}
//                         />
//                         <small className={styles.formText}>Format: October 23, 2022</small>
//                     </div>

//                     <div className={styles.formGroup}>
//                         <label htmlFor="newsCategory">Category</label>
//                         <input
//                             type="text"
//                             id="newsCategory"
//                             className={styles.formControl}
//                             placeholder="e.g. REAL ESTATE"
//                             value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 <div className={styles.formGroup}>
//                     <label htmlFor="newsHeading">News Heading</label>
//                     <input
//                         type="text"
//                         id="newsHeading"
//                         className={styles.formControl}
//                         placeholder="Enter news headline"
//                         value={newsHeading}
//                         onChange={(e) => setNewsHeading(e.target.value)}
//                     />
//                 </div>

//                 <div className={styles.formGroup}>
//                     <label htmlFor="newsContent">News Content</label>
//                     <textarea
//                         id="newsContent"
//                         className={styles.formControl}
//                         rows="6"
//                         placeholder="Enter the news article content here..."
//                         style={{ height: "auto", minHeight: "150px" }}
//                         value={newsContent}
//                         onChange={(e) => setNewsContent(e.target.value)}
//                     ></textarea>
//                 </div>

//                 <div className={styles.formGroup}>
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={visibility}
//                             onChange={(e) => setVisibility(e.target.checked)}
//                         />
//                         &nbsp;Visible to public
//                     </label>
//                 </div>

//                 <button type="submit" className={styles.signInButton} disabled={isSubmitting}>
//                     {isSubmitting
//                         ? (editMode ? 'Updating...' : 'Publishing...')
//                         : (editMode ? 'Update News' : 'Publish News')}
//                 </button>
//                 <button type="button" onClick={() => setCreateNewPage(prev => !prev)} className={styles.cancelButton}>
//                     Cancel
//                 </button>
//             </form>
//         </section>
//     );
// }

// export default AddNewsForm;



import { useEffect, useRef, useState } from 'react';
import styles from '../news.module.css';
import Editor from './Editor';

function AddNewsForm({
    setCreateNewPage,
    setDataChanged,
    editMode = false,
    newsToEdit = null,
    setNewsToEdit
}) {
    const defaultDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const [file, setFile] = useState(null);
    const [date, setDate] = useState(newsToEdit?.date || defaultDate);
    const [category, setCategory] = useState(newsToEdit?.category || '');
    const [newsHeading, setNewsHeading] = useState(newsToEdit?.heading || '');
    // const [newsContent, setNewsContent] = useState('');
    const [newsContent, setNewsContent] = useState(newsToEdit?.content || '');
    const [newsSubHeading, setNewsSubHeading] = useState(newsToEdit?.subheading || '');
    const [visibility, setVisibility] = useState(newsToEdit?.visibility ?? true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(newsToEdit?.coverImage || null);

    const imgUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "takmeelwebsite");

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dje8fshak/image/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            return data.secure_url;
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            let imageUrl = previewUrl;

            // Upload image if file is selected
            if (file) {
                // Make sure the upload function returns the image URL
                imageUrl = await imgUpload(file);
            }

            const payload = {
                coverImage: imageUrl,
                date,
                category,
                heading: newsHeading,
                subheading: newsSubHeading,
                content: newsContent,
                visibility,
            };

            const response = await fetch(
                editMode ? `/api/news/${newsToEdit?._id}` : '/api/news', // Safely check if newsToEdit exists
                {
                    method: editMode ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (response.ok) {
                alert(editMode ? 'News updated successfully!' : 'News posted successfully!');
                setCreateNewPage(false);
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
            setFile(null);
            setDate(defaultDate);
            setCategory('');
            setNewsHeading('');
            setNewsContent('');
            setNewsSubHeading('');
            setVisibility(true);
            setPreviewUrl(null);
            setNewsToEdit(null);
        }
    };


    return (
        <section className={styles.formCard}>
            <h2 className={styles.formTitle}>
                {editMode ? 'Edit News' : 'Add New News'}
            </h2>
            <form className={styles.basicForm} onSubmit={handleSubmit}>
                <div className={styles.fileInput}>
                    <label htmlFor="coverImage" className={styles.fileInputLabel}>Choose Cover Image</label>
                    <input
                        type="file"
                        id="coverImage"
                        className={styles.formFileInput}
                        accept="image/*"
                        onChange={(e) => {
                            const selectedFile = e.target.files[0];
                            if (selectedFile) {
                                setFile(selectedFile);
                                const reader = new FileReader();
                                reader.onload = () => {
                                    setPreviewUrl(reader.result);
                                };
                                reader.readAsDataURL(selectedFile);
                            }
                        }}
                        required
                    />
                    <span className={styles.fileInputText}>{file ? file.name : 'No file chosen'}</span>
                </div>

                {previewUrl && (
                    <div className={styles.imagePreviewWrapper}>
                        <img src={previewUrl} alt="Preview" className={styles.imagePreview} />
                        <button
                            type="button"
                            className={styles.removeImageBtn}
                            onClick={() => {
                                setFile(null);
                                setPreviewUrl(null);
                            }}
                        >
                            &times;
                        </button>
                    </div>
                )}

                <small className={styles.formText}>Upload a cover image for the news article</small>

                <div className={styles.formsRow} style={{ marginTop: '30px' }}>
                    <div className={styles.formGroup}>
                        <label htmlFor="newsDate">Date</label>
                        <input
                            type="text"
                            id="newsDate"
                            className={styles.formControl}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <small className={styles.formText}>Format: October 23, 2022</small>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="newsCategory">Category</label>
                        <input
                            type="text"
                            id="newsCategory"
                            className={styles.formControl}
                            placeholder="e.g. REAL ESTATE"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="newsHeading">News Heading</label>
                    <input
                        type="text"
                        id="newsHeading"
                        className={styles.formControl}
                        placeholder="Enter news headline"
                        value={newsHeading}
                        onChange={(e) => setNewsHeading(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="newsContent">News Subheading</label>
                    <textarea
                        id="newsContent"
                        className={styles.formControl}
                        rows="6"
                        placeholder="Enter news subheading"
                        style={{ height: "auto", minHeight: "150px" }}
                        value={newsSubHeading}
                        onChange={(e) => setNewsSubHeading(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="newsContent">News Content</label>
                    <Editor value={newsContent} onChange={setNewsContent} />

                </div>

                <div className={styles.formGroup}>
                    <label>
                        <input
                            type="checkbox"
                            checked={visibility}
                            onChange={(e) => setVisibility(e.target.checked)}
                        />
                        &nbsp;Visible to public
                    </label>
                </div>

                <button type="submit" className={styles.signInButton} disabled={isSubmitting}>
                    {isSubmitting
                        ? (editMode ? 'Updating...' : 'Publishing...')
                        : (editMode ? 'Update News' : 'Publish News')}
                </button>
                <button type="button" onClick={() => setCreateNewPage(prev => !prev)} className={styles.cancelButton}>
                    Cancel
                </button>
            </form>
        </section>
    );
}

export default AddNewsForm;
