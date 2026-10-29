import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Compass, Sparkles, BookOpen, ArrowRight, ShieldCheck, Moon } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      {/* Background ambient gradient */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-full max-w-6xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(148,163,184,0.05)_40%,transparent_70%)] blur-3xl" 
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Sanctuary Capabilities"
          title="Designed for Depth, Clarity & Sacred Reverence"
          subtitle="Explore a complete suite of traditional esoteric tools unified with modern artificial intelligence."
        />

        {/* Liquid Chrome Asymmetric Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: 2-column marquee - Sacred Tarot Spreads */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-9 flex flex-col justify-between"
          >
            {/* Background Image Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/tarot_cosmic_sanctuary_1793008311617.jpg"
                alt="Sacred tarot altar sanctuary"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center opacity-30 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-[#08090e]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-widest">
                <Compass className="h-4 w-4 text-white" />
                <span>The Oracle's Altar</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                8 Sacred Tarot Spreads for Every Seeking
              </h3>
              <p className="mt-2.5 max-w-xl text-sm sm:text-base text-slate-300/90 leading-relaxed">
                Whether you seek the comprehensive 10-position Celtic Cross, romantic clarity with the Love & Soulmate spread, or concise daily direction — each card draw honors traditional position symbolism and archetypal resonance.
              </p>

              {/* Spread Quick Launchers styled in Liquid Chrome */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <Link
                  to="/tarot/celtic-cross"
                  className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 font-medium text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all hover:bg-white/20 hover:border-white/60"
                >
                  Celtic Cross (10 Cards)
                </Link>
                <Link
                  to="/tarot/three-card"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Past · Present · Future
                </Link>
                <Link
                  to="/tarot/love"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Love & Connections
                </Link>
                <Link
                  to="/tarot/career"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Career Pathway
                </Link>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">78 Hand-crafted Major & Minor Arcana</span>
              <Link
                to="/tarot"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-slate-200"
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
            className="group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-8 flex flex-col justify-between"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/vedic_numerology_wheel_1793008328818.jpg"
                alt="Vedic numerology wheel"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center opacity-25 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-[#08090e]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-widest">
                <Moon className="h-4 w-4 text-white" />
                <span>Vedic Mathematics</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-white tracking-tight">
                Mulank, Bhagyank & Namank
              </h3>
              <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">
                Unlock your root number, planetary lord, life destiny path, and name vibration — mapped directly to corresponding Major Arcana tarot cards.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
              <Link
                to="/numerology"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-slate-200"
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
            className="group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-8 flex flex-col justify-between"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/tarot_reading_oracle_1793008343197.jpg"
                alt="Mystical tarot reader oracle hands"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center opacity-25 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-[#08090e]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-white" />
                <span>Modern Intelligence</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-white tracking-tight">
                Deep Contextual AI Synthesis
              </h3>
              <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">
                Readings weave together your question, card upright/reversed positions, and Vedic energy pacing into grounded, empathetic insights in 13 languages.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
              <Link
                to="/reading"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-slate-200"
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
            className="md:col-span-2 group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-9 flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-widest">
                <BookOpen className="h-4 w-4 text-white" />
                <span>Sacred Rituals</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Private Journal & Daily Card Ritual
              </h3>
              <p className="mt-2.5 max-w-xl text-sm sm:text-base text-slate-300/90 leading-relaxed">
                Begin each morning by drawing a single card to anchor your intention. Review your personal reading history, spot recurring archetypes, and observe your energetic cycles over months and years — 100% confidential in your local storage.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-3 text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                  <div className="text-white font-display text-lg font-bold">Morning Ritual</div>
                  <div className="text-xs text-slate-400 mt-0.5">One-card daily reflection</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-3 text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                  <div className="text-white font-display text-lg font-bold">Energy Pacing</div>
                  <div className="text-xs text-slate-400 mt-0.5">Active, Reflective & Harmony</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-3 text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                  <div className="text-white font-display text-lg font-bold">Zero Telemetry</div>
                  <div className="text-xs text-slate-400 mt-0.5">Your reflections remain yours</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <ShieldCheck className="h-4 w-4 text-white" />
                <span>Protected by Client-Side Storage</span>
              </div>
              <Link
                to="/journal"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-slate-200"
              >
                <span>Open Sanctuary Journal</span>
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
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
