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
          <Section title="1. What Cookies &amp; Browser Storage Are">
            Cookies are small text files placed on your computer, tablet, or smartphone when you
            visit a website. They help browsers remember settings between page loads, measure
            aggregate traffic, and support relevant advertising. Alongside traditional HTTP cookies,
            modern web applications like AstroFree also use browser local storage (`localStorage`),
            which saves preferences and personal app state strictly on your own device without
            transmitting that state on every network request.
          </Section>

          <Section title="2. How AstroFree Uses Local Storage (Device-Only)">
            To keep your tarot readings and reflections private without forcing account sign-ups,
            AstroFree stores essential app data inside your browser's local storage. This includes
            your reading history log, daily card streak counter, personal journal notes, selected
            visual theme, and preferred display language (across English and 13 Indian languages).
            Unlike third-party tracking cookies, local storage entries never leave your device to
            power cross-site profiling, and you can export or wipe them anytime from your{" "}
            <Link to="/settings" className="underline underline-offset-4 hover:text-foreground">
              Settings page
            </Link>
            .
          </Section>

          <Section title="3. Essential Functional Technologies">
            Certain lightweight browser storage mechanisms are strictly necessary for basic site
            operation — such as remembering your language toggle as you navigate from a tarot guide
            to a numerology calculator, keeping multi-step reading selections intact between the
            Question, Shuffle, Reveal, and Result screens, and preserving security headers.
          </Section>

          <Section title="4. Advertising Cookies (Google AdSense)">
            AstroFree remains completely free to use thanks to non-intrusive display advertising
            served via Google AdSense. Google and its certified third-party ad networks may place
            and read cookies — including the DoubleClick / NID / IDE cookies — or use web beacons to
            serve ads tailored to your previous visits to this website or other sites across the web.
            These cookies also enforce frequency caps (so you do not see the exact same ad
            repeatedly), detect invalid click fraud, and report aggregate ad performance to
            publishers.
          </Section>

          <Section title="5. Analytics &amp; Performance Measurement">
            We may utilize privacy-conscious aggregate analytics to understand broad usage patterns —
            for example, identifying which tarot spreads, numerology calculators, or educational guides
            readers find most helpful, and diagnosing slow page loads on mobile devices. These
            metrics are analyzed in aggregate rather than used to construct individual consumer
            profiles.
          </Section>

          <Section title="6. How to Manage or Opt Out of Cookies">
            You remain in full control of cookie behavior across every device you use:
            <span className="block mt-2">
              • <strong className="text-foreground">Google Personalized Ads Opt-Out:</strong> Visit{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Google Ads Settings
              </a>{" "}
              to disable personalized ad targeting across Google partner sites.
            </span>
            <span className="block mt-1">
              • <strong className="text-foreground">Industry Opt-Out Portals:</strong> Manage
              participating third-party advertising networks via{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                aboutads.info
              </a>{" "}
              or{" "}
              <a
                href="https://www.youronlinechoices.eu/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Your Online Choices
              </a>
              .
            </span>
            <span className="block mt-1">
              • <strong className="text-foreground">Browser Settings:</strong> All major browsers
              (Chrome, Safari, Firefox, Edge) allow you to inspect, block third-party cookies, or
              automatically clear site data whenever you close a window. Please note that disabling
              local storage completely will prevent your reading history and language choice from
              persisting between visits.
            </span>
          </Section>

          <Section title="7. Updates &amp; Further Questions">
            We may update this Cookie Policy whenever our technical stack, privacy standards, or
            advertising integrations evolve. For broader details on how data is handled across the
            platform, read our{" "}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
              Privacy Policy
            </Link>{" "}
            or reach our support team anytime through our{" "}
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
