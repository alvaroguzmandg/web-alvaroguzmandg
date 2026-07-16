import { expertise } from "@/data/skills";

export function Expertise() { return <section id="expertise" className="section shell"><div className="section-heading"><span>02</span><h2>Capacidades</h2><p>Trabajo entre distintas capas de un proyecto digital: desde el diseño y la implementación hasta la producción y coordinación.</p></div><div className="expertise-grid">{expertise.map((area) => <article key={area.title}><span>{area.number}</span><h3>{area.title}</h3><p>{area.items.join(" · ")}</p></article>)}</div></section>; }
