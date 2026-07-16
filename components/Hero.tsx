import { profile } from "@/data/profile";

export function Hero() {
  return <section className="hero shell" aria-labelledby="hero-title"><div className="hero-kicker">Buenos Aires · Argentina <span>—</span> Digital practice</div><h1 id="hero-title"><span>Digital Designer</span><span className="indent">Web & Front-end</span><span className="accent-line">Creative Operations</span></h1><div className="hero-bottom"><p>{profile.intro}</p><div className="hero-actions"><a href="#work">View selected work <span>↓</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>;
}
