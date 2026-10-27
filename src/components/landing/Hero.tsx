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
      {/* Ambient Celestial Glows */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.45_0.20_295/0.25),transparent_70%)] blur-3xl" 
      />
      <div 
        aria-hidden 
        className="pointer-events-none absolute top-40 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.15_85/0.12),transparent_70%)] blur-2xl" 
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Unboxed clean metadata kicker */}
          <div className="mx-auto mb-4 flex items-center justify-center gap-2 text-xs font-medium text-amber-300/90 tracking-widest uppercase">
            <span>Ancient Wisdom</span>
            <span aria-hidden="true" className="text-amber-500/60">·</span>
            <span>Vedic Numerology</span>
            <span aria-hidden="true" className="text-amber-500/60">·</span>
            <span>Compassionate AI</span>
          </div>

          {/* Majestic Display Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] [text-wrap:balance]">
            <span>Unveil What the Stars &</span>{" "}
            <span className="aurora-text">Arcana Whisper</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed [text-wrap:balance]">
            Step into an intuitive sanctuary for 78-card tarot divination and Vedic numerology archetypes. Guided by modern AI, rooted in sacred tradition — always private, reflective, and free.
          </p>

          {/* Working Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reading"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-glow-gold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
            >
              <Compass className="h-4 w-4" />
              <span>Begin Sacred Tarot Reading</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/numerology"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-foreground hover:bg-white/[0.08] hover:border-amber-400/40 transition-all duration-300 backdrop-blur-md"
            >
              <Moon className="h-4 w-4 text-amber-300" />
              <span>Calculate Vedic Numerology</span>
            </Link>
          </div>

          {/* Quiet Trust Evidence Strip with Replay Intro trigger */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground/80">
            <div className="flex items-center gap-1.5">
              <Sun className="h-3.5 w-3.5 text-amber-400/80" />
              <span>8 Traditional Spreads</span>
            </div>
            <span aria-hidden="true" className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-400/80" />
              <span>Mulank, Bhagyank & Namank</span>
            </div>
            <span aria-hidden="true" className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-emerald-400/80" />
              <span>100% Private · Free</span>
            </div>
            {onReplayIntro && (
              <>
                <span aria-hidden="true" className="text-white/20">·</span>
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-300 hover:bg-amber-400/20 hover:border-amber-400/50 transition-colors cursor-pointer"
                  title="Replay the cosmic opening animation"
                >
                  <Sparkles className="h-3 w-3" />
                  <span>Replay Intro</span>
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* Five-Card Interactive Fan Display */}
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
