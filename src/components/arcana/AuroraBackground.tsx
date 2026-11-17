export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--aurora-1)_25%,transparent),transparent_60%)]" />
      <div
        className="absolute -top-40 left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full blur-3xl opacity-45"
        style={{
          background:
            "conic-gradient(from 90deg, color-mix(in oklab, var(--aurora-1) 55%, transparent), color-mix(in oklab, var(--aurora-2) 55%, transparent), color-mix(in oklab, var(--aurora-3) 45%, transparent), color-mix(in oklab, var(--gold) 45%, transparent), color-mix(in oklab, var(--aurora-1) 55%, transparent))",
        }}
      />
      <div
        className="absolute bottom-[-20vh] right-[-10vw] hidden h-[50vh] w-[50vw] rounded-full blur-3xl sm:block"
        style={{ background: "color-mix(in oklab, var(--aurora-2) 40%, transparent)" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background)_85%)]" />
    </div>
  );
}
