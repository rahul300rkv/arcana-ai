/**
 * Bhagyank (Destiny / Life Path Number) calculation engine.
 *
 * Unlike Mulank (`engine.ts`), which reduces only the day of birth, Bhagyank
 * reduces every digit of the complete date of birth (DD + MM + YYYY) and
 * preserves 11, 22 and 33 as Master Numbers wherever they appear — including
 * at intermediate reduction steps, not just the final result.
 */

export type BhagyankValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

const MASTER_NUMBERS = new Set([11, 22, 33]);

export interface BhagyankStep {
  /** e.g. "1 + 5 + 0 + 8 + 1 + 9 + 9 + 5" */
  expression: string;
  sum: number;
}

export interface BhagyankResult {
  value: BhagyankValue;
  isMasterNumber: boolean;
  steps: BhagyankStep[];
}

/**
 * Reduces the full date of birth to a single digit (or Master Number).
 * Example: 15/08/1995 → 1+5+0+8+1+9+9+5 = 38 → 3+8 = 11 (stops: 11 is a Master Number).
 */
export function calculateBhagyank(day: number, month: number, year: number): BhagyankResult {
  const dateDigits = `${String(day).padStart(2, "0")}${String(month).padStart(2, "0")}${year}`
    .split("")
    .map(Number);

  const steps: BhagyankStep[] = [];
  let value = dateDigits.reduce((sum, d) => sum + d, 0);
  steps.push({ expression: dateDigits.join(" + "), sum: value });

  while (value > 9 && !MASTER_NUMBERS.has(value)) {
    const digits = String(value).split("").map(Number);
    value = digits.reduce((sum, d) => sum + d, 0);
    steps.push({ expression: digits.join(" + "), sum: value });
  }

  return {
    value: value as BhagyankValue,
    isMasterNumber: MASTER_NUMBERS.has(value),
    steps,
  };
}

export interface ParsedDob {
  day: number;
  month: number;
  year: number;
}

/** Parses and validates a `YYYY-MM-DD` string (native `<input type="date">` format). */
export function parseDob(iso: string): ParsedDob {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!match) {
    throw new Error("Please select your complete date of birth.");
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (year < 1900) {
    throw new Error("Please enter a birth year of 1900 or later.");
  }
  if (month < 1 || month > 12) {
    throw new Error("That month doesn't exist — please check your date.");
  }
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    throw new Error("That day doesn't exist for the selected month — please check your date.");
  }

  const today = new Date();
  const inputDate = new Date(year, month - 1, day);
  const todayAtMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (inputDate > todayAtMidnight) {
    throw new Error("Date of birth cannot be in the future.");
  }

  return { day, month, year };
}

/** Formats a `YYYY-MM-DD` string as `DD/MM/YYYY` for Indian-format display. */
export function formatDobIndian(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  return `${match[3]}/${match[2]}/${match[1]}`;
}
