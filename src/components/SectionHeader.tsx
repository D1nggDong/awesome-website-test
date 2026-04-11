type SectionHeaderProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
};

export function SectionHeader({ title, subtitle, eyebrow }: SectionHeaderProps) {
  return (
    <header className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-300">{subtitle}</p>
    </header>
  );
}
