import { Home, Sparkles, User, Settings, BookOpen, Hash } from "lucide-react";
import type { TranslationKey } from "./i18n";

export type NavItem = {
  titleKey: TranslationKey;
  to: string;
  icon: typeof Home;
};

export const appNavItems: NavItem[] = [
  { titleKey: "nav.dashboard", to: "/dashboard", icon: Home },
  { titleKey: "nav.readings", to: "/reading", icon: Sparkles },
  { titleKey: "numerology.navLabel", to: "/numerology", icon: Hash },
  { titleKey: "nav.journal", to: "/journal", icon: BookOpen },
  { titleKey: "nav.profile", to: "/profile", icon: User },
  { titleKey: "nav.settings", to: "/settings", icon: Settings },
];
