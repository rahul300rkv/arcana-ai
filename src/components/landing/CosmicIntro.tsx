import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CosmicIntroProps {
  onComplete?: () => void;
  forcePlay?: boolean;
  onClose?: () => void;
}

export function CosmicIntro({ onComplete, forcePlay, onClose }: CosmicIntroProps) {
  // Always start with show = true on landing page load or when forcePlay is triggered
  const [show, setShow] = useState(true);

  // When forcePlay changes to true, trigger intro again
  useEffect(() => {
    if (forcePlay) {
      setShow(true);
    }
  }, [forcePlay]);

  const dismiss = () => {
    setShow(false);
    onComplete?.();
    onClose?.();
  };

  useEffect(() => {
    if (!show) return;

    // Automatically transition to the site after 2.6 seconds
    const timer = setTimeout(() => {
      dismiss();
    }, 2600);

    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="cosmic-portal-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: "blur(16px)",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.11_0.03_275)] overflow-hidden select-none cursor-pointer"
          onClick={dismiss}
          aria-label="Click anywhere to enter AstroFree"
        >
          {/* Deep celestial radial nebulas */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.38_0.18_295/0.45)_0%,oklch(0.18_0.05_275/0.75)_50%,oklch(0.09_0.02_275)_100%)]"
          />

          {/* Stardust particles background */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: `${(i * 17 + 5) % 100}vw`,
                  y: `${(i * 29 + 7) % 100}vh`,
                  scale: 0.6 + ((i % 5) * 0.15),
                  opacity: 0.2 + ((i % 4) * 0.2),
                }}
                animate={{
                  opacity: [0.2, 0.95, 0.2],
                  scale: [0.7, 1.4, 0.7],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 12) * 0.12,
                }}
                className="absolute h-1 w-1 rounded-full bg-amber-200 shadow-[0_0_10px_#fbbf24]"
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
            className="absolute top-6 right-6 z-30 flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-black/50 px-4 py-1.5 text-xs font-semibold text-amber-200 backdrop-blur-md transition-all hover:bg-amber-400/20 hover:border-amber-400 hover:scale-105 cursor-pointer shadow-lg"
          >
            <span>Enter Site</span>
            <span>&rarr;</span>
          </button>

          {/* Sacred Astrological Mandala & Geometric Rings */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Outer Rotating Astrological Ring */}
            <motion.div
              initial={{ rotate: 0, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 0.85 }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.1, ease: "easeOut" },
                opacity: { duration: 0.7 },
              }}
              className="absolute h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] rounded-full border border-amber-400/30"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-70">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2, 4" className="text-amber-300" />
                <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-amber-400/50" />
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
                      strokeWidth="0.7"
                      className="text-amber-300"
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* Middle Counter-Rotating Sacred Octagram */}
            <motion.div
              initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
              animate={{ rotate: -360, scale: 1, opacity: 0.9 }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.95, ease: "easeOut" },
                opacity: { duration: 0.7, delay: 0.15 },
              }}
              className="absolute h-[250px] w-[250px] sm:h-[340px] sm:w-[340px] rounded-full border border-purple-400/40"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-60">
                <polygon
                  points="50,5 63,37 95,50 63,63 50,95 37,63 5,50 37,37"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  className="text-amber-300"
                />
                <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3, 3" className="text-purple-300" />
              </svg>
            </motion.div>

            {/* Glowing Golden Core Sigil */}
            <motion.div
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], rotate: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[2.5px] shadow-[0_0_60px_rgba(245,197,100,0.6)]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[oklch(0.12_0.03_275)] backdrop-blur-xl">
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-10 w-10 text-amber-300 drop-shadow-[0_0_15px_rgba(245,197,100,0.9)]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Typographic Awakening Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mt-8 text-center px-4"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-300/90 mb-2">
                Ancient Arcana · Modern Vedic Intelligence
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
                <span className="gold-text drop-shadow-[0_0_30px_rgba(245,197,100,0.5)]">
                  Astro
                </span>
                <span className="text-foreground/90 font-light">Free</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "130px" }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"
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
