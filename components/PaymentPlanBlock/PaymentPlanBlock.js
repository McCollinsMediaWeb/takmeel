

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
export default function PaymentPlanBlock() {
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
        <div className="PaymentBlock pd-common bg2">
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
                                <div className="BlT1A text-uppercase">Flexible Payment Plan</div>
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
                                <div className="BlT2B text-uppercase">Own your dream home at Takmeel with a stress-free, flexible payment structure designed for convenience:</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="row PaymentBlockRow">
                    <div className="col-md-4">
                        <div className="PayBlockBx">
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
                                            <div className="PayBlockBxHdr">PDC</div>
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
                                                <div className="PaymentDetBoxT1 VmT5">15% Booking</div>
                                                <div className="PaymentDetBoxT1 VmT5">1% Per month X 42 months</div>
                                                <div className="PaymentDetBoxT1 VmT5">10% on 12th Month</div>
                                                <div className="PaymentDetBoxT1 VmT5">5% on 18th Month</div>
                                                <div className="PaymentDetBoxT1 VmT5">0.5% per month X 60 months</div>
                                           </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="PayBlockBx">
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
                                            <div className="PayBlockBxHdr">Non-PDC</div>
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
                                                <div className="PaymentDetBoxT1 VmT5">20% Booking</div>
                                                <div className="PaymentDetBoxT1 VmT5">1% Per month X 42 months</div>
                                                <div className="PaymentDetBoxT1 VmT5">10% on 12th Month</div>
                                                <div className="PaymentDetBoxT1 VmT5">5% on 18th Month</div>
                                                <div className="PaymentDetBoxT1 VmT5">0.5% per month X 50 months</div>
                                           </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
