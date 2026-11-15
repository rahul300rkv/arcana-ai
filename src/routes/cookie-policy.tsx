import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — AstroFree" },
      {
        name: "description",
        content:
          "How AstroFree uses cookies and local storage, including cookies set by Google AdSense, and how to manage your preferences.",
      },
      { property: "og:title", content: "Cookie Policy — AstroFree" },
      {
        property: "og:description",
        content:
          "Details on the cookies and local storage AstroFree uses, and how to control them.",
      },
      { property: "og:url", content: `${SITE_URL}/cookie-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cookie-policy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/cookie-policy",
            title: "Cookie Policy — AstroFree",
            description:
              "How AstroFree uses cookies and local storage, including advertising and analytics cookies, and how to control them.",
            crumbs: [
              {
                name: "Cookie Policy",
                path: "/cookie-policy",
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
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Cookie Policy" }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          Cookie <span className="aurora-text">Policy</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>

        <GlassCard className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <Section title="What cookies are">
            Cookies are small text files a website stores in your browser to remember information
            between visits. Some sites also use similar technologies, like browser local storage, to
            store data on your device.
          </Section>

          <Section title="How AstroFree uses local storage">
            AstroFree stores your reading history, daily card streak, journal entries, theme, and
            language preference directly in your browser's local storage. This data stays on your
            device, isn't sent to our servers unless you choose to sign in, and can be cleared at
            any time from your browser settings.
          </Section>

          <Section title="Advertising cookies (Google AdSense)">
            We use Google AdSense to display ads, which may set cookies — including the DoubleClick
            cookie — to serve ads based on your visits to this and other sites. Google may also use
            these cookies to measure ad performance and limit how often you see the same ad.
          </Section>

          <Section title="Analytics cookies">
            We may use standard web analytics tools to understand aggregate traffic patterns, such
            as which pages are visited and how. These tools may set cookies to distinguish sessions
            and visitors; the data is used in aggregate and isn't used to identify you personally.
          </Section>

          <Section title="Managing your preferences">
            You can control or delete cookies through your browser's settings — most browsers let
            you block third-party cookies entirely or clear cookies for a specific site. To opt out
            of personalized advertising from Google specifically, visit{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Google Ads Settings
            </a>
            . You can also opt out of some third-party vendors' use of cookies for personalized
            advertising via{" "}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              aboutads.info
            </a>
            .
          </Section>

          <Section title="Changes to this policy">
            We may update this Cookie Policy as our use of cookies and similar technologies changes.
            Check back periodically for updates.
          </Section>

          <Section title="Questions">
            For anything not covered here, see our{" "}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
              Privacy Policy
            </Link>{" "}
            or reach us via our{" "}
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
