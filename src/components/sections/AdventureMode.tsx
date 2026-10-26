"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import DeviceMockup from "../ui/DeviceMockup";
import NavigationDots from "../ui/NavigationDots";
import { useCarousel } from "@/hooks/useCarousel";

const realms = [
  {
    number: 1,
    name: "The Emerald Forest",
    tagline: "A lush canopy of green hides the first shard.",
    story: "Deep within the emerald canopy, the first piece of Blox pulses with life.",
    image: "/images/realms/realm1.png",
    gameplay: "/images/realms/realm1_gameplay.png",
    alt: "A sunlit forest of towering emerald trees with light streaming through the canopy",
    glow: "#7DFF55",
  },
  {
    number: 2,
    name: "The Shifting Sands",
    tagline: "Ancient dunes shift to reveal buried secrets.",
    story: "Beneath the endless dunes, a shard glints in the scorching heat.",
    image: "/images/realms/realm2.png",
    gameplay: "/images/realms/realm2_gameplay.png",
    alt: "Golden desert dunes under a hot amber sky with half-buried ruins",
    glow: "#FFD63A",
  },
  {
    number: 3,
    name: "The Abyssal Ocean",
    tagline: "Sunken ruins guard a piece lost to the deep.",
    story: "In the crushing depths, bioluminescent light guides the way to the third shard.",
    image: "/images/realms/realm3.png",
    gameplay: "/images/realms/realm3_gameplay.png",
    alt: "Deep ocean ruins lit by glowing blue bioluminescent life",
    glow: "#35E8FF",
  },
  {
    number: 4,
    name: "The Molten Caldera",
    tagline: "Rivers of magma flow around the fourth fragment.",
    story: "Lava cascades past obsidian walls. The fourth piece burns, waiting to be claimed.",
    image: "/images/realms/realm4.png",
    gameplay: "/images/realms/realm4_gameplay.png",
    alt: "A volcanic caldera with rivers of orange magma between black obsidian walls",
    glow: "#FF8F2E",
  },
  {
    number: 5,
    name: "The Cosmic Drift",
    tagline: "Stars and nebulae swirl around a drifting shard.",
    story: "Among the stars, the fifth shard orbits a dying sun, drifting and waiting.",
    image: "/images/realms/realm5.png",
    gameplay: "/images/realms/realm5_gameplay.png",
    alt: "A purple and blue nebula with stars swirling around a distant sun",
    glow: "#D23BFF",
  },
  {
    number: 6,
    name: "The Void",
    tagline: "Where nothing exists, everything is at stake.",
    story: "The final piece was swallowed by nothingness itself. Enter The Void.",
    image: "/images/realms/realm6.png",
    gameplay: "/images/realms/realm6_gameplay.png",
    alt: "An empty black void with faint violet light bending at its edges",
    glow: "#FF3FD3",
  },
];

const stats = [
  { label: "Realms", value: "6" },
  { label: "Levels", value: "350+" },
  { label: "Boss puzzles", value: "72" },
  { label: "Unlockables", value: "50+" },
];

function Arrow({ dir, onClick, label }: { dir: "prev" | "next"; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="glass-neon-soft inline-flex h-11 w-11 items-center justify-center rounded-full text-snow transition-all hover:bg-white/15 hover:text-cyan cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d={dir === "prev" ? "M12 15L7 10L12 5" : "M8 5L13 10L8 15"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function AdventureMode() {
  const { activeIndex, setActiveIndex, setIsPaused, next, prev } = useCarousel(realms.length, 5500);
  const realm = realms[activeIndex];

  return (
    <section
      id="adventure"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Realm art as the full-bleed backdrop, crossfading per realm */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={realm.number}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0"
          >
            <Image src={realm.image} alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition: "center 35%" }} />
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--void) 0%, rgba(6,5,26,0.72) 25%, rgba(6,5,26,0.72) 75%, var(--void) 100%)",
          }}
        />
        <div className="stars-layer" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Adventure mode"
            title={["SIX REALMS.", "ONE QUEST."]}
            tone="sun"
            tone2="candy"
            subtitle="Journey through six handcrafted realms, each with unique block mechanics, boss puzzles, and unlock rewards."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ul className="mb-12 flex flex-wrap justify-center gap-3">
            {stats.map((s) => (
              <li key={s.label} className="badge-neon">
                <span className="font-display text-xl text-yellow text-glow-cyan">{s.value}</span>
                <span className="text-sm font-semibold text-snow-dim">{s.label}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[1fr_minmax(0,300px)] lg:gap-16">
          {/* Realm card */}
          <AnimatedSection delay={0.15} className="order-2 lg:order-1">
            <div className="glass-neon relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-colors duration-700"
                style={{ background: realm.glow, opacity: 0.25 }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={realm.number}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                  className="relative"
                >
                  <p className="font-display text-sm tracking-[0.2em]" style={{ color: realm.glow, textShadow: `0 0 14px ${realm.glow}` }}>
                    REALM {realm.number} OF 6
                  </p>
                  <h3 className="font-display mt-2 text-3xl leading-tight text-snow sm:text-4xl lg:text-5xl">{realm.name}</h3>
                  <p className="mt-3 text-base font-semibold text-snow sm:text-lg">{realm.tagline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-snow-dim sm:text-base">{realm.story}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between gap-4">
                <Arrow dir="prev" onClick={prev} label="Previous realm" />
                <NavigationDots count={realms.length} active={activeIndex} onSelect={setActiveIndex} label="realm" />
                <Arrow dir="next" onClick={next} label="Next realm" />
              </div>
            </div>

            {/* Realm thumbnails */}
            <ul className="mt-5 grid grid-cols-6 gap-2 sm:gap-3">
              {realms.map((r, i) => {
                const active = i === activeIndex;
                return (
                  <li key={r.number}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Show ${r.name}`}
                      aria-pressed={active}
                      className={`relative block aspect-[3/4] w-full overflow-hidden rounded-xl transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${
                        active ? "scale-105 ring-2 ring-pink shadow-[0_0_18px_rgba(255,63,211,0.7)]" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={r.image} alt={r.alt} fill sizes="120px" className="object-cover" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </AnimatedSection>

          {/* Gameplay phone */}
          <AnimatedSection delay={0.25} className="order-1 lg:order-2">
            <div className="relative mx-auto w-[min(280px,62vw)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={realm.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35 }}
                >
                  <DeviceMockup screenshot={realm.gameplay} screenAlt={`${realm.name} as it appears in the game: ${realm.alt.charAt(0).toLowerCase()}${realm.alt.slice(1)}`} />
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
