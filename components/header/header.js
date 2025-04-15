'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { useEffect } from 'react';
export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <header>
      <div className='container-fluid'>
        <div className='HeaderBox'>
          <div className='HederBoxFlex'>
            <div className='HeaderBoxLeft'>
              <div className='MenuClick'>&nbsp;</div>
            </div>
            <div className='HeaderBoxMiddle'>
              <Link href="/">
                <img src='logo.png' className='MainLogo' />
              </Link>
              
            </div>
            <div className='HeaderBoxRight'>
              <Link href="/" className='Link2 hover1'>
               Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <nav>
        <Link href="/" style={{ marginRight: 10 }}>Home</Link>
        <Link href="/about-us" style={{ marginRight: 10 }}>About Us</Link>
        <Link href="/projects" style={{ marginRight: 10 }}>Projects</Link>
        <Link href="/news-updates" style={{ marginRight: 10 }}>News</Link>
        <Link href="/contact-us" style={{ marginRight: 10 }}>Contact</Link>
        <Link href="/faq" style={{ marginRight: 10 }}>FAQ</Link>
        <Link href="/privacy-policy" style={{ marginRight: 10 }}>Privacy</Link>
        <Link href="/terms-of-use">Terms</Link>
      </nav> */}
    </header>
  );
}