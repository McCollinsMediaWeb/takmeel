"use client"; // Make sure this is a client component

import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const FullPageScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set up full-page scroll behavior
    gsap.utils.toArray('.section').forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true, // Pin the section during scroll
        },
      });
    });
  }, []);

  return (
    <div>
      <div className="section" style={{ backgroundColor: 'lightblue' }}>
        Section 1
      </div>
      <div className="section" style={{ backgroundColor: 'lightgreen' }}>
        Section 2
      </div>
      <div className="section" style={{ backgroundColor: 'lightcoral' }}>
        Section 3
      </div>
    </div>
  );
};

export default FullPageScroll;
