import { expertise } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Expertise() {
  return (
    <section id="capacidades" className="content-section shell">
      <SectionHeading
        number="02"
        title="Capacidades"
        description="Áreas que conecto dentro de un proyecto digital. La especialidad no está en acumular disciplinas, sino en hacerlas trabajar juntas."
      />
      <div className="expertise-grid">
        {expertise.map((area) => (
          <article key={area.title}>
            <span>{area.number}</span>
            <div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul aria-label={`Herramientas y disciplinas de ${area.title}`}>
                {area.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
