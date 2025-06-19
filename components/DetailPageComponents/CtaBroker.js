'use client';


import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useLocale, useTranslations } from "next-intl";

export default function CtaBroker({ planData }) {
    const t = useTranslations('Properties');
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const locale = useLocale();
    var settings = {
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
        <div>

            <div>

                <div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="RegisterBrockerBox pd-common">
                                <div className="container">
                                    <div className="row BrockerFlex">
                                        <div className="col-md-9">
                                            <div className="Br1 BlT2 text-uppercase">Become a Certified Property Broker</div>
                                            <div className="Br1 BlT3">Partner with us to sell one of Dubai’s most luxurious residences and earn high commissions on every successful sale.</div>
                                        </div>
                                        <div className="col-md-3">
                                            <a href="/Takmeel-Al-Barrari-View/EOI Form.pdf" className="FormButton">Register as a Broker</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                </div >

            </div >

        </div >
    );
}
