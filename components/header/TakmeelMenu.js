'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function TakmeelMenu() {
    const pathname = usePathname();

    useEffect(() => {
        const toggleButtons = document.querySelectorAll(".toggleMenu");

        const toggleClass = () => {
            document.body.classList.toggle("menu-open");
        };

        toggleButtons.forEach((btn) => btn.addEventListener("click", toggleClass));

        // Cleanup
        return () => {
            toggleButtons.forEach((btn) => btn.removeEventListener("click", toggleClass));
        };
    }, []);


    return (
        <div className='TakmeelMenu'>

            <div className='Backdrop BackdropMenu toggleMenu'>&nbsp;</div>
            <div className='Megamenu'>
                <div>
                    <div className='MenuHd'>
                        <div className='closeBtn toggleMenu'>&nbsp;</div>
                    </div>
                    <div className='MenuMiddle toggleMenu'>
                        <ul>
                            <li className={pathname === '/' ? 'active' : ''}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href="/" className='Link8'>
                                        Home
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/about-us' ? 'active' : ''}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/about-us'} className='Link8'>
                                        About Us
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/projects' ? 'active' : ''}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/projects'} className='Link8'>
                                        Projects
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/gallery' ? 'active' : ''}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/gallery'} className='Link8'>
                                        Gallery
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/news-updates' ? 'active' : ''}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/news-updates'} className='Link8'>
                                        News & Updates
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/contact-us' ? 'active' : ''}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/contact-us'} className='Link8'>
                                        Contact Us
                                    </Link>
                                </motion.div>

                            </li>
                        </ul>
                    </div>
                    <div className='MenuFtr toggleMenu'>
                        <ul>
                            <li>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href="/careers" className='Link8'>
                                        Careers
                                    </Link>
                                </motion.div>

                            </li>
                            <li>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href="/faqs" className='Link8'>
                                        FAQs
                                    </Link>
                                </motion.div>

                            </li>
                            <li>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href="/privacy-policy" className='Link8'>
                                        Privacy Policies
                                    </Link>
                                </motion.div>

                            </li>
                            <li>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href="/terms-of-use" className='Link8'>
                                        Terms of use
                                    </Link>
                                </motion.div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}