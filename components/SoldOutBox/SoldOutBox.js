'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import SlImage1 from "../../public/sl1.jpg"
import SlImage2 from "../../public/sl2.jpg"
export default function SoldOutBox() {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
        <section className='SoldOutBox pd-common'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className='St1'>Sold Out Properties</div>
                            <div className='St2'>Sold, sealed, and a
                                lifetime of satisfaction
                                delivered</div>
                            <div className='St3'>The moment a Takmeel property is sold, a journey of unparalleled service begins. We seal your investment with the assurance of quality craftsmanship and enduring value. </div>
                        </motion.div>
                    </div>
                    <div className='col-md-8'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className='SoldOutSlider'>
                                <Slider {...settings}>
                                    <div>
                                        <div className='SldSliderItem'>
                                            <Image
                                                src={SlImage1}
                                                width={598}
                                                height={311}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                            <div className='SldSliderItemDesc'>
                                                <div className='SlT1'>SOLD OUT</div>
                                                <div className='SlT2'>Divine Residencies – Arjan</div>
                                                <div className='SlT3'>We present to you the elegant new project by Takmeel Development, Divine Residencies Arjan.</div>
                                                <div className='text-right'>
                                                    <Link href="/" className='Link6 hover1'>View Property</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='SldSliderItem'>
                                            <Image
                                                src={SlImage2}
                                                width={598}
                                                height={311}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                            <div className='SldSliderItemDesc'>
                                                <div className='SlT1'>SOLD OUT</div>
                                                <div className='SlT2'>Divine Residencies – Arjan</div>
                                                <div className='SlT3'>We present to you the elegant new project by Takmeel Development, Divine Residencies Arjan.</div>
                                                <div className='text-right'>
                                                    <Link href="/" className='Link6 hover1'>View Property</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='SldSliderItem'>
                                            <Image
                                                src={SlImage1}
                                                width={598}
                                                height={311}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                            <div className='SldSliderItemDesc'>
                                                <div className='SlT1'>SOLD OUT</div>
                                                <div className='SlT2'>Divine Residencies – Arjan</div>
                                                <div className='SlT3'>We present to you the elegant new project by Takmeel Development, Divine Residencies Arjan.</div>
                                                <div className='text-right'>
                                                    <Link href="/" className='Link6 hover1'>View Property</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='SldSliderItem'>
                                            <Image
                                                src={SlImage2}
                                                width={598}
                                                height={311}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                            <div className='SldSliderItemDesc'>
                                                <div className='SlT1'>SOLD OUT</div>
                                                <div className='SlT2'>Divine Residencies – Arjan</div>
                                                <div className='SlT3'>We present to you the elegant new project by Takmeel Development, Divine Residencies Arjan.</div>
                                                <div className='text-right'>
                                                    <Link href="/" className='Link6 hover1'>View Property</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}