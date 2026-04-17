"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="testimonials" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={siteContent.testimonials.title}
          subtitle={siteContent.testimonials.subtitle}
          eyebrow={siteContent.siteTagline}
        />
        <motion.div
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {siteContent.testimonials.items.map((item) => (
            <motion.div key={item.name} variants={fadeUp}>
              <GlassCard className="h-full">
                <blockquote className="text-slate-200">“{item.quote}”</blockquote>
                <p className="mt-5 text-sm font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
