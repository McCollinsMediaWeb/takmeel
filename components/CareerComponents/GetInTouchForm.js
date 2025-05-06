'use client'; // optional if using interactivity (like menus)

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
export default function GetInTouchForm() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check if the file type is valid (PDF, DOC, DOCX)
            if (['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
                setSelectedFile(file);
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
        } else {
            alert('Please upload a valid CV file (PDF, DOC, or DOCX).');
        }
    };

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };


    // const [selectedFiles, setSelectedFiles] = useState([])
    // const [isDragging, setIsDragging] = useState(false)
    // const fileInputRef = useRef(null)

    // const handleFileChange = (e) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         setSelectedFiles(Array.from(e.target.files))
    //     }
    // }

    // const handleDragOver = (e) => {
    //     e.preventDefault()
    //     setIsDragging(true)
    // }

    // const handleDragLeave = (e) => {
    //     e.preventDefault()
    //     setIsDragging(false)
    // }

    // const handleDrop = (e) => {
    //     e.preventDefault()
    //     setIsDragging(false)

    //     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    //         setSelectedFiles(Array.from(e.dataTransfer.files))
    //     }
    // }

    // const openFileDialog = () => {
    //     if (fileInputRef.current) {
    //         fileInputRef.current.click()
    //     }
    // }

    return (
        <section className='ContactForm pd-common'>
            <div className='container'>
                <div className='text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        {/* <div className='CfT1'>WE ARE HERE TO HELP</div> */}
                        <div className='CfT2'>Let's Get In Touch</div>
                        <div className='CfT3'>Please provide the details, and we’ll get back to you.</div>
                        <div className='FormBox'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='First Name' />
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='Last Name' />
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='Phone Number' />
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='Email Address' />
                                </div>
                                {/* <div className='col-md-12'>
                                    <textarea placeholder='Message'></textarea>
                                </div> */}

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
                                        />

                                    </div>
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

                                <div className='col-md-12'>
                                    <button className='hover1'>Send Enquiry</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}