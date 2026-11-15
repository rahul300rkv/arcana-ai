import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — AstroFree" },
      {
        name: "description",
        content:
          "The terms governing your use of AstroFree, India's first free AI tarot card reading app.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/terms",
            title: "Terms of Service — AstroFree",
            description:
              "The terms that govern your use of AstroFree's free tarot readings, numerology calculator, and journal.",
            crumbs: [
              {
                name: "Terms of Service",
                path: "/terms",
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Terms of Service" }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          Terms of <span className="aurora-text">Service</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: July 2026</p>

        <GlassCard className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <Section title="Acceptance of terms">
            By using AstroFree, you agree to these terms. If you don't agree, please don't use the
            app.
          </Section>

          <Section title="Entertainment purposes only">
            AstroFree provides tarot readings for reflection, entertainment, and personal insight.
            Readings are not a substitute for professional medical, legal, financial, or
            psychological advice. Please consult a qualified professional for decisions in those
            areas.
          </Section>

          <Section title="Free to use">
            AstroFree is free to use. We may display advertising (via Google AdSense) to support the
            cost of running the service. We do not currently charge for any feature.
          </Section>

          <Section title="Your content">
            Questions you type and reflections you save remain yours. We don't claim ownership over
            your journal entries or questions.
          </Section>

          <Section title="Acceptable use">
            Please don't use AstroFree to submit unlawful, harmful, or abusive content, or to
            attempt to disrupt or reverse-engineer the service.
          </Section>

          <Section title="No warranty">
            AstroFree is provided "as is" without warranties of any kind. We do our best to keep the
            app accurate and available, but we can't guarantee uninterrupted or error-free
            operation.
          </Section>

          <Section title="Limitation of liability">
            To the fullest extent permitted by law, AstroFree and its creators are not liable for
            any indirect, incidental, or consequential damages arising from your use of the app.
          </Section>

          <Section title="Changes to these terms">
            We may update these terms occasionally. Continued use after changes are posted means you
            accept the revised terms.
          </Section>

          <Section title="Contact">
            Questions about these terms? Reach us at{" "}
            <a
              href="mailto:hello@astrofree.app"
              className="underline underline-offset-4 hover:text-foreground"
            >
              hello@astrofree.app
            </a>
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
