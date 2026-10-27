import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CosmicIntroProps {
  onComplete?: () => void;
  forcePlay?: boolean;
  onClose?: () => void;
}

export function CosmicIntro({ onComplete, forcePlay = false, onClose }: CosmicIntroProps) {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(() => {
    if (forcePlay) return true;
    if (typeof window === "undefined") return false;
    // Don't show if user prefers reduced motion
    if (reduceMotion) return false;
    // Show once per browser session
    try {
      return !sessionStorage.getItem("astrofree_intro_seen");
    } catch {
      return false;
    }
  });

  const dismiss = () => {
    try {
      sessionStorage.setItem("astrofree_intro_seen", "true");
    } catch {}
    setShow(false);
    onComplete?.();
    onClose?.();
  };

  useEffect(() => {
    if (!show) return;

    // Automatically transition to the site after 2.5 seconds
    const timer = setTimeout(() => {
      dismiss();
    }, 2500);

    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="cosmic-portal-intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(14px)",
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.12_0.03_275)] overflow-hidden select-none cursor-pointer"
          onClick={dismiss}
          aria-label="Click anywhere to skip intro"
        >
          {/* Deep celestial radial nebulas */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.35_0.16_295/0.4)_0%,oklch(0.18_0.05_275/0.7)_50%,oklch(0.10_0.02_275)_100%)]"
          />

          {/* Stardust particles background */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: `${(i * 19) % 100}vw`,
                  y: `${(i * 31) % 100}vh`,
                  scale: 0.5 + ((i % 5) * 0.15),
                  opacity: 0.2 + ((i % 4) * 0.2),
                }}
                animate={{
                  opacity: [0.2, 0.9, 0.2],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 10) * 0.15,
                }}
                className="absolute h-1 w-1 rounded-full bg-amber-200 shadow-[0_0_8px_#fbbf24]"
              />
            ))}
          </div>

          {/* Skip Intro Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dismiss();
            }}
            className="absolute top-6 right-6 z-20 flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-black/40 px-3.5 py-1.5 text-xs font-medium text-amber-200/90 backdrop-blur-md transition-colors hover:bg-white/10 hover:border-amber-400/60"
          >
            <span>Skip Intro</span>
            <span>&rarr;</span>
          </button>

          {/* Sacred Astrological Mandala & Geometric Rings */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Outer Rotating Astrological Ring */}
            <motion.div
              initial={{ rotate: 0, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 0.7 }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 0.8 },
              }}
              className="absolute h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] rounded-full border border-amber-400/25"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-60">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2, 4" className="text-amber-300" />
                <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-amber-400/40" />
                {/* 12 Astrological Axis Rays */}
                {Array.from({ length: 12 }).map((_, idx) => {
                  const angle = (idx * 30 * Math.PI) / 180;
                  const x1 = 50 + 43 * Math.cos(angle);
                  const y1 = 50 + 43 * Math.sin(angle);
                  const x2 = 50 + 48 * Math.cos(angle);
                  const y2 = 50 + 48 * Math.sin(angle);
                  return (
                    <line
                      key={idx}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth="0.6"
                      className="text-amber-300"
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* Middle Counter-Rotating Sacred Octagram */}
            <motion.div
              initial={{ rotate: 0, scale: 0.6, opacity: 0 }}
              animate={{ rotate: -360, scale: 1, opacity: 0.8 }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, ease: "easeOut" },
                opacity: { duration: 0.8, delay: 0.2 },
              }}
              className="absolute h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] rounded-full border border-purple-400/30"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-50">
                <polygon
                  points="50,5 63,37 95,50 63,63 50,95 37,63 5,50 37,37"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-amber-300/80"
                />
                <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3, 3" className="text-purple-300" />
              </svg>
            </motion.div>

            {/* Glowing Golden Core Sigil */}
            <motion.div
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: [0, 1.15, 1], rotate: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[2px] shadow-[0_0_50px_rgba(245,197,100,0.5)]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[oklch(0.12_0.03_275)] backdrop-blur-xl">
                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-10 w-10 text-amber-300 drop-shadow-[0_0_12px_rgba(245,197,100,0.8)]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Typographic Awakening Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mt-8 text-center px-4"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-300/90 mb-2">
                Ancient Arcana · Modern Vedic Intelligence
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
                <span className="gold-text drop-shadow-[0_0_25px_rgba(245,197,100,0.4)]">
                  Astro
                </span>
                <span className="text-foreground/90 font-light">Free</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "120px" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"
              />

              <p className="mt-3 text-xs tracking-wider text-muted-foreground uppercase">
                Opening the Sacred Sanctuary...
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
