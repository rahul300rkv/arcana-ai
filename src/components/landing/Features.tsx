import { motion } from "framer-motion";
import { Brain, Shield, Moon, Compass, BookOpen, Wand2 } from "lucide-react";
import { GlassCard } from "@/components/arcana/GlassCard";

const features = [
  { icon: Brain, title: "Intelligent guidance", body: "Nuanced interpretations that reflect context, not clichés." },
  { icon: Moon, title: "Daily card ritual", body: "A gentle prompt each morning to set intention and awareness." },
  { icon: Compass, title: "Meaningful spreads", body: "From single-card clarity to celtic cross depth — beautifully rendered." },
  { icon: BookOpen, title: "Private journal", body: "Capture reflections; watch patterns emerge across seasons." },
  { icon: Wand2, title: "Symbolic library", body: "Explore every card, suit, and archetype with modern language." },
  { icon: Shield, title: "Calm & private", body: "No noise, no data mining. Your practice stays yours." },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Features" title="A practice that feels considered." subtitle="Every detail is designed to be calm, luxurious, and trustworthy." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <GlassCard className="h-full">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_25%,transparent),transparent)] border border-white/10">
                  <f.icon className="h-5 w-5 text-[color-mix(in_oklab,var(--gold)_85%,white)]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs uppercase tracking-[0.24em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl sm:text-5xl tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
