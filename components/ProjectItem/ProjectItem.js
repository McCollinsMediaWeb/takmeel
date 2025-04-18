'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
export default function ProjectItem({ backgroundImage,backgroundImageMobile, text2, text3 }) {
    const bgUrl = `url("/${backgroundImage}")`;
    const isDesktop = useMediaQuery("(min-width: 960px)");
    return (
        <div className='FullScreenBanner Projects'>
            <motion.div
         animate={{ scale: [1, 1.05, 1] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
         viewport={{ once: true, amount: 0.5 }} 
      >
            {isDesktop && (
                <Image
                    src={`/${backgroundImage}`}
                    width={1338}
                    height={714}
                    layout="responsive"
                    alt="Takmeel"
                />
            )}
            {!isDesktop && (
                <Image
                    src={`/${backgroundImageMobile}`}
                    width={697}
                    height={768}
                    layout="responsive"
                    alt="Takmeel"
                />
            )}
            </motion.div>
            <div className='FsBannerContent'>
                <div className='FsBannerContentFlex centerBlock'>
                    <div className='container'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
                        >
                            <div>
                                
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