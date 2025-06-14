'use client'; // optional if using interactivity (like menus)
import TakmeelMenu from './TakmeelMenu';
import HeaderForm from "./HeaderForm";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function Header() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const isHome = pathname === '/' || pathname.startsWith('/detail-page/') || pathname === '/about-us' || pathname === '/gallery';
  const t = useTranslations("Header");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add('scrolledOne');
      } else {
        document.body.classList.remove('scrolledOne');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const vibeStack = document.querySelector(".vibe-stack");
  //   if (!vibeStack) return;

  //   const handleScroll = () => {
  //     if (vibeStack.scrollTop > 0) {
  //       vibeStack.classList.add("scrolledOne");
  //     } else {
  //       vibeStack.classList.remove("scrolledOne");
  //     }
  //   };

  //   vibeStack.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => {
  //     vibeStack.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const vibeStack = document.querySelector(".vibe-stack");
  //     if (!vibeStack) return;

  //     if (window.scrollY > 0) {
  //       vibeStack.classList.add("scrolledOne");
  //     } else {
  //       vibeStack.classList.remove("scrolledOne");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Run on mount

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const toggleLocale = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    window.location.reload();
  };



  return (
    <header style={{ direction: 'ltr' }} className={`MainHeader ${!isHome ? 'fixed-class' : ''}`}>
      <TakmeelMenu />
      <HeaderForm />
      <div className='container-fluid'>
        <div className='HeaderBox'>
          <div className='HederBoxFlex'>
            <div className='HeaderBoxLeft'>
              <div className='MenuClick toggleMenu'>&nbsp;</div>
            </div>
            <div className='HeaderBoxMiddle'>
              <Link href="/">
                <img src='/logo.png' className='MainLogo' />
              </Link>

            </div>
            <div className='HeaderBoxRight'>
              <div onClick={toggleLocale} className='LanguageSwitcher ArabicLink arabic-text'>
                {currentLocale === 'en' ? 'عربي' : 'English'}
                <span className="LanguageICon uaelogo">&nbsp;</span>
              </div>
              <div className='Link4 hover1 toggleForm cursor-pointer d-only'>
                {t('getInTouchButton')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}