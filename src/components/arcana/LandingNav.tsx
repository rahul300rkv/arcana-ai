import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe, Menu, X } from "lucide-react";
import { Brand } from "./Brand";
import { GoldButton } from "./GoldButton";
import { useLanguage } from "@/lib/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const [language, setLanguage] = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-5 py-2.5">
          <Brand />
          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-2 py-1.5">
              <Globe className="h-3.5 w-3.5 text-[color:var(--gold)]" aria-hidden="true" />
              <Select value={language} onValueChange={(value) => setLanguage(value as typeof language)}>
                <SelectTrigger className="h-8 w-[118px] border-0 bg-transparent px-1 text-xs shadow-none ring-0 focus:ring-0">
                  <SelectValue aria-label="Language" placeholder="Language" />
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
            <Link to="/dashboard">
              <GoldButton size="sm">Start Reading</GoldButton>
            </Link>
          </div>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <nav id={menuId} aria-label="Mobile" className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
                <Globe className="h-3.5 w-3.5 text-[color:var(--gold)]" aria-hidden="true" />
                <Select value={language} onValueChange={(value) => setLanguage(value as typeof language)}>
                  <SelectTrigger className="h-9 flex-1 border-0 bg-transparent px-0 text-xs shadow-none ring-0 focus:ring-0">
                    <SelectValue aria-label="Language" placeholder="Language" />
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
              <Link to="/dashboard" className="block"><GoldButton size="sm" className="w-full">Start</GoldButton></Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
