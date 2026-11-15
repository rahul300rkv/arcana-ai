import { ChevronRight, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const crumbs = [{ label: "Home", to: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        {crumbs.map((item, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />}

              {item.to && !isLast ? (
                <Link to={item.to} className="inline-flex items-center gap-1 hover:text-foreground">
                  {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-foreground/80" : "text-muted-foreground"}>
                  {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  <span className={index === 0 ? "ml-1" : ""}>{item.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
