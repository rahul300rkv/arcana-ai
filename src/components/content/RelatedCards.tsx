import { Link } from "@/components/LocalizedLink";
import { ArrowRight } from "@/components/icons";
import { GlassCard } from "@/components/arcana/GlassCard";

export interface RelatedItem {
  slug: string;
  name: string;
  subtitle: string;
  image?: string;
  /** Route pattern this item belongs to. */
  base: "/tarot/$slug" | "/numerology/$slug";
}

export function RelatedCards({ title, items }: { title: string; items: RelatedItem[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="related-heading" className="scroll-mt-24">
      <h2 id="related-heading" className="font-display text-2xl aurora-text sm:text-3xl">
        {title}
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.slug}>
            <Link to={item.base} params={{ slug: item.slug }} className="block h-full">
              <GlassCard className="flex h-full min-h-14 items-center gap-4 p-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={`${item.name} Rider–Waite–Smith tarot card illustration: ${item.subtitle}`}
                    loading="lazy"
                    decoding="async"
                    width={64}
                    height={96}
                    className="h-20 w-14 shrink-0 rounded-lg object-cover"
                  />
                )}
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base">{item.name}</span>
                  <span className="mt-1 block truncate text-xs text-muted-foreground">
                    {item.subtitle}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
              </GlassCard>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
