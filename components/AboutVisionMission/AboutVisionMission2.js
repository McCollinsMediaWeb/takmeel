'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
import f3 from '../../public/team-photo.jpg'
import Image from "next/image";
export default function AboutVisionMission2() {
    // Container animation variants
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
        // <section className="pd-common VisionMissionBox bg2">
        //     <div className="container">
        //         <div className="text-center">

        //         <motion.div
        //                 initial={{ opacity: 0, y: 50 }}
        //                 whileInView={{ opacity: 1, y: 0 }}
        //                 transition={{ duration: 0.6, ease: "easeOut" }}
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
        //                 transition={{ duration: 0.6, ease: "easeOut" }}
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
        <section className="pd-common VisionMissionBox bg2">
            <div className="container">
                <div className="text-center DifBox1">

                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src="/abt3.jpg"
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
                                            Takmeel Vision
                                        </div>
                                    </motion.div>

                                    <motion.div className="" variants={itemVariants}>
                                        <div className="VmT2 nunito-text mb-0 text-left">Takmeel's Vision is to transform the urban landscape by creating thoughtfully designed spaces that prioritize innovation, sustainability, and human connection. By anticipating the needs of tomorrow’s communities, Takmeel envisions vibrant, inclusive environments where people thrive and lifestyles evolve in harmony with progress.</div>

                                    </motion.div>
                                </div>
                            </motion.div>


                        </div>
                    </div>
                    <div className="row align-items-center ColumnReverseMob">
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
                                            Takmeel Mission
                                        </div>
                                    </motion.div>

                                    <motion.div className="" variants={itemVariants}>
                                        <div className="VmT2 nunito-text mb-0 text-left ">Takmeel's Mission is to develop sustainable and intelligently designed environments that blend elegance with functionality. With a focus on quality, innovation, and long-term value, Takmeel aims to enhance everyday living experiences while contributing meaningfully to the future of urban development.</div>

                                    </motion.div>
                                </div>
                            </motion.div>


                        </div>
                        <div className="col-md-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src="/abt4.jpg"
                                    width={1000}
                                    height={562}
                                    layout="responsive"
                                    alt="Takmeel"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>

                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Image
                                    src="/abt6.jpg"
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
                    </div>
                </div>
            </div>
        </section>
    );
}