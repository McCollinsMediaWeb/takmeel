'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";

export default function FullScreenBanner({ backgroundImage, text1, text2, text3 }) {
    const bgUrl = `url("/${backgroundImage}")`;
    return (
        <div className='FullScreenBanner' style={{ backgroundImage: bgUrl }}>
            <div className='FsBannerContent'>
                <div className='FsBannerContentFlex'>
                    <div className='container'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                        >
                            <div>
                                <div className='Txt1 nunito-text'>{text1}</div>
                                <div className='Txt2 text-uppercase'>{text2}</div>
                                <div className='Txt3 nunito-text'>{text3}</div>
                                <Link href="/" className='Link1 hover1'>Explore Property</Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}