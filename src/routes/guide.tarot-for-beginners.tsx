import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Sparkles,
  Layers,
  Hand,
  Compass,
  ListChecks,
  ShieldQuestion,
  HelpCircle,
} from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";

const PATH = "/guide/tarot-for-beginners";
const TITLE = "Complete Guide to Tarot Reading for Beginners";
const DESCRIPTION =
  "A step-by-step beginner's guide to tarot reading — the deck structure, how to shuffle and draw, your first spreads, and how to actually interpret a card instead of just memorising meanings.";
const UPDATED = "2026-08-14";

const FAQS = [
  {
    question: "Do I need a special deck to start reading tarot?",
    answer:
      "No. Any standard 78-card Rider–Waite–Smith style deck works, and even a well-illustrated app deck is fine while you're learning. What matters more than the deck is consistency — using the same one while you build familiarity with its imagery.",
  },
  {
    question: "How long does it take to learn tarot?",
    answer:
      "Most beginners feel comfortable with single-card pulls within a week or two, and confident with three-card spreads within a month of regular practice. Fluency with all 78 cards in varied spreads typically takes six months to a year of consistent reading.",
  },
  {
    question: "Do reversed cards mean something bad?",
    answer:
      "Not inherently. A reversed card usually points to an internalised, blocked, delayed, or shadow version of the upright meaning, not automatic misfortune. Many beginners choose to read every card upright at first, and add reversals once the upright meanings feel solid.",
  },
  {
    question: "Can I read tarot for myself, or do I need someone else to do it?",
    answer:
      "Self-reading is not only allowed, it's how most readers build their skill. The main challenge is staying neutral about a question you're emotionally invested in, which is why writing your question down before you shuffle helps keep the reading honest.",
  },
  {
    question: "Is tarot reading predicting the future?",
    answer:
      "Tarot is best treated as a structured reflection tool: the cards surface patterns, blind spots, and likely trajectories based on the energy already in motion, rather than fixed, unchangeable events. Most practising readers treat outcomes as probable, not certain.",
  },
];

function TarotForBeginnersPage() {
  return (
    <ArticleLayout
      crumbs={[{ label: "Guides", to: "/guide" }, { label: "Tarot for Beginners" }]}
      eyebrow="Tarot · Beginner's Guide"
      title={TITLE}
      intro="Everything you need to draw your first card with confidence — the deck, the shuffle, your first spreads, and a repeatable method for interpreting what you see instead of guessing."
      url={`${SITE_URL}${PATH}`}
      updated={UPDATED}
      readingMinutes={14}
      wordCount={3050}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <Sparkles className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
    >
      <ContentSection id="what-is-tarot" title="What tarot actually is" icon={BookOpen}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          A tarot deck is a set of 78 illustrated cards split into two families: the 22 Major
          Arcana and the 56 Minor Arcana. Each card carries a fixed core meaning — built from its
          imagery, numerology, and elemental associations — but that meaning shifts depending on
          the question asked, the position it lands in within a spread, and the cards drawn beside
          it. Learning tarot is really learning two things at once: a vocabulary of 78 symbols, and
          a method for reading them together as a sentence rather than in isolation.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Historically, tarot began as a 15th-century Italian card game before its symbolism was
          adopted for divination in the 18th century. Whether you approach it as a spiritual
          practice, a reflection tool, or simply an engaging way to structure your thinking about a
          decision, the mechanics are identical: shuffle, draw, and interpret. This guide walks
          through all three in the order a beginner actually needs them.
        </p>
      </ContentSection>

      <ContentSection id="deck-structure" title="Understanding the deck" icon={Layers}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          The <strong className="text-foreground/90">Major Arcana</strong> (numbered 0 through 21,
          from The Fool to The World) represent significant life themes — turning points, lessons,
          and archetypal forces that tend to describe the bigger picture of a reading. When several
          Major Arcana appear in one spread, it's usually a sign the question touches something
          consequential rather than day-to-day.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          The <strong className="text-foreground/90">Minor Arcana</strong> cover the everyday —
          the texture of daily life, small decisions, and short-term influences. They're split into
          four suits, each tied to an element and a life domain:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { suit: "Wands", element: "Fire", domain: "Ambition, action, creativity, passion" },
            { suit: "Cups", element: "Water", domain: "Emotion, relationships, intuition" },
            { suit: "Swords", element: "Air", domain: "Thought, conflict, communication, truth" },
            { suit: "Pentacles", element: "Earth", domain: "Money, career, health, the material world" },
          ].map((s) => (
            <div key={s.suit} className="rounded-lg border border-white/10 p-3 text-sm">
              <span className="font-display text-foreground">
                {s.suit} <span className="text-xs text-muted-foreground">· {s.element}</span>
              </span>
              <p className="mt-1 text-xs text-muted-foreground">{s.domain}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Within each suit, cards Ace through 10 describe a situation unfolding in stages, and the
          four court cards (Page, Knight, Queen, King) represent people, personality styles, or a
          particular way of approaching the suit's theme — sometimes you, sometimes someone else in
          the question.
        </p>
      </ContentSection>

      <ContentSection id="getting-ready" title="Setting up your first reading" icon={Hand}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          You don't need candles or a ritual to get a useful reading, but a few habits make the
          practice more consistent and easier to trust:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "Write your question down before you shuffle, in specific rather than yes/no terms — \"What do I need to understand about this job offer?\" gives more to work with than \"Should I take the job?\"",
            "Shuffle for as long as feels right, cutting the deck once or twice. There's no required number of shuffles.",
            "Draw with your non-dominant hand if that ritual helps you feel present, but it makes no difference to the outcome — pick what keeps you focused.",
            "Read cards in the order you laid them, not the order that feels most dramatic. Skipping around breaks the narrative a spread is built to tell.",
            "Keep a simple reading journal — the question, the cards, and what you thought at the time. Beginners improve fastest by comparing early interpretations to how things actually played out.",
          ].map((tip) => (
            <li key={tip} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
              {tip}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="first-spreads" title="Your first three spreads" icon={ListChecks}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Start small. Complex spreads like the Celtic Cross are worth learning once the basics
          feel automatic, but they overwhelm most beginners before that point.
        </p>
        <div className="mt-4 space-y-4">
          <GlassCard className="p-5">
            <h3 className="font-display text-lg">1. Single Card</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Draw one card each morning, or in answer to a focused question. This is the fastest
              way to learn what each card feels like on its own, without the added complexity of a
              layout.
            </p>
          </GlassCard>
          <GlassCard className="p-5">
            <h3 className="font-display text-lg">2. Three Card (Past · Present · Future)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Draw three cards left to right. The first shows what led to the current situation,
              the second the present energy, the third where things are heading if nothing
              changes. This is where you start practicing how cards relate to each other, not just
              individually.
            </p>
          </GlassCard>
          <GlassCard className="p-5">
            <h3 className="font-display text-lg">3. Situation · Action · Outcome</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A close variant better suited to decisions: the first card names what's really going
              on, the second suggests what to do about it, the third shows the likely result of
              taking that action. This spread is a natural bridge toward the more detailed spreads
              covered in AstroFree's{" "}
              <Link to="/guide/tarot-spreads" className="text-[var(--gold)] hover:underline">
                full spreads guide
              </Link>
              .
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection id="interpreting" title="How to actually interpret a card" icon={Compass}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Memorising 78 keyword lists is the slow way to learn tarot, and it produces readings that
          sound like a dictionary rather than a message. A more durable method is to work through
          four layers, in order, every time you look at a card:
        </p>
        <ol className="mt-4 space-y-3">
          {[
            {
              step: "Look before you label",
              detail:
                "Notice what's actually happening in the image before recalling the \"official\" meaning — the number of figures, their posture, the weather, the objects in their hands. The Rider–Waite–Smith deck was designed so the picture alone carries most of the meaning.",
            },
            {
              step: "Place it in position",
              detail:
                "The same card means something different in a \"past\" slot than in an \"outcome\" slot. Always read the position's job first, then let the card answer that specific question.",
            },
            {
              step: "Read it against its neighbours",
              detail:
                "A card rarely stands alone. A frightening card next to gentle, supportive ones reads very differently than the same card surrounded by conflict. Look for repeated suits, numbers, or elements across the spread — that repetition is usually the real message.",
            },
            {
              step: "Connect it to the question",
              detail:
                "Bring the interpretation back to the specific question you asked. A generic keyword like \"change\" only becomes useful once you ask: change in what, exactly, and starting when?",
            },
          ].map((s, i) => (
            <li key={s.step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-display text-base text-[var(--gold)]">{i + 1}.</span>
              <span>
                <span className="text-foreground/90">{s.step}.</span> {s.detail}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Reversed cards (drawn upside down) add a fifth layer once you're ready for it — see{" "}
          <Link to="/guide/reversed-tarot-cards" className="text-[var(--gold)] hover:underline">
            AstroFree's guide to reversed tarot cards
          </Link>{" "}
          for how to work them into this same four-step process.
        </p>
      </ContentSection>

      <ContentSection id="common-mistakes" title="Common beginner mistakes" icon={ShieldQuestion}>
        <ul className="mt-2 space-y-3">
          {[
            "Treating every card in isolation instead of as part of a sentence the whole spread is telling.",
            "Panicking at cards like Death or The Tower — both describe transformation and disruption, not literal endings, and are among the most misunderstood cards in the deck.",
            "Re-asking the same question repeatedly until a preferred answer appears. One clear question, one reading, is more reliable than five contradictory ones.",
            "Skipping the court cards because they feel harder — they're often the fastest way to identify who else is involved in a situation.",
            "Reading for others before feeling settled reading for yourself. Confidence with your own spreads transfers directly to reading anyone else's.",
          ].map((m) => (
            <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
              {m}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="practice" title="Building the habit" icon={Sparkles}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Tarot reading is a skill built through repetition, not a fact set memorised once. A daily
          single-card pull, logged in a short journal, will teach you more in a month than an
          afternoon spent trying to memorise all 78 meanings at once. Once single cards feel
          natural, move to three-card spreads, then to the more structured layouts like the{" "}
          <Link to="/guide/celtic-cross-guide" className="text-[var(--gold)] hover:underline">
            Celtic Cross
          </Link>
          . If you'd rather practice with guided prompts and instant card meanings while you learn,
          AstroFree's{" "}
          <Link to="/reading" className="text-[var(--gold)] hover:underline">
            free AI tarot reading
          </Link>{" "}
          tool walks you through a live spread and explains each card as it's drawn.
        </p>
      </ContentSection>

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/guide/major-arcana-meanings",
            label: "22 Major Arcana explained",
            blurb: "Every Major Arcana card with real-life examples of how it tends to show up.",
          },
          {
            to: "/guide/reversed-tarot-cards",
            label: "How to interpret reversed tarot cards",
            blurb: "A practical method for reading upside-down cards without guessing.",
          },
          {
            to: "/guide/tarot-spreads",
            label: "Tarot spreads explained",
            blurb: "From Single Card to the ten-position Celtic Cross, position by position.",
          },
          {
            to: "/guide/tarot-card-meanings",
            label: "All 78 tarot card meanings",
            blurb: "The full reference library — upright and reversed meanings for every card.",
          },
        ]}
      />

      <CTASection
        title="Practice with a free guided reading"
        body="Draw a live spread and get an instant, plain-language interpretation of every card — a fast way to put this guide into practice."
        ctaLabel="Start a free reading"
        to="/reading"
      />
    </ArticleLayout>
  );
}

export const Route = createFileRoute("/guide/tarot-for-beginners")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "tarot for beginners",
        "how to read tarot cards",
        "learn tarot reading",
        "tarot card meanings for beginners",
        "how to shuffle tarot cards",
        "first tarot spread",
      ],
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            updated: UPDATED,
            crumbs: [
              { name: "Guides", path: "/guide" },
              { name: "Tarot for Beginners", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: TarotForBeginnersPage,
});
