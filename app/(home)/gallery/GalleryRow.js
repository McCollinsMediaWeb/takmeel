

"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function GalleryRow({ text1, GalleryImages }) {


    const [open, setOpen] = useState(false);
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

    const animationVariants = [
        {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        },
        {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
        },
        {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        },
        {
            hidden: { opacity: 0, rotate: -10 },
            visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } },
        },
    ];

    return (
        <div className="galleryBoxRow pd-common container-fluid">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
            >
                <div className="Txt1 nunito-text text-center mb-1">TAKMEEL</div>
                <div className="BlT2 text-uppercase text-center">{text1}</div>
            </motion.div>
            <div className="row">
            {GalleryImages?.map((img, index) => {
    const randomVariant = animationVariants[Math.floor(Math.random() * animationVariants.length)];
    return (
        <div key={index} className="col-md-4" onClick={() => setOpen(true)}>
            <motion.div
                variants={randomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <Image
                    src={`/${img}`}
                    width={2000}
                    height={1125}
                    layout="responsive"
                    alt="Takmeel"
                    loading="lazy"
                />
            </motion.div>
        </div>
    );
})}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    plugins={[Video, Thumbnails, Zoom]}
                    slides={
                        GalleryImages?.map((img) => ({
                            src: `/${img}`,
                        }))
                    }
                />

            </div>
        </div>
    )
}

