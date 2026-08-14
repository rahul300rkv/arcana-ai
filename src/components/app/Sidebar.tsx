import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Brand } from "@/components/arcana/Brand";
import { appNavItems } from "@/lib/nav";
import { useTranslate } from "@/lib/i18n";

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const t = useTranslate();

  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col p-4">
      <div className="glass flex h-full flex-col rounded-3xl p-4">
        <div className="px-2 py-3">
          <Brand />
        </div>
        <nav className="mt-4 flex flex-1 flex-col gap-1">
          {appNavItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.titleKey}
                to={item.to}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all",
                  active
                    ? "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_18%,transparent),transparent)] text-foreground border border-white/10"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                )}
              >
                <item.icon
                  className={cn(
                    "h-4 w-4",
                    active && "text-[color-mix(in_oklab,var(--gold)_85%,white)]",
                  )}
                  strokeWidth={1.6}
                />
                {t(item.titleKey)}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
