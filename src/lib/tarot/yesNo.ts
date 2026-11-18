import type { TarotCard } from "./types";

export type YesNo = "yes" | "no" | "maybe";

export const YES_NO_LABEL: Record<YesNo, "Yes" | "No" | "Maybe"> = {
  yes: "Yes",
  no: "No",
  maybe: "Maybe",
};

/** Upright "Yes" cards in classical Yes/No tarot pulls. */
export const YES_IDS = new Set([
  "major-00",
  "major-01",
  "major-03",
  "major-04",
  "major-06",
  "major-07",
  "major-08",
  "major-10",
  "major-14",
  "major-17",
  "major-19",
  "major-20",
  "major-21",
  "wands-ace",
  "wands-three",
  "wands-four",
  "wands-six",
  "wands-eight",
  "cups-ace",
  "cups-two",
  "cups-three",
  "cups-six",
  "cups-nine",
  "cups-ten",
  "swords-ace",
  "swords-six",
  "pentacles-ace",
  "pentacles-three",
  "pentacles-six",
  "pentacles-eight",
  "pentacles-nine",
  "pentacles-ten",
]);

/** Upright "No" cards in classical Yes/No tarot pulls. */
export const NO_IDS = new Set([
  "major-12",
  "major-13",
  "major-15",
  "major-16",
  "major-18",
  "wands-five",
  "wands-seven",
  "wands-ten",
  "cups-five",
  "cups-eight",
  "swords-three",
  "swords-five",
  "swords-seven",
  "swords-eight",
  "swords-nine",
  "swords-ten",
  "pentacles-five",
]);

/**
 * Reversed verdicts differ from naive upright inversion:
 * - Several "Yes" Major/Court/Ace cards turn "Maybe" (delayed or conditional) when reversed,
 *   while action/risk cards like The Fool, The Magician, or The Lovers reversed lean "No".
 * - Several oppressive "No" cards (The Devil, 8/9/10 of Swords, 5 of Pentacles) soften to "Maybe"
 *   when reversed because the restriction or peak crisis is lifting.
 */
const REVERSED_YES_OVERRIDES = new Set<string>([]);

const REVERSED_NO_OVERRIDES = new Set<string>([
  "major-00",
  "major-01",
  "major-02",
  "major-04",
  "major-05",
  "major-06",
  "major-07",
  "major-09",
  "major-10",
  "major-11",
  "major-12",
  "major-13",
  "major-16",
  "major-18",
  "wands-five",
  "wands-seven",
  "wands-ten",
  "cups-five",
  "cups-seven",
  "cups-eight",
  "swords-two",
  "swords-three",
  "swords-five",
  "swords-seven",
  "pentacles-two",
  "pentacles-four",
]);

const REVERSED_MAYBE_OVERRIDES = new Set<string>([
  "major-03",
  "major-08",
  "major-14",
  "major-15",
  "major-17",
  "major-19",
  "major-20",
  "major-21",
  "swords-eight",
  "swords-nine",
  "swords-ten",
  "pentacles-five",
]);

export function getUprightYesNo(cardId: string): YesNo {
  if (YES_IDS.has(cardId)) return "yes";
  if (NO_IDS.has(cardId)) return "no";
  return "maybe";
}

export function getReversedYesNo(cardId: string): YesNo {
  if (REVERSED_YES_OVERRIDES.has(cardId)) return "yes";
  if (REVERSED_MAYBE_OVERRIDES.has(cardId)) return "maybe";
  if (REVERSED_NO_OVERRIDES.has(cardId)) return "no";
  const upright = getUprightYesNo(cardId);
  if (upright === "yes") return "maybe";
  return "no";
}

export function getYesNoExplanation(card: TarotCard, reversed: boolean, verdict: YesNo): string {
  const focus = reversed ? card.reversedMeaning.toLowerCase() : card.uprightMeaning.toLowerCase();
  if (!reversed) {
    if (verdict === "yes") {
      return `${card.name} upright points firmly toward Yes, carried by ${focus}. Momentum supports moving forward with clarity and grounded intent.`;
    }
    if (verdict === "no") {
      return `${card.name} upright leans toward No for now due to ${focus}. Pause before committing so unresolved friction or blind spots do not compound.`;
    }
    return `${card.name} upright answers Maybe — the themes of ${focus} mean the outcome still depends on timing and deliberate follow-through. Gather clearer facts before deciding.`;
  }

  if (verdict === "yes") {
    return `${card.name} reversed still opens toward Yes, though progress feels quieter or delayed while ${focus} clears. Patience keeps the path intact.`;
  }
  if (verdict === "no") {
    return `${card.name} reversed leans toward No right now because ${focus} clouds your timing. Step back, address the underlying hesitation, and revisit the question once clarity returns.`;
  }
  return `${card.name} reversed signals Maybe — either blocked energy is starting to ease or ${focus} needs conscious correction first. Wait for internal alignment before taking an irreversible step.`;
}
