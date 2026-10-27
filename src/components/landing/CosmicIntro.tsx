import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CosmicIntroProps {
  onComplete?: () => void;
  forcePlay?: boolean;
  onClose?: () => void;
}

export function CosmicIntro({ onComplete, forcePlay, onClose }: CosmicIntroProps) {
  const [show, setShow] = useState(true);

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

    // Smooth 2.2s total presentation time
    const timer = setTimeout(() => {
      dismiss();
    }, 2200);

    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="cosmic-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070712] overflow-hidden select-none cursor-pointer"
          onClick={dismiss}
        >
          {/* Subtle celestial breathing ambient light (GPU accelerated radial gradient) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: [0.4, 0.75, 0.5],
              scale: [0.9, 1.1, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute h-[500px] w-[500px] sm:h-[650px] sm:w-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,170,89,0.18)_0%,rgba(147,75,255,0.12)_45%,transparent_70%)] blur-3xl"
          />

          {/* Minimalist faint cosmic dust rings (whisper-quiet, non-distracting) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full border border-amber-300/20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.2, scale: 1.15 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute h-[440px] w-[440px] sm:h-[580px] sm:w-[580px] rounded-full border border-purple-400/15"
          />

          {/* Quick Skip button in top corner */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dismiss();
            }}
            className="absolute top-6 right-6 z-20 text-[11px] font-medium tracking-wider uppercase text-amber-200/60 hover:text-amber-200 transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-amber-400/30 bg-black/20 backdrop-blur-sm"
          >
            Skip &rarr;
          </button>

          {/* Central Sacred Brand Reveal */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            {/* Luminous Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-amber-500 to-amber-700 p-[1.5px] shadow-[0_0_40px_rgba(245,197,100,0.35)]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a0a18]">
                <Sparkles className="h-8 w-8 sm:h-9 sm:w-9 text-amber-300" />
              </div>
            </motion.div>

            {/* Brand Typography */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-none">
                <span className="gold-text drop-shadow-[0_0_25px_rgba(245,197,100,0.3)]">
                  Astro
                </span>
                <span className="text-foreground/90 font-light">Free</span>
              </h1>
            </motion.div>

            {/* Glowing Golden Ray Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 h-[1px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-amber-300/80 to-transparent origin-center"
            />

            {/* Whisper Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-xs sm:text-sm tracking-[0.25em] uppercase text-amber-200/70 font-light"
            >
              Ancient Arcana · Modern Vedic Wisdom
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
