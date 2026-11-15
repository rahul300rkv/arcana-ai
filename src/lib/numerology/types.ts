/** A reduced numerology digit — always 1 through 9 (see `reduceToSingleDigit`). */
export type RootNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Active (1,3,5,8): action, starting, networking, bold moves.
 * Reflective (2,4,7,9): planning, organizing, auditing, wrapping up.
 * Harmony (6): home, relationships, commitments.
 * Only meaningful for a Personal Month — null for a yearly-only forecast.
 */
export type Pacing = "active" | "reflective" | "harmony";

export interface ArchetypeMapping {
  value: RootNumber;
  card: string;
}

export interface NumerologyCalculations {
  mulank: ArchetypeMapping;
  personal_year: ArchetypeMapping;
  /** Null when the query is for a full year rather than a specific month. */
  personal_month: ArchetypeMapping | null;
}

export interface EnergeticLayers {
  base_mindset: string;
  yearly_theme: string;
  /** Empty string when the query is for a full year rather than a specific month. */
  monthly_focus: string;
  /** Null when the query is for a full year rather than a specific month. */
  pacing: Pacing | null;
}

export interface NumerologyGuidance {
  recommended_actions: string[];
  caution_areas: string[];
}

export interface NumerologyResult {
  calculations: NumerologyCalculations;
  energetic_layers: EnergeticLayers;
  guidance: NumerologyGuidance;
}

export interface NumerologyInput {
  /** ISO date string, e.g. "1998-07-22". */
  dob: string;
  /** "YYYY" for a yearly forecast, or "YYYY-MM" for a specific month. */
  targetPeriod: string;
}

/** A past (or upcoming) tarot reading whose drawn cards resonate with the target Personal Month number. */
export interface CardSynergyMatch {
  readingId: string;
  cardName: string;
  reversed: boolean;
  createdAt: number;
}
