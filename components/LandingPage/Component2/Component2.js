
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Component2() {
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
            <div className="pd-common comp2">
                <div className="container text-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="comp2ic" variants={itemVariants}>&nbsp;</div>
                        <div className="Txt2 text-uppercase" variants={itemVariants}>An Emblem Inspired by <br />Balance and Beauty</div>
                        <div className="Txt5" variants={itemVariants}>Divine Elements at Dubai South by Takmeel Developments offers Studio, 1 and 2 bedroom apartments designed for singles, couples, and families, combining modern layouts, stylish finishes, and flexible living spaces for balanced city living.</div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}