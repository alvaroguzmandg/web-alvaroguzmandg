import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProject, publishedProjects, type Project } from "@/data/projects";

type ProjectTextKey = "context" | "problem" | "process" | "solution" | "results";

const sectionLabels: Array<[ProjectTextKey, string]> = [
  ["context", "Contexto"],
  ["problem", "Objetivo"],
  ["process", "Proceso"],
  ["solution", "Diseño e implementación"],
  ["results", "Estado actual"],
];

export function generateStaticParams() {
  return publishedProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Álvaro Guzmán`,
      description: project.shortDescription,
      images: project.coverImage ? [{ url: project.coverImage }] : undefined,
    },
  };
}

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  if (project.coverImage) {
    return <Image src={project.coverImage} alt={`Vista del proyecto ${project.title}`} fill sizes="(max-width: 800px) calc(100vw - 30px), 1360px" priority />;
  }
  return (
    <div className="case-typographic-visual" aria-hidden="true">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <strong>{project.title}</strong>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const currentIndex = publishedProjects.findIndex(({ slug }) => slug === project.slug);
  const nextProject = publishedProjects[(currentIndex + 1) % publishedProjects.length];
  const contentSections = sectionLabels.filter(([key]) => Boolean(project[key]));

  return (
    <>
      <Header />
      <main id="contenido" className="project-page">
        <div className="shell">
          <Link href="/#proyectos" className="back-link">← Volver a proyectos</Link>
          <header className="project-header">
            <span>Proyecto · {String(currentIndex + 1).padStart(2, "0")}</span>
            <h1>{project.title}</h1>
            <div className="project-header-meta">
              <p>{project.shortDescription}</p>
              <ul>{project.categories.map((category) => <li key={category}>{category}</li>)}</ul>
            </div>
          </header>

          <div className="project-hero-visual">
            <ProjectVisual project={project} index={currentIndex} />
          </div>

          <section className="project-details" aria-label="Información del proyecto">
            <div>
              {project.role && <p><span>Participación</span>{project.role}</p>}
              {project.tools.length > 0 && <p><span>Herramientas</span>{project.tools.join(" · ")}</p>}
            </div>
            {project.externalUrl && <a className="text-link" href={project.externalUrl} target="_blank" rel="noreferrer">Abrir proyecto <span aria-hidden="true">↗</span></a>}
          </section>

          {contentSections.length > 0 && (
            <section className="project-story" aria-label="Caso de estudio">
              {contentSections.map(([key, label], index) => (
                <article key={key}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{label}</h2>
                  <p>{project[key]}</p>
                </article>
              ))}
            </section>
          )}

          <nav className="next-project" aria-label="Siguiente proyecto">
            <span>Siguiente proyecto</span>
            <Link href={`/work/${nextProject.slug}`}>{nextProject.title}<span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
