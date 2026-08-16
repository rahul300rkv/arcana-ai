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
  sections: [
    {
      id: "how-it-works",
      title: "How a yes or no tarot reading works",
      paragraphs: [
        'Phrase your question so it genuinely has a yes/no answer — "should I take this job?" reads differently than "what should I do about this job?" — then draw a single card. Traditionally, upright cards lean toward yes and reversed cards lean toward no, though the specific card always matters more than orientation alone: The Tower upright is still a caution, and The Star reversed is still gentler than most reversed cards.',
        'AstroFree\'s interpretation doesn\'t just output "yes" or "no" — it explains the reasoning behind the lean using the card\'s actual symbolism, so you understand why, not just what.',
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a yes/no tarot pull",
      paragraphs: [
        'This spread works best for quick, binary questions where you want a fast directional read rather than nuance — "is now a good time to reach out?" or "should I go?" For questions that need more context or involve weighing two real options, the Decision spread or a Three Card Reading will serve you better than forcing a yes/no framing.',
      ],
    },
  ],
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
            updated: "2026-08-16",
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
