import { Link } from "@/components/LocalizedLink";
import { ArrowUpRight } from "@/components/icons";
import { GlassCard } from "@/components/arcana/GlassCard";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { isMirroredLocalizedPath, localizePath } from "@/locales";

type Hub =
  | "/tarot"
  | "/tarot/one-card"
  | "/tarot/three-card"
  | "/tarot/love"
  | "/tarot/celtic-cross"
  | "/career-tarot-reading"
  | "/yes-no-tarot"
  | "/major-arcana-tarot-cards-meanings"
  | "/what-do-reversed-tarot-cards-mean"
  | "/numerology"
  | "/numerology/mulank"
  | "/numerology/bhagyank"
  | "/numerology/namank"
  | "/numerology/compatibility"
  | "/tarot/combinations"
  | "/bhagyank-calculator"
  | "/namank-calculator"
  | "/guide"
  | "/guide/tarot-card-meanings"
  | "/guide/tarot-spreads"
  | "/guide/numerology"
  | "/guide/tarot-for-beginners"
  | "/guide/celtic-cross-guide"
  | "/guide/mulank-vs-bhagyank"
  | "/reading"
  | "/hi"
  | "/hi/numerology/mulank";

export interface HubLink {
  to: Hub;
  label: string;
  blurb: string;
}

/** Contextual hub links so every deep page links back into the main pillars. */
export function KeepExploring({ links }: { links: HubLink[] }) {
  const t = useTranslate();
  const [language] = useLanguage();

  const resolveLink = (to: string) =>
    isMirroredLocalizedPath(to) ? localizePath(to, language) : to;

  return (
    <section aria-labelledby="keep-exploring-heading" className="scroll-mt-24">
      <h2 id="keep-exploring-heading" className="font-display text-2xl aurora-text sm:text-3xl">
        {t("common.keepExploring")}
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={resolveLink(l.to) as any} className="block h-full">
              <GlassCard className="flex h-full items-start gap-3 p-4">
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base">{l.label}</span>
                  <span className="mt-1 block text-sm sm:text-xs leading-relaxed text-muted-foreground">
                    {l.blurb}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
              </GlassCard>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
