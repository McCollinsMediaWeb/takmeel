'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function GetInTouchForm() {

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

        <section className='ContactForm pd-common' style={{ backgroundColor: '#1A1A1A' }} >
            <div className='container'>
                <div className='text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className='CfT1'>CONTACT US</div>
                        <div className='CfT2' style={{ color: "#F7F7F7" }} >Get in Touch with Us</div>
                        <div className='CfT3' style={{ color: "#F7F7F7" }} >Need to sell or buy a property? Just get in touch and we will deal with everything else. You’ve made a great choice getting in touch with us.</div>
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
                    </motion.div>
                </div>
            </div>
        </section>

    );
}