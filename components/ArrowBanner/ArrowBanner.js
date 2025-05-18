// Banner.tsx
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate text on load
    gsap.from(textRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.5,
    });

    // Bouncing arrow
    gsap.to(arrowRef.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1,
    });
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: 'url("/banner.jpg")' }} // replace with your video or image
    >
      <div ref={textRef} className="text-center">
        <h1 className="text-5xl font-bold mb-4">Experience the Extraordinary</h1>
        <p className="text-xl">Discover the future of luxury living</p>
      </div>

      <div ref={arrowRef} className="absolute bottom-8">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </div>
  );
};

export default Banner;