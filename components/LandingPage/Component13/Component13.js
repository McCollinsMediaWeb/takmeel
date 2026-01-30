
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// export default function Component13() {
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

//         <div>
//             <div className="pd-common comp5">
//                 <div className="container">
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.5 }}
//                     >
//                         {/* <div className="Txt3 text-center" >Feature & Amenities</div> */}
//                         <div className="Txt2 text-center text-uppercase" >Payment Plans</div>
//                     </motion.div>

//                     <div className="AmnBox">
//                         <div className="row justify-content-center ">
//                             <div className="col-md-9">
//                                 <motion.div
//                                     variants={containerVariants}
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     viewport={{ once: true, amount: 0.5 }}
//                                 >
//                                     <div className="Txt6 text-center text-uppercase">Option 1</div>
//                                     <div className="Txt7 text-center" >40/60</div>
//                                 </motion.div>
//                                 <motion.div
//                                     variants={containerVariants}
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     viewport={{ once: true, amount: 0.5 }}
//                                 >
//                                     <div style={{ height: "2px", backgroundColor: '#0f4566', width: '100%' }} />
//                                     <div className="row">
//                                         <div className="col-md-4" >
//                                             Down Payment
//                                         </div>
//                                         <div className="col-md-4" >
//                                             Within 30 Days
//                                         </div>
//                                         <div className="col-md-4" >
//                                             20%
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }





"use client";
import { motion } from "framer-motion";

export default function Component13() {
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <div>
            <div className="pd-common comp5">
                <div className="container">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="Txt2 text-center text-uppercase">Payment Plans</div>
                    </motion.div>

                    {/* Option 1 - 40/60 */}
                    <motion.div
                        className="row justify-content-center mt-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="col-lg-9 col-md-10 col-12">
                            <div className="payment-card">
                                <motion.div variants={itemVariants}>
                                    <div className="Txt6 text-center text-uppercase mb-2 payment-bold">Option 1</div>
                                    <div className="Txt7 text-center mb-4">40/60</div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">Down Payment</div>
                                        <div className="col-md-4 col-4 payment-timing">within 30 days</div>
                                        <div className="col-md-4 col-4 payment-percentage">20%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">1st Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">4th month</div>
                                        <div className="col-md-4 col-4 payment-percentage">5%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">2nd Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">8th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">5%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">3rd Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">12th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">5%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">4th Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">16th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">5%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4"></div>
                                        <div className="col-md-4 col-4"></div>
                                        <div className="col-md-4 col-4 payment-percentage payment-bold">40%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">On Handover</div>
                                        <div className="col-md-4 col-4"></div>
                                        <div className="col-md-4 col-4 payment-percentage">60%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4"></div>
                                        <div className="col-md-4 col-4"></div>
                                        <div className="col-md-4 col-4 payment-percentage payment-bold">100%</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Option 2 - 70/30 (3 Years) */}
                    <motion.div
                        className="row justify-content-center mt-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="col-lg-9 col-md-10 col-12">
                            <div className="payment-card">
                                <motion.div variants={itemVariants}>
                                    <div className="Txt6 text-center text-uppercase mb-2 payment-bold">Option 2</div>
                                    <div className="Txt7 text-center mb-4">70/30 ( 3 Years Post Handover Plan )</div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">Down Payment</div>
                                        <div className="col-md-4 col-4 payment-timing">within 30 days</div>
                                        <div className="col-md-4 col-4 payment-percentage">20%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">1st Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">3rd month</div>
                                        <div className="col-md-4 col-4 payment-percentage">5%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">2nd Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">6th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">5%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">3rd Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">9th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">5%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">4th Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">12th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">5%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">5th Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">15th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">10%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">6th Installment</div>
                                        <div className="col-md-4 col-4 payment-timing">18th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">10%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">On Completion</div>
                                        <div className="col-md-4 col-4 payment-timing">24th Month</div>
                                        <div className="col-md-4 col-4 payment-percentage">10%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4"></div>
                                        <div className="col-md-4 col-4 text-center payment-bold">TILL COMPLETION</div>
                                        <div className="col-md-4 col-4 payment-percentage payment-bold">70%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider"></div>
                                    <div className="row payment-row">
                                        <div className="col-12 text-center payment-bold">POST HANDOVER</div>
                                    </div>
                                    <div className="payment-divider-light"></div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">Year 1</div>
                                        <div className="col-md-4 col-4 payment-timing text-center">
                                            2.5% each quarter<br />(12 Installments)
                                        </div>
                                        <div className="col-md-4 col-4 payment-percentage">80%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">Year 2</div>
                                        <div className="col-md-4 col-4 payment-timing text-center">
                                            2.5% each quarter<br />(12 Installments)
                                        </div>
                                        <div className="col-md-4 col-4 payment-percentage">90%</div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="payment-divider-light"></div>
                                    <div className="row payment-row">
                                        <div className="col-md-4 col-4 payment-label">Year 3</div>
                                        <div className="col-md-4 col-4 payment-timing text-center">
                                            2.5% each quarter<br />(12 Installments)
                                        </div>
                                        <div className="col-md-4 col-4 payment-percentage">100%</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Option 3 - 70/30 (2 Years) */}
                    <motion.div
                        className="row justify-content-center mt-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="col-lg-10 col-md-11 col-12">
                            <div className="payment-card">
                                <motion.div variants={itemVariants}>
                                    <div className="Txt6 text-center text-uppercase mb-2 payment-bold">Option 3</div>
                                    <div className="Txt7 text-center mb-4">70/30 ( 2 year Post Handover Plan )</div>
                                </motion.div>

                                <div className="row">
                                    {/* Left Column */}
                                    <div className="col-lg-6 col-12">
                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider"></div>
                                            <div className="row payment-row">
                                                <div className="col-5 payment-label">Down Payment</div>
                                                <div className="col-4 payment-timing">within 30 days</div>
                                                <div className="col-3 payment-percentage">20%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-5 payment-label">1st Installment</div>
                                                <div className="col-4 payment-timing">3rd month</div>
                                                <div className="col-3 payment-percentage">5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-5 payment-label">2nd Installment</div>
                                                <div className="col-4 payment-timing">6th Month</div>
                                                <div className="col-3 payment-percentage">5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-5 payment-label">3rd Installment</div>
                                                <div className="col-4 payment-timing">9th Month</div>
                                                <div className="col-3 payment-percentage">5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-5 payment-label">4th Installment</div>
                                                <div className="col-4 payment-timing">12th Month</div>
                                                <div className="col-3 payment-percentage">5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-5 payment-label">5th Installment</div>
                                                <div className="col-4 payment-timing">15th Month</div>
                                                <div className="col-3 payment-percentage">10%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-5 payment-label">6th Installment</div>
                                                <div className="col-4 payment-timing">18th Month</div>
                                                <div className="col-3 payment-percentage">10%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-5 payment-label">On Completion</div>
                                                <div className="col-4 payment-timing">24th Month</div>
                                                <div className="col-3 payment-percentage">10%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-5"></div>
                                                <div className="col-4 text-end payment-bold">TILL COMPLETION</div>
                                                <div className="col-3 payment-percentage payment-bold">70%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider"></div>
                                            <div className="row payment-row">
                                                <div className="col-12 payment-bold">POST HANDOVER - YEAR 1</div>
                                            </div>
                                            <div className="payment-divider-light"></div>
                                        </motion.div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider d-lg-block d-none"></div>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-label">Quarter 1</div>
                                                <div className="col-4 payment-percentage">3.5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-label">Quarter 2</div>
                                                <div className="col-4 payment-percentage">3.5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-label">Quarter 3</div>
                                                <div className="col-4 payment-percentage">3.5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-label">Quarter 4</div>
                                                <div className="col-4 payment-percentage">4.5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider"></div>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-bold">AFTER 1 YEAR POST HANDOVER</div>
                                                <div className="col-4 payment-percentage payment-bold">85%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider"></div>
                                            <div className="row payment-row">
                                                <div className="col-12 payment-bold">POST HANDOVER - YEAR 2</div>
                                            </div>
                                            <div className="payment-divider-light"></div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-label">Quarter 1</div>
                                                <div className="col-4 payment-percentage">3.5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-label">Quarter 2</div>
                                                <div className="col-4 payment-percentage">3.5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-label">Quarter 3</div>
                                                <div className="col-4 payment-percentage">3.5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider-light"></div>
                                            <div className="row payment-row">
                                                <div className="col-8 payment-label">Quarter 4</div>
                                                <div className="col-4 payment-percentage">4.5%</div>
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <div className="payment-divider"></div>
                                            <div className="row payment-row">
                                                <div className="col-8"></div>
                                                <div className="col-4 payment-percentage payment-bold">100%</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <style jsx>{`
                .payment-card {
                    background: white;
                    padding: 30px 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }

                .payment-divider {
                    height: 2px;
                    background-color: #0f4566;
                    width: 100%;
                    margin: 0 0 12px 0;
                }

                .payment-divider-light {
                    height: 2px;
                    background-color: #b8d4e1;
                    width: 100%;
                    margin: 0 0 12px 0;
                }

                .payment-row {
                    padding: 12px 0;
                    align-items: center;
                }

                .payment-label {
                    font-size: 18px;
                    color: #4a5568;
                }

                .payment-timing {
                    font-size: 18px;
                    color: #4a5568;
                    text-align: center;
                }

                .payment-percentage {
                    font-size: 18px;
                    color: #4a5568;
                    text-align: right;
                    font-weight: 500;
                }

                .payment-bold {
                    font-weight: 700;
                    color: #0f4566;
                    font-size: 18px;
                }

                @media (max-width: 768px) {
                    .payment-card {
                        padding: 20px 15px;
                    }

                    .payment-label,
                    .payment-timing,
                    .payment-percentage {
                        font-size: 14px;
                    }

                    .payment-bold {
                        font-size: 16px;
                    }

                    .payment-row {
                        padding: 10px 0;
                    }
                }

                @media (max-width: 576px) {
                    .payment-timing {
                        text-align: left;
                        font-size: 13px;
                    }

                    .payment-percentage {
                        text-align: right;
                        font-size: 14px;
                    }

                    .payment-label {
                        font-size: 13px;
                    }
                }
            `}</style>
        </div>
    );
}