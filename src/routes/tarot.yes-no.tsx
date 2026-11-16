import { createFileRoute } from "@tanstack/react-router";
import { ReadingLanding, type ReadingLandingConfig } from "@/components/tarot/ReadingLanding";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/yes-no";
const TITLE = "Yes or No Tarot Reading — Free Instant Answer";
const DESCRIPTION =
  "Free yes or no tarot reading: draw a single card and get a clear yes, no, or maybe lean, plus an AI-guided explanation of why — always free, no signup.";

const CONFIG: ReadingLandingConfig = {
  path: PATH,
  spreadId: "single",
  eyebrow: "Yes or No Reading",
  h1: "Yes or No Tarot Reading",
  intro:
    "The Yes or No Tarot Reading uses a single card, drawn upright or reversed, to give a clear lean on a direct question. It's the same single-card mechanic as our One Card Reading, framed specifically around questions that have a yes/no shape rather than an open-ended one.",
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How a yes or no tarot reading works",
      paragraphs: [
        'Phrase your question so it genuinely has a yes/no shape — "should I take this role?" reads much more cleanly than "what should I do about my career?" — then draw a single card from the 78-card deck. Traditionally, upright cards lean toward yes and reversed cards lean toward no or "not yet," though the card\'s actual archetype always outweighs orientation alone.',
        "For instance, The Tower upright is still a signal to pause and examine unstable foundations, while The Star reversed may simply mean yes, provided you rebuild confidence first rather than rushing ahead.",
        'AstroFree\'s interpretation does not flatten tarot into a sterile coin flip. Instead of outputting a bare "yes" or "no," the reading explains the reasoning behind the directional lean using the card\'s symbolism, element, and timing cues so you understand the condition underneath the answer.',
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a yes/no tarot pull",
      paragraphs: [
        'This spread works best for direct, timely questions where you want a quick directional read rather than a sweeping analysis — "is this week a good moment to pitch my idea?" or "should I attend this event?" For decisions involving two competing choices or deep emotional history, the Three Card Reading or Celtic Cross spread gives you the context a binary answer leaves out.',
        "A yes/no pull is also surprisingly helpful as a gut-check mirror: notice your instant emotional reaction the moment the card flips. If you draw a cautious 'no' and feel quietly relieved, your intuition already knew your true answer before you shuffled.",
      ],
    },
    {
      id: "yes-no-maybe-spectrum",
      title: "Understanding Yes, No, and Conditional 'Maybe' cards",
      paragraphs: [
        "Experienced readers view yes/no tarot across a three-part spectrum rather than strict absolutes. Cards of expansion, clarity, and fruition — such as The Sun, Ace of Wands, Six of Wands, Nine of Cups, or Ten of Pentacles — naturally carry an enthusiastic 'Yes' lean when upright.",
        "Cards associated with illusion, inner conflict, or suspension — like The Moon, Two of Swords, Seven of Cups, or The Hanged Man — commonly signal 'Maybe' or 'Wait for clearer facts.' Meanwhile, cards of sharp friction or depletion (Three of Swords, Five of Pentacles, Ten of Swords) or reversed momentum typically urge a protective 'No' or suggest changing your timing before acting.",
      ],
    },
    {
      id: "major-vs-minor-weight",
      title: "Major Arcana gravity vs. Minor Arcana timing",
      paragraphs: [
        "Pay close attention to whether your yes/no pull lands on a Major Arcana card or a Minor Arcana card. Major Arcana cards carry long-range archetypal weight: drawing Judgement or The Wheel of Fortune suggests the question touches a significant turning point or deeper personal lesson.",
        "Minor Arcana cards speak to everyday practicality and faster-moving circumstances. An upright Knight of Wands says 'move swiftly while enthusiasm is high,' whereas an upright Four of Pentacles suggests holding your resources steady rather than spending or committing impulsively.",
      ],
    },
    {
      id: "framing-questions",
      title: "How to phrase clear yes or no questions",
      paragraphs: [
        "Avoid double-barreled or negative questions like 'Should I quit my job or stay until December?' — a single card cannot answer two different paths at once. Split compound questions into one clear proposition, such as 'Is leaving this role in the next month aligned with my growth?'",
        "Equally important: avoid health diagnoses, legal outcomes, or high-stakes financial wagers. Treat a yes or no tarot draw as a thoughtful sounding board that clarifies your own priorities rather than a substitute for real-world verification.",
      ],
    },
  ],
  samplePull: {
    question: "Is this month the right time to propose my new workflow idea at work?",
    positions: [
      {
        position: "Single Card · Directional Lean",
        card: "Seven of Pentacles (Upright) — Conditional Yes",
        reading:
          "Seven of Pentacles leans yes, but with a patient, measured tempo. The groundwork you already invested is bearing quiet fruit; however, rushing a half-finished pitch tomorrow could undersell the value. Take one more week to gather concrete metrics before presenting.",
      },
    ],
    synthesis:
      "Directional answer: Conditional Yes — prepare your supporting data carefully, then pitch from a position of calm patience rather than urgency.",
  },
  faqs: [
    {
      question: "How accurate is a yes or no tarot reading?",
      answer:
        "Tarot doesn't predict outcomes with certainty — it reflects patterns and energy connected to your question. Treat the yes/no lean as a prompt for your own judgement, not a guaranteed forecast.",
    },
    {
      question: "What if I get a card that doesn't clearly mean yes or no?",
      answer:
        'Some cards are genuinely ambiguous by design — that\'s often the most useful answer, pointing to a "maybe, depending on X" rather than a clean binary. The written interpretation will explain the nuance.',
    },
    {
      question: "Can I ask the same yes/no question twice?",
      answer:
        "You can, but re-asking the same question repeatedly until you get the answer you want defeats the purpose of the reflection. If the question still feels unresolved, try reframing it instead.",
    },
    {
      question: "Do reversed cards always mean 'No' in a yes or no reading?",
      answer:
        "Not always. While reversals often indicate delay, blockage, or a cautionary 'no,' positive cards like The Sun or The Empress reversed may instead point to a quiet 'yes, once you slow down or address an internal block.'",
    },
    {
      question: "Why not just flip a coin instead of drawing a tarot card?",
      answer:
        "A coin only gives heads or tails without context. A tarot card pairs directional momentum with rich symbolism — showing you why a path feels aligned or what hidden obstacle deserves attention before you decide.",
    },
  ],
  relatedCards: [
    { slug: "the-sun", name: "The Sun", subtitle: "A strong, clear yes", base: "/tarot/$slug" },
    {
      slug: "the-tower",
      name: "The Tower",
      subtitle: "A caution, often a no",
      base: "/tarot/$slug",
    },
    {
      slug: "the-moon",
      name: "The Moon",
      subtitle: "Unclear — more information needed",
      base: "/tarot/$slug",
    },
    { slug: "the-star", name: "The Star", subtitle: "A hopeful, gentle yes", base: "/tarot/$slug" },
  ],
  relatedLinks: [
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/one-card",
      label: "One Card Reading",
      blurb: "The same single-card pull, framed for open-ended questions.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/guide/tarot-card-meanings",
      label: "Tarot card meanings guide",
      blurb: "Check every card's yes/no leaning at a glance.",
    },
  ],
  ctaLabel: "Get your yes or no",
};

export const Route = createFileRoute("/tarot/yes-no")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "yes or no tarot reading",
        "yes no tarot",
        "yes/no tarot",
        "tarot yes or no answer",
        "free tarot reading",
      ],
    }),
    links: [{ rel: "canonical", href: `https://astrofree.vercel.app${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            published: CONFIG.published,
            updated: CONFIG.updated,
            crumbs: [
              { name: "Tarot", path: "/tarot" },
              { name: "Yes or No Reading", path: PATH },
            ],
            faqs: CONFIG.faqs,
          }),
        ),
      },
    ],
  }),
  component: () => <ReadingLanding config={CONFIG} />,
});
