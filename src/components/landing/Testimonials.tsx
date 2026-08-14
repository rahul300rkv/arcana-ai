import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SectionHeader } from "./Features";
import { useTranslate } from "@/lib/i18n";

export function Testimonials() {
  const t = useTranslate();
  const quotes = [
    { name: "Smita", role: t("testimonials.role1"), body: t("testimonials.quote1") },
    { name: "Jayashree", role: t("testimonials.role2"), body: t("testimonials.quote2") },
    { name: "Niyati", role: t("testimonials.role3"), body: t("testimonials.quote3") },
  ];

  return (
    <section id="testimonials" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="h-full">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-3.5 w-3.5 fill-[color-mix(in_oklab,var(--gold)_85%,white)] text-[color-mix(in_oklab,var(--gold)_85%,white)]"
                    />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">"{q.body}"</p>
                <div className="mt-6 text-sm">
                  <div className="font-medium">{q.name}</div>
                  <div className="text-muted-foreground text-xs">{q.role}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
