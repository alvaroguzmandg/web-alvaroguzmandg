import { publishedProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() { return <section id="work" className="section shell"><div className="section-heading"><span>01</span><h2>Selected Work</h2><p>Casos que muestran distintas formas de trabajar entre diseño, producto e implementación.</p></div><div className="projects">{publishedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>; }
