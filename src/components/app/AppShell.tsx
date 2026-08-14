import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { ParticleBackground } from "@/components/arcana/ParticleBackground";
import { PageTransition } from "@/components/arcana/PageTransition";
import { InArticleAd } from "@/components/ads/InArticleAd";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      <AuroraBackground />
      <ParticleBackground count={30} />
      <Sidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-28 lg:pb-14">
          <PageTransition>{children}</PageTransition>
          <InArticleAd />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
