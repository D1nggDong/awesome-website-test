import { siteContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-slate-900/40 px-6 py-5 text-sm text-slate-300 backdrop-blur-xl sm:flex-row">
        <p>{siteContent.footer.text}</p>
        <div className="flex flex-wrap items-center gap-4">
          {siteContent.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              {social.label}
            </a>
          ))}
          {siteContent.footer.legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
