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

export default function DetailHero({ backgroundImage, backgroundImageMobile, text1, text2, text3 }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);

    return (
        <div className='FullScreenBanner' onClick={() => setOpen(true)}>
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
                slides={[
                    
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
        </div>
    );
}
