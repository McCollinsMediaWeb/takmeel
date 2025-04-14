import Link from "next/link";

const projects = [
  { slug: 'project-one', title: 'Project One' },
  { slug: 'project-two', title: 'Project Two' },
  { slug: 'project-three', title: 'Project Three' },
];


export default function Projects() {
  return (
    <main>
      <h1>Our Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
