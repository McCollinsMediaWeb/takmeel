'use client';

import { motion } from "framer-motion";
import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function CatalogueForm({ isOpen, setIsOpen, brochureLink, sourcePage }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    const initialForm = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        sourcePage
    };

    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    // const [phone, setPhone] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors = {};
        for (let field in formData) {
            if (!formData[field]?.trim()) {
                newErrors[field] = 'This field is required';
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(false);

        if (!validate()) return;

        setLoading(true);
        try {
            const response = await fetch('/api/contacts/catalogue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData(initialForm);

                const link = document.createElement('a');
                link.href = brochureLink;
                link.setAttribute('download', 'Brochure.pdf'); // This tells browser to download
                link.setAttribute('target', '_blank'); // Optional: ensures new tab fallback
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

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

    return (
        <section className='ContactForm' style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px 20px' }} >

            <div style={{ textAlign: 'end' }}>
                <span
                    onClick={() => setIsOpen(false)}
                    style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        userSelect: 'none',
                        fontFamily: `'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
                    }}
                    aria-label="Close"
                >
                    &times;
                </span>
            </div>




            <div className='container'>
                <div className='text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className='CfT1'>WE ARE HERE TO HELP</div>
                        <div className='CfT2'>Get in Touch with Us</div>
                        <div className='CfT3'>
                            Should this property pique your interest, we encourage you to schedule a private viewing at your earliest convenience.
                        </div>

                        <form className='FormBox' onSubmit={handleSubmit}>
                            <div className='row'>
                                {[
                                    { label: 'First Name', name: 'firstName' },
                                    { label: 'Last Name', name: 'lastName' },
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

                                <div className='col-md-12'>
                                    <button className='hover1' type="submit" disabled={loading}>
                                        {/* {loading ? 'Submitting...' : 'Download Brochure'} */}
                                        {loading ? 'Submitting your request...' : 'Download Brochure'}
                                    </button>

                                    {submitted && (
                                        <div style={{ ...infoStyle, color: 'green' }}>
                                            {/* ✅ Form submitted successfully! */}
                                            ✅ Your form has been submitted successfully. The brochure download will begin shortly.
                                        </div>
                                    )}
                                    {loading && (
                                        <div style={{ ...infoStyle, color: '#007bff' }}>
                                            {/* Please wait while we submit your request... */}
                                            Please wait, we are processing your request...
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
