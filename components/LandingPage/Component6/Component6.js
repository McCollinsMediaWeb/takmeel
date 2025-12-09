'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Slider from "react-slick";
import { useLocale } from 'next-intl';

export default function Component6({ text1, text2, text3, GalleryImages }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);
    const sliderRef = useRef(null);
    const slickRef = useRef(null);
    const [inView, setInView] = useState(false);
    const locale = useLocale();


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

    const [speed, setSpeed] = useState(9000); // autoplay speed
    const [manualTrigger, setManualTrigger] = useState(false);
    useEffect(() => {
        const handleArrowClick = () => {
            setManualTrigger(true);
            setSpeed(900);
        };

        
    }, []);

    var settings = {
        dots: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        pauseOnHover: true,
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
        ],
        beforeChange: () => {
            if (manualTrigger) {
                setManualTrigger(false);
                setTimeout(() => setSpeed(9000), 300); 
            }
        },
    };

  

    return (
        <div className='position-relative pd-common comp6'>

            <div className='container1'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='row'>
                        {GalleryImages?.length > 0 ? (
                            <div className='col-md-12 PrDetSliderBox FxdHgtImage' ref={sliderRef}>
                                <Slider ref={slickRef} {...settings}>
                                    {GalleryImages?.map((img, index) => (
                                        <div className='AbSliderItem' key={index} onClick={() => setOpen(true)}>
                                            <div className='ImageBox'>
                                                <Image
                                                    src={`/${img}`}
                                                    width={893}
                                                    height={601}
                                                    layout="responsive"
                                                    alt="Takmeel"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

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
                        ) : null}
                    </div>
                </motion.div>

            </div>

        </div>
    );
}
