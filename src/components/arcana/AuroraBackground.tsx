export function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--aurora-1)_26%,transparent),transparent_62%)]" />
      <div
        className="absolute -top-36 left-1/2 h-[56vh] w-[96vw] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--aurora-1) 48%, transparent) 0%, color-mix(in oklab, var(--aurora-2) 32%, transparent) 42%, transparent 72%)",
        }}
      />
      <div
        className="absolute bottom-[-18vh] right-[-10vw] hidden h-[48vh] w-[48vw] rounded-full opacity-35 sm:block"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--aurora-2) 45%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background)_85%)]" />
    </div>
  );
}
