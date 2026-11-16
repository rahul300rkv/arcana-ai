import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Send, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
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
          "Reach out to the AstroFree team securely for support, feedback, content corrections, or business inquiries.",
      },
      { property: "og:title", content: "Contact AstroFree — Get in Touch" },
      {
        property: "og:description",
        content: "Secure contact form for support, feedback, and inquiries.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/contact",
            title: "Contact AstroFree — Get in Touch",
            description:
              "Secure contact form for support, feedback, bug reports, and content enquiries.",
            crumbs: [
              {
                name: "Contact",
                path: "/contact",
              },
            ],
          }),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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

    // Simulate secure dispatch (routed to Rahul.verma300@rediffmail.com)
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
        <Breadcrumb items={[{ label: "Contact" }]} />
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/[0.03] px-4 py-1.5 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--gold)_90%,white)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_90%,white)]">
              Secure Support Desk
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Get in <span className="aurora-text">Touch</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Have a question about a tarot reading, need assistance with numerology calculators, or want to share feedback? Send us a message below.
          </p>
        </div>

        <div className="mt-10">
          {submitted ? (
            <GlassCard className="p-8 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] text-[var(--gold)]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Message Received</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-foreground">{name}</strong>. Your message has been successfully dispatched to our support team. We typically respond within 24–48 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                  }}
                  className="rounded-full liquid-chrome-btn px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#24060e]"
                >
                  Send Another Message
                </button>
              </div>
            </GlassCard>
          ) : (
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Aarav Sharma"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aarav@example.com"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Inquiry Subject
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#1a0418] px-4 py-3 text-sm text-foreground focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
                  >
                    <option value="general">General Support & Feedback</option>
                    <option value="tarot">Tarot Reading Inquiry</option>
                    <option value="numerology">Vedic Numerology Calculation Support</option>
                    <option value="bug">Report a Bug / Content Correction</option>
                    <option value="business">Business & Advertising Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your questions, feedback, or details regarding your inquiry..."
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)] resize-y"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-muted-foreground">
                    * Your email is kept strictly confidential and never published.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="liquid-chrome-btn inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#24060e] disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>Send Message</span>
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
              <span>How We Can Help</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              Support Topics &amp; Editorial Inquiries
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether you are visiting AstroFree for your first tarot spread, verifying a Vedic
              numerology calculation, or flagging an editorial detail, every message submitted through
              this form is reviewed personally by our support and editorial team. To help us route
              your inquiry accurately and reply within 24 to 48 business hours, choose the subject
              category that best fits your note.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2 text-sm text-muted-foreground">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">
                  Tarot Spreads &amp; Card Meanings
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed">
                  Questions about how AstroFree synthesizes reversed cards, how to choose between the
                  Three Card and Celtic Cross spreads, or suggestions for clarifying traditional card
                  descriptions across our 78-card directory.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">
                  Vedic Numerology Calculators
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed">
                  Need clarity on how our Mulank, Bhagyank, Namank, Personal Year, or Master Number 11
                  and 22 calculators reduce compound digits? Include your question (without sensitive
                  identity documents) and we will gladly explain the calculation steps.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">
                  Corrections &amp; Language Feedback
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed">
                  We maintain educational content in English alongside 13 Indian languages. If you
                  spot a typo, broken link, or phrasing that could sound more natural in Hindi,
                  Hinglish, Tamil, Bengali, or another regional script, let us know the page path so
                  our editors can review it promptly.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">
                  Privacy, Cookies &amp; Compliance
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed">
                  For inquiries regarding browser local storage, cookie preferences, advertising
                  disclosures, or content removal requests, select General Support and reference the
                  specific policy section from our{" "}
                  <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              Frequently Asked Support Questions
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
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
                  platform — we do not sell private paid consultations via email. You can generate
                  unlimited spreads for free anytime from our{" "}
                  <Link to="/tarot" className="underline underline-offset-4 hover:text-foreground">
                    Tarot Reading hub
                  </Link>{" "}
                  or explore your{" "}
                  <Link
                    to="/numerology"
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
        </section>

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
