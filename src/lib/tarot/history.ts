import { useSyncExternalStore } from "react";
import { DECK, drawCards } from "./engine";
import { getSpread } from "./spreads";
import type { JournalEntry, ReadingInterpretation, SavedReading, SpreadId } from "./types";

const HISTORY_KEY = "arcana.history.v1";
const JOURNAL_KEY = "arcana.journal.v1";
const DAILY_KEY = "arcana.daily.v1";
const ACTIVE_DAYS_KEY = "arcana.activedays.v1";
const MAX_HISTORY = 200;

const listeners = new Set<() => void>();
let cachedSnapshot: ArcanaSnapshot | null = null;
function notify() {
  cachedSnapshot = null;
  listeners.forEach((l) => l());
}
function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

function isBrowser() {
  return typeof window !== "undefined";
}

function readJSON<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON<T>(key: string, value: T) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota errors */
  }
}

function todayStr(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/* ---------------- Active days / streak ---------------- */

function loadActiveDays(): string[] {
  return readJSON<string[]>(ACTIVE_DAYS_KEY, []);
}

export function markActiveToday() {
  const days = new Set(loadActiveDays());
  const today = todayStr();
  if (!days.has(today)) {
    days.add(today);
    writeJSON(ACTIVE_DAYS_KEY, Array.from(days));
    notify();
  }
}

export function getStreak(): number {
  const days = new Set(loadActiveDays());
  let streak = 0;
  const cursor = new Date();
  // Streak counts backward from today; if today isn't active yet, start from yesterday.
  if (!days.has(todayStr(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (days.has(todayStr(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

/* ---------------- Reading history ---------------- */

export function loadHistory(): SavedReading[] {
  return readJSON<SavedReading[]>(HISTORY_KEY, []);
}

export function saveReading(input: {
  spreadId: SpreadId;
  question: string;
  cards: SavedReading["cards"];
  interpretation: ReadingInterpretation;
  source?: "ai" | "local";
}): SavedReading {
  const reading: SavedReading = {
    id: uid(),
    createdAt: Date.now(),
    ...input,
  };
  const history = [reading, ...loadHistory()].slice(0, MAX_HISTORY);
  writeJSON(HISTORY_KEY, history);
  markActiveToday();
  notify();
  return reading;
}

export function getReadingById(id: string): SavedReading | undefined {
  return loadHistory().find((r) => r.id === id);
}

export function clearHistory() {
  writeJSON(HISTORY_KEY, []);
  notify();
}

export interface Stats {
  streak: number;
  totalReadings: number;
  favoriteSpreadName: string | null;
  journalCount: number;
}

export function getStats(): Stats {
  const history = loadHistory();
  const counts = new Map<string, number>();
  for (const r of history) counts.set(r.spreadId, (counts.get(r.spreadId) ?? 0) + 1);
  let favoriteSpreadName: string | null = null;
  let best = 0;
  for (const [id, count] of counts) {
    if (count > best) {
      best = count;
      favoriteSpreadName = getSpread(id as SpreadId).name;
    }
  }
  return {
    streak: getStreak(),
    totalReadings: history.length,
    favoriteSpreadName,
    journalCount: loadJournal().length,
  };
}

/* ---------------- Journal ---------------- */

export function loadJournal(): JournalEntry[] {
  return readJSON<JournalEntry[]>(JOURNAL_KEY, []);
}

export function addJournalEntry(note: string, context: string, readingId?: string): JournalEntry {
  const entry: JournalEntry = { id: uid(), createdAt: Date.now(), note, context, readingId };
  const journal = [entry, ...loadJournal()];
  writeJSON(JOURNAL_KEY, journal);
  markActiveToday();
  notify();
  return entry;
}

export function deleteJournalEntry(id: string) {
  writeJSON(
    JOURNAL_KEY,
    loadJournal().filter((e) => e.id !== id),
  );
  notify();
}

/* ---------------- Daily card ---------------- */

interface DailyCardState {
  date: string;
  cardId: string;
  reversed: boolean;
}

function seededPick(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  const rand = Math.abs(Math.sin(h));
  const index = Math.floor(rand * DECK.length) % DECK.length;
  const reversed = rand * 100 - Math.floor(rand * 100) < 0.5;
  return { card: DECK[index], reversed };
}

export function getDailyCard(): DailyCardState {
  const today = todayStr();
  const stored = readJSON<DailyCardState | null>(DAILY_KEY, null);
  if (stored && stored.date === today) return stored;
  const { card, reversed } = seededPick(today);
  const fresh: DailyCardState = { date: today, cardId: card.id, reversed };
  writeJSON(DAILY_KEY, fresh);
  return fresh;
}

export function redrawDailyCard(): DailyCardState {
  const today = todayStr();
  const drawn = drawCards(1)[0];
  const fresh: DailyCardState = { date: today, cardId: drawn.cardId, reversed: drawn.reversed };
  writeJSON(DAILY_KEY, fresh);
  notify();
  return fresh;
}

/* ---------------- Export ---------------- */

/**
 * Bundles everything stored locally (readings, journal, streak/stats) into
 * one JSON object and triggers a real browser download — no server or
 * account involved, since all of this data already lives in localStorage.
 */
export function exportDataAsJson(): void {
  if (!isBrowser()) return;

  const payload = {
    exportedAt: new Date().toISOString(),
    history: loadHistory(),
    journal: loadJournal(),
    stats: getStats(),
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `astrofree-export-${todayStr()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ---------------- React hook ---------------- */

interface ArcanaSnapshot {
  history: SavedReading[];
  journal: JournalEntry[];
  stats: Stats;
  daily: DailyCardState;
}

function computeSnapshot(): ArcanaSnapshot {
  return {
    history: loadHistory(),
    journal: loadJournal(),
    stats: getStats(),
    daily: getDailyCard(),
  };
}

function getSnapshot(): ArcanaSnapshot {
  if (!cachedSnapshot) cachedSnapshot = computeSnapshot();
  return cachedSnapshot;
}

// Stable module-level constant — must be the same reference across calls,
// or useSyncExternalStore treats every render as a store change on the server.
const SERVER_SNAPSHOT: ArcanaSnapshot = {
  history: [],
  journal: [],
  stats: { streak: 0, totalReadings: 0, favoriteSpreadName: null, journalCount: 0 },
  daily: { date: "", cardId: DECK[0].id, reversed: false },
};
function getServerSnapshot(): ArcanaSnapshot {
  return SERVER_SNAPSHOT;
}

export function useArcanaData(): ArcanaSnapshot {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
