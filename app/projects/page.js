import Link from "next/link";
import ContactForm from "@/components/ContactForm/ContactForm";
import ProjectsPageHeader from "@/components/ProjectsPageHeader/ProjectsPageHeader";
const projects = [
  { slug: 'project-one', title: 'Project One' },
  { slug: 'project-two', title: 'Project Two' },
  { slug: 'project-three', title: 'Project Three' },
];


export default function Projects() {
  return (
    <section>
      <ProjectsPageHeader/>
      <ContactForm/>
    </section>
  );
}
