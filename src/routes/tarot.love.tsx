import { createFileRoute } from "@tanstack/react-router";
import { ReadingLanding, type ReadingLandingConfig } from "@/components/tarot/ReadingLanding";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/love";
const TITLE = "Love Tarot Reading — Free Relationship Tarot";
const DESCRIPTION =
  "Free love tarot reading: draw four cards for You, Partner, The Relationship, and Future to explore the dynamics between you and someone else — AI-guided and always free.";

const CONFIG: ReadingLandingConfig = {
  path: PATH,
  spreadId: "love",
  eyebrow: "Love Reading",
  h1: "Love Tarot Reading",
  intro:
    "The Love Tarot Reading lays out four cards — You, Partner, The Relationship, and Future — to illuminate the dynamics between you and another person, whether that's an existing relationship, a situationship, or someone you're still figuring out.",
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How the love reading works",
      paragraphs: [
        "Four cards are drawn into four distinct positions: your own energy in the connection (You), the other person's energy as reflected through the cards (Partner), the shared dynamic between you (The Relationship), and where the bond appears to be heading (Future). Reading both people's positions side by side — rather than focusing solely on one person — is what makes this spread genuinely clarifying for interpersonal questions.",
        "AstroFree's AI interpretation reads each position against your stated question, notes whether cards appear upright or reversed, and then closes with a synthesis that names the relational pattern running through all four cards together.",
        "Sometimes the contrast between Position 1 (You) and Position 2 (Partner) explains everything. One person might draw an open, emotional Cups card while the other draws a cautious, defensive Swords card — revealing a mismatch in communication style or pacing rather than a lack of feeling.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a relationship tarot reading",
      paragraphs: [
        "This spread fits any question involving another person's energy alongside your own — a new connection you're unsure about, a long-term partnership moving through a quiet or strained chapter, or a question about whether to initiate an honest conversation. It's less suited to purely individual career or personal habit questions, where our Career Reading or Three Card spread reads more accurately.",
        "A love reading reflects emotional patterns and relational dynamics, never a guaranteed fate. Tarot cannot override another person's choices or promise what someone else will decide tomorrow; instead, it offers a calm mirror so you can see your own expectations, boundaries, and needs clearly.",
      ],
    },
    {
      id: "four-positions",
      title: "Understanding each of the four relationship positions",
      paragraphs: [
        "Position 1 (You) shows what you are actively bringing into the bond — your hopes, emotional bandwidth, or unspoken fears. Position 2 (Partner) highlights the energy or posture the other person is displaying from your vantage point, whether that is enthusiasm, hesitation, distraction, or quiet care.",
        "Position 3 (The Relationship) captures the 'third entity' you create together: the tone of your communication, shared values, or recurring friction. Finally, Position 4 (Future) maps the likely evolution of that shared dynamic if both people continue showing up in the same way.",
      ],
    },
    {
      id: "suits-in-love",
      title: "How the four tarot suits speak in love readings",
      paragraphs: [
        "While everyone watches for iconic romance cards like The Lovers or Two of Cups, every suit reveals something vital about connection. Cups reflect emotional openness, tenderness, and vulnerability; Wands show chemistry, passion, and shared excitement; Pentacles point toward reliability, long-term commitment, and day-to-day stability; and Swords highlight honest dialogue, mental clarity, or unresolved doubts.",
        "Notice too that traditionally 'challenging' cards like Five of Cups or Three of Swords do not automatically doom a relationship. In reflective readings, they frequently mark grief that needs acknowledgment or an old pattern of guarding your heart that is finally ready to heal.",
      ],
    },
    {
      id: "healthy-questions",
      title: "Asking grounded, empowering relationship questions",
      paragraphs: [
        "The most transformative love readings focus on clarity and agency rather than mind-reading. Questions such as 'What does this connection need from me right now?', 'Where are we misunderstanding each other?', or 'How can I approach this conversation honestly?' give you insights you can act on immediately.",
        "Try to avoid pulling repeated spreads out of anxiety every few hours about the same text message or silence. Give a relationship spread room to breathe, reflect on what Position 1 and Position 3 showed you, and let real-world communication do the rest.",
      ],
    },
  ],
  samplePull: {
    question: "Why does communication feel guarded between us lately, and how can we soften it?",
    positions: [
      {
        position: "1 · You",
        card: "Page of Cups (Upright)",
        reading:
          "You are genuinely open to tenderness, heartfelt conversation, and restarting on a softer note, even if you feel slightly vulnerable initiating it first.",
      },
      {
        position: "2 · Partner",
        card: "Four of Pentacles (Reversed)",
        reading:
          "The other person appears to be releasing an old habit of holding feelings tightly behind defensive control, though doing so still feels unfamiliar and awkward.",
      },
      {
        position: "3 · The Relationship",
        card: "Two of Swords (Upright)",
        reading:
          "Between you sits an unspoken stalemate — both sides avoiding a direct question for fear of saying the wrong thing and tipping the delicate balance.",
      },
      {
        position: "4 · Future",
        card: "Temperance (Upright)",
        reading:
          "Patient, low-stakes dialogue restores steady emotional reciprocity over time once neither person demands an instant all-or-nothing resolution.",
      },
    ],
    synthesis:
      "No lack of care is visible here — the stalemate in Position 3 stems from mutual caution rather than coldness. Open one calm, low-pressure conversation focused on listening rather than fixing everything in one sitting.",
  },
  faqs: [
    {
      question: "Can a love tarot reading tell me if someone likes me?",
      answer:
        "It can offer a reflective read on the energy between you, but tarot describes patterns and possibilities, not certainties — it isn't a substitute for an honest conversation with the person.",
    },
    {
      question: "What if I'm not currently in a relationship?",
      answer:
        "The spread still works for a situationship, a crush, or someone you're considering reconnecting with — just set your intention around that specific connection before drawing.",
    },
    {
      question: "Is this reading appropriate for a breakup or divorce question?",
      answer:
        "Yes, many people use it that way — set your question around the relationship's current state or path forward rather than framing it as You vs Partner in conflict.",
    },
    {
      question: "Does drawing The Tower or Death in a love reading mean a breakup?",
      answer:
        "Not necessarily. In relationship spreads, Death almost always symbolizes a necessary transformation — leaving behind an outdated dynamic so a more honest chapter can begin — while The Tower often marks a sudden breakthrough conversation that clears stagnant air.",
    },
    {
      question: "Can I use the Love spread for friendships or family dynamics?",
      answer:
        "Yes. Any close interpersonal bond — a close friend, sibling, or creative collaborator — maps cleanly onto You, Them, The Bond, and Future.",
    },
  ],
  relatedCards: [
    {
      slug: "the-lovers",
      name: "The Lovers",
      subtitle: "Connection, choice, union",
      base: "/tarot/$slug",
    },
    {
      slug: "two-of-cups",
      name: "Two of Cups",
      subtitle: "Mutual attraction, partnership",
      base: "/tarot/$slug",
    },
    {
      slug: "ten-of-cups",
      name: "Ten of Cups",
      subtitle: "Lasting happiness, harmony",
      base: "/tarot/$slug",
    },
    {
      slug: "the-tower",
      name: "The Tower",
      subtitle: "Sudden change, upheaval, truth",
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
      to: "/tarot/career",
      label: "Career Reading",
      blurb: "Get clarity on work and direction with the same 4-card structure.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/guide/tarot-card-meanings",
      label: "Tarot card meanings guide",
      blurb: "Quick-reference every card's upright and reversed meaning.",
    },
  ],
  ctaLabel: "Start your love reading",
};

export const Route = createFileRoute("/tarot/love")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "love tarot reading",
        "love tarot",
        "relationship tarot reading",
        "free love tarot",
        "tarot for relationships",
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
              { name: "Love Reading", path: PATH },
            ],
            faqs: CONFIG.faqs,
          }),
        ),
      },
    ],
  }),
  component: () => <ReadingLanding config={CONFIG} />,
});
