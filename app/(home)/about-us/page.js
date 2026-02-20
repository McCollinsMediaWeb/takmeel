
export const metadata = {
  title: "About Takmeel | Leading Property Developers in Dubai & Ajman",
  description:
    "Learn more about Takmeel Development — a premier real estate company building innovative residential and commercial projects across UAE and GCC.",
  alternates: {
    canonical: "https://www.takmeeldevelopment.com/about-us",
  }
};


import PropertyForm from "@/components/DetailPageComponents/PropertyForm"
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

// export async function generateMetadata() {
//   const metaTags = await getMetaTags("/about-us");
//   const metaContent = metaTags?.[0]?.metaContent || "";

//   // Parse title
//   const titleMatch = metaContent.match(/<title[^>]*>(.*?)<\/title>/i);
//   const title = titleMatch?.[1] || "About Us | Takmeel Development";

//   // Parse description
//   const descMatch = metaContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
//   const description = descMatch?.[1] || "";

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: "https://www.takmeeldevelopment.com/about-us",
//     },
//   };
// }

export default async function AboutUs() {
  // const metaTags = await getMetaTags("/about-us");
  // if (metaTags.length === 0 || !metaTags[0].metaContent) {
  //   // Add fallback if meta tags are not found
  //   console.warn("No meta tags found, using default");
  // }

  return (
    <>
      {/* {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )} */}
      <div>
        {/* <PageHeader /> */}
        <AboutUsHeader backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" backgroundVideo="ttk1.mp4" />
        {/* <AboutSlider/> */}
        <AboutVisionMission />
        <Founders />

        <AboutVisionMission2 />
        <Stages />
        <OurValues />
        <PropertyForm projectName="Golf View Living Apartments" />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}
