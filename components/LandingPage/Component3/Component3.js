
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Component3() {
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    }
    return (

        <div>
            <div className="pd-common comp3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="comp-width-full">
                                    <Image
                                        src="/comp3.jpg"
                                        width={523}
                                        height={555}
                                        alt="Takmeel"
                                        layout="responsive"
                                    />
                                </div>
                            </motion.div>

                        </div>
                        <div className="col-md-7">
                            <div className="CompRight">
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="Txt2 text-uppercase">
                                        Elegance Defined in<br />
                                        Perfect Proportion
                                    </div>
                                    <div className="Txt3">
                                        Key Highlights of Divine Elements
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <ul className="LiSt1">
                                        <li >
                                            Selection of 1, 2, and 3-bedroom apartments designed for different lifestyle needs.
                                        </li>
                                        <li >
                                            Developed by Takmeel Real Estate Development, known for quality and attention to detail
                                        </li>
                                        <li>
                                            Located in Dubai South, a fast-growing, well-connected master community.
                                        </li>
                                        <li>
                                            Modern architecture with open layouts and high-quality interiors.
                                        </li>
                                        <li >
                                            Bright, spacious apartments with large windows and elegant finishes.
                                        </li>
                                        <li >
                                            Access to lifestyle amenities including a gym, pool, landscaped outdoor spaces, and leisure areas.

                                        </li>
                                        <li >
                                            Secure environment with 24-hour security, parking, and concierge services
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}