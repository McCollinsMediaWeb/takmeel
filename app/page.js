
import FullScreenBanner from "../components/fullscreen-banner/fullScreenBanner";
import HomeBanner2 from "../components/HomeBanner2/HomeBanner2";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import SoldOutBox from "@/components/SoldOutBox/SoldOutBox";
import ContactForm from "@/components/ContactForm/ContactForm";
export default function Home() {
  return (
    <div>
      <div>
        <FullScreenBanner backgroundImage="main1.jpg" backgroundImageMobile="main1mobile.jpg" text1="Now Unveiling"  text2="Takmeel Al Barari Properties" text3="Majan"/>
        <FullScreenBanner backgroundImage="main2.jpg" backgroundImageMobile="main1mobile.jpg" text1="Featured Properties"  text2="Divine Residencia" text3="Dubai Studio City"/>
        <FullScreenBanner backgroundImage="main3.jpg" backgroundImageMobile="main1mobile.jpg" text1="Featured Properties"  text2="Divine living" text3="Arjan"/>
        <FullScreenBanner backgroundImage="main4.jpg" backgroundImageMobile="main1mobile.jpg" text1="Featured Properties"  text2="Golf View Living Apartments" text3="Al Zorah, Ajman"/>
        <HomeBanner2 backgroundImage="np1.jpg" backgroundImageMobile="np1mobile.jpg" text1="Project Showcase"  text2="Meydan Racecourse Mansion" text3="Embark on a journey through luxury, elegance, and innovation at Meydan Racecourse Mansion—a timeless landmark in TAKMEEL’s portfolio, promising an unparalleled lifestyle experience amidst breathtaking views and unparalleled grandeur."/>
        <HomeAbout/>
        <SoldOutBox/>
        <ContactForm/>
      </div>
    </div>
  );
}
