import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Compass, Moon, Sun, Shield } from "lucide-react";
import { FloatingCards } from "@/components/arcana/FloatingCards";

interface HeroProps {
  onReplayIntro?: () => void;
}

export function Hero({ onReplayIntro }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Ambient Molten Chrome & Iridescent Glows */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(148,163,184,0.10)_35%,rgba(99,102,241,0.06)_60%,transparent_75%)] blur-3xl" 
      />
      <div 
        aria-hidden 
        className="pointer-events-none absolute top-40 right-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(192,210,255,0.06)_40%,transparent_70%)] blur-2xl" 
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Unboxed clean metadata kicker (anti-slop rule: no static pill badge) */}
          <div className="mx-auto mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 tracking-[0.22em] uppercase">
            <span>Ancient Wisdom</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Vedic Numerology</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Compassionate AI</span>
          </div>

          {/* Majestic Display Headline with Liquid Chrome Shine */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] [text-wrap:balance]">
            <span>Unveil What the Stars &</span>{" "}
            <span className="chrome-text">Arcana Whisper</span>
          </h1>

          {/* Subtitle in Silvery Slate */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300/90 leading-relaxed [text-wrap:balance]">
            Step into an intuitive sanctuary for 78-card tarot divination and Vedic numerology archetypes. Guided by modern AI, rooted in sacred tradition — always private, reflective, and free.
          </p>

          {/* Primary Liquid Chrome Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reading"
              className="liquid-chrome-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950"
            >
              <Compass className="h-4 w-4" />
              <span>Begin Sacred Tarot Reading</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/numerology"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.08] hover:border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 backdrop-blur-md"
            >
              <Moon className="h-4 w-4 text-slate-300" />
              <span>Calculate Vedic Numerology</span>
            </Link>
          </div>

          {/* Quiet Trust Evidence Strip with Replay Intro trigger */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Sun className="h-3.5 w-3.5 text-slate-300" />
              <span>8 Traditional Spreads</span>
            </div>
            <span aria-hidden="true" className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-slate-300" />
              <span>Mulank, Bhagyank & Namank</span>
            </div>
            <span aria-hidden="true" className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-slate-300" />
              <span>100% Private · Free</span>
            </div>
            {onReplayIntro && (
              <>
                <span aria-hidden="true" className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium text-slate-200 hover:bg-white/[0.12] hover:border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-colors cursor-pointer"
                  title="Replay the liquid chrome opening animation"
                >
                  <Sparkles className="h-3 w-3 text-white" />
                  <span>Replay Intro</span>
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* Five-Card Interactive Fan Display with Liquid Chrome Molten Aura */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-16"
        >
          <FloatingCards />
        </motion.div>
      </div>
    </section>
  );
}
