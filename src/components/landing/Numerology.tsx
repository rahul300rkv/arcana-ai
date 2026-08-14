import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Hash, CalendarRange, Compass } from "lucide-react";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { SectionHeader } from "./Features";
import { useTranslate } from "@/lib/i18n";

export function Numerology() {
  const t = useTranslate();
const handleNumerologyClick = () => {
  window.open("https://www.amazon.in/dp/B0GMH1PTCZ?pd_rd_i=B0GMH1PTCZ&pd_rd_w=c6ek9&content-id=amzn1.sym.9a67d0ba-b3d8-41ee-8e29-a3d839054b56&pf_rd_p=9a67d0ba-b3d8-41ee-8e29-a3d839054b56&pf_rd_r=07BV8KVQCNZ11C9E309B&pd_rd_wg=8MKzc&pd_rd_r=bfb5b437-b92a-4b3b-9f2a-6f6cc5bc5386&aref=C6v4OUgafg&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&th=1&linkCode=ll2&tag=rahul038c0-21&linkId=184f5685f5a40808679cbed970ba3e73&ref_=as_li_ss_tl", "_blank", "noopener,noreferrer");
  window.location.href = "/numerology";
};

const handleBhagyankClick = () => {
  window.open("https://www.amazon.in/REBUY-Bracelet-Pyrite-Citrine-Green-Aventurine-Tiger-Eye-Crystal-Amethyst-Malachite-Magnetite/dp/B08LBNC4PW?crid=3TT5E89ZANB6H&dib=eyJ2IjoiMSJ9.k1QAjYejnTL8MfAIlJXtLsk0TJUHxl03_M4a-oTHo18lY1rYIJ3UkF3MN20gebwMmbLSv_LmT4r-klrh-zP9p3NrRaHFysiGseYQln7eYeHTrU-LSy8K-QIvSc1WvwEe47M8bPTOM0yh7l1EKcHu_vgHkMVkF8thaplGQX9HL-ZhLYLPvROsGFxQQgKwh9OopN4qFq5k0O3wlFML5F6_NcNOHuC6u1BWqWwOCY8VazrP0umfgnvTMKWn7f2kG1ppLPoeE2Q25h-Kg89OTGfYlF1U0jNm4oT_VcV_e2P9qQA.rZWpasSKdgTHE_CswV06g47CH3A-AjW7Ecc4sehByKg&dib_tag=se&keywords=mulank+bracelet&qid=1786459000&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mulank+bracelet%2Caps%2C316&sr=8-16&linkCode=ll2&tag=rahul038c0-21&linkId=5ab523579d6d4b2ca4826c98fdb3bd70&ref_=as_li_ss_tl", "_blank", "noopener,noreferrer");
  window.location.href = "/bhagyank-calculator";
};

const handleNamankClick = () => {
  window.open("https://www.amazon.in/REBUY-Bracelet-Pyrite-Citrine-Green-Aventurine-Tiger-Eye-Crystal-Amethyst-Malachite-Magnetite/dp/B08LBNC4PW?crid=3TT5E89ZANB6H&dib=eyJ2IjoiMSJ9.k1QAjYejnTL8MfAIlJXtLsk0TJUHxl03_M4a-oTHo18lY1rYIJ3UkF3MN20gebwMmbLSv_LmT4r-klrh-zP9p3NrRaHFysiGseYQln7eYeHTrU-LSy8K-QIvSc1WvwEe47M8bPTOM0yh7l1EKcHu_vgHkMVkF8thaplGQX9HL-ZhLYLPvROsGFxQQgKwh9OopN4qFq5k0O3wlFML5F6_NcNOHuC6u1BWqWwOCY8VazrP0umfgnvTMKWn7f2kG1ppLPoeE2Q25h-Kg89OTGfYlF1U0jNm4oT_VcV_e2P9qQA.rZWpasSKdgTHE_CswV06g47CH3A-AjW7Ecc4sehByKg&dib_tag=se&keywords=mulank+bracelet&qid=1786459000&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mulank+bracelet%2Caps%2C316&sr=8-16&linkCode=ll2&tag=rahul038c0-21&linkId=5ab523579d6d4b2ca4826c98fdb3bd70&ref_=as_li_ss_tl", "_blank", "noopener,noreferrer");
  window.location.href = "/namank-calculator";
};
  const steps = [
    { icon: Hash, title: t("numerology.mulank"), body: t("numerologyLanding.step1Body") },
    {
      icon: CalendarRange,
      title: t("numerology.personalYear"),
      body: t("numerologyLanding.step2Body"),
    },
    {
      icon: Compass,
      title: t("numerology.personalMonth"),
      body: t("numerologyLanding.step3Body"),
    },
  ];

  return (
    <section id="numerology" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow={t("numerology.navLabel")}
          title={t("numerologyLanding.title")}
          subtitle={t("numerologyLanding.subtitle")}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="h-full text-center">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_25%,transparent),transparent)]">
                  <s.icon
                    className="h-5 w-5 text-[color-mix(in_oklab,var(--gold)_85%,white)]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
         <GoldButton
  size="lg"
  onClick={handleNumerologyClick}
>
  {t("numerologyLanding.cta")}
</GoldButton>

<GoldButton
  size="lg"
  onClick={handleBhagyankClick}
>
  {t("numerologyLanding2.cta")}
</GoldButton>

<GoldButton
  size="lg"
  onClick={handleNamankClick}
>
  {t("numerologyLanding3.cta")}
</GoldButton>

        </div>
      </div>
    </section>
  );
}
