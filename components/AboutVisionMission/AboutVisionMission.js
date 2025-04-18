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
                        <div className="VmT4 nunito-text">A brand committed to building exceptional properties and a culture of Excellence, Integrity, and Innovation.</div>
                        <div className="VmT3">Takmeel Mission</div>
                        <div className="VmT4 nunito-text">Building Legends: Iconic Projects, Exceptional Quality, Empowered People.</div>
                        <div>
                            <div className="VmT5 nunito-text">CREATE Iconic and Innovative Projects that Redefine Landmarks</div>
                        </div>
                        <div>
                            <div className="VmT5 nunito-text">MAINTAIN an Uncompromising Commitment to Exceptional Project Quality.</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}