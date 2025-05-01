'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import TypingText from '../Animations/TypingText';
export default function FullScreenBanner({ backgroundImage, backgroundImageMobile, text1, text2, text3, tagline, url, videoPosterDesktop, VideoPosterMobile ,projectStatus}) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

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
    const bgUrl = `url("/${backgroundImage}")`;
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <div className='FullScreenBanner'>

            {/* {isDesktop && (
<Image
src={`/${backgroundImage}`}
width={1338}
height={714}
layout="responsive"
alt="Takmeel"
/>
)}
{!isDesktop && (
<Image
src={`/${backgroundImageMobile}`}
width={697}
height={768}
layout="responsive"
alt="Takmeel"
/>
)} */}

            <div ref={ref} className=''>
                {isDesktop ? (
                    backgroundImage.endsWith(".mp4") ? (
                        inView && (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                width="100%"
                                height="100%"
                                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                                poster={videoPosterDesktop}
                            >
                                <source src={`/${backgroundImage}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )
                    ) : (
                        <motion.div
                            animate={{ scale: [1, 1.10, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Image
                                src={`/${backgroundImage}`}
                                width={1338}
                                height={714}
                                layout="responsive"
                                alt="Takmeel"
                                loading="lazy"
                            />
                        </motion.div>
                    )
                ) : backgroundImageMobile.endsWith(".mp4") ? (
                    inView && (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="100%"
                            height="100%"
                            style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            poster={VideoPosterMobile}
                        >
                            <source src={`/${backgroundImageMobile}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )
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


            {/* {isDesktop ? (
                    backgroundImage.endsWith(".mp4") ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="100%"
                            height="100%"
                            style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        >
                            <source src={`/${backgroundImage}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <motion.div
                animate={{ scale: [1, 1.10, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                        <Image
                            src={`/${backgroundImage}`}
                            width={1338}
                            height={714}
                            layout="responsive"
                            alt="Takmeel"
                        />
                         </motion.div>
                    )
                ) : backgroundImageMobile.endsWith(".mp4") ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        width="100%"
                        height="100%"
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    >
                        <source src={`/${backgroundImageMobile}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Image
                        src={`/${backgroundImageMobile}`}
                        width={697}
                        height={768}
                        layout="responsive"
                        alt="Takmeel"
                    />
                )} */}


            <div className='FsBannerContent HmLinkBox'>
                <div className='FsBannerContentFlex'>
                    <div className='container'>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div>
                                <motion.div className="Txt1 nunito-text" variants={itemVariants}>
                                    {text1}
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
                                <motion.div className="" variants={itemVariants}>
                                    <motion.div
                                        className="Txt17 nunito-text"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{
                                            duration: 2,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        {tagline}
                                    </motion.div>


                                </motion.div>
                                <motion.div className="" variants={itemVariants}>
                                    <motion.div
                                        className="Txt18 nunito-text"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{
                                            duration: 2,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        {projectStatus}
                                    </motion.div>


                                </motion.div>
                                
                                <motion.div variants={itemVariants}>
                                    <Link href={`/detail-page/${url}`} className="Link1 hover1">
                                        Explore Property
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}