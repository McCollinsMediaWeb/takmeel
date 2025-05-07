// 'use client';

// import Link from 'next/link';
// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import useMediaQuery from "../hooks/useMediaQuery";
// import SlImage1 from "../../public/sl1.jpg"
// import SlImage2 from "../../public/sl2.jpg"
// import countries from '../../public/countries.json';

// export default function ContactForm() {
//     const isDesktop = useMediaQuery("(min-width: 960px)");

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         country: 'United Arab Emirates',
//         purpose: '',
//         timeframe: '',
//         bedrooms: '',
//         broker: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 alert("Enquiry submitted successfully.");
//                 setFormData({
//                     firstName: '',
//                     lastName: '',
//                     phone: '',
//                     email: '',
//                     country: 'United Arab Emirates',
//                     purpose: '',
//                     timeframe: '',
//                     bedrooms: '',
//                     broker: '',
//                 });
//             } else {
//                 alert("Failed to submit the form.");
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert("An error occurred.");
//         }
//     };

//     return (
//         <section className='ContactForm pd-common'>
//             <div className='container'>
//                 <div className='text-center'>
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, ease: "easeOut" }}
//                         viewport={{ once: true, amount: 0.5 }}
//                     >
//                         <div className='CfT1'>WE ARE HERE TO HELP</div>
//                         <div className='CfT2'>Get in Touch with Us</div>
//                         <div className='CfT3'>Should this property pique your interest, we encourage you to schedule a private viewing at your earliest convenience. Our portfolio encompasses a diverse selection of distinguished residences.</div>
//                         <form className='FormBox' onSubmit={handleSubmit}>
//                             <div className='row'>
//                                 <div className='col-md-6'>
//                                     <input type="text" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange} />
//                                 </div>
//                                 <div className='col-md-6'>
//                                     <input type="text" name="lastName" placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
//                                 </div>
//                                 <div className='col-md-6'>
//                                     <input type="text" name="phone" placeholder='Phone Number' value={formData.phone} onChange={handleChange} />
//                                 </div>
//                                 <div className='col-md-6'>
//                                     <input type="text" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} />
//                                 </div>


//                                 <div className='col-md-6'>
//                                     <select name="country" value={formData.country} onChange={handleChange}>
//                                         {countries.map((country) => (
//                                             <option key={country.code} value={country.name}>
//                                                 {country.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div className='col-md-6'>
//                                     <select name="purpose" value={formData.purpose} onChange={handleChange} required>
//                                         <option disabled value="">What’s the purpose of buying?*</option>
//                                         <option value="business">Business</option>
//                                         <option value="self">Self</option>
//                                         <option value="investment">Investment</option>
//                                     </select>
//                                 </div>
//                                 <div className='col-md-6'>
//                                     <select name="timeframe" value={formData.timeframe} onChange={handleChange} required>
//                                         <option disabled value="">How soon are you looking to buy?*</option>
//                                         <option value="immediately">Immediately</option>
//                                         <option value="3months">3 months</option>
//                                         <option value="6months">6 months</option>
//                                         <option value="1year">1 year</option>
//                                         <option value="over1year">Over 1 year</option>
//                                     </select>
//                                 </div>
//                                 <div className='col-md-6'>
//                                     <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} required>
//                                         <option disabled value="">Number of bedrooms*</option>
//                                         <option value="1bedroom">1 bedroom</option>
//                                         <option value="2bedroom">2 bedrooms</option>
//                                         <option value="3bedroom">3 bedrooms</option>
//                                         <option value="4bedroom">4 bedrooms</option>
//                                         <option value="5bedroom">5 bedrooms</option>
//                                         <option value="penthouse">Penthouse</option>
//                                     </select>
//                                 </div>
//                                 <div className='col-md-6'>
//                                     <select name="broker" value={formData.broker} onChange={handleChange} required>
//                                         <option disabled value="">Are you assisted by a broker?*</option>
//                                         <option value="yes">Yes</option>
//                                         <option value="no">No</option>
//                                     </select>
//                                 </div>
//                                 <div className='col-md-12'>
//                                     <button className='hover1'>Send Enquiry</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </motion.div>
//                 </div>
//             </div >
//         </section >
//     );
// }


'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import countries from '../../public/countries.json';

export default function ContactForm() {
    const isDesktop = useMediaQuery("(min-width: 960px)");

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
        <section className='ContactForm pd-common'>
            <div className='container'>
                <div className='text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
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
                                    { label: 'Phone Number', name: 'phone' },
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
