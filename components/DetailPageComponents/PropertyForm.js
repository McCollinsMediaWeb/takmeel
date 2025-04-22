'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

export default function PropertyForm({ }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <div className='position-relative pd-common bg3 PropertyForm'>

            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='text-center ppT1 nunito-text'>RGISTER YOUR INTEREST FOR </div>
                    <div className='text-center ppT2'>takmeel Al Barari Properties</div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='propertyFormBox'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <input type='text' placeholder='First Name' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <input type='text' placeholder='Last Name' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <input type='text' placeholder='Phone Number' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <input type='text' placeholder='Email' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select>
                                        <option>United Arab Emirates</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select>
                                        <option>Select a project</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select>
                                        <option>What’s the purpose of buying?*</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select>
                                        <option>How soon are you looking to buy?*</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select>
                                        <option>Number of bedrooms*</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='InputItem position-relative'>
                                    <select>
                                        <option>Are you assisted by a broker?*</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                    <div className='formButtonsWrap'>
                                        <div className='FormButtons'>
                                            <div className='FormButton FormButton1'>
                                                <span className='position-relative'>Submit Now<span className='btn1'>&nbsp;</span></span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    );
}
