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
          {/* Warm Ivory Linking Thread */}
          <div
            aria-hidden
            className="absolute inset-x-12 top-10 hidden h-[1.5px] bg-gradient-to-r from-transparent via-[#f5e7d0]/40 to-transparent shadow-[0_0_10px_rgba(250,240,224,0.45)] md:block"
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
              {/* Crimson & Warm Ivory Icon Emblem */}
              <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f5e7d0]/30 bg-gradient-to-br from-[#f5e7d0]/20 via-[#5a1224]/65 to-[#1c050b]/90 shadow-[inset_0_1px_1px_rgba(255,248,235,0.45),0_0_25px_rgba(165,30,58,0.28)]">
                <s.icon className="h-6 w-6 text-[#faf2e4] drop-shadow-[0_0_8px_rgba(250,240,224,0.75)]" strokeWidth={1.75} />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#24070e] border border-[#f5e7d0]/45 text-[11px] font-bold text-[#faf2e4] shadow-[0_2px_8px_rgba(10,1,4,0.85)]">
                  {s.n}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#faf2e4]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-[#e3cfb6]/90 leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/reading"
            className="liquid-chrome-btn inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#24060e]"
          >
            <span>Begin Your Personal Ritual</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
