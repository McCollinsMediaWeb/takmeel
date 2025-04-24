'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom"; // ✅ Add zoom plugin

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function DetailHero({ backgroundImage, backgroundImageMobile, text1, text2, text3, data }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);

    return (
        <div className='FullScreenBanner DetHero position-relative'>
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {isDesktop ? (
                    <Image
                        src={`/${backgroundImage}`}
                        width={1338}
                        height={714}
                        layout="responsive"
                        alt="Takmeel"
                    />
                ) : (
                    <Image
                        src={`/${backgroundImageMobile}`}
                        width={697}
                        height={768}
                        layout="responsive"
                        alt="Takmeel"
                    />
                )}
            </motion.div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Video, Thumbnails, Zoom]} // ✅ Include Zoom
                slides={data.media || [

                    {
                        type: "video",
                        width: 1920,
                        height: 1080,
                        poster: "abslider3.jpg",
                        autoPlay: true,
                        loop: false,
                        controls: true,
                        sources: [
                            {
                                src: "/video.mp4",
                                type: "video",
                            },
                        ],
                    },
                    { src: "/abslider1.jpg" },
                    { src: "/abslider2.jpg" },
                    { src: "/abslider3.jpg" },
                    { src: "/abslider4.jpg" },
                    { src: "/main1.jpg" },
                    { src: "/main2.jpg" },
                    { src: "/main3.jpg" },
                    { src: "/main4.jpg" },
                ]}
            />
            <div className='DetSlContentBox '>
                <div className='container'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        <div className='text-center'>
                            <div className='PlayIconBox' onClick={() => setOpen(true)}>
                                <div className='PlayIcon'>&nbsp;</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        <div className='row align-items-center'>
                            <div className='col-md-7'>
                                <div className="Txt1 nunito-text">{data ? data.subheading : "Project Showcase"}</div>
                                <div className="Txt2 text-uppercase">{data ? data.heading : "Meydan Racecourse Mansion"}</div>
                                <div className="Txt3 nunito-text">{data ? data.location : "AL Barsha South, Dubai"}</div>
                            </div>
                            <div className='col-md-5'>
                                <div className='ButtonsBox1'>
                                    <a href='#' className='hover1'>Download Brochure</a>
                                    <a href='#' className='hover1'>Download Masterplan</a>
                                    <a href='#' className='toggleForm hover1'>Register Your Interest</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
