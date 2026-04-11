"use client";

import { motion, useReducedMotion } from "framer-motion";

type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ label, href, variant = "primary" }: ButtonProps) {
  const reducedMotion = useReducedMotion();

  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80";
  const styleClasses =
    variant === "primary"
      ? "bg-white/90 text-slate-900 shadow-lg shadow-cyan-500/20 hover:bg-white"
      : "border border-white/30 bg-white/5 text-white hover:bg-white/10";

  return (
    <motion.a
      href={href}
      whileHover={reducedMotion ? undefined : { scale: 1.02, y: -1 }}
      whileTap={reducedMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`${baseClasses} ${styleClasses}`}
    >
      {label}
    </motion.a>
  );
}
