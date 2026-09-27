export function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5e9] px-2.5 py-1 text-xs font-medium text-[#0b6b0b]">
      <span className="size-1.5 rounded-full bg-[#14a800]" aria-hidden />
      {children}
    </span>
  );
}
