import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProject, publishedProjects } from "@/data/projects";

export function generateStaticParams() { return publishedProjects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.shortDescription } : {};
}

const caseSections = [
  ["Contexto", "context"], ["Problema", "problem"], ["Mi rol", "role"],
  ["Proceso", "process"], ["Diseño y solución", "solution"], ["Resultado / estado actual", "results"],
] as const;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const current = publishedProjects.findIndex(({ slug }) => slug === project.slug);
  const next = publishedProjects[(current + 1) % publishedProjects.length];
  return <><Header /><main className="case"><header className="case-hero shell"><Link href="/#work" className="back-link">← Selected work</Link><div className="case-title"><span>0{current + 1}</span><h1>{project.title}</h1></div><div className="case-intro"><p>{project.shortDescription}</p><ul>{project.categories.map((item) => <li key={item}>{item}</li>)}</ul></div></header><div className="case-cover"><span>{project.title.slice(0, 2).toUpperCase()}</span><p>Visuales del proyecto<br />se incorporarán próximamente.</p></div><section className="case-body shell"><aside><span>Case structure</span><p>Esta primera versión prepara el relato sin completar información que aún no está confirmada.</p>{project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noreferrer">Ver proyecto ↗</a>}</aside><div>{caseSections.map(([label, key], index) => <article className="case-section" key={key}><span>0{index + 1}</span><div><h2>{label}</h2>{project[key] ? <p>{project[key]}</p> : <p className="pending">Contenido pendiente de documentación.</p>}</div></article>)}</div></section><nav className="next-project shell" aria-label="Siguiente proyecto"><span>Next project</span><Link href={`/work/${next.slug}`}>{next.title} <span>→</span></Link></nav></main><Footer /></>;
}
