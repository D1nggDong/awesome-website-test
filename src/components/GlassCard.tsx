import { PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<{
  className?: string;
}>;

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <article
      className={`rounded-3xl border border-[var(--card-border)] bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur-xl ${className}`}
    >
      {children}
    </article>
  );
}
