import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { GoldButton } from "@/components/arcana/GoldButton";
import { FloatingCards } from "@/components/arcana/FloatingCards";
import { useTranslate } from "@/lib/i18n";

export function Hero() {
  const t = useTranslate();
  const handleAffiliateClick = () => {
  window.open("https://amzn.to/4xAfhe8", "_blank", "noopener,noreferrer");
  window.location.href = "/dashboard";
};
  return (
    <section className="relative pt-36 pb-20 sm:pt-44">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--gold)_80%,white)]" />
            {t("hero.badge")}
          </div>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-foreground">{t("hero.title1")}</span>
            <br />
            <span className="aurora-text">{t("hero.title2")}</span>
            <span className="mt-3 block text-base font-normal tracking-normal text-muted-foreground sm:text-lg">
              {t("hero.titleSub")}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
  <GoldButton
    size="lg"
    className="min-w-[180px]"
    onClick={handleAffiliateClick}
  >
    {t("hero.startReading")} <ArrowRight className="h-4 w-4" />
  </GoldButton>

  <GoldButton
    variant="secondary"
    size="lg"
    className="min-w-[180px]"
    onClick={handleAffiliateClick}
  >
    {t("hero.drawDailyCard")}
  </GoldButton>
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16"
        >
          <FloatingCards />
        </motion.div>
      </div>
    </section>
  );
}
