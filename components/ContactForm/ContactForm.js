'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import SlImage1 from "../../public/sl1.jpg"
import SlImage2 from "../../public/sl2.jpg"
export default function ContactForm() {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <section className='ContactForm pd-common'>
            <div className='container'>
                <div className='text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        <div className='CfT1'>WE ARE HERE TO HELP</div>
                        <div className='CfT2'>Get in Touch with Us</div>
                        <div className='CfT3'>Should this property pique your interest, we encourage you to schedule a private viewing at your earliest convenience. Our portfolio encompasses a diverse selection of distinguished residences</div>
                        <div className='FormBox'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='First Name'/>
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='Last Name'/>
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='Phone Number'/>
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" placeholder='Email Address'/>
                                </div>
                                <div className='col-md-12'>
                                    <textarea placeholder='Message'></textarea>
                                </div>
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