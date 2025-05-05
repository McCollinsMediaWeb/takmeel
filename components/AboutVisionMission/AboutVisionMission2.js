'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
export default function AboutVisionMission2() {
      // Container animation variants
      const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    }

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

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div>
                                <motion.div className="" variants={itemVariants}>
                                    <div className="VmT3">Takmeel Vision</div>
                                </motion.div>
                                <motion.div className="" variants={itemVariants}>
                                    <div>
                                        <div className="VmT5 nunito-text">To redefine urban living through inspired design and future-focused communities.</div>
                                    </div>
                                </motion.div>

                                <motion.div className="" variants={itemVariants}>
                                    <div className="VmT3">Takmeel Mission</div>
                                </motion.div>
                                <motion.div className="" variants={itemVariants}>
                                    <div>
                                        <div className="VmT5 nunito-text">To craft sustainable, smart, and elegant spaces that elevate lifestyles and deliver enduring value.</div>
                                    </div>
                                </motion.div>
                                <motion.div className="" variants={itemVariants}>
                                    <div className="VmT3">Our Values</div>
                                </motion.div>
                                <motion.div className="" variants={itemVariants}>
                                    <div>
                                        <div className="VmT5 nunito-text">We champion innovation and sustainability in every design.</div>
                                    </div>
                                </motion.div>
                                <motion.div className="" variants={itemVariants}>

                                    <div>
                                        <div className="VmT5 nunito-text">Every community is customer-centric, environmentally conscious, and globally inspired.</div>
                                    </div>
                                </motion.div>
                                <motion.div className="" variants={itemVariants}>
                                    <div>
                                        <div className="VmT5 nunito-text">Our legacy is built on bold ideas, precise execution, and a relentless pursuit of excellence.</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>









                    </motion.div>
                </div>
            </div>
        </section>
    );
}