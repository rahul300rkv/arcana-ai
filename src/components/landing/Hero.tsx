import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { GoldButton } from "@/components/arcana/GoldButton";
import { FloatingCards } from "@/components/arcana/FloatingCards";
import { useTranslate } from "@/lib/i18n";

function useIsNarrowViewport() {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsNarrow(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsNarrow(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isNarrow;
}

export function Hero() {
  const t = useTranslate();
  const prefersReducedMotion = useReducedMotion();
  const isNarrow = useIsNarrowViewport();

  const backgroundMotion = prefersReducedMotion
    ? undefined
    : {
        scale: isNarrow ? [1.01, 1.022, 1.01] : [1.02, 1.045, 1.02],
        x: isNarrow ? [0, -2, 0] : [0, -5, 0],
        y: isNarrow ? [0, -1.5, 0] : [0, -3, 0],
      };

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
        initial={{ scale: isNarrow ? 1.01 : 1.02, x: 0, y: 0 }}
        animate={backgroundMotion}
        transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 15%, color-mix(in oklab, var(--aurora-1) 20%, transparent), transparent 65%), radial-gradient(45% 40% at 85% 80%, color-mix(in oklab, var(--aurora-2) 14%, transparent), transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
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
            
              href="https://www.effectivecpmnetwork.com/franjtjx9f?key=c686df12409a11ce8a1139d19544e414"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { window.location.href = "/dashboard"; }}
            >
              <GoldButton size="lg" className="min-w-[180px]">
                {t("hero.startReading")} <ArrowRight className="h-4 w-4" />
              </GoldButton>
            </a>

            
              href="https://www.effectivecpmnetwork.com/franjtjx9f?key=c686df12409a11ce8a1139d19544e414"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { window.location.href = "/dashboard"; }}
            >
              <GoldButton variant="secondary" size="lg" className="min-w-[180px]">
                {t("hero.drawDailyCard")}
              </GoldButton>
            </a>
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
