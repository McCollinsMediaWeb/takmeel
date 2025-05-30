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
    const [videoLoaded, setVideoLoaded] = useState(false);


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

                <>
                    {!videoLoaded && (
                        <img
                            src="/cover1.jpg" // replace with your placeholder image (e.g., first frame)
                            alt="video preview"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1,
                            }}
                        />
                    )}

                    <video
                        src={`/${backgroundVideo}`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        onCanPlayThrough={() => setVideoLoaded(true)} // when video is ready
                        style={{
                            width: '100%',
                            position: 'relative',
                            zIndex: 0,
                        }}
                    />

                    {/* <video
                    src={`/${backgroundVideo}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    style={{ width: '100%' }}
                /> */}
                </>
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
                                            Crafted for Inspired Living


                                        </motion.div>

                                        <motion.div className="Txt3 nunito-text SmallSizeTxt" variants={itemVariants}>
                                            Where purposeful design and visionary innovation converge to create spaces that inspire, elevate, and redefine modern living.
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

