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
        Diseño digital · E-commerce <span>Buenos Aires · Argentina</span>
      </motion.p>

      <h1 id="hero-title">
        <span className="hero-mask hero-title-primary"><motion.span initial={initial} animate={{ y: 0 }} transition={{ duration: 0.75, ease }}>Diseño</motion.span></span>
        <span className="hero-mask hero-title-digital"><motion.span initial={initial} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease }}>Digital</motion.span></span>
      </h1>

      <motion.div className="hero-summary" initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35, ease }}>
        <p>{profile.intro}</p>
        <a className="text-link" href="#proyectos">Ver trabajo <span aria-hidden="true">↓</span></a>
        <p className="hero-path" aria-label="Diseño, coordinación, producción e implementación">
          Diseño <span>→</span> Coordinación <span>→</span> Producción <span>→</span> Implementación
        </p>
      </motion.div>
    </section>
  );
}
