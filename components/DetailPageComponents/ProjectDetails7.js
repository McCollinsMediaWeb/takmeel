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
import MapComponent from '../MapComponent/MapComponent';

export default function ProjectDetails7({ mapimage, text1, text2, landmarks, mapData, mobileMapImage }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };
    var settings = {
        dots: true,
        infinite: false,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2500,
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
        <div className='position-relative pd-common pb-0'>

            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                >
                    <div className='LocationRowWrap'>
                        <div className='row'>
                            {mapimage && (
                                <div className='col-md-12'>
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <div>
                                            <motion.div className="" variants={itemVariants}>
                                                <div className="BlT1A">{text1 ? text1 : "Takmeel Al Barari Properties"}</div>
                                            </motion.div>

                                            <motion.div className="" variants={itemVariants}>
                                                <div
                                                    className="BlT2B text-uppercase"
                                                    dangerouslySetInnerHTML={{ __html: text2 || "EFFORTLESS ACCESS  To All Corners Of The City" }}
                                                ></div>
                                            </motion.div>
                                        </div>
                                    </motion.div>


                                    {/* <div className='row'>
                                    {landmarks?.length > 0 ? (
                                        landmarks.map((line, index) => (
                                            <div key={index} className='col-md-4'>
                                                <div className="VmT5 nunito-text">{line}</div>
                                            </div>
                                        ))
                                    ) : (
                                        <>

                                            <div className='col-md-4'>
                                                <div className="VmT5 nunito-text">3 MINUTES Hessa Street</div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="VmT5 nunito-text">5 MINUTES Sheikh Mohammed Bin Zayed Rd</div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="VmT5 nunito-text">8 MINUTES Dubai Sport City</div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="VmT5 nunito-text">8 Minutes From Dubai Hills Mall</div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="VmT5 nunito-text">25 MINUTES DUBAI INTERNATIONAL AIRPORT</div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="VmT5 nunito-text">20 MINUTES Marina Beach</div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="VmT5 nunito-text">20 MINUTES Burj Khalifa</div>
                                            </div>

                                        </>
                                    )}

                                </div> */}




                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

            </div>
            <div className='MapImageBox'>

                {mapimage ? (

                    isDesktop ? (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div>
                                <motion.div className="" variants={itemVariants}>
                                    <Image
                                        src={`/${mapimage}`}
                                        width={1920}
                                        height={1026}
                                        layout="responsive"
                                        alt="Takmeel"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ) : (

                        <motion.div className="" variants={itemVariants}>
                            <Image
                                src={`/${mobileMapImage}`}
                                width={697}
                                height={768}
                                layout="responsive"
                                alt="Takmeel"
                            />
                        </motion.div>

                    )

                ) : (
                    // <div>
                    //     <motion.div
                    //         variants={containerVariants}
                    //         initial="hidden"
                    //         whileInView="visible"
                    //         viewport={{ once: true, amount: 0.5 }}
                    //     >
                    //         <div>
                    //             <motion.div className="" variants={itemVariants}>
                    //                 <Image
                    //                     src={`newmap1.jpg`}
                    //                     width={1920}
                    //                     height={1026}
                    //                     layout="responsive"
                    //                     alt="Takmeel"
                    //                 />
                    //             </motion.div>
                    //         </div>
                    //     </motion.div>
                    // </div>
                    <MapComponent {...mapData} desktopHeight="100vh" />
                )}


            </div>
        </div>
    );
}
