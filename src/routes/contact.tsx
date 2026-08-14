import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Bug, Handshake } from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AstroFree — Get in Touch" },
      {
        name: "description",
        content:
          "Reach the AstroFree team for support, feedback, correction requests, or business and advertising inquiries.",
      },
      { property: "og:title", content: "Contact AstroFree — Get in Touch" },
      {
        property: "og:description",
        content: "How to reach the AstroFree team for support, feedback, or business inquiries.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildPageJsonLd({
          "path": "/contact",
          "title": "Contact AstroFree — Get in Touch",
          "description": "Contact the AstroFree team for support, feedback, bug reports, content corrections, or business enquiries.",
          "crumbs": [
                    {
                              "name": "Contact",
                              "path": "/contact"
                    }
          ]
        })),
      },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "General feedback & support",
    body: "Questions about how AstroFree works, trouble with a reading, or ideas for what we should build next.",
    email: "hello@astrofree.app",
  },
  {
    icon: Bug,
    title: "Report a bug or content issue",
    body: "Found something broken, or a card meaning or article that looks wrong? Let us know and we'll fix it.",
    email: "hello@astrofree.app",
  },
  {
    icon: Handshake,
    title: "Business & advertising",
    body: "Partnership, advertising, or press inquiries.",
    email: "hello@astrofree.app",
  },
];

function ContactPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Contact" }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          Get in <span className="aurora-text">Touch</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          We read every message. For the fastest response, pick the option below that best matches
          what you need.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-1">
          {CHANNELS.map((c) => (
            <GlassCard key={c.title} className="flex items-start gap-4 p-6">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--gold)_16%,transparent)]">
                <c.icon className="h-5 w-5 text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
              </div>
              <div>
                <h2 className="font-display text-lg text-foreground">{c.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm underline underline-offset-4 hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {c.email}
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-4 space-y-2 p-6 text-sm leading-relaxed text-muted-foreground">
          <h2 className="font-display text-lg text-foreground">Response time</h2>
          <p>
            We're a small team, so please allow a few business days for a reply. For anything
            time-sensitive, mention it clearly in your subject line.
          </p>
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
