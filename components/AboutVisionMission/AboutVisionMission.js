'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function AboutVisionMission() {
    const t = useTranslations('AboutUs');

    const imageVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const textVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    return (
        <section className="pd-common VisionMissionBox bg2">
            <div className="container">
                <div className="text-center">

                    <div className="row align-items-center">
                        {/* Left Column – Image with Slide from Left */}
                        <div className="col-md-6">
                            <motion.div
                                variants={imageVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src="/aabt2.jpg"
                                    width={1000}
                                    height={562}
                                    layout="responsive"
                                    alt="Takmeel"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>

                        {/* Right Column – Text with Slide from Right */}
                        <div className="col-md-6">
                            <motion.div
                                variants={textVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                                    <motion.div className="" variants={itemVariants}>
                                        <div className="VmT1 text-left mtm1">
                                            {t('beyondBoundaries.title')}<br />
                                            {t('beyondBoundaries.titleLine2')}
                                        </div>
                                    </motion.div>

                                    <motion.div className="" variants={itemVariants}>
                                        <div className="VmT2 mb-0 text-left">
                                            {t('beyondBoundaries.content')}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}