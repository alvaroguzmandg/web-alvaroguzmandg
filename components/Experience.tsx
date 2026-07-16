import { experiences } from "@/data/experience";

export function Experience() { return <section id="experience" className="section shell"><div className="section-heading"><span>02</span><h2>Experience</h2></div>{experiences.map((item) => <article className="experience" key={item.company}><div><span className="eyebrow">Current experience</span><h3>{item.company}</h3></div><div className="experience-detail"><h4>{item.role}</h4><p className="scope">{item.scope}</p><p>{item.description}</p></div></article>)}</section>; }
