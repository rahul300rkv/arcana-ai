import { motion } from "framer-motion";
import { SectionHeader } from "./Features";

const steps = [
  { n: "01", title: "Set an intention", body: "Ask a question or let the day guide you." },
  { n: "02", title: "Draw your cards", body: "A curated spread appears with graceful motion." },
  { n: "03", title: "Reflect with guidance", body: "AI weaves symbolism into a calm, personal reading." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="How it works" title="Three quiet steps." />
        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div aria-hidden className="absolute inset-x-6 top-8 hidden h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--gold)_50%,transparent),transparent)] md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass relative rounded-2xl p-6 text-center"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full glass gold-text font-display text-lg">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
