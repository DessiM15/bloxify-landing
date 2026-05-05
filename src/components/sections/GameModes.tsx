"use client";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import DeviceMockup from "../ui/DeviceMockup";
import NavigationDots from "../ui/NavigationDots";
import { useCarousel } from "@/hooks/useCarousel";

const modes = [
  {
    title: "Zen Mode",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 3.13-9 7 0 2.38 1.56 4.5 4 5.7V21l3-2 3 2v-5.3c2.44-1.2 4-3.32 4-5.7 0-3.87-4.03-7-9-7z" />
      </svg>
    ),
    description:
      "No timer. No pressure. Just you and the board. Place blocks, clear lines, and lose yourself in the flow. Unlock premium backgrounds as you level up.",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Blitz Mode",
    icon: (
      <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    description:
      "Race the clock in 90-second rounds. Chain combos, hit multipliers, and climb the leaderboard. Every session is a fresh shot at your personal best.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Adventure Mode",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-8.898l.595 2.966a.75.75 0 01-.37.822L12 18.75l-3.728-2.11a.75.75 0 01-.37-.822l.595-2.966-2.28-1.97a.75.75 0 01.418-1.307l3.037-.263 1.178-2.821a.75.75 0 011.3 0l1.178 2.821 3.037.263a.75.75 0 01.418 1.307l-2.28 1.97z" />
      </svg>
    ),
    description:
      "Journey through six handcrafted realms — each with unique block mechanics, boss puzzles, and unlock rewards. 150+ levels of puzzle mastery.",
    gradient: "from-green-500/20 to-teal-500/20",
  },
];

export default function GameModes() {
  const { activeIndex, setActiveIndex, setIsPaused, next, prev } = useCarousel(modes.length, 4000);

  return (
    <section id="modes" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Three Ways to Play"
            subtitle="Whether you have 90 seconds or 90 minutes, there's a mode that fits."
          />
        </AnimatedSection>

        {/* Desktop: Horizontal carousel */}
        <div
          className="hidden lg:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            {/* Prev/Next arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-coral transition-colors cursor-pointer"
              aria-label="Previous mode"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-coral transition-colors cursor-pointer"
              aria-label="Next mode"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Slide content */}
            <div className="overflow-hidden rounded-2xl glass p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-12"
                >
                  {/* Left: description */}
                  <div className="flex-1">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${modes[activeIndex].gradient} flex items-center justify-center mb-6`}
                    >
                      {modes[activeIndex].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-cream mb-4">
                      {modes[activeIndex].title}
                    </h3>
                    <p className="text-cream-dim leading-relaxed">
                      {modes[activeIndex].description}
                    </p>
                  </div>

                  {/* Right: Device mockup */}
                  <div className="flex-shrink-0">
                    <DeviceMockup />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <NavigationDots
              count={modes.length}
              active={activeIndex}
              onSelect={setActiveIndex}
            />
          </div>
        </div>

        {/* Mobile: Tab pills */}
        <div className="lg:hidden">
          {/* Mode pills */}
          <div className="flex gap-2 mb-8 overflow-x-auto hide-scrollbar pb-2">
            {modes.map((mode, i) => (
              <button
                key={mode.title}
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "bg-coral text-navy"
                    : "glass text-cream-dim hover:text-cream"
                }`}
              >
                <span>{mode.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="glass rounded-2xl p-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${modes[activeIndex].gradient} flex items-center justify-center mb-4`}
                >
                  {modes[activeIndex].icon}
                </div>
                <h3 className="text-xl font-bold text-cream mb-3">
                  {modes[activeIndex].title}
                </h3>
                <p className="text-cream-dim text-sm leading-relaxed mb-6">
                  {modes[activeIndex].description}
                </p>
                <div className="flex justify-center">
                  <DeviceMockup />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
