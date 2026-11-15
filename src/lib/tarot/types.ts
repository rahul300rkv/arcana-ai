export type Arcana = "major" | "minor";
export type Suit = "wands" | "cups" | "swords" | "pentacles";

export interface TarotCard {
  id: string;
  name: string;
  arcana: Arcana;
  suit: Suit | null;
  number: number;
  image: string;
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  loveMeaning: string;
  careerMeaning: string;
  financeMeaning: string;
  spiritualityMeaning: string;
}

export interface DrawnCard {
  cardId: string;
  reversed: boolean;
}

export interface SpreadPosition {
  index: number;
  name: string;
  meaning: string;
}

export type SpreadId =
  | "single"
  | "three-card"
  | "love"
  | "career"
  | "money"
  | "decision"
  | "celtic-cross"
  | "year-ahead";

export interface Spread {
  id: SpreadId;
  name: string;
  description: string;
  icon: string;
  positions: SpreadPosition[];
  count: number;
  minutes: number;
}

export interface ReadingState {
  spreadId: SpreadId | null;
  question: string;
  cards: DrawnCard[];
  createdAt: number | null;
}

export interface CardInterpretation {
  positionName: string;
  cardId: string;
  reversed: boolean;
  text: string;
}

export interface ReadingInterpretation {
  perCard: CardInterpretation[];
  summary: string;
}

export interface SavedReading {
  id: string;
  spreadId: SpreadId;
  question: string;
  cards: DrawnCard[];
  interpretation: ReadingInterpretation;
  createdAt: number;
  source?: "ai" | "local";
}

export interface JournalEntry {
  id: string;
  createdAt: number;
  note: string;
  context: string;
  readingId?: string;
}
