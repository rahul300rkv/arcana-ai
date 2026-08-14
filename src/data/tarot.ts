import { DECK } from "@/lib/tarot/engine";
import type { TarotCard } from "@/lib/tarot/types";

/**
 * Structured content layer for the 78 `/tarot/[slug]` pages.
 *
 * Everything a page renders comes from `TarotPage` objects built here — the
 * routes contain no hardcoded card copy. Each page is composed from three
 * sources: the shared deck data (`src/data/cards/deck.json`), the editorial
 * correspondence table below (element / planet / zodiac / yes-no / archetype),
 * and deterministic prose composers that expand those facts into full
 * long-form sections.
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

const SUIT_DOMAIN: Record<string, string> = {
  wands: "drive, creativity, and the will to act",
  cups: "emotion, intuition, and relationship",
  swords: "thought, communication, and truth",
  pentacles: "body, work, money, and the material world",
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

const COURT_RANK: Record<string, { label: string; role: string; index: number }> = {
  page: { label: "Page", role: "the student — curious, unproven, and willing to learn", index: 11 },
  knight: { label: "Knight", role: "the pursuer — committed, mobile, and sometimes extreme", index: 12 },
  queen: { label: "Queen", role: "the nurturer — mastery expressed inwardly and relationally", index: 13 },
  king: { label: "King", role: "the ruler — mastery expressed outwardly through authority", index: 14 },
};

const NUMBER_THEME: Record<number, string> = {
  1: "a seed and a beginning — pure potential in its rawest form",
  2: "balance, pairing, and the first meeting of two forces",
  3: "growth, expression, and the first visible results",
  4: "structure, stability, and consolidation",
  5: "conflict, disruption, and the pressure that forces change",
  6: "harmony restored, generosity, and reciprocity",
  7: "assessment, patience, and the test of persistence",
  8: "momentum, mastery, and rapid movement",
  9: "near-completion, resilience, and the last stretch",
  10: "completion, culmination, and the handover to a new cycle",
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

function lowerKeywords(card: TarotCard): string {
  return card.keywords.map((k) => k.toLowerCase()).join(", ");
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

function overviewFor(card: TarotCard, a: Attribution): string[] {
  const suitText =
    card.arcana === "major"
      ? `As a Major Arcana card, ${card.name} describes a force larger than any single week or decision. Major cards mark the chapters of a life rather than its sentences, so when this one appears the situation you are asking about is carrying more weight than it first appeared to.`
      : `${card.name} belongs to the ${SUIT_LABEL[card.suit as string]}, the suit of ${SUIT_DOMAIN[card.suit as string]}. Minor Arcana cards describe the practical texture of daily life — the conversations, tasks, moods, and decisions that fill the space between larger turning points.`;

  const numberText =
    card.arcana === "major"
      ? `Numbered ${card.number} in the Fool's Journey, it sits at the point where ${NUMBER_THEME[Math.max(1, card.number % 10 || 10)]}.`
      : rankOf(card)
        ? `As a court card it can describe a person in your life, a role you are being asked to play, or an attitude that the situation is calling for: ${COURT_RANK[rankOf(card) as string].role}.`
        : `Its number carries the theme of ${NUMBER_THEME[card.number]}, filtered through the ${a.element.toLowerCase()} temperament of the suit.`;

  return [
    `${card.name} is the card of ${lowerKeywords(card)}. Its core message upright is simple: ${card.uprightMeaning.toLowerCase()}. Reversed, that same energy turns inward or sours into ${card.reversedMeaning.toLowerCase()}.`,
    suitText,
    numberText,
    `Astrologically the card is associated with ${a.planet} and ${a.zodiac}, and it belongs to the element of ${a.element}. Those correspondences are not decoration — they tell you the tempo of the card. ${elementTempo(a.element)}`,
    `Read ${card.name} as an answer to the question you actually asked. The same image means something different in a love spread than in a career spread, and the sections below break the card down across each area of life so you can take only what fits.`,
  ];
}

function elementTempo(element: string): string {
  switch (element) {
    case "Fire":
      return "Fire moves fast and asks for action before certainty; expect events tied to this card to arrive quickly and demand a response.";
    case "Water":
      return "Water moves slowly and indirectly; expect this card to describe feelings that have been forming under the surface for some time.";
    case "Air":
      return "Air moves through words and thought; expect this card to show up as a conversation, a realisation, a document, or a decision that has to be argued out.";
    default:
      return "Earth moves gradually and materially; expect this card to describe something you can measure — money, health, a workload, a home.";
  }
}

function upgradePhrase(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function uprightFor(card: TarotCard, a: Attribution): string[] {
  return [
    `Upright, ${card.name} means ${upgradePhrase(card.uprightMeaning)}. This is the card working with you rather than against you: the energy is available, the timing is reasonable, and the main thing standing between you and the outcome is whether you engage.`,
    `In a practical reading, that shows up as ${a.element === "Fire" ? "an opportunity that requires you to move before you feel ready" : a.element === "Water" ? "a feeling you can finally name, and a relationship or inner state that responds when you honour it" : a.element === "Air" ? "clarity arriving through information — something said, written, or finally understood" : "a tangible result you can count, hold, or build on"}.`,
    `Keywords to hold while you read: ${lowerKeywords(card)}. If several of those words describe your situation already, the card is confirming what you suspect rather than introducing something new.`,
    `The upright card is rarely a promise. It is a description of the current conditions and where they lead if nothing interrupts them. Treat it as a weather report you can still dress for.`,
  ];
}

function reversedFor(card: TarotCard): string[] {
  return [
    `Reversed, ${card.name} points to ${upgradePhrase(card.reversedMeaning)}. A reversal does not cancel a card — it changes its direction. The same energy is present but blocked, delayed, internalised, or overdone.`,
    `Ask three questions when this card lands reversed. Is the energy stuck (nothing is moving yet)? Is it internal (this is happening inside you rather than out in the world)? Or is it excessive (you have too much of a good thing)? One of those three usually fits, and the answer changes the advice completely.`,
    `Reversals also soften timing. Where the upright card suggests something is already in motion, the reversal usually means it is a stage earlier than you hoped — still workable, but not yet resolved.`,
    `If the reversal feels harsh, remember that the reversed reading names a problem precisely so you can act on it. ${card.name} reversed is a diagnosis, not a verdict.`,
  ];
}

function loveFor(card: TarotCard): string[] {
  return [
    `In love and relationships, ${card.name} speaks to ${upgradePhrase(card.loveMeaning)}.`,
    `If you are in a relationship, read the card as a description of the current dynamic between the two of you rather than of your partner alone. Tarot describes the space between people at least as often as it describes the people themselves.`,
    `If you are single, the card describes what you are bringing to the next connection and what pattern is currently active. That pattern is the thing to work with — it will shape whoever arrives next far more than any prediction can.`,
    `Reversed in a love reading, the same energy tends to show up as ${upgradePhrase(card.reversedMeaning)} playing out privately: the feeling exists but has not been said aloud, or it has been said so often that it has lost its weight.`,
  ];
}

function careerFor(card: TarotCard): string[] {
  return [
    `For work, study, and vocation, ${card.name} indicates ${upgradePhrase(card.careerMeaning)}.`,
    `Look at where the card sits in your spread before acting on it. In a "present" position it describes your current working conditions; in an "advice" position it is telling you what to do next; in an "outcome" position it is describing where the current approach lands you.`,
    `Career readings are the easiest place to test tarot honestly. Write down what you take from this card, give it four to six weeks, and check back. Over time you build a personal record of how ${card.name} behaves for you specifically.`,
    `Reversed, expect the career message to slow down: a delay in a decision, feedback you have not received yet, or effort that is real but not yet visible to the people who make decisions about you.`,
  ];
}

function financeFor(card: TarotCard): string[] {
  return [
    `Financially, ${card.name} suggests ${upgradePhrase(card.financeMeaning)}.`,
    `Tarot is not financial advice and should never replace it. What the card can do is describe your relationship to money right now — whether you are avoiding numbers, over-controlling them, spending from an emotion, or building something slowly and well.`,
    `A useful exercise with this card: name one concrete money action it points to that you could complete this week. Something checkable, like reviewing a subscription, asking about a rate, or moving a fixed amount into savings. Cards get much more useful when they end in an action.`,
  ];
}

function healthFor(card: TarotCard, a: Attribution): string[] {
  const elementHealth: Record<string, string> = {
    Fire: "energy levels, inflammation, sleep debt, and burnout from running hot for too long",
    Water: "emotional health, hydration, hormonal rhythm, and the physical cost of unprocessed feeling",
    Air: "the nervous system, breathing, mental load, and stress carried in the head, neck, and shoulders",
    Earth: "the physical body itself — nutrition, movement, rest, and the slow-accumulating habits that decide long-term health",
  };
  return [
    `As a wellbeing signal, ${card.name} draws attention to ${elementHealth[a.element]}.`,
    `Read this as a prompt rather than a diagnosis. Tarot cannot see inside your body, and nothing on this page substitutes for a qualified medical opinion. What a card can do is notice a pattern you have been ignoring and give you a reason to book the appointment.`,
    `Given the card's keywords — ${lowerKeywords(card)} — the practical question is whether your current routine matches the pace this card describes. ${a.element === "Fire" ? "Fire cards usually ask for rest before recovery becomes mandatory." : a.element === "Water" ? "Water cards usually ask for emotional release rather than more effort." : a.element === "Air" ? "Air cards usually ask you to quiet the mental noise before making a decision." : "Earth cards usually ask for one small, boring, repeatable habit."}`,
  ];
}

function spiritualFor(card: TarotCard): string[] {
  return [
    `Spiritually, ${card.name} carries the theme of ${upgradePhrase(card.spiritualityMeaning)}.`,
    `Whatever your framework — devotional, secular, or somewhere in between — the spiritual layer of a card is really about meaning: what this experience is teaching you, and who you become on the other side of it.`,
    `Sit with the image before you read another word of interpretation. Notice what you saw first, what colour drew your eye, and what the figure in the card seems to be doing. Your immediate reaction is data, and it is usually more accurate for your situation than any general meaning written for a stranger.`,
  ];
}

function yesNoFor(card: TarotCard): { value: YesNo; text: string } {
  if (YES_IDS.has(card.id)) {
    return {
      value: "yes",
      text: `${card.name} reads as a yes. The card's core energy — ${lowerKeywords(card)} — moves toward what you are asking about rather than away from it. Reversed, downgrade the answer to "yes, but later" or "yes, with conditions", and read the reversed meaning for the condition.`,
    };
  }
  if (NO_IDS.has(card.id)) {
    return {
      value: "no",
      text: `${card.name} reads as a no, or at least a not-like-this. That is not a punishment; the card is describing a route that costs more than it returns. Reversed, the no often softens into "not yet" — the obstacle is beginning to move.`,
    };
  }
  return {
    value: "maybe",
    text: `${card.name} is a conditional answer. It gives you a "yes, if" or a "no, unless" rather than a verdict, because the outcome depends on a choice that has not been made yet — usually yours. Look at the advice section for the condition that decides it.`,
  };
}

function timelineFor(card: TarotCard): { label: string; text: string }[] {
  return [
    {
      label: "Past",
      text: `In a past position, ${card.name} describes an experience of ${lowerKeywords(card)} that shaped how you approach the current question. It is finished as an event but still active as a habit.`,
    },
    {
      label: "Present",
      text: `In a present position, the card is a mirror: ${upgradePhrase(card.uprightMeaning)} is the live condition right now, whether or not you have named it yet.`,
    },
    {
      label: "Future",
      text: `In a future position, ${card.name} describes where the current trajectory leads — not a fixed fate, but the most likely outcome if nothing changes. The advice section is where you change it.`,
    },
  ];
}

function adviceFor(card: TarotCard, a: Attribution): string[] {
  return [
    `Act in the spirit of the card rather than the letter of it — ${lowerKeywords(card)} is a posture, not a checklist.`,
    a.element === "Fire"
      ? "Move first and refine later; this card loses power when you sit on it."
      : a.element === "Water"
        ? "Feel it fully before you decide; a decision made to escape a feeling will need remaking."
        : a.element === "Air"
          ? "Say the thing plainly, in writing if you can. Ambiguity is the real problem here."
          : "Do the small, unglamorous, structural thing. Progress here is cumulative, not dramatic.",
    `Watch for the reversed expression — ${upgradePhrase(card.reversedMeaning)} — as an early warning sign, and correct before it hardens.`,
    `Pair this card with a specific action and a date. Undated intentions are how readings quietly expire.`,
  ];
}

function journalFor(card: TarotCard): string[] {
  return [
    `Where in my life right now is ${lowerKeywords(card).split(", ")[0]} already present, and where am I pretending it isn't?`,
    `If ${card.name} were describing a person in my life, who would it be — and what would I want to say to them?`,
    `What would change this week if I fully accepted the upright message of this card: ${card.uprightMeaning.toLowerCase()}?`,
    `What does the reversed version — ${card.reversedMeaning.toLowerCase()} — cost me when I let it run unchecked?`,
  ];
}

function faqsFor(card: TarotCard, a: Attribution, yesNo: { value: YesNo; text: string }): TarotFaq[] {
  return [
    {
      question: `What does ${card.name} mean in a tarot reading?`,
      answer: `${card.name} means ${upgradePhrase(card.uprightMeaning)}. Its keywords are ${lowerKeywords(card)}, and it belongs to the ${card.arcana === "major" ? "Major Arcana" : SUIT_LABEL[card.suit as string]}, associated with the element of ${a.element}.`,
    },
    {
      question: `What does ${card.name} mean reversed?`,
      answer: `Reversed, ${card.name} points to ${upgradePhrase(card.reversedMeaning)}. The card's energy is blocked, internalised, delayed, or overexpressed rather than absent.`,
    },
    {
      question: `Is ${card.name} a yes or no card?`,
      answer: yesNo.text,
    },
    {
      question: `What does ${card.name} mean for love?`,
      answer: `In love readings, ${card.name} points to ${upgradePhrase(card.loveMeaning)}. Read it as a description of the dynamic between two people rather than a verdict on one of them.`,
    },
    {
      question: `What does ${card.name} mean for career and money?`,
      answer: `For work it indicates ${upgradePhrase(card.careerMeaning)}. Financially it suggests ${upgradePhrase(card.financeMeaning)}. Neither is a substitute for professional advice — use them as prompts for a concrete next step.`,
    },
    {
      question: `Which zodiac sign and planet rule ${card.name}?`,
      answer: `${card.name} is associated with ${a.planet} and ${a.zodiac}, under the element of ${a.element}.`,
    },
  ];
}

function meditationFor(card: TarotCard, a: Attribution): string {
  return `Set the card where you can see it and take five slow breaths, letting the exhale be longer than the inhale. Let your eyes rest on the image without trying to interpret it. On each inhale, silently name the card's central quality — ${lowerKeywords(card).split(", ")[0]}. On each exhale, release its shadow — ${card.reversedMeaning.split(",")[0].toLowerCase()}. After five minutes, ask a single question of the card and write the first answer that arrives, unedited. ${a.element === "Fire" ? "Finish by standing up and doing one physical thing immediately; fire cards want to be enacted." : a.element === "Water" ? "Finish by placing a hand over your heart and staying still for one more minute." : a.element === "Air" ? "Finish by writing one clear sentence — the truest one you can manage." : "Finish by putting your feet flat on the floor and naming three things you can physically touch."}`;
}

function affirmationFor(card: TarotCard): string {
  const first = card.keywords[0].toLowerCase();
  return `I welcome ${first} without forcing it, and I trust myself to act on what ${card.name} is showing me.`;
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
  // Top up with same-element cards so every page has four related links.
  for (const c of all) {
    if (related.length >= 4) break;
    push(c);
  }
  return related.slice(0, 4).map((c) => slugify(c.name));
}

function countWords(page: Omit<TarotPage, "wordCount" | "readingMinutes">): number {
  const chunks: string[] = [
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
  const a = attributionFor(card);
  const yesNo = yesNoFor(card);
  const slug = slugify(card.name);
  const suitLabel = card.suit ? SUIT_LABEL[card.suit] : "Major Arcana";

  const base: Omit<TarotPage, "wordCount" | "readingMinutes"> = {
    id: card.id,
    slug,
    name: card.name,
    title: `${card.name} Tarot Card Meaning — Upright, Reversed, Love & Career`,
    description: `${card.name} tarot card meaning: ${card.uprightMeaning.toLowerCase()} upright and ${card.reversedMeaning.toLowerCase()} reversed. Love, career, money, health, yes/no and advice.`,
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
    overview: overviewFor(card, a),
    upright: uprightFor(card, a),
    reversed: reversedFor(card),
    love: loveFor(card),
    career: careerFor(card),
    finance: financeFor(card),
    health: healthFor(card, a),
    spiritual: spiritualFor(card),
    yesNo: yesNo.value,
    yesNoText: yesNo.text,
    timeline: timelineFor(card),
    advice: adviceFor(card, a),
    journalPrompts: journalFor(card),
    meditation: meditationFor(card, a),
    affirmation: affirmationFor(card),
    relatedSlugs: relatedFor(card, all),
    faqs: faqsFor(card, a, yesNo),
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
