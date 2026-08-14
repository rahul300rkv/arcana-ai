/**
 * Namank (Name Number) calculation engine — Chaldean numerology.
 *
 * Unlike Mulank and Bhagyank, which are derived from the date of birth,
 * Namank is derived from the letters of a person's full name. Each letter
 * carries a Chaldean numeral value (1–8; no letter maps to 9, which is
 * traditionally reserved as a sacred/complete number in this system).
 * Master Numbers 11 and 22 are preserved wherever they appear, mirroring
 * the treatment used for Bhagyank.
 */

export type NamankValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22;

const MASTER_NUMBERS = new Set([11, 22]);

/** Chaldean letter-to-number mapping. Note: no letter maps to 9. */
export const CHALDEAN_VALUES: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8,
};

export interface NamankStep {
  /** e.g. "9 + 1 + 5 + 3 + 6" */
  expression: string;
  sum: number;
}

export interface NamankLetterBreakdown {
  letter: string;
  value: number;
}

export interface NamankResult {
  value: NamankValue;
  isMasterNumber: boolean;
  steps: NamankStep[];
  breakdown: NamankLetterBreakdown[];
  total: number;
  cleanedName: string;
}

/**
 * Reduces the full name to a single digit (or Master Number 11 / 22).
 * Example: "RAHUL" → R2 A1 H5 U6 L3 = 17 → 1+7 = 8.
 */
export function calculateNamank(name: string): NamankResult {
  const cleanedName = name.toUpperCase().replace(/[^A-Z]/g, "");

  if (!cleanedName) {
    throw new Error("Please enter a name using letters (A–Z).");
  }

  const breakdown: NamankLetterBreakdown[] = [...cleanedName].map((letter) => ({
    letter,
    value: CHALDEAN_VALUES[letter] ?? 0,
  }));

  const steps: NamankStep[] = [];
  let value = breakdown.reduce((sum, item) => sum + item.value, 0);
  const total = value;
  steps.push({ expression: breakdown.map((b) => b.value).join(" + "), sum: value });

  while (value > 9 && !MASTER_NUMBERS.has(value)) {
    const digits = String(value).split("").map(Number);
    value = digits.reduce((sum, d) => sum + d, 0);
    steps.push({ expression: digits.join(" + "), sum: value });
  }

  return {
    value: value as NamankValue,
    isMasterNumber: MASTER_NUMBERS.has(value),
    steps,
    breakdown,
    total,
    cleanedName,
  };
}

/** Validates and normalises raw name input before calculation. */
export function parseNameInput(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) {
    throw new Error("Please enter your name.");
  }
  if (!/[A-Za-z]/.test(trimmed)) {
    throw new Error("Please enter a name using letters (A–Z).");
  }
  return trimmed;
}
