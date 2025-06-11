'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function OurValues() {
    const t = useTranslations('AboutUs');
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
            title: t('coreValues.lists.item1.title'),
            text: t('coreValues.lists.item1.content')
        },
        {
            imageClass: "image8",
            title: t('coreValues.lists.item2.title'),
            text: t('coreValues.lists.item2.content')
        },
        {
            imageClass: "image9",
            title: t('coreValues.lists.item3.title'),
            text: t('coreValues.lists.item3.content')
        },
        {
            imageClass: "image10",
            title: t('coreValues.lists.item4.title'),
            text: t('coreValues.lists.item4.content')
        },
        {
            imageClass: "image11",
            title: t('coreValues.lists.item5.title'),
            text: t('coreValues.lists.item5.content')
        },
        {
            imageClass: "image13",
            title: t('coreValues.lists.item6.title'),
            text: t('coreValues.lists.item6.content')
        }
    ];


    return (
        <section className="pd-common bg2 OurValuesBox">
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="text-center">
                        <div className="CfT1 nunito-text">{t('coreValues.subTitle')}</div>
                        <div className="CfT2">{t('coreValues.title')} <br />{t('coreValues.titleLine2')}</div>
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