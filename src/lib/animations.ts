const premiumEase = [0.21, 1, 0.32, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: premiumEase },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const hoverLift = {
  y: -6,
  transition: { type: "spring", stiffness: 280, damping: 20 } as const,
};
