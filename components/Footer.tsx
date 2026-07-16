import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer shell">
      <span>© {new Date().getFullYear()} Álvaro Guzmán</span>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <a href="#top">Volver arriba <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
