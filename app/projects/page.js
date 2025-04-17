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
      <ProjectsPageHeader/>
       <ProjectItem backgroundImage="pr1.jpg" backgroundImageMobile="pr1m.jpg"  text2="Takmeel Al Barari Properties" text3="Majan"/>
       <ProjectItem backgroundImage="pr2.jpg" backgroundImageMobile="pr2m.jpg"  text2="Divine Residencia" text3="Dubai Studio City"/>
       <ProjectItem backgroundImage="pr3.jpg" backgroundImageMobile="pr3m.jpg"  text2="Divine Living Arjan​" text3="AL Barsha South, Dubai"/>
       <ProjectItem backgroundImage="pr4.jpg" backgroundImageMobile="pr4m.jpg"  text2="Divine Golf Residences" text3="Al Zorah, Ajman"/>
       <ProjectItem backgroundImage="pr5.jpg" backgroundImageMobile="pr5m.jpg"  text2="Meydan Racecourse Mansion" text3="AL Meydan, Nad Al Sheba 1"/>
      <ContactForm/>
    </section>
  );
}
