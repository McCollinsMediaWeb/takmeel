'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
export default function FullScreenBanner({ backgroundImage, backgroundImageMobile, text1, text2, text3, tagline, url }) {
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

                {isDesktop ? (
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
                )}

           
            <div className='FsBannerContent'>
                <div className='FsBannerContentFlex'>
                    <div className='container'>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                        >
                            <div>
                                <div className='Txt1 nunito-text'>{text1}</div>
                                <div className='Txt2 text-uppercase'>{text2}</div>
                                <div className='Txt3 nunito-text'>{text3}</div>
                                <div className='Txt17 nunito-text'>{tagline}</div>
                                <Link
                                    href={["takmeel-al-barari-view-properties", "divine-residencia", "divine-living"].includes(url)
                                        ? `/detail-page/${url}`
                                        : '/detail-page'}
                                    className='Link1 hover1'
                                >
                                    Explore Property
                                </Link>

                                {/* <Link href={`/detail-page/${url}`} className='Link1 hover1'>Explore Property</Link> */}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}