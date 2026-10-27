import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Compass, Sparkles, BookOpen, ArrowRight, ShieldCheck, Moon } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      {/* Background ambient gradient */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-full max-w-6xl rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.24_0.06_275/0.3),transparent_70%)] blur-3xl" 
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Sanctuary Capabilities"
          title="Designed for Depth, Clarity & Sacred Reverence"
          subtitle="Explore a complete suite of traditional esoteric tools unified with modern artificial intelligence."
        />

        {/* Asymmetric Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: 2-column marquee - Sacred Tarot Spreads */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-7 sm:p-9 shadow-2xl backdrop-blur-xl flex flex-col justify-between"
          >
            {/* Background Image Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/tarot_cosmic_sanctuary_1793008311617.jpg"
                alt="Sacred tarot altar sanctuary"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center opacity-35 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.03_275)] via-[oklch(0.14_0.03_275/0.8)] to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                <Compass className="h-4 w-4" />
                <span>The Oracle's Altar</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
                8 Sacred Tarot Spreads for Every Seeking
              </h3>
              <p className="mt-2.5 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you seek the comprehensive 10-position Celtic Cross, romantic clarity with the Love & Soulmate spread, or concise daily direction — each card draw honors traditional position symbolism and archetypal resonance.
              </p>

              {/* Spread Quick Launchers */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <Link
                  to="/tarot/celtic-cross"
                  className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-amber-200 transition-colors hover:bg-amber-400/20"
                >
                  Celtic Cross (10 Cards)
                </Link>
                <Link
                  to="/tarot/three-card"
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-foreground/90 transition-colors hover:bg-white/10"
                >
                  Past · Present · Future
                </Link>
                <Link
                  to="/tarot/love"
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-foreground/90 transition-colors hover:bg-white/10"
                >
                  Love & Connections
                </Link>
                <Link
                  to="/tarot/career"
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-foreground/90 transition-colors hover:bg-white/10"
                >
                  Career Pathway
                </Link>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">78 Hand-crafted Major & Minor Arcana</span>
              <Link
                to="/tarot"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition-colors hover:text-amber-200"
              >
                <span>Explore All Spreads</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 2: 1-column - Vedic Numerology Wheel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-7 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/vedic_numerology_wheel_1793008328818.jpg"
                alt="Vedic numerology wheel"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center opacity-30 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.03_275)] via-[oklch(0.14_0.03_275/0.85)] to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                <Moon className="h-4 w-4" />
                <span>Vedic Mathematics</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                Mulank, Bhagyank & Namank
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Unlock your root number, planetary lord, life destiny path, and name vibration — mapped directly to corresponding Major Arcana tarot cards.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
              <Link
                to="/numerology"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition-colors hover:text-amber-200"
              >
                <span>Calculate Your Numbers</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 3: 1-column - Compassionate AI Oracle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-7 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/tarot_reading_oracle_1793008343197.jpg"
                alt="Mystical tarot reader oracle hands"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center opacity-30 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.03_275)] via-[oklch(0.14_0.03_275/0.85)] to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Modern Intelligence</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                Deep Contextual AI Synthesis
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Readings weave together your question, card upright/reversed positions, and Vedic energy pacing into grounded, empathetic insights in 13 languages.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
              <Link
                to="/reading"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition-colors hover:text-amber-200"
              >
                <span>Ask The Oracle</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 4: 2-column - Sacred Rituals & Private Journal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-7 sm:p-9 shadow-2xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                <BookOpen className="h-4 w-4" />
                <span>Sacred Rituals</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Private Journal & Daily Card Ritual
              </h3>
              <p className="mt-2.5 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Begin each morning by drawing a single card to anchor your intention. Review your personal reading history, spot recurring archetypes, and observe your energetic cycles over months and years — 100% confidential in your local storage.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-left">
                  <div className="text-amber-400 font-display text-lg font-semibold">Morning Ritual</div>
                  <div className="text-xs text-muted-foreground mt-0.5">One-card daily reflection</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-left">
                  <div className="text-amber-400 font-display text-lg font-semibold">Energy Pacing</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Active, Reflective & Harmony</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-left">
                  <div className="text-amber-400 font-display text-lg font-semibold">Zero Telemetry</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Your reflections remain yours</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
                <span>Protected by Client-Side Storage</span>
              </div>
              <Link
                to="/journal"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 transition-colors hover:text-amber-200"
              >
                <span>Open Your Journal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
