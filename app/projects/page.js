import Link from "next/link";
import ContactForm from "@/components/ContactForm/ContactForm";
const projects = [
  { slug: 'project-one', title: 'Project One' },
  { slug: 'project-two', title: 'Project Two' },
  { slug: 'project-three', title: 'Project Three' },
];


export default function Projects() {
  return (
    <section>
      <ContactForm/>
    </section>
  );
}
