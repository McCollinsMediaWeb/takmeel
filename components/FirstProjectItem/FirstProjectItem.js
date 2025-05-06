"use client";

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import useMediaQuery from "../hooks/useMediaQuery"

export default function FirstProjectItem({
    backgroundImage,
    backgroundImageMobile,
    text1,
    text2,
    text3,
    tagline,
    url,
    projectStatus,
    backgroundVideo = null
}) {
    const containerRef = useRef(null)
    const isDesktop = useMediaQuery("(min-width: 960px)")


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
        <div className="FullScreenBanner Projects">
            {/* <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {isDesktop && <Image src={`/${backgroundImage}`} width={1338} height={714} layout="responsive" alt="Takmeel" />}
                {!isDesktop && (
                    <Image src={`/${backgroundImageMobile}`} width={697} height={768} layout="responsive" alt="Takmeel" />
                )}
            </motion.div> */}

            {backgroundVideo ? (
                <video
                    src={`/${backgroundVideo}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    style={{ width: '100%' }}
                />
            ) : (
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {isDesktop ? (
                        <Image
                            src={`/${backgroundImage}`}
                            width={1338}
                            height={714}
                            layout="responsive"
                            alt="Takmeel"
                            loading="lazy"
                        />
                    ) : (
                        <Image
                            src={`/${backgroundImageMobile}`}
                            width={697}
                            height={768}
                            layout="responsive"
                            alt="Takmeel"
                            loading="lazy"
                        />
                    )}
                </motion.div>
            )}



            <div className="FsBannerContent">
                <div className="FsBannerContentFlex centerBlock">
                    <div className="container">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div>
                                {projectStatus && (
                                    <motion.div className="Txt1" variants={itemVariants}>
                                        <div>
                                            <span className="PrStatus">{projectStatus}</span>
                                        </div>
                                    </motion.div>
                                )}
                                <motion.div className="Txt1" variants={itemVariants}>
                                    {text1}
                                </motion.div>

                                <motion.div className="Txt2 text-uppercase" variants={itemVariants}>
                                    {text2}
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <motion.div
                                        className="Txt3 nunito-text"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{
                                            duration: 2,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {text3}
                                    </motion.div>
                                </motion.div>
                                <motion.div className="" variants={itemVariants}>
                                    <motion.div
                                        className="Txt17 nunito-text"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{
                                            duration: 2,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {tagline}
                                    </motion.div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Link href={`/${url}`} className="Link1 hover1">
                                        View projects
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

