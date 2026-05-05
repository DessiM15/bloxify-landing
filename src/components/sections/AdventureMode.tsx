"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import NavigationDots from "../ui/NavigationDots";
import { useCarousel } from "@/hooks/useCarousel";

const realms = [
  {
    name: "The Emerald Forest",
    tagline: "A lush canopy of green hides the first shard.",
    story: "Deep within the emerald canopy, the first piece of Blox pulses with life.",
    image: "/images/realms/realm1.png",
    number: 1,
    gradient: "from-green-950 via-emerald-900 to-green-950",
  },
  {
    name: "The Shifting Sands",
    tagline: "Ancient dunes shift to reveal buried secrets.",
    story: "Beneath the endless dunes, a shard glints in the scorching heat.",
    image: "/images/realms/realm2.png",
    number: 2,
    gradient: "from-amber-950 via-yellow-900 to-orange-950",
  },
  {
    name: "The Abyssal Ocean",
    tagline: "Sunken ruins guard a piece lost to the deep.",
    story: "In the crushing depths, bioluminescent light guides the way to the third shard.",
    image: "/images/realms/realm3.png",
    number: 3,
    gradient: "from-blue-950 via-cyan-900 to-blue-950",
  },
  {
    name: "The Molten Caldera",
    tagline: "Rivers of magma flow around the fourth fragment.",
    story: "Lava cascades past obsidian walls. The fourth piece burns, waiting to be claimed.",
    image: "/images/realms/realm4.png",
    number: 4,
    gradient: "from-red-950 via-orange-900 to-red-950",
  },
  {
    name: "The Cosmic Drift",
    tagline: "Stars and nebulae swirl around a drifting shard.",
    story: "Among the stars, the fifth shard orbits a dying sun — drifting, waiting.",
    image: "/images/realms/realm5.png",
    number: 5,
    gradient: "from-purple-950 via-indigo-900 to-violet-950",
  },
  {
    name: "The Void",
    tagline: "Where nothing exists, everything is at stake.",
    story: "The final piece was swallowed by nothingness itself. Enter The Void.",
    image: "/images/realms/realm6.png",
    number: 6,
    gradient: "from-gray-950 via-zinc-900 to-black",
  },
];

const stats = [
  { label: "Realms", value: "6" },
  { label: "Levels", value: "150+" },
  { label: "Boss Puzzles", value: "18" },
  { label: "Unlockables", value: "50+" },
];

export default function AdventureMode() {
  const { activeIndex, setActiveIndex, setIsPaused, next, prev } = useCarousel(realms.length, 4000);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated gradient background that transitions per realm */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        {realms.map((realm, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-gradient-to-br ${realm.gradient} transition-opacity duration-1000`}
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title={<><span className="text-cream">Adventure </span><span className="text-gradient">Mode</span></>}
            subtitle="Journey through six handcrafted realms — each with unique block mechanics, boss puzzles, and unlock rewards."
          />
        </AnimatedSection>

        {/* Stat badges */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-full px-5 py-2.5 flex items-center gap-2"
              >
                <span className="text-coral font-bold text-lg">{stat.value}</span>
                <span className="text-cream-dim text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Full-width realm gallery — sharp corners */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prev/Next arrows */}
          <button
            onClick={prev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-coral hover:bg-black/50 transition-all cursor-pointer"
            aria-label="Previous realm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-coral hover:bg-black/50 transition-all cursor-pointer"
            aria-label="Next realm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background image */}
                <Image
                  src={realms[activeIndex].image}
                  alt={realms[activeIndex].name}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="px-8 sm:px-12 lg:px-16 max-w-xl">
                    <p className="text-coral font-bold text-sm uppercase tracking-widest mb-2">
                      Realm {realms[activeIndex].number}
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cream mb-3">
                      {realms[activeIndex].name}
                    </h3>
                    <p className="text-cream font-medium text-sm sm:text-base mb-2">
                      {realms[activeIndex].tagline}
                    </p>
                    <p className="text-cream-dim text-sm leading-relaxed hidden sm:block">
                      {realms[activeIndex].story}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <NavigationDots
            count={realms.length}
            active={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}
