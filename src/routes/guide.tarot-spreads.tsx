import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, Clock, Layers } from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SPREAD_LIST } from "@/lib/tarot/spreads";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { AuthorCard } from "@/components/AuthorCard";
import { InArticleAd } from "@/components/ads/InArticleAd";

const SPREADS_FAQS = [
  {
    question: "Which tarot spread should a beginner use?",
    answer:
      "Start with the Single Card or Three Card spread — few positions, crisp narrative structure, and easy to cross-check against real-world events without overwhelm.",
  },
  {
    question: "What is the Celtic Cross spread?",
    answer:
      "The Celtic Cross is a traditional ten-card layout examining present situation, immediate crossing challenge, conscious aims, subconscious roots, recent past, near future, internal stance, external influences, hopes and fears, and likely outcome.",
  },
  {
    question: "Can I use any spread for any question?",
    answer:
      "Yes, though tailored topic layouts deliver clearer contrast — Love spreads compare two partners evenly while Decision spreads illuminate blindspots between distinct paths.",
  },
  {
    question: "How should I word questions before pulling a spread?",
    answer:
      "Frame open-ended questions beginning with 'What helps me see...', 'How can I approach...', or 'What dynamic deserves attention in...' rather than passive fatalistic 'When will...' phrasing.",
  },
];

export const Route = createFileRoute("/guide/tarot-spreads")({
  head: () => ({
    meta: [
      { title: "Tarot Spreads Explained — Single Card to Celtic Cross | AstroFree" },
      {
        name: "description",
        content:
          "A free guide to tarot spreads: what each position means in the Single Card, Three Card, Love, Career, Money, Decision, Celtic Cross, and Year Ahead spreads, and when to use each one.",
      },
      {
        name: "keywords",
        content:
          "tarot spreads, celtic cross spread, three card tarot spread, love tarot spread, career tarot spread, year ahead tarot spread, tarot spread meanings",
      },
      { property: "og:title", content: "Tarot Spreads Explained — Single Card to Celtic Cross" },
      { property: "og:url", content: `${SITE_URL}/guide/tarot-spreads` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/guide/tarot-spreads` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/guide/tarot-spreads",
            title: "Tarot Spreads Explained — Single Card to Celtic Cross",
            description:
              "A free guide to tarot spreads: what each position means in the Single Card, Three Card, Love, Career, Money, Decision, Celtic Cross, and Year Ahead spreads.",
            crumbs: [
              {
                name: "Guides",
                path: "/guide",
              },
              {
                name: "Tarot Spreads",
                path: "/guide/tarot-spreads",
              },
            ],
            faqs: SPREADS_FAQS,
            article: {
              published: "2026-08-07",
              updated: "2026-11-16",
              section: "Tarot",
            },
          }),
        ),
      },
    ],
  }),
  component: TarotSpreadsPage,
});

const WHEN_TO_USE: Record<string, string> = {
  single:
    "Best for a quick daily check-in, or when you just need one clear, focused message rather than a full analysis.",
  "three-card":
    "Good for understanding how a situation has developed and where it's likely heading — a simple before/now/next arc.",
  love: "Best when a relationship's dynamics feel unclear and you want to see both people's energy side by side, not just your own.",
  career:
    "Suited to work decisions — a stuck project, a job change, or wanting a clearer sense of direction in your path.",
  money:
    "Useful when finances feel blocked or uncertain and you want to see what's restricting flow versus what's opening up.",
  decision:
    "Built for choosing between two real options — it surfaces a hidden factor neither option accounts for on its own.",
  "celtic-cross":
    "The most thorough spread here — suited to a complex or high-stakes question where you want the full picture, not just a quick read.",
  "year-ahead":
    "A longer-range spread, one card per month, for a broad sense of the themes likely to show up across the coming year.",
};

function TarotSpreadsPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-4xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Guides", to: "/guide" }, { label: "Tarot Spreads" }]} />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Free guide</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          Tarot spreads, <span className="aurora-text">explained</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A tarot spread is simply a layout — a fixed set of positions, each assigned its own
          meaning, that cards are drawn into. The same card lands differently depending on which
          position it falls in: The Tower in a "Challenge" position reads very differently than The
          Tower in an "Outcome" position. Below are all eight spreads available in AstroFree&apos;s{" "}
          <Link to="/reading" className="underline underline-offset-4 hover:text-foreground">
            free AI tarot reading
          </Link>
          , what each position means, and when each spread is the right fit.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            Published <time dateTime="2026-08-07">7 August 2026</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            Last updated <time dateTime="2026-11-16">16 November 2026</time>
          </span>
        </div>

        <div className="mt-12 space-y-8">
          {SPREAD_LIST.map((spread) => (
            <GlassCard key={spread.id} id={spread.id} className="scroll-mt-24">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-2xl">{spread.name}</h2>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Layers className="h-3.5 w-3.5" /> {spread.count} cards
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> ~{spread.minutes} min
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{spread.description}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="text-foreground/90">When to use it:</span> {WHEN_TO_USE[spread.id]}
              </p>

              {spread.count <= 10 ? (
                <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                  {spread.positions.map((p) => (
                    <li key={p.index} className="rounded-lg border border-white/10 p-3 text-sm">
                      <span className="font-display text-foreground">
                        {p.index + 1}. {p.name}
                      </span>
                      <p className="mt-1 text-xs text-muted-foreground">{p.meaning}</p>
                    </li>
                  ))}
                </ol>
              ) : null}
              {spread.id === "celtic-cross" && (
                <p className="mt-4 text-sm text-muted-foreground">
                  Want the full walkthrough?{" "}
                  <Link
                    to="/guide/celtic-cross-guide"
                    className="text-[var(--gold)] hover:underline"
                  >
                    Read the step-by-step Celtic Cross guide
                  </Link>
                  , with worked detail on every position and how to read them together.
                </p>
              )}
              {spread.count > 10 && (
                <p className="mt-4 text-sm text-muted-foreground">
                  One card per month, January through December — a broad-strokes forecast rather
                  than a position-by-position breakdown.
                </p>
              )}
            </GlassCard>
          ))}
        </div>

        <section className="mt-14 space-y-8">
          <GlassCard className="p-6 sm:p-8 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl">
              How Position Context Transforms Every Card
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Beginners often treat tarot cards as fixed flashcards: The Sun equals joy, Five of
              Pentacles equals hardship, Three of Swords equals heartbreak. In practice, a spread&apos;s
              architecture acts like grammar in a sentence. A card acts as a noun or verb, while the
              position it lands in decides whether that energy describes a past habit, an unseen ally,
              a present obstacle, or an emerging solution.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Consider drawing the Eight of Swords inside a Challenge position versus an Advice
              position. As a Challenge, it points out where overthinking or self-imposed rules have
              convinced you that you have fewer options than you actually do. Inside an Advice slot,
              however, it invites you to question unexamined assumptions immediately — noticing that
              the blindfold in traditional artwork is tied loosely enough to remove yourself.
            </p>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl">
              Choosing the Right Spread Size for Your Question
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              More cards do not automatically produce a better reading. Matching spread complexity to
              the real scope of your question keeps interpretations crisp and actionable:
            </p>
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
              <li>
                <strong className="text-foreground">Single Card (1 card):</strong> Ideal for morning
                intentions, emotional temperature checks, and direct yes/no leans where excessive
                detail only clouds your intuition.
              </li>
              <li>
                <strong className="text-foreground">Three Card &amp; Decision Spreads (3–4 cards):</strong>{" "}
                Best when you need narrative flow — seeing how yesterday&apos;s momentum shapes today&apos;s
                choice, or weighing two distinct options side by side.
              </li>
              <li>
                <strong className="text-foreground">Topic Spreads (Love, Career, Money — 4 cards):</strong>{" "}
                Designed around dedicated interpersonal or practical lenses so you examine both internal
                stance and external obstacles cleanly.
              </li>
              <li>
                <strong className="text-foreground">Celtic Cross &amp; Year Ahead (10–12 cards):</strong>{" "}
                Best saved for major life transitions, long-horizon planning, or multi-layered
                dilemmas where psychological roots and external influences both matter.
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl">
              Worked Example: Synthesizing a Three Card Pull
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Suppose a reader asks, &ldquo;How should I approach a possible job transition next
              quarter?&rdquo; and draws <strong className="text-foreground">The Hermit</strong> (Past),{" "}
              <strong className="text-foreground">Seven of Swords</strong> (Present), and{" "}
              <strong className="text-foreground">Ace of Pentacles</strong> (Future).
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Read mechanically, Seven of Swords might trigger alarm about betrayal. Read inside the
              spread arc, however, a calm narrative emerges: months of quiet private research (The
              Hermit) have taught you quietly to inspect fine print and keep your plans discreet until
              ready (Seven of Swords — tactical discretion rather than deceit), paving cleanly toward
              a solid, tangible offer or contract (Ace of Pentacles). Notice the shift from Air
              reflection to concrete Earth prosperity: discernment protects the seed.
            </p>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl">
              Synthesizing Multi-Card Spreads Without Overwhelm
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              When staring at four to ten cards at once, resist reading each one in isolation. First,
              scan the whole layout for elemental balance: an abundance of Cups points to emotional
              sensitivity, Wands signals creative urgency, Swords reveals heavy mental analysis, and
              Pentacles anchors the question in tangible stability, craft, or finances. Next, note
              how many Major Arcana cards appear — two or more suggest deeper life themes at play
              rather than minor passing moods. Finally, look at the first and last cards together as
              a headline summarizing where the energy starts and where it resolves.
            </p>
          </GlassCard>

          <div className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl">Frequently asked questions</h2>
            <FAQAccordion items={SPREADS_FAQS} />
          </div>
        </section>

        <div className="mt-12">
          <AuthorCard
            published="2026-08-07"
            lastUpdated="2026-11-16"
            category="Spread Architecture"
            readingTime="10 min read"
          />
        </div>

        <div className="mt-10">
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
