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
      {/* Ambient Crimson Burgundy & Warm Ivory Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,238,218,0.12)_0%,rgba(165,28,56,0.22)_38%,rgba(105,12,32,0.12)_62%,transparent_76%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(248,236,214,0.09)_0%,rgba(155,24,52,0.14)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Unboxed clean metadata kicker */}
          <div className="mx-auto mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#e6d3ba] tracking-[0.22em] uppercase">
            <span>Ancient Wisdom</span>
            <span aria-hidden="true" className="text-[#f5e7d0]/40">·</span>
            <span>Vedic Numerology</span>
            <span aria-hidden="true" className="text-[#f5e7d0]/40">·</span>
            <span>Compassionate AI</span>
          </div>

          {/* Majestic Display Headline with Warm Ivory Satin Shine */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] [text-wrap:balance]">
            <span>Unveil What the Stars &</span>{" "}
            <span className="chrome-text">Arcana Whisper</span>
          </h1>

          {/* Subtitle in Warm Ivory Cream */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#e5d2ba]/95 leading-relaxed [text-wrap:balance]">
            Step into an intuitive sanctuary for 78-card tarot divination and Vedic numerology archetypes. Guided by modern AI, rooted in sacred tradition — always private, reflective, and free.
          </p>

          {/* Primary Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reading"
              className="liquid-chrome-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#24060e]"
            >
              <Compass className="h-4 w-4" />
              <span>Begin Sacred Tarot Reading</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/numerology"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#f5e7d0]/25 bg-[#3f0e1b]/55 px-7 py-3.5 text-sm font-semibold text-[#faf2e4] hover:bg-[#571324]/75 hover:border-[#f5e7d0]/55 shadow-[inset_0_1px_1px_rgba(255,248,235,0.28)] transition-all duration-300 backdrop-blur-md"
            >
              <Moon className="h-4 w-4 text-[#ead9c3]" />
              <span>Calculate Vedic Numerology</span>
            </Link>
          </div>

          {/* Quiet Trust Evidence Strip with Replay Intro trigger */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#d6bfa3]">
            <div className="flex items-center gap-1.5">
              <Sun className="h-3.5 w-3.5 text-[#ead9c3]" />
              <span>8 Traditional Spreads</span>
            </div>
            <span aria-hidden="true" className="text-[#f5e7d0]/25">·</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#ead9c3]" />
              <span>Mulank, Bhagyank & Namank</span>
            </div>
            <span aria-hidden="true" className="text-[#f5e7d0]/25">·</span>
            <div className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-[#ead9c3]" />
              <span>100% Private · Free</span>
            </div>
            {onReplayIntro && (
              <>
                <span aria-hidden="true" className="text-[#f5e7d0]/25">·</span>
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#f5e7d0]/25 bg-[#3a0d18]/60 px-2.5 py-0.5 text-[11px] font-medium text-[#faf2e4] hover:bg-[#521222]/80 hover:border-[#f5e7d0]/50 shadow-[inset_0_1px_1px_rgba(255,248,235,0.28)] transition-colors cursor-pointer"
                  title="Replay the opening animation"
                >
                  <Sparkles className="h-3 w-3 text-[#faf2e4]" />
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
