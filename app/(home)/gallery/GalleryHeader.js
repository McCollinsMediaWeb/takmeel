"use client";

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import useMediaQuery from "../../../components/hooks/useMediaQuery"

export default function GalleryHeader({
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


    const [phase, setPhase] = useState("initial") // 'initial' -> 'transition' -> 'final'

    useEffect(() => {
        const timer = setTimeout(() => {
            setPhase("transition") // begin fade-out
            setTimeout(() => {
                setPhase("final") // show full content
            }, 1000) // wait for fade-out to finish
        }, 4000) // 4s display of 'Takmeel'

        return () => clearTimeout(timer)
    }, [])





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
        <div className="FullScreenBanner Projects VideoD">
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
                            animate="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div>
                                {projectStatus && (
                                    <motion.div className="Txt1" variants={itemVariants}>
                                        <div><span className="PrStatus">{projectStatus}</span></div>
                                    </motion.div>
                                )}

                                {/* PHASE 1: Only show 'Takmeel' */}
                                {phase === "initial" && (
                                    <motion.div
                                        key="initial-text2"
                                        className="Txt2 text-uppercase TxtBig"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        Our Gallery
                                    </motion.div>
                                )}

                                {/* PHASE 2: Fade-out animation */}
                                {phase === "transition" && (
                                    <motion.div
                                        key="fade-out-text2"
                                        className="Txt2 text-uppercase TxtBig"
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        Our Gallery
                                    </motion.div>
                                )}

                                {/* PHASE 3: Show rest of content with new title */}
                                {phase === "final" && (
                                    <>
                                        <motion.div className="Txt1" variants={itemVariants}>
                                            {text1}
                                        </motion.div>

                                        <motion.div className="Txt2 text-uppercase" variants={itemVariants}>
                                        ELEVATED LIVING, CAPTURED IN FRAME
                                        </motion.div>

                                        <motion.div className="Txt3 nunito-text SmallSizeTxt" variants={itemVariants}>
                                        Step into a visual journey through Takmeel  where architectural artistry meets natural beauty. Each image reflects a commitment to design excellence, serene living, and a lifestyle beyond the ordinary. Discover the moments, moods, and masterpieces that define our vision.
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </div>
    )
}

