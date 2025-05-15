'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Banner = ({
  backgroundImage,
  backgroundImageMobile,
  text1,
  text2,
  text3,
  tagline,
  url,
  projectStatus,
  backgroundVideo = null
}) => {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const arrowRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const arrow = arrowRef.current;
    const content = contentRef.current;

    if (!section || !arrow || !content) return;

    // Arrow animation (same as jQuery)
    gsap.to(arrow, {
      scale: 10,
      transformOrigin: 'center bottom',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=100%',
        scrub: 1,
      },
    });

    // Content pinning (same as jQuery)
    gsap.to(content, {
      y: 0,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
      },
    });

    // Color toggle (optional, as per your jQuery logic)
    ScrollTrigger.create({
      trigger: section,
      start: 'top+=50% top',
      onEnter: () => {
        const el = document.querySelector('.bannerContent');
        if (el) el.style.color = '#000';
      },
      onLeaveBack: () => {
        const el = document.querySelector('.bannerContent');
        if (el) el.style.color = '#fff';
      },
    });

    // STEP 1: Add fixed position after slight scroll
    ScrollTrigger.create({
      trigger: section,
      start: 'top+=1 top',
      onEnter: () => {
        gsap.set(section, {
          position: 'fixed',
          top: 0,
          left: '8px',
          width: '1569px',
          height: '773px',
          maxWidth: '1569px',
          maxHeight: '773px',
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
          transform: 'translate(0px, 0px)',
        });
      },
      onLeaveBack: () => {
        // Optional: reset when scrolling back up
        gsap.set(section, {
          position: 'relative',
          transform: 'translate(0px, 0px)',
        });
      },
    });

    // STEP 2: Remove fixed position and slide down after 773px scroll
    ScrollTrigger.create({
      trigger: section,
      start: 'top+=773 top',
      onEnter: () => {
        gsap.set(section, {
          position: 'relative',
          transform: 'translate(0px, 773px)',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="HomeKv" ref={sectionRef} className="homeKv">
      <div className="imageContainer" ref={bannerRef}>
        {backgroundVideo ? (
          <video
            src={`/${backgroundVideo}`}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{ width: '100%' }}
          />
        ) : (
          <div>
            {/* use actual `isDesktop` logic here if needed */}
            <img
              src={`/${backgroundImage}`}
              alt="Takmeel"
              style={{ width: '100%' }}
            />
          </div>
        )}
      </div>

      <div className="arrowWrapper">
        <svg
          ref={arrowRef}
          className="scrollArrow"
          viewBox="0 0 623 648"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            className="st0"
            points="0,648 309,0 623,648 387,646 308,480 226,647"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="homeKvContentInner" ref={contentRef}>
        <div className="bannerTx bannerContent">
          <h1>Home Comforts</h1>
          <p>
            Highlight expertise in importing premium home textile, towels, rugs
            and serving big-box retailers like Costco and Walmart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
