export type NavItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  imageAlt: string;
  accent: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type StoryChapter = {
  id: string;
  stage: string;
  title: string;
  description: string;
  bullets: string[];
  accent: string;
};

export type SiteContent = {
  siteTitle: string;
  siteTagline: string;
  hero: {
    heading: string;
    subtext: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  about: {
    title: string;
    body: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    linkLabel: string;
    items: ProjectItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  story: {
    title: string;
    subtitle: string;
    chapters: StoryChapter[];
  };
  footer: {
    text: string;
    legalLinks: NavItem[];
  };
  navigation: NavItem[];
  socialLinks: SocialLink[];
  theme: {
    backgroundGradient: string;
    accentGradient: string;
    glowColor: string;
    cardBorder: string;
  };
};

export const siteContent: SiteContent = {
  siteTitle: "Nova Atelier",
  siteTagline: "Crafting elegant digital experiences",
  hero: {
    heading: "Personal websites that feel premium from the first scroll.",
    subtext:
      "I design and build polished web experiences blending performance, visual clarity, and delightful motion.",
    ctaLabel: "View Projects",
    ctaHref: "#projects",
    secondaryLabel: "Let's Talk",
    secondaryHref: "#contact",
  },
  about: {
    title: "About",
    body: "I am a product-focused developer building refined web interfaces with a strong attention to detail, clean architecture, and thoughtful interactions.",
  },
  features: {
    title: "Skills",
    subtitle: "Capabilities that elevate product quality and user trust.",
    items: [
      {
        title: "UI Engineering",
        description: "Responsive, accessible interfaces with modern component systems.",
        icon: "✨",
      },
      {
        title: "Motion Design",
        description: "Subtle, meaningful animation that guides focus and adds polish.",
        icon: "🎬",
      },
      {
        title: "Performance",
        description: "Fast loading, optimized assets, and smooth runtime behavior.",
        icon: "⚡",
      },
      {
        title: "Product Thinking",
        description: "Feature decisions grounded in user needs and measurable outcomes.",
        icon: "🧠",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Selected work focused on quality, scale, and user impact.",
    linkLabel: "View project →",
    items: [
      {
        title: "Lumen Dashboard",
        description: "A data-rich analytics workspace with custom visualizations and role-based workflows.",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        href: "#",
        imageAlt: "Preview card for Lumen Dashboard project",
        accent: "from-cyan-400/40 to-blue-500/30",
      },
      {
        title: "Pulse Commerce",
        description: "Premium storefront architecture with dynamic merchandising and conversion-focused UX.",
        tech: ["React", "Framer Motion", "Headless CMS"],
        href: "#",
        imageAlt: "Preview card for Pulse Commerce project",
        accent: "from-violet-400/40 to-fuchsia-500/30",
      },
      {
        title: "Orbit Studio",
        description: "Brand-forward marketing site with storytelling sections and immersive interactions.",
        tech: ["Next.js", "Animation", "SEO"],
        href: "#",
        imageAlt: "Preview card for Orbit Studio project",
        accent: "from-teal-400/40 to-emerald-500/30",
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "Trusted by founders and teams who care about quality.",
    items: [
      {
        quote: "The final product felt world-class. Every detail was intentional.",
        name: "Ariana Chen",
        role: "Founder, Brightlayer",
      },
      {
        quote: "Beautiful implementation, excellent communication, and fast delivery.",
        name: "Marcus Vale",
        role: "Product Lead, Altitude",
      },
      {
        quote: "Our site went from average to memorable without sacrificing performance.",
        name: "Noah Ibrahim",
        role: "Marketing Director, Northline",
      },
    ],
  },
  cta: {
    title: "Let's build something exceptional.",
    description: "Tell me what you're creating, and I'll help shape a web experience your audience remembers.",
    buttonLabel: "Start a Project",
    buttonHref: "mailto:hello@example.com",
  },
  story: {
    title: "A scroll-first product story",
    subtitle:
      "Move through each chapter to see how strategy, craft, and delivery come together into one polished web experience.",
    chapters: [
      {
        id: "discovery",
        stage: "Chapter 01",
        title: "Discovery sets the narrative",
        description:
          "Every engagement starts with audience intent, brand goals, and conversion moments so each section has a job.",
        bullets: [
          "Clarify the message hierarchy",
          "Map content to buyer intent",
          "Plan story beats for scroll depth",
        ],
        accent: "from-cyan-400/30 via-blue-500/20 to-violet-500/20",
      },
      {
        id: "design",
        stage: "Chapter 02",
        title: "Design creates momentum",
        description:
          "Visual systems are built as cinematic scenes so users feel progression rather than reading disconnected blocks.",
        bullets: [
          "Create immersive chapter transitions",
          "Use motion to guide focus",
          "Keep typography bold and readable",
        ],
        accent: "from-violet-400/30 via-fuchsia-500/20 to-pink-500/20",
      },
      {
        id: "delivery",
        stage: "Chapter 03",
        title: "Delivery turns story into results",
        description:
          "The final build prioritizes speed, accessibility, and confidence so the experience looks premium and performs reliably.",
        bullets: [
          "Ship lightweight, responsive UI",
          "Preserve accessibility and clarity",
          "Optimize for engagement and trust",
        ],
        accent: "from-emerald-400/30 via-teal-500/20 to-cyan-500/20",
      },
    ],
  },
  footer: {
    text: "© 2026 Nova Atelier. Built with care.",
    legalLinks: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Story", href: "#story" },
    { label: "Discovery", href: "#chapter-discovery" },
    { label: "Design", href: "#chapter-design" },
    { label: "Delivery", href: "#chapter-delivery" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
  ],
  theme: {
    backgroundGradient: "from-slate-950 via-indigo-950 to-slate-950",
    accentGradient: "from-cyan-300 via-violet-300 to-fuchsia-300",
    glowColor: "rgba(56,189,248,0.3)",
    cardBorder: "rgba(255,255,255,0.2)",
  },
};
