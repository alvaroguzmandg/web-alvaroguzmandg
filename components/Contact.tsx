import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="shell">
        <SectionHeading number="05" title="Contacto" />
        <div className="contact-layout">
          <h3>Hablemos de trabajo digital que necesita llegar a producción.</h3>
          <p>Si querés conversar sobre un proyecto, una oportunidad o un equipo donde este perfil pueda aportar, escribime.</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
