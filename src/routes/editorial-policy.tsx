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
        content: "Our approach to accuracy, sourcing, and AI-assisted writing across AstroFree's guides.",
      },
      { property: "og:url", content: `${SITE_URL}/editorial-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/editorial-policy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildPageJsonLd({
          "path": "/editorial-policy",
          "title": "Editorial Policy — AstroFree",
          "description": "How AstroFree writes, reviews, and corrects its tarot and numerology content, and the sources our interpretations follow.",
          "crumbs": [
                    {
                              "name": "Editorial Policy",
                              "path": "/editorial-policy"
                    }
          ],
          "article": {
                    "updated": "2026-08-07",
                    "section": "Editorial"
          }
        })),
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
          <Section title="Our goal">
            Our guides on tarot card meanings, spreads, and numerology aim to reflect widely
            recognized, traditional interpretations rather than any single author's invented
            system. We want a reader new to tarot or numerology to come away with an accurate,
            practical understanding of the topic.
          </Section>

          <Section title="How our guides are written">
            Card meanings and numerology interpretations are grounded in long-established
            traditions — the historical Rider-Waite-Smith card associations for tarot, and standard
            Pythagorean-style reduction methods for numerology. We use AI tools to help draft and
            structure this content efficiently, with meanings checked against traditional sources
            rather than generated freely. A human reviews structure and accuracy before publishing.
          </Section>

          <Section title="Corrections and updates">
            If you spot an error — a miscategorized card, an incorrect number reduction, a broken
            link — we want to know. Pages are updated when we identify inaccuracies, and guides may
            be revised over time to improve clarity or add missing context.
          </Section>

          <Section title="Independence from advertising">
            AstroFree is supported by advertising, but ad placement never influences what a card
            meaning says or how a numerology result is calculated. Editorial content and advertising
            are kept separate.
          </Section>

          <Section title="Affiliate and product mentions">
            Where we mention external products, books, or services (for example, in a resources or
            further-reading section), any affiliate relationship will be disclosed clearly near the
            mention. We only recommend things genuinely relevant to the topic at hand.
          </Section>

          <Section title="Report an issue">
            To flag a correction or ask about a specific guide, contact us via our{" "}
            <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
              Contact
            </Link>{" "}
            page.
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
