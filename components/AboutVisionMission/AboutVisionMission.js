'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
export default function AboutVisionMission() {



    return (
        <section className="pd-common VisionMissionBox">
            <div className="container">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="VmT1">
                            Beyond Boundaries.<br />
                            Quality and Creativity in Every Project.
                        </div>
                        <div className="VmT2 nunito-text">You can rely on our team of seasoned specialists to provide the kind of unmatched service that paves the way to unlock the doors to your dream home in one of the world’s most beautiful and sought-after locations. Our company is dedicated to quality, creativity, and the continuous quest to make your dreams a reality. Every project we take on is a blank slate for us to combine our skills, explore new ideas, and push the boundaries of quality and creativity.</div>
                        <div className="VmT3">Takmeel Vision</div>
                        <div className="VmT4 nunito-text">To redefine urban living through inspired design and future-focused communities.</div>
                        <div className="VmT3">Takmeel Mission</div>
                        <div className="VmT4 nunito-text">To craft sustainable, smart, and elegant spaces that elevate lifestyles and deliver enduring value.</div>
                        {/* <div>
                            <div className="VmT5 nunito-text">CREATE Iconic and Innovative Projects that Redefine Landmarks</div>
                        </div>
                        <div>
                            <div className="VmT5 nunito-text">MAINTAIN an Uncompromising Commitment to Exceptional Project Quality.</div>
                        </div> */}

                        <div className="VmT3">Our Values</div>
                        <div className="VmT4 nunito-text">We champion innovation and sustainability in every design.</div>
                        <div className="VmT4 nunito-text">Every community is customer-centric, environmentally conscious, and globally inspired.</div>
                        <div className="VmT4 nunito-text">Our legacy is built on bold ideas, precise execution, and a relentless pursuit of excellence.</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}