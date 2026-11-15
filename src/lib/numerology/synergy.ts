import { getCardById } from "@/lib/tarot/engine";
import { loadHistory } from "@/lib/tarot/history";
import type { RootNumber } from "./types";

export interface CardSynergyMatch {
  readingId: string;
  cardName: string;
  reversed: boolean;
  createdAt: number;
}

/**
 * A tarot card "resonates" with a Personal Month number when its own numeric
 * rank matches it — a Major Arcana card numbered 1–9 (these are exactly the
 * archetypes in ARCHETYPES: 1 = The Magician ... 9 = The Hermit), or a Minor
 * Arcana card of that rank (Ace through Nine of any suit; Ten and court
 * cards never match a single digit, which is correct).
 */
function cardMatchesNumber(cardId: string, target: RootNumber): boolean {
  const card = getCardById(cardId);
  return card?.number === target;
}

/**
 * Looks through the user's locally-saved reading history for any reading
 * drawn during the target year/month whose cards resonate with that
 * month's Personal Month number — i.e. "you drew a card that's already in
 * sync with this month's energy."
 *
 * Runs entirely client-side against localStorage; never touches the server.
 */
export function findCardSynergy(
  personalMonth: RootNumber,
  targetYear: number,
  targetMonth: number,
): CardSynergyMatch[] {
  const matches: CardSynergyMatch[] = [];

  for (const reading of loadHistory()) {
    const d = new Date(reading.createdAt);
    if (d.getFullYear() !== targetYear || d.getMonth() + 1 !== targetMonth) continue;

    for (const drawn of reading.cards) {
      if (cardMatchesNumber(drawn.cardId, personalMonth)) {
        const card = getCardById(drawn.cardId);
        matches.push({
          readingId: reading.id,
          cardName: card?.name ?? drawn.cardId,
          reversed: drawn.reversed,
          createdAt: reading.createdAt,
        });
      }
    }
  }

  return matches;
}
