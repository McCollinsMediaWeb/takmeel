'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import useMediaQuery from "../hooks/useMediaQuery";
import { useTranslations } from "next-intl";
export default function HomeAbout({ backgroundImage, backgroundImageMobile, text1, text2, text3 }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const t = useTranslations('HomePage');

    return (
        <section className='HomeAbout pd-common bg2 childWrapper'>
            <div className='container text-center height100p'>
                <div className='HomeAboutContent HomeAboutItem'>
                    <div className="">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="Txt1 nunito-text text-center mb-1">{t('section2.subTitle')}</div>
                            <div className="BlT2 text-uppercase text-center">{t('section2.title')}</div>
                            <div className='BkR1'>{t('section2.content')}</div>
                        </motion.div>
                    </div>
                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                    >
                        <div className='HbT1'>Where Vision Meets Home</div>
                        <div className='HbT2'>At Takmeel Real Estate Development, we don’t just build homes—we craft experiences. Since 2017, our mission has been to create exceptional residences that go beyond four walls, offering spaces where families thrive, dreams take shape, and aspirations come to life.</div>
                        <div className='HbT3'>Every Takmeel home is a masterpiece, blending elegance, innovation, and timeless design in some of the most coveted locations. Backed by a team of industry experts, we bring a seamless, personalized approach to real estate—ensuring your journey to finding the perfect home is nothing short of extraordinary.</div>
                        <div className='HbT4'>Your dream home isn’t just a vision<br />
                            it’s waiting for you at Takmeel.</div>
                        <Link href="/about-us" className='Link5 hover1'>Read More</Link>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
}