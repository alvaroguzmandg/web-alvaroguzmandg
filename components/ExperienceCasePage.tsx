import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import type { ExperienceArea } from "@/data/arredo";

export function experienceMetadata(area: ExperienceArea): Metadata {
  return {
    title: area.title,
    description: area.introduction,
    alternates: { canonical: `/experience/${area.slug}` },
    openGraph: { title: `${area.title} — Álvaro Guzmán`, description: area.introduction },
  };
}

export function ExperienceCasePage({ area }: { area: ExperienceArea }) {
  return (
    <>
      <Header />
      <main id="contenido" className="case-page">
        <div className="shell">
          <Link href="/#experiencia" className="back-link">← Volver a experiencia</Link>
          <header className="case-header">
            <span>Experiencia profesional · {area.number}</span>
            <h1>{area.title}</h1>
            <p>{area.introduction}</p>
          </header>

          <section className="case-overview" aria-labelledby="enfoque-title">
            <div>
              <span className="eyebrow">Área de trabajo sostenida</span>
              <h2 id="enfoque-title">{area.detailTitle}</h2>
            </div>
            <div>
              <p>{area.detail}</p>
              <ul>{area.focus.map((item) => <li key={item}>{item}</li>)}</ul>
              {area.externalUrl && <a className="text-link" href={area.externalUrl} target="_blank" rel="noreferrer">Ver archivo de trabajo <span aria-hidden="true">↗</span></a>}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
