'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Image from "next/image";
import b1 from "../../../public/cnt.jpg";

export default function ContactUsBanner() {

    useEffect(() => {
        const screenWidth = window.innerWidth;

        // Set width on all elements with the class 'screenWidth'
        const elements = document.querySelectorAll('.screenWidth');
        elements.forEach((el) => {
            el.style.width = `${screenWidth}px`;
        });
    }, []);

    useEffect(() => {
        const updateHeights = () => {
            const header = document.querySelector('header');
            const headerHeight = header?.offsetHeight || 0;
            const windowHeight = window.innerHeight;
            const availableHeight = windowHeight - headerHeight;

            const elements = document.querySelectorAll('.ScreenHeight');
            elements.forEach((el) => {
                el.style.height = `${availableHeight}px`;
            });
        };

        updateHeights();
        window.addEventListener('resize', updateHeights);

        return () => window.removeEventListener('resize', updateHeights);
    }, []);

    return (
        <section className='CntPageHead screenWidth ScreenHeight noOverlay'>
            <Image
                src={b1}
                width={1464}
                height={768}
                layout="responsive"
                alt="Takmeel"
            />
            <div className="CT1">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Hello, How Can We Help You Today?
                </motion.div>
            </div>
        </section>
    );
}