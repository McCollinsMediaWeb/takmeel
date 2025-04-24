
import FullScreenBanner from "../components/fullscreen-banner/fullScreenBanner";
import HomeBanner2 from "../components/HomeBanner2/HomeBanner2";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import SoldOutBox from "@/components/SoldOutBox/SoldOutBox";
import ContactForm from "@/components/ContactForm/ContactForm";
export default function Home() {
  return (
    <div>
      <div>
        {/* <FullScreenBanner backgroundImage="main1.jpg" backgroundImageMobile="main1mobile.jpg" text1="Now Unveiling"  text2="Takmeel Al Barari Properties" text3="Majan"/> */}
        <FullScreenBanner backgroundImage="bannerDesktopFirst.jpg" backgroundImageMobile="bannerMobileFirst.jpg" text1="Now Unveiling"  text2="Takmeel Al Barari View Properties" text3="Majan, Dubai" tagline="Urban Living, Reimagined by Nature" url="takmeel-al-barari-view-properties" />
        <FullScreenBanner backgroundImage="main2.jpg" backgroundImageMobile="main2mobile.jpg" text1="Featured Properties"  text2="Divine Residencia" text3="Dubai Studio City, Dubai" tagline="Where Comfort Meets Contemporary Elegance" url="divine-residencia" />
        <FullScreenBanner backgroundImage="main3.jpg" backgroundImageMobile="main3mobile.jpg" text1="Featured Properties"  text2="Divine living" text3="Arjan, Dubai" tagline="Thoughtfully Designed for Peaceful Living" url="divine-living" />
        <FullScreenBanner backgroundImage="main4.jpg" backgroundImageMobile="main4mobile.jpg" text1="Featured Properties"  text2="Golf View Living Apartments" text3="Al Zorah, Ajman" tagline="Your Everyday Escape, Overlooking the Greens" url="golf-view-living-apartments" />
        <FullScreenBanner backgroundImage="main4.jpg" backgroundImageMobile="main4mobile.jpg" text1="Featured Properties"  text2="Golf View Living Villas" text3="Ajman" tagline="Private Villas Surrounded by Nature’s Calm" url="golf-view-living-villas" />
        <FullScreenBanner backgroundImage="main4.jpg" backgroundImageMobile="main4mobile.jpg" text1="Featured Properties"  text2="Meydan Racecourse Mansion" text3="Dubai" tagline="Where Grandeur Meets Precision" url="meydan-racecourse-mansion" />
        <FullScreenBanner backgroundImage="main4.jpg" backgroundImageMobile="main4mobile.jpg" text1="Featured Properties"  text2="Divine Residencies" text3="Dubai" tagline="Smart Spaces Crafted for Modern Lifestyles" url="divine-residencies" />
        <HomeBanner2 backgroundImage="np1.jpg" backgroundImageMobile="np1mobile.jpg" text1="Project Showcase"  text2="Meydan Racecourse Mansion" text3="Embark on a journey through luxury, elegance, and innovation at Meydan Racecourse Mansion—a timeless landmark in TAKMEEL’s portfolio, promising an unparalleled lifestyle experience amidst breathtaking views and unparalleled grandeur."/>
        <HomeAbout/>
        <SoldOutBox/>
        <ContactForm/>
      </div>
    </div>
  );
}
