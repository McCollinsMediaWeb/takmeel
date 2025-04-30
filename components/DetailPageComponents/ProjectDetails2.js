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
import image1 from "../../public/abslider1.jpg"
import image2 from "../../public/abslider2.jpg"
import image3 from "../../public/abslider3.jpg"
import image4 from "../../public/abslider3.jpg"

export default function ProjectDetails2({ ThumbImage1,ThumbImage2,text1Heading ,text1Desc,text2Heading ,text2Desc }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        infinite: false,
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
        <div className='position-relative pd-common bg2 ProductDetail2'>
            
            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                >
                    <div className='row align-items-center mb3'>
                        <div className='col-md-6'>
                            <div className='BlT2 text-uppercase'>{text1Heading}</div>
                            <div className='Det2T1'>
                                {text1Desc}
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Image
                                src={`/${ThumbImage1}`}
                                width={1338}
                                height={714}
                                layout="responsive"
                                alt="Takmeel"
                            />
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <Image
                                src={`/${ThumbImage2}`}
                                width={1338}
                                height={714}
                                layout="responsive"
                                alt="Takmeel"
                            />
                        </div>
                        <div className='col-md-6'>
                            <div className='BlT2 text-uppercase mtm'>{text2Heading}</div>
                            <div className='Det2T1'>
                                {text2Desc}
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>

        </div>
    );
}
