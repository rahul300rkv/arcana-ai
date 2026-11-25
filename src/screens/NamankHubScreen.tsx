import { Link } from "@/components/LocalizedLink";
import { BookOpen, Calculator, Compass, HelpCircle, Sparkles } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { NAMANK_MEANINGS, NAMANK_HUB_FAQS, NAMANK_UPDATED } from "@/data/namank";
import { SITE_URL } from "@/lib/site";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { getNamankLocale } from "@/locales/guides-num-i18n";

export function NamankHubScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const loc = getNamankLocale(language);

  return (
    <ArticleLayout
      crumbs={[{ label: BREADCRUMB_LABELS.numerology[language], to: "/numerology" }, { label: loc.hubCrumb }]}
      eyebrow={loc.hubEyebrow}
      title={loc.hubTitle}
      intro={loc.hubIntro}
      url={`${SITE_URL}/numerology/namank`}
      updated={NAMANK_UPDATED}
      readingMinutes={10}
      wordCount={1600}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-5xl aurora-text">1–9</span>
        </GlassCard>
      }
    >
      <ContentSection
        id="what-is-namank"
        title={loc.secWhatIs}
        icon={BookOpen}
        paragraphs={[
          "Namank is the single digit you get by adding together the numerical values of each letter in your full name, using the Chaldean system of numerology. In this system, each letter A through Z is assigned a value from 1 to 8, and the digits are then reduced until a single number remains.",
          "While Mulank (your birth number) describes your everyday instinctive personality and Bhagyank (your destiny number) describes your broader life path, Namank describes the energy your name carries: how it shapes the way you present yourself and how others naturally perceive you. Many numerologists consider the three together for a complete picture: Mulank is how you act, Bhagyank is where you're headed, and Namank is how you're perceived.",
          "Some people find that their Namank resonates deeply with their personality, while others discover it describes more how they're typically seen in the world: there's often a feedback loop between a name's vibration and the identity it helps create. This is why some parents research name numbers when choosing a child's name, and why some people explore changing their name numerologically later in life.",
        ]}
      />

      <ContentSection
        id="how-to-calculate"
        title={loc.secHowCalc}
        icon={Calculator}
        paragraphs={[
          "In Chaldean numerology, each letter of the alphabet has a numerical value. Write your full name and assign each letter its number, then add all the numbers together. If the total is more than one digit, add those digits until one digit remains.",
          "The Chaldean system uses: A=1, B=2, C=3, D=4, E=5, F=8, G=3, H=5, I=1, J=1, K=2, L=3, M=4, N=5, O=7, P=8, Q=1, R=2, S=3, T=4, U=6, V=6, W=6, X=5, Y=1, Z=7.",
        ]}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <GlassCard className="p-6">
            <p className="text-xs font-display uppercase tracking-[0.2em] text-[var(--gold)]">
              Example: JOHN SMITH
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div>J=1, O=7, H=5, N=5 = 18</div>
              <div>S=3, M=4, I=1, T=4, H=5 = 17</div>
              <div className="border-t border-[var(--gold)] pt-2">18 + 17 = 35</div>
              <div>3 + 5 = 8</div>
              <p className="mt-3 font-display text-lg aurora-text">{loc.hubCrumb}: 8</p>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs font-display uppercase tracking-[0.2em] text-[var(--gold)]">
              Example: JANE DOE
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div>J=1, A=1, N=5, E=5 = 12</div>
              <div>D=4, O=7, E=5 = 16</div>
              <div className="border-t border-[var(--gold)] pt-2">12 + 16 = 28</div>
              <div>2 + 8 = 10 → 1 + 0 = 1</div>
              <p className="mt-3 font-display text-lg aurora-text">{loc.hubCrumb}: 1</p>
            </div>
          </GlassCard>
        </div>
        <Link
          to="/namank-calculator"
          className="mt-6 inline-flex min-h-12 items-center text-sm text-[var(--gold)] hover:underline"
        >
          {t("calcUi.openFreeCalc")} →
        </Link>
      </ContentSection>

      <ContentSection id="all-numbers" title={loc.secAllNumbers} icon={Compass}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
            const meaning = NAMANK_MEANINGS[num];
            if (!meaning) return null;
            return (
              <li key={num}>
                <GlassCard className="flex h-full flex-col gap-3 p-5">
                  <span className="font-display text-3xl aurora-text">{num}</span>
                  <div className="min-w-0 flex-1">
                    <span className="block font-display text-base">{meaning.title}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {meaning.archetype}
                    </span>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {meaning.meaning.substring(0, 140)}...
                    </p>
                  </div>
                </GlassCard>
              </li>
            );
          })}
        </ul>
      </ContentSection>

      <ContentSection
        id="how-to-use"
        title={loc.secHowToUse}
        icon={Sparkles}
        paragraphs={[
          "Your Namank is one layer of your numerology chart. Unlike your Bhagyank, which never changes (it's tied to your birth date), your Namank can shift if you legally change your name, which is why some people use numerology to choose names that align with specific intentions.",
          "A common practice is calculating what Namank you'd like to cultivate, then working backward to find names that add up to that number. Parents sometimes research this when choosing a child's name, and some adults experiment with name changes or pen names based on their Namank resonance.",
          "When reading your full numerology profile, compare your Namank with your Mulank and Bhagyank. You might be a Mulank 5 (restless and adaptable) with a Bhagyank 4 (needing structure and discipline) and a Namank 1 (leader energy). This combination explains why you come across as more authoritative than you feel, and why settling into routine is genuinely difficult even when you know it's what you need.",
        ]}
      />

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={NAMANK_HUB_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/namank-calculator",
            label: loc.calcCrumb,
            blurb: loc.calcIntro,
          },
          {
            to: "/numerology/mulank",
            label: `${BREADCRUMB_LABELS.mulank[language]} (1–9)`,
            blurb: t("numerologyLanding.step1Body"),
          },
          {
            to: "/numerology/bhagyank",
            label: `${BREADCRUMB_LABELS.bhagyank[language]} (1–33)`,
            blurb: t("numerologyLanding.step2Body"),
          },
          {
            to: "/guide/numerology",
            label: `${BREADCRUMB_LABELS.guides[language]} · ${BREADCRUMB_LABELS.numerology[language]}`,
            blurb: t("numerology.subtitle"),
          },
          {
            to: "/numerology",
            label: t("numerology.title"),
            blurb: t("numerology.subtitle"),
          },
        ]}
      />

      <CTASection
        title={loc.hubCtaTitle}
        body={loc.hubCtaBody}
        ctaLabel={t("calcUi.openFreeCalc")}
        to="/namank-calculator"
      />
    </ArticleLayout>
  );
}
