import ContactForm from "@/components/ContactForm/ContactForm";
import PageHeader from "@/components/PageHeader/PageHeader";
import AboutSlider from "@/components/AboutSlider/AboutSlider";
import AboutVisionMission from "@/components/AboutVisionMission/AboutVisionMission";
import AboutVisionMission2 from "@/components/AboutVisionMission/AboutVisionMission2";
import Founders from "@/components/Founders/Founders";
import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
import AboutUsHeader from "./AboutUsHeader";
import Stages from "./Stages";
import OurValues from "./OurValues";

export default async function AboutUs() {
  const metaTags = await getMetaTags("/about-us");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    // Add fallback if meta tags are not found
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      <MetaInjector metaContent={metaTags[0].metaContent} />
      <div>
        {/* <PageHeader /> */}
        <AboutUsHeader backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" backgroundVideo="ttk1.mp4" />
        {/* <AboutSlider/> */}
        <AboutVisionMission />
        <Founders />
        <Stages/>
        <AboutVisionMission2 />
        <OurValues/>
        <ContactForm />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}
