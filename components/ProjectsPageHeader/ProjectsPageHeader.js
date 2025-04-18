'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Slider from "react-slick";
import Image from "next/image";
import p1 from "../../public/p1.jpg"
import p2 from "../../public/p2.jpg"
import p3 from "../../public/p3.jpg"
import p4 from "../../public/p4.jpg"


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
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
                    centerMode:true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode:true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:true
                }
            }
        ]
    };


    return (
        <section className='PageHeaderTp1 screenWidth ScreenHeight'>
            <div className="w100">
                <div className='container'>
                    <div className='PageHdContent text-center'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
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
                                                <div className="PT1">Divine Residencia</div>
                                                <div className="PT2">Dubai Studio City</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
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
                                                <div className="PT2">Dubai Studio City</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
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
                                                <div className="PT1">Divine Residencia</div>
                                                <div className="PT2">Dubai Studio City</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
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
                                                <div className="PT1">Divine Residencia</div>
                                                <div className="PT2">Dubai Studio City</div>
                                            </div>
                                        </div>
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