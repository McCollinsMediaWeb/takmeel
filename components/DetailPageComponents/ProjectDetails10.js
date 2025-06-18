'use client';


import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectDetails10({ planData }) {
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
        <div className='position-relative pd-common'>

            <div className='container'>

                <div className='row PlanRow' style={{ justifyContent: 'center' }}>
                    <div className='col-md-8'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {/* <div className="BlT1 nunito-text text-uppercase">{t('amenitiesIcons.subTitle')}</div> */}
                            <div className="BlT2 text-uppercase">{t('amenitiesIcons.title')}​</div>
                        </motion.div>
                        <div className='PlanBox'>
                            <Image
                                src={`/${planData[currentIndex].image}`}
                                width={438}
                                height={414}
                                layout="responsive"
                                alt="Takmeel"
                            />
                        </div>
                        <div className='PlanBoxBottom'>
                            <div className='PlanBoxBottomFlex'>
                                <div className={`PlanBoxBottomLnk hove1 ${currentIndex === 0 ? "mapLayoutActive" : ""}`} style={{ direction: "ltr" }} onClick={() => setCurrentIndex(0)}>1 BHK</div>
                                <div className={`PlanBoxBottomLnk hove1 ${currentIndex === 1 ? "mapLayoutActive" : ""}`} style={{ direction: "ltr" }} onClick={() => setCurrentIndex(1)}>2 BHK</div>
                                <div className={`PlanBoxBottomLnk hove1 ${currentIndex === 2 ? "mapLayoutActive" : ""}`} style={{ direction: "ltr" }} onClick={() => setCurrentIndex(2)}>3 BHK</div>
                                <div className={`PlanBoxBottomLnk hove1 ${currentIndex === 3 ? "mapLayoutActive" : ""}`} onClick={() => setCurrentIndex(3)}>{t('DivineAlBarari.layoutSection.studio')}</div>
                                <a href={`/${planData[currentIndex].pdfFile}`} download="FloorPlan.pdf"><div className='DownloadBtn'>&nbsp;</div></a>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-6' style={{ textAlign: locale === "ar" ? "right" : undefined }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="BlT1 nunito-text text-uppercase">{t('amenitiesIcons.subTitle')}</div>
                            <div className="BlT2 text-uppercase">{t('amenitiesIcons.title')}​</div>
                        </motion.div>
                        {data?.length > 0 ? (
                            data?.map((section, idx) => (
                                <div className='AmnBoxWrap' key={idx}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        {section?.amenity && (
                                            <div className="AmnBoxTitle">
                                                <span className="AmnBoxTitleSpan">{section.amenity}</span>
                                            </div>
                                        )}
                                    </motion.div>
                                    <div className='AmnBoxLists'>
                                        <div className='listItems'>
                                            <div className='row'>
                                                {section.values.map((item, index) => (
                                                    <div className='col-md-4' key={index}>
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 50 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                                            viewport={{ once: true, amount: 0.5 }}
                                                        >
                                                            <div className='AmnKeyBox'>
                                                                <div className='AmnKeyBoxFlex'>
                                                                    <div className='AmnKeyBoxLeft'>
                                                                        <div className={`AmnIcon AmnIcon${item.iconNo}`}></div>
                                                                    </div>
                                                                    <div className='AmnKeyBoxRight'>{item.name}</div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            null
                        )}
                    </div > */}
                </div >

            </div >

        </div >
    );
}
