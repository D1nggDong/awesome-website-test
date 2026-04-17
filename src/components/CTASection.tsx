"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";

export function CTASection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.4 }}
        >
          <GlassCard className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{siteContent.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">{siteContent.cta.description}</p>
            <div className="mt-8 flex justify-center">
              <Button label={siteContent.cta.buttonLabel} href={siteContent.cta.buttonHref} />
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
