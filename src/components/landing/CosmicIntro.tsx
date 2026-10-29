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

    // 2.8s presentation hold before liquid dissolve
    const timer = setTimeout(() => {
      dismiss();
    }, 2800);

    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="liquid-chrome-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
            transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05060a] overflow-hidden select-none cursor-pointer"
          onClick={dismiss}
          aria-label="Click anywhere to enter AstroFree"
        >
          {/* Molten Mercury Ambient Fluid Refraction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.35, 0.65, 0.4],
              scale: [0.9, 1.1, 0.95],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute h-[550px] w-[550px] sm:h-[700px] sm:w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(148,163,184,0.14)_35%,rgba(99,102,241,0.08)_60%,transparent_75%)] blur-3xl"
          />

          {/* Polished Concentric Chrome Orbitals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[430px] sm:w-[430px] rounded-full border border-white/25 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.15)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: 0.25, scale: 1.18 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute h-[440px] w-[440px] sm:h-[600px] sm:w-[600px] rounded-full border border-slate-400/20 shadow-[0_0_30px_rgba(180,200,255,0.1)]"
          />

          {/* Top Skip Button in Liquid Chrome Pill */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dismiss();
            }}
            className="absolute top-6 right-6 z-30 flex items-center gap-1.5 rounded-full border border-white/30 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/[0.12] hover:scale-105 cursor-pointer"
          >
            <span>Enter Site</span>
            <span>&rarr;</span>
          </button>

          {/* Central Molten Chrome Sphere & Title */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            {/* Liquid Metal Specular Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-white via-slate-200 via-slate-400 to-slate-700 p-[2px] shadow-[0_0_50px_rgba(255,255,255,0.45),inset_0_1px_2px_rgba(255,255,255,0.9)]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#141622] to-[#06070c] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.3)]">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 6, -6, 0],
                  }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-9 w-9 text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Liquid Chrome Typography */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
                <span className="chrome-text">Astro</span>
                <span className="text-zinc-200 font-light tracking-wide ml-1">Free</span>
              </h1>
            </motion.div>

            {/* Liquid Chrome Hairline Ray */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 h-[1.5px] w-28 sm:w-36 bg-gradient-to-r from-transparent via-white/90 to-transparent origin-center shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3.5 text-xs sm:text-sm tracking-[0.28em] uppercase text-slate-300 font-normal"
            >
              Ancient Arcana · Modern Vedic Wisdom
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
