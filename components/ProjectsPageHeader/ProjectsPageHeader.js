'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import Image from "next/image";
// import p1 from "../../public/p1.jpg"
// import p2 from "../../public/p2.jpg"
// import p3 from "../../public/p3.jpg"
// import p4 from "../../public/p4.jpg"

import p1 from "../../public/Takmeel-Al-Barrari-View/Majan 03.jpg";
import p2 from "../../public/k1.jpg"
import p3 from "../../public/k2.jpg"
import p4 from "../../public/k8.jpg"
import p5 from "../../public/k4.jpg"
import p6 from "../../public/k5.jpg"
import p7 from "../../public/k6.jpg"
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function ProjectsPageHeader() {
    const t = useTranslations('Projects');

    const sliderRef = useRef(null);
    const slickRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        // Set width on all elements with the class 'screenWidth'
        const elements = document.querySelectorAll('.screenWidth');
        elements.forEach((el) => {
            el.style.width = `${screenWidth}px`;
        });
    }, []);

    useEffect(() => {
        const updateHeights = () => {
            const header = document.querySelector('header');
            const headerHeight = header?.offsetHeight || 0;
            const windowHeight = window.innerHeight;
            const availableHeight = windowHeight - headerHeight;

            const elements = document.querySelectorAll('.ScreenHeight');
            elements.forEach((el) => {
                el.style.height = `${availableHeight}px`;
            });
        };

        updateHeights();
        window.addEventListener('resize', updateHeights);

        return () => window.removeEventListener('resize', updateHeights);
    }, []);

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
        slidesToShow: 4,
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
        // beforeChange: () => {
        //     if (manualTrigger) {
        //         setSpeed(500); // fast manual transition
        //         setManualTrigger(false);

        //         // Restore autoplay speed shortly after
        //         setTimeout(() => setSpeed(9000), 100);
        //     }
        // },
        beforeChange: () => {
            if (manualTrigger) {
                setManualTrigger(false);
                // Revert back to slow scroll shortly after manual interaction
                setTimeout(() => setSpeed(9000), 300); // keep enough delay to complete scroll
            }
        },
    };


    return (
        <section className='PageHeaderTp1 custom-section-flexible'>
            <div className="w100">
                <div className='container custom-container-flexible'>
                    <div className='PageHdContent text-center'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.5 }} // triggers when 50% of it is in view
                        >
                            <div className='HdT1 nunito-text'>{t('subTitle')}</div>
                            <div className='HdT2'>
                                {t('title')}<br />
                                {t('titleLine2')}
                            </div>
                            <div className="FtrProperties" ref={sliderRef}>
                                <Slider ref={slickRef} {...settings}>
                                    {/* <div>
                                        <Link className="no-hover-color" href="/detail-page/takmeel-al-barari-view-properties">
                                            <div className="FtrProject">
                                                <div className="ProjectImage">
                                                    <Image
                                                        src={p1}
                                                        width={297}
                                                        height={166}
                                                        layout="responsive"
                                                        alt="Takmeel"
                                                    />
                                                </div>
                                                <div className="ProjectDetails text-center">
                                                    <div className="PT1">Divine Al Barari</div>
                                                    <div className="PT2">Majan, Dubai</div>
                                                </div>
                                            </div>
                                        </Link>

                                    </div> */}
                                    <div>
                                        <Link className="no-hover-color" href="/detail-page/divine-residencia">
                                            <div className="FtrProject">
                                                <div className="ProjectImage">
                                                    <Image
                                                        src={p2}
                                                        width={297}
                                                        height={166}
                                                        layout="responsive"
                                                        alt="Takmeel"
                                                    />
                                                </div>
                                                <div className="ProjectDetails text-center">
                                                    <div className="PT1">{t('properties.slider1.title')}</div>
                                                    <div className="PT2">{t('properties.slider1.subTitle')}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="no-hover-color" href="/detail-page/divine-living">
                                            <div className="FtrProject">
                                                <div className="ProjectImage">
                                                    <Image
                                                        src={p3}
                                                        width={297}
                                                        height={166}
                                                        layout="responsive"
                                                        alt="Takmeel"
                                                    />
                                                </div>
                                                <div className="ProjectDetails text-center">
                                                    <div className="PT1">{t('properties.slider2.title')}</div>
                                                    <div className="PT2">{t('properties.slider2.subTitle')}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="no-hover-color" href="/detail-page/divine-residences">
                                            <div className="FtrProject">
                                                <div className="ProjectImage">
                                                    <Image
                                                        src={p4}
                                                        width={297}
                                                        height={166}
                                                        layout="responsive"
                                                        alt="Takmeel"
                                                    />
                                                </div>
                                                <div className="ProjectDetails text-center">
                                                    <div className="PT1">{t('properties.slider3.title')}</div>
                                                    <div className="PT2">{t('properties.slider3.subTitle')}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="no-hover-color" href="/detail-page/meydan-racecourse-mansion">
                                            <div className="FtrProject">
                                                <div className="ProjectImage">
                                                    <Image
                                                        src={p5}
                                                        width={297}
                                                        height={166}
                                                        layout="responsive"
                                                        alt="Takmeel"
                                                    />
                                                </div>
                                                <div className="ProjectDetails text-center">
                                                    <div className="PT1">{t('properties.slider4.title')}</div>
                                                    <div className="PT2">{t('properties.slider4.subTitle')}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="no-hover-color" href="/detail-page/golf-view-living-apartments">
                                            <div className="FtrProject">
                                                <div className="ProjectImage">
                                                    <Image
                                                        src={p6}
                                                        width={297}
                                                        height={166}
                                                        layout="responsive"
                                                        alt="Takmeel"
                                                    />
                                                </div>
                                                <div className="ProjectDetails text-center">
                                                    <div className="PT1">{t('properties.slider5.title')}</div>
                                                    <div className="PT2">{t('properties.slider5.subTitle')}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div>
                                        <Link className="no-hover-color" href="/detail-page/golf-view-living-villas">
                                            <div className="FtrProject">
                                                <div className="ProjectImage">
                                                    <Image
                                                        src={p7}
                                                        width={297}
                                                        height={166}
                                                        layout="responsive"
                                                        alt="Takmeel"
                                                    />
                                                </div>
                                                <div className="ProjectDetails text-center">
                                                    <div className="PT1">{t('properties.slider6.title')}</div>
                                                    <div className="PT2">{t('properties.slider6.subTitle')}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>




                                </Slider>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}