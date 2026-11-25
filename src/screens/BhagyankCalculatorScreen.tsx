import { useState } from "react";
import { Link } from "@/components/LocalizedLink";
import {
  BookOpen,
  Briefcase,
  Calculator,
  Compass,
  Heart,
  HelpCircle,
  Route as RouteIcon,
  Sparkles,
} from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { BhagyankCalculator } from "@/components/bhagyank/BhagyankCalculator";
import { BhagyankMeaningsAccordion } from "@/components/bhagyank/BhagyankMeaningsAccordion";
import { BHAGYANK_EXAMPLES, BHAGYANK_FAQS, BHAGYANK_UPDATED } from "@/data/bhagyank";
import { SITE_URL } from "@/lib/site";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { getBhagyankLocale } from "@/locales/guides-num-i18n";

export function BhagyankCalculatorScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const loc = getBhagyankLocale(language);
  const [openMeaning, setOpenMeaning] = useState<string | undefined>(undefined);

  function handleViewMeaning(value: number) {
    const target = `bhagyank-${value}`;
    setOpenMeaning(target);
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <ArticleLayout
      crumbs={[{ label: loc.calcCrumb }]}
      eyebrow={loc.calcEyebrow}
      title={loc.calcTitle}
      intro={loc.calcIntro}
      url={`${SITE_URL}/bhagyank-calculator`}
      updated={BHAGYANK_UPDATED}
      readingMinutes={11}
      wordCount={2600}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-5xl aurora-text">1–9</span>
        </GlassCard>
      }
    >
      <section aria-labelledby="calculator-heading" className="scroll-mt-24">
        <h2 id="calculator-heading" className="sr-only">
          {loc.calcCrumb}
        </h2>
        <BhagyankCalculator onViewMeaning={handleViewMeaning} />
      </section>

      <ContentSection
        id="what-is-bhagyank"
        title={loc.secWhatIs}
        icon={BookOpen}
        paragraphs={[
          "Bhagyank, also known as the Destiny Number or Life Path Number, is a core figure in numerological tradition, calculated by reducing every digit of your complete date of birth (day, month and year together) to a single number. Where Mulank looks only at the day you were born, Bhagyank is read as a wider signature drawn from your whole birthdate.",
          "In classical Pythagorean numerology and in Vedic numerology alike, Bhagyank is generally treated as one of the most significant numbers in a person's chart, said to describe overall direction, the kind of lessons a life tends to circle back to, and the broad shape of opportunity and challenge a person will likely encounter.",
          "It's worth being clear about what this actually is: a traditional, belief-based framework for reflection, not a scientifically validated predictor of outcomes. AstroFree presents Bhagyank as a tool for self-exploration and conversation-starting, in the same spirit as its tarot readings.",
        ]}
      />

      <ContentSection
        id="how-calculated"
        title={loc.secHowCalc}
        icon={Calculator}
        paragraphs={[
          "The method is simple: write out your date of birth as day, month, and full four-digit year, then add together every individual digit. If the result is more than one digit, add those digits together again, and repeat, until you reach a single digit. The one exception is if an intermediate sum lands on 11, 22, or 33: tradition holds that these Master Numbers are preserved rather than reduced further.",
        ]}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {BHAGYANK_EXAMPLES.map((ex) => (
            <GlassCard key={ex.dob} className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{ex.label}</p>
              <p className="mt-2 font-display text-sm text-foreground/90">
                {t("calcUi.yourDob")}: {ex.dob}
              </p>
              <div className="mt-2 space-y-1 font-mono text-xs text-muted-foreground">
                <p>
                  {ex.digits} {ex.firstSum}
                </p>
                {ex.finalSum && <p>{ex.finalSum}</p>}
              </div>
              <p className="mt-3 font-display text-sm text-[var(--gold)]">
                {loc.hubCrumb} = {ex.result}
              </p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="meanings" title={loc.secMeanings} icon={Sparkles}>
        <BhagyankMeaningsAccordion openValue={openMeaning} onOpenValueChange={setOpenMeaning} />
      </ContentSection>

      <ContentSection
        id="bhagyank-vs-mulank"
        title={loc.secVs}
        icon={Compass}
        paragraphs={[
          "Mulank and Bhagyank are the two numbers people most often confuse, and the difference comes down to which part of your date of birth is used. Mulank (also called the birth, driver, or psychic number) is calculated from your day of birth alone. If you were born on the 23rd of any month, your Mulank is 5 (2 + 3), regardless of the month or year.",
          "Bhagyank uses your complete date of birth: day, month, and year, all reduced together. It's a slower calculation because there's more to add, but it's traditionally read as the broader of the two figures: less about your instinctive, day-to-day personality (Mulank's territory) and more about the overall arc of your life: the kind of path you're on and the lessons that tend to recur across it.",
          "Most practitioners treat the two as complementary rather than competing. Mulank is often described as how you show up; Bhagyank as where you're headed. Reading them together, rather than picking one, is the traditional approach.",
        ]}
      >
        <Link
          to="/numerology/mulank"
          className="inline-flex min-h-12 items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-[var(--gold)] hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)]"
        >
          {loc.exploreOtherCalc}
        </Link>
      </ContentSection>

      <ContentSection
        id="bhagyank-career"
        title={loc.secCareer}
        icon={Briefcase}
        paragraphs={[
          "Numerological tradition associates each Bhagyank number with a broad set of career tendencies: 1s toward founding and leading, 8s toward business and finance, 6s toward caregiving and service professions, and so on, as detailed number-by-number above. These associations come from centuries of numerological practice, not from labour-market data or psychometric research, and should be read as prompts for reflection rather than a career test.",
          "Used thoughtfully, a Bhagyank reading can be a useful mirror: a way to ask whether your current work draws on the strengths your number describes, or asks you to consistently work against your grain. It isn't a substitute for genuine career guidance, aptitude assessment, or professional counselling.",
        ]}
      />

      <ContentSection
        id="bhagyank-relationships"
        title={loc.secRelationships}
        icon={Heart}
        paragraphs={[
          "In numerological tradition, comparing two people's Bhagyank numbers is sometimes used as a lens on relationship dynamics, where two paths might naturally align, and where they might create friction that takes conscious effort to navigate. A 1 and a 2, for instance, are traditionally described as a study in contrasts: independence meeting a need for partnership.",
          "These readings are best treated as general and non-deterministic. No number combination is described in serious numerological practice as guaranteeing compatibility or incompatibility: real relationships are shaped by communication, shared values, and effort far more than by any single calculation.",
        ]}
      />

      <ContentSection
        id="bhagyank-life-path"
        title={loc.secExtra}
        icon={RouteIcon}
        paragraphs={[
          "Bhagyank is the term used in Indian numerology; 'Life Path Number' is the term most Western numerologists use. They're commonly compared because both are typically derived by reducing a complete date of birth to a single digit, but the traditions developed separately, and calculation conventions (such as how and when Master Numbers are preserved) can differ between systems and even between individual practitioners. Treat the comparison as a useful reference point rather than a strict equivalence.",
          "The stated limitation, even within numerological tradition itself, is that a Bhagyank or Life Path number describes broad tendencies, not fixed outcomes. It doesn't account for upbringing, circumstance, personal choice, or the countless other factors that shape an actual life. Most thoughtful practitioners treat it as one lens among many, worth holding loosely rather than as a script to follow.",
        ]}
      />

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={BHAGYANK_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology/mulank",
            label: "Mulank (Birth Number) Guide",
            blurb: t("numerologyLanding.step1Body"),
          },
          {
            to: "/numerology",
            label: t("numerology.title"),
            blurb: t("numerology.subtitle"),
          },
          {
            to: "/guide/numerology",
            label: "Mulank & Numerology Guide",
            blurb: t("numerologyLanding.subtitle"),
          },
          {
            to: "/tarot",
            label: t("tarotUi.all78Cards"),
            blurb: t("tarotHub.intro"),
          },
        ]}
      />

      <CTASection
        title={loc.ctaTitle}
        body={loc.ctaBody}
        ctaLabel={t("calcUi.openFreeCalc")}
        to="/numerology"
      />
    </ArticleLayout>
  );
}
