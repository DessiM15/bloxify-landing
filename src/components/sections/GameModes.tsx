"use client";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import DeviceMockup from "../ui/DeviceMockup";
import NavigationDots from "../ui/NavigationDots";
import GameGridBg from "../ui/GameGridBg";
import { useCarousel } from "@/hooks/useCarousel";

const modes = [
  {
    title: "Zen Mode",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-500"/>
        <path d="M32 2 A30 30 0 0 1 32 62 A15 15 0 0 1 32 32 A15 15 0 0 0 32 2" className="text-blue-500" fill="currentColor"/>
        <circle cx="32" cy="17" r="4.5" fill="white"/>
        <circle cx="32" cy="47" r="4.5" className="text-blue-500" fill="currentColor"/>
      </svg>
    ),
    description:
      "No timer. No pressure. Just you and the board. Place blocks, clear lines, and lose yourself in the flow. Unlock premium backgrounds as you level up.",
    gradient: "from-blue-500/20 to-purple-500/20",
    screenshot: "/images/screenshots/zen-mode.jpg",
  },
  {
    title: "Blitz Mode",
    icon: (
      <svg className="w-7 h-7 text-block-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    description:
      "Race the clock in 60-second rounds. Chain combos, hit multipliers, and climb the leaderboard. Every session is a fresh shot at your personal best.",
    gradient: "from-orange-500/20 to-red-500/20",
    screenshot: "/images/screenshots/blitz-mode.jpg",
  },
  {
    title: "Adventure Mode",
    icon: (
      <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    description:
      "Journey through six handcrafted realms — each with unique block mechanics, boss puzzles, and unlock rewards. 305+ levels of puzzle mastery.",
    gradient: "from-green-500/20 to-teal-500/20",
    screenshot: "/images/screenshots/adventure-mode.jpg",
  },
];

export default function GameModes() {
  const { activeIndex, setActiveIndex, setIsPaused, next, prev } = useCarousel(modes.length, 4000);

  return (
    <section id="modes" className="relative py-24 px-4 bg-white overflow-hidden">
      <GameGridBg variant={1} />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-block-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title={<><span className="text-navy">Three Ways to </span><span className="text-gradient">Play</span></>}
            subtitle="Whether you have 60 seconds or 60 minutes, there's a mode that fits."
            variant="light"
          />
        </AnimatedSection>

        {/* Desktop: Horizontal carousel */}
        <div className="hidden lg:block">
          <div
            className="relative px-14"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Prev/Next arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy/50 hover:text-coral transition-colors cursor-pointer"
              aria-label="Previous mode"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy/50 hover:text-coral transition-colors cursor-pointer"
              aria-label="Next mode"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Slide content — open split layout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-10 justify-center"
              >
                {/* Left: description */}
                <div className="flex-1">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${modes[activeIndex].gradient} flex items-center justify-center mb-6`}
                  >
                    {modes[activeIndex].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-navy mb-4">
                    {modes[activeIndex].title}
                  </h3>
                  <p className="text-navy/60 text-lg leading-relaxed max-w-lg">
                    {modes[activeIndex].description}
                  </p>
                </div>

                {/* Right: Device mockup */}
                <div className="flex-shrink-0">
                  <DeviceMockup screenshot={modes[activeIndex].screenshot} />
                </div>
              </motion.div>
            </AnimatePresence>

            <NavigationDots
              count={modes.length}
              active={activeIndex}
              onSelect={setActiveIndex}
              variant="light"
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
                    ? "bg-coral text-white"
                    : "bg-navy/5 text-navy/60 hover:text-navy"
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
              <div>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${modes[activeIndex].gradient} flex items-center justify-center mb-4`}
                >
                  {modes[activeIndex].icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {modes[activeIndex].title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-6">
                  {modes[activeIndex].description}
                </p>
                <div className="flex justify-center">
                  <DeviceMockup screenshot={modes[activeIndex].screenshot} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
