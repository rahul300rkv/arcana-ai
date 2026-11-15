import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  icon?: LucideIcon;
  /** Renders as h2 by default; pass "h3" for nested sections. */
  as?: "h2" | "h3";
  paragraphs?: string[];
  children?: ReactNode;
  className?: string;
}

/** A titled prose block. Every long-form section on a content page uses this. */
export function ContentSection({
  id,
  title,
  icon: Icon,
  as = "h2",
  paragraphs,
  children,
  className,
}: Props) {
  const Heading = as;
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("scroll-mt-24", className)}>
      <Heading
        id={`${id}-heading`}
        className={cn(
          "flex items-center gap-2 font-display tracking-wide",
          as === "h2" ? "text-2xl sm:text-3xl aurora-text" : "text-lg sm:text-xl",
        )}
      >
        {Icon && (
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl glass text-[var(--gold)]">
            <Icon className="h-4.5 w-4.5" aria-hidden />
          </span>
        )}
        {title}
      </Heading>
      {paragraphs && paragraphs.length > 0 && (
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
      {children && <div className="mt-5">{children}</div>}
    </section>
  );
}
