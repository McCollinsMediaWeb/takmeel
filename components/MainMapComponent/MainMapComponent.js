'use client'; // optional if using interactivity (like menus)

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import useMediaQuery from "../hooks/useMediaQuery";

export default function MainMapComponent({ MapImageDesk, MapImageMobile, MapURL }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <div className="childWrapper">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {isDesktop ? (
                    <motion.div className="" variants={itemVariants}>
                        {/* <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                        <Image
                            src={`/${MapImageDesk}`}
                            width={697}
                            height={768}
                            layout="responsive"
                            alt="Takmeel"
                        />
                        </div> */}
                        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                            <Image
                                src={`/${MapImageDesk}`}
                                alt="Takmeel"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                ) : (
                    <motion.div className="" variants={itemVariants}>
                        <Image
                            src={`/${MapImageMobile}`}
                            width={697}
                            height={768}
                            layout="responsive"
                            alt="Takmeel"
                        />
                    </motion.div>

                )}

            </motion.div>
        </div>
    );
}