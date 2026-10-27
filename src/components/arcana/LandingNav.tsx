import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe, Menu, X, ArrowRight } from "lucide-react";
import { Brand } from "./Brand";
import { useLanguage } from "@/lib/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navLinks = [
  { label: "Tarot Spreads", to: "/tarot" as const },
  { label: "Vedic Numerology", to: "/numerology" as const },
  { label: "Card Meanings", to: "/guide/tarot-card-meanings" as const },
  { label: "Sacred Guides", to: "/guide" as const },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const [language, setLanguage] = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-all duration-300">
      <div className="mx-auto mt-3 max-w-6xl px-4 sm:px-6">
        <div className="glass flex items-center justify-between gap-6 rounded-full border border-white/10 bg-[oklch(0.14_0.03_275/0.75)] px-5 py-2.5 shadow-2xl backdrop-blur-xl">
          {/* Zone 1: Brand Wordmark */}
          <div className="shrink-0">
            <Brand size="md" />
          </div>

          {/* Zone 2: Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-amber-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Controls & Primary Action */}
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1">
              <Globe className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              <Select
                value={language}
                onValueChange={(value) => setLanguage(value as typeof language)}
              >
                <SelectTrigger className="h-7 w-[105px] border-0 bg-transparent px-1 text-xs text-foreground/90 shadow-none ring-0 focus:ring-0">
                  <SelectValue aria-label="Language" placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="border-border/60 bg-popover/95 backdrop-blur-md">
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                  <SelectItem value="hinglish">Hinglish</SelectItem>
                  <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
                  <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                  <SelectItem value="mr">मराठी (Marathi)</SelectItem>
                  <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                  <SelectItem value="gu">ગુજરાતી (Gujarati)</SelectItem>
                  <SelectItem value="kn">ಕನ್ನಡ (Kannada)</SelectItem>
                  <SelectItem value="ml">മലയാളം (Malayalam)</SelectItem>
                  <SelectItem value="pa">ਪੰਜਾਬੀ (Punjabi)</SelectItem>
                  <SelectItem value="or">ଓଡ଼ିଆ (Odia)</SelectItem>
                  <SelectItem value="as">অসমীয়া (Assamese)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Link
              to="/reading"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-4 py-2 text-xs font-semibold text-slate-950 shadow-glow-gold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>Begin Reading</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full glass border border-white/10 text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav
            id={menuId}
            aria-label="Mobile Navigation"
            className="glass mt-2 flex flex-col gap-1.5 rounded-2xl border border-white/10 bg-[oklch(0.14_0.03_275/0.95)] p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5">
                <Globe className="h-4 w-4 text-amber-400" />
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value as typeof language)}
                >
                  <SelectTrigger className="h-8 flex-1 border-0 bg-transparent px-0 text-xs shadow-none ring-0 focus:ring-0">
                    <SelectValue aria-label="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">हिन्दी</SelectItem>
                    <SelectItem value="hinglish">Hinglish</SelectItem>
                    <SelectItem value="bn">বাংলা</SelectItem>
                    <SelectItem value="te">తెలుగు</SelectItem>
                    <SelectItem value="mr">मराठी</SelectItem>
                    <SelectItem value="ta">தமிழ்</SelectItem>
                    <SelectItem value="gu">ગુજરાતી</SelectItem>
                    <SelectItem value="kn">ಕನ್ನಡ</SelectItem>
                    <SelectItem value="ml">മലയാളം</SelectItem>
                    <SelectItem value="pa">ਪੰਜਾਬੀ</SelectItem>
                    <SelectItem value="or">ଓଡ଼ିଆ</SelectItem>
                    <SelectItem value="as">অসমীয়া</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Link
                to="/reading"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-glow-gold"
              >
                <span>Begin Tarot Reading</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
