export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Aura 1 — top-left. Mint (light) / very subtle teal (dark) */}
      <div className="animate-pulse-soft absolute -top-[30%] -left-[20%] h-[60vw] w-[60vw] rounded-full bg-[#ccfbf1] opacity-70 blur-[180px] dark:bg-[#2dd4bf] dark:opacity-[0.07]" />
      {/* Aura 2 — bottom-right. Sky (light) / very subtle orange (dark) */}
      <div className="animate-pulse-soft-2 absolute -bottom-[30%] -right-[20%] h-[60vw] w-[60vw] rounded-full bg-[#e0f2fe] opacity-80 blur-[180px] dark:bg-[#f97316] dark:opacity-[0.06]" />
      {/* Dark vignette to unify the slate-950 base and kill any harsh seam */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, oklch(0.16 0.025 255 / 0.6) 70%, oklch(0.16 0.025 255) 100%)",
        }}
      />
      {/* Grid noise (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.21_0.03_255) 1px, transparent 1px), linear-gradient(90deg, oklch(0.21_0.03_255) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
