import { useEffect, useRef } from "react";

/**
 * Mouse-follow radial spotlight for desktop fine-pointer devices only.
 * Pauses animation frames automatically when pointer rests so main thread stays idle.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine) and (min-width: 768px)").matches) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let x = tx;
    let y = ty;

    el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, color-mix(in oklab, var(--gold) 14%, transparent), transparent 60%)`;

    const tick = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      el.style.background = `radial-gradient(600px circle at ${x.toFixed(1)}px ${y.toFixed(1)}px, color-mix(in oklab, var(--gold) 14%, transparent), transparent 60%)`;
      if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 hidden opacity-70 mix-blend-screen md:block"
    />
  );
}
