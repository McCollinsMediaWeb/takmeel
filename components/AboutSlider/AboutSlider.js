'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Slider from "react-slick";
import Image from "next/image";
import image1 from "../../public/abslider1.jpg"
import image2 from "../../public/abslider2.jpg"
import image3 from "../../public/abslider3.jpg"
import image4 from "../../public/abslider4.jpg"



export default function AboutSlider() {


    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        infinite: true,
        autoplay: true,               // Enables autoplay
        autoplaySpeed: 2000,          // Time between slides in milliseconds
    
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    };
    
    


    return (
        <section>
            <div className='container'>
                <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.5 }}
                                        >
                <Slider {...settings}>
                    <div className='AbSliderItem'>
                        <div className='ImageBox'><Image
                            src={image1}
                            width={893}
                            height={601}
                            layout="responsive"
                            alt="Takmeel"
                        /></div>

                    </div>
                    <div className='AbSliderItem'>
                        <div className='ImageBox'><Image
                            src={image2}
                            width={893}
                            height={601}
                            layout="responsive"
                            alt="Takmeel"
                        /></div>

                    </div>
                    <div className='AbSliderItem'>
                        <div className='ImageBox'><Image
                            src={image3}
                            width={893}
                            height={601}
                            layout="responsive"
                            alt="Takmeel"
                        /></div>

                    </div>
                    <div className='AbSliderItem'>
                        <div className='ImageBox'><Image
                            src={image4}
                            width={893}
                            height={601}
                            layout="responsive"
                            alt="Takmeel"
                        /></div>

                    </div>
                    <div className='AbSliderItem'>
                        <div className='ImageBox'><Image
                            src={image1}
                            width={893}
                            height={601}
                            layout="responsive"
                            alt="Takmeel"
                        /></div>

                    </div>
                    <div className='AbSliderItem'>
                        <div className='ImageBox'><Image
                            src={image2}
                            width={893}
                            height={601}
                            layout="responsive"
                            alt="Takmeel"
                        /></div>

                    </div>
                    <div className='AbSliderItem'>
                        <div className='ImageBox'><Image
                            src={image3}
                            width={893}
                            height={601}
                            layout="responsive"
                            alt="Takmeel"
                        /></div>

                    </div>
                    <div className='AbSliderItem'>
                        <div className='ImageBox p-0'><Image
                            src={image4}
                            width={893}
                            height={601}
                            layout="responsive"
                            alt="Takmeel"
                        /></div>

                    </div>
                </Slider>
                </motion.div>
            </div>
        </section>
    );
}