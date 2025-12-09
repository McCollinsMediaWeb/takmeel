
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";

export default function Component4() {
    var settings = {
        dots: false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        pauseOnHover: true,
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
    return (

        <div>
            <div className="comp4">
                <div className="container-fluid-1">
                    <Slider {...settings}>
                        <div>
                            <div className="SldItem">
                                <Image
                                    src="/i1.jpg"
                                    width={1440}
                                    height={768}
                                    alt="Takmeel"
                                    priority
                                    layout="responsive"
                                />
                                <div className="SldItemCnt">
                                    <div>
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.5 }}
                                        >
                                            <div className="Txt5 MbBtm" >GALLERY</div>
                                            <div className="Txt2 text-uppercase" >Where Architecture <br />Meets Inner Calm</div>
                                            <div className="Txt5 " >A Symbol of Balance, Beauty, and Living</div>
                                            <div className="Link4 hover1 toggleForm cursor-pointer">Register Your Intrest</div>
                                        </motion.div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="SldItem">
                                <Image
                                    src="/i2.jpg"
                                    width={1440}
                                    height={768}
                                    alt="Takmeel"
                                    priority
                                    layout="responsive"
                                />
                                <div className="SldItemCnt">
                                    <div>
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.5 }}
                                        >
                                            <div className="Txt5 MbBtm" variants={itemVariants}>GALLERY</div>
                                            <div className="Txt2 text-uppercase" variants={itemVariants}>Where Architecture <br />Meets Inner Calm</div>
                                            <div className="Txt5 " variants={itemVariants}>A Symbol of Balance, Beauty, and Living</div>
                                            <div className="Link4 hover1 toggleForm cursor-pointer" variants={itemVariants}>Register Your Intrest</div>
                                        </motion.div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    );
}