// 'use client';

// import Link from 'next/link';
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import useMediaQuery from "../hooks/useMediaQuery";
// import { useInView } from 'react-intersection-observer';

// import Lightbox from "yet-another-react-lightbox";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Video from "yet-another-react-lightbox/plugins/video";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";

// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

// export default function DetailHero({ backgroundImage, backgroundImageMobile, text1, text2, text3, GalleryMedia }) {
//     const isDesktop = useMediaQuery("(min-width: 960px)");
//     const [open, setOpen] = useState(false);
//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//     });
//     return (
//         <div className='FullScreenBanner DetHero position-relative'>
//             <div ref={ref}>
//                 {isDesktop ? (
//                     backgroundImage.endsWith(".mp4") ? (
//                         inView && (
//                             <video
//                                 autoPlay
//                                 loop
//                                 muted
//                                 playsInline
//                                 width="100%"
//                                 height="100%"
//                                 style={{ width: "100%", height: "auto", objectFit: "cover" }}
//                             >
//                                 <source src={`/${backgroundImage}`} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         )
//                     ) : (
//                         <motion.div
//                             animate={{ scale: [1, 1.10, 1] }}
//                             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//                             viewport={{ once: true, amount: 0.5 }}
//                         >
//                             <Image
//                                 src={`/${backgroundImage}`}
//                                 width={1338}
//                                 height={714}
//                                 layout="responsive"
//                                 alt="Takmeel"
//                                 loading="lazy"
//                             />
//                         </motion.div>
//                     )
//                 ) : backgroundImageMobile.endsWith(".mp4") ? (
//                     inView && (
//                         <video
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             width="100%"
//                             height="100%"
//                             style={{ width: "100%", height: "auto", objectFit: "cover" }}
//                         >
//                             <source src={`/${backgroundImageMobile}`} type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                     )
//                 ) : (
//                     <Image
//                         src={`/${backgroundImageMobile}`}
//                         width={697}
//                         height={768}
//                         layout="responsive"
//                         alt="Takmeel"
//                         loading="lazy"
//                     />
//                 )}
//             </div>

//             <Lightbox
//                 open={open}
//                 close={() => setOpen(false)}
//                 plugins={[Video, Thumbnails, Zoom]}
//                 slides={GalleryMedia || [

//                     {
//                         type: "video",
//                         width: 1920,
//                         height: 1080,
//                         poster: "abslider3.jpg",
//                         autoPlay: true,
//                         loop: false,
//                         controls: true,
//                         sources: [
//                             {
//                                 src: "/video.mp4",
//                                 type: "video",
//                             },
//                         ],
//                     },
//                     { src: "/abslider1.jpg" },
//                     { src: "/abslider2.jpg" },
//                     { src: "/abslider3.jpg" },
//                     { src: "/abslider4.jpg" },
//                     { src: "/main1.jpg" },
//                     { src: "/main2.jpg" },
//                     { src: "/main3.jpg" },
//                     { src: "/main4.jpg" },
//                 ]}
//             />
//             <div className='DetSlContentBox '>
//                 <div className='container'>
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                         viewport={{ once: true, amount: 0.5 }}
//                     >
//                         <div className='text-center'>
//                             <div className='PlayIconBox' onClick={() => setOpen(true)}>
//                                 <div className='PlayIcon'>&nbsp;</div>
//                             </div>
//                         </div>
//                     </motion.div>
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                         viewport={{ once: true, amount: 0.5 }}
//                     >
//                         <div className='row align-items-center'>
//                             <div className='col-md-7'>

//                                 <div className="Txt1 nunito-text">{text1}</div>
//                                 <div className="Txt2 text-uppercase">{text2}</div>
//                                 <div className="Txt3 nunito-text">{text3}</div>
//                             </div>
//                             <div className='col-md-5'>
//                                 <div className='ButtonsBox1'>
//                                     <a href='#' className='hover1'>Download Brochure</a>
//                                     <a href='#' className='hover1'>Download Masterplan</a>
//                                     <a href='#' className='toggleForm hover1'>Register Your Interest</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useMediaQuery from '../hooks/useMediaQuery';
import { useInView } from 'react-intersection-observer';

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import TypingText from '../Animations/TypingText';
import CatalogueForm from '../ContactForm/CatalogueForm';

export default function DetailHero({
    backgroundImage,
    backgroundImageMobile,
    text1,
    text2,
    text3,
    brochureLink,
    masterPlanLink,
    registerInterest,
    GalleryMedia,
    videoPosterDesktop,
    videoPosterMobile,
    projectStatus,
    placeholderImage
}) {
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    const [videoLoaded, setVideoLoaded] = useState(false);

    const formatSrc = (src) => (src.startsWith('/') ? src : `/${src}`);

    const defaultSlides = [
        {
            type: 'video',
            width: 1920,
            height: 1080,
            // poster: 'abslider3.jpg',
            autoPlay: true,
            loop: false,
            controls: true,
            sources: [
                {
                    src: '/Divine-Residencia-Video.mp4',
                    type: 'video'
                }
            ]
        },
        { src: '/abslider1.jpg' },
        { src: '/abslider2.jpg' },
        { src: '/abslider3.jpg' },
        { src: '/abslider4.jpg' },
        { src: '/main1.jpg' },
        { src: '/main2.jpg' },
        { src: '/main3.jpg' },
        { src: '/main4.jpg' }
    ];

    return (
        <>
            <div className="FullScreenBanner DetHero position-relative">
                {/* <div ref={ref}>
                    {isDesktop ? (
                        backgroundImage.endsWith('.mp4') ? (
                            inView && (
                                <video
                                    autoPlay
                                    poster={videoPosterDesktop}
                                    loop
                                    muted
                                    playsInline
                                    width="100%"
                                    height="100%"
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                >
                                    <source src={formatSrc(backgroundImage)} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        ) : (
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    className={text2 === "Meydan Racecourse Mansion" ? "AlignCenterBottomImage" : ""}
                                    src={formatSrc(backgroundImage)}
                                    width={1338}
                                    height={714}
                                    layout="responsive"
                                    alt="Takmeel"
                                    loading="lazy"
                                />
                            </motion.div>
                        )
                    ) : backgroundImageMobile.endsWith('.mp4') ? (
                        inView && (
                            <video
                                autoPlay
                                poster={videoPosterMobile}
                                loop
                                muted
                                playsInline
                                width="100%"
                                height="100%"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            >
                                <source src={formatSrc(backgroundImageMobile)} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )
                    ) : (
                        <Image
                            src={formatSrc(backgroundImageMobile)}
                            width={697}
                            height={768}
                            layout="responsive"
                            alt="Takmeel"
                            loading="lazy"
                        />
                    )}
                </div> */}
                <div ref={ref}>
                    {isDesktop ? (
                        backgroundImage.endsWith('.mp4') ? (
                            inView && (
                                <>
                                    {!videoLoaded && (
                                        <img
                                            src={placeholderImage} // fallback image (can be first frame or custom)
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
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        onCanPlayThrough={() => setVideoLoaded(true)}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            position: 'relative',
                                            zIndex: 0,
                                        }}
                                    >
                                        <source src={formatSrc(backgroundImage)} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </>
                            )
                        ) : (
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    className={text2 === "Meydan Racecourse Mansion" ? "AlignCenterBottomImage" : ""}
                                    src={formatSrc(backgroundImage)}
                                    width={1338}
                                    height={714}
                                    layout="responsive"
                                    alt="Takmeel"
                                    loading="lazy"
                                />
                            </motion.div>
                        )
                    ) : backgroundImageMobile.endsWith('.mp4') ? (
                        inView && (
                            <>
                                {!videoLoaded && (
                                    <img
                                        src="/abslider3.jpg"
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
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    onCanPlayThrough={() => setVideoLoaded(true)}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        position: 'relative',
                                        zIndex: 0,
                                    }}
                                >
                                    <source src={formatSrc(backgroundImageMobile)} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </>
                        )
                    ) : (
                        <Image
                            src={formatSrc(backgroundImageMobile)}
                            width={697}
                            height={768}
                            layout="responsive"
                            alt="Takmeel"
                            loading="lazy"
                        />
                    )}
                </div>


                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    plugins={[Video, Thumbnails, Zoom]}
                    slides={GalleryMedia && GalleryMedia?.length > 0 ? GalleryMedia : defaultSlides}
                />

                <div className="DetSlContentBox">
                    <div className="container">
                        {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="text-center">
                            <div
                                className="PlayIconBox"
                                onClick={() => setOpen(true)}
                                role="button"
                                aria-label="Open Gallery"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
                            >
                                <div className="PlayIcon">&nbsp;</div>
                            </div>
                        </div>
                    </motion.div> */}

                        {/* {text2 !== "Divine Al Barari" && ( */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <div>

                                            <motion.div className="" variants={itemVariants}>

                                                <motion.div
                                                    className="Txt1 nunito-text"
                                                    animate={{ opacity: [1, 0.3, 1] }}
                                                    transition={{
                                                        duration: 2,
                                                        ease: 'easeInOut',
                                                    }}
                                                >
                                                    {text1}
                                                </motion.div>


                                            </motion.div>

                                            <motion.div className="Txt2 text-uppercase" variants={itemVariants}>
                                                {text2}
                                                {/* <TypingText words={[text2, text2, text2]} speed={200} pause={800} /> */}
                                            </motion.div>
                                            <motion.div variants={itemVariants}>
                                                <motion.div
                                                    className="Txt3 nunito-text"
                                                    animate={{ opacity: [1, 0.3, 1] }}
                                                    transition={{
                                                        duration: 2,
                                                        ease: 'easeInOut',
                                                    }}
                                                >
                                                    {text3}
                                                </motion.div>
                                            </motion.div>
                                            {projectStatus && (
                                                <motion.div
                                                    className="Txt1 nunito-text"
                                                    animate={{ opacity: [1, 0.3, 1] }}
                                                    transition={{
                                                        duration: 2,
                                                        ease: 'easeInOut',
                                                    }}
                                                >
                                                    <div className="Txt1">
                                                        <span className="PrStatus">{projectStatus}</span>
                                                    </div>
                                                </motion.div>
                                            )}

                                        </div>
                                    </motion.div>
                                </div>
                                {(brochureLink || masterPlanLink || registerInterest) && (
                                    <div className='col-md-5'>
                                        <div className='ButtonsBox1'>
                                            {brochureLink && (
                                                // <a href={brochureLink} download className='hover1'>
                                                //     Download Brochure
                                                // </a>

                                                <a onClick={() => setIsOpen(!isOpen)} className='hover1' style={{ cursor: 'pointer' }}>
                                                    Download Brochure
                                                </a>
                                            )}
                                            {masterPlanLink && (
                                                <a href='#' className='hover1'>
                                                    Download Masterplan
                                                </a>
                                            )}
                                            {registerInterest && (
                                                <a href='#' className='toggleForm hover1'>
                                                    Register Your Interest
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </motion.div>
                        {/* )} */}

                    </div>
                </div>
            </div>



            {isOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.6)", display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
                    {/* <div style={{ background: 'white', padding: '20px', borderRadius: '10px', maxWidth: '500px', width: '100%', boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)', textAlign: 'center' }}>
                        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                        <div>
                        </div>
                    </div> */}
                    <CatalogueForm isOpen={isOpen} setIsOpen={setIsOpen} brochureLink={brochureLink} sourcePage={text2} />
                </div>
            )}
        </>
    );
}
