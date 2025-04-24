'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Slider from "react-slick";
import Image from "next/image";
// import f1 from "../../public/f1.jpg"
// import f2 from "../../public/f2.jpg"
import f1 from "../../public/person2.jpg"
import f2 from "../../public/person1.jpg"
// import f3 from "../../public/all-team.jpg"
import f3 from '../../public/team-photo.jpg'
import f4 from "../../public/f3.jpg"
import f5 from "../../public/f4.jpg"
import f6 from "../../public/f5.jpg"
export default function Founders() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
    var settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
        <section className="pd-common FoundersBlock bg2">
            <div className="container">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="text-center">
                            <div className="CfT1 nunito-text">Founders</div>
                            <div className="CfT2">The Visionaries Behind Takmeel<br />
                                Shaping the Future of Real Estate</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="FounderSlider">
                            <Slider {...settings}>
                                <div className="FounderItem">
                                    <div className="FounderItemBox">
                                        <div className="FounderImageBox">
                                            <Image
                                                src={f1}
                                                width={416}
                                                height={524}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                        </div>
                                        <div className="FounderDetails">
                                            <div className="FounderName">Mr. Mian Asad Bashir</div>
                                            <div className="FounderPosition">Chairman</div>
                                            <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="FounderItem">
                                    <div className="FounderItemBox">
                                        <div className="FounderImageBox">
                                            <Image
                                                src={f2}
                                                width={416}
                                                height={524}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                        </div>
                                        <div className="FounderDetails">
                                            <div className="FounderName">Mr. Tariq Ali Sheikh</div>
                                            <div className="FounderPosition">Managing Director</div>
                                            <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="AllTeamImageBox">
                            <Image
                                src={f3}
                                width={1240}
                                height={580}
                                layout="responsive"
                                alt="Takmeel"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="text-center">
                            <div className="CfT1 nunito-text">Our People</div>
                            <div className="CfT2">The Visionaries Behind Takmeel<br />
                                Shaping the Future of Real Estate</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="OurPeopleBox">
                            <Slider {...settings1}>
                                <div className="FounderItem">
                                    <div className="FounderItemBox">
                                        <div className="FounderImageBox">
                                            <Image
                                                src={f4}
                                                width={416}
                                                height={524}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                        </div>
                                        <div className="FounderDetails">
                                            <div className="FounderName">Rabia Afsheen</div>
                                            <div className="FounderPosition">Manager HR</div>
                                            <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="FounderItem">
                                    <div className="FounderItemBox">
                                        <div className="FounderImageBox">
                                            <Image
                                                src={f5}
                                                width={416}
                                                height={524}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                        </div>
                                        <div className="FounderDetails">
                                            <div className="FounderName">Rafiq Uz Zaman</div>
                                            <div className="FounderPosition">Project Head</div>
                                            <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="FounderItem">
                                    <div className="FounderItemBox">
                                        <div className="FounderImageBox">
                                            <Image
                                                src={f6}
                                                width={416}
                                                height={524}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                        </div>
                                        <div className="FounderDetails">
                                            <div className="FounderName">Hamza Asad</div>
                                            <div className="FounderPosition">Executive Director</div>
                                            <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}