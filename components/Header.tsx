import Link from "next/link";
import { profile } from "@/data/profile";

export function Header() { return <header className="site-header"><Link href="/" className="header-identity"><span className="wordmark">Álvaro<br/>Guzmán<i>.</i></span><small>Diseño · Código<br/>Producción</small></Link><nav aria-label="Navegación principal"><a href="/#about">Perfil</a><a href="/#expertise">Capacidades</a><a href="/#arredo">Experiencia</a><a href="/#work">Proyectos</a><a href="/#contact">Contacto</a></nav><a className="header-link" href={profile.linkedin} target="_blank" rel="noreferrer">in ↗</a></header>; }
