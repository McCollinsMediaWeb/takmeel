'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function HeaderForm() {
    useEffect(() => {
        const toggleButtons = document.querySelectorAll(".toggleForm");

        const toggleClass = () => {
            document.body.classList.toggle("form-open");
        };

        toggleButtons.forEach((btn) => btn.addEventListener("click", toggleClass));

        // Cleanup
        return () => {
            toggleButtons.forEach((btn) => btn.removeEventListener("click", toggleClass));
        };
    }, []);

    const initialForm = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
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
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData(initialForm);
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
        <div className='HeaderForm'>
            <div className='Backdrop BackdropForm toggleForm'>&nbsp;</div>
            <div className='FormPopUp'>

                <div className='text-center'>
                    <div className='MenuHd'>
                        <div className='closeBtn black toggleForm'>&nbsp;</div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        <div className='CfT1'>WE ARE HERE TO HELP</div>
                        <div className='CfT2' style={{ color: '#fff' }} >Get in Touch with Us</div>
                        <div className='CfT3' style={{ color: '#fff' }} >Should this property pique your interest, we encourage you to schedule a private viewing at your earliest convenience. </div>
                        <form className='FormBox' onSubmit={handleSubmit}>
                            <div className='row'>
                                {[
                                    { label: 'First Name', name: 'firstName' },
                                    { label: 'Last Name', name: 'lastName' },
                                    { label: 'Email Address', name: 'email' },
                                ].map(({ label, name }) => (
                                    <div className='col-md-12' key={name}>
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

                                <div className='col-md-12'>
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
                                    <textarea
                                        rows={5}
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && <div style={errorStyle}>{errors.message}</div>}
                                </div>

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

                        {/* <div className='FormBox'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <input type="text" placeholder='First Name' />
                                </div>
                                <div className='col-md-12'>
                                    <input type="text" placeholder='Last Name' />
                                </div>
                                <div className='col-md-12'>
                                    <input type="text" placeholder='Phone Number' />
                                </div>
                                <div className='col-md-12'>
                                    <input type="text" placeholder='Email Address' />
                                </div>
                                <div className='col-md-12'>
                                    <textarea placeholder='Message'></textarea>
                                </div>
                                <div className='col-md-12'>
                                    <button className='hover1'>Send Enquiry</button>
                                </div>
                            </div>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}