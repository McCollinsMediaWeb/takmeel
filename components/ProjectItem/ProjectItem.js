'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import TypingText from '../Animations/TypingText';
export default function ProjectItem({ backgroundImage,backgroundImageMobile,text1, text2, text3,tagline , url }) {
    const bgUrl = `url("/${backgroundImage}")`;
    const isDesktop = useMediaQuery("(min-width: 960px)");
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
    return (
        <div className='FullScreenBanner Projects'>
            <motion.div
         animate={{ scale: [1, 1.05, 1] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
         viewport={{ once: true, amount: 0.5 }} 
      >
            {isDesktop && (
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
            )}
            </motion.div>
            <div className='FsBannerContent'>
                <div className='FsBannerContentFlex centerBlock'>
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
                                    {/* <TypingText words={[text2, text2, text2]} speed={200} pause={800} /> */}
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