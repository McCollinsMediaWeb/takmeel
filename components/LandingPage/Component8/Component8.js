
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Component8() {
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
            <div className="pd-common comp8">
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <div className="com8T1" variants={itemVariants}>Floor Plan</div>
                                <div className="com8T2" variants={itemVariants}>Where Smart Layouts
                                    Meet Stylish Living</div>
                            </motion.div>
                        </div>
                        <div className="col-md-7">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <div className="com8T3" variants={itemVariants}>Where smart layouts meet stylish living, every space is designed with purpose and clarity. Thoughtfully planned proportions ensure a seamless flow that elevates both comfort and modern lifestyle.</div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="row accordionHGd">

                            <div className="col-md-3">
                                <div className="AccordionBtn active" variants={itemVariants}>Studio</div>
                            </div>
                            <div className="col-md-3">
                                <div className="AccordionBtn " variants={itemVariants}>1 BR Apartment</div>
                            </div>
                            <div className="col-md-3">
                                <div className="AccordionBtn " variants={itemVariants}>2 BR Apartment</div>
                            </div>
                            <div className="col-md-3">
                                <div className="AccordionBtn " variants={itemVariants}>2 BR Apartment</div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="AccordionContentBx">
                        <div className="row">
                            <div className="col-md-5">Iajs</div>
                            <div className="col-md-7">Iajs</div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}