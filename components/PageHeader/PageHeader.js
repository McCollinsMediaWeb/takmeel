'use client'; // optional if using interactivity (like menus)
import { motion } from "framer-motion";
import { useEffect } from 'react';
export default function PageHeader() {

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
        <section className='PageHeaderTp1 custom-section-flexible'>
            <div>
                <div className='container custom-container-flexible'>
                    <div className='PageHdContent text-center'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.5 }} // triggers when 50% of it is in view
                        >
                            <div className='HdT1 nunito-text'>ABOUT US</div>
                            <div className='HdT2'>
                                your dream home awaits<br />
                                its grand unveiling.
                            </div>
                            <div className='HdT3 nunito-text'>
                                Takmeel orchestrates exquisite marvels that go beyond a home, offering spaces where families & dreams grow and aspirations are accomplished.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}