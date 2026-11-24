import { Link } from "@/components/LocalizedLink";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function DisclaimerScreen() {
  const t = useTranslate();
  const [language] = useLanguage();
  const bcp47 = getBcp47(language);
  const formatUtcDate = (iso: string) =>
    new Intl.DateTimeFormat(bcp47, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: t("disclaimer.title") }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          <span className="aurora-text">{t("disclaimer.title")}</span>
        </h1>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>
            {t("common.published")}: <time dateTime="2026-08-07">{formatUtcDate("2026-08-07")}</time>
          </span>
          <span>
            {t("common.lastUpdated")}: <time dateTime="2026-11-16">{formatUtcDate("2026-11-16")}</time>
          </span>
        </p>

        {language === "en" ? (
          <GlassCard className="mt-8 space-y-6 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
            <Section title="1. Entertainment, Cultural Study & Self-Reflection Only">
              AstroFree provides AI-assisted tarot readings, Vedic numerology calculations (Mulank,
              Bhagyank, Namank, Personal Year, and Personal Month), and educational articles strictly
              for entertainment, cultural literacy, and personal self-reflection. Both tarot symbolism
              and traditional numerology are centuries-old interpretive traditions designed to provoke
              thoughtful questioning rather than empirically proven predictive sciences. Nothing
              displayed on this website: whether an individual card meaning, a spread synthesis, or a
              numerological forecast: should be interpreted as absolute fact, guaranteed prophecy, or
              certainty regarding future events.
            </Section>

            <Section title="2. No Medical, Psychological, Legal, or Financial Advice">
              Content on AstroFree never constitutes and must never replace guidance from licensed
              physicians, psychiatrists, clinical psychologists, attorneys, certified public
              accountants, or regulated financial advisors. Do not use any tarot spread, yes-or-no lean,
              or numerology cycle as the basis for starting or stopping medical treatments, signing
              binding legal agreements, making high-risk investments, lending money, or exiting major
              life obligations without consulting qualified human professionals and reviewing verifiable
              facts.
            </Section>

            <Section title="3. Not a Crisis or Emergency Resource">
              AstroFree is a calm reflective space and is not staffed or engineered to assist anyone
              experiencing acute emotional distress, abuse, severe depression, or a mental health
              emergency. If you or someone close to you is in immediate danger or having thoughts of
              self-harm, please stop browsing immediately and reach out to your local emergency
              response number, a trusted physician, or an established crisis support hotline in your
              country (such as 112 or Tele-MANAS 14416 in India, 988 in the US/Canada, or 111/999 in
              the UK).
            </Section>

            <Section title="4. Nature & Limitations of AI-Generated Interpretations">
              When you draw cards or request a numerology overview on AstroFree, our system combines
              deterministic arithmetic and traditional Rider-Waite-Smith or Ank Shastra reference
              tables with automated AI synthesis tailored to your chosen language and prompt. Automated
              language models generate probabilistic text rather than human counsel; consequently,
              readings can occasionally contain awkward phrasing, broad metaphors, or repetitive ideas.
              Treat every generated paragraph simply as a creative mirror for your own introspection,
              not an authoritative verdict.
            </Section>

            <Section title="5. Personal Agency, Free Will & User Responsibility">
              The central philosophy of responsible tarot and Vedic numerology practice is that insight
              supports human agency: it never replaces it. Any choice you pursue in love, career,
              education, finances, or personal habits remains yours alone. AstroFree, its contributors,
              and its technology partners accept no liability for losses, misunderstandings, or outcomes
              arising directly or indirectly from actions taken after reading content on this platform.
            </Section>

            <Section title="6. Respectful Engagement Across Traditions">
              AstroFree draws inspiration from diverse global symbolism, including traditional European
              tarot decks and classical Indian numerology systems. Interpretations naturally vary across
              teachers, lineages, and regions; our educational guides aim to describe widely recognized
              foundations plainly while honoring each reader's freedom to adapt metaphors to their own
              lived context.
            </Section>

            <Section title="7. Age Guidance & Parental Supervision">
              AstroFree is intended for visitors aged 13 and older. Younger readers exploring tarot or
              numerology for curiosity or creative journaling should discuss major life choices with a
              parent, teacher, or trusted guardian.
            </Section>

            <Section title="8. High-Stakes Decisions Across Life Domains">
              Readers often consult spreads and number calculators during turning points involving
              relationships, employment changes, academic exams, or personal relocation. While symbolic
              archetypes can illuminate emotional priorities or clarify what questions you need to ask
              yourself, high-stakes commitments demand real-world verification: review written
              employment contracts, verify financial budgets with qualified planners, communicate
              directly with partners rather than guessing intentions from cards alone, and prioritize
              clinical medical testing whenever physical symptoms arise.
            </Section>

            <Section title="9. Questions About This Disclaimer">
              Across centuries, different tarot schools and Vedic Ank Shastra lineages have assigned
              varying correspondences to reversed cards, Chaldean compound digits, and Personal Year
              transitions. AstroFree presents widely recognized traditional interpretations for study
              and quiet introspection rather than rigid dogma. If anything in this Disclaimer requires
              clarification, please reach out through our{" "}
              <Link to={localizePath("/contact", language) as any} className="underline underline-offset-4 hover:text-foreground">
                Contact page
              </Link>
              .
            </Section>

            <Section title="10. Distinction Between Reflection & Objective Forecasting">
              Tarot archetypes and numerological vibrations (Mulank, Bhagyank, Namank, and Personal
              Year cycles) operate as structured lenses for storytelling, journaling, and noticing
              recurring personal habits. They do not measure physical probabilities, market returns,
              clinical diagnoses, compatibility guarantees, or future legal outcomes. When readers treat
              spreads as prompts for self-observation: asking &ldquo;What pattern am I noticing in my
              response?&rdquo; instead of &ldquo;What am I fated to endure?&rdquo;: reflective tools remain
              healthy, grounded, and empowering.
            </Section>

            <Section title="11. Accuracy of Mathematical Calculations & Third-Party Links">
              All arithmetic reductions in AstroFree&apos;s Vedic numerology calculators follow deterministic
              formulas documented publicly across our methodology guides. Even so, historical lineages
              sometimes differ on Chaldean letter mappings, Master Number treatment (11, 22, 33), or
              reversed-card weighting. AstroFree provides every calculation and reference table on an
              &ldquo;as-is&rdquo; educational basis without warranties of fitness for any commercial purpose.
              External links or embedded third-party notices follow their own operators&apos; policies and
              terms.
            </Section>
          </GlassCard>
        ) : (
          <GlassCard className="mt-8 space-y-6 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
            <Section title={t("disclaimer.s1Title")}>{t("disclaimer.s1Body")}</Section>
            <Section title={t("disclaimer.s2Title")}>{t("disclaimer.s2Body")}</Section>
            <Section title={t("disclaimer.s3Title")}>{t("disclaimer.s3Body")}</Section>
            <Section title={t("disclaimer.s4Title")}>{t("disclaimer.s4Body")}</Section>
            <Section title={t("disclaimer.s5Title")}>{t("disclaimer.s5Body")}</Section>
            <Section title={t("disclaimer.s6Title")}>{t("disclaimer.s6Body")}</Section>
          </GlassCard>
        )}

        <div className="mt-8">
          <Link
            to={localizePath("/", language) as any}
            className="inline-flex min-h-12 sm:min-h-0 items-center text-base sm:text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {t("privacy.back")}
          </Link>
        </div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg text-foreground">{title}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}
