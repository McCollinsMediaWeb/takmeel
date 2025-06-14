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
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
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
import { useLocale } from 'next-intl';

export default function ProjectDetails1({ text1, text2, text3, GalleryImages }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);
    const sliderRef = useRef(null);
    const slickRef = useRef(null);
    const [inView, setInView] = useState(false);
    const locale = useLocale();


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.5 }
        );

        const currentSlider = sliderRef.current;

        if (currentSlider) {
            observer.observe(currentSlider);
        }

        return () => {
            if (currentSlider) {
                observer.unobserve(currentSlider);
            }
        };
    }, []);


    // useEffect(() => {
    //     if (inView && slickRef.current) {
    //         slickRef.current.slickPlay();
    //     }
    // }, [inView]);

    // useEffect(() => {
    //     if (slickRef.current) {
    //         slickRef.current.slickPause();
    //     }
    // }, []);

    // useEffect(() => {
    //     let timer;
    //     if (inView && slickRef.current) {
    //         timer = setTimeout(() => {
    //             slickRef.current.slickPlay();
    //         }, 2000);
    //     } else {
    //         if (slickRef.current) slickRef.current.slickPause();
    //     }

    //     return () => clearTimeout(timer);
    // }, [inView]);

    const [speed, setSpeed] = useState(9000); // autoplay speed
    const [manualTrigger, setManualTrigger] = useState(false);
    useEffect(() => {
        // const handleArrowClick = () => setManualTrigger(true);
        const handleArrowClick = () => {
            setManualTrigger(true);
            setSpeed(900); // faster for manual
        };

        // const next = document.querySelector(".slick-next");
        // const prev = document.querySelector(".slick-prev");

        // prev.style.display = "none"
        // next.style.display = "none"

        // if (next) next.addEventListener("click", handleArrowClick);
        // if (prev) prev.addEventListener("click", handleArrowClick);

        // Cleanup on unmount
        // return () => {
        //     if (next) next.removeEventListener("click", handleArrowClick);
        //     if (prev) prev.removeEventListener("click", handleArrowClick);
        // };
    }, []);

    var settings = {
        dots: true,
        // speed: speed,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // CssEase: 'linear',
        // cssEase: 'ease-in-out',
        pauseOnHover: true,
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
        ],
        beforeChange: () => {
            if (manualTrigger) {
                setManualTrigger(false);
                // Revert back to slow scroll shortly after manual interaction
                setTimeout(() => setSpeed(9000), 300); // keep enough delay to complete scroll
            }
        },
    };

    // var settings = {
    //     dots: true,
    //     speed: 8000,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     initialSlide: 0,
    //     infinite: true,
    //     // autoplay: true,
    //     autoplaySpeed: 0,
    //     CssEase: 'linear',
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true,
    //                 centerMode: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 initialSlide: 1,
    //                 centerMode: true
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 centerMode: true
    //             }
    //         }
    //     ]
    // };
    // const animationVariants = [
    //     {
    //         hidden: { opacity: 0, y: 50 },
    //         visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    //     },
    //     {
    //         hidden: { opacity: 0, scale: 0.8 },
    //         visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    //     },
    //     {
    //         hidden: { opacity: 0, x: -50 },
    //         visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    //     },
    //     {
    //         hidden: { opacity: 0, rotate: -10 },
    //         visible: { opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
    //     },
    // ];

    return (
        <div className='position-relative pd-common'>

            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='row'>
                        <div className='col-md-12' style={{ textAlign: locale === "ar" ? "right" : undefined }}>
                            <div className="BlT1 nunito-text text-uppercase">{text1}</div>
                            <div className="BlT2 text-uppercase">{text2}​</div>
                            <div className="BlT3">{text3}</div>
                        </div>



                        {GalleryImages?.length > 0 ? (
                            <div className='col-md-12 PrDetSliderBox FxdHgtImage' ref={sliderRef}>
                                <Slider ref={slickRef} {...settings}>
                                    {GalleryImages?.map((img, index) => (
                                        <div className='AbSliderItem' key={index} onClick={() => setOpen(true)}>
                                            <div className='ImageBox'>
                                                <Image
                                                    src={`/${img}`}
                                                    width={893}
                                                    height={601}
                                                    layout="responsive"
                                                    alt="Takmeel"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                                <Lightbox
                                    open={open}
                                    close={() => setOpen(false)}
                                    plugins={[Video, Thumbnails, Zoom]}
                                    slides={
                                        GalleryImages?.map((img) => ({
                                            src: `/${img}`,
                                        }))
                                    }
                                />
                            </div>
                        ) : null}
                    </div>
                </motion.div>

            </div>

        </div>
    );
}
