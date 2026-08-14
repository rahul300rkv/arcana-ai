import { useSyncExternalStore } from "react";

export type ThemePreference = "dark" | "light" | "system";
export type ResolvedTheme = "dark" | "light";

const STORAGE_KEY = "astrofree.theme.v1";

function isBrowser() {
  return typeof window !== "undefined";
}

function getMediaQuery() {
  return window.matchMedia("(prefers-color-scheme: light)");
}

export function getStoredPreference(): ThemePreference {
  if (!isBrowser()) return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "dark";
}

export function resolveTheme(pref: ThemePreference): ResolvedTheme {
  if (pref === "system") {
    if (!isBrowser()) return "dark";
    return getMediaQuery().matches ? "light" : "dark";
  }
  return pref;
}

function applyResolvedTheme(resolved: ResolvedTheme) {
  if (!isBrowser()) return;
  document.documentElement.classList.toggle("light", resolved === "light");
  document.documentElement.style.colorScheme = resolved;
}

const listeners = new Set<() => void>();
function notify() {
  listeners.forEach((l) => l());
}
function subscribe(l: () => void) {
  listeners.add(l);
  if (isBrowser()) {
    const mq = getMediaQuery();
    const onChange = () => {
      if (getStoredPreference() === "system") {
        applyResolvedTheme(resolveTheme("system"));
        notify();
      }
    };
    mq.addEventListener("change", onChange);
    return () => {
      listeners.delete(l);
      mq.removeEventListener("change", onChange);
    };
  }
  return () => listeners.delete(l);
}

function getSnapshot(): ThemePreference {
  return getStoredPreference();
}

function getServerSnapshot(): ThemePreference {
  return "dark";
}

export function setThemePreference(pref: ThemePreference) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, pref);
  applyResolvedTheme(resolveTheme(pref));
  notify();
}

/** Call once on the client as early as possible to sync the DOM with the stored preference. */
export function initTheme() {
  if (!isBrowser()) return;
  applyResolvedTheme(resolveTheme(getStoredPreference()));
}

export function useThemePreference(): [ThemePreference, (pref: ThemePreference) => void] {
  const pref = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [pref, setThemePreference];
}
