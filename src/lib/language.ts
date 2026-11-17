import { useSyncExternalStore } from "react";

export type Language =
  | "en"
  | "hi"
  | "hinglish"
  | "bn"
  | "te"
  | "mr"
  | "ta"
  | "gu"
  | "kn"
  | "ml"
  | "pa"
  | "or"
  | "as";

const STORAGE_KEY = "astrofree.language.v1";
const DEFAULT_LANGUAGE: Language = "hinglish";
const SUPPORTED_LANGUAGES: Language[] = [
  "en",
  "hi",
  "hinglish",
  "bn",
  "te",
  "mr",
  "ta",
  "gu",
  "kn",
  "ml",
  "pa",
  "or",
  "as",
];

function isBrowser() {
  return typeof window !== "undefined";
}

export function getStoredLanguage(): Language {
  if (!isBrowser()) return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(stored as Language) ? (stored as Language) : DEFAULT_LANGUAGE;
}

const listeners = new Set<() => void>();
function notify() {
  listeners.forEach((l) => l());
}
function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}
function getSnapshot(): Language {
  return getStoredLanguage();
}
function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

/** Maps internal language codes to valid BCP47 tags for the HTML lang attribute. */
const BCP47: Record<Language, string> = {
  en: "en",
  hi: "hi",
  hinglish: "hi-Latn",
  bn: "bn",
  te: "te",
  mr: "mr",
  ta: "ta",
  gu: "gu",
  kn: "kn",
  ml: "ml",
  pa: "pa",
  or: "or",
  as: "as",
};

export function setLanguage(lang: Language) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = BCP47[lang];
  notify();
}

export function useLanguage(): [Language, (lang: Language) => void] {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [lang, setLanguage];
}
