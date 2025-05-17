'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const bgImages = [
    '/bannerDesktopFirst.jpg',
    '/Divine-Residencia/Divine residencia main facade.jpg',
    '/bannerDesktopFirst.jpg',
    '/klt.jpg',
    '/maydan.jpg',
    '/Golf-View-Living-Apartments/Golf Apartments 03.jpg'
]
export default function TakmeelMenu() {
    const pathname = usePathname();
    const [active, setActive] = useState(0);

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

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
  setImageLoaded(false); // Trigger fade-in on image change
}, [active]);


    return (
        <div className='TakmeelMenu'>

            <div className='Backdrop BackdropMenu toggleMenu BackdropSlide'
                style={{
                    zIndex:999,
                    // backgroundImage: `url('${bgImages[active]}')`
                }}
            >
                <Image
  key={bgImages[active]} // re-mounts the Image on each change
  src={bgImages[active]}
  alt="Background"
  fill
  className={`image12 ${imageLoaded ? 'loaded' : ''}`}
  style={{ objectFit: 'cover', zIndex: 10 }}
  onLoadingComplete={() => setImageLoaded(true)}
/>
            </div>

            {/* <motion.div
                className="Backdrop BackdropMenu toggleMenu"
                style={{
                    backgroundImage: `url('${bgImages[active]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
                key={bgImages[active]} // important for re-triggering motion animation
                initial={{ backgroundPositionX: '-100%' }}
                animate={{ backgroundPositionX: 'center' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            /> */}


            <div className='Megamenu'>
                <div>
                    <div className='MenuHd'>
                        <div className='closeBtn toggleMenu'>&nbsp;</div>
                    </div>
                    {/* <div className='MenuMiddle toggleMenu'>
                        <ul>
                            <li className={pathname === '/' ? 'active' : ''} onHover={setActive(0)} >
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href="/" className='Link8'>
                                        Home
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/about-us' ? 'active' : ''}  onHover={setActive(1)}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/about-us'} className='Link8'>
                                        About Us
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/projects' ? 'active' : ''}  onHover={setActive(2)}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/projects'} className='Link8'>
                                        Projects
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/gallery' ? 'active' : ''}  onHover={setActive(3)}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/gallery'} className='Link8'>
                                        Gallery
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/news-updates' ? 'active' : ''}  onHover={setActive(4)}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/news-updates'} className='Link8'>
                                        News & Updates
                                    </Link>
                                </motion.div>

                            </li>
                            <li className={pathname === '/contact-us' ? 'active' : ''}  onHover={setActive(5)}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    <Link href={'/contact-us'} className='Link8'>
                                        Contact Us
                                    </Link>
                                </motion.div>

                            </li>
                        </ul>
                    </div> */}


                    <div className="MenuMiddle toggleMenu">
                        <ul>
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/about-us', label: 'About Us' },
                                { path: '/projects', label: 'Projects' },
                                { path: '/gallery', label: 'Gallery' },
                                { path: '/news-updates', label: 'News & Updates' },
                                { path: '/contact-us', label: 'Contact Us' },
                            ].map((item, index) => (
                                <li
                                    key={item.path}
                                    className={pathname === item.path ? 'active' : ''}
                                    onMouseEnter={() => setActive(index)}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        viewport={{ once: false, amount: 0.5 }}
                                    >
                                        <Link href={item.path} className="Link8">
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className='MenuFtr toggleMenu'>
                        <ul>
                            <li>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
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
                                    transition={{ duration: 0.8, ease: "easeOut" }}
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
                                    transition={{ duration: 0.8, ease: "easeOut" }}
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
                                    transition={{ duration: 0.8, ease: "easeOut" }}
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