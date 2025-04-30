'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect } from 'react';
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
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        <div className='CfT1'>WE ARE HERE TO HELP</div>
                        <div className='CfT2'>Get in Touch with Us</div>
                        <div className='CfT3'>Should this property pique your interest, we encourage you to schedule a private viewing at your earliest convenience. Our portfolio encompasses a diverse selection of distinguished residences</div>
                        <div className='FormBox'>
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
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}