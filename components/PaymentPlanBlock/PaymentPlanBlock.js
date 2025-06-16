"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
export default function PaymentPlanBlock({ title, subTitle, item1, item2, item3, item4, item5 }) {
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
        <div className="PaymentBlock pd-common">
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div>
                        <motion.div variants={itemVariants}>
                            <motion.div
                                className=""
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="BlT1A text-uppercase">{title}</div>
                            </motion.div>
                        </motion.div>
                        <motion.div className="" variants={itemVariants}>
                            <motion.div
                                className=""
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="BlT2B text-uppercase">{subTitle}</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="row PaymentBlockRow">
                    <div className="col-md-4">
                        <div className="PayBlockBx bg2">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div>
                                    <motion.div variants={itemVariants}>
                                        <motion.div
                                            className=""
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="PayBlockBxHdr VmT5">{item1}</div>
                                        </motion.div>
                                    </motion.div>

                                </div>
                            </motion.div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="PayBlockBx bg2">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div>
                                    <motion.div variants={itemVariants}>
                                        <motion.div
                                            className=""
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="PayBlockBxHdr VmT5">{item2}</div>
                                        </motion.div>
                                    </motion.div>

                                </div>
                            </motion.div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="PayBlockBx bg2">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div>
                                    <motion.div variants={itemVariants}>
                                        <motion.div
                                            className=""
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="PayBlockBxHdr VmT5">{item3}</div>
                                        </motion.div>
                                    </motion.div>

                                </div>
                            </motion.div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="PayBlockBx bg2">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div>
                                    <motion.div variants={itemVariants}>
                                        <motion.div
                                            className=""
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="PayBlockBxHdr VmT5">{item4}</div>
                                        </motion.div>
                                    </motion.div>

                                </div>
                            </motion.div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="PayBlockBx bg2">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div>
                                    <motion.div variants={itemVariants}>
                                        <motion.div
                                            className=""
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="PayBlockBxHdr VmT5">{item5}</div>
                                        </motion.div>
                                    </motion.div>

                                </div>
                            </motion.div>

                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="PayBlockBx bg2">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div>
                                    <motion.div variants={itemVariants}>
                                        <motion.div
                                            className=""
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="PayBlockBxHdr VmT5">Non-PDC</div>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div className="" variants={itemVariants}>
                                        <motion.div
                                            className=""
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                            }}
                                        >
                                           <div className="PaymentDetBox">
                                                <div className="PaymentDetBoxT1 VmT5">10% on booking</div>
                                                <div className="PaymentDetBoxT1 VmT5">10% after 2 months of booking</div>
                                                <div className="PaymentDetBoxT1 VmT5">10% after 7-month of booking</div>
                                                <div className="PaymentDetBoxT1 VmT5">10% after 12 month of booking</div>
                                                <div className="PaymentDetBoxT1 VmT5">60% on after completion hand over</div>
                                           </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                            
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
}
