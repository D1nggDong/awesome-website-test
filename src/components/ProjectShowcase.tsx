"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/animations";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectShowcase() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="projects" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={siteContent.projects.title}
          subtitle={siteContent.projects.subtitle}
          eyebrow={siteContent.siteTagline}
        />
        <motion.div
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {siteContent.projects.items.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover={reducedMotion ? undefined : hoverLift}
            >
              <GlassCard className="h-full">
                <div
                  role="img"
                  aria-label={project.imageAlt}
                  className={`mb-5 h-36 rounded-2xl border border-white/20 bg-gradient-to-br ${project.accent}`}
                />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-cyan-100"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  className="mt-6 inline-flex text-sm font-medium text-cyan-200 transition-colors hover:text-cyan-100"
                >
                  {siteContent.projects.linkLabel}
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
