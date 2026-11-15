import { useSyncExternalStore } from "react";
import type { DrawnCard, ReadingState, SpreadId } from "./types";

const KEY = "arcana.reading.v1";
const EMPTY: ReadingState = { spreadId: null, question: "", cards: [], createdAt: null };

const listeners = new Set<() => void>();
let state: ReadingState = load();

function load(): ReadingState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
  } catch {
    return EMPTY;
  }
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore quota */
  }
}

function set(patch: Partial<ReadingState>) {
  state = { ...state, ...patch };
  persist();
  listeners.forEach((l) => l());
}

export const readingStore = {
  get: () => state,
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  setSpread(spreadId: SpreadId) {
    set({ spreadId, cards: [], createdAt: null });
  },
  setQuestion(question: string) {
    set({ question });
  },
  setCards(cards: DrawnCard[]) {
    set({ cards, createdAt: Date.now() });
  },
  reset() {
    set(EMPTY);
  },
};

export function useReading(): ReadingState {
  return useSyncExternalStore(
    readingStore.subscribe,
    readingStore.get,
    () => EMPTY,
  );
}
