import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="shell">
        <SectionHeading number="06" title="Contacto" />
        <div className="contact-layout">
          <h3>Diseño y tecnología tienen que entenderse.</h3>
          <p>Si estás armando un equipo, un producto o un proyecto donde este perfil pueda aportar, podemos hablar.</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
