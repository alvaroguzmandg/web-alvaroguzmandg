import Image from "next/image";
import Link from "next/link";
import { publishedProjects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

export function SelectedWork() {
  return (
    <section id="proyectos" className="content-section shell projects-section">
      <SectionHeading
        number="04"
        title="Proyectos"
        description="Productos, sitios y experiencias concretas donde diseño e implementación se encuentran."
      />
      <div className="project-grid">
        {publishedProjects.map((project, index) => (
          <article className={`project-card${index === 0 ? " project-card--featured" : ""}`} key={project.slug}>
            <Link href={`/work/${project.slug}`} className="project-media" aria-label={`Ver caso ${project.title}`}>
              {project.coverImage ? (
                <Image src={project.coverImage} alt={`Vista del proyecto ${project.title}`} fill sizes={index === 0 ? "(max-width: 800px) calc(100vw - 30px), 1360px" : "(max-width: 800px) calc(100vw - 30px), 50vw"} />
              ) : (
                <div className="project-placeholder" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.title}</strong>
                </div>
              )}
            </Link>
            <div className="project-info">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="project-kicker">{project.categories.slice(0, 2).join(" · ")}</p>
                <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
                <p>{project.shortDescription}</p>
                {project.role && <p className="project-card-role"><b>Rol</b>{project.role}</p>}
              </div>
              <Link href={`/work/${project.slug}`} className="project-arrow" aria-label={`Ver caso ${project.title}`}>↗</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
