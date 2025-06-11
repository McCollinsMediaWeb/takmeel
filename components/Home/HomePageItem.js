'use client'

import PropertyForm from "@/components/DetailPageComponents/PropertyForm"
import CustomerTestimonials from '@/components/CustomerTestimonials/CustomerTestimonials'
import Banner from '@/components/FirstProjectItem/Banner'
import Footer from '@/components/footer/footer'
import FooterBottom from '@/components/footerBottom/footerBottom'
import HomeAbout from '@/components/HomeAbout/HomeAbout'
import MainMapComponent from '@/components/MainMapComponent/MainMapComponent'
import ProjectItem from '@/components/ProjectItem/ProjectItem'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { useTranslations } from "next-intl";
import '../../styles/scroll-snap.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function HomePageItem() {
  const t = useTranslations('HomePage');

  const GalleryData2 = {
    heading: t('testimonial.subTitle'),
    subheading: t('testimonial.title'),
    testimonials: [
      {
        type: "video",
        src: "t1.mp4",
        alt: "Client 1 Video Testimonial",
        poster: "t1cover.jpg"
      },
      {
        type: "video",
        src: "t2.mp4",
        alt: "Client 2 Video Testimonial",
        poster: "t2cover.jpg"
      },
      {
        type: "video",
        src: "t3.mp4",
        alt: "Client 3 Video Testimonial",
        poster: "t3cover.jpg"
      }
    ]
  };

  const panelsRef = useRef([])


  useEffect(() => {
    const panels = panelsRef.current
    let scrollTween = null

    // ScrollTrigger.normalizeScroll(true)

    // Prevent touchstart scroll while tweening
    const touchStartHandler = (e) => {
      if (scrollTween) {
        e.preventDefault()
        e.stopImmediatePropagation()
      }
    }
    document.addEventListener('touchstart', touchStartHandler, {
      capture: true,
      passive: false,
    })

    // Snap all sections to top after the first one
    panels.forEach((panel, i) => {
      if (i === 0) return

      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          if (!scrollTween) {
            scrollTween = gsap.to(window, {
              scrollTo: { y: panel, offsetY: 0 },
              duration: 0.03,
              ease: 'power4.in',
              onComplete: () => {
                scrollTween = null
              }
            })
          }
        },
        onEnterBack: () => {
          if (!scrollTween) {
            scrollTween = gsap.to(window, {
              scrollTo: { y: panel, offsetY: 0 },
              duration: 0.03,
              ease: 'power4.in',
              onComplete: () => {
                scrollTween = null
              }
            })
          }
        }
      })

    })

    return () => {
      document.removeEventListener('touchstart', touchStartHandler)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])


  return (
    <>
      <section
        // ref={(el) => (panelsRef.current[0] = el)}
        className='firstSection'
      >
        <Banner
          backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg"
          backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"
          text1=""
          // text2="TAKMEEL"
          text2={t('slider1.title')}
          // text3="Where purposeful design and visionary innovation converge to create spaces that inspire, elevate, and redefine modern living."
          text3={t('slider1.content')}
          tagline=""
          url="projects"
          backgroundVideo="tt21.mp4"
          placeholderImage="/cover1.jpg"
        />
      </section>

      <section
        // ref={(el) => (panelsRef.current[1] = el)}
        className='pageSection'
      >
        <ProjectItem
          backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg"
          backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"
          text1={t('slider2.preTitle')}
          text2={t('slider2.title')}
          text3={t('slider2.subTitle')}
          tagline={t('slider2.content')}
          url="takmeel-al-barari-view-properties"
          backgroundVideo="tkdesk1.mp4"
          placeholderImage="/cover2.jpg"
        />
      </section>

      <section
        // ref={(el) => (panelsRef.current[2] = el)}
        className='pageSection'
      >
        <ProjectItem
          backgroundImage="Divine-Residencia/Divine residencia main facade.jpg"
          backgroundImageMobile="k1.jpg"
          text1={t('slider3.preTitle')}
          text2={t('slider3.title')}
          text3={t('slider3.subTitle')}
          tagline={t('slider3.content')}
          url="divine-residencia"
          projectStatus={t('soldOut')}
        />
      </section>

      <section
        // ref={(el) => (panelsRef.current[3] = el)}
        className='pageSection'
      >
        <ProjectItem
          backgroundImage="bannerDesktopFirst.jpg"
          backgroundImageMobile="bannerMobileFirst.jpg"
          text1={t('slider4.preTitle')}
          text2={t('slider4.title')}
          text3={t('slider4.subTitle')}
          tagline={t('slider4.content')}
          url="divine-living"
          projectStatus={t('soldOut')}
        />
      </section>

      <section
        // ref={(el) => (panelsRef.current[4] = el)}
        className='pageSection'
      >
        <ProjectItem
          // backgroundImage="ti01.jpg"
          // backgroundImage="ti01 - Copy.jpg"
          backgroundImage="ti02.jpg"
          backgroundImageMobile="t21.jpg"
          text1={t('slider5.preTitle')}
          text2={t('slider5.title')}
          text3={t('slider5.subTitle')}
          tagline={t('slider5.content')}
          url="divine-residences"
          projectStatus={t('soldOut')}
        />
      </section>

      <section
        // ref={(el) => (panelsRef.current[5] = el)}
        className='pageSection'
      >
        <ProjectItem
          backgroundImage="maydan.jpg"
          backgroundImageMobile="maydan.jpg"
          text1={t('slider6.preTitle')}
          text2={t('slider6.title')}
          text3={t('slider6.subTitle')}
          tagline={t('slider6.content')}
          url="meydan-racecourse-mansion" />
      </section>

      <section
        // ref={(el) => (panelsRef.current[6] = el)}
        className='pageSection'
      >
        <ProjectItem
          backgroundImage="Golf-View-Living-Apartments/Golf Apartments 03.jpg"
          backgroundImageMobile="k5.jpg"
          text1={t('slider7.preTitle')}
          text2={t('slider7.title')}
          text3={t('slider7.subTitle')}
          tagline={t('slider7.content')}
          url="golf-view-living-apartments"
          projectStatus={t('soldOut')}
        />
      </section>

      <section
        // ref={(el) => (panelsRef.current[7] = el)}
        className='pageSection'
      >
        <ProjectItem
          backgroundImage="Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg"
          backgroundImageMobile="vill.jpg"
          text1={t('slider8.preTitle')}
          text2={t('slider8.title')}
          text3={t('slider8.subTitle')}
          tagline={t('slider8.content')}
          url="golf-view-living-villas"
          projectStatus={t('soldOut')} />
      </section>

      <section
        // ref={(el) => (panelsRef.current[8] = el)}
        className=''
      >
        <MainMapComponent MapImageDesk="ttnew.svg" MapImageMobile="ttmobile1.svg" />
      </section>

      <section
        // ref={(el) => (panelsRef.current[9] = el)}
        className=''
      >
        <HomeAbout />
      </section>
      <section
        // ref={(el) => (panelsRef.current[11] = el)}
        className=''
      >
        <CustomerTestimonials  {...GalleryData2} />
      </section>
      <section
        // ref={(el) => (panelsRef.current[10] = el)}
        className=''
      >
        <PropertyForm projectName="Golf View Living Apartments" />
      </section>



      <Footer />

      <FooterBottom />
    </>
  )
}
