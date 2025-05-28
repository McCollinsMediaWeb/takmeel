'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import Image from "next/image";

export default function Stages() {
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
            imageClass: "image1",
            title: "Investment",
            text: "Tailored investment plans backed by smart asset management built to deliver lasting value and growth."
        },
        {
            imageClass: "image2",
            title: "Design",
            text: "Innovative designs that redefine modern living, blending style, comfort, and purposeful aesthetics."
        },
        {
            imageClass: "image3",
            title: "Development",
            text: "We create future-ready spaces where creativity meets functionality, designed to inspire and perform."
        },
        {
            imageClass: "image4",
            title: "Sales",
            text: "Understanding customer aspirations to build trust, drive engagement, and close with confidence."
        },
        {
            imageClass: "image5",
            title: "Marketing",
            text: "Strategic storytelling that builds desire, elevates perception, and forges meaningful brand connections."
        },
        {
            imageClass: "image6",
            title: "Delivery",
            text: "Turning vision into reality — we ensure every handover brings confidence, quality, and satisfaction."
        }
    ];


    return (
        <section className="pd-common bg">
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="text-center">
                        <div className="CfT1 nunito-text">Stages of Takmeel Development</div>
                        <div className="CfT2">A Purpose-Driven Journey of Creating Excellence, <br />Shaping Skylines, and Enriching Communities</div>
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