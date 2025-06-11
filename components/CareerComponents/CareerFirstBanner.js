// 'use client'; // optional if using interactivity (like menus)
// import { motion } from "framer-motion";
// import { useEffect } from 'react';
// import Image from "next/image";
// export default function CareerFirstBanner() {

//     const containerVariants = {
//         hidden: { opacity: 0, y: 40 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut",
//                 when: "beforeChildren",
//                 staggerChildren: 0.2,
//             },
//         },
//     }

//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//     }

//     return (
//         <section className="pd-common VisionMissionBox bg2">
//             <div className="container">
//                 <div className="text-center">
//                     <div className="row align-items-center">
//                         <div className="col-md-6">
//                             <motion.div
//                                 variants={containerVariants}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true, amount: 0.5 }}
//                             >
//                                 <div>

//                                     <motion.div className="" variants={itemVariants}>
//                                         <div className="VmT1 text-left">
//                                             CAREERS
//                                         </div>
//                                     </motion.div>

//                                     <motion.div className="" variants={itemVariants}>
//                                         <div className="BlT3 nunito-text mb-0 text-left">We seek passionate and driven individuals to fill open positions across various departments. Whether you’re an experienced professional or a fresh talent looking to make your mark, Takmeel offers a collaborative environment where creativity and dedication thrive. Join us in shaping the future of real estate and unlocking new possibilities. Explore our current openings and embark on a rewarding journey with Takmeel Real Estate.</div>
//                                     </motion.div>
//                                 </div>
//                             </motion.div>
//                         </div>
//                         <div className="col-md-6">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 50 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, ease: "easeOut" }}
//                                 viewport={{ once: true, amount: 0.5 }}
//                             >
//                                 <Image
//                                     src="/cnt.jpg"
//                                     width={1000}
//                                     height={562}
//                                     layout="responsive"
//                                     alt="Takmeel"
//                                     loading="lazy"
//                                 />
//                             </motion.div>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

'use client'; // optional if using interactivity (like menus) 
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CareerFirstBanner() {
    const t = useTranslations('Careers');
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
        <section className="pd-common VisionMissionBox bg2">
            <div className="container">
                <div className="text-center">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div>
                                    <motion.div className="" variants={itemVariants}>
                                        <div className="VmT1 text-left">
                                            {t('title')}
                                        </div>
                                    </motion.div>

                                    <motion.div className="" variants={itemVariants}>
                                        <div className="BlT3 nunito-text mb-0 text-left">{t('content')}</div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="position-relative"
                            >
                                {/* Grey background box */}
                                {/* <div className="grey-box"></div> */}

                                {/* Image container with proper positioning */}
                                <div className="image-container">
                                    <Image
                                        src="/cnt.jpg"
                                        width={1000}
                                        height={562}
                                        layout="responsive"
                                        alt="Takmeel"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add the required CSS */}
            <style jsx>{`
                .position-relative {
                    position: relative;
                }
                
                .grey-box {
                    position: absolute;
                    background-color: #f0f0f0; /* Grey color - adjust as needed */
                    width: 100%;
                    height: 100%;
                    bottom: 100px;
                    right: 80px;
                    z-index: 1;
                }
                
                .image-container {
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </section>
    );
}