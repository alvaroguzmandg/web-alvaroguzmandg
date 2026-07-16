import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-row"><span className="project-number">{String(index + 1).padStart(2, "0")}</span><div><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.shortDescription}</p></div><ul aria-label="Categorías">{project.categories.slice(0, 3).map((category) => <li key={category}>{category}</li>)}</ul><Link className="project-arrow" href={`/work/${project.slug}`} aria-label={`Ver ${project.title}`}>↗</Link></article>;
}
