import { useRouterState } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import { cn } from "@/lib/utils";
import { appNavItems } from "@/lib/nav";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { isMirroredLocalizedPath, localizePath, stripLocalePrefix } from "@/locales";

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const strippedPathname = stripLocalePrefix(pathname);
  const t = useTranslate();
  const [language] = useLanguage();
  return (
    <nav className="fixed bottom-3 inset-x-3 z-30 lg:hidden">
      <div className="glass mx-auto flex max-w-md items-center justify-around rounded-full px-2 py-2">
        {appNavItems.map((item) => {
          const active = strippedPathname === item.to;
          const targetTo = isMirroredLocalizedPath(item.to)
            ? localizePath(item.to, language)
            : item.to;
          return (
            <Link
              key={item.titleKey}
              to={targetTo}
              aria-label={t(item.titleKey)}
              className={cn(
                "grid h-12 w-12 place-items-center rounded-full transition-all",
                active
                  ? "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_25%,transparent),transparent)] text-[color-mix(in_oklab,var(--gold)_85%,white)]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <item.icon className="h-5 w-5" strokeWidth={1.6} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
