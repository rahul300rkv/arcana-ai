import { GlassCard } from "@/components/arcana/GlassCard";

export interface InfoItem {
  label: string;
  value: string;
}

/** Compact key/value grid used for card correspondences and lucky attributes. */
export function InfoGrid({ items, columns = 3 }: { items: InfoItem[]; columns?: 2 | 3 }) {
  return (
    <dl
      className={`grid gap-3 ${columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 lg:grid-cols-3"}`}
    >
      {items.map((item) => (
        <GlassCard key={item.label} className="p-4">
          <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {item.label}
          </dt>
          <dd className="mt-1 text-sm font-medium text-foreground">{item.value}</dd>
        </GlassCard>
      ))}
    </dl>
  );
}
