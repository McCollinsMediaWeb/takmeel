'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroBanner() {
  useEffect(() => {
    const cards = gsap.utils.toArray('.cards_wrap .card');
    const angle = 10;
    const pinDistance = window.innerHeight * cards.length;

    ScrollTrigger.create({
      trigger: '.pinned',
      start: 'top top',
      pin: true,
      end: '+=' + 100 * (cards.length - 1) + '%',
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true,
      ease: 'none'
    });

    gsap.set(cards, {
      rotate: (index) => -angle * index,
      zIndex: (index) => cards.length - index,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.cards_wrap',
        start: 'top top',
        end: 'bottom bottom',
        // markers: true,
        toggleActions: 'play none play reverse',
      },
    }).from('.card', {
      y: 1000,
      delay: 0.5,
      stagger: {
        amount: 0.5,
      },
    });

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        let start = 'top+=' + 100 * (index + 1) + '% top';
        gsap.timeline({
          scrollTrigger: {
            trigger: '.cards_wrap',
            start,
            end: '+=' + pinDistance,
            // markers: true,
            toggleActions: 'play none none reverse',
          },
        }).to(card, {
          rotate: -angle * (index + 1),
          duration: 0.8,
          ease: 'power4.Out',
        }, '-=0.1').to(card, {
          y: '-1200',
          duration: 1,
          ease: 'sine.inOut',
        }, '-=0.2');
      }
    });
  }, []);

  return (
    <div className="flex-container">
      <div className="sections">
     

        <section className="section bg-orange pinned">
          <div className="box">
            <h1>Two</h1>
            <div className="cards_wrap">
              <div className="card" style={{ '--bg-color': '#9fca54' }} />
              <div className="card" style={{ '--bg-color': '#f2dd10' }} />
              <div className="card" style={{ '--bg-color': '#ec6f30' }} />
              <div className="card" style={{ '--bg-color': '#b9773a' }} />
            </div>
          </div>
        </section>

       <div className="after-banner">
        <h2>Next Section</h2>
      </div>
      </div>
    </div>
  );
}
