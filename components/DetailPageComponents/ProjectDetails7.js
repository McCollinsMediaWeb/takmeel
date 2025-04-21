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

export default function ProjectDetails7({mapimage}) {
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
        <div className='position-relative pd-common'>

            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                >
                   <div className='LocationRowWrap'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="BlT1 nunito-text text-uppercase">Takmeel Al Barari Properties</div>
                            <div className="BlT2 text-uppercase">EFFORTLESS ACCESS<br/>
                            To All Corners Of The City​</div>
                            <div>
                                <div class="VmT5 nunito-text">3 MINUTES Hessa Street</div>
                            </div>
                            <div>
                                <div class="VmT5 nunito-text">5 MINUTES Sheikh Mohammed Bin Zayed Rd</div>
                            </div>
                            <div>
                                <div class="VmT5 nunito-text">8 MINUTES Dubai Sport City</div>
                            </div>
                            <div>
                                <div class="VmT5 nunito-text">8 Minutes From Dubai Hills Mall</div>
                            </div>
                            <div>
                                <div class="VmT5 nunito-text">25 MINUTES DUBAI INTERNATIONAL AIRPORT</div>
                            </div>
                            <div>
                                <div class="VmT5 nunito-text">20 MINUTES Marina Beach</div>
                            </div>
                            <div>
                                <div class="VmT5 nunito-text">20 MINUTES Burj Khalifa</div>
                            </div>
                            
                        </div>
                        <div className='col-md-6'>
                            <div className='MapImageBox'>
                                <Image
                                                                                                src={`/${mapimage}`}
                                                                                                width={719}
                                                                                                height={509}
                                                                                                layout="responsive"
                                                                                                alt="Takmeel"
                                                                                            />
                            </div>
                        </div>
                    </div>
                   </div>
                </motion.div>

            </div>

        </div>
    );
}
