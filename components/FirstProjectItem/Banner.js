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
    const scrollBg = useRef(null);
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
        start: 'top+=50% top',
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
    const bannerBgRefItem = bannerRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerBgRefItem,
          start: 'top top',
          end: '+=70%',
          scrub: 1
        }
      });
     
     tl.to(scrollBg.current, {
        opacity: 0,
        yPercent: 0,
        transformOrigin: 'center bottom',
        ease: 'none',
        duration: 1
      });
     tl.to(scrollBg.current, {
        opacity: 0.9,
        yPercent: 0,
        transformOrigin: 'center bottom',
        ease: 'none',
        duration: 1
      });

    }, bannerBgRefItem);


    return () => ctx.revert();
  }, []);

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
        scale: 0,
        opacity: 0,
        yPercent: 0,
        transformOrigin: 'center bottom',
        ease: 'none',
        duration: 0.1
      });
      tl.to(scrollArrowRef.current, {
        scale: 0.5,
        opacity: 1,
        yPercent: -80,
        transformOrigin: 'center bottom',
        ease: 'none',
        duration: 1.4
      });
     
      tl.to(scrollArrowRef.current, {
        scale: 1,
        yPercent: -70,
        opacity: 1,
        y: 10,
        transformOrigin: 'center middle',
        ease: 'none',
        duration: 0.8
      });
     
      tl.to(scrollArrowRef.current, {
        scale: 1,
        yPercent: -70,
        opacity: 1,
        y: 10,
        transformOrigin: 'center middle',
        ease: 'none',
        duration: 0.8
      });

      // tl.to(scrollArrowRef.current, {
      //   scale: 40,
      //   yPercent: -80,
      //   opacity: 0.9,
      //   y: 10,
      //   transformOrigin: 'center middle',
      //   ease: 'none',
      //   duration: 0.5
      // });

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
                  <div className="arrowContainer">
                  <div className="arrowBg " ref={scrollBg}></div>
                    <div className="arrowWrapper">
                        <Image
                        ref={scrollArrowRef}
                        className="scrollArrow"
                            src={`/bannerLogoLg.png`}
                            width={439}
                            height={1205}
                            layout="responsive"
                            alt="Takmeel"
                            loading="lazy"
                        />
                    
                  </div>
                </div>
                </div>
            </div>
        </div>
    );
}