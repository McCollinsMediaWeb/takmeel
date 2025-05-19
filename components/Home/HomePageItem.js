'use client'

import ContactForm from '@/components/ContactForm/ContactForm'
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
import '../../styles/scroll-snap.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function HomePageItem() {
  
   const GalleryData2 = {
    heading: "Takmeel – A Voice of Trust",
    subheading: "What Our Clients Say About Us",
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
        ref={(el) => (panelsRef.current[0] = el)}
        className='firstSection'
      >
       <Banner
          backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg"
          backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"
          text1=""
          text2="TAKMEEL"
          text3="Where purposeful design and visionary innovation converge to create spaces that inspire, elevate, and redefine modern living."
          tagline=""
          url="projects"
          backgroundVideo="tt2.mp4"
        /> 
      </section>

      <section
        ref={(el) => (panelsRef.current[1] = el)}
        className='pageSection'
      >
         <ProjectItem
            backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg"
            backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"
            text1="Coming Soon"
            text2="Al Barari"
            text3="Majan, Dubai"
            tagline="Urban Living, Reimagined by Nature"
            url="takmeel-al-barari-view-properties"
            backgroundVideo="tkdesk1.mp4"
          />
      </section>

      <section
        ref={(el) => (panelsRef.current[2] = el)}
        className='pageSection'
      >
       <ProjectItem
          backgroundImage="Divine-Residencia/Divine residencia main facade.jpg"
          backgroundImageMobile="dvk.jpg"
          text1="Featured Properties"
          text2="Divine Residencia"
          text3="Dubai Studio City, Dubai"
          tagline="Where Comfort Meets Contemporary Elegance"
          url="divine-residencia"
          projectStatus="Sold Out"
        />
      </section>

      <section
        ref={(el) => (panelsRef.current[3] = el)}
        className='pageSection'
      >
      <ProjectItem
          backgroundImage="bannerDesktopFirst.jpg"
          backgroundImageMobile="bannerMobileFirst.jpg"
          text1="Featured Properties"
          text2="Divine Living"
          text3="Arjan, Dubai"
          tagline="Thoughtfully Designed for Peaceful Living"
          url="divine-living"
          projectStatus="Sold Out"
        />
      </section>

      <section
        ref={(el) => (panelsRef.current[4] = el)}
        className='pageSection'
      >
      <ProjectItem
          backgroundImage="r.jpg"
          backgroundImageMobile="Divine-Residence-Image-Mobile.jpg"
          text1="Featured Properties"
          text2="Divine Residences"
          text3="Dubai"
          tagline="Smart Spaces Crafted for Modern Lifestyles"
          url="divine-residencies"
          projectStatus="Sold Out"
        />
      </section>

      <section
        ref={(el) => (panelsRef.current[5] = el)}
        className='pageSection'
      >
        <ProjectItem backgroundImage="maydan.jpg" backgroundImageMobile="meydan-mobile.jpg" text1="Project Showcase" text2="Meydan Racecourse Mansion" text3="Dubai" tagline="Where Grandeur Meets Precision" url="meydan-racecourse-mansion" />
      </section>

      <section
        ref={(el) => (panelsRef.current[6] = el)}
        className='pageSection'
      >
        <ProjectItem backgroundImage="Golf-View-Living-Apartments/Golf Apartments 03.jpg" backgroundImageMobile="bannerMobileFour.jpg" text1="Featured Properties" text2="Golf View Living Apartments" text3="Al Zorah, Ajman" tagline="Your Everyday Escape, Overlooking the Greens" url="golf-view-living-apartments" projectStatus="Sold Out" />
      </section>

      <section
        ref={(el) => (panelsRef.current[7] = el)}
        className='pageSection'
      >
        <ProjectItem backgroundImage="Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg" backgroundImageMobile="Golf-View-Living-Villas/divine-golf-villas-Facade-Mobile 03.jpg" text1="Featured Properties" text2="Golf View Living Villas" text3="Ajman" tagline="Private Villas Surrounded by Nature’s Calm" url="golf-view-living-villas" projectStatus="Sold Out" />
      </section>

      <section
        ref={(el) => (panelsRef.current[8] = el)}
        className='pageSection'
      >
        <MainMapComponent MapImageDesk="map6.svg" MapImageMobile="mapmobile.svg" />
      </section>

      <section
        ref={(el) => (panelsRef.current[9] = el)}
        className='pageSection'
      >
       <HomeAbout />
      </section>

      <section
        ref={(el) => (panelsRef.current[10] = el)}
        className='pageSection'
      >
        <ContactForm />
      </section>

      <section
        ref={(el) => (panelsRef.current[11] = el)}
        className='pageSection'
      >
        <CustomerTestimonials  {...GalleryData2} />
      </section>

      <Footer />

      <FooterBottom />
    </>
  )
}
