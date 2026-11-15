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
  sections: [
    {
      id: "how-it-works",
      title: "How a one card tarot reading works",
      paragraphs: [
        'You focus on a question or simply hold a general intention — "what do I need to know today?" is a common one — then draw a single card from the full 78-card deck. AstroFree shuffles the deck, deals the card upright or reversed, and generates a reflective interpretation that connects the card\'s traditional meaning to your question.',
        "Because there's only one position to read, there's no layout to memorise and no competing card meanings to reconcile. The card's symbolism is the entire message, which makes this spread easy to interpret even on your very first reading.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a single card tarot reading",
      paragraphs: [
        "Reach for a single card pull when you want a quick check-in rather than a deep dive: a daily card ritual, a simple yes/no lean, or a fast read on how to approach the next few hours. It's also the right choice when your question is narrow and specific rather than sprawling across a relationship, career, or long time span — for those, a Three Card or Celtic Cross spread will usually serve you better.",
      ],
    },
  ],
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
            updated: "2026-08-16",
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
