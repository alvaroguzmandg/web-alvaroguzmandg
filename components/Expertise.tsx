import { expertise } from "@/data/skills";

export function Expertise() { return <section className="section shell"><div className="section-heading"><span>03</span><h2>Expertise</h2><p>Cuatro áreas conectadas por una misma práctica digital.</p></div><div className="expertise-grid">{expertise.map((area) => <article key={area.title}><span>{area.number}</span><h3>{area.title}</h3><p>{area.items.join(" · ")}</p></article>)}</div></section>; }
