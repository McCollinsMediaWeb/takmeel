'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import SliderImage from "../../public/np1.jpg";
import SliderImagemobile from "../../public/np1mobile.jpg";
import useMediaQuery from "../hooks/useMediaQuery";
export default function HomeBanner2({ backgroundImage, backgroundImageMobile, text1, text2, text3 }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='HeroBanner2Wrap'>
            <div className='container'>
                <Slider {...settings}>
                    <div className='BannerItem'>
                        <div className='FtSliderContent'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
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
                                        width={616}
                                        height={714}
                                        layout="responsive"
                                        alt="Takmeel"
                                    />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}