import Image from "next/image";
import { careerTimeline, practiceAreas, toolkit, workEvidence } from "@/data/home";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="v2-section-label">
      <span>{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export function HomeV2() {
  return (
    <>
      <section className="v2-hero shell" aria-labelledby="hero-title">
        <div className="v2-hero-meta">
          <span>Álvaro Guzmán</span>
          <span>Diseño digital · Ecommerce · Producto · Front-end</span>
        </div>
        <h1 id="hero-title">
          <span>Diseñador de formación.</span>
          <span>Digital por adaptación.</span>
          <span>Web por preferencia.</span>
        </h1>
        <div className="v2-hero-bottom">
          <p>Hace más de diez años trabajo entre diseño, ecommerce y tecnología.</p>
          <p>Convierto necesidades comerciales en experiencias digitales y participo de todo el camino hasta producción.</p>
          <span className="v2-side-note">Bombero por experiencia.</span>
        </div>
      </section>

      <section className="v2-intro" id="experiencia">
        <div className="shell">
          <SectionLabel number="01">Experiencia profesional.</SectionLabel>
          <div className="v2-job-head">
            <p><strong>Arredo</strong><span>2014 — Actualidad</span></p>
            <p>Diseño digital · Ecommerce · Front-end · Producción y coordinación</p>
          </div>
          <div className="v2-intro-grid">
            <p className="v2-intro-lead">Más de diez años haciendo que las cosas lleguen a producción.</p>
            <div className="v2-intro-copy">
              <p>Trabajo transversalmente entre diseño, ecommerce, comunicación, desarrollo, producción y marketing para los canales de Argentina y Uruguay.</p>
              <p>Mi rol fue evolucionando con el trabajo: empecé desde el diseño gráfico y fui incorporando ecommerce, UX/UI, front-end, coordinación y automatización.</p>
            </div>
          </div>

          <ol className="v2-timeline" aria-label="Evolución profesional desde 2014 hasta la actualidad">
            {careerTimeline.map((item, index) => (
              <li key={item.label}>
                <span className="v2-timeline-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="v2-timeline-period">{item.period}</span>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="v2-practice shell" id="trabajo">
        <SectionLabel number="02">Lo que hago, explicado desde el trabajo.</SectionLabel>
        <div className="v2-practice-list">
          {practiceAreas.map((area) => (
            <article key={area.number}>
              <span className="v2-practice-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul>{area.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-evidence">
        <div className="shell">
          <SectionLabel number="03">Tres maneras de ver cómo trabajo.</SectionLabel>
          <div className="v2-evidence-list">
            {workEvidence.map((item, index) => (
              <article key={item.number} className={index === 0 ? "is-featured" : ""}>
                <div className="v2-evidence-copy">
                  <span>{item.number} · {item.kicker}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <small>{item.note}</small>
                </div>
                <div className={`v2-evidence-visual v2-evidence-visual--${index + 1}`} aria-hidden="true">
                  {index === 0 && (
                    <div className="v2-format-map">
                      <span>CAMPAÑA</span><i>HOME</i><i>EMAIL</i><i>PAUTA</i><i>MOBILE</i><i>CATEGORÍAS</i>
                    </div>
                  )}
                  {index === 1 && <strong>Problema → Flujo → Interfaz → Producto</strong>}
                  {index === 2 && <Image src="/images/projects/charlie-andrada.png" alt="" fill sizes="(max-width: 800px) calc(100vw - 30px), 50vw" unoptimized />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-systems shell">
        <SectionLabel number="04">Trabajo con sistemas, no sólo con piezas.</SectionLabel>
        <div className="v2-systems-grid">
          <p className="v2-systems-statement">Si algo se repite muchas veces, probablemente haya una mejor manera de hacerlo.</p>
          <div>
            <p>Componentes, planillas, automatizaciones, scripts y reglas de producción me ayudan a convertir tareas sueltas en procesos que otras personas también pueden usar.</p>
            <p>No automatizo para sumar tecnología. Lo hago para reducir trabajo repetitivo, evitar errores y dejar más tiempo para las decisiones que sí necesitan criterio.</p>
          </div>
        </div>
        <div className="v2-toolkit">
          {toolkit.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-about" id="sobre-mi">
        <div className="shell">
          <SectionLabel number="05">Fuera de la computadora, corro.</SectionLabel>
          <div className="v2-about-grid">
            <figure>
              <Image src="/images/alvaro-perfil-denim.png" alt="Retrato de Álvaro Guzmán" width={1023} height={1537} sizes="(max-width: 800px) calc(100vw - 30px), 36vw" unoptimized />
            </figure>
            <div>
              <p className="v2-about-lead">Llevo más de diez años preparando y corriendo maratones.</p>
              <p>La constancia, la obsesión por mejorar detalles y la tolerancia a que algo no salga bien a la primera también terminaron entrando en mi forma de trabajar.</p>
              <p>Con el tiempo, esa mezcla entre running, diseño y tecnología dio origen a RunGuru: un producto propio donde puedo investigar, diseñar, desarrollar e iterar.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
