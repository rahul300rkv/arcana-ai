import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  getLocale,
  LANGUAGE_OPTIONS,
  SUPPORTED_LANGUAGES,
  type LocaleCode,
} from "@/locales";

export type Language = LocaleCode;
export { LANGUAGE_OPTIONS };

const STORAGE_KEY = "astrofree.language.v1";
const DEFAULT_LANGUAGE: Language = "en";

const LocaleContext = createContext<Language | null>(null);

let ssrLanguageOverride: Language | null = null;

/** Used during SSR prerendering so server render matches the target URL locale. */
export function setSsrLanguage(lang: Language | null) {
  ssrLanguageOverride = lang;
}

export function LocaleProvider({
  lang,
  children,
}: {
  lang: Language;
  children: ReactNode;
}) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = getBcp47(lang);
      if (getStoredLanguage() !== lang) {
        setLanguage(lang);
      }
    }
  }, [lang]);

  return <LocaleContext.Provider value={lang}>{children}</LocaleContext.Provider>;
}

function isBrowser() {
  return typeof window !== "undefined";
}

export function getStoredLanguage(): Language {
  if (!isBrowser()) return ssrLanguageOverride ?? DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(stored as Language)
    ? (stored as Language)
    : DEFAULT_LANGUAGE;
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
  return ssrLanguageOverride ?? DEFAULT_LANGUAGE;
}

export function getBcp47(lang: Language): string {
  return getLocale(lang).meta.bcp47;
}

export function setLanguage(lang: Language) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = getBcp47(lang);
  notify();
}

export function useLanguage(): [Language, (lang: Language) => void] {
  const contextLang = useContext(LocaleContext);
  const storedLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [contextLang ?? storedLang, setLanguage];
}
