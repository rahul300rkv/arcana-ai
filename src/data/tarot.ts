import { DECK } from "@/lib/tarot/engine";
import type { TarotCard } from "@/lib/tarot/types";
import { UNIQUE_CARD_COPY } from "./tarot-cards";

/**
 * Structured content layer for the 78 `/tarot/[slug]` pages.
 *
 * Each card draws its Rider-Waite-Smith imagery, upright/reversed nuances,
 * domain readings, timeline angles, prompts, and FAQs from unique per-card
 * editorial essays in `src/data/tarot-cards/`, combined with structured card
 * metadata from `src/data/cards/deck.json` and astronomical correspondences.
 */

export type YesNo = "yes" | "no" | "maybe";

export interface TarotFaq {
  question: string;
  answer: string;
}

export interface TarotPage {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  keywords: string[];
  image: string;
  /** "Major Arcana" | "Minor Arcana" */
  arcanaLabel: string;
  arcana: "major" | "minor";
  suit: string | null;
  suitLabel: string;
  numberLabel: string;
  element: string;
  planet: string;
  zodiac: string;
  archetype: string;
  cardKeywords: string[];
  overview: string[];
  upright: string[];
  reversed: string[];
  love: string[];
  career: string[];
  finance: string[];
  health: string[];
  spiritual: string[];
  yesNo: YesNo;
  yesNoText: string;
  timeline: { label: string; text: string }[];
  advice: string[];
  journalPrompts: string[];
  meditation: string;
  affirmation: string;
  relatedSlugs: string[];
  faqs: TarotFaq[];
  wordCount: number;
  readingMinutes: number;
  updated: string;
}

/** Last editorial review date for the tarot library (page-specific, not build time). */
const TAROT_UPDATED = "2026-08-04";

const SUIT_LABEL: Record<string, string> = {
  wands: "Suit of Wands",
  cups: "Suit of Cups",
  swords: "Suit of Swords",
  pentacles: "Suit of Pentacles",
};

const SUIT_ELEMENT: Record<string, string> = {
  wands: "Fire",
  cups: "Water",
  swords: "Air",
  pentacles: "Earth",
};

const SUIT_SIGNS: Record<string, string[]> = {
  wands: ["Aries", "Leo", "Sagittarius"],
  cups: ["Cancer", "Scorpio", "Pisces"],
  swords: ["Gemini", "Libra", "Aquarius"],
  pentacles: ["Taurus", "Virgo", "Capricorn"],
};

/** Golden Dawn decan attributions for the pip cards 2–10. */
const DECAN: Record<string, Record<number, [string, string]>> = {
  wands: {
    2: ["Mars", "Aries"],
    3: ["Sun", "Aries"],
    4: ["Venus", "Aries"],
    5: ["Saturn", "Leo"],
    6: ["Jupiter", "Leo"],
    7: ["Mars", "Leo"],
    8: ["Mercury", "Sagittarius"],
    9: ["Moon", "Sagittarius"],
    10: ["Saturn", "Sagittarius"],
  },
  cups: {
    2: ["Venus", "Cancer"],
    3: ["Mercury", "Cancer"],
    4: ["Moon", "Cancer"],
    5: ["Mars", "Scorpio"],
    6: ["Sun", "Scorpio"],
    7: ["Venus", "Scorpio"],
    8: ["Saturn", "Pisces"],
    9: ["Jupiter", "Pisces"],
    10: ["Mars", "Pisces"],
  },
  swords: {
    2: ["Moon", "Libra"],
    3: ["Saturn", "Libra"],
    4: ["Jupiter", "Libra"],
    5: ["Venus", "Aquarius"],
    6: ["Mercury", "Aquarius"],
    7: ["Moon", "Aquarius"],
    8: ["Jupiter", "Gemini"],
    9: ["Mars", "Gemini"],
    10: ["Sun", "Gemini"],
  },
  pentacles: {
    2: ["Jupiter", "Capricorn"],
    3: ["Mars", "Capricorn"],
    4: ["Sun", "Capricorn"],
    5: ["Mercury", "Taurus"],
    6: ["Moon", "Taurus"],
    7: ["Saturn", "Taurus"],
    8: ["Sun", "Virgo"],
    9: ["Venus", "Virgo"],
    10: ["Mercury", "Virgo"],
  },
};

interface MajorAttribution {
  planet: string;
  zodiac: string;
  element: string;
  archetype: string;
}

const MAJOR: Record<number, MajorAttribution> = {
  0: { planet: "Uranus", zodiac: "Aquarius", element: "Air", archetype: "The Innocent" },
  1: { planet: "Mercury", zodiac: "Gemini", element: "Air", archetype: "The Creator" },
  2: { planet: "Moon", zodiac: "Cancer", element: "Water", archetype: "The Oracle" },
  3: { planet: "Venus", zodiac: "Taurus", element: "Earth", archetype: "The Mother" },
  4: { planet: "Mars", zodiac: "Aries", element: "Fire", archetype: "The Ruler" },
  5: { planet: "Venus", zodiac: "Taurus", element: "Earth", archetype: "The Teacher" },
  6: { planet: "Mercury", zodiac: "Gemini", element: "Air", archetype: "The Union" },
  7: { planet: "Moon", zodiac: "Cancer", element: "Water", archetype: "The Victor" },
  8: { planet: "Sun", zodiac: "Leo", element: "Fire", archetype: "The Tamer" },
  9: { planet: "Mercury", zodiac: "Virgo", element: "Earth", archetype: "The Sage" },
  10: { planet: "Jupiter", zodiac: "Sagittarius", element: "Fire", archetype: "The Turning" },
  11: { planet: "Venus", zodiac: "Libra", element: "Air", archetype: "The Judge" },
  12: { planet: "Neptune", zodiac: "Pisces", element: "Water", archetype: "The Surrender" },
  13: { planet: "Pluto", zodiac: "Scorpio", element: "Water", archetype: "The Transformer" },
  14: { planet: "Jupiter", zodiac: "Sagittarius", element: "Fire", archetype: "The Alchemist" },
  15: { planet: "Saturn", zodiac: "Capricorn", element: "Earth", archetype: "The Shadow" },
  16: { planet: "Mars", zodiac: "Aries", element: "Fire", archetype: "The Awakening" },
  17: { planet: "Uranus", zodiac: "Aquarius", element: "Air", archetype: "The Hope" },
  18: { planet: "Neptune", zodiac: "Pisces", element: "Water", archetype: "The Dreamer" },
  19: { planet: "Sun", zodiac: "Leo", element: "Fire", archetype: "The Radiance" },
  20: { planet: "Pluto", zodiac: "Scorpio", element: "Water", archetype: "The Reckoning" },
  21: { planet: "Saturn", zodiac: "Capricorn", element: "Earth", archetype: "The Completion" },
};

const COURT_RANK: Record<string, { label: string; index: number }> = {
  page: { label: "Page", index: 11 },
  knight: { label: "Knight", index: 12 },
  queen: { label: "Queen", index: 13 },
  king: { label: "King", index: 14 },
};

/** Cards that answer clearly one way in a yes/no pull. Everything else is conditional. */
const YES_IDS = new Set([
  "major-00", "major-01", "major-03", "major-04", "major-06", "major-07", "major-08",
  "major-10", "major-14", "major-17", "major-19", "major-20", "major-21",
  "wands-ace", "wands-three", "wands-four", "wands-six", "wands-eight",
  "cups-ace", "cups-two", "cups-three", "cups-six", "cups-nine", "cups-ten",
  "swords-ace", "swords-six",
  "pentacles-ace", "pentacles-three", "pentacles-six", "pentacles-eight",
  "pentacles-nine", "pentacles-ten",
]);

const NO_IDS = new Set([
  "major-12", "major-13", "major-15", "major-16", "major-18",
  "wands-five", "wands-seven", "wands-ten",
  "cups-five", "cups-eight",
  "swords-three", "swords-five", "swords-seven", "swords-eight", "swords-nine", "swords-ten",
  "pentacles-five",
]);

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
}

function rankOf(card: TarotCard): string | null {
  const tail = card.id.split("-")[1];
  return tail in COURT_RANK ? tail : null;
}

interface Attribution {
  element: string;
  planet: string;
  zodiac: string;
  archetype: string;
  numberLabel: string;
}

function attributionFor(card: TarotCard): Attribution {
  if (card.arcana === "major") {
    const m = MAJOR[card.number];
    return {
      element: m.element,
      planet: m.planet,
      zodiac: m.zodiac,
      archetype: m.archetype,
      numberLabel: `${card.number} — ${ordinal(card.number + 1)} card of the Major Arcana`,
    };
  }

  const suit = card.suit as string;
  const element = SUIT_ELEMENT[suit];
  const rank = rankOf(card);

  if (rank) {
    const court = COURT_RANK[rank];
    const signs = SUIT_SIGNS[suit];
    const zodiac =
      rank === "page" ? signs.join(", ") : signs[court.index - 12] ?? signs[0];
    return {
      element,
      planet: rank === "page" ? "Elemental (earth of the suit)" : "Elemental court",
      zodiac,
      archetype: court.label,
      numberLabel: `${court.label} — court card of the ${SUIT_LABEL[suit]}`,
    };
  }

  if (card.number === 1) {
    return {
      element,
      planet: "Elemental root",
      zodiac: SUIT_SIGNS[suit].join(", "),
      archetype: "The Root",
      numberLabel: `Ace — the root of ${element}`,
    };
  }

  const [planet, zodiac] = DECAN[suit][card.number];
  return {
    element,
    planet,
    zodiac,
    archetype: `The ${ordinal(card.number)} step`,
    numberLabel: `${card.number} — pip card of the ${SUIT_LABEL[suit]}`,
  };
}

function relatedFor(card: TarotCard, all: TarotCard[]): string[] {
  const related: TarotCard[] = [];
  const push = (c?: TarotCard) => {
    if (c && c.id !== card.id && !related.some((r) => r.id === c.id)) related.push(c);
  };

  if (card.arcana === "major") {
    push(all.find((c) => c.arcana === "major" && c.number === card.number - 1));
    push(all.find((c) => c.arcana === "major" && c.number === card.number + 1));
    push(all.find((c) => c.arcana === "major" && c.number === (card.number + 11) % 22));
  } else {
    const suit = card.suit as string;
    push(all.find((c) => c.suit === suit && c.number === card.number - 1));
    push(all.find((c) => c.suit === suit && c.number === card.number + 1));
    for (const other of Object.keys(SUIT_ELEMENT)) {
      if (other !== suit) push(all.find((c) => c.suit === other && c.number === card.number));
    }
  }
  for (const c of all) {
    if (related.length >= 4) break;
    push(c);
  }
  return related.slice(0, 4).map((c) => slugify(c.name));
}

function countWords(page: Omit<TarotPage, "wordCount" | "readingMinutes">): number {
  const chunks: string[] = [
    page.intro,
    ...page.overview,
    ...page.upright,
    ...page.reversed,
    ...page.love,
    ...page.career,
    ...page.finance,
    ...page.health,
    ...page.spiritual,
    page.yesNoText,
    ...page.timeline.map((t) => t.text),
    ...page.advice,
    ...page.journalPrompts,
    page.meditation,
    page.affirmation,
    ...page.faqs.flatMap((f) => [f.question, f.answer]),
  ];
  return chunks.join(" ").split(/\s+/).filter(Boolean).length;
}

function buildPage(card: TarotCard, all: TarotCard[]): TarotPage {
  const unique = UNIQUE_CARD_COPY[card.id];
  if (!unique) {
    throw new Error(`Missing unique copy entry for tarot card id: ${card.id}`);
  }

  const a = attributionFor(card);
  const yesNoValue: YesNo = YES_IDS.has(card.id)
    ? "yes"
    : NO_IDS.has(card.id)
      ? "no"
      : "maybe";
  const slug = slugify(card.name);
  const suitLabel = card.suit ? SUIT_LABEL[card.suit] : "Major Arcana";

  const base: Omit<TarotPage, "wordCount" | "readingMinutes"> = {
    id: card.id,
    slug,
    name: card.name,
    title: `${card.name} Tarot Card Meaning — Upright, Reversed, Love & Career`,
    description: `${card.name} tarot card meaning: ${card.uprightMeaning.toLowerCase()} upright and ${card.reversedMeaning.toLowerCase()} reversed. Love, career, money, health, yes/no and advice.`,
    intro: `${card.name} — ${card.keywords.join(", ").toLowerCase()} — explored through Rider–Waite–Smith symbolism, ${a.element} dynamics, and ${a.planet} in ${a.zodiac}.`,
    keywords: [
      `${card.name.toLowerCase()} tarot card`,
      `${card.name.toLowerCase()} meaning`,
      `${card.name.toLowerCase()} reversed`,
      `${card.name.toLowerCase()} love meaning`,
      `${card.name.toLowerCase()} yes or no`,
      ...card.keywords.map((k) => k.toLowerCase()),
    ],
    image: card.image,
    arcana: card.arcana,
    arcanaLabel: card.arcana === "major" ? "Major Arcana" : "Minor Arcana",
    suit: card.suit,
    suitLabel,
    numberLabel: a.numberLabel,
    element: a.element,
    planet: a.planet,
    zodiac: a.zodiac,
    archetype: a.archetype,
    cardKeywords: card.keywords,
    overview: [...unique.overview],
    upright: [...unique.upright],
    reversed: [...unique.reversed],
    love: [...unique.love],
    career: [...unique.career],
    finance: [...unique.finance],
    health: [...unique.health],
    spiritual: [...unique.spiritual],
    yesNo: yesNoValue,
    yesNoText: unique.yesNoText,
    timeline: [
      { label: "Past", text: unique.timeline[0] },
      { label: "Present", text: unique.timeline[1] },
      { label: "Future", text: unique.timeline[2] },
    ],
    advice: [...unique.advice],
    journalPrompts: [...unique.journalPrompts],
    meditation: unique.meditation,
    affirmation: unique.affirmation,
    relatedSlugs: relatedFor(card, all),
    faqs: unique.faqs,
    updated: TAROT_UPDATED,
  };

  const wordCount = countWords(base);
  return { ...base, wordCount, readingMinutes: Math.max(4, Math.round(wordCount / 200)) };
}

export const TAROT_PAGES: TarotPage[] = DECK.map((card) => buildPage(card, DECK));

const bySlug = new Map(TAROT_PAGES.map((p) => [p.slug, p]));
export const getTarotPage = (slug: string): TarotPage | undefined => bySlug.get(slug);
export const TAROT_SLUGS = TAROT_PAGES.map((p) => p.slug);

export const TAROT_ELEMENTS = ["Fire", "Water", "Air", "Earth"] as const;
export const TAROT_SUITS = ["wands", "cups", "swords", "pentacles"] as const;
export const TAROT_PLANETS = Array.from(
  new Set(TAROT_PAGES.map((p) => p.planet).filter((p) => !p.startsWith("Element"))),
).sort();
export const TAROT_ZODIAC = Array.from(
  new Set(TAROT_PAGES.flatMap((p) => p.zodiac.split(", "))),
).sort();
export { SUIT_LABEL };
