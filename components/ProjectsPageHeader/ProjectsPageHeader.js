'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Slider from "react-slick";
import Image from "next/image";
// import p1 from "../../public/p1.jpg"
// import p2 from "../../public/p2.jpg"
// import p3 from "../../public/p3.jpg"
// import p4 from "../../public/p4.jpg"

import p1 from "../../public/Takmeel-Al-Barrari-View/Majan 03.jpg";
import p2 from "../../public/k1.jpg"
import p3 from "../../public/k2.jpg"
import p4 from "../../public/k3.jpg"
import p5 from "../../public/k4.jpg"
import p6 from "../../public/k5.jpg"
import p7 from "../../public/k6.jpg"
import Link from "next/link";


export default function ProjectsPageHeader() {

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

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        autoplay: true,               // Enables autoplay
        autoplaySpeed: 3500,        // Time between slides in milliseconds
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
        <section className='PageHeaderTp1 custom-section-flexible'>
            <div className="w100">
                <div className='container custom-container-flexible'>
                    <div className='PageHdContent text-center'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.5 }} // triggers when 50% of it is in view
                        >
                            <div className='HdT1 nunito-text'>Projects</div>
                            <div className='HdT2'>
                                Discover Our<br />
                                Featured Properties
                            </div>
                            <div className="FtrProperties">
                                <Slider {...settings}>
                                    <div>
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

                                    </div>
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
                                                    <div className="PT1">Divine Residencia</div>
                                                    <div className="PT2">Dubai Studio City, Dubai</div>
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
                                                    <div className="PT1">Divine Living</div>
                                                    <div className="PT2">Arjan, Dubai</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="no-hover-color" href="/detail-page/divine-residencies">
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
                                                    <div className="PT1">Divine Residences</div>
                                                    <div className="PT2">Dubai</div>
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
                                                    <div className="PT1">Meydan Racecourse Mansion</div>
                                                    <div className="PT2">Dubai</div>
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
                                                    <div className="PT1">Golf View Living Apartments</div>
                                                    <div className="PT2">Ajman</div>
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
                                                    <div className="PT1">Golf View Living Villas</div>
                                                    <div className="PT2">Ajman</div>
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