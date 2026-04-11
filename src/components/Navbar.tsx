"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/siteContent";

export function Navbar() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.header
      initial={reducedMotion ? false : { opacity: 0, y: -20 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4"
    >
      <div className="rounded-2xl border border-white/20 bg-slate-900/40 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <a href="#" className="text-sm font-semibold tracking-wide text-white">
            {siteContent.siteTitle}
          </a>
          <ul className="hidden items-center gap-5 md:flex">
            {siteContent.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-slate-200 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="mt-3 flex flex-wrap gap-3 md:hidden">
          {siteContent.navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-xs text-slate-200 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
}
