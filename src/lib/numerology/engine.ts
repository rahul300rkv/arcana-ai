import type { ArchetypeMapping, NumerologyInput, Pacing, RootNumber } from "./types";

/** Sum digits recursively until a single digit (1–9) is reached. */
export function reduceToSingleDigit(n: number): RootNumber {
  let value = Math.abs(Math.trunc(n));
  while (value > 9) {
    value = String(value)
      .split("")
      .reduce((sum, d) => sum + Number(d), 0);
  }
  // Guard against 0 (only reachable if the input itself was 0, which never
  // happens for valid dates/periods) so the return type stays a true 1–9.
  return (value === 0 ? 9 : value) as RootNumber;
}

export const ARCHETYPES: Record<RootNumber, string> = {
  1: "The Magician",
  2: "The High Priestess",
  3: "The Empress",
  4: "The Emperor",
  5: "The Hierophant",
  6: "The Lovers",
  7: "The Chariot",
  8: "Strength / Justice",
  9: "The Hermit",
};

/**
 * Active months (1, 3, 5, 8): action, starting projects, networking, bold moves.
 * Reflective months (2, 4, 7, 9): planning, organizing, auditing, wrapping up.
 * Harmony month (6): home, relationships, commitments, legal/union decisions.
 */
export const PACING: Record<RootNumber, Pacing> = {
  1: "active",
  2: "reflective",
  3: "active",
  4: "reflective",
  5: "active",
  6: "harmony",
  7: "reflective",
  8: "active",
  9: "reflective",
};

export function toMapping(value: RootNumber): ArchetypeMapping {
  return { value, card: ARCHETYPES[value] };
}

export interface ParsedInput {
  day: number;
  month: number;
  year: number;
  targetYear: number;
  /** 1–12, or null when the target period is a whole year. */
  targetMonth: number | null;
}

/** Parses and validates the raw dob / targetPeriod strings coming from the form. */
export function parseNumerologyInput({ dob, targetPeriod }: NumerologyInput): ParsedInput {
  const dobMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob.trim());
  if (!dobMatch) {
    throw new Error("Date of birth must be in YYYY-MM-DD format.");
  }
  const [, yearStr, monthStr, dayStr] = dobMatch;
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error("Date of birth is out of range.");
  }

  const trimmedPeriod = targetPeriod.trim();
  const yearOnlyMatch = /^(\d{4})$/.exec(trimmedPeriod);
  const yearMonthMatch = /^(\d{4})-(\d{2})$/.exec(trimmedPeriod);

  if (yearOnlyMatch) {
    return { day, month, year, targetYear: Number(yearOnlyMatch[1]), targetMonth: null };
  }
  if (yearMonthMatch) {
    const targetMonth = Number(yearMonthMatch[2]);
    if (targetMonth < 1 || targetMonth > 12) {
      throw new Error("Target month must be between 01 and 12.");
    }
    return { day, month, year, targetYear: Number(yearMonthMatch[1]), targetMonth };
  }
  throw new Error("Target period must be YYYY or YYYY-MM.");
}

export interface NumerologyCalculationSet {
  mulank: RootNumber;
  personalYear: RootNumber;
  /** Null when the target period is a whole year. */
  personalMonth: RootNumber | null;
}

/**
 * Personal Mulank = Reduce(Day of Birth)
 * Personal Year   = Reduce(Day of Birth + Month of Birth + Target Year)
 * Personal Month  = Reduce(Personal Year + Target Month Number)   [only if a month is targeted]
 */
export function calculate(parsed: ParsedInput): NumerologyCalculationSet {
  const mulank = reduceToSingleDigit(parsed.day);
  const personalYear = reduceToSingleDigit(parsed.day + parsed.month + parsed.targetYear);
  const personalMonth =
    parsed.targetMonth === null ? null : reduceToSingleDigit(personalYear + parsed.targetMonth);

  return { mulank, personalYear, personalMonth };
}
