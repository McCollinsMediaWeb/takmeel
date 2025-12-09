
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Component5() {
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
            <div className="pd-common comp5">
                <div className="container">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="Txt3 text-center" >Feature & Amenities</div>
                        <div className="Txt2 text-center text-uppercase" >Luxury Within Reach,<br />
                            Comfort All Around</div>
                    </motion.div>

                    <div className="AmnBox">
                        <div className="row">
                            <div className="col-md-6">
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="Txt6 text-center text-uppercase">First Floor Amenities</div>
                                    <div className="Txt7 text-center" >Wellness meets community — sunlit pools, shaded seating, and spaces for families to gather and grow.</div>
                                </motion.div>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic1">&nbsp;</div>
                                                <div className="AmnItem1T1">Kids’ Pool</div>
                                            </div>
                                        </div>
                                         <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic2">&nbsp;</div>
                                                <div className="AmnItem1T1">Main Pool</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic3">&nbsp;</div>
                                                <div className="AmnItem1T1">Jacuzzi</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic4">&nbsp;</div>
                                                <div className="AmnItem1T1">Outdoor Showers</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic5">&nbsp;</div>
                                                <div className="AmnItem1T1">Fully Equipped Gym</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic6">&nbsp;</div>
                                                <div className="AmnItem1T1">Kids’ Play Area</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic7">&nbsp;</div>
                                                <div className="AmnItem1T1">Seating Areas</div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>

                            </div>
                            <div className="col-md-6">
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="Txt6 text-center text-uppercase" >Rooftop Amenities</div>
                                    <div className="Txt7 text-center" >An elevated lifestyle above the city — where evenings bring movies under the stars, matches on the court, and moments that linger long after sunset.</div>
                                </motion.div>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic8">&nbsp;</div>
                                                <div className="AmnItem1T1">Outdoor Cinema</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic9">&nbsp;</div>
                                                <div className="AmnItem1T1">Padel Court</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic10">&nbsp;</div>
                                                <div className="AmnItem1T1">Lounge Areas & Cabanas</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic11">&nbsp;</div>
                                                <div className="AmnItem1T1">BBQ Area</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic12">&nbsp;</div>
                                                <div className="AmnItem1T1">Table Tennis</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic13">&nbsp;</div>
                                                <div className="AmnItem1T1">Benches & Board-Game Zones</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic14">&nbsp;</div>
                                                <div className="AmnItem1T1">Chess Corner</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="AmnItem1" >
                                                <div className="AmnItemIcon ic15">&nbsp;</div>
                                                <div className="AmnItem1T1">Bar Area</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}