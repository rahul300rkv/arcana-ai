import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Features";
import { ArrowRight, Compass, Sparkles, Wand2 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Frame Your Sacred Intention",
    body: "Begin with a quiet breath. Focus on your query — love, career, crossroads, or general spiritual alignment — and choose the spread tailored to your inquiry.",
  },
  {
    n: "02",
    icon: Wand2,
    title: "Shuffle & Draw Sacred Cards",
    body: "Engage the deck. Our randomized shuffle preserves the authentic probability of all 78 Major and Minor Arcana, including upright and reversed orientations.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Synthesize Divine Clarity",
    body: "Read deep position-by-position interpretations synthesized by Gemini AI, followed by a cohesive summary that leaves you with clarity and empowered next steps.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="The Sacred Ritual"
          title="How AstroFree Divines Your Path"
          subtitle="Three mindful steps designed to quiet modern noise and channel inner clarity."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* Liquid chrome linking thread */}
          <div
            aria-hidden
            className="absolute inset-x-12 top-10 hidden h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.6)] md:block"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-8 text-center"
            >
              {/* Liquid Chrome Icon Emblem */}
              <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br from-white/20 via-slate-700/40 to-black/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_0_25px_rgba(255,255,255,0.2)]">
                <s.icon className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={1.75} />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#0a0b12] border border-white/40 text-[11px] font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {s.n}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300/90 leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/reading"
            className="liquid-chrome-btn inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-wider text-slate-950"
          >
            <span>Begin Your Personal Ritual</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
