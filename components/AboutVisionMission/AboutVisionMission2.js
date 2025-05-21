'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
import f3 from '../../public/team-photo.jpg'
import Image from "next/image";
export default function AboutVisionMission2() {
    // Container animation variants
    // Unique variants for each column
    const leftImageVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const rightTextVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const leftTextVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const rightImageVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Stagger for text blocks
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        // <section className="pd-common VisionMissionBox bg2">
        //     <div className="container">
        //         <div className="text-center">

        //         <motion.div
        //                 initial={{ opacity: 0, y: 50 }}
        //                 whileInView={{ opacity: 1, y: 0 }}
        //                 transition={{ duration: 0.8, ease: "easeOut" }}
        //                 viewport={{ once: true, amount: 0.5 }}
        //             >
        //                 <div className="AllTeamImageBox">
        //                     <Image
        //                         src={f3}
        //                         width={1240}
        //                         height={580}
        //                         layout="responsive"
        //                         alt="Takmeel"
        //                     />
        //                 </div>
        //             </motion.div>
        //             <motion.div
        //                 initial={{ opacity: 0, y: 50 }}
        //                 whileInView={{ opacity: 1, y: 0 }}
        //                 transition={{ duration: 0.8, ease: "easeOut" }}
        //                 viewport={{ once: true, amount: 0.5 }}
        //             >

        //                 <motion.div
        //                     variants={containerVariants}
        //                     initial="hidden"
        //                     whileInView="visible"
        //                     viewport={{ once: true, amount: 0.5 }}
        //                 >
        //                     <div>
        //                         <motion.div className="" variants={itemVariants}>
        //                             <div className="VmT3">Takmeel Vision</div>
        //                         </motion.div>
        //                         <motion.div className="" variants={itemVariants}>
        //                             <div>
        //                                 <div className="VmT5 nunito-text">To redefine urban living through inspired design and future-focused communities.</div>
        //                             </div>
        //                         </motion.div>

        //                         <motion.div className="" variants={itemVariants}>
        //                             <div className="VmT3">Takmeel Mission</div>
        //                         </motion.div>
        //                         <motion.div className="" variants={itemVariants}>
        //                             <div>
        //                                 <div className="VmT5 nunito-text">To craft sustainable, smart, and elegant spaces that elevate lifestyles and deliver enduring value.</div>
        //                             </div>
        //                         </motion.div>
        //                         <motion.div className="" variants={itemVariants}>
        //                             <div className="VmT3">Our Values</div>
        //                         </motion.div>
        //                         <motion.div className="" variants={itemVariants}>
        //                             <div>
        //                                 <div className="VmT5 nunito-text">We champion innovation and sustainability in every design.</div>
        //                             </div>
        //                         </motion.div>
        //                         <motion.div className="" variants={itemVariants}>

        //                             <div>
        //                                 <div className="VmT5 nunito-text">Every community is customer-centric, environmentally conscious, and globally inspired.</div>
        //                             </div>
        //                         </motion.div>
        //                         <motion.div className="" variants={itemVariants}>
        //                             <div>
        //                                 <div className="VmT5 nunito-text">Our legacy is built on bold ideas, precise execution, and a relentless pursuit of excellence.</div>
        //                             </div>
        //                         </motion.div>
        //                     </div>
        //                 </motion.div>









        //             </motion.div>
        //         </div>
        //     </div>
        // </section>
        <section className="pd-common VisionMissionBox">
            <div className="container">
                <div className="text-center DifBox1">

                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <motion.div
                                variants={leftImageVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src="/vision-image.jpg"
                                    width={1000}
                                    height={562}
                                    layout="responsive"
                                    alt="Takmeel Vision"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                        <div className="col-md-6">
                            <motion.div
                                variants={rightTextVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                                    <motion.div variants={itemVariants}>
                                        <div className="VmT1 text-left mtm1">
                                            Takmeel Vision
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                        <div className="VmT2 nunito-text mb-0 text-left">
                                            Takmeel's Vision is to shape the future of real estate through a steadfast commitment to Excellence, Integrity, and Innovation. By developing exceptional properties that reflect the highest standards of quality and design, Takmeel aims to foster lasting value and trust within communities. Guided by a culture of purpose and progress, we envision dynamic spaces where people and possibilities thrive together.
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="row align-items-center ColumnReverseMob">
                        <div className="col-md-6">
                            <motion.div
                                variants={leftTextVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                                    <motion.div variants={itemVariants}>
                                        <div className="VmT1 text-left mtm1">
                                            Takmeel Mission
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                        <div className="VmT2 nunito-text mb-0 text-left">
                                            Takmeel's Mission is to create iconic and innovative projects that redefine the urban skyline and become enduring landmarks. We are dedicated to maintaining an uncompromising commitment to exceptional quality in every project we undertake. By nurturing and elevating a distinct human capital of the highest potential, we empower our teams to lead with purpose and passion. Our mission also extends to expanding across diverse real estate sectors, driving holistic growth and delivering transformative value to communities and stakeholders alike.
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="col-md-6">
                            <motion.div
                                variants={rightImageVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src="/mission-image.jpg"
                                    width={1000}
                                    height={562}
                                    layout="responsive"
                                    alt="Takmeel Mission"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                    </div>
                    {/* <div className="row align-items-center">
                        <div className="col-md-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src="/abt7.jpg"
                                    width={1000}
                                    height={562}
                                    layout="responsive"
                                    alt="Takmeel"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                        <div className="col-md-6">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div>

                                    <motion.div className="" variants={itemVariants}>
                                        <div className="VmT1 text-left mtm1">
                                            Our Values
                                        </div>
                                    </motion.div>

                                    <motion.div className="" variants={itemVariants}>
                                        <div className="VmT2 nunito-text mb-0 text-left">At Takmeel, we champion innovation and sustainability in every design, ensuring that each space reflects a commitment to progress and responsibility. Our communities are thoughtfully crafted to be customer-centric, environmentally conscious, and globally inspired—blending local insight with international vision. With bold ideas, precise execution, and an unwavering pursuit of excellence, we are building a legacy that stands the test of time.</div>

                                    </motion.div>
                                </div>
                            </motion.div>


                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}