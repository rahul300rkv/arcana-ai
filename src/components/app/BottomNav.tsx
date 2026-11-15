import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { appNavItems } from "@/lib/nav";
import { useTranslate } from "@/lib/i18n";

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const t = useTranslate();
  return (
    <nav className="fixed bottom-3 inset-x-3 z-30 lg:hidden">
      <div className="glass mx-auto flex max-w-md items-center justify-around rounded-full px-2 py-2">
        {appNavItems.map((item) => {
          const active = pathname === item.to;
          return (
            <Link
              key={item.titleKey}
              to={item.to}
              aria-label={t(item.titleKey)}
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full transition-all",
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
