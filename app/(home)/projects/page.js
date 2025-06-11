import PropertyForm from "@/components/DetailPageComponents/PropertyForm"
import ProjectsPageHeader from "@/components/ProjectsPageHeader/ProjectsPageHeader";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
import { useTranslations } from "next-intl";
import ClientComponent from "./ClientComponent";

export default async function Projects() {
  const metaTags = await getMetaTags("/projects");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )}
      <section>
        <ProjectsPageHeader />
        {/* <ProjectItem backgroundImage="pr1.jpg" backgroundImageMobile="pr1m.jpg" text2="Divine Al Barari" text3="Majan" />
      <ProjectItem backgroundImage="pr2.jpg" backgroundImageMobile="pr2m.jpg" text2="Divine Residencia" text3="Dubai Studio City" />
      <ProjectItem backgroundImage="pr3.jpg" backgroundImageMobile="pr3m.jpg" text2="Divine Living Arjan​" text3="AL Barsha South, Dubai" />
      <ProjectItem backgroundImage="pr4.jpg" backgroundImageMobile="pr4m.jpg" text2="Divine Golf Residences" text3="Al Zorah, Ajman" />
      <ProjectItem backgroundImage="pr5.jpg" backgroundImageMobile="pr5m.jpg" text2="Meydan Racecourse Mansion" text3="AL Meydan, Nad Al Sheba 1" /> */}
        {/* <ProjectItem backgroundImage="main1.jpg" backgroundImageMobile="bannerMobileSecondt.jpg" text2="Divine Al Barari" text3="Majan, Dubai" url="takmeel-al-barari-view-properties" /> */}

        {/* <ProjectItem backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" text1="Now Unveiling" text2="Divine Al Barari" text3="Majan, Dubai" tagline="Urban Living, Reimagined by Nature" url="takmeel-al-barari-view-properties" /> */}

        <ClientComponent />

        <PropertyForm projectName="Golf View Living Apartments" />
        <Footer />
        <FooterBottom />
      </section>
    </>
  );
}
