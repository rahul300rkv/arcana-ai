import { createFileRoute } from "@tanstack/react-router";
import { ReadingLanding, type ReadingLandingConfig } from "@/components/tarot/ReadingLanding";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/one-card";
const TITLE = "One Card Tarot Reading — Free Daily Card Pull";
const DESCRIPTION =
  "Draw one tarot card for a focused, free AI-guided reading. A quick single-card pull for daily check-ins, yes/no questions, or a clear message right now.";

const CONFIG: ReadingLandingConfig = {
  path: PATH,
  spreadId: "single",
  eyebrow: "One Card Reading",
  h1: "One Card Tarot Reading",
  intro:
    "The One Card Tarot Reading is the simplest, fastest way to draw on tarot for clarity: a single card drawn against a single question or moment, interpreted upright or reversed. It's the spread most people reach for as a daily ritual, and the one we'd suggest if you're new to reading cards.",
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How a one card tarot reading works",
      paragraphs: [
        'You focus on a question or simply hold a general intention — "what do I need to know today?" is a common one — then draw a single card from the full 78-card deck. AstroFree shuffles the deck, deals the card upright or reversed, and generates a reflective interpretation that connects the card\'s traditional meaning to your question.',
        "Because there's only one position to read, there's no layout to memorise and no competing card meanings to reconcile. The card's symbolism is the entire message, which makes this spread easy to interpret even on your very first reading. Yet simplicity does not mean shallowness: focusing all your attention on one archetype often uncovers nuances that get lost inside larger ten-card layouts.",
        "Each of the 78 cards in a traditional Rider-Waite-Smith deck carries multiple layers of meaning — elemental energy (Fire, Water, Air, Earth), numerological momentum (from Aces of raw potential to Tens of culmination), and visual symbolism. With a single card pull, you have room to sit with those details rather than rushing past them to the next card.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a single card tarot reading",
      paragraphs: [
        "Reach for a single card pull when you want a quick check-in rather than a deep dive: a daily card ritual, a simple yes/no lean, or a fast read on how to approach the next few hours. It's also the right choice when your question is narrow and specific rather than sprawling across a relationship, career, or long time span — for those, a Three Card or Celtic Cross spread will usually serve you better.",
        "Many experienced readers actually prefer single-card draws for emotionally charged moments. When your mind is spinning on a single dilemma, pulling five or ten cards can multiply your anxiety instead of settling it. Drawing one clear card acts like a focal point, giving you one concrete lens through which to examine your reaction and your next small step.",
      ],
    },
    {
      id: "upright-vs-reversed",
      title: "Reading upright vs. reversed cards in a one card pull",
      paragraphs: [
        "When you draw only one card, orientation carries immediate weight. An upright card typically expresses its theme openly and externally: energy flows forward, obstacles are visible, and the card's qualities are readily available to you right now. For example, drawing The Sun upright highlights clarity, warmth, and visible progress.",
        "A reversed card in a single-card reading does not automatically mean 'bad news.' More often, it signals inward energy, a temporary delay, resistance, or an aspect of the card's lesson that needs quiet attention before it can move forward externally. A reversed Eight of Swords might point to realizing you are ready to release a self-imposed limit; a reversed Ace of Pentacles might ask you to check the practical foundations of a new plan before investing further.",
      ],
    },
    {
      id: "suit-and-rank-cues",
      title: "Reading suit & numerology cues in one card",
      paragraphs: [
        "Even before recalling a card's dictionary textbook paragraph, two quick observations unlock an accurate single-card interpretation: which suit landed (or whether it belongs to the Major Arcana), and what number from Ace to Ten it carries. Wands invite initiative, movement, and courage; Cups point toward emotional honesty or pacing your heart; Swords ask for clear thinking and boundaries; and Pentacles ground your focus in money, routines, sleep, and tangible craftsmanship.",
        "Numerologically, Aces signal a raw seed waiting to be planted, Fives bring productive disruption that forces adaptation, Sixes restore temporary harmony, and Tens mark exhaustion or completion right before a cycle resets. Reading suit + rank gives even first-time visitors immediate fluency.",
      ],
    },
    {
      id: "daily-ritual",
      title: "Building a mindful daily one-card ritual",
      paragraphs: [
        "The most rewarding way to learn tarot is consistency rather than complexity. Pulling a single card each morning over tea or coffee — and spending just two minutes noticing how its imagery mirrors what is on your mind — builds intuition far faster than memorizing flashcards. Over weeks, you begin recognizing your own recurring cards and personal patterns.",
        "Try pairing your morning pull with a single sentence in a journal: 'Today's card is [Card Name], and the theme I notice is...' At the end of the evening, glance back at the card for thirty seconds. Often a detail you overlooked at 8:00 AM — a figure's posture, a cup held out, or a stormy sky behind a calm foreground — turns out to describe the turning point of your day.",
      ],
    },
    {
      id: "sample-questions",
      title: "Best questions for a one card tarot reading",
      paragraphs: [
        "Open, grounded questions consistently yield richer single-card insights than anxious, predictive ones. Instead of asking 'Will everything go wrong this week?', try asking 'What mindset will serve me best in today's meeting?', 'What am I overlooking in this conversation?', or 'Where should I direct my energy before the day ends?'",
        "If you want to explore a yes-or-no dilemma, frame it clearly without hedging ('Should I send this message today?'), and pay attention not just to the lean of the card, but to the reasoning behind it. Even a single Minor Arcana card can point directly to timing, communication, or boundaries.",
      ],
    },
  ],
  samplePull: {
    question: "What posture will help me navigate a difficult conversation with my teammate today?",
    positions: [
      {
        position: "Position 1 · Core Message",
        card: "Queen of Cups (Upright)",
        reading:
          "Queen of Cups combines emotional steadiness with clear inner boundaries. Rather than reacting defensively or absorbing someone else's urgency as your own panic, the card advises listening deeply first while staying anchored in your own calm center. Notice what is left unsaid in their tone without rushing to fix discomfort prematurely.",
      },
    ],
    synthesis:
      "Lead with empathy, not urgency: pause two seconds before replying in today's discussion, validate what you actually hear, and state your boundary gently in one clear sentence.",
  },
  faqs: [
    {
      question: "How is a one card tarot reading different from a daily card?",
      answer:
        'They\'re the same mechanic — a single card drawn and interpreted. "Daily card" usually refers to doing this once a day as a ritual, while a one card reading can be drawn any time you have a specific question.',
    },
    {
      question: "Can I ask a yes or no question with one card?",
      answer:
        "Yes — a single card is commonly used for yes/no questions, reading upright cards as generally favourable and reversed cards as cautionary, alongside the card's specific meaning. For a reading framed explicitly around a yes/no question, see our Yes or No Tarot Reading.",
    },
    {
      question: "Is the interpretation the same every time I draw the same card?",
      answer:
        "The card's core meaning stays consistent, but AstroFree's AI interpretation weaves in the specific question you ask, so the guidance adapts even when the card repeats.",
    },
    {
      question: "Should I draw a second clarifier card if I don't understand the first?",
      answer:
        "Before pulling another card, sit with the first card for a minute and read both its keywords and its visual imagery. Often an unfamiliar card feels confusing simply because it challenges what we hoped to hear. If you genuinely want more context around timelines or influences, switch to a Three Card spread rather than stacking random clarifiers.",
    },
    {
      question: "What does it mean if the same single card follows me across multiple days?",
      answer:
        "Repeating cards are common in reflective practice and usually point to an unresolved theme or persistent mindset that deserves closer attention. Rather than treating repetition as fate, view it as an invitation to revisit what that archetype asks of you right now.",
    },
  ],
  relatedCards: [
    {
      slug: "the-fool",
      name: "The Fool",
      subtitle: "New beginnings, a leap of faith",
      base: "/tarot/$slug",
    },
    {
      slug: "the-sun",
      name: "The Sun",
      subtitle: "Clarity, joy, positive outcomes",
      base: "/tarot/$slug",
    },
    {
      slug: "the-star",
      name: "The Star",
      subtitle: "Hope, renewal, quiet optimism",
      base: "/tarot/$slug",
    },
    {
      slug: "the-moon",
      name: "The Moon",
      subtitle: "Uncertainty, intuition, illusion",
      base: "/tarot/$slug",
    },
  ],
  relatedLinks: [
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/three-card",
      label: "Three Card Reading",
      blurb: "See how a situation moves from past to future.",
    },
    {
      to: "/guide/tarot-for-beginners",
      label: "Tarot for beginners",
      blurb: "Start with the foundations of reading cards.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
  ],
  ctaLabel: "Draw your card",
};

export const Route = createFileRoute("/tarot/one-card")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "one card tarot reading",
        "single card tarot reading",
        "one card tarot",
        "daily tarot card",
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
              { name: "One Card Reading", path: PATH },
            ],
            faqs: CONFIG.faqs,
          }),
        ),
      },
    ],
  }),
  component: () => <ReadingLanding config={CONFIG} />,
});
