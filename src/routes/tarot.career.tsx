import { createFileRoute } from "@tanstack/react-router";
import { ReadingLanding, type ReadingLandingConfig } from "@/components/tarot/ReadingLanding";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/career";
const TITLE = "Career Tarot Reading — Free Work & Path Guidance";
const DESCRIPTION =
  "Free career tarot reading: draw four cards for Where You Are, Challenge, Advice, and Outcome to get AI-guided clarity on your work, path, or calling.";

const CONFIG: ReadingLandingConfig = {
  path: PATH,
  spreadId: "career",
  eyebrow: "Career Reading",
  h1: "Career Tarot Reading",
  intro:
    "The Career Tarot Reading lays out four cards — Where You Are, Challenge, Advice, and Outcome — to bring clarity to work decisions: a stuck project, a job change you're weighing, or a general sense that your current path doesn't quite fit anymore.",
  sections: [
    {
      id: "how-it-works",
      title: "How the career reading works",
      paragraphs: [
        "Four cards are drawn into four positions: your current position at work, what's holding you back, how to move forward, and where the situation is likely heading if you take that advice. The structure moves from diagnosis to action, so the reading ends with something you can actually act on rather than just a description of where you stand.",
        "AstroFree's AI interpretation ties each card to your specific question — a promotion, a resignation, a business decision — rather than giving generic career platitudes.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a career tarot reading",
      paragraphs: [
        "This spread fits any work-related question: whether to take a new role, how to handle a difficult colleague or manager, whether now is the right time to start something on your own, or simply feeling stuck and wanting a different angle on the situation. For a broader life-direction question that isn't specifically about work, the Three Card Reading may fit better.",
        "As with every reading here, this is a reflective tool, not financial or career advice — treat the Advice and Outcome positions as prompts to think through, not instructions to follow blindly.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can a career tarot reading tell me if I'll get a job or promotion?",
      answer:
        "No — it reflects the energy and patterns around your current path, not a guaranteed outcome. Use the Outcome card as a likely direction if things continue as they are, not a certainty.",
    },
    {
      question: "Is this reading suitable for business or entrepreneurship questions?",
      answer:
        'Yes, the same four positions work well for business decisions — treat "Where you are" as your business\'s current state and "Outcome" as where that path is heading.',
    },
    {
      question: "How specific should my career question be?",
      answer:
        'More specific tends to give a more useful reading. "Should I leave my current job for the offer I received?" will read more clearly than a broad "what should I do with my career?"',
    },
  ],
  relatedCards: [
    {
      slug: "the-emperor",
      name: "The Emperor",
      subtitle: "Structure, authority, discipline",
      base: "/tarot/$slug",
    },
    {
      slug: "eight-of-pentacles",
      name: "Eight of Pentacles",
      subtitle: "Skill-building, diligence",
      base: "/tarot/$slug",
    },
    {
      slug: "ten-of-wands",
      name: "Ten of Wands",
      subtitle: "Overload, burnout, burden",
      base: "/tarot/$slug",
    },
    {
      slug: "the-magician",
      name: "The Magician",
      subtitle: "Resourcefulness, new ventures",
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
      blurb: "See a broader arc across past, present, and future.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/numerology",
      label: "Numerology Calculator",
      blurb: "Pair your reading with your Personal Year forecast.",
    },
  ],
  ctaLabel: "Start your career reading",
};

export const Route = createFileRoute("/tarot/career")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "career tarot reading",
        "career tarot",
        "tarot for career",
        "work tarot reading",
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
              { name: "Career Reading", path: PATH },
            ],
            faqs: CONFIG.faqs,
          }),
        ),
      },
    ],
  }),
  component: () => <ReadingLanding config={CONFIG} />,
});
