"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/animations";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";

export function FeatureGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={siteContent.features.title}
          subtitle={siteContent.features.subtitle}
          eyebrow={siteContent.siteTagline}
        />
        <motion.div
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {siteContent.features.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={reducedMotion ? undefined : hoverLift}
            >
              <GlassCard>
                <p className="text-2xl" aria-hidden={true}>
                  {item.icon}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
