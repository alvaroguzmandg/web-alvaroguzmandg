import { profile } from "@/data/profile";

export function About() { return <section id="about" className="section about shell"><div className="section-heading"><span>04</span><h2>About</h2></div><div className="about-copy">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>; }
