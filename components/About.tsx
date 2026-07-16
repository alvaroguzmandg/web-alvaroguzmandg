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
            <Image src="/images/alvaro-perfil-denim.png" alt="Retrato de Álvaro Guzmán" width={1023} height={1537} sizes="(max-width: 800px) calc(100vw - 72px), 38vw" unoptimized />
          </figure>
          <div className="about-copy">
            <p className="about-lead">Diseño, coordino y produzco. Conocer la implementación me permite resolver mejor el trabajo y encontrar formas más eficientes de llevarlo a producción.</p>
            <div className="about-body">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
