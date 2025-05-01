'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
export default function AboutVisionMission2() {

    return (
        <section className="pd-common VisionMissionBox bg2">
            <div className="container">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        
                        <div className="VmT3">Takmeel Vision</div>
                       <div>
                       <div className="VmT5 nunito-text">To redefine urban living through inspired design and future-focused communities.</div>
                       </div>
                        <div className="VmT3">Takmeel Mission</div>
                        <div>
                        <div className="VmT5 nunito-text">To craft sustainable, smart, and elegant spaces that elevate lifestyles and deliver enduring value.</div>
                        </div>

                        <div className="VmT3">Our Values</div>
                        <div>
                            <div className="VmT5 nunito-text">We champion innovation and sustainability in every design.</div>
                        </div>
                       <div>
                        <div className="VmT5 nunito-text">Every community is customer-centric, environmentally conscious, and globally inspired.</div>
                       </div>
                       <div>
                       <div className="VmT5 nunito-text">Our legacy is built on bold ideas, precise execution, and a relentless pursuit of excellence.</div>
                       </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}