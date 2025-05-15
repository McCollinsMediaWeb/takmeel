'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import Image from "next/image";
// import f1 from "../../public/f1.jpg"
// import f2 from "../../public/f2.jpg"
import f1 from "../../public/t2.jpg"
import f2 from "../../public/t1.jpg"
// import f3 from "../../public/all-team.jpg"
import f3 from '../../public/team-photo.jpg'
import f4 from "../../public/t3.jpg"
import f5 from "../../public/t4.jpg"
import f6 from "../../public/t5.jpg"
import f7 from "../../public/t6.jpg"
import f8 from "../../public/rf.jpg"
export default function Founders() {

    var settings = {
        dots: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        infinite: true,
        autoplay: true,               // Enables autoplay
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

    const sliderRef = useRef(null);
    const slickRef = useRef(null);
    const [inView, setInView] = useState(false);


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


    useEffect(() => {
        if (inView && slickRef.current) {
            slickRef.current.slickPlay();
        }
    }, [inView]);

    useEffect(() => {
        if (slickRef.current) {
            slickRef.current.slickPause();
        }
    }, []);


    var settings1 = {
        dots: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        infinite: true,
        autoplay: true,               // Enables autoplay
        autoplaySpeed: 3000,
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
        <section className="pd-common FoundersBlock">
            <div className="container">
                <div>
                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="text-center">
                            <div className="CfT1 nunito-text">Founders</div>
                            <div className="CfT2">The Visionaries Behind Takmeel<br />
                                Shaping the Future of Real Estate</div>
                        </div>
                    </motion.div> */}

                    {/* <div className="FounderSlider">
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
                        </div> */}

                    {/* <div className="MainFoundersDetails">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="row align-items-center">
                                <div className="col-md-4">
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
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="BlT1 nunito-text text-uppercase">FOUNDER & CHAIRMAN</div>
                                    <div className="BlT2 text-uppercase">Mian Asad Bashir</div>
                                    <div className="CfT1 nunito-text contact-email">asad.bashir@takmeeluae.com</div>
                                    <div className="BlT3">Mian Asad Bashir is a distinguished entrepreneur and the visionary Founder and Chairman of Takmeel Real Estate Development, a leading force in the UAE’s real estate sector. With over two decades of extensive experience, he has been a driving catalyst in reshaping Ajman’s urban landscape. Under his leadership, Takmeel has successfully delivered numerous residential and apartment projects, setting new benchmarks for quality and innovation in the industry. Mr. Asad’s strategic foresight and unwavering commitment to excellence have firmly positioned Takmeel as a trusted name in real estate development. His continued dedication to raising standards of living through exceptional projects underscores his status as a key leader in the UAE’s real estate community.</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="row align-items-center second">

                                <div className="col-md-8">
                                    <div className="BlT1 nunito-text text-uppercase">MANAGING DIRECTOR</div>
                                    <div className="BlT2 text-uppercase">Sheikh Tariq Ali</div>
                                    <div className="CfT1 nunito-text contact-email">tariq.ali@takmeeluae.com</div>
                                    <div className="BlT3">

                                        Sheikh Tariq Ali serves as the Managing Director of Takmeel Real Estate Development, bringing exceptional expertise, strategic insight, and a refined design sensibility to the organization. Initially joining Takmeel as an investing partner, Sheikh Tariq has been instrumental in broadening the company’s vision and elevating the standards of its developments. His leadership has been key in ensuring Takmeel’s projects not only meet but consistently exceed market expectations, emphasizing innovation, aesthetic excellence, and superior quality. Through his dedication and forward-thinking approach, Sheikh Tariq continues to shape Takmeel’s dynamic portfolio, reinforcing the company’s reputation as a leader in the UAE’s real estate development landscape.
                                    </div>
                                </div>
                                <div className="col-md-4">
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
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div> */}



                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="text-center">
                            <div className="CfT1 nunito-text">Our People</div>
                            <div className="CfT2">The Visionaries Behind Takmeel<br />
                                Shaping the Future of Real Estate</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="OurPeopleBox" ref={sliderRef}>
                            <Slider ref={slickRef} {...settings1}>

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
                                            <div className="FounderName">Mian Asad Bashir</div>
                                            <div className="FounderPosition">Founder & Chairman</div>
                                            {/* <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div> */}
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
                                            <div className="FounderName">Sheikh Tariq Ali</div>
                                            <div className="FounderPosition">Managing Director</div>
                                            {/* <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div> */}
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
                                            {/* <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

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
                                            <div className="FounderName">Shohaib Tariq</div>
                                            <div className="FounderPosition">General Manager</div>
                                            {/* <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div> */}
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
                                            <div className="FounderName">Asim Mustaq</div>
                                            <div className="FounderPosition">Head of Finance</div>
                                            {/* <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="FounderItem">
                                    <div className="FounderItemBox">
                                        <div className="FounderImageBox">
                                            <Image
                                                src={f7}
                                                width={416}
                                                height={524}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                        </div>
                                        <div className="FounderDetails">
                                            <div className="FounderName">Rabia Afsheen</div>
                                            <div className="FounderPosition">Head of HR</div>
                                            {/* <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="FounderItem">
                                    <div className="FounderItemBox">
                                        <div className="FounderImageBox">
                                            <Image
                                                src={f8}
                                                width={416}
                                                height={524}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                        </div>
                                        <div className="FounderDetails">
                                            <div className="FounderName">Rafique Zaman</div>
                                            <div className="FounderPosition">Head of Project</div>
                                            {/* <div className="text-right">
                                                <a href="#" className="MoreInfoLink nunito-text">More Info</a>
                                            </div> */}
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