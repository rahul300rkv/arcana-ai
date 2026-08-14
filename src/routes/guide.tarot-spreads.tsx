import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Layers } from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SPREAD_LIST } from "@/lib/tarot/spreads";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

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
        children: JSON.stringify(buildPageJsonLd({
          "path": "/guide/tarot-spreads",
          "title": "Tarot Spreads Explained — Single Card to Celtic Cross",
          "description": "A free guide to tarot spreads: what each position means in the Single Card, Three Card, Love, Career, Money, Decision, Celtic Cross, and Year Ahead spreads.",
          "crumbs": [
                    {
                              "name": "Guides",
                              "path": "/guide"
                    },
                    {
                              "name": "Tarot Spreads",
                              "path": "/guide/tarot-spreads"
                    }
          ],
          "faqs": [
                    {
                              "question": "Which tarot spread should a beginner use?",
                              "answer": "Start with the Single Card or Three Card spread — few positions, clear structure, and easy to interpret."
                    },
                    {
                              "question": "What is the Celtic Cross spread?",
                              "answer": "The Celtic Cross is a ten-card spread covering the situation, the challenge, the past, the near future, hopes, external influences, and the likely outcome."
                    },
                    {
                              "question": "Can I use any spread for any question?",
                              "answer": "Yes, but spreads are designed around question types — love spreads compare two people's energy, decision spreads weigh two options."
                    }
          ],
          "article": {
                    "updated": "2026-08-07",
                    "section": "Tarot"
          }
        })),
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
          Tower in an "Outcome" position. Below are all eight spreads available in AstroFree's{" "}
          <Link to="/reading" className="underline underline-offset-4 hover:text-foreground">
            free AI tarot reading
          </Link>
          , what each position means, and when each spread is the right fit.
        </p>

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
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">
                  One card per month, January through December — a broad-strokes forecast rather
                  than a position-by-position breakdown.
                </p>
              )}
            </GlassCard>
          ))}
        </div>

        <div className="mt-14">
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
