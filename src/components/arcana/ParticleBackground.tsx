import { useEffect, useState } from "react";

type Particle = { x: number; y: number; size: number; opacity: number };

export function ParticleBackground({ count = 24 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const effectiveCount = Math.min(count, 24);
    const arr: Particle[] = Array.from({ length: effectiveCount }, (_, i) => ({
      x: ((i * 37) % 97) + 1.5,
      y: ((i * 53) % 95) + 2,
      size: (i % 2) + 1.5,
      opacity: 0.35 + ((i * 19) % 50) / 100,
    }));
    setParticles(arr);
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden md:block">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold-soft/70"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 8px color-mix(in oklab, var(--gold) 60%, transparent)",
          }}
        />
      ))}
    </div>
  );
}
