

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
import Slider from "react-slick";

export default function GalleryRow({ text1, GalleryImages }) {

    const slickRef = useRef(null);
    const sliderRef = useRef(null);
    const [inView, setInView] = useState(false);
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
    ];
    const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
    var settings = {
        dots: true,
        speed: 6000,
        slidesToShow: 2,
        slidesToScroll: 3,
        initialSlide: 0,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.5 }
        );

        const currentSlider = sliderRef.current;

        if (currentSlider) {
            observer.observe(currentSlider);
        }

        return () => {
            if (currentSlider) {
                observer.unobserve(currentSlider);
            }
        };
    }, []);

    useEffect(() => {
        let timer;
        if (inView && slickRef.current) {
            // Start autoplay after 2 seconds delay
            timer = setTimeout(() => {
                slickRef.current.slickPlay();
            }, 2000);
        } else {
            // If out of view, pause autoplay immediately
            if (slickRef.current) slickRef.current.slickPause();
        }

        // Clear timer on cleanup to avoid memory leaks
        return () => clearTimeout(timer);
    }, [inView]);


    return (
        <div className="galleryBoxRow pd-common container-fluid bg2">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} // triggers when 50% of it is in view
            >
                <div className="Txt1 nunito-text text-center mb-1">TAKMEEL</div>
                <div className="BlT2 text-uppercase text-center">{text1}</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} // triggers when 50% of it is in view
            >
            <div ref={sliderRef} >
                <Slider ref={slickRef} {...settings}>
                    {GalleryImages?.map((img, index) => {
                        const randomVariant = animationVariants[Math.floor(Math.random() * animationVariants.length)];
                        return (
                            <div key={index} className="" onClick={() => setOpen(true)}>
                                
                                    <div className="GalleryImageBox">
                                        <Image
                                            src={`/${img}`}
                                            width={2000}
                                            height={1125}
                                            layout="responsive"
                                            alt="Takmeel"
                                            loading="lazy"
                                        />
                                    </div>
                            </div>
                        );
                    })}


                </Slider>
            </div>
            </motion.div>
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
    )
}

