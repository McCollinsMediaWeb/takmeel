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

export default function ProjectDetails4() {
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
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="BlT1 nunito-text text-uppercase">Interior</div>
                            <div className="BlT2 text-uppercase">Elevated interiors,
                                exceptional living.​</div>
                            <div className="BlT3">Takmeel properties offer more than just a place to live; they provide an experience of elevated interiors and exceptional living. Each residence is meticulously designed to create spaces that resonate with both luxury and comfort. From carefully selected materials and finishes to thoughtfully planned layouts, every detail is considered to enhance your lifestyle. Takmeel’s commitment to quality ensures that your home is not only aesthetically pleasing but also a haven of tranquility and sophistication, where everyday living becomes an extraordinary experience.</div>
                        </div>
                        <div className='col-md-12 PrDetSliderBox'>
                            <Slider {...settings}>
                                <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                    <div className='ImageBox position-relative ImageWithTextBox'><Image
                                        src={image1}
                                        width={698}
                                        height={510}
                                        layout="responsive"
                                        alt="Takmeel"
                                    />
                                    <div className='ImageTlBox'>Living Room</div>
                                    </div>

                                </div>
                                <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                    <div className='ImageBox position-relative ImageWithTextBox'><Image
                                        src={image2}
                                        width={698}
                                        height={510}
                                        layout="responsive"
                                        alt="Takmeel"
                                    />
                                    <div className='ImageTlBox'>Kitchen</div>
                                    </div>

                                </div>
                                <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                    <div className='ImageBox position-relative ImageWithTextBox'><Image
                                        src={image1}
                                        width={698}
                                        height={510}
                                        layout="responsive"
                                        alt="Takmeel"
                                    />
                                    <div className='ImageTlBox'>Living Room</div>
                                    </div>

                                </div>
                                <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                    <div className='ImageBox position-relative ImageWithTextBox'><Image
                                        src={image2}
                                        width={698}
                                        height={510}
                                        layout="responsive"
                                        alt="Takmeel"
                                    />
                                    <div className='ImageTlBox'>Kitchen</div>
                                    </div>

                                </div>
                                <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                    <div className='ImageBox position-relative ImageWithTextBox'><Image
                                        src={image1}
                                        width={698}
                                        height={510}
                                        layout="responsive"
                                        alt="Takmeel"
                                    />
                                    <div className='ImageTlBox'>Living Room</div>
                                    </div>

                                </div>
                                <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                    <div className='ImageBox position-relative ImageWithTextBox'><Image
                                        src={image2}
                                        width={698}
                                        height={510}
                                        layout="responsive"
                                        alt="Takmeel"
                                    />
                                    <div className='ImageTlBox'>Kitchen</div>
                                    </div>

                                </div>
                            </Slider>
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                plugins={[Video, Thumbnails, Zoom]} // ✅ Include Zoom
                                slides={[

                                    {
                                        type: "video",
                                        width: 1920,
                                        height: 1080,
                                        poster: "as1.jpg",
                                        autoPlay: true,
                                        loop: false,
                                        controls: true,
                                        sources: [
                                            {
                                                src: "/video.mp4",
                                                type: "video",
                                            },
                                        ],
                                    },
                                    { src: "/as1.jpg" },
                                    { src: "/as2.jpg" },
                                    { src: "/as1.jpg" },
                                    { src: "/as2.jpg" },
                                    { src: "/as1.jpg" },
                                    { src: "/as2.jpg" },
                                    { src: "/as1.jpg" },
                                    { src: "/as2.jpg" },
                                ]}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    );
}
