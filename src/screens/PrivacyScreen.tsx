import { Link } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export function PrivacyScreen() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          Privacy <span className="aurora-text">Policy</span>
        </h1>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>
            Published: <time dateTime="2026-07-15">15 July 2026</time>
          </span>
          <span>
            Last updated: <time dateTime="2026-11-16">16 November 2026</time>
          </span>
        </p>

        <GlassCard className="mt-8 space-y-6 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
          <Section title="1. Overview & Commitment to Privacy">
            AstroFree ("we", "our", "the platform") provides free AI-assisted tarot card readings,
            Vedic numerology calculators, and educational reference guides for reflection and personal
            insight. Privacy is foundational to how AstroFree is engineered: reflective journaling
            only works when readers feel safe exploring honest questions without surveillance. This
            Privacy Policy explains what limited information is processed when you visit the site,
            what stays strictly on your own device, how third-party advertising cookies operate, and
            what rights and controls you have over your data.
          </Section>

          <Section title="2. Local-First Storage on Your Device">
            Unlike conventional astrology portals that require mandatory sign-ups and store intimate
            life questions in remote databases, AstroFree operates on a local-first architecture.
            Your past tarot readings, daily card streak, saved journal reflections, language
            selection, and theme preferences are stored directly inside your web browser's local
            storage (`localStorage`). Because this data lives on your own hardware, our servers do not
            retain a central archive of your personal diary entries, and clearing your browser's site
            data immediately deletes those saved records from your device.
          </Section>

          <Section title="3. Information Processed During Interactive Tools">
            When you calculate a Mulank, Bhagyank, or Namank chart, the mathematical digit
            reductions run directly in your browser. When you submit a tarot question or request a
            personalized synthesis, only the minimal prompt context (the spread type, drawn card
            names, selected language, and your optional question text) is transmitted securely to our
            server endpoint so our AI provider can compose the interpretation. We strip identifying
            account metadata from these requests; nevertheless, please avoid typing sensitive
            government IDs, financial account numbers, passwords, or private medical details into
            free-text question boxes.
          </Section>

          <Section title="4. Cookies & Google AdSense Advertising">
            To keep every tarot spread, guide, and numerology calculator 100% free without paywalls
            or subscriptions, AstroFree partners with Google AdSense to display advertisements.
            Third-party vendors, including Google, use cookies to serve ads based on your prior
            visits to AstroFree and other websites across the internet. Google's use of advertising
            cookies enables it and its partners to deliver ads tailored to your interests and to
            measure campaign performance while limiting repetitive ad impressions. You may opt out of
            personalized advertising at any time by visiting{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Google Ads Settings
            </a>
            , or by managing third-party vendor cookies via{" "}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              aboutads.info
            </a>
            . For additional transparency on Google's partner practices, review{" "}
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

          <Section title="5. Server Logs & Aggregate Analytics">
            Like standard web applications, our hosting infrastructure may automatically record basic
            technical diagnostics in transient server logs — such as browser user-agent, anonymized
            IP region, requested URL path, and response latency — strictly to maintain uptime,
            prevent automated abuse, and monitor page performance. We do not sell, rent, or trade
            visitor logs or personal information to data brokers.
          </Section>

          <Section title="6. Contact Form Submissions">
            If you choose to reach out through our{" "}
            <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
              Contact page
            </Link>
            , we collect the name, reply email address, subject category, and message content you
            voluntarily provide. We use this information solely to investigate and respond to your
            support request, bug report, or feedback, and never add senders to unsolicited mailing
            lists.
          </Section>

          <Section title="7. Children's Privacy">
            AstroFree is intended for general audiences aged 13 and older. We do not knowingly
            collect personal information from children under 13 (or under the applicable age of
            digital consent in your jurisdiction). If you are a parent or guardian and believe a minor
            has submitted personal details via our contact form, please notify us via the Contact
            page so we can delete the record promptly.
          </Section>

          <Section title="8. International Privacy Rights & Data Control">
            Depending on your jurisdiction — including under India's Digital Personal Data
            Protection (DPDP) framework, the European Union's GDPR, or California's CCPA/CPRA — you
            have the right to know what personal data is processed, request correction or deletion of
            any message you have submitted to us, and control cookie tracking through browser settings
            or ad opt-out tools. To export or wipe your local reading history at any time, use the
            controls inside{" "}
            <Link to="/settings" className="underline underline-offset-4 hover:text-foreground">
              Settings
            </Link>{" "}
            or clear your browser's site data for this domain.
          </Section>

          <Section title="9. Changes to This Policy & Transparency Summary">
            We review this Privacy Policy periodically as web standards, privacy regulations, and
            site features evolve. Any updates take effect when published on this page with a revised
            last-updated date. The summary below outlines how data flows across AstroFree:
            <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/[0.04] text-foreground">
                  <tr>
                    <th className="px-3 py-2">Interaction</th>
                    <th className="px-3 py-2">Where Processed</th>
                    <th className="px-3 py-2">Retention Window</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-3 py-2 text-foreground">Numerology math</td>
                    <td className="px-3 py-2">Directly in browser</td>
                    <td className="px-3 py-2">Not uploaded unless AI insight is requested</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-foreground">Saved journal &amp; streak</td>
                    <td className="px-3 py-2">Your device localStorage</td>
                    <td className="px-3 py-2">Until cleared or exported by you</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-foreground">AI spread synthesis</td>
                    <td className="px-3 py-2">Transient HTTPS server request</td>
                    <td className="px-3 py-2">Transient processing; no user account dossier</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-foreground">AdSense delivery</td>
                    <td className="px-3 py-2">Google &amp; certified ad partners</td>
                    <td className="px-3 py-2">Governed by Google Ad Settings / cookie opt-outs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="10. Security Safeguards & Contact">
            All traffic between your browser and AstroFree travels over HTTPS encryption, backed by
            strict transport and content security policies designed to block unauthorized scripts.
            If you have questions about our privacy practices or wish to request deletion of a
            previous contact inquiry, please reach our team securely through our{" "}
            <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
              Contact page
            </Link>
            .
          </Section>
        </GlassCard>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-12 sm:min-h-0 items-center text-base sm:text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
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
