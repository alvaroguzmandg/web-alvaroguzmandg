"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/data/profile";

const navigation = [
  { label: "Perfil", href: "/#perfil" },
  { label: "Capacidades", href: "/#capacidades" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Link href="/" className="header-identity" aria-label="Álvaro Guzmán, inicio">
        <span className="wordmark">Álvaro Guzmán<span>.</span></span>
        <small>Diseño · Código · Producción</small>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Cerrar" : "Menú"}</span>
        <i aria-hidden="true" />
      </button>

      <nav id="main-navigation" className={open ? "is-open" : ""} aria-label="Navegación principal">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-social" href={profile.linkedin} target="_blank" rel="noreferrer">
        LinkedIn <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
