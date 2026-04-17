import type { CSSProperties } from "react";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { StoryBoard } from "@/components/StoryBoard";
import { siteContent } from "@/content/siteContent";

const pageBaseClasses = "relative min-h-screen overflow-x-hidden bg-gradient-to-br";

export default function Home() {
  return (
    <div
      className={`${pageBaseClasses} ${siteContent.theme.backgroundGradient}`}
      style={
        {
          "--theme-glow": siteContent.theme.glowColor,
          "--card-border": siteContent.theme.cardBorder,
        } as CSSProperties
      }
    >
      <div
        aria-hidden={true}
        className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl"
      />
      <div
        aria-hidden={true}
        className="pointer-events-none absolute -right-16 top-64 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"
      />

      <Navbar />
      <main>
        <Hero />

        <section id="about" className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <GlassCard>
              <h2 className="text-3xl font-semibold tracking-tight text-white">{siteContent.about.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{siteContent.about.body}</p>
            </GlassCard>
          </div>
        </section>

        <StoryBoard />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
