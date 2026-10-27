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
          {/* Subtle golden linking thread */}
          <div
            aria-hidden
            className="absolute inset-x-12 top-10 hidden h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent md:block"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 text-center shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-amber-400/30 hover:-translate-y-1"
            >
              <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 shadow-glow-gold">
                <s.icon className="h-6 w-6 text-amber-300" strokeWidth={1.75} />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-amber-400/40 text-[11px] font-bold text-amber-300">
                  {s.n}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/reading"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-7 py-3 text-sm font-semibold text-slate-950 shadow-glow-gold hover:brightness-110 transition-all"
          >
            <span>Experience It Now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
