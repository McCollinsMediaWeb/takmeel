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

export default function ProjectDetails3({ mainimage1, data }) {
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
        <div className='position-relative ProductDetail3'>
            <Image
                src={`/${mainimage1}`}
                width={1464}
                height={768}
                layout="responsive"
                alt="Takmeel"
            />

            <div className='DetBoxContent pd-common'>
                <div className='container'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        <div className='text-center Tst1'>Apartment Features</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        <div className='FeatureBoxesWrap'>
                            <div className='FeatureBoxes'>
                                <div className='row'>
                                    {data?.length > 0 ? (
                                        data.map((item) => (
                                            <div className='col-md-4'>
                                                <div className='FeatureBox'>
                                                    <div className={`FeatureBoxIcon FeatureBoxIcon${item.iconNo}`}>&nbsp;</div>
                                                    <div className='FeatureBoxT1'>{item.heading}</div>
                                                    <div className='FeatureBoxT2 nunito-text'>{item.subHeading}</div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            <div className='col-md-4'>
                                                <div className='FeatureBox'>
                                                    <div className='FeatureBoxIcon FeatureBoxIcon1'>&nbsp;</div>
                                                    <div className='FeatureBoxT1'>We Designed Elements</div>
                                                    <div className='FeatureBoxT2 nunito-text'>EVERY ELEMENT DESIGNED TO FIT A
                                                        WELL-ROUNDED LIFESTYLE</div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='FeatureBox'>
                                                    <div className='FeatureBoxIcon FeatureBoxIcon2'>&nbsp;</div>
                                                    <div className='FeatureBoxT1'>Al Barari</div>
                                                    <div className='FeatureBoxT2 nunito-text'>Discover The Vibrant And Family-Friendly
                                                        Environment Of Al Barari Dubai.</div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='FeatureBox'>
                                                    <div className='FeatureBoxIcon FeatureBoxIcon3'>&nbsp;</div>
                                                    <div className='FeatureBoxT1'>WELLROUNDED LIFESTYLE</div>
                                                    <div className='FeatureBoxT2 nunito-text'>Seamlessly Merge Work And Leisure </div>
                                                </div>
                                            </div>

                                            <div className='col-md-4'>
                                                <div className='FeatureBox'>
                                                    <div className='FeatureBoxIcon FeatureBoxIcon4'>&nbsp;</div>
                                                    <div className='FeatureBoxT1'>We Designed Elements</div>
                                                    <div className='FeatureBoxT2 nunito-text'>EVERY ELEMENT DESIGNED TO FIT A
                                                        WELL-ROUNDED LIFESTYLE</div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='FeatureBox'>
                                                    <div className='FeatureBoxIcon FeatureBoxIcon5'>&nbsp;</div>
                                                    <div className='FeatureBoxT1'>Al Barari</div>
                                                    <div className='FeatureBoxT2 nunito-text'>Discover The Vibrant And Family-Friendly
                                                        Environment Of Al Barari Dubai.</div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='FeatureBox'>
                                                    <div className='FeatureBoxIcon FeatureBoxIcon6'>&nbsp;</div>
                                                    <div className='FeatureBoxT1'>WELLROUNDED LIFESTYLE</div>
                                                    <div className='FeatureBoxT2 nunito-text'>Seamlessly Merge Work And Leisure </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                </div>
                            </div>
                        </div>
                    </motion.div >
                </div >
            </div >

        </div >
    );
}
