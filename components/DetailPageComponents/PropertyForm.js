'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import countries from '../../public/countries.json';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useLocale, useTranslations } from 'next-intl';

export default function PropertyForm({ projectName }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const t = useTranslations('GetInTouchForm');

    const locale = useLocale();

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
                    <div className='text-center ppT1 nunito-text'>{t('subTitle')}</div>
                    <div className='text-center ppT2'>{t('title')}</div>
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
                                { name: 'firstName', placeholder: t('field1.placeholder') },
                                { name: 'lastName', placeholder: t('field2.placeholder') },
                                // { name: 'phone', placeholder: 'Phone Number' },
                                { name: 'email', placeholder: t('field3.placeholder') }
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
                                        placeholder={t('field4.placeholder')}
                                        value={formData.phone}
                                        defaultCountry="AE"
                                        onChange={(value) => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                phone: value,
                                            }));
                                            setErrors((prev) => ({ ...prev, phone: '' }));
                                        }}
                                        // className="CustomPhoneInput"
                                        className={`CustomPhoneInput ${locale === 'ar' ? 'rtl' : ''}`}
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
                                        <option value="">{t('field6.placeholder')}</option>
                                        <option value="divine-al-barari">{t('field6.option1')}</option>
                                        <option value="divine-residencia">{t('field6.option2')}</option>
                                        <option value="divine-living">{t('field6.option3')}</option>
                                        <option value="divine-residences">{t('field6.option4')}</option>
                                        <option value="meydan-racecourse-mansion">{t('field6.option5')}</option>
                                        <option value="golf-view-living-apartments">{t('field6.option6')}</option>
                                        <option value="golf-view-living-villas">{t('field6.option7')}</option>

                                    </select>
                                    {errors.project && <div style={errorStyle}>{errors.project}</div>}
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="purpose" value={formData.purpose} onChange={handleChange}>
                                        <option value="">{t('field7.placeholder')}</option>
                                        <option value="business">{t('field7.option1')}</option>
                                        <option value="self">{t('field7.option2')}</option>
                                        <option value="investment">{t('field7.option3')}</option>
                                    </select>
                                    {errors.purpose && <div style={errorStyle}>{errors.purpose}</div>}
                                </div>
                            </div>


                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="timeframe" value={formData.timeframe} onChange={handleChange}>
                                        <option value="">{t('field8.placeholder')}</option>
                                        <option value="immediately">{t('field8.option1')}</option>
                                        <option value="3months">{t('field8.option2')}</option>
                                        <option value="6months">{t('field8.option3')}</option>
                                        <option value="1year">{t('field8.option4')}</option>
                                        <option value="over1year">{t('field8.option5')}</option>
                                    </select>
                                    {errors.timeframe && <div style={errorStyle}>{errors.timeframe}</div>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="bedrooms" value={formData.bedrooms} onChange={handleChange}>
                                        <option value="">{t('field9.placeholder')}</option>
                                        <option value="1">{t('field9.option1')}</option>
                                        <option value="2">{t('field9.option2')}</option>
                                        <option value="3">{t('field9.option3')}</option>
                                        <option value="4">{t('field9.option4')}</option>
                                        <option value="5">{t('field9.option5')}</option>
                                        <option value="penthouse">{t('field9.option6')}</option>
                                    </select>
                                    {errors.bedrooms && <div style={errorStyle}>{errors.bedrooms}</div>}
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select name="broker" value={formData.broker} onChange={handleChange}>
                                        <option value="">{t('field10.placeholder')}</option>
                                        <option value="yes">{t('field10.option1')}</option>
                                        <option value="no">{t('field10.option2')}</option>
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
                                                        {t('buttonText')}<span className='btn1'>&nbsp;</span>
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
