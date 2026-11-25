import { Link } from "@/components/LocalizedLink";
import { Hash, Calculator, Scale, Compass, Sparkles, HelpCircle, BookOpen } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { getGuideVsLocale } from "@/locales/guides-num-i18n";

const PATH = "/guide/mulank-vs-bhagyank";
const UPDATED = "2026-08-14";

const FAQS = [
  {
    question: "What is the difference between Mulank and Bhagyank?",
    answer:
      "Mulank (also called Moolank) is calculated only from your day of birth and describes your core personality and instinctive nature. Bhagyank is calculated from your full date of birth and describes your life path, destiny, and the larger arc your life tends to follow.",
  },
  {
    question: "Which number matters more, Mulank or Bhagyank?",
    answer:
      "Neither outranks the other: they describe different layers. Mulank is closer to how you naturally behave day to day, while Bhagyank shapes the long-term direction and major turning points of your life. A full reading considers both together.",
  },
  {
    question: "Can Mulank and Bhagyank be the same number?",
    answer:
      "Yes. If your birth day itself already reduces cleanly and lines up with your full birth date's reduced total, the two numbers can match. When they do, most Indian numerologists read it as a sign of unusual internal alignment between your personality and your life direction.",
  },
  {
    question: "Is this the same as Western numerology's Life Path number?",
    answer:
      "Bhagyank is calculated the same way as the Western Life Path number: reducing the full birth date to a single digit. Mulank has no exact Western equivalent; it's closer to, but not identical to, a birth-day or personality number used in some Western systems.",
  },
  {
    question: "Do master numbers 11 and 22 apply to Bhagyank?",
    answer:
      "In most Indian numerology traditions, yes: a Bhagyank total of 11 or 22 is often kept unreduced and treated as a master number carrying amplified potential and responsibility, rather than being reduced further to 2 or 4.",
  },
];

export function GuideMulankVsBhagyankScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const loc = getGuideVsLocale(language);

  return (
    <ArticleLayout
      crumbs={[{ label: BREADCRUMB_LABELS.guides[language], to: "/guide" }, { label: loc.crumb }]}
      eyebrow={loc.eyebrow}
      title={loc.title}
      intro={loc.intro}
      url={`${SITE_URL}${PATH}`}
      updated={UPDATED}
      readingMinutes={11}
      wordCount={2550}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <Hash className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
    >
      <ContentSection id="tradition" title={loc.secTradition} icon={BookOpen}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Indian numerology, rooted in Vedic and later Pythagorean-influenced systems popularised
          across South Asia, treats a birth date as a compact code containing two distinct layers of
          information: who you naturally are, and where your life is headed. Rather than collapsing
          a birth date into a single number the way some Western systems do, Indian numerology
          deliberately separates these into <strong className="text-foreground/90">Mulank</strong>{" "}
          and <strong className="text-foreground/90">Bhagyank</strong>, and reads them as a pair,
          not a substitute for one another.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Both numbers are derived using the same underlying technique, digit reduction: repeatedly
          adding the digits of a number together until a single digit from 1 to 9 remains (with
          master numbers 11 and 22 sometimes kept intact). Where they differ is which digits of your
          birth date go into that calculation.
        </p>
      </ContentSection>

      <ContentSection id="mulank" title={loc.secMulank} icon={Calculator}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Mulank, sometimes spelled Moolank, uses only your day of birth: nothing else. If you were
          born on a single-digit day (1 through 9), that's already your Mulank. If you were born on
          a double-digit day (10 through 31), you reduce it to one digit.
        </p>
        <GlassCard className="mt-4 p-5">
          <h3 className="font-display text-base">{loc.workedExample}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            28 → 2 + 8 = 10 → 1 + 0 = 1 · {BREADCRUMB_LABELS.mulank[language]} ={" "}
            <strong className="text-foreground/90">1</strong>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            6 → {BREADCRUMB_LABELS.mulank[language]} ={" "}
            <strong className="text-foreground/90">6</strong>
          </p>
        </GlassCard>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <Link to="/numerology/mulank" className="text-[var(--gold)] hover:underline">
            {BREADCRUMB_LABELS.mulank[language]} (1–9) →
          </Link>
        </p>
      </ContentSection>

      <ContentSection id="bhagyank" title={loc.secBhagyank} icon={Compass}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Bhagyank draws from your entire date of birth (day, month, and year together) and is
          reduced the same way, digit by digit, until one number remains. Because it incorporates
          the full date, it's understood to describe something bigger than personality: the arc your
          life tends to follow, the lessons that recur across decades, and the broad direction your
          major decisions tend to push you toward.
        </p>
        <GlassCard className="mt-4 p-5">
          <h3 className="font-display text-base">{loc.workedExample}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            28 / 11 / 1994 → 2+8+1+1+1+9+9+4 = 35 → 3+5 = 8 · {BREADCRUMB_LABELS.bhagyank[language]} ={" "}
            <strong className="text-foreground/90">8</strong>
          </p>
        </GlassCard>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <Link to="/bhagyank-calculator" className="text-[var(--gold)] hover:underline">
            {t("numerologyLanding2.cta")} →
          </Link>
        </p>
      </ContentSection>

      <ContentSection id="comparison" title={loc.secCompare} icon={Scale}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-[0.15em] text-muted-foreground">
                <th className="py-2 pr-4">{loc.colAspect}</th>
                <th className="py-2 pr-4 text-[var(--gold)]">{loc.colMulank}</th>
                <th className="py-2">{loc.colBhagyank}</th>
              </tr>
            </thead>
            <tbody>
              {loc.rows.map((row) => (
                <tr key={row.label} className="border-b border-white/5">
                  <td className="py-3 pr-4 text-foreground/90">{row.label}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{row.mulank}</td>
                  <td className="py-3 text-muted-foreground">{row.bhagyank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection id="reading-together" title={loc.secTogether} icon={Sparkles}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          A complete Indian numerology profile always considers Mulank and Bhagyank as a pair, not a
          choice between them. Think of Mulank as your default operating mode and Bhagyank as the
          terrain you're operating in: the two combine to explain both how you tend to act and what
          you tend to end up doing with your life.
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "When Mulank and Bhagyank match, personality and destiny reinforce each other: what you naturally are is also where life is steering you, often producing an unusually clear sense of purpose.",
            "When they differ, there's often a gap to bridge: your instincts (Mulank) may pull one way while your larger path (Bhagyank) asks something else of you, which many readers interpret as the central growth challenge of that person's life.",
            "Some traditions also weigh a third figure, the Namank (name number), derived from the numerological value of your name, to see how it supports or conflicts with Mulank and Bhagyank.",
          ].map((p) => (
            <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
              />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <Link to="/namank-calculator" className="text-[var(--gold)] hover:underline">
            {t("numerologyLanding3.cta")} →
          </Link>
        </p>
      </ContentSection>

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology/mulank",
            label: `${BREADCRUMB_LABELS.mulank[language]} (1–9)`,
            blurb: t("numerologyLanding.step1Body"),
          },
          {
            to: "/bhagyank-calculator",
            label: t("numerologyLanding2.cta"),
            blurb: t("numerologyLanding.step2Body"),
          },
          {
            to: "/guide/numerology",
            label: `${BREADCRUMB_LABELS.guides[language]} · ${BREADCRUMB_LABELS.numerology[language]}`,
            blurb: t("numerologyLanding.subtitle"),
          },
          {
            to: "/numerology",
            label: t("numerology.title"),
            blurb: t("numerology.subtitle"),
          },
        ]}
      />

      <CTASection
        title={loc.ctaTitle}
        body={loc.ctaBody}
        ctaLabel={loc.ctaLabel}
        to="/numerology"
      />
    </ArticleLayout>
  );
}
