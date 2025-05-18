"use client";

import { motion } from "framer-motion";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

export default function FirstProjectItem({
    backgroundImage,
    backgroundImageMobile,
    text1,
    text2,
    text3,
    tagline,
    url,
    projectStatus,
    backgroundVideo = null
}) {
    const containerRef = useRef(null);
     const bannerRef = useRef(null);
    const bannerContentRef = useRef(null);
    const scrollArrowRef = useRef(null);
    const contentInnerRef = useRef(null);
    const videoRef = useRef(null);
    const isDesktop = useMediaQuery("(min-width: 960px)");

    const [phase, setPhase] = useState("initial"); // 'initial' -> 'transition' -> 'final'

    useEffect(() => {
        const timer = setTimeout(() => {
            setPhase("transition"); // begin fade-out
            setTimeout(() => {
                setPhase("final"); // show full content
            }, 1000); // wait for fade-out to finish
        }, 4000); // 4s display of 'Takmeel'

        return () => clearTimeout(timer);
    }, []);

    // Fade-only animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    // START ARROW ANIMATION 

   useEffect(() => {
    const bannerContainer = bannerRef.current;
    const bannerContent = bannerContentRef.current;
    const contentInner = contentInnerRef.current;
    const videoElement = videoRef.current;

    // Banner Text Animation

    ScrollTrigger.create({
      trigger: bannerContainer,
      start: 'top+=60% top',
      onEnter: () => {
        if (bannerContent) {
          bannerContent.style.color = '#000';
           bannerContent.classList.add('changeColor')
        }
      },
      onLeaveBack: () => {
        if (bannerContent) {
          bannerContent.style.color = '#fff';
           bannerContent.classList.remove('changeColor')
        }
      }
    });

    ScrollTrigger.create({
        trigger: bannerContainer,
        start: 'top+=60% top',
        onEnter: () => {
          if (videoElement) {
            videoElement.style.position = 'fixed';
            videoElement.style.top = '0';
          }
        },
        onLeaveBack: () => {
          if (bannerContent) {
            videoElement.style.position = 'relative';
          }
        }
      });

    gsap.to(contentInner, {
      y: 0,
      scrollTrigger: {
        trigger: bannerContainer,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1
      }
    });
  

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Arrow Animation

  useLayoutEffect(() => {
    const bannerRefItem = bannerRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRefItem,
          start: 'top top',
          end: '+=100%',
          scrub: 1
        }
      });

      tl.to(scrollArrowRef.current, {
        scale: 1,
        opacity: 0,
        yPercent: 0,
        transformOrigin: 'center bottom',
        ease: 'none',
        duration: 0.3
      });

      tl.to(scrollArrowRef.current, {
        scale: 6,
        yPercent: 50,
        opacity: 0.4,
        y: 10,
        transformOrigin: 'center middle',
        ease: 'none',
        duration: 0.5
      });

      tl.to(scrollArrowRef.current, {
        scale: 15,
        yPercent: 250,
        opacity: 0.9,
        y: 500,
        transformOrigin: 'center middle',
        ease: 'none',
        duration: 0.2
      });

    }, bannerRefItem);


    return () => ctx.revert();
  }, []);


    return (
        <div className="FullScreenBanner Projects" ref={bannerRef}>
            {backgroundVideo ? (
                <div className="videoWrapper" ref={videoRef}>
                <video
                    src={`/${backgroundVideo}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    style={{ width: '100%' }}
                />
                </div>
            ) : (
                <div>
                    {isDesktop ? (
                        <Image
                            src={`/${backgroundImage}`}
                            width={1338}
                            height={714}
                            layout="responsive"
                            alt="Takmeel"
                            loading="lazy"
                        />
                    ) : (
                        <Image
                            src={`/${backgroundImageMobile}`}
                            width={697}
                            height={768}
                            layout="responsive"
                            alt="Takmeel"
                            loading="lazy"
                        />
                    )}
                </div>
            )}

            <div className="FsBannerContent VideoD">
                <div className="FsBannerContentFlex centerBlock">
                    <div className="container" >
                      <div className="bannerTx" ref={bannerContentRef}>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div>
                                {projectStatus && (
                                    <motion.div className="Txt1" variants={itemVariants}>
                                        <div><span className="PrStatus">{projectStatus}</span></div>
                                    </motion.div>
                                )}

                                {/* PHASE 1: Only show 'Takmeel' */}
                                {phase === "initial" && (
                                    <motion.div
                                        key="initial-text2"
                                        className="Txt2 text-uppercase TxtBig"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        {text2}
                                    </motion.div>
                                )}

                                {/* PHASE 2: Fade-out animation */}
                                {phase === "transition" && (
                                    <motion.div
                                        key="fade-out-text2"
                                        className="Txt2 text-uppercase TxtBig"
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        {text2}
                                    </motion.div>
                                )}

                                {/* PHASE 3: Show rest of content with new title */}
                                {phase === "final" && (
                                    <>
                                        <motion.div className="Txt1" variants={itemVariants}>
                                            {text1}
                                        </motion.div>

                                        <motion.div className="Txt2 text-uppercase" variants={itemVariants}>
                                            Crafted for Inspired Living
                                        </motion.div>

                                        <motion.div className="Txt3 nunito-text SmallSizeTxt" variants={itemVariants}>
                                            {text3}
                                        </motion.div>

                                        <motion.div className="Txt17 nunito-text" variants={itemVariants}>
                                            {tagline}
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <Link href={`/${url}`} className="Link1 hover1">
                                                Explore our projects
                                            </Link>
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                        </div>
                    </div>
                    <div className="arrowWrapper">
                    <svg
                        ref={scrollArrowRef}
                        className="scrollArrow"
                        viewBox="0 0 224.5 206.6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                     <g>
                        <path fill="#ffffff" d="M7.2,83.3C10.9,79.7,90.7,11,96.9,5.8c6.2-5.1,20.6-9.6,30.1-0.8s80.7,69.6,89.9,78.3
                          c9.2,8.7,10.4,25.8,0.7,34.1c-9.7,8.3-22.1,9.6-30.9,2.4c-8.7-7.3-74.4-64.2-74.4-64.2s-63.5,55.3-71.9,62.2
                          c-8.5,7-24.3,10.9-33.9-1.2S-1.3,91.6,7.2,83.3z"/>
                        <path fill="#ffffff" d="M7.2,165.2c3.6-3.6,83.5-72.3,89.7-77.4c6.2-5.1,20.6-9.6,30.1-0.8s80.7,69.6,89.9,78.3
                          c9.2,8.7,10.4,25.8,0.7,34.1c-9.7,8.3-22.1,9.6-30.9,2.4c-8.7-7.3-74.4-64.2-74.4-64.2s-63.5,55.3-71.9,62.2s-24.3,10.9-33.9-1.2
                          S-1.3,173.6,7.2,165.2z"/>
                      </g>
                      </svg>
                     
                    </div>
                </div>
            </div>
        </div>
    );
}