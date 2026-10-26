"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import AuroraScene from "../ui/AuroraScene";
import SectionHeading from "../ui/SectionHeading";
import DeviceMockup from "../ui/DeviceMockup";
import NavigationDots from "../ui/NavigationDots";
import { useCarousel } from "@/hooks/useCarousel";

interface Mode {
  title: string;
  tag: string;
  icon: ReactNode;
  color: string;
  description: string;
  screenshot: string;
  screenAlt: string;
}

const modes: Mode[] = [
  {
    title: "Zen Mode",
    tag: "No timer",
    color: "#35E8FF",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" />
        <path d="M32 4 A28 28 0 0 1 32 60 A14 14 0 0 1 32 32 A14 14 0 0 0 32 4" fill="currentColor" />
        <circle cx="32" cy="18" r="4" fill="#06051A" />
        <circle cx="32" cy="46" r="4" fill="currentColor" />
      </svg>
    ),
    description:
      "No timer. No pressure. Just you and the board. Place blocks, clear lines, and lose yourself in the flow. Unlock premium backgrounds as you level up.",
    screenshot: "/images/screenshots/zen-mode.jpg",
    screenAlt: "Zen mode: a calm board on a soft background with no timer showing",
  },
  {
    title: "Blitz Mode",
    tag: "60 seconds",
    color: "#FFD63A",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13 2L4.5 13.5H11L9.5 22 19 10.5h-6.5L13 2z" />
      </svg>
    ),
    description:
      "Race the clock in 60-second rounds. Chain combos, hit multipliers, and climb the leaderboard. Every session is a fresh shot at your personal best.",
    screenshot: "/images/screenshots/blitz-mode.jpg",
    screenAlt: "Blitz mode: a fast round with a ticking timer and combo counter",
  },
  {
    title: "Adventure Mode",
    tag: "6 realms · 350+ levels",
    color: "#7DFF55",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    description:
      "Journey through six handcrafted realms, each with unique block mechanics, boss puzzles, and unlock rewards. 350+ levels of puzzle mastery.",
    screenshot: "/images/screenshots/adventure-mode.jpg",
    screenAlt: "Adventure mode: a realm map with glowing level nodes and a boss marker",
  },
];

function ModeTile({ mode, active, onClick }: { mode: Mode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group w-full rounded-[1.75rem] p-5 text-left transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${
        active ? "glass-neon scale-[1.02]" : "glass-neon-soft hover:bg-white/10"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className="block-cell relative flex h-12 w-12 shrink-0 items-center justify-center text-[#06051A]"
          style={{ "--c": mode.color } as React.CSSProperties}
        >
          <span className="relative z-10">{mode.icon}</span>
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-display text-2xl tracking-wide text-snow">{mode.title}</h3>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-snow-dim">
              {mode.tag}
            </span>
          </div>
          <p
            className={`mt-2 text-sm leading-relaxed text-snow-dim transition-all duration-300 ${
              active ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0 lg:max-h-40 lg:opacity-70"
            }`}
          >
            {mode.description}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function GameModes() {
  const { activeIndex, setActiveIndex, setIsPaused } = useCarousel(modes.length, 5000);
  const mode = modes[activeIndex];

  return (
    <section id="modes" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <AuroraScene
        src="/images/backgrounds/midnight_grid.jpg"
        alt="A glowing blue wireframe grid stretching to a dark horizon"
        dim={0.7}
        floor={false}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Three ways to play"
            title="PICK YOUR PACE"
            tone="ice"
            subtitle="Whether you have 60 seconds or 60 minutes, there's a mode that fits."
          />
        </AnimatedSection>

        <div
          className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[1fr_minmax(0,320px)] lg:gap-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mode tiles */}
          <AnimatedSection delay={0.1} className="order-2 flex flex-col gap-4 lg:order-1">
            {modes.map((m, i) => (
              <ModeTile key={m.title} mode={m} active={i === activeIndex} onClick={() => setActiveIndex(i)} />
            ))}
          </AnimatedSection>

          {/* Phone */}
          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <div className="relative mx-auto w-[min(280px,62vw)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                >
                  <DeviceMockup screenshot={mode.screenshot} screenAlt={mode.screenAlt} />
                </motion.div>
              </AnimatePresence>
            </div>
            <NavigationDots count={modes.length} active={activeIndex} onSelect={setActiveIndex} className="mt-6" label="mode" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
