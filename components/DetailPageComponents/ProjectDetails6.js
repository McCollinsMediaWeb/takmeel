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
import image1 from "../../public/abslider1.jpg"
import image2 from "../../public/abslider2.jpg"
import image3 from "../../public/abslider3.jpg"
import image4 from "../../public/abslider3.jpg"

export default function ProjectDetails6({planImage}) {
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
        <div className='position-relative pd-common bg2 pt-0'>

            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                >
                    <div className='row PlanRow'>
                        <div className='col-md-6'>
                            <div className='PlanBox'>
                                <Image
                                                                src={`/${planImage}`}
                                                                width={438}
                                                                height={414}
                                                                layout="responsive"
                                                                alt="Takmeel"
                                                            />
                            </div>
                            <div className='PlanBoxBottom'>
                                <div className='PlanBoxBottomFlex'>
                                    <div className='PlanBoxBottomLnk hove1'>1 BHK</div>
                                    <div className='PlanBoxBottomLnk hove1'>2 BHK</div>
                                    <div className='PlanBoxBottomLnk hove1'>3 BHK</div>
                                    <a href='#'><div className='DownloadBtn'>&nbsp;</div></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="BlT1 nunito-text text-uppercase">Designed for Living</div>
                            <div className="BlT2 text-uppercase">Create Your Perfect Home Layout​</div>
                            <div className='AmnBoxWrap'>
                                <div className='AmnBoxTitle'>
                                    <span className='AmnBoxTitleSpan'>Lot</span>
                                </div>
                                <div className='AmnBoxLists'>
                                    <div className='listItems'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon1'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>City View</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon2'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Beachfront</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon3'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Sea View</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon4'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Waterfront</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon5'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Panoramic</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon6'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Modern</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='AmnBoxWrap'>
                                <div className='AmnBoxTitle'>
                                    <span className='AmnBoxTitleSpan'>Indoor</span>
                                </div>
                                <div className='AmnBoxLists'>
                                    <div className='listItems'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon7'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Elevator</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon8'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Steam Room</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon9'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Bar</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon10'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Kitchen Island</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon11'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Walk In Closet</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon12'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Jacuzzi</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='AmnBoxWrap'>
                                <div className='AmnBoxTitle'>
                                    <span className='AmnBoxTitleSpan'>Outdoor</span>
                                </div>
                                <div className='AmnBoxLists'>
                                    <div className='listItems'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon13'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Terrace</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon14'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Balcony</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon15'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Outdoor
                                                            Swimming Pools</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon16'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Outdoor Gym</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon17'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Outdoor Kids
                                                            Play Area</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className='col-md-4'>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                                                >
                                                    <div className='AmnKeyBox'>
                                                        <div className='AmnKeyBoxFlex'>
                                                            <div className='AmnKeyBoxLeft'>
                                                                <div className='AmnIcon AmnIcon18'></div>
                                                            </div>
                                                            <div className='AmnKeyBoxRight'>Outdoor Cinema</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
    );
}
