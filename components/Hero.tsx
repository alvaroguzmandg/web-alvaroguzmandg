"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const rotatingWords = ["Diseño", "Desarrollo", "Producción", "Coordinación"];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [activeWord, setActiveWord] = useState(0);
  const initial = reducedMotion ? false : { y: "105%" };

  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % rotatingWords.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <h1 id="hero-title">
        <span className="hero-title-rotator">
          <span className="hero-word-stage">
            <AnimatePresence initial={false}>
              <motion.span
                key={rotatingWords[activeWord]}
                initial={reducedMotion ? false : { y: "115%" }}
                animate={{ y: 0 }}
                exit={reducedMotion ? undefined : { y: "-115%" }}
                transition={{ duration: 0.55, ease }}
              >
                {rotatingWords[activeWord]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
        <span className="hero-mask hero-title-digital"><motion.span initial={initial} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease }}>Digital</motion.span></span>
      </h1>

      <motion.div className="hero-summary" initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35, ease }}>
        <p className="hero-path" aria-label="Diseño, coordinación, producción e implementación">
          Diseño <span>→</span> Coordinación <span>→</span> Producción <span>→</span> Implementación
        </p>
      </motion.div>
    </section>
  );
}
