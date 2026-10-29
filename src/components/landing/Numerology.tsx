import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Hash, Sparkles, ArrowRight, Star, Moon, Compass, Calendar } from "lucide-react";
import { SectionHeader } from "./Features";

const ARCHETYPE_MAP: Record<number, { name: string; planet: string; traits: string; tarot: string }> = {
  1: { name: "The Pioneer & Originator", planet: "Sun (Surya)", traits: "Leadership, independence, raw initiative, willpower", tarot: "The Magician" },
  2: { name: "The Intuitive Peacemaker", planet: "Moon (Chandra)", traits: "Deep empathy, sensitivity, diplomacy, harmony", tarot: "The High Priestess" },
  3: { name: "The Creative Sage", planet: "Jupiter (Guru)", traits: "Wisdom, joyful expression, optimism, expansive speech", tarot: "The Empress" },
  4: { name: "The Master Architect", planet: "Rahu", traits: "Structure, grounded logic, unconventional breakthrough", tarot: "The Emperor" },
  5: { name: "The Dynamic Catalyst", planet: "Mercury (Budha)", traits: "Versatility, quick communication, adventure, freedom", tarot: "The Hierophant" },
  6: { name: "The Harmonious Nurturer", planet: "Venus (Shukra)", traits: "Unconditional care, artistic grace, responsibility, beauty", tarot: "The Lovers" },
  7: { name: "The Mystical Seeker", planet: "Ketu", traits: "Spiritual depth, contemplation, analytical intuition", tarot: "The Chariot" },
  8: { name: "The Karmic Commander", planet: "Saturn (Shani)", traits: "Endurance, material mastery, karmic justice, resilience", tarot: "Strength / Justice" },
  9: { name: "The Universal Healer", planet: "Mars (Mangal)", traits: "Courage, global compassion, completion, inner fire", tarot: "The Hermit" },
};

function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = String(num).split("").reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return num;
}

export function Numerology() {
  const [day, setDay] = useState<number>(15);
  const [month, setMonth] = useState<number>(10);
  const [year, setYear] = useState<number>(1998);

  const { mulank, bhagyank, archetype } = useMemo(() => {
    const m = reduceToSingleDigit(day);
    const dateSum = day + month + year;
    const b = reduceToSingleDigit(dateSum);
    return {
      mulank: m,
      bhagyank: b,
      archetype: ARCHETYPE_MAP[m] || ARCHETYPE_MAP[1],
    };
  }, [day, month, year]);

  return (
    <section id="numerology" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-full max-w-5xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(148,163,184,0.04)_40%,transparent_70%)] blur-3xl" 
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Vedic Science of Numbers"
          title="Instant Sacred Numerology Matrix"
          subtitle="Discover your Mulank (birth root) and Bhagyank (destiny vibration) — test your birth date live right now."
        />

        {/* Live Interactive Liquid Chrome Matrix Container */}
        <div className="mt-12 rounded-3xl liquid-chrome-card p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Input Controls */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-widest">
                  <Calendar className="h-4 w-4 text-white" />
                  <span>Interactive Birth Date Test</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-white">
                  Select Your Date of Birth
                </h3>
                <p className="mt-1 text-sm text-slate-300/90">
                  Your birth day determines your core personality (Mulank), while full birth date reveals your life purpose (Bhagyank).
                </p>
              </div>

              {/* Day, Month, Year Pickers in Liquid Chrome Rim */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label htmlFor="birth-day" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Day
                  </label>
                  <select
                    id="birth-day"
                    value={day}
                    onChange={(e) => setDay(Number(e.target.value))}
                    className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-3 py-2.5 text-sm text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] focus:border-white focus:outline-none focus:ring-1 focus:ring-white/50"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d} className="bg-[#0e101a] text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="birth-month" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Month
                  </label>
                  <select
                    id="birth-month"
                    value={month}
                    onChange={(e) => setMonth(Number(e.target.value))}
                    className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-3 py-2.5 text-sm text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] focus:border-white focus:outline-none focus:ring-1 focus:ring-white/50"
                  >
                    {[
                      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ].map((m, i) => (
                      <option key={m} value={i + 1} className="bg-[#0e101a] text-white">
                        {m} ({i + 1})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="birth-year" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Year
                  </label>
                  <select
                    id="birth-year"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-3 py-2.5 text-sm text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] focus:border-white focus:outline-none focus:ring-1 focus:ring-white/50"
                  >
                    {Array.from({ length: 80 }, (_, i) => 2026 - i).map((y) => (
                      <option key={y} value={y} className="bg-[#0e101a] text-white">
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Calculator Deep-Dive Links */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-xs">
                <Link
                  to="/numerology/mulank"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-slate-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:text-white hover:border-white/40 transition-colors"
                >
                  Mulank Guide
                </Link>
                <Link
                  to="/bhagyank-calculator"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-slate-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:text-white hover:border-white/40 transition-colors"
                >
                  Bhagyank Calculator
                </Link>
                <Link
                  to="/namank-calculator"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-slate-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:text-white hover:border-white/40 transition-colors"
                >
                  Namank Name Numerology
                </Link>
              </div>
            </div>

            {/* Right: Live Calculation Output Card in Liquid Chrome Altar */}
            <div className="lg:col-span-7">
              <motion.div
                key={`${day}-${month}-${year}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.08] via-slate-800/40 to-black/60 p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_15px_35px_rgba(0,0,0,0.8)]"
              >
                {/* Result header badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-white/20 bg-black/40 p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Mulank (Root)
                    </span>
                    <span className="font-display text-4xl font-extrabold chrome-gold-text block mt-1">
                      {mulank}
                    </span>
                    <span className="text-[11px] text-slate-300 block mt-0.5">
                      {archetype.planet}
                    </span>
                  </div>

                  <div className="rounded-xl border border-white/20 bg-black/40 p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Bhagyank (Destiny)
                    </span>
                    <span className="font-display text-4xl font-extrabold chrome-text block mt-1">
                      {bhagyank}
                    </span>
                    <span className="text-[11px] text-slate-300 block mt-0.5">
                      Full Life Path
                    </span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/20 bg-black/40 p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Tarot Archetype
                    </span>
                    <span className="font-display text-lg font-bold text-white block mt-1 leading-tight">
                      {archetype.tarot}
                    </span>
                    <span className="text-[11px] text-slate-300 block mt-0.5">
                      Major Arcana {mulank}
                    </span>
                  </div>
                </div>

                {/* Archetype Synthesis */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Sparkles className="h-4 w-4 text-slate-300" />
                    <span>{archetype.name}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                    Governed by <strong className="text-white">{archetype.planet}</strong> and attuned to the archetype of <strong className="text-white">{archetype.tarot}</strong>. Your innate energetic gifts center on <span className="text-slate-300">{archetype.traits}</span>.
                  </p>
                </div>

                {/* Action button */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-slate-400">
                    Born on {day}/{month}/{year}
                  </span>
                  <Link
                    to="/numerology"
                    className="liquid-chrome-btn inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950"
                  >
                    <span>View Complete Personal Forecast</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
