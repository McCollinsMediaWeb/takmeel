'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const bgImages = [
    // '/bannerDesktopFirst.jpg',
    // '/Divine-Residencia/Divine residencia main facade.jpg',
    // '/Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg',
    '/dl3.jpg',
    '/dvr2.jpg',
    '/dl6.jpg',
    '/d1.jpg',
    '/ak2.jpg',
    '/Meydan-Racecourse-Mansion/Maydan 07.jpg'
    // '/Golf-View-Living-Apartments/Golf Apartments 03.jpg'
]
export default function TakmeelMenu() {
    const pathname = usePathname();
    const [active, setActive] = useState(0);

    const [prevImage, setPrevImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(bgImages[active]);
    const isHoveringRef = useRef(false);

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

    // Auto change image every 3 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (!isHoveringRef.current) {
    //             setActive(prev => (prev + 1) % bgImages.length);
    //         }
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //     setImageLoaded(false); // Trigger fade-in on image change
    // }, [active]);

    useEffect(() => {
        let interval;

        const startInterval = () => {
            if (!interval) {
                interval = setInterval(() => {
                    if (
                        document.body.classList.contains("menu-open") &&
                        !isHoveringRef.current
                    ) {
                        setActive((prev) => (prev + 1) % bgImages.length);
                    }
                }, 5000);
            }
        };

        const stopInterval = () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        };

        // Start interval and watch for menu class toggle
        const observer = new MutationObserver(() => {
            if (document.body.classList.contains("menu-open")) {
                startInterval();
            } else {
                stopInterval();
            }
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            stopInterval();
            observer.disconnect();
        };
    }, []);



    useEffect(() => {
        if (bgImages[active] !== currentImage) {
            setPrevImage(currentImage);
            setCurrentImage(bgImages[active]);
        }
    }, [active, bgImages, currentImage]);


    return (
        <div className='TakmeelMenu'>

            {/* <div className='Backdrop BackdropMenu toggleMenu BackdropSlide'
                style={{
                    zIndex: 999,
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
            </div> */}

            {/* <div
                className="Backdrop BackdropMenu toggleMenu BackdropSlide"
                style={{ position: 'relative', zIndex: 999 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={bgImages[active]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: 10,
                        }}
                    >
                        <Image
                            src={bgImages[active]}
                            alt="Background"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div> */}


            <div
                className="Backdrop BackdropMenu toggleMenu BackdropSlide"
            >
                {/* Outgoing image (fades out) */}
                <AnimatePresence>
                    {prevImage && prevImage !== currentImage && (
                        <motion.div
                            key={prevImage}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            style={{ position: 'absolute', inset: 0, zIndex: 9 }}
                            onAnimationComplete={() => setPrevImage(null)} // remove after fade
                        >
                            <Image
                                src={prevImage}
                                alt="Previous Background"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Incoming image (fades in) */}
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'absolute', inset: 0, zIndex: 10 }}
                >
                    <Image
                        src={currentImage}
                        alt="Current Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </motion.div>
            </div>


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
                                { path: '/about-us', label: 'Our Story' },
                                { path: '/projects', label: 'Signature Projects' },
                                { path: '/gallery', label: 'Visual Journey' },
                                { path: '/news-updates', label: 'News & Updates' },
                                { path: '/contact-us', label: 'Let\'s Connect' },
                            ].map((item, index) => (
                                <li
                                    key={item.path}
                                    className={pathname === item.path ? 'active' : ''}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        viewport={{ once: false, amount: 0.5 }}
                                    >
                                        <Link style={{ width: 'fit-content;' }} href={item.path} className="Link8" onMouseEnter={() => {
                                            isHoveringRef.current = true;
                                            setActive(index);
                                        }}
                                            onMouseLeave={() => {
                                                isHoveringRef.current = false;
                                            }}>
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
