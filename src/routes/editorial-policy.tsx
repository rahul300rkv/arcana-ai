import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: "Editorial Policy — AstroFree" },
      {
        name: "description",
        content:
          "How AstroFree researches, writes, and maintains its tarot and numerology guides, including our use of AI in content production.",
      },
      { property: "og:title", content: "Editorial Policy — AstroFree" },
      {
        property: "og:description",
        content:
          "Our approach to accuracy, sourcing, and AI-assisted writing across AstroFree's guides.",
      },
      { property: "og:url", content: `${SITE_URL}/editorial-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/editorial-policy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/editorial-policy",
            title: "Editorial Policy — AstroFree",
            description:
              "How AstroFree writes, reviews, and corrects its tarot and numerology content, and the sources our interpretations follow.",
            crumbs: [
              {
                name: "Editorial Policy",
                path: "/editorial-policy",
              },
            ],
            article: {
              updated: "2026-08-07",
              section: "Editorial",
            },
          }),
        ),
      },
    ],
  }),
  component: EditorialPolicyPage,
});

function EditorialPolicyPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Editorial Policy" }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          Editorial <span className="aurora-text">Policy</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <GlassCard className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <Section title="1. Our Educational Mission &amp; Tone">
            AstroFree's guides on tarot card meanings, spread layouts, and Vedic numerology are built
            around one clear goal: teaching classic symbolic traditions accurately in plain, grounded
            language. Rather than relying on sensationalized claims, fatalistic fearmongering, or
            invented lore, every reference page is written to help both first-time seekers and
            seasoned readers understand where symbols come from, how calculations work step by step,
            and how to apply insights thoughtfully in daily life.
          </Section>

          <Section title="2. Traditional Source Foundations">
            All 78 card reference pages and spread walkthroughs on AstroFree follow well-established
            Rider-Waite-Smith tarot iconography and widely taught elemental correspondences (Fire /
            Wands, Water / Cups, Air / Swords, Earth / Pentacles), alongside classical Minor Arcana
            numerological progression from Aces to Tens and Court Card archetypes. Our numerology
            articles and calculators distinguish clearly between Indian Vedic Ank Shastra principles
            (Mulank root numbers, Bhagyank destiny numbers, and Navagraha planetary rulerships) and
            Western Pythagorean / Chaldean name-reduction traditions (Namank and Master Numbers 11 and
            22) so readers never confuse overlapping systems.
          </Section>

          <Section title="3. AI Assistance &amp; Human Editorial Review">
            We are transparent about using modern AI tools within both our live reading synthesis and
            our educational publishing workflow. In editorial production, AI helps organize large
            encyclopedic matrices (such as 78 individual tarot cards across upright, reversed, love,
            and career dimensions) and maintain structural consistency. However, AI is never allowed
            to invent arbitrary card meanings or falsify numerological formulas. All arithmetic logic
            is verified deterministically in TypeScript code, and human editors review article
            structure, factual alignment with historical decks, tone, and responsible disclaimers
            before publication.
          </Section>

          <Section title="4. Multilingual Quality Across 13 Indian Languages">
            Because AstroFree serves readers across diverse linguistic communities, we continuously
            refine translations across Hindi, Hinglish, Bengali, Telugu, Marathi, Tamil, Gujarati,
            Kannada, Malayalam, Punjabi, Odia, Assamese, and English. Well-known card names (such as
            The Fool or The Sun) and established Sanskrit/Hindi numerology terms (Mulank, Bhagyank,
            Namank) are kept recognizable so bilingual readers can cross-reference classic literature
            easily.
          </Section>

          <Section title="5. Strict Separation Between Editorial Content &amp; Advertising">
            AstroFree is free for every visitor and supported by Google AdSense advertising. Ad
            partners, networks, and advertisers have zero influence over what a tarot card guide says,
            which spreads we recommend, or how any numerology calculator scores a number. Sponsored
            content or paid placements, if ever introduced in the future, would be explicitly labeled
            and separated cleanly from core educational guides.
          </Section>

          <Section title="6. Corrections, Revisions &amp; Reader Feedback">
            Every reference guide carries a visible revision record, and we treat reader feedback as
            an essential part of keeping our library accurate. If you notice a miscategorized
            elemental correspondence, a typo in a mathematical example, a broken internal link, or a
            confusing translation, please report it through our secure{" "}
            <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
              Contact page
            </Link>
            . Confirmed errors are corrected directly in source data and documented on the next site
            update.
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
