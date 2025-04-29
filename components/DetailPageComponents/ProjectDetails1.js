// 'use client';

// import Link from 'next/link';
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import useMediaQuery from "../hooks/useMediaQuery";

// import Lightbox from "yet-another-react-lightbox";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Video from "yet-another-react-lightbox/plugins/video";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";

// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
// import Slider from "react-slick";
// import image1 from "../../public/abslider1.jpg"
// import image2 from "../../public/abslider2.jpg"
// import image3 from "../../public/abslider3.jpg"
// import image4 from "../../public/abslider3.jpg"

// export default function ProjectDetails1({ text1, text2, text3, GalleryImages }) {
//     const isDesktop = useMediaQuery("(min-width: 960px)");
//     const [open, setOpen] = useState(false);
//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 0,
//         infinite: false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                     centerMode: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1,
//                     centerMode: true
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     centerMode: true
//                 }
//             }
//         ]
//     };

//     return (
//         <div className='position-relative pd-common'>

//             <div className='container'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.5 }}
//                 >
//                     <div className='row'>
//                         <div className='col-md-12'>
//                             <div className="BlT1 nunito-text text-uppercase">{text1}</div>
//                             <div className="BlT2 text-uppercase">{text2}​</div>
//                             <div className="BlT3">{text3}</div>
//                         </div>
//                         <div className='col-md-12 PrDetSliderBox'>
//                             <Slider {...settings}>

//                                 <div className='AbSliderItem' onClick={() => setOpen(true)}>
//                                     <div className='ImageBox'><Image
//                                         src={image1}
//                                         width={893}
//                                         height={601}
//                                         layout="responsive"
//                                         alt="Takmeel"
//                                     /></div>

//                                 </div>
//                                 <div className='AbSliderItem' onClick={() => setOpen(true)}>
//                                     <div className='ImageBox'><Image
//                                         src={image2}
//                                         width={893}
//                                         height={601}
//                                         layout="responsive"
//                                         alt="Takmeel"
//                                     /></div>

//                                 </div>
//                                 <div className='AbSliderItem' onClick={() => setOpen(true)}>
//                                     <div className='ImageBox'><Image
//                                         src={image3}
//                                         width={893}
//                                         height={601}
//                                         layout="responsive"
//                                         alt="Takmeel"
//                                     /></div>

//                                 </div>
//                                 <div className='AbSliderItem' onClick={() => setOpen(true)}>
//                                     <div className='ImageBox'><Image
//                                         src={image1}
//                                         width={893}
//                                         height={601}
//                                         layout="responsive"
//                                         alt="Takmeel"
//                                     /></div>

//                                 </div>
//                                 <div className='AbSliderItem' onClick={() => setOpen(true)}>
//                                     <div className='ImageBox'><Image
//                                         src={image2}
//                                         width={893}
//                                         height={601}
//                                         layout="responsive"
//                                         alt="Takmeel"
//                                     /></div>

//                                 </div>
//                                 <div className='AbSliderItem' onClick={() => setOpen(true)}>
//                                     <div className='ImageBox'><Image
//                                         src={image3}
//                                         width={893}
//                                         height={601}
//                                         layout="responsive"
//                                         alt="Takmeel"
//                                     /></div>

//                                 </div>

//                             </Slider>
//                             <Lightbox
//                                 open={open}
//                                 close={() => setOpen(false)}
//                                 plugins={[Video, Thumbnails, Zoom]}
//                                 slides={[

//                                     {
//                                         type: "video",
//                                         width: 1920,
//                                         height: 1080,
//                                         poster: "abslider3.jpg",
//                                         autoPlay: true,
//                                         loop: false,
//                                         controls: true,
//                                         sources: [
//                                             {
//                                                 src: "/video.mp4",
//                                                 type: "video",
//                                             },
//                                         ],
//                                     },
//                                     { src: "/abslider1.jpg" },
//                                     { src: "/abslider2.jpg" },
//                                     { src: "/abslider3.jpg" },
//                                     { src: "/abslider4.jpg" },
//                                     { src: "/main1.jpg" },
//                                     { src: "/main2.jpg" },
//                                     { src: "/main3.jpg" },
//                                     { src: "/main4.jpg" },
//                                 ]}
//                             />

//                         </div>
//                     </div>
//                 </motion.div>

//             </div>

//         </div>
//     );
// }


'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Slider from "react-slick";
import image1 from "../../public/abslider1.jpg"
import image2 from "../../public/abslider2.jpg"
import image3 from "../../public/abslider3.jpg"
import image4 from "../../public/abslider3.jpg"

export default function ProjectDetails1({ text1, text2, text3, GalleryImages }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="BlT1 nunito-text text-uppercase">{text1}</div>
                            <div className="BlT2 text-uppercase">{text2}​</div>
                            <div className="BlT3">{text3}</div>
                        </div>
                        <div className='col-md-12 PrDetSliderBox'>
                            <Slider {...settings}>

                                {GalleryImages?.length > 0 ? (
                                    GalleryImages?.map((img) => (
                                        <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                            <div className='ImageBox'><Image
                                                src={`/${img}`}
                                                width={893}
                                                height={601}
                                                layout="responsive"
                                                alt="Takmeel"
                                            /></div>
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                            <div className='ImageBox'><Image
                                                src={image1}
                                                width={893}
                                                height={601}
                                                layout="responsive"
                                                alt="Takmeel"
                                            /></div>

                                        </div>
                                        <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                            <div className='ImageBox'><Image
                                                src={image2}
                                                width={893}
                                                height={601}
                                                layout="responsive"
                                                alt="Takmeel"
                                            /></div>

                                        </div>
                                        <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                            <div className='ImageBox'><Image
                                                src={image3}
                                                width={893}
                                                height={601}
                                                layout="responsive"
                                                alt="Takmeel"
                                            /></div>

                                        </div>
                                        <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                            <div className='ImageBox'><Image
                                                src={image1}
                                                width={893}
                                                height={601}
                                                layout="responsive"
                                                alt="Takmeel"
                                            /></div>

                                        </div>
                                        <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                            <div className='ImageBox'><Image
                                                src={image2}
                                                width={893}
                                                height={601}
                                                layout="responsive"
                                                alt="Takmeel"
                                            /></div>

                                        </div>
                                        <div className='AbSliderItem' onClick={() => setOpen(true)}>
                                            <div className='ImageBox'><Image
                                                src={image3}
                                                width={893}
                                                height={601}
                                                layout="responsive"
                                                alt="Takmeel"
                                            /></div>

                                        </div>
                                    </>
                                )}



                            </Slider>
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                plugins={[Video, Thumbnails, Zoom]}
                                slides={
                                    GalleryImages?.length > 0
                                        ? GalleryImages.map((img) => ({
                                            src: `/${img}`,
                                        }))
                                        : [
                                            {
                                                type: "video",
                                                width: 1920,
                                                height: 1080,
                                                poster: "abslider3.jpg",
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
                                            { src: "/abslider1.jpg" },
                                            { src: "/abslider2.jpg" },
                                            { src: "/abslider3.jpg" },
                                            { src: "/abslider4.jpg" },
                                            { src: "/main1.jpg" },
                                            { src: "/main2.jpg" },
                                            { src: "/main3.jpg" },
                                            { src: "/main4.jpg" },
                                        ]
                                }
                            />


                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    );
}
