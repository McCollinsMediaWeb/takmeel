'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';
export default function WhyWorkTogether() {

    return (
        <div className="BlogPostMainArea pd-common bg2">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 centerBlock">
                            <div className="BlT2" style={{ margin: '20px' }}>WHY WORK TOGETHER<span style={{ fontFamily: 'monospace' }} >?</span></div>
                            <Image
                                src="/team-photo.jpg"
                                width={478}
                                height={253}
                                layout="responsive"
                                alt="Takmeel"
                            />
                            <div className="BlT3" style={{ margin: '20px' }}>We seek passionate and driven individuals to fill open positions across various departments. Whether you’re an experienced professional or a fresh talent looking to make your mark, Takmeel offers a collaborative environment where creativity and dedication thrive. Join us in shaping the future of real estate and unlocking new possibilities. Explore our current openings and embark on a rewarding journey with Takmeel Real Estate.</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}