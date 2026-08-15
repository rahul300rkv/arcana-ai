import { createFileRoute, Link } from "@tanstack/react-router";
import {
  RotateCcw,
  Layers,
  ListChecks,
  Compass,
  ShieldQuestion,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";

const PATH = "/guide/reversed-tarot-cards";
const TITLE = "How to Interpret Reversed Tarot Cards";
const DESCRIPTION =
  "A practical guide to reading reversed tarot cards — what a reversal actually changes, the four common interpretations, and worked examples across Major and Minor Arcana.";
const UPDATED = "2026-08-14";

const FAQS = [
  {
    question: "Does a reversed card always mean something negative?",
    answer:
      "No. A reversal usually signals that the card's energy is blocked, internal, delayed, or being expressed in its shadow form — not that the outcome is automatically bad. Some reversed cards, like a reversed Tower, can even soften a difficult upright meaning.",
  },
  {
    question: "Do I have to read reversed cards at all?",
    answer:
      "No — reading every card upright is a completely valid, common approach, especially for beginners. Many experienced readers choose to read upright-only for clarity and add reversals later once the 78 upright meanings feel automatic.",
  },
  {
    question: "How do I decide if a card is reversed when shuffling?",
    answer:
      "Shuffle so some cards naturally flip during the process — for example, by including a few reversed cuts, or using a \"riffle\" or \"overhand\" shuffle without straightening the deck. Whatever orientation a card lands in when drawn is read as-is.",
  },
  {
    question: "Is a reversed Major Arcana card interpreted differently than a reversed Minor Arcana card?",
    answer:
      "The same four interpretive lenses apply to both, but Major Arcana reversals tend to describe a stalled or internalised life theme, while Minor Arcana reversals more often describe a practical delay, blockage, or an excess/deficiency in a specific area like money or communication.",
  },
  {
    question: "Can two people read the same reversed card differently?",
    answer:
      "Yes, and that's expected — reversed meanings depend heavily on the surrounding cards and the question asked, more so than upright meanings do. Consistency comes from picking one interpretive framework (see the four approaches below) and applying it the same way every time.",
  },
];

const APPROACHES = [
  {
    title: "Blocked or delayed energy",
    detail:
      "The upright meaning is present but obstructed — progress is slower, permission hasn't been granted yet, or an external factor is holding things up. A reversed Six of Wands, for example, suggests recognition or victory that's been delayed rather than denied.",
  },
  {
    title: "Internalised energy",
    detail:
      "The card's theme is happening inside the person rather than visibly in the world. A reversed Three of Cups might describe private joy or an inner circle rather than a public celebration.",
  },
  {
    title: "Shadow or excess expression",
    detail:
      "The upright quality has tipped into its unhealthy extreme. A reversed Strength can describe self-doubt or forcing control through domination rather than patience, while a reversed Emperor can point to rigidity or an abuse of authority.",
  },
  {
    title: "The lesson not yet learned",
    detail:
      "The upright card's growth hasn't landed yet — the person is still working through the lesson rather than having integrated it. A reversed Eight of Swords suggests the person hasn't yet recognised the self-imposed limits described by the upright card.",
  },
];

function ReversedTarotPage() {
  return (
    <ArticleLayout
      crumbs={[{ label: "Guides", to: "/guide" }, { label: "Reversed Tarot Cards" }]}
      eyebrow="Tarot · Interpretation"
      title={TITLE}
      intro="A reversed card isn't a different card with a scary new meaning — it's the same card, viewed through one of four practical lenses. Here's how to tell which one applies."
      url={`${SITE_URL}${PATH}`}
      updated={UPDATED}
      readingMinutes={9}
      wordCount={2050}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <RotateCcw className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
    >
      <ContentSection id="what-changes" title="What a reversal actually changes" icon={BookOpen}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          When a card is drawn upside down, its core theme doesn't disappear or flip into its exact
          opposite — that's a common misconception that leads new readers to treat every reversal
          as bad news. Instead, a reversal usually adjusts <em>how</em> the card's energy is showing
          up: turned inward instead of outward, delayed instead of active, or expressed as excess or
          deficiency rather than balance.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Think of the upright meaning as the card's default setting, and the reversal as a modifier
          applied on top of it — not a replacement. That's why the fastest way to learn reversed
          meanings is to know the upright meaning cold first; the reversal almost always makes sense
          once you understand what it's a variation of. AstroFree's full{" "}
          <Link to="/guide/tarot-card-meanings" className="text-[var(--gold)] hover:underline">
            tarot card meanings reference
          </Link>{" "}
          lists both upright and reversed meanings for all 78 cards side by side.
        </p>
      </ContentSection>

      <ContentSection id="four-lenses" title="The four common interpretations" icon={Layers}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Most reversed cards fall into one of four categories. Working through them in order,
          fastest fit first, is a reliable way to land on a consistent interpretation:
        </p>
        <div className="mt-4 space-y-4">
          {APPROACHES.map((a, i) => (
            <GlassCard key={a.title} className="p-5">
              <h3 className="font-display text-lg">
                {i + 1}. {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="method" title="A repeatable method for reading a reversal" icon={ListChecks}>
        <ol className="mt-2 space-y-3">
          {[
            "Recall the upright meaning first, in plain language, before anything else.",
            "Ask which of the four lenses (blocked, internal, shadow, unlearned lesson) fits the context of the question best — don't default to the same lens for every card.",
            "Check the position it landed in. A reversed card in a \"past\" position often just describes something that has already resolved or faded, while the same reversal in an \"outcome\" position is more of a live warning.",
            "Weigh it against the surrounding cards. Several reversals clustered together often points to one root blockage affecting the whole spread, rather than several unrelated problems.",
            "Only after all of that, consider whether the situation is genuinely negative — most reversals describe friction or delay, not disaster.",
          ].map((step, i) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-display text-base text-[var(--gold)]">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection id="examples" title="Worked examples" icon={Compass}>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              card: "The Tower, reversed",
              read: "Rather than a sudden collapse, this often describes a crisis you saw coming and prepared for, or disruption you're actively resisting — delaying the fall rather than avoiding the lesson.",
            },
            {
              card: "Two of Cups, reversed",
              read: "A connection that's imbalanced, one-sided, or going through miscommunication — the upright's mutual harmony is present in intent but not yet in practice.",
            },
            {
              card: "Ten of Pentacles, reversed",
              read: "Family or financial stability that feels fragile, or success that hasn't reached the wider family yet — the foundation described upright is still being built.",
            },
            {
              card: "The Sun, reversed",
              read: "Joy or success delayed or dimmed rather than absent — often read as temporary low confidence rather than the reversal of good fortune.",
            },
          ].map((e) => (
            <GlassCard key={e.card} className="p-5">
              <h3 className="font-display text-base text-[var(--gold)]">{e.card}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.read}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="should-i" title="Should you read reversals at all?" icon={ShieldQuestion}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          There's no rule that says you must. Reading every card upright is a legitimate, widely
          used approach — it simplifies interpretation and is often recommended for beginners still
          building fluency with the 78 upright meanings covered in AstroFree's{" "}
          <Link to="/guide/tarot-for-beginners" className="text-[var(--gold)] hover:underline">
            beginner's guide
          </Link>
          . Once those feel automatic, adding reversals is simply a way to add nuance — not a more
          "advanced" or "correct" way to read.
        </p>
      </ContentSection>

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/guide/tarot-for-beginners",
            label: "Complete guide to tarot for beginners",
            blurb: "Start here if upright meanings still feel unfamiliar.",
          },
          {
            to: "/guide/major-arcana-meanings",
            label: "22 Major Arcana explained",
            blurb: "Every Major Arcana card with real-life examples, upright and reversed.",
          },
          {
            to: "/guide/tarot-card-meanings",
            label: "All 78 tarot card meanings",
            blurb: "The full reference library — upright and reversed for every card.",
          },
          {
            to: "/reading",
            label: "Free AI tarot reading",
            blurb: "Draw a live spread and see reversed cards interpreted for you.",
          },
        ]}
      />

      <CTASection
        title="See reversed meanings in a live reading"
        body="Draw a free spread and get an instant explanation of every card — upright or reversed — in plain language."
        ctaLabel="Start a free reading"
        to="/reading"
      />
    </ArticleLayout>
  );
}

export const Route = createFileRoute("/guide/reversed-tarot-cards")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "reversed tarot cards",
        "how to read reversed tarot",
        "reversed tarot meanings",
        "tarot reversals explained",
        "upside down tarot card meaning",
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
              { name: "Reversed Tarot Cards", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: ReversedTarotPage,
});
