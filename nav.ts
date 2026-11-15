import { Home, Sparkles, User, Settings, BookOpen } from "lucide-react";

export type NavItem = {
  title: string;
  to: string;
  icon: typeof Home;
};

export const appNavItems: NavItem[] = [
  { title: "Dashboard", to: "/dashboard", icon: Home },
  { title: "Readings", to: "/reading", icon: Sparkles },
  { title: "Journal", to: "/journal", icon: BookOpen },
  { title: "Profile", to: "/profile", icon: User },
  { title: "Settings", to: "/settings", icon: Settings },
];
