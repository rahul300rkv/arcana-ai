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
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How the career reading works",
      paragraphs: [
        "Four cards are drawn into four structured positions: Where You Are (your current professional stance), Challenge (what is creating friction or holding momentum back), Advice (the practical posture or mindset most likely to unlock progress), and Outcome (where the trajectory leads if you apply that guidance).",
        "Because the layout moves deliberately from diagnosis to strategy, the reading concludes with something constructive you can act on rather than leaving you with vague observations about workplace stress.",
        "AstroFree's AI interpretation connects each card directly to your stated work context — whether you are preparing for an interview, considering an industry pivot, negotiating responsibilities, or deciding whether to launch an independent venture.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a career tarot reading",
      paragraphs: [
        "This spread fits any work, study, or vocational question: weighing a job offer, navigating tension with a manager or co-founder, diagnosing creative burnout, or checking whether a side project is ready to scale. For broader questions about personal growth or identity outside work, the Three Card or Celtic Cross spread may give you a wider frame.",
        "As with every reading on AstroFree, career tarot is a strategic reflection tool, not financial or legal counsel. Treat the Advice and Outcome cards as structured prompts to challenge blind spots alongside real market research and trusted mentors.",
      ],
    },
    {
      id: "four-positions-career",
      title: "Breaking down the four career positions",
      paragraphs: [
        "Position 1 (Where You Are) often reveals an inner reality you haven't admitted yet — perhaps you look successful on paper (Nine of Pentacles) while feeling quietly restless (Four of Cups). Naming your starting point honestly makes every decision afterward clearer.",
        "Position 2 (Challenge) distinguishes external obstacles (budget freezes, rigid hierarchy) from internal blockers (imposter syndrome, perfectionism, fear of visibility). Position 3 (Advice) then offers a direct counterweight, and Position 4 (Outcome) previews the realistic direction of that adjusted path.",
      ],
    },
    {
      id: "suits-at-work",
      title: "What the four tarot suits mean in a career spread",
      paragraphs: [
        "Every suit maps cleanly onto real workplace dynamics. Pentacles govern income, craft, steady skill-building, and long-term security — cards like Eight of Pentacles or Three of Pentacles celebrate mastery and reliable teamwork. Wands represent ambition, entrepreneurship, leadership energy, and creative drive.",
        "Swords highlight strategy, contracts, intellectual problem-solving, and clear communication — though reversed Swords can warn against burnout from overthinking. Cups reflect workplace culture, purpose, fulfillment, and how emotionally nourished you feel by what you build every day.",
      ],
    },
    {
      id: "practical-next-steps",
      title: "Turning tarot insight into concrete work action",
      paragraphs: [
        "Once you finish reading your spread, translate the Advice card into one small action within 48 hours. If The Magician appears in Advice, update your portfolio or pitch the idea you've been sitting on; if Four of Swords shows up, protect an uninterrupted evening of rest before making any major resignation or contract call.",
        "Pairing your Career Tarot Reading with your Personal Year number in our Numerology Calculator can also illuminate timing — showing whether this year favors bold expansion (Personal Year 1 or 5) or patient consolidation (Personal Year 4 or 7).",
      ],
    },
  ],
  samplePull: {
    question: "Should I apply for the senior product lead opening or focus on deepening my current specialist role?",
    positions: [
      {
        position: "1 · Where You Are",
        card: "Eight of Pentacles (Upright)",
        reading:
          "You have built rock-solid technical credibility through disciplined daily craft. Colleagues already rely on your thoroughness, which gives you strong leverage no matter which route you choose.",
      },
      {
        position: "2 · Challenge",
        card: "Six of Swords (Reversed)",
        reading:
          "The friction comes from hesitation about leaving familiar territory — lingering comfort and fear of unfamiliar stakeholder politics make transition feel heavier than it actually is.",
      },
      {
        position: "3 · Advice",
        card: "Knight of Wands (Upright)",
        reading:
          "Step forward with bold curiosity and showcase your vision publicly instead of waiting passively for someone to tap you on the shoulder.",
      },
      {
        position: "4 · Outcome",
        card: "Six of Wands (Upright)",
        reading:
          "Putting your hat in the ring brings visible recognition and restored confidence in your trajectory, reinforcing that your growth depends on embracing larger visibility.",
      },
    ],
    synthesis:
      "Your skills (Eight of Pentacles) are already ready; the real bottleneck is hesitation around transitioning (Six of Swords Reversed). Prepare a concise case study of three wins and submit the application this week.",
  },
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
    {
      question: "What if I draw Ten of Wands or Five of Pentacles in a career spread?",
      answer:
        "Those cards rarely predict permanent failure — instead, they highlight overcommitment, under-compensation, or carrying responsibilities that belong elsewhere. In Advice or Challenge, they nudge you to delegate, renegotiate boundaries, or ask for support.",
    },
    {
      question: "Can students or job-seekers use the career tarot spread?",
      answer:
        "Yes. Whether you are choosing an academic track, returning to work after a break, or interviewing after a layoff, the four positions adapt naturally to learning, preparation, and next steps.",
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
            published: CONFIG.published,
            updated: CONFIG.updated,
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
