'use client'; // optional if using interactivity (like menus)

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function GetInTouchForm() {

    const initialForm = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        // file: ''
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check if the file type is valid (PDF, DOC, DOCX)
            if (['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
                setSelectedFile(file);
                setErrors(prev => ({ ...prev, file: '' }));
            } else {
                alert('Please upload a valid CV file (PDF, DOC, or DOCX).');
            }
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
            setSelectedFile(file);
            setErrors(prev => ({ ...prev, file: '' }));
        } else {
            alert('Please upload a valid CV file (PDF, DOC, or DOCX).');
        }
    };

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    // const validate = () => {
    //     const newErrors = {};
    //     for (let field in formData) {
    //         if (!formData[field]?.trim()) {
    //             newErrors[field] = 'This field is required';
    //         }
    //     }
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    const validate = () => {
        const newErrors = {};

        for (let field in formData) {
            if (!formData[field]?.trim()) {
                newErrors[field] = 'This field is required';
            }
        }

        if (!selectedFile) {
            newErrors.file = 'This field is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const errorStyle = {
        color: 'red',
        fontSize: '13px',
        marginTop: '4px',
        marginBottom: '10px',
    };

    const infoStyle = {
        fontSize: '14px',
        marginTop: '10px',
    };

    // const fileUpload = async (file) => {
    //     const cvData = new FormData();
    //     cvData.append("file", file);
    //     cvData.append("upload_preset", "takmeelwebsite");

    //     try {
    //         const response = await fetch("https://api.cloudinary.com/v1_1/dje8fshak/raw/upload", {
    //             method: "POST",
    //             body: cvData,
    //         });
    //         const data = await response.json();
    //         return data.secure_url; // This is the file URL
    //     } catch (error) {
    //         console.error("Error uploading CV to Cloudinary:", error);
    //         throw error;
    //     }
    // };

    const fileUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "takmeelwebsite");

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dje8fshak/raw/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || "Upload failed");
            }

            // Use raw URL (correct for PDFs and non-image files)
            return data.secure_url;

        } catch (error) {
            console.error("Error uploading CV to Cloudinary:", error);
            throw error;
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(false);

        if (!validate()) return;

        setLoading(true);
        try {
            let cvUrl = "";
            if (selectedFile) {
                cvUrl = await fileUpload(selectedFile); // Upload to Cloudinary
                console.log("cvUrl", cvUrl);
            }

            const payload = {
                ...formData,
                cvUrl, // include Cloudinary URL
            };

            const response = await fetch('/api/contacts/careers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData(initialForm);
                setSelectedFile(null);
            } else {
                alert("Failed to submit the form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <section className='ContactForm pd-common'>
            <div className='container'>
                <div className='text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        {/* <div className='CfT1'>WE ARE HERE TO HELP</div> */}
                        <div className='CfT2'>Let's Get In Touch</div>
                        <div className='CfT3'>Please provide the details, and we’ll get back to you.</div>
                        {/* <div className='FormBox'> */}
                        <form className='FormBox' onSubmit={handleSubmit}>
                            <div className='row'>
                                {[
                                    { label: 'First Name', name: 'firstName' },
                                    { label: 'Last Name', name: 'lastName' },
                                    // { label: 'Phone Number', name: 'phone' },
                                    { label: 'Email Address', name: 'email' },
                                ].map(({ label, name }) => (
                                    <div className='col-md-6' key={name}>
                                        <input
                                            type="text"
                                            name={name}
                                            placeholder={label}
                                            value={formData[name]}
                                            onChange={handleChange}
                                        />
                                        {errors[name] && <div style={errorStyle}>{errors[name]}</div>}
                                    </div>
                                ))}

                                <div className='col-md-6'>
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        defaultCountry="AE"
                                        onChange={(value) => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                phone: value,
                                            }));
                                            setErrors((prev) => ({ ...prev, phone: '' }));
                                        }}
                                        className="CustomPhoneInput" />

                                    {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
                                </div>

                                <div className="col-md-12">
                                    <div onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        onClick={openFileDialog}
                                        style={{
                                            width: "100%",
                                            height: "160px",
                                            borderRadius: "25px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            marginBottom: "24px",
                                            backgroundColor: isDragging ? "#fff8e1" : "#f9f9f9",
                                            transition: "background-color 0.3s, border-color 0.3s",
                                            borderColor: isDragging ? "#f0b941" : "#e2e2e2",
                                            padding: "20px",
                                        }} >
                                        <div style={{ fontSize: "18px", color: "#333", marginBottom: "4px" }}>Drag & Drop Files Here</div>
                                        <div style={{ color: "#666" }}>or</div>
                                        <div
                                            style={{
                                                color: "#f0b941",
                                                fontWeight: "500",
                                                marginTop: "4px",
                                                transition: "color 0.2s",
                                            }}
                                            onMouseOver={(e) => (e.currentTarget.style.color = "#e09c2d")}
                                            onMouseOut={(e) => (e.currentTarget.style.color = "#f0b941")}
                                        >
                                            Browse Files
                                        </div>

                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: "none" }}
                                            onChange={handleFileChange}
                                            accept=".pdf, .doc, .docx"
                                            name="file"
                                        />

                                    </div>

                                    {errors.file && (
                                        <div style={{ color: "red", fontSize: "14px", marginBottom: "24px" }}>
                                            {errors.file}
                                        </div>
                                    )}

                                </div>

                                {/* {selectedFiles.length > 0 && (
                                    <div className="col-md-12" style={{ marginBottom: "24px" }}>
                                        <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px" }}>Selected Files:</div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                            {selectedFiles.map((file, index) => (
                                                <div
                                                    key={index}
                                                    style={{ fontSize: "14px", color: "#666", display: "flex", alignItems: "center" }}
                                                >
                                                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                                        {file.name}
                                                    </span>
                                                    <span style={{ marginLeft: "8px", fontSize: "12px", color: "#888" }}>
                                                        ({(file.size / 1024).toFixed(1)} KB)
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )} */}


                                {selectedFile && (
                                    <div className="col-md-12" style={{ marginBottom: "24px" }}>
                                        <div style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px" }}>Selected File:</div>
                                        <div style={{ fontSize: "14px", color: "#666" }}>
                                            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                                {selectedFile.name}
                                            </span>
                                            <span style={{ marginLeft: "8px", fontSize: "12px", color: "#888" }}>
                                                ({(selectedFile.size / 1024).toFixed(1)} KB)
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* <div className='col-md-12'>
                                    <button className='hover1'>Send Enquiry</button>
                                </div> */}

                                <div className='col-md-12'>
                                    <button className='hover1' type="submit" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Send Enquiry'}
                                    </button>

                                    {submitted && (
                                        <div style={{ ...infoStyle, color: 'green' }}>
                                            ✅ Form submitted successfully!
                                        </div>
                                    )}
                                    {loading && (
                                        <div style={{ ...infoStyle, color: '#007bff' }}>
                                            Please wait while we submit your request...
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                        {/* </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}