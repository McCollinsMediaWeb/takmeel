"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Slider from "react-slick"
import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Video from "yet-another-react-lightbox/plugins/video"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

export default function CustomerTestimonials({ heading, subheading, testimonials }) {
    const slickRef = useRef(null)
    const [open, setOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const animationVariants = [
        {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        },
        {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
        },
        {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
        },
        {
            hidden: { opacity: 0, rotate: -10 },
            visible: { opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
        },
    ]

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: true, dots: true },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, dots: true },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1, centerMode: true },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true },
            },
        ],
    }

    // Filter for slider (images only) and lightbox (videos only)
    const coverImages = testimonials.map(item => ({
        src: item.poster,
        alt: item.alt
    }));

    const videoSlides = testimonials.map(item => ({
        type: "video",
        sources: [
            {
                src: `/${item.src}`,
                type: "video/mp4",
            },
        ],
        poster: `/${item.poster}`,
        alt: item.alt,
        autoPlay: true,
        loop: false,
        controls: true,
        props: {
            muted: true,
            playsInline: true,
        },
    }));

    return (
        <div className="galleryBoxRow pd-common container-fluid bg2">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="Txt1 nunito-text text-center mb-1">{heading}</div>
                <div className="BlT2 text-uppercase text-center">{subheading}</div>
            </motion.div>

            <Slider ref={slickRef} {...settings}>
                {coverImages.map((item, index) => {
                    const randomVariant = animationVariants[Math.floor(Math.random() * animationVariants.length)]
                    return (
                        <div key={index} onClick={() => { setCurrentIndex(0); setOpen(true); }}>
                            <motion.div
                                variants={randomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="GalleryImageBox position-relative">
                                    <Image
                                        src={`/${item.src}`}
                                        width={2000}
                                        height={1125}
                                        layout="responsive"
                                        alt={item.alt}
                                        loading="lazy"
                                    />
                                    <div className="PlayIconBox AbsPos">
                                        <div className="PlayIcon">&nbsp;</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </Slider>

            <Lightbox
                open={open}
                index={currentIndex}
                close={() => setOpen(false)}
                slides={videoSlides}
                plugins={[Video, Thumbnails, Zoom]}
            />
        </div>
    )
}
