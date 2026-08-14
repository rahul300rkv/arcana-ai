import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AstroFree" },
      {
        name: "description",
        content:
          "How AstroFree collects, uses, and protects your data, including our use of cookies and advertising.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildPageJsonLd({
          "path": "/privacy",
          "title": "Privacy Policy — AstroFree",
          "description": "How AstroFree handles your data: what we store on your device, what we never collect, and how cookies and advertising work.",
          "crumbs": [
                    {
                              "name": "Privacy Policy",
                              "path": "/privacy"
                    }
          ],
          "article": {
                    "updated": "2026-08-07",
                    "section": "Legal"
          }
        })),
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          Privacy <span className="aurora-text">Policy</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: July 2026</p>

        <GlassCard className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <Section title="Overview">
            AstroFree ("we", "our", "the app") provides AI-assisted tarot card readings for
            reflection and entertainment purposes. This policy explains what information we collect,
            how it's used, and the choices you have.
          </Section>

          <Section title="Information we collect">
            Your readings, daily card history, and journal reflections are stored locally in your
            browser (using local storage) and are not tied to a personal account unless you choose
            to sign in. We do not sell your personal information.
          </Section>

          <Section title="AI-generated readings">
            When you request an interpretation, your question and the cards drawn are sent to a
            third-party AI provider to generate the reading text. This request does not include your
            name, email, or other identifying information unless you've typed it into the question
            field yourself — please avoid including sensitive personal details in your questions.
          </Section>

          <Section title="Cookies and advertising">
            AstroFree uses Google AdSense to display advertising. Google and its partners may use
            cookies (including the DoubleClick cookie) to serve ads based on your visits to this
            site and other sites on the internet. You can opt out of personalized advertising by
            visiting{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Google Ads Settings
            </a>
            . For more on how Google uses data, see{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              How Google uses information from sites that use its services
            </a>
            .
          </Section>

          <Section title="Analytics">
            We may use standard web analytics to understand aggregate usage patterns (e.g. which
            pages are visited) so we can improve the app. This data is anonymized and not used to
            identify individual users.
          </Section>

          <Section title="Children's privacy">
            AstroFree is not directed at children under 13, and we do not knowingly collect personal
            information from children. If you believe a child has provided us information, please
            contact us and we'll remove it.
          </Section>

          <Section title="Your choices">
            Since readings and journal entries live in your browser's local storage, you can clear
            them at any time by clearing your browser's site data for AstroFree.
          </Section>

          <Section title="Changes to this policy">
            We may update this policy from time to time. Continued use of AstroFree after changes
            are posted constitutes acceptance of the updated policy.
          </Section>

          <Section title="Contact">
            Questions about this policy? Reach us at{" "}
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
