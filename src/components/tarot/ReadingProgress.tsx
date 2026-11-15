import { cn } from "@/lib/utils";

export function ReadingProgress({ total, revealed }: { total: number; revealed: number }) {
  const pct = total === 0 ? 0 : Math.round((revealed / total) * 100);
  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span>Revealed</span>
        <span>{revealed} / {total}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={cn("h-full rounded-full bg-[linear-gradient(90deg,var(--gold-soft),var(--gold))] transition-all duration-500")}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
