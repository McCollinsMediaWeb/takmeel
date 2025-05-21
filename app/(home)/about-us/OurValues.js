'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import Image from "next/image";

export default function OurValues() {
    const animationVariants = [
        { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 } }, // Slide up
        { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } }, // Slide in from left
        { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } }, // Slide in from right
        { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 } }, // Zoom in
        { initial: { opacity: 0, rotate: -10 }, whileInView: { opacity: 1, rotate: 0 } }, // Rotate in
        { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.5 } } // Fade in
    ];

    const stages = [
        {
            imageClass: "image7",
            title: "Integrity",
            text: "We uphold unwavering ethical standards, ensuring transparency, honesty, and fairness in every interaction and decision we make."
        },
        {
            imageClass: "image8",
            title: "Innovation",
            text: "We embrace forward-thinking ideas and cutting-edge technologies to deliver smarter, more effective solutions across all facets of our operations."
        },
        {
            imageClass: "image9",
            title: "Excellence",
            text: "We are driven by a commitment to excellence, consistently striving to exceed expectations and deliver superior quality in everything we do."
        },
        {
            imageClass: "image10",
            title: "Respect",
            text: "We foster an environment of mutual respect, valuing the diverse perspectives of our clients, employees, and partners."
        },
        {
            imageClass: "image11",
            title: "Authenticity",
            text: "We build genuine, trust-based relationships and stand as a credible, dependable force in the real estate development industry."
        },
        {
            imageClass: "image13",
            title: "Collaboration",
            text: "We champion a culture of teamwork, believing that meaningful collaboration both internally and externally—is key to collective achievement."
        }
    ];


    return (
        <section className="pd-common bg2">
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="text-center">
                        <div className="CfT1 nunito-text">Our Core Values</div>
                        <div className="CfT2">The Guiding Principles That Define Takmeel's <br/>Commitment to Excellence, Integrity, and Innovation</div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="StageBox">
                        <div className="row">
                            {stages.map((stage, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="StageItemBox text-center">
                                        <motion.div
                                            initial={animationVariants[index % animationVariants.length].initial}
                                            whileInView={animationVariants[index % animationVariants.length].whileInView}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.5 }}
                                        >
                                            <div>
                                                <div className={`StageItemImge ${stage.imageClass}`}>&nbsp;</div>
                                                <div className="StageItemT1">{stage.title}</div>
                                                <div className="StageItemT2">{stage.text}</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}