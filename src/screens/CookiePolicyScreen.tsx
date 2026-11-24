import { Link } from "@/components/LocalizedLink";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function CookiePolicyScreen() {
  const t = useTranslate();
  const [language] = useLanguage();
  const bcp47 = getBcp47(language);
  const formatUtcDate = (iso: string) =>
    new Intl.DateTimeFormat(bcp47, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: t("cookies.title") }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          {language === "en" ? (
            <>
              Cookie <span className="aurora-text">Policy</span>
            </>
          ) : (
            <span className="aurora-text">{t("cookies.title")}</span>
          )}
        </h1>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>
            {t("common.published")}: <time dateTime="2026-08-07">{formatUtcDate("2026-08-07")}</time>
          </span>
          <span>
            {t("common.lastUpdated")}: <time dateTime="2026-11-16">{formatUtcDate("2026-11-16")}</time>
          </span>
        </p>

        {language === "en" ? (
          <GlassCard className="mt-8 space-y-6 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
            <Section title="1. What Cookies & Browser Storage Are">
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
              <Link to={localizePath("/settings", language) as any} className="underline underline-offset-4 hover:text-foreground">
                Settings page
              </Link>
              .
            </Section>

            <Section title="3. Essential Functional Technologies">
              Certain lightweight browser storage mechanisms are strictly necessary for basic site
              operation, such as remembering your language toggle as you navigate from a tarot guide
              to a numerology calculator, keeping multi-step reading selections intact between the
              Question, Shuffle, Reveal, and Result screens, and preserving security headers.
            </Section>

            <Section title="4. Advertising Cookies (Google AdSense)">
              AstroFree remains completely free to use thanks to non-intrusive display advertising
              served via Google AdSense. Google and its certified third-party ad networks may place
              and read cookies, including the DoubleClick / NID / IDE cookies, or use web beacons to
              serve ads tailored to your previous visits to this website or other sites across the web.
              These cookies also enforce frequency caps (so you do not see the exact same ad
              repeatedly), detect invalid click fraud, and report aggregate ad performance to
              publishers.
            </Section>

            <Section title="5. Analytics & Performance Measurement">
              We may utilize privacy-conscious aggregate analytics to understand broad usage patterns,
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

            <Section title="7. Summary of Cookies & Local Storage Technologies">
              The overview below distinguishes what AstroFree saves locally on your device from what
              third-party advertising partners may set during your visit:
              <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.04] text-foreground">
                    <tr>
                      <th className="px-3 py-2">{t("cookies.tableCol1")}</th>
                      <th className="px-3 py-2">{t("cookies.tableCol2")}</th>
                      <th className="px-3 py-2">{t("cookies.tableCol3")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-3 py-2 text-foreground">{t("cookies.r1c1")}</td>
                      <td className="px-3 py-2">{t("cookies.r1c2")}</td>
                      <td className="px-3 py-2">{t("cookies.r1c3")}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-foreground">{t("cookies.r2c1")}</td>
                      <td className="px-3 py-2">{t("cookies.r2c2")}</td>
                      <td className="px-3 py-2">{t("cookies.r2c3")}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-foreground">{t("cookies.r3c1")}</td>
                      <td className="px-3 py-2">{t("cookies.r3c2")}</td>
                      <td className="px-3 py-2">{t("cookies.r3c3")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="8. Regional Rights & Updates to This Policy">
              Visitors accessing AstroFree from India, the European Economic Area, the United Kingdom,
              or California benefit from transparency and preference controls aligned with applicable
              data-protection rules, including browser cookie blocking, ad personalization opt-outs,
              and immediate local-storage erasure via browser tools or our Settings page. We may update
              this Cookie Policy whenever our technical stack, privacy standards, or advertising
              integrations evolve. For broader details on how data is handled across the platform,
              read our{" "}
              <Link to={localizePath("/privacy", language) as any} className="underline underline-offset-4 hover:text-foreground">
                Privacy Policy
              </Link>{" "}
              or reach our support team anytime through our{" "}
              <Link to={localizePath("/contact", language) as any} className="underline underline-offset-4 hover:text-foreground">
                Contact page
              </Link>
              .
            </Section>

            <Section title="9. Local Storage vs. HTTP Cookies Explained">
              While HTTP cookies are transmitted between your browser and web servers with page
              requests, HTML5 local storage resides exclusively inside your device&apos;s browser sandbox.
              AstroFree relies primarily on local storage to preserve your daily card ritual, reading
              journal entries, saved numerology calculations, theme preference (light or dark sanctuary
              mode), and interface language selection across our 13 supported languages. Because this
              reflective history never sits in a remote consumer ad profile, clearing your site data in
              your browser deletes those local records immediately on your hardware.
            </Section>

            <Section title="10. Step-by-Step Browser Controls Across Desktop & Mobile">
              Modern browsers let you review, block, or clear cookies and site data at any time. In
              Google Chrome or Microsoft Edge, open Settings, navigate to Privacy and Security, and
              select Third-party cookies or Site data to restrict tracking technologies globally or per
              domain. In Apple Safari on iPhone, iPad, or macOS, open Privacy settings to enable
              Prevent Cross-Site Tracking or Block All Cookies. In Mozilla Firefox, open Privacy &amp;
              Security and select Strict under Enhanced Tracking Protection. Note that disabling local
              storage completely may reset your chosen language or clear unsaved journal reflections
              when switching tabs.
            </Section>

            <Section title="11. Policy Alignment & Periodic Updates">
              We audit our Cookie &amp; Storage Policy alongside our{" "}
              <Link to={localizePath("/privacy", language) as any} className="underline underline-offset-4 hover:text-foreground">
                Privacy Policy
              </Link>{" "}
              whenever analytics, consent frameworks, or advertising integrations change. Any material
              revisions are published directly on this page with an updated effective date at the top
              of the guide.
            </Section>
          </GlassCard>
        ) : (
          <GlassCard className="mt-8 space-y-6 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
            <Section title={t("cookies.s1Title")}>{t("cookies.s1Body")}</Section>
            <Section title={t("cookies.s2Title")}>
              {t("cookies.s2Body")}{" "}
              <Link to={localizePath("/settings", language) as any} className="underline underline-offset-4 hover:text-foreground">
                {t("nav.settings")}
              </Link>
              .
            </Section>
            <Section title={t("cookies.s3Title")}>{t("cookies.s3Body")}</Section>
            <Section title={t("cookies.s4Title")}>
              {t("cookies.s4Body")}
              <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.04] text-foreground">
                    <tr>
                      <th className="px-3 py-2">{t("cookies.tableCol1")}</th>
                      <th className="px-3 py-2">{t("cookies.tableCol2")}</th>
                      <th className="px-3 py-2">{t("cookies.tableCol3")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-3 py-2 text-foreground">{t("cookies.r1c1")}</td>
                      <td className="px-3 py-2">{t("cookies.r1c2")}</td>
                      <td className="px-3 py-2">{t("cookies.r1c3")}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-foreground">{t("cookies.r2c1")}</td>
                      <td className="px-3 py-2">{t("cookies.r2c2")}</td>
                      <td className="px-3 py-2">{t("cookies.r2c3")}</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-foreground">{t("cookies.r3c1")}</td>
                      <td className="px-3 py-2">{t("cookies.r3c2")}</td>
                      <td className="px-3 py-2">{t("cookies.r3c3")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </GlassCard>
        )}

        <div className="mt-8">
          <Link
            to={localizePath("/", language) as any}
            className="inline-flex min-h-12 sm:min-h-0 items-center text-base sm:text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {t("privacy.back")}
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
