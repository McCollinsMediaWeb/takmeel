import ContactForm from "@/components/ContactForm/ContactForm";
import ProjectsPageHeader from "@/components/ProjectsPageHeader/ProjectsPageHeader";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";

export default async function Projects() {
  const metaTags = await getMetaTags("/projects");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      <MetaInjector metaContent={metaTags[0].metaContent} />
      <section>
        <ProjectsPageHeader />
        {/* <ProjectItem backgroundImage="pr1.jpg" backgroundImageMobile="pr1m.jpg" text2="Divine Al Barari" text3="Majan" />
      <ProjectItem backgroundImage="pr2.jpg" backgroundImageMobile="pr2m.jpg" text2="Divine Residencia" text3="Dubai Studio City" />
      <ProjectItem backgroundImage="pr3.jpg" backgroundImageMobile="pr3m.jpg" text2="Divine Living Arjan​" text3="AL Barsha South, Dubai" />
      <ProjectItem backgroundImage="pr4.jpg" backgroundImageMobile="pr4m.jpg" text2="Divine Golf Residences" text3="Al Zorah, Ajman" />
      <ProjectItem backgroundImage="pr5.jpg" backgroundImageMobile="pr5m.jpg" text2="Meydan Racecourse Mansion" text3="AL Meydan, Nad Al Sheba 1" /> */}
        {/* <ProjectItem backgroundImage="main1.jpg" backgroundImageMobile="bannerMobileSecondt.jpg" text2="Divine Al Barari" text3="Majan, Dubai" url="takmeel-al-barari-view-properties" /> */}

        {/* <ProjectItem backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" text1="Now Unveiling" text2="Divine Al Barari" text3="Majan, Dubai" tagline="Urban Living, Reimagined by Nature" url="takmeel-al-barari-view-properties" /> */}
        <ProjectItem backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" text1="Coming Soon" text2="Al Barari" text3="Majan, Dubai" tagline="Urban Living, Reimagined by Nature" url="takmeel-al-barari-view-properties" backgroundVideo="tkdesk1.mp4" />
        <ProjectItem backgroundImage="Divine-Residencia/Divine residencia main facade.jpg" backgroundImageMobile="dvk.jpg" text1="Featured Properties" text2="Divine Residencia" text3="Dubai Studio City, Dubai" tagline="Where Comfort Meets Contemporary Elegance" url="divine-residencia" projectStatus="Sold Out" />
        <ProjectItem backgroundImage="bannerDesktopFirst.jpg" backgroundImageMobile="bannerMobileFirst.jpg" text1="Featured Properties" text2="Divine living" text3="Arjan, Dubai" tagline="Thoughtfully Designed for Peaceful Living" url="divine-living" projectStatus="Sold Out" />
        <ProjectItem backgroundImage="klt.jpg" backgroundImageMobile="Divine-Residence-Image-Mobile.jpg" text1="Featured Properties" text2="Divine Residences" text3="Dubai" tagline="Smart Spaces Crafted for Modern Lifestyles" url="divine-residences" projectStatus="Sold Out" />
        <ProjectItem backgroundImage="maydan.jpg" backgroundImageMobile="meydan-mobile.jpg" text1="Project Showcase" text2="Meydan Racecourse Mansion" text3="Dubai" tagline="Where Grandeur Meets Precision" url="meydan-racecourse-mansion" />
        <ProjectItem backgroundImage="Golf-View-Living-Apartments/Golf Apartments 03.jpg" backgroundImageMobile="bannerMobileFour.jpg" text1="Featured Properties" text2="Golf View Living Apartments" text3="Al Zorah, Ajman" tagline="Your Everyday Escape, Overlooking the Greens" url="golf-view-living-apartments" projectStatus="Sold Out" />
        <ProjectItem backgroundImage="Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg" backgroundImageMobile="Golf-View-Living-Villas/divine-golf-villas-Facade-Mobile 03.jpg" text1="Featured Properties" text2="Golf View Living Villas" text3="Ajman" tagline="Private Villas Surrounded by Nature’s Calm" url="golf-view-living-villas" projectStatus="Sold Out" />

        <ContactForm />
        <Footer />
        <FooterBottom />
      </section>
    </>
  );
}
