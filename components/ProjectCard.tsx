import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project ${project.featured ? "project-featured" : ""}`}><Link href={`/work/${project.slug}`} className="project-visual" aria-label={`Ver caso ${project.title}`}><div className="visual-number">0{index + 1}</div><div className="visual-mark">{project.title.slice(0, 2).toUpperCase()}</div><span>Case study</span></Link><div className="project-info"><div><span className="project-number">0{index + 1}</span><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3></div><div><p>{project.shortDescription}</p><ul aria-label="Categorías">{project.categories.map((category) => <li key={category}>{category}</li>)}</ul><Link className="text-link" href={`/work/${project.slug}`}>View project <span>↗</span></Link></div></div></article>;
}
