'use client'; // optional if using interactivity (like menus)
import TakmeelMenu from './TakmeelMenu';
import HeaderForm from "./HeaderForm";

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
      <TakmeelMenu/>
      <HeaderForm/>
      <div className='container-fluid'>
        <div className='HeaderBox'>
          <div className='HederBoxFlex'>
            <div className='HeaderBoxLeft'>
              <div className='MenuClick toggleMenu'>&nbsp;</div>
            </div>
            <div className='HeaderBoxMiddle'>
              <Link href="/">
                <img src='logo.png' className='MainLogo' />
              </Link>
              
            </div>
            <div className='HeaderBoxRight'>
              <div className='Link4 hover1 toggleForm cursor-pointer'>
               Get in Touch
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}