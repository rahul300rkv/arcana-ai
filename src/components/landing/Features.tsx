import { Link } from "@tanstack/react-router";
import { Compass, Sparkles, BookOpen, ArrowRight, ShieldCheck, Moon } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      {/* Background ambient gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-full max-w-6xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(165,28,56,0.14)_0%,rgba(248,236,214,0.05)_40%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Sanctuary Capabilities"
          title="Designed for Depth, Clarity & Sacred Reverence"
          subtitle="Explore a complete suite of traditional esoteric tools unified with modern artificial intelligence."
        />

        {/* Crimson Burgundy & Ivory Asymmetric Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: 2-column marquee - Sacred Tarot Spreads */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-9 flex flex-col justify-between">
            {/* Background Image Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/tarot-cosmic-sanctuary.webp"
                alt="Candlelit crimson and velvet tarot altar sanctuary prepared for sacred arcana spread readings"
                loading="lazy"
                decoding="async"
                width={640}
                height={358}
                className="h-full w-full object-cover object-center opacity-30 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18050a] via-[#1f060d]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                <Compass className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>The Oracle's Altar</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-[#faf2e4] tracking-tight">
                8 Sacred Tarot Spreads for Every Seeking
              </h3>
              <p className="mt-2.5 max-w-xl text-base text-[#e3cfb6]/95 leading-relaxed">
                Whether you seek the comprehensive 10-position Celtic Cross, romantic clarity with the Love &amp; Soulmate spread, or concise daily direction — each card draw honors traditional position symbolism and archetypal resonance.
              </p>

              {/* Spread Quick Launchers */}
              <div className="mt-6 flex flex-wrap gap-2.5 text-sm sm:text-xs">
                <Link
                  to="/tarot/celtic-cross"
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/35 bg-[#f5e7d0]/15 px-4 py-2 sm:px-3.5 sm:py-1.5 font-medium text-[#fffaf0] shadow-[inset_0_1px_1px_rgba(255,248,235,0.3)] transition-all hover:bg-[#f5e7d0]/25 hover:border-[#f5e7d0]/60"
                >
                  Celtic Cross (10 Cards)
                </Link>
                <Link
                  to="/tarot/three-card"
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] transition-colors hover:bg-[#521222]/80 hover:text-[#fffaf0]"
                >
                  Past · Present · Future
                </Link>
                <Link
                  to="/tarot/love"
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] transition-colors hover:bg-[#521222]/80 hover:text-[#fffaf0]"
                >
                  Love &amp; Connections
                </Link>
                <Link
                  to="/tarot/career"
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] transition-colors hover:bg-[#521222]/80 hover:text-[#fffaf0]"
                >
                  Career Pathway
                </Link>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#f5e7d0]/15 flex items-center justify-between gap-2">
              <span className="text-xs text-[#d6bfa3]">78 Hand-crafted Major &amp; Minor Arcana</span>
              <Link
                to="/tarot"
                className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-sm sm:text-xs font-semibold text-[#faf2e4] transition-colors hover:text-[#fffdf8]"
              >
                <span>Explore All Spreads</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: 1-column - Vedic Numerology Wheel */}
          <div className="group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-8 flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/vedic-numerology-wheel.webp"
                alt="Vedic numerology sacred geometry wheel illustrating numbers 1 through 9 and planetary rulers"
                loading="lazy"
                decoding="async"
                width={480}
                height={358}
                className="h-full w-full object-cover object-center opacity-25 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18050a] via-[#1f060d]/88 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                <Moon className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>Vedic Mathematics</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-[#faf2e4] tracking-tight">
                Mulank, Bhagyank &amp; Namank
              </h3>
              <p className="mt-2 text-base sm:text-sm text-[#e3cfb6]/95 leading-relaxed">
                Unlock your root number, planetary lord, life destiny path, and name vibration — mapped directly to corresponding Major Arcana tarot cards.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#f5e7d0]/15">
              <Link
                to="/numerology"
                className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-sm sm:text-xs font-semibold text-[#faf2e4] transition-colors hover:text-[#fffdf8]"
              >
                <span>Calculate Your Numbers</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bento Card 3: 1-column - Compassionate AI Oracle */}
          <div className="group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-8 flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/tarot-reading-oracle.webp"
                alt="Tarot reader hands thoughtfully drawing an illustrated arcana card during a reflective oracle reading"
                loading="lazy"
                decoding="async"
                width={480}
                height={358}
                className="h-full w-full object-cover object-center opacity-25 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18050a] via-[#1f060d]/88 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>Modern Intelligence</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-[#faf2e4] tracking-tight">
                Deep Contextual AI Synthesis
              </h3>
              <p className="mt-2 text-base sm:text-sm text-[#e3cfb6]/95 leading-relaxed">
                Readings weave together your question, card upright/reversed positions, and Vedic energy pacing into grounded, empathetic insights in 13 languages.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#f5e7d0]/15">
              <Link
                to="/reading"
                className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-sm sm:text-xs font-semibold text-[#faf2e4] transition-colors hover:text-[#fffdf8]"
              >
                <span>Ask The Oracle</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bento Card 4: 2-column - Sacred Rituals & Private Journal */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-9 flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                <BookOpen className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>Sacred Rituals</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-[#faf2e4] tracking-tight">
                Private Journal &amp; Daily Card Ritual
              </h3>
              <p className="mt-2.5 max-w-xl text-base text-[#e3cfb6]/95 leading-relaxed">
                Begin each morning by drawing a single card to anchor your intention. Review your personal reading history, spot recurring archetypes, and observe your energetic cycles over months and years — 100% confidential in your local storage.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-[#f5e7d0]/20 bg-[#3a0c18]/55 p-3 text-left shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                  <div className="text-[#faf2e4] font-display text-lg font-bold">Morning Ritual</div>
                  <div className="text-xs text-[#d6bfa3] mt-0.5">One-card daily reflection</div>
                </div>
                <div className="rounded-2xl border border-[#f5e7d0]/20 bg-[#3a0c18]/55 p-3 text-left shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                  <div className="text-[#faf2e4] font-display text-lg font-bold">Energy Pacing</div>
                  <div className="text-xs text-[#d6bfa3] mt-0.5">Active, Reflective &amp; Harmony</div>
                </div>
                <div className="rounded-2xl border border-[#f5e7d0]/20 bg-[#3a0c18]/55 p-3 text-left shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                  <div className="text-[#faf2e4] font-display text-lg font-bold">Zero Telemetry</div>
                  <div className="text-xs text-[#d6bfa3] mt-0.5">Your reflections remain yours</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#f5e7d0]/15 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#ead9c3]">
                <ShieldCheck className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>Protected by Client-Side Storage</span>
              </div>
              <Link
                to="/journal"
                className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-sm sm:text-xs font-semibold text-[#faf2e4] transition-colors hover:text-[#fffdf8]"
              >
                <span>Open Sanctuary Journal</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
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
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4] [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-[#e3cfb6]/90 leading-relaxed [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
