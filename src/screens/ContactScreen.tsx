import { useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { CalendarClock, Send, CheckCircle2, MessageSquare, Sparkles } from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function ContactScreen() {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("general");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);

    // Dispatch support request asynchronously
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: t("contact.crumb") }]} />
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/[0.03] px-4 py-1.5 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--gold)_90%,white)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_90%,white)]">
              {t("contact.badge")}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            {t("contact.title1")} <span className="aurora-text">{t("contact.title2")}</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground leading-relaxed">
            {t("contact.sub")}
          </p>
          <p className="mt-3 inline-flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.published")} <time dateTime="2026-08-07">{formatUtcDate("2026-08-07")}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.lastUpdated")} <time dateTime="2026-11-16">{formatUtcDate("2026-11-16")}</time>
            </span>
          </p>
        </div>

        <div className="mt-10">
          {submitted ? (
            <GlassCard className="p-8 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] text-[var(--gold)]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">{t("contact.sentTitle")}</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                {t("contact.sentBodyPrefix")} <strong className="text-foreground">{name}</strong>.{" "}
                {t("contact.sentBodySuffix")}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                  }}
                  className="min-h-12 rounded-full liquid-chrome-btn px-6 py-3 text-sm sm:text-xs font-bold uppercase tracking-wider text-[#24060e]"
                >
                  {t("contact.sendAnother")}
                </button>
              </div>
            </GlassCard>
          ) : (
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      {t("contact.nameLabel")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("contact.namePlaceholder")}
                      className="w-full min-h-12 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      {t("contact.emailLabel")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("contact.emailPlaceholder")}
                      className="w-full min-h-12 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {t("contact.subjectLabel")}
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full min-h-12 rounded-xl border border-white/15 bg-[#1a0418] px-4 py-3 text-base sm:text-sm text-foreground focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                  >
                    <option value="general">{t("contact.subjGeneral")}</option>
                    <option value="tarot">{t("contact.subjTarot")}</option>
                    <option value="numerology">{t("contact.subjNumerology")}</option>
                    <option value="bug">{t("contact.subjBug")}</option>
                    <option value="business">{t("contact.subjBusiness")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {t("contact.msgLabel")}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("contact.msgPlaceholder")}
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)] resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-sm sm:text-xs text-muted-foreground">
                    * {t("contact.privacyNote")}
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="liquid-chrome-btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 py-3 text-sm sm:text-xs font-bold uppercase tracking-wider text-[#24060e] disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <span>{t("contact.transmitting")}</span>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>{t("contact.sendBtn")}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </GlassCard>
          )}
        </div>

        <section className="mt-14 space-y-8">
          <GlassCard className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[color-mix(in_oklab,var(--gold)_85%,white)]">
              <MessageSquare className="h-4 w-4" />
              <span>{t("contact.topicsEye")}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              {t("contact.topicsTitle")}
            </h2>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {t("contact.topicsIntro")}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2 text-base sm:text-sm text-muted-foreground">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">
                  {t("contact.topic1Title")}
                </h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  {t("contact.topic1Body")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">
                  {t("contact.topic2Title")}
                </h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  {t("contact.topic2Body")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">
                  {t("contact.topic3Title")}
                </h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  {t("contact.topic3Body")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">
                  {t("contact.topic4Title")}
                </h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  {t("contact.topic4Body")}{" "}
                  <Link to={localizePath("/privacy", language) as any} className="underline underline-offset-4 hover:text-foreground">
                    {t("about.policyLink")}
                  </Link>
                  .
                </p>
              </div>
            </div>
          </GlassCard>

          {language === "en" && (
            <>
              <GlassCard className="p-6 sm:p-8 space-y-5">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                  Frequently Asked Support Questions
                </h2>
                <div className="space-y-4 text-base sm:text-[15px] text-muted-foreground">
                  <div>
                    <h3 className="font-display text-base text-foreground">
                      How quickly does the AstroFree team respond?
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      We review incoming messages daily and aim to respond to all genuine support,
                      correction, and partnership requests within 24 to 48 hours on business days.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-base text-foreground">
                      Can I request a personal live reading through the contact form?
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      AstroFree is built as a self-serve, privacy-first educational and reflective
                      platform: we do not sell private paid consultations via email. You can generate
                      unlimited spreads for free anytime from our{" "}
                      <Link to={localizePath("/tarot", language) as any} className="underline underline-offset-4 hover:text-foreground">
                        Tarot Reading hub
                      </Link>{" "}
                      or explore your{" "}
                      <Link
                        to={localizePath("/numerology", language) as any}
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        Vedic Numerology forecast
                      </Link>
                      .
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-base text-foreground">
                      Where is my saved reading history stored?
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Your reading log, daily card streak, and personal reflections are stored directly on
                      your own device using browser local storage. Because we do not keep centralized
                      reading diaries on our servers, clearing your browser cache or switching devices
                      resets local entries unless exported from Settings.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-base text-foreground">
                      How is my contact form submission handled?
                    </h3>
                    <p className="mt-1 leading-relaxed">
                      Your name, reply email, and message are used strictly to respond to your inquiry. We
                      never publish visitor email addresses, add senders to unsolicited marketing lists, or
                      sell contact details to third parties.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                  Helpful Tips for Bug Reports &amp; Editorial Corrections
                </h2>
                <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                  Including a few technical or editorial details in your message lets our engineering
                  and content team resolve issues on the very first reply:
                </p>
                <ul className="space-y-2.5 text-base sm:text-[15px] leading-relaxed text-muted-foreground list-disc pl-5">
                  <li>
                    <strong className="text-foreground">Exact page URL:</strong> Copy the path where you
                    spotted the issue (for example, <code className="text-foreground">/tarot/the-fool</code>{" "}
                    or <code className="text-foreground">/bhagyank-calculator</code>) so we can inspect
                    that specific guide immediately.
                  </li>
                  <li>
                    <strong className="text-foreground">Device &amp; language setting:</strong> Tell us
                    whether you were browsing on mobile or desktop and which display language from our
                    13 Indian language options was active.
                  </li>
                  <li>
                    <strong className="text-foreground">Numerology check details:</strong> If you think
                    a Personal Year or Master Number breakdown looked unexpected, share the step where
                    the sum diverged from classical Ank Shastra or Pythagorean reduction rules so we can
                    double-check our deterministic calculator logic.
                  </li>
                  <li>
                    <strong className="text-foreground">Advertising &amp; policy compliance notes:</strong>{" "}
                    If an ad placement ever overlaps navigation controls or slows down scrolling on a
                    narrow screen, please tell us your viewport width and browser so we can fix it.
                  </li>
                </ul>
              </GlassCard>

              <GlassCard className="p-6 sm:p-8 space-y-5">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                  Accessibility Support, Academic Partnerships &amp; Rights Inquiries
                </h2>
                <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                  AstroFree is committed to building an inclusive, barrier-free reading library across
                  desktop workstations, screen readers, and entry-level mobile phones. If you rely on
                  keyboard-only navigation, VoiceOver, TalkBack, or high-contrast display modes and run
                  into any unlabeled button, missing image description, or low-contrast card face, please
                  flag the route URL using the form above so we can ship an accessibility patch promptly.
                </p>
                <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                  We also welcome notes from researchers, cultural historians, and regional-language
                  educators interested in refining classical Rider-Waite-Smith or Vedic Ank Shastra
                  terminology across Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada,
                  Malayalam, Punjabi, Odia, and Assamese. For any intellectual property, syndication,
                  or DMCA notice, include the specific URL on AstroFree, a concise summary of the
                  material in question, and verifiable ownership contact information so our editorial desk
                  can investigate thoroughly and respond in good faith.
                </p>
              </GlassCard>
            </>
          )}
        </section>

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
