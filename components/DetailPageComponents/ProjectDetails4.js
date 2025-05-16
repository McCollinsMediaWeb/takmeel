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
import Slider from "react-slick";
import image1 from "../../public/as1.jpg"
import image2 from "../../public/as2.jpg"

export default function ProjectDetails4({ text1, text2, text3, GalleryImagesWithNames }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);
    const sliderRef = useRef(null);
    const slickRef = useRef(null);
    const [inView, setInView] = useState(false);

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


    // useEffect(() => {
    //     if (inView && slickRef.current) {
    //         slickRef.current.slickPlay();
    //     }
    // }, [inView]);

    // useEffect(() => {
    //     if (slickRef.current) {
    //         slickRef.current.slickPause();
    //     }
    // }, []);

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

    var settings = {
        dots: true,
        speed: 8000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 0,
        CssEase: 'linear',         // Time between slides in milliseconds
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

    return (
        <div className='position-relative pd-common bg2'>

            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                >
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="BlT1 nunito-text text-uppercase">{text1}</div>
                            <div className="BlT2 text-uppercase">{text2}​</div>
                            <div className="BlT3">{text3}</div>
                        </div>
                        {GalleryImagesWithNames?.length > 0 && (
                            <div className='col-md-12 PrDetSliderBox' ref={sliderRef}>
                                <Slider ref={slickRef} {...settings}>
                                    {GalleryImagesWithNames.map((img, index) => (
                                        <div key={index} className='AbSliderItem' onClick={() => setOpen(true)}>
                                            <div className='ImageBox position-relative ImageWithTextBox'>
                                                <Image
                                                    src={`/${img.src}`}
                                                    width={698}
                                                    height={510}
                                                    layout="responsive"
                                                    alt="Takmeel"
                                                />
                                                <div className='ImageTlBox'>{img?.title}</div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                                <Lightbox
                                    open={open}
                                    close={() => setOpen(false)}
                                    plugins={[Video, Thumbnails, Zoom]}
                                    slides={
                                        GalleryImagesWithNames.map((img) => ({
                                            src: `/${img.src}`,
                                        }))
                                    }
                                />
                            </div>
                        )}



                    </div>
                </motion.div>

            </div>

        </div>
    );
}
