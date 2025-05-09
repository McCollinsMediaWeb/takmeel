// 'use client';

// import Link from 'next/link';
// import { motion } from "framer-motion";
// import Image from "next/image";
// import useMediaQuery from "../hooks/useMediaQuery";
// import TypingText from '../Animations/TypingText';
// export default function ProjectItem({ backgroundImage, backgroundImageMobile, text1, text2, text3, tagline, url, projectStatus }) {
//     const bgUrl = `url("/${backgroundImage}")`;
//     const isDesktop = useMediaQuery("(min-width: 960px)");
//     const containerVariants = {
//         hidden: { opacity: 0, y: 40 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 ease: 'easeOut',
//                 when: 'beforeChildren',
//                 staggerChildren: 0.2,
//             },
//         },
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
//     };
//     return (
//         <div className='FullScreenBanner Projects'>
//             <motion.div
//                 animate={{ scale: [1, 1.05, 1] }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                 viewport={{ once: true, amount: 0.5 }}
//             >
//                 {isDesktop && (
//                     <Image
//                         src={`/${backgroundImage}`}
//                         width={1338}
//                         height={714}
//                         layout="responsive"
//                         alt="Takmeel"
//                     />
//                 )}
//                 {!isDesktop && (
//                     <Image
//                         src={`/${backgroundImageMobile}`}
//                         width={697}
//                         height={768}
//                         layout="responsive"
//                         alt="Takmeel"
//                     />
//                 )}
//             </motion.div>
//             <motion.div
//                 className="LottieBox"
//                 initial={{ scale: 0.5, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.5 }}
//             >
//                 <motion.svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 1920 1080"
//                     width="1920"
//                     height="1080"
//                     style={{
//                         width: "100%",
//                         height: "100%",
//                         transform: "translate3d(0px, 0px, 0px)",
//                         contentVisibility: "visible",
//                     }}
//                     preserveAspectRatio="xMidYMid slice"
//                     initial={{ scale: 0.5, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 1.2, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.5 }}
//                 >
//                     <defs>
//                         <clipPath id="__lottie_element_4">
//                             <rect width="1920" height="1080" x="0" y="0" />
//                         </clipPath>
//                     </defs>
//                     <g clipPath="url(#__lottie_element_4)">
//                         <g
//                             style={{ display: "block" }}
//                             transform="matrix(2.2685699462890625,0,0,2.2685699462890625,315.89569091796875,39.41706085205078)"
//                             opacity="0.6751911926152834"
//                         >
//                             <g
//                                 opacity="1"
//                                 transform="matrix(1,0,0,1,283.7149963378906,279.7969970703125)"
//                             >
//                                 <path
//                                     fill="rgb(255,255,255)"
//                                     fillOpacity="1"
//                                     d=" M-443.5587463378906,326.24810791015625 C-443.5587463378906,326.24810791015625 -171.9290008544922,480.8274230957031 -171.9290008544922,480.8274230957031 C-164.0989990234375,425.2314147949219 -58.40119552612305,215.11109924316406 -1.238194227218628,97.65538787841797 C56.70780563354492,215.11109924316406 158.38278198242188,425.2314147949219 166.2130889892578,480.8274230957031 C166.2130889892578,480.8274230957031 442.46368408203125,312.55322265625 442.46368408203125,312.55322265625 C404.8786926269531,257.74053955078125 107.8816146850586,-418.8755798339844 -4.878383159637451,-657.7035522460938 C-117.63738250732422,-418.8755798339844 -399.708740234375,271.4353942871094 -443.5587463378906,326.24810791015625z"
//                                 />
//                             </g>
//                         </g>
//                     </g>
//                 </motion.svg>

//             </motion.div>

//             <div className='FsBannerContent'>
//                 <div className='FsBannerContentFlex centerBlock'>
//                     <div className='container'>
//                         <motion.div
//                             variants={containerVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, amount: 0.5 }}
//                         >
//                             <div>
//                                 {projectStatus && (
//                                     <motion.div className="Txt1" variants={itemVariants}>
//                                         <div>
//                                             <span className="PrStatus">{projectStatus}</span>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                                 <motion.div className="Txt1" variants={itemVariants}>
//                                     {text1}
//                                 </motion.div>


//                                 <motion.div className="Txt2 text-uppercase" variants={itemVariants}>
//                                     {/* <TypingText words={[text2, text2, text2]} speed={200} pause={800} /> */}
//                                     {text2}
//                                 </motion.div>
//                                 <motion.div variants={itemVariants}>
//                                     <motion.div
//                                         className="Txt3 nunito-text"
//                                         animate={{ opacity: [1, 0.3, 1] }}
//                                         transition={{
//                                             duration: 2,
//                                             ease: 'easeInOut',
//                                         }}
//                                     >
//                                         {text3}
//                                     </motion.div>
//                                 </motion.div>
//                                 <motion.div className="" variants={itemVariants}>
//                                     <motion.div
//                                         className="Txt17 nunito-text"
//                                         animate={{ opacity: [1, 0.3, 1] }}
//                                         transition={{
//                                             duration: 2,
//                                             ease: 'easeInOut',
//                                         }}
//                                     >
//                                         {tagline}
//                                     </motion.div>


//                                 </motion.div>


//                                 <motion.div variants={itemVariants}>
//                                     <Link href={`/detail-page/${url}`} className="Link1 hover1">
//                                         Explore Property
//                                     </Link>
//                                 </motion.div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




// "use client"

// import { useRef, useState, useEffect } from "react"
// import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import useMediaQuery from "../hooks/useMediaQuery"

// export default function ProjectItem({
//     backgroundImage,
//     backgroundImageMobile,
//     text1,
//     text2,
//     text3,
//     tagline,
//     url,
//     projectStatus,
//     backgroundVideo = nul
// }) {
//     const containerRef = useRef(null)
//     const [scrollLocked, setScrollLocked] = useState(false)
//     const [animationComplete, setAnimationComplete] = useState(false)
//     const [initialScrollY, setInitialScrollY] = useState(0)
//     const isDesktop = useMediaQuery("(min-width: 960px)")
//     const pathname = usePathname()

//     const isSpecialPage = pathname === "/takmeel-al-barari-view-properties" || url === "takmeel-al-barari-view-properties"

//     useEffect(() => {
//         if (isSpecialPage) {
//             setInitialScrollY(window.scrollY)
//             setScrollLocked(true)
//             document.body.style.overflow = "hidden"
//         }

//         return () => {
//             document.body.style.overflow = ""
//         }
//     }, [isSpecialPage])



//     const { scrollY } = useScroll()

//     const scrollProgress = useTransform(scrollY, [initialScrollY, initialScrollY + 300], [0, 1])

//     const svgScale = useTransform(scrollProgress, [0, 1], [0.5, 1])
//     const svgOpacity = useTransform(scrollProgress, [0, 0.3, 1], [0, 0.6, 1])

//     useMotionValueEvent(scrollProgress, "change", (latest) => {
//         if (!isSpecialPage) return

//         if (latest >= 1 && !animationComplete) {
//             setAnimationComplete(true)
//             setScrollLocked(false)
//             document.body.style.overflow = ""
//         } else if (latest < 1 && animationComplete) {
//             setAnimationComplete(false)
//             setScrollLocked(true)
//             document.body.style.overflow = "hidden"
//         }
//     })

//     const containerVariants = {
//         hidden: { opacity: 0, y: 40 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut",
//                 when: "beforeChildren",
//                 staggerChildren: 0.2,
//             },
//         },
//     }

//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//     }

//     return (
//         <div className="FullScreenBanner Projects" ref={containerRef}>
//             <motion.div
//                 animate={{ scale: [1, 1.05, 1] }}
//                 transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//                 viewport={{ once: true, amount: 0.5 }}
//             >
//                 {isDesktop && <Image src={`/${backgroundImage}`} width={1338} height={714} layout="responsive" alt="Takmeel" />}
//                 {!isDesktop && (
//                     <Image src={`/${backgroundImageMobile}`} width={697} height={768} layout="responsive" alt="Takmeel" />
//                 )}
//             </motion.div>

//             {isSpecialPage && (
//                 <motion.div
//                     className="LottieBox"
//                     style={
//                         isSpecialPage
//                             ? {
//                                 scale: svgScale,
//                                 opacity: svgOpacity,
//                             }
//                             : {}
//                     }
//                     initial={!isSpecialPage ? { scale: 0.5, opacity: 0 } : {}}
//                     whileInView={!isSpecialPage ? { scale: 1, opacity: 1 } : {}}
//                     transition={!isSpecialPage ? { duration: 0.8, ease: "easeOut" } : {}}
//                     viewport={!isSpecialPage ? { once: true, amount: 0.5 } : {}}
//                 >
//                     <motion.svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 1920 1080"
//                         width="1920"
//                         height="1080"
//                         style={{
//                             width: "100%",
//                             height: "100%",
//                             transform: "translate3d(0px, 0px, 0px)",
//                             contentVisibility: "visible",
//                         }}
//                         preserveAspectRatio="xMidYMid slice"
//                         initial={!isSpecialPage ? { scale: 0.5, opacity: 0 } : {}}
//                         whileInView={!isSpecialPage ? { scale: 1, opacity: 1 } : {}}
//                         transition={!isSpecialPage ? { duration: 1.2, ease: "easeOut" } : {}}
//                         viewport={!isSpecialPage ? { once: true, amount: 0.5 } : {}}
//                     >
//                         <defs>
//                             <clipPath id="__lottie_element_4">
//                                 <rect width="1920" height="1080" x="0" y="0" />
//                             </clipPath>
//                         </defs>
//                         <g clipPath="url(#__lottie_element_4)">
//                             <g
//                                 style={{ display: "block" }}
//                                 transform="matrix(2.2685699462890625,0,0,2.2685699462890625,315.89569091796875,39.41706085205078)"
//                                 opacity="0.6751911926152834"
//                             >
//                                 <g opacity="1" transform="matrix(1,0,0,1,283.7149963378906,279.7969970703125)">
//                                     <path
//                                         fill="rgb(255,255,255)"
//                                         fillOpacity="1"
//                                         d=" M-443.5587463378906,326.24810791015625 C-443.5587463378906,326.24810791015625 -171.9290008544922,480.8274230957031 -171.9290008544922,480.8274230957031 C-164.0989990234375,425.2314147949219 -58.40119552612305,215.11109924316406 -1.238194227218628,97.65538787841797 C56.70780563354492,215.11109924316406 158.38278198242188,425.2314147949219 166.2130889892578,480.8274230957031 C166.2130889892578,480.8274230957031 442.46368408203125,312.55322265625 442.46368408203125,312.55322265625 C404.8786926269531,257.74053955078125 107.8816146850586,-418.8755798339844 -4.878383159637451,-657.7035522460938 C-117.63738250732422,-418.8755798339844 -399.708740234375,271.4353942871094 -443.5587463378906,326.24810791015625z"
//                                     />
//                                 </g>
//                             </g>
//                         </g>
//                     </motion.svg>
//                 </motion.div>
//             )}

//             <div className="FsBannerContent">
//                 <div className="FsBannerContentFlex centerBlock">
//                     <div className="container">
//                         <motion.div
//                             variants={containerVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, amount: 0.5 }}
//                         >
//                             <div>
//                                 {projectStatus && (
//                                     <motion.div className="Txt1" variants={itemVariants}>
//                                         <div>
//                                             <span className="PrStatus">{projectStatus}</span>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                                 <motion.div className="Txt1" variants={itemVariants}>
//                                     {text1}
//                                 </motion.div>

//                                 <motion.div className="Txt2 text-uppercase" variants={itemVariants}>
//                                     {text2}
//                                 </motion.div>
//                                 <motion.div variants={itemVariants}>
//                                     <motion.div
//                                         className="Txt3 nunito-text"
//                                         animate={{ opacity: [1, 0.3, 1] }}
//                                         transition={{
//                                             duration: 2,
//                                             ease: "easeInOut",
//                                         }}
//                                     >
//                                         {text3}
//                                     </motion.div>
//                                 </motion.div>
//                                 <motion.div className="" variants={itemVariants}>
//                                     <motion.div
//                                         className="Txt17 nunito-text"
//                                         animate={{ opacity: [1, 0.3, 1] }}
//                                         transition={{
//                                             duration: 2,
//                                             ease: "easeInOut",
//                                         }}
//                                     >
//                                         {tagline}
//                                     </motion.div>
//                                 </motion.div>

//                                 <motion.div variants={itemVariants}>
//                                     <Link href={`/detail-page/${url}`} className="Link1 hover1">
//                                         Explore Property
//                                     </Link>
//                                 </motion.div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import useMediaQuery from "../hooks/useMediaQuery"


export default function ProjectItem({
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
    const [startLoop, setStartLoop] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStartLoop(true), 1000); // wait for pop animation to complete
        return () => clearTimeout(timer);
    }, []);

    const variants = {
        slideInUp: {
            y: [100, 0], // slide up from 100px below
            opacity: [0, 1],
            transition: { duration: 1, ease: "easeOut" }
        },
        loop: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };


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
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
        >
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
                    <div>
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
                    </div>
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
                                        <Link href={`/detail-page/${url}`} className="Link1 hover1">
                                            Explore Property
                                        </Link>
                                    </motion.div>
                                    {projectStatus && (
                                        <motion.div className="Txt1" variants={itemVariants}>
                                            <div className="Txt1">
                                                <span className="PrStatus">{projectStatus}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

