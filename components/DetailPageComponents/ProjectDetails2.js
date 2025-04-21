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

export default function ProjectDetails2({ mainimage1, mainimage2 }) {
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                >
                    <div className='row align-items-center mb3'>
                        <div className='col-md-6'>
                            <div className='Det2T1 nunito-text'>
                                A haven designed for luxurious living and entertainment. As you enter the ground floor, a double-height entrance lobby greets you, leading to formal living and dining areas exuding sophistication. A spacious family living hall with double height creates an inviting ambiance. The floor also hosts an office, a guest bedroom, a master bedroom, and exquisite kitchens designed for both showcasing culinary skills and everyday convenience.
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Image
                                src={`/${mainimage1}`}
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
                                src={`/${mainimage2}`}
                                width={1338}
                                height={714}
                                layout="responsive"
                                alt="Takmeel"
                            />
                        </div>
                        <div className='col-md-6'>
                            <div className='Det2T1 nunito-text mb'>Ascending to the first floor, discover four master bedrooms adorned with dressing areas and balconies offering panoramic views of the racecourse. A study room and a breakfast kitchen, complemented by a maid’s room, cater to both privacy and convenience.</div>
                            <div className='Det2T1 nunito-text'>The pinnacle of luxury awaits at every step. Every room in this architectural marvel offers an exclusive view of the racecourse, complemented by meticulously designed landscapes that enhance the overall ambiance. The use of natural cut stone and European interior aesthetics, blending Russian elegance with Italian grace, adds an extraordinary touch to each space.</div>
                        </div>

                    </div>
                </motion.div>

            </div>

        </div>
    );
}
