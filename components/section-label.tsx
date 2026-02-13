export function StatusBadge({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-400/20 bg-lime-400/5 font-mono font-medium text-[11px] tracking-[0.15em] uppercase text-lime-400">
      {active && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400" />
        </span>
      )}
      {children}
    </div>
  )
}

export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-16">
      <span className="font-mono font-medium text-xs tracking-[0.2em] text-lime-400">[{number}]</span>
      <span className="font-mono font-medium text-xs tracking-[0.2em] uppercase text-neutral-400">{label}</span>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  )
}
