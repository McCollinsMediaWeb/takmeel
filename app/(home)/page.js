
import FullScreenBanner from "@/components/fullscreen-banner/fullScreenBanner";
import HomeBanner2 from "@/components/HomeBanner2/HomeBanner2";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import SoldOutBox from "@/components/SoldOutBox/SoldOutBox";
import ContactForm from "@/components/ContactForm/ContactForm";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import MainMapComponent from "@/components/MainMapComponent/MainMapComponent";
import FirstProjectItem from "@/components/FirstProjectItem/FirstProjectItem";
import CustomerTestimonials from "@/components/CustomerTestimonials/CustomerTestimonials";
import MetaInjector from "@/components/Meta/MetaInjector";
import { getMetaTags } from "@/lib/getMetaTags";
export default async function Home() {
  const metaTags = await getMetaTags("/");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }
  // const GalleryData2 = {
  //   heading: "Takmeel – A Voice of Trust",
  //   subheading: "What Our Clients Say About Us",
  //   testimonials: [
  //     { type: "image", src: "t1cover.jpg", alt: "Client 1 Testimonial" },
  //     { type: "image", src: "t2cover.jpg", alt: "Client 2 Testimonial" },
  //     { type: "image", src: "t3cover.jpg", alt: "Client 3 Testimonial" },
  //     { type: "video", src: "t1.mp4", alt: "Client 1 Video Testimonial" },
  //     { type: "video", src: "t2.mp4", alt: "Client 2 Video Testimonial" },
  //     { type: "video", src: "t3.mp4", alt: "Client 3 Video Testimonial" }
  //   ]
  // };

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


  return (
    <>
      <MetaInjector metaContent={metaTags[0].metaContent} />
      <div>
        <div>
          {/* <FullScreenBanner backgroundImage="main1.jpg" backgroundImageMobile="bannerMobileSecondt.jpg" text1="Now Unveiling"  text2="Divine Al Barari" text3="Majan, Dubai" tagline="Urban Living, Reimagined by Nature" url="takmeel-al-barari-view-properties" /> */}
          {/* <FullScreenBanner backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" videoPosterDesktop="Takmeel-Al-Barrari-View/Majan 03.jpg" VideoPosterMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" text1="Now Unveiling"  text2="Divine Al Barari" text3="Majan, Dubai" tagline="Urban Living, Reimagined by Nature" url="takmeel-al-barari-view-properties" />
        <FullScreenBanner backgroundImage="divinresdesk.mp4" backgroundImageMobile="dvk.jpg" text1="Featured Properties"  text2="Divine Residencia" text3="Dubai Studio City, Dubai" tagline="Where Comfort Meets Contemporary Elegance" url="divine-residencia" />
        <FullScreenBanner backgroundImage="bannerDesktopFirst.jpg" backgroundImageMobile="bannerMobileFirst.jpg" text1="Featured Properties"  text2="Divine living" text3="Arjan, Dubai" tagline="Thoughtfully Designed for Peaceful Living" url="divine-living" />
        <FullScreenBanner backgroundImage="Divine-Residence-Image.jpg" backgroundImageMobile="Divine-Residence-Image-Mobile.jpg" text1="Featured Properties"  text2="Divine Residences" text3="Dubai" tagline="Smart Spaces Crafted for Modern Lifestyles" url="divine-residencies" />
        <FullScreenBanner backgroundImage="maydan.jpg" backgroundImageMobile="meydan-mobile.jpg" text1="Featured Properties"  text2="Meydan Racecourse Mansion" text3="Dubai" tagline="Where Grandeur Meets Precision" url="meydan-racecourse-mansion" />
        <FullScreenBanner backgroundImage="Divine-Golf-Video.mp4" backgroundImageMobile="bannerMobileFour.jpg" text1="Featured Properties"  text2="Golf View Living Apartments" text3="Al Zorah, Ajman" tagline="Your Everyday Escape, Overlooking the Greens" url="golf-view-living-apartments" />
        <FullScreenBanner backgroundImage="Golf-View-Living-Villa.mp4" backgroundImageMobile="Golf-View-Living-Villas/divine-golf-villas-Facade-Mobile 03.jpg" text1="Featured Properties"  text2="Golf View Living Villas" text3="Ajman" tagline="Private Villas Surrounded by Nature’s Calm" url="golf-view-living-villas" /> */}
          {/* <HomeBanner2 backgroundImage="np1.jpg" backgroundImageMobile="np1mobile.jpg" text1="Project Showcase"  text2="Meydan Racecourse Mansion" text3="Embark on a journey through luxury, elegance, and innovation at Meydan Racecourse Mansion—a timeless landmark in TAKMEEL’s portfolio, promising an unparalleled lifestyle experience amidst breathtaking views and unparalleled grandeur."/> */}
          <FirstProjectItem backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" text1="" text2="TAKMEEL" text3="Where purposeful design and visionary innovation converge to create spaces that inspire, elevate, and redefine modern living." tagline="" url="projects" backgroundVideo="tt2.mp4" />
          <ProjectItem backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" text1="Now Unveiling" text2="Divine Al Barari" text3="Majan, Dubai" tagline="Urban Living, Reimagined by Nature" url="takmeel-al-barari-view-properties" />
          <ProjectItem backgroundImage="Divine-Residencia/Divine residencia main facade.jpg" backgroundImageMobile="dvk.jpg" text1="Featured Properties" text2="Divine Residencia" text3="Dubai Studio City, Dubai" tagline="Where Comfort Meets Contemporary Elegance" url="divine-residencia" projectStatus="Sold Out" />
          <ProjectItem backgroundImage="bannerDesktopFirst.jpg" backgroundImageMobile="bannerMobileFirst.jpg" text1="Featured Properties" text2="Divine living" text3="Arjan, Dubai" tagline="Thoughtfully Designed for Peaceful Living" url="divine-living" projectStatus="Sold Out" />
          <ProjectItem backgroundImage="r.jpg" backgroundImageMobile="Divine-Residence-Image-Mobile.jpg" text1="Featured Properties" text2="Divine Residences" text3="Dubai" tagline="Smart Spaces Crafted for Modern Lifestyles" url="divine-residencies" projectStatus="Sold Out" />
          <ProjectItem backgroundImage="maydan.jpg" backgroundImageMobile="meydan-mobile.jpg" text1="Project Showcase" text2="Meydan Racecourse Mansion" text3="Dubai" tagline="Where Grandeur Meets Precision" url="meydan-racecourse-mansion" />
          <ProjectItem backgroundImage="Golf-View-Living-Apartments/Golf Apartments 03.jpg" backgroundImageMobile="bannerMobileFour.jpg" text1="Featured Properties" text2="Golf View Living Apartments" text3="Al Zorah, Ajman" tagline="Your Everyday Escape, Overlooking the Greens" url="golf-view-living-apartments" projectStatus="Sold Out" />
          <ProjectItem backgroundImage="Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg" backgroundImageMobile="Golf-View-Living-Villas/divine-golf-villas-Facade-Mobile 03.jpg" text1="Featured Properties" text2="Golf View Living Villas" text3="Ajman" tagline="Private Villas Surrounded by Nature’s Calm" url="golf-view-living-villas" projectStatus="Sold Out" />
          <MainMapComponent MapImageDesk="map6.svg" MapImageMobile="mapmobile.svg" />
          <HomeAbout />

          {/* <SoldOutBox/> */}
          <ContactForm />
          <CustomerTestimonials  {...GalleryData2} />
        </div>
      </div>
    </>
  );
}
