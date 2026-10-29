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
        {/* Liquid Chrome Floating Pill Bar */}
        <div className="flex items-center justify-between gap-6 rounded-full border border-white/20 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(14,16,24,0.88)_100%)] px-5 py-2.5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(200,225,255,0.1)] backdrop-blur-2xl">
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
                className="whitespace-nowrap text-sm font-medium text-slate-300 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Controls & Primary Action */}
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
              <Globe className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
              <Select
                value={language}
                onValueChange={(value) => setLanguage(value as typeof language)}
              >
                <SelectTrigger className="h-7 w-[105px] border-0 bg-transparent px-1 text-xs text-foreground/90 shadow-none ring-0 focus:ring-0">
                  <SelectValue aria-label="Language" placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="border-white/15 bg-[#0e101a]/95 backdrop-blur-xl shadow-2xl">
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

            {/* Liquid Chrome CTA Button */}
            <Link
              to="/reading"
              className="liquid-chrome-btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap"
            >
              <span>Begin Reading</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/[0.05] text-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] lg:hidden"
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
            className="mt-2 flex flex-col gap-1.5 rounded-2xl border border-white/20 bg-[#0c0d16]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-xs text-muted-foreground">Language</span>
              <Select
                value={language}
                onValueChange={(value) => setLanguage(value as typeof language)}
              >
                <SelectTrigger className="h-8 w-[140px] border-white/15 bg-white/[0.05] text-xs text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-white/15 bg-[#0e101a] backdrop-blur-xl">
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
              onClick={() => setOpen(false)}
              className="liquid-chrome-btn mt-2 flex items-center justify-center gap-2 rounded-full py-2.5 text-center text-xs font-bold uppercase tracking-wider"
            >
              <span>Begin Reading</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
