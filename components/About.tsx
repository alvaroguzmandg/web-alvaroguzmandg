import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="perfil" className="about-section section-dark">
      <div className="shell">
        <SectionHeading number="01" title="Perfil" light />
        <div className="about-layout">
          <figure className="about-photo">
            <Image src="/images/alvaro-perfil-denim.png" alt="Retrato de Álvaro Guzmán" width={1023} height={1537} sizes="(max-width: 800px) calc(100vw - 72px), 38vw" />
          </figure>
          <div className="about-copy">
            <p className="about-lead">Diseñador de formación, con una práctica profesional construida entre lo visual, lo técnico y lo operativo.</p>
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
