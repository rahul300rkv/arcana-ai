import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Particle = { x: number; y: number; size: number; delay: number; duration: number };

export function ParticleBackground({ count = 40 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setParticles([]);
      return;
    }

    // Halve the particle count on narrow / low-power viewports — the
    // visual is a faint ambient sparkle, so fewer particles cost far less
    // main-thread + compositor work without a noticeable visual change.
    const isSmallViewport = window.matchMedia("(max-width: 640px)").matches;
    const effectiveCount = isSmallViewport ? Math.ceil(count / 2) : count;

    const arr: Particle[] = Array.from({ length: effectiveCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 6,
      duration: Math.random() * 8 + 6,
    }));
    setParticles(arr);
  }, [count, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold-soft/70"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px color-mix(in oklab, var(--gold) 60%, transparent)",
          }}
          animate={{ opacity: [0, 1, 0], y: [-6, 6, -6] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
