import { Link } from "@tanstack/react-router";
import { Brand } from "@/components/arcana/Brand";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        <div className="sm:col-span-2">
          <Brand />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            AstroFree — India’s first free AI Tarot card reading app, offering free Tarot readings,
            Mulank numerology tools, Tarot card meanings, spreads and astrology guides.
          </p>
        </div>
        <FooterCol
          title="Tarot"
          items={[
            { label: "Free Tarot Reading", to: "/tarot" },
            { label: "Tarot Card Meanings", to: "/guide/tarot-card-meanings" },
            { label: "Tarot Spreads", to: "/guide/tarot-spreads" },
            { label: "Tarot Guides", to: "/guide" },
          ]}
        />
        <FooterCol
          title="Numerology"
          items={[
            { label: "Numerology Calculator", to: "/numerology" },
            { label: "Mulank Calculator", to: "/numerology/mulank" },
            { label: "Bhagyank Calculator", to: "/bhagyank-calculator" },
            { label: "Namank Calculator", to: "/namank-calculator" },
            { label: "Numerology Guide", to: "/guide/numerology" },
          ]}
        />
        <FooterCol
          title="Popular Cards"
          items={[
            { label: "The Fool", to: "/tarot/the-fool" },
            { label: "The Lovers", to: "/tarot/the-lovers" },
            { label: "The Star", to: "/tarot/the-star" },
            { label: "The Moon", to: "/tarot/the-moon" },
          ]}
        />
        <FooterCol
          title="Company"
          items={[
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contact" },
            { label: "Editorial Policy", to: "/editorial-policy" },
            { label: "AI & LLM Information", to: "/llms.txt", external: true },
          ]}
        />
        <FooterCol
          title="Legal"
          items={[
            { label: "Privacy", to: "/privacy" },
            { label: "Terms", to: "/terms" },
            { label: "Disclaimer", to: "/disclaimer" },
            { label: "Cookie Policy", to: "/cookie-policy" },
          ]}
        />
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} AstroFree. Crafted with intention, made in India.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_75%,white)]">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) =>
          i.to.startsWith("mailto:") ? (
            <li key={i.label}>
              <a href={i.to} className="hover:text-foreground">
                {i.label}
              </a>
            </li>
          ) : (
            <li key={i.label}>
              {i.to === "/llms.txt" ? (
                <a href={i.to} className="hover:text-foreground">
                  {i.label}
                </a>
              ) : (
                <Link to={i.to} className="hover:text-foreground">
                  {i.label}
                </Link>
              )}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
