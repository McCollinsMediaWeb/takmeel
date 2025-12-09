
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Component7() {
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
            <div className="comp7">
                <div className="container1">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="row">
                            <div className="col-md-8 p-0">
                                <div >
                                    <Image
                                        src="/map.jpg"
                                        width={910}
                                        height={772}
                                        alt="Takmeel"
                                        priority
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 RightBoxTp1">
                                <div className="RHd1" >Positioned for Growth</div>
                                <div className="RHd2" >Dubai South</div>
                                <ul className="RgUl">
                                    <li  >
                                        <div className="RgIconBx u1">&nbsp;</div>
                                        <div className="li1">Al Maktoum
                                            International Airport</div>
                                        <div className="li2">10 Minutes</div>
                                    </li>
                                    <li  >
                                        <div className="RgIconBx u2">&nbsp;</div>
                                        <div className="li1">Expo City Dubai</div>
                                        <div className="li2">12 Minutes</div>
                                    </li>
                                    <li  >
                                        <div className="RgIconBx u3">&nbsp;</div>
                                        <div className="li1">Dubai South Golf District</div>
                                        <div className="li2">10 Minutes</div>
                                    </li>
                                    <li  >
                                        <div className="RgIconBx u4">&nbsp;</div>
                                        <div className="li1">Palm Jebel Ali</div>
                                        <div className="li2">20 Minutes</div>
                                    </li>
                                    <li  >
                                        <div className="RgIconBx u5">&nbsp;</div>
                                        <div className="li1">Sheikh Zayed Road</div>
                                        <div className="li2">18 Minutes</div>
                                    </li>
                                    <li  >
                                        <div className="RgIconBx u6">&nbsp;</div>
                                        <div className="li1">Sheikh Mohammed Bin Zayed Road</div>
                                        <div className="li2">15 Minutes</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

        </div>
    );
}