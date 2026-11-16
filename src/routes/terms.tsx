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
          <Section title="1. Acceptance of Terms">
            Welcome to AstroFree. By accessing, browsing, or using our website, tarot reading tools,
            Vedic numerology calculators, or educational articles (collectively, the "Service"), you
            acknowledge that you have read, understood, and agreed to be bound by these Terms of
            Service along with our{" "}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/disclaimer" className="underline underline-offset-4 hover:text-foreground">
              Disclaimer
            </Link>
            . If you do not agree with any provision of these terms, please discontinue use of the
            Service.
          </Section>

          <Section title="2. Eligibility &amp; Intended Audience">
            AstroFree is designed for visitors aged 13 and older. By using the Service, you confirm
            that you meet the minimum digital consent age in your country or are accessing the
            educational resources under the supervision of a parent or legal guardian. No account
            registration is required to browse guides or generate readings.
          </Section>

          <Section title="3. Entertainment, Educational &amp; Reflective Scope">
            All tarot spreads, card interpretations, numerology reductions (Mulank, Bhagyank,
            Namank, Personal Year, Personal Month), and editorial articles published on AstroFree are
            offered strictly for personal reflection, cultural education, and entertainment.
            Symbolic interpretations do not constitute empirically verified predictions and must
            never replace licensed medical, psychiatric, legal, tax, investment, or relationship
            counseling. You remain solely responsible for all real-world choices you make.
          </Section>

          <Section title="4. AI-Assisted Content &amp; Service Availability">
            Portions of AstroFree's personalized reading syntheses are generated dynamically using
            automated language models paired with traditional tarot and Vedic numerology rules.
            While we refine prompts and editorial baselines continuously, automated outputs can
            occasionally reflect ambiguity or unexpected phrasing. We also reserve the right to
            modify, suspend, or upgrade calculators, spreads, or supported languages at any time
            without prior notice.
          </Section>

          <Section title="5. Free Access &amp; Advertising Support">
            AstroFree is provided free of charge to all visitors. To cover hosting, maintenance, and
            AI computation expenses without charging subscription fees, the Service displays
            third-party advertisements (such as Google AdSense) on editorial and calculator pages. You
            agree not to interfere with, block maliciously, or artificially inflate ad impressions or
            clicks in violation of advertising network policies.
          </Section>

          <Section title="6. Intellectual Property &amp; User Content">
            All original editorial guides, page layouts, software code, and custom visual assets on
            AstroFree remain the intellectual property of AstroFree or its respective licensors. You
            are welcome to read, share links to, and quote brief passages for personal or educational
            purposes with attribution, but systematic scraping, mirroring, or commercial
            republication of our guides is prohibited. Questions you enter and personal journal notes
            stored in your browser remain 100% yours; we claim no ownership over your private
            reflections.
          </Section>

          <Section title="7. Acceptable Use &amp; Fair Technical Limits">
            You agree to use AstroFree lawfully and respectfully. You must not attempt to probe,
            overload, or disrupt our servers via automated bots, denial-of-service traffic,
            unauthorized API scraping, or injection attacks, nor submit hateful, harassing, or
            unlawful material through any interactive input or contact form.
          </Section>

          <Section title="8. Third-Party Links &amp; External Websites">
            Our articles and ad units may contain links to third-party resources or external
            services. AstroFree does not endorse and is not responsible for the content, privacy
            practices, or terms of any external website you visit after leaving our domain.
          </Section>

          <Section title="9. Disclaimer of Warranties &amp; Limitation of Liability">
            The Service is provided strictly on an "AS IS" and "AS AVAILABLE" basis without express
            or implied warranties of merchantability, fitness for a particular purpose, or
            uninterrupted availability. To the maximum extent permitted under applicable law,
            AstroFree and its operators shall not be liable for any direct, indirect, incidental,
            special, or consequential damages resulting from your use of, or inability to use, any
            reading, calculator, or article on the platform.
          </Section>

          <Section title="10. Changes to Terms &amp; Contact">
            We may revise these Terms of Service periodically to reflect legal updates or new
            platform capabilities. Continued access after revised terms are posted indicates your
            acceptance of the updated agreement. Questions regarding these terms may be sent anytime
            through our secure{" "}
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
