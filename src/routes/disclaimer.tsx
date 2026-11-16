import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — AstroFree" },
      {
        name: "description",
        content:
          "AstroFree's tarot and numerology readings are for entertainment and self-reflection only. Read our full disclaimer before using the app.",
      },
      { property: "og:title", content: "Disclaimer — AstroFree" },
      {
        property: "og:description",
        content: "Important context on what AstroFree's readings are — and are not — intended for.",
      },
      { property: "og:url", content: `${SITE_URL}/disclaimer` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/disclaimer` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/disclaimer",
            title: "Disclaimer — AstroFree",
            description:
              "AstroFree's tarot and numerology readings are for entertainment and self-reflection only, and are not medical, legal, or financial advice.",
            crumbs: [
              {
                name: "Disclaimer",
                path: "/disclaimer",
              },
            ],
            article: {
              updated: "2026-08-07",
              section: "Legal",
            },
          }),
        ),
      },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Disclaimer" }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          <span className="aurora-text">Disclaimer</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <GlassCard className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <Section title="1. Entertainment, Cultural Study &amp; Self-Reflection Only">
            AstroFree provides AI-assisted tarot readings, Vedic numerology calculations (Mulank,
            Bhagyank, Namank, Personal Year, and Personal Month), and educational articles strictly
            for entertainment, cultural literacy, and personal self-reflection. Both tarot symbolism
            and traditional numerology are centuries-old interpretive traditions designed to provoke
            thoughtful questioning rather than empirically proven predictive sciences. Nothing
            displayed on this website — whether an individual card meaning, a spread synthesis, or a
            numerological forecast — should be interpreted as absolute fact, guaranteed prophecy, or
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

          <Section title="4. Nature &amp; Limitations of AI-Generated Interpretations">
            When you draw cards or request a numerology overview on AstroFree, our system combines
            deterministic arithmetic and traditional Rider-Waite-Smith or Ank Shastra reference
            tables with automated AI synthesis tailored to your chosen language and prompt. Automated
            language models generate probabilistic text rather than human counsel; consequently,
            readings can occasionally contain awkward phrasing, broad metaphors, or repetitive ideas.
            Treat every generated paragraph simply as a creative mirror for your own introspection,
            not an authoritative verdict.
          </Section>

          <Section title="5. Personal Agency, Free Will &amp; User Responsibility">
            The central philosophy of responsible tarot and Vedic numerology practice is that insight
            supports human agency — it never replaces it. Any choice you pursue in love, career,
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

          <Section title="7. Age Guidance &amp; Questions">
            AstroFree is intended for visitors aged 13 and older. Younger readers exploring tarot or
            numerology for curiosity or creative journaling should discuss major life choices with a
            parent, teacher, or trusted guardian. If anything in this Disclaimer requires
            clarification, please reach out through our{" "}
            <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
              Contact page
            </Link>
            .
          </Section>
        </GlassCard>

        <div className="mt-8">
          <Link
            to="/"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            ← Back home
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
