import { Link } from "@/components/LocalizedLink";
import { ChevronRight, Home } from "@/components/icons";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { isMirroredLocalizedPath, localizePath } from "@/locales";

export interface Crumb {
  label: string;
  /** Absolute app path; omit on the final crumb. */
  to?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const t = useTranslate();
  const [language] = useLanguage();

  const resolveLink = (to: string) =>
    isMirroredLocalizedPath(to) ? localizePath(to, language) : to;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm sm:text-xs text-muted-foreground">
        <li className="flex items-center gap-1">
          <Link to={localizePath("/", language) as any} className="inline-flex min-h-11 sm:min-h-0 items-center gap-1 py-1 sm:py-0 hover:text-foreground">
            <Home className="h-3.5 w-3.5" aria-hidden />
            <span>{t("nav.home")}</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />
            {item.to && i < items.length - 1 ? (
              <Link to={resolveLink(item.to) as any} className="inline-flex min-h-11 sm:min-h-0 items-center py-1 sm:py-0 hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground/80">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
