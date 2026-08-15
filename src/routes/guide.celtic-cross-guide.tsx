import { createFileRoute, Link } from "@tanstack/react-router";
import { Cross, ListChecks, Compass, ShieldQuestion, HelpCircle, BookOpen } from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";

const PATH = "/guide/celtic-cross-guide";
const TITLE = "Celtic Cross Spread: Step-by-Step Guide";
const DESCRIPTION =
  "A complete, step-by-step walkthrough of the ten-card Celtic Cross tarot spread — what each position means, the order to lay and read them in, and how to weave all ten into one coherent answer.";
const UPDATED = "2026-08-14";

const POSITIONS = [
  {
    n: 1,
    name: "Present",
    meaning: "The heart of the matter",
    detail:
      "Placed in the centre, this card names the core energy of the situation right now — the thing the whole reading is really about, even if the question was framed differently.",
  },
  {
    n: 2,
    name: "Challenge",
    meaning: "What crosses you",
    detail:
      "Laid across the first card. This is the main obstacle or tension in the situation — not necessarily a \"bad\" card, since sometimes the challenge is a positive force you haven't fully accepted yet.",
  },
  {
    n: 3,
    name: "Foundation",
    meaning: "The root beneath",
    detail:
      "Placed below the first two. This shows the deeper cause — a past pattern, belief, or event the current situation is actually built on.",
  },
  {
    n: 4,
    name: "Recent Past",
    meaning: "What is passing away",
    detail:
      "Placed to the left. An influence that's fading out of relevance but shaped how you arrived here — recently resolved, or in the process of resolving.",
  },
  {
    n: 5,
    name: "Crown",
    meaning: "What is possible",
    detail:
      "Placed above the centre. The best realistic outcome available if things continue on their current course, or the conscious goal you're aiming at.",
  },
  {
    n: 6,
    name: "Near Future",
    meaning: "What is approaching",
    detail:
      "Placed to the right. What's likely to happen in the coming days or weeks — the most immediate, actionable card in the spread.",
  },
  {
    n: 7,
    name: "Self",
    meaning: "How you see yourself",
    detail:
      "First of the four \"staff\" cards, placed in a vertical line beside the cross. Your current mindset and self-perception going into this situation.",
  },
  {
    n: 8,
    name: "Environment",
    meaning: "Outside influences",
    detail:
      "The people, circumstances, and external pressures around you — factors affecting the outcome that are largely outside your control.",
  },
  {
    n: 9,
    name: "Hopes & Fears",
    meaning: "What you hope for and fear",
    detail:
      "Often the most emotionally revealing card. Hope and fear frequently point to the same underlying thing, just approached from opposite directions.",
  },
  {
    n: 10,
    name: "Outcome",
    meaning: "The final direction",
    detail:
      "The card at the top of the staff. The likely resolution if every other card's energy plays out as shown — a direction, not an unchangeable certainty.",
  },
];

const FAQS = [
  {
    question: "How long does a Celtic Cross reading take?",
    answer:
      "Most readers spend 15 to 20 minutes on a full Celtic Cross — a few minutes to lay the ten cards, and the rest interpreting them individually and then together.",
  },
  {
    question: "What's the correct order to lay the ten cards in?",
    answer:
      "Present, Challenge (crossed over it), Foundation (below), Recent Past (left), Crown (above), Near Future (right) completes the central cross. Then Self, Environment, Hopes & Fears, and Outcome are laid bottom to top in a vertical line beside it, forming the \"staff.\"",
  },
  {
    question: "Do I read the ten cards in the order they're laid, or some other order?",
    answer:
      "Read them in position order (1 through 10) on your first pass to build the story chronologically, then read the spread again as a whole, looking for repeated suits, numbers, or themes across all ten cards — that's usually where the clearest message emerges.",
  },
  {
    question: "Is the Celtic Cross too advanced for beginners?",
    answer:
      "It's more demanding than a Single Card or Three Card spread, but not off-limits to beginners — it simply rewards familiarity with upright and reversed card meanings first. Most readers try their first Celtic Cross after a few weeks of practice with smaller spreads.",
  },
  {
    question: "What if two positions seem to contradict each other?",
    answer:
      "That's common and meaningful, not a sign of a bad reading — it usually reflects real tension in the situation, such as the Hopes & Fears position pulling one way while the Outcome pulls another. Sit with the contradiction rather than picking whichever card you prefer.",
  },
];

function CelticCrossGuidePage() {
  return (
    <ArticleLayout
      crumbs={[{ label: "Guides", to: "/guide" }, { label: "Celtic Cross Guide" }]}
      eyebrow="Tarot · Spreads"
      title={TITLE}
      intro="The Celtic Cross is the most detailed spread most readers ever learn — ten positions covering the present, the past, outside influences, and where things are heading. Here's exactly how to lay it and read it."
      url={`${SITE_URL}${PATH}`}
      updated={UPDATED}
      readingMinutes={11}
      wordCount={2540}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <Cross className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
    >
      <ContentSection id="what-is-it" title="What the Celtic Cross is for" icon={BookOpen}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          The Celtic Cross is a ten-card spread built to cover a situation from every angle: what's
          happening now, what's causing it, what's fading, what's approaching, how you see
          yourself, what's happening around you, and where it's all likely headed. It's the spread
          most readers reach for when a question is too layered for a Three Card pull — a career
          crossroads, a complicated relationship, or any decision with a lot of moving parts.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Because it's detailed, it rewards preparation more than any other common spread. A vague
          question ("What does my future hold?") tends to produce a scattered, hard-to-interpret
          Celtic Cross, while a focused one ("What do I need to understand about this job
          opportunity?") gives all ten positions something specific to answer. If you haven't laid
          a spread before, AstroFree's{" "}
          <Link to="/guide/tarot-for-beginners" className="text-[var(--gold)] hover:underline">
            beginner's guide
          </Link>{" "}
          covers simpler spreads worth trying first.
        </p>
      </ContentSection>

      <ContentSection id="layout" title="The layout: two halves" icon={ListChecks}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          The ten cards split into two visual groups. The first six form a cross in the centre —
          the situation itself, its challenge, its roots, and its immediate trajectory. The last
          four are laid in a vertical line beside it, called the "staff" — your inner state, your
          environment, your hopes and fears, and the likely outcome.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <GlassCard className="p-5">
            <h3 className="font-display text-base text-[var(--gold)]">The Cross (positions 1–6)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Present, Challenge, Foundation, Recent Past, Crown, Near Future — the situation's
              anatomy: what it is, what's blocking it, where it came from, and what's just ahead.
            </p>
          </GlassCard>
          <GlassCard className="p-5">
            <h3 className="font-display text-base text-[var(--gold)]">The Staff (positions 7–10)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Self, Environment, Hopes & Fears, Outcome — the human side: how you're approaching
              this, what's around you, what you're emotionally invested in, and where it's heading.
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection id="positions" title="All ten positions, in order" icon={Compass}>
        <div className="space-y-4">
          {POSITIONS.map((p) => (
            <GlassCard key={p.n} className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg">
                  {p.n}. {p.name}
                </h3>
                <span className="text-xs uppercase tracking-[0.15em] text-[var(--gold)]">
                  {p.meaning}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="how-to-read" title="How to read it as one answer" icon={ListChecks}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Reading ten cards individually is easy; the real skill is weaving them into one coherent
          answer. A reliable method:
        </p>
        <ol className="mt-4 space-y-3">
          {[
            "Read the Cross first (positions 1–6) as a self-contained mini-story: situation, obstacle, root cause, what's fading, best-case ceiling, what's imminent.",
            "Read the Staff (positions 7–10) as the human context around that story: your mindset, your environment, your emotional stakes, and the likely direction.",
            "Scan all ten for repetition — the same suit appearing three or more times often names the real domain of the reading (emotional, financial, mental, or a matter of action), regardless of what the original question focused on.",
            "Pay special attention when Challenge (2) and Outcome (10) seem to disagree — that tension is often the single most useful insight the spread offers.",
            "Summarise the whole spread in one sentence before you finish. If you can't, the question was likely too broad, and a follow-up reading with a narrower question will read more clearly.",
          ].map((step, i) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-display text-base text-[var(--gold)]">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes with this spread" icon={ShieldQuestion}>
        <ul className="mt-2 space-y-3">
          {[
            "Asking a question so broad that no single position has anything specific to answer.",
            "Treating position 10 (Outcome) as fixed and ignoring the other nine — it's the end of a chain the earlier cards explain, not an isolated prediction.",
            "Skipping the Foundation card (3) because it feels less exciting than Outcome — it's often the card that explains why the same issue keeps recurring.",
            "Rushing straight to reversed-card interpretations before understanding each card's upright meaning in its position first.",
          ].map((m) => (
            <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
              {m}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/guide/tarot-spreads",
            label: "All tarot spreads explained",
            blurb: "From Single Card to the Celtic Cross and the twelve-card Year Ahead.",
          },
          {
            to: "/guide/tarot-for-beginners",
            label: "Complete guide to tarot for beginners",
            blurb: "Start with simpler spreads before tackling the Celtic Cross.",
          },
          {
            to: "/guide/reversed-tarot-cards",
            label: "How to interpret reversed tarot cards",
            blurb: "A practical method for reading reversals in any position.",
          },
          {
            to: "/reading",
            label: "Free AI Celtic Cross reading",
            blurb: "Draw all ten positions and get an instant, position-by-position reading.",
          },
        ]}
      />

      <CTASection
        title="Try a guided Celtic Cross reading"
        body="Draw all ten positions and get an instant, plain-language explanation of each card and how they connect."
        ctaLabel="Start a free reading"
        to="/reading"
      />
    </ArticleLayout>
  );
}

export const Route = createFileRoute("/guide/celtic-cross-guide")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "celtic cross spread",
        "celtic cross tarot guide",
        "how to read celtic cross",
        "celtic cross positions meaning",
        "ten card tarot spread",
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
              { name: "Celtic Cross Guide", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: CelticCrossGuidePage,
});
