import deckJson from "@/data/cards/deck.json";
import type { DrawnCard, TarotCard } from "./types";

export const DECK: TarotCard[] = deckJson as TarotCard[];

const cardById = new Map(DECK.map((c) => [c.id, c]));

export function getCardById(id: string): TarotCard | undefined {
  return cardById.get(id);
}

/** Fisher–Yates shuffle. Returns a new array. */
export function shuffleDeck<T>(deck: T[]): T[] {
  const arr = deck.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** 50/50 reversed flag. */
export function assignReversed(): boolean {
  return Math.random() < 0.5;
}

/** Draw `count` unique cards, each with a reversed flag. */
export function drawCards(count: number, deck: TarotCard[] = DECK): DrawnCard[] {
  const shuffled = shuffleDeck(deck);
  return shuffled.slice(0, count).map((c) => ({
    cardId: c.id,
    reversed: assignReversed(),
  }));
}

export { getSpread } from "./spreads";
