import Link from "next/link";
import ContactForm from "@/components/ContactForm/ContactForm";
import ProjectsPageHeader from "@/components/ProjectsPageHeader/ProjectsPageHeader";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
const projects = [
  { slug: 'project-one', title: 'Project One' },
  { slug: 'project-two', title: 'Project Two' },
  { slug: 'project-three', title: 'Project Three' },
];


export default function Projects() {
  return (
    <section>
      <ProjectsPageHeader />
      {/* <ProjectItem backgroundImage="pr1.jpg" backgroundImageMobile="pr1m.jpg" text2="Takmeel Al Barari View" text3="Majan" />
      <ProjectItem backgroundImage="pr2.jpg" backgroundImageMobile="pr2m.jpg" text2="Divine Residencia" text3="Dubai Studio City" />
      <ProjectItem backgroundImage="pr3.jpg" backgroundImageMobile="pr3m.jpg" text2="Divine Living Arjan​" text3="AL Barsha South, Dubai" />
      <ProjectItem backgroundImage="pr4.jpg" backgroundImageMobile="pr4m.jpg" text2="Divine Golf Residences" text3="Al Zorah, Ajman" />
      <ProjectItem backgroundImage="pr5.jpg" backgroundImageMobile="pr5m.jpg" text2="Meydan Racecourse Mansion" text3="AL Meydan, Nad Al Sheba 1" /> */}
      {/* <ProjectItem backgroundImage="main1.jpg" backgroundImageMobile="bannerMobileSecondt.jpg" text2="Takmeel Al Barari View" text3="Majan, Dubai" url="takmeel-al-barari-view-properties" /> */}
      <ProjectItem backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" text2="Takmeel Al Barari View" text3="Majan, Dubai" url="takmeel-al-barari-view-properties" />
      <ProjectItem backgroundImage="Divine-Residencia/Divine residencia main facade.jpg" backgroundImageMobile="dvk.jpg" text2="Divine Residencia" text3="Dubai Studio City, Dubai" url="divine-residencia" />
      <ProjectItem backgroundImage="bannerDesktopFirst.jpg" backgroundImageMobile="bannerMobileFirst.jpg" text2="Divine living" text3="Arjan, Dubai" url="divine-living" />
      <ProjectItem backgroundImage="Divine-Residence-Image.jpg" backgroundImageMobile="Divine-Residence-Image-Mobile.jpg" text2="Divine Residencies" text3="Dubai" url="divine-residencies" />
      <ProjectItem backgroundImage="meydan.webp" backgroundImageMobile="meydan-mobile.jpg" text2="Meydan Racecourse Mansion" text3="Dubai" url="meydan-racecourse-mansion" />
      <ProjectItem backgroundImage="Golf-View-Living-Apartments/Golf Apartments 03.jpg" backgroundImageMobile="bannerMobileFour.jpg" text2="Golf View Living Apartments" text3="Al Zorah, Ajman" url="golf-view-living-apartments" />
      <ProjectItem backgroundImage="Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg" backgroundImageMobile="Golf-View-Living-Villas/divine-golf-villas-Facade-Mobile 03.jpg" text2="Golf View Living Villas" text3="Ajman" url="golf-view-living-villas" />
      <ContactForm />
    </section>
  );
}
