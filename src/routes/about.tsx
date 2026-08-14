import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AstroFree — Editorial Mission" },
      {
        name: "description",
        content:
          "Learn how AstroFree creates free tarot and numerology education, why we combine AI with editorial review, and how we keep guidance responsible and privacy-first.",
      },
      { property: "og:title", content: "About AstroFree — Editorial Mission" },
      {
        property: "og:description",
        content:
          "AstroFree is a free educational tarot and numerology platform built for reflection, clarity, and responsible learning.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildPageJsonLd({
          "path": "/about",
          "title": "About AstroFree — Our Story & Mission",
          "description": "Who builds AstroFree, why the app is free, and how we approach tarot and numerology content.",
          "crumbs": [
                    {
                              "name": "About",
                              "path": "/about"
                    }
          ],
          "article": {
                    "updated": "2026-08-07",
                    "section": "Company"
          }
        })),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "About" }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          About <span className="aurora-text">AstroFree</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <GlassCard className="mt-8 space-y-7 text-sm leading-relaxed text-muted-foreground">
          <Section title="Our Mission">
            AstroFree exists to make tarot and numerology more accessible, more educational, and more grounded in self-reflection. We believe a reader should be able to understand the symbolism behind a card, the logic behind a number, and the limits of interpretation without paying a subscription fee or being pushed into a sales funnel. Our mission is simple: create clear, useful educational content that helps people learn how to read with care, context, and curiosity.
          </Section>

          <Section title="Why AstroFree Exists">
            Many astrology and tarot platforms focus on fast certainty, hype, or emotional manipulation. AstroFree was built to offer something quieter and more useful: a space where people can ask honest questions, learn the meanings behind the symbols, and build a deeper relationship with their own intuition. The goal is not to tell you what will definitely happen. The goal is to help you see patterns, ask better questions, and reflect more deliberately on the choices already in front of you.
          </Section>

          <Section title="How AI is Used">
            AI helps AstroFree speed up the organisation of educational material, generate accessible explanations, and surface relevant interpretations across tarot, spreads, and numerology. Our AI-assisted writing does not replace the editor's judgment; it supports a system where card meanings, numerology calculations, and article structure are reviewed for clarity and coherence. In practice, AI is used as a drafting and explanation tool rather than an authority that claims certainty. The final responsibility remains editorial: explain clearly, stay honest about interpretation, and keep context grounded in reflection rather than hype.
          </Section>

          <Section title="What AstroFree Is Not">
            AstroFree is not a magic-answer machine, a certainty engine, or a substitute for qualified advice. It is a learning environment for tarot and numerology, built around reflection, context, and personal meaning. We believe the value of a card or number lies not in mechanically telling you the future, but in helping you ask better questions and notice patterns in your own life.
          </Section>

          <Section title="Editorial Principles">
            We write with clear intent: to explain, to educate, and to contextualise. Every guide should help a reader understand the meaning of a card, the logic behind a number, and the practical limits of the system. We avoid vague, inflated language and focus on plain explanations, historical context, and repeatable structure. We also keep the same standard across tarot, numerology, and calculator pages so readers can compare ideas consistently and reach conclusions with context rather than certainty.
          </Section>

          <Section title="Responsible Guidance">
            Tarot, numerology, and symbolic guidance are not substitutes for medical, legal, financial, or mental health care. AstroFree presents these tools as reflective frameworks, not authoritative predictions. We encourage readers to treat a spread or a number as a prompt for thought, not a final answer. Human intuition, lived experience, and professional support still matter most when real decisions are being made.
          </Section>

          <Section title="Privacy First">
            AstroFree is built so that readers can explore freely without needing a heavy account system. We do not sell personal data, and our privacy practices are designed to keep the experience calm, simple, and respectful. For details on what is collected and why, please read our <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">Privacy Policy</Link> and our <Link to="/disclaimer" className="underline underline-offset-4 hover:text-foreground">Disclaimer</Link>.
          </Section>

          <Section title="Contact">
            Questions, corrections, or suggestions are welcome. Visit our <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">Contact page</Link> or write to <a href="mailto:hello@astrofree.app" className="underline underline-offset-4 hover:text-foreground">hello@astrofree.app</a>.
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
