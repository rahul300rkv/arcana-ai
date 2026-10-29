import { Link } from "@tanstack/react-router";
import { Brand } from "@/components/arcana/Brand";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#06070c]/90 py-12 sm:py-16 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="col-span-2">
            <Brand size="lg" />
            <p className="mt-4 max-w-sm text-sm text-slate-400 leading-relaxed">
              AstroFree unites 78-card sacred tarot traditions with Vedic numerology wisdom and modern generative intelligence. Designed for reflection, clarity, and personal empowerment.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              <span>Ancient Arcana · Modern Vedic Intelligence</span>
            </div>
          </div>

          <FooterCol
            title="Tarot Spreads"
            items={[
              { label: "Celtic Cross (10 Cards)", to: "/tarot/celtic-cross" },
              { label: "Three-Card Reading", to: "/tarot/three-card" },
              { label: "Love & Relationships", to: "/tarot/love" },
              { label: "Career & Ambition", to: "/tarot/career" },
              { label: "Daily Single Card", to: "/tarot/one-card" },
              { label: "Yes / No Oracle", to: "/tarot/yes-no" },
            ]}
          />

          <FooterCol
            title="Vedic Numerology"
            items={[
              { label: "All Calculators", to: "/numerology" },
              { label: "Mulank Root Calculator", to: "/numerology/mulank" },
              { label: "Bhagyank Destiny Path", to: "/bhagyank-calculator" },
              { label: "Namank Name Vibration", to: "/namank-calculator" },
              { label: "Mulank vs Bhagyank", to: "/guide/mulank-vs-bhagyank" },
            ]}
          />

          <FooterCol
            title="Wisdom & Legal"
            items={[
              { label: "Tarot Card Meanings", to: "/guide/tarot-card-meanings" },
              { label: "Major Arcana Guide", to: "/guide/major-arcana-meanings" },
              { label: "About AstroFree", to: "/about" },
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "Disclaimer", to: "/disclaimer" },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} AstroFree. Crafted with reverence & intention.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-slate-300">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-400">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="transition-colors hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
