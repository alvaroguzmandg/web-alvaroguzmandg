"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reducedMotion = useReducedMotion();
  const initial = reducedMotion ? false : { y: "105%" };

  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <motion.p className="hero-eyebrow" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
        Buenos Aires · Argentina <span>Perfil híbrido digital</span>
      </motion.p>

      <h1 id="hero-title">
        <span className="hero-mask"><motion.span initial={initial} animate={{ y: 0 }} transition={{ duration: 0.75, ease }}>Diseño digital</motion.span></span>
        <span className="hero-mask hero-line-offset"><motion.span initial={initial} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease }}>con criterio técnico.</motion.span></span>
      </h1>

      <motion.div className="hero-summary" initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35, ease }}>
        <p>{profile.intro}</p>
        <p className="hero-path" aria-label="Diseño, implementación, producción y coordinación">
          Diseño <span>→</span> Implementación <span>→</span> Producción <span>→</span> Coordinación
        </p>
        <a className="text-link" href="#proyectos">Ver trabajo <span aria-hidden="true">↓</span></a>
      </motion.div>
    </section>
  );
}
