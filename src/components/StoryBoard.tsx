"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { siteContent } from "@/content/siteContent";

export function StoryBoard() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="story" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={siteContent.story.title}
          subtitle={siteContent.story.subtitle}
          eyebrow={siteContent.siteTagline}
        />

        <div className="space-y-14">
          {siteContent.story.chapters.map((chapter) => (
            <motion.article
              key={chapter.id}
              id={`chapter-${chapter.id}`}
              variants={staggerContainer}
              initial={reducedMotion ? false : "hidden"}
              whileInView={reducedMotion ? undefined : "visible"}
              viewport={{ once: false, amount: 0.35 }}
              className="grid items-stretch gap-6 rounded-3xl border border-white/15 bg-slate-900/35 p-5 backdrop-blur-xl md:grid-cols-2 md:p-8"
            >
              <motion.div variants={fadeUp} className="space-y-5">
                <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                  {chapter.stage}
                </p>
                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{chapter.title}</h3>
                <p className="text-slate-300">{chapter.description}</p>
                <motion.ul variants={staggerContainer} className="space-y-3">
                  {chapter.bullets.map((bullet) => (
                    <motion.li
                      key={bullet}
                      variants={fadeUp}
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-cyan-100"
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div variants={fadeUp} className="md:flex md:items-center">
                <div
                  aria-hidden={true}
                  className={`relative h-56 w-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br ${chapter.accent} md:h-full md:min-h-[320px]`}
                >
                  <div className="absolute inset-6 rounded-2xl border border-white/25 bg-black/20" />
                  <div className="absolute left-6 top-6 h-2 w-20 rounded-full bg-white/50" />
                  <div className="absolute bottom-6 left-6 h-16 w-3/4 rounded-xl border border-white/20 bg-white/10" />
                  <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full border border-white/30 bg-white/20" />
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
