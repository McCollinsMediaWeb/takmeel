
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Component10() {
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
            <div className="pd-common comp10">
                <div className="container">

                   
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="Comp10T1" >Light, Space & Serenity
In Perfect Balance</div>
                                <div className="Comp10T2" >Step into homes that balance openness and calm, where high ceilings and full-height windows invite natural light, and warm stone finishes create timeless elegance. Landscaped courtyards and open lounges extend this serene atmosphere into the shared spaces.</div>
                            </div>
                            <div className="col-md-6">
                                <Image
                                 
                                                        src="/uk1.jpg"
                                                        width={595}
                                                        height={436}
                                                        alt="Takmeel"
                                                        priority
                                                        layout="responsive"
                                                    />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}