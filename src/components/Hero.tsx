"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/Button";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -140]);

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:pt-24">
      <motion.div
        style={{ y: orbY, backgroundColor: "var(--theme-glow)" }}
        aria-hidden={true}
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 w-64 rounded-full blur-3xl"
        transition={{ duration: 0.2 }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div
          aria-hidden={true}
          className={`mx-auto mb-8 h-1 w-32 rounded-full bg-gradient-to-r ${siteContent.theme.accentGradient}`}
        />
        <motion.h1
          variants={fadeUp}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.6 }}
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl"
        >
          {siteContent.hero.heading}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
        >
          {siteContent.hero.subtext}
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button label={siteContent.hero.ctaLabel} href={siteContent.hero.ctaHref} />
          <Button
            label={siteContent.hero.secondaryLabel}
            href={siteContent.hero.secondaryHref}
            variant="secondary"
          />
        </motion.div>
      </div>
    </section>
  );
}
