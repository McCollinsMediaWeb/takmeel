'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import countries from '../../public/countries.json';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function PropertyForm({ projectName }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    const initialForm = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: 'United Arab Emirates',
        project: '',
        purpose: '',
        timeframe: '',
        bedrooms: '',
        broker: '',
    };

    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
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
            const response = await fetch('/api/project-enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, projectName }),
                // body: JSON.stringify({ formData }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData(initialForm);
            } else {
                alert("Form submission failed.");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const errorStyle = {
        color: 'red',
        fontSize: '12px',
        marginTop: '4px'
    };

    return (
        <div className='position-relative pd-common bg3 PropertyForm'>

            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='text-center ppT1 nunito-text'>REGISTER YOUR INTEREST</div>
                    <div className='text-center ppT2'>Get in Touch with Us</div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {/* <div className='propertyFormBox'> */}
                    <form className='propertyFormBox' onSubmit={handleSubmit} >
                        <div className='row'>
                            <input type="hidden" name="projectName" value={projectName} />
                            {[
                                { name: 'firstName', placeholder: 'First Name' },
                                { name: 'lastName', placeholder: 'Last Name' },
                                // { name: 'phone', placeholder: 'Phone Number' },
                                { name: 'email', placeholder: 'Email' }
                            ].map(({ name, placeholder }) => (
                                <div className='col-md-6' key={name}>
                                    <div className='InputItem position-relative'>
                                        <input
                                            type='text'
                                            name={name}
                                            placeholder={placeholder}
                                            value={formData[name]}
                                            onChange={handleChange}
                                        />
                                        {errors[name] && <div style={errorStyle}>{errors[name]}</div>}
                                    </div>
                                </div>
                            ))}

                            <div className='col-md-6'>
                                <div className='position-relative'>
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
                                        className="CustomPhoneInput"
                                         />
                                    {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
                                </div>
                            </div>


                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="country" value={formData.country} onChange={handleChange}>
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.country && <div style={errorStyle}>{errors.country}</div>}
                                </div>
                            </div>


                            {/* <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select>
                                        <option>Select a project</option>
                                    </select>
                                </div>
                            </div> */}

                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="project" value={formData.project} onChange={handleChange}>
                                        <option value="">Select a project</option>
                                        <option value="divine-al-barari">Divine Al Barari</option>
                                        <option value="divine-residencia">Divine Residencia</option>
                                        <option value="divine-living">Divine Living</option>
                                        <option value="divine-residences">Divine Residences</option>
                                        <option value="meydan-racecourse-mansion">Meydan Racecourse Mansion</option>
                                        <option value="golf-view-living-apartments">Golf View Living Apartments</option>
                                        <option value="golf-view-living-villas">Golf View Living Villas</option>

                                    </select>
                                    {errors.project && <div style={errorStyle}>{errors.project}</div>}
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="purpose" value={formData.purpose} onChange={handleChange}>
                                        <option value="">What’s the purpose of buying?*</option>
                                        <option value="business">Business</option>
                                        <option value="self">Self</option>
                                        <option value="investment">Investment</option>
                                    </select>
                                    {errors.purpose && <div style={errorStyle}>{errors.purpose}</div>}
                                </div>
                            </div>


                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="timeframe" value={formData.timeframe} onChange={handleChange}>
                                        <option value="">How soon are you looking to buy?*</option>
                                        <option value="immediately">Immediately</option>
                                        <option value="3months">3 months</option>
                                        <option value="6months">6 months</option>
                                        <option value="1year">1 year</option>
                                        <option value="over1year">Over 1 year</option>
                                    </select>
                                    {errors.timeframe && <div style={errorStyle}>{errors.timeframe}</div>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="bedrooms" value={formData.bedrooms} onChange={handleChange}>
                                        <option value="">Number of bedrooms*</option>
                                        <option value="1">1 Bedroom</option>
                                        <option value="2">2 Bedrooms</option>
                                        <option value="3">3 Bedrooms</option>
                                        <option value="4">4 Bedrooms</option>
                                        <option value="5">5 Bedrooms</option>
                                        <option value="penthouse">Penthouse</option>
                                    </select>
                                    {errors.bedrooms && <div style={errorStyle}>{errors.bedrooms}</div>}
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="broker" value={formData.broker} onChange={handleChange}>
                                        <option value="">Are you assisted by a broker?*</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                    {errors.broker && <div style={errorStyle}>{errors.broker}</div>}
                                </div>
                            </div>
                            {/* <div className='col-md-6'>
                                <div className='formButtonsWrap'>
                                    <div className='FormButtons'>
                                        <div className='FormButton FormButton1'>
                                            <span className='position-relative'>Submit Now<span className='btn1'>&nbsp;</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                            <div className='col-md-6'>
                                <div className='formButtonsWrap'>
                                    <div className='FormButtons'>
                                        <div className='FormButton FormButton1'>
                                            <button
                                                type="submit"
                                                className="position-relative"
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    padding: 0,
                                                    margin: 0,
                                                    color: 'inherit',
                                                    font: 'inherit',
                                                    cursor: 'pointer'
                                                }}
                                                disabled={loading}
                                            >
                                                {loading ? 'Submitting...' : (
                                                    <>
                                                        Submit Now<span className='btn1'>&nbsp;</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    {submitted && (
                                        <div style={{ color: 'green', marginTop: '10px', fontSize: '14px' }}>
                                            ✅ Submitted successfully!
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* </div> */}
                </motion.div>

            </div>

        </div>
    );
}
