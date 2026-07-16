import Link from "next/link";
import { experienceAreas, professionalExperience } from "@/data/arredo";
import { SectionHeading } from "./SectionHeading";

export function Arredo() {
  return (
    <section id="experiencia" className="experience-section section-dark">
      <div className="shell">
        <SectionHeading number="03" title="Experiencia" light />
        <div className="experience-intro">
          <p className="experience-tenure">{professionalExperience.tenure}</p>
          <h3>Trabajo digital en contextos comerciales reales.</h3>
          <p>{professionalExperience.introduction}</p>
          <div className="experience-meta">
            <span>{professionalExperience.role}</span>
            <span>{professionalExperience.scope}</span>
          </div>
        </div>

        <div className="experience-areas">
          {experienceAreas.map((area) => (
            <article key={area.slug}>
              <span>{area.number}</span>
              <div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
              <Link href={`/experience/${area.slug}`} aria-label={`Ver experiencia en ${area.title}`}>Ver área <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
