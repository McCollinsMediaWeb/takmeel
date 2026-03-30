'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useInView } from 'react-intersection-observer';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { useLocale, useTranslations } from 'next-intl';

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
    videoPosterDesktop = null,
    videoPosterMobile = null,
    projectStatus,
    placeholderImage,
    vrLink = null
}) {
    const t = useTranslations('Properties');
    const locale = useLocale();
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
                <div ref={ref}>
                    {isDesktop ? (
                        backgroundImage.endsWith('.mp4') ? (
                            inView && (
                                <>
                                    {!videoLoaded && (
                                        <img
                                            src={videoPosterDesktop ? videoPosterDesktop : placeholderImage} // fallback image (can be first frame or custom)
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
                                        // src={videoPosterMobile ? videoPosterMobile : "/abslider3.jpg"}
                                        src={videoPosterMobile ? videoPosterMobile : placeholderImage}
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

                {/* <div className="DetSlContentBox">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="row align-items-center">
                                <div className="col-md-7" style={{ textAlign: locale === "ar" && isDesktop ? "right" : undefined }}>
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
                                                        <span className="PrStatus">{t('soldOut')}</span>
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
                                                <a href={brochureLink} download className='hover1' target="_blank" rel="noopener noreferrer">
                                                    {t('downloadBrochure')}
                                                </a>

                                            )}

                                            {vrLink !== null && (
                                                <a href={vrLink} className='hover1' target="_blank" rel="noopener noreferrer">
                                                    {t('vrTour')}
                                                </a>
                                            )}
                                            {masterPlanLink && (
                                                <a href={masterPlanLink} className='hover1' target="_blank" rel="noopener noreferrer">
                                                    {t('downloadFactsheet')}
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
                    </div>
                </div> */}
            </div>

        </>
    );
}
