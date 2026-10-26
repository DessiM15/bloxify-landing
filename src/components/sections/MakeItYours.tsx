"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import AuroraScene from "../ui/AuroraScene";
import SectionHeading from "../ui/SectionHeading";
import DeviceMockup from "../ui/DeviceMockup";
import NavigationDots from "../ui/NavigationDots";

const themes = [
  {
    theme: "Galaxy",
    background: "Neon City",
    video: "/videos/galaxy-neon-city.mp4",
    poster: "/videos/galaxy-neon-city-poster.jpg",
    alt: "The Galaxy theme with the Neon City background: a rain-soaked skyline behind the board",
    color: "#D23BFF",
  },
  {
    theme: "Nature & Zen",
    background: "Quiet Stone",
    video: "/videos/nature-zen-quiet-stone.mp4",
    poster: "/videos/nature-zen-quiet-stone-poster.jpg",
    alt: "The Nature & Zen theme with the Quiet Stone background: smooth stones and soft light behind the board",
    color: "#7DFF55",
  },
  {
    theme: "Unstoppable",
    background: "Deep Ocean",
    video: "/videos/unstoppable-deep-ocean.mp4",
    poster: "/videos/unstoppable-deep-ocean-poster.jpg",
    alt: "The Unstoppable theme with the Deep Ocean background: dark blue water behind the board",
    color: "#35E8FF",
  },
];

const STORE = {
  video: "/videos/theme-store-recording.mp4",
  poster: "/videos/theme-store-recording-poster.jpg",
  alt: "Scrolling through the in-game theme store, browsing themes, backgrounds and block skins",
};

function Label({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-xs tracking-[0.2em] text-cyan text-glow-cyan">{kicker}</p>
      <p className="font-display mt-1 text-2xl text-snow">{title}</p>
      {sub && <p className="text-sm text-snow-dim">{sub}</p>}
    </div>
  );
}

export default function MakeItYours() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setThemeIndex((p) => (p + 1) % themes.length), 4500);
    return () => clearInterval(timer);
  }, [paused]);

  const t = themes[themeIndex];

  return (
    <section
      id="customize"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AuroraScene
        src="/images/backgrounds/daily_challenges_bg.png"
        alt="Hundreds of glowing gold coins tumbling through a dark blue sky"
        dim={0.72}
        floor={false}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Customize"
            title="MAKE IT YOURS"
            tone="candy"
            subtitle="Earn coins, unlock themes, backgrounds, and block skins. Express your style in every game."
          />
        </AnimatedSection>

        {/* Desktop: store phone + theme phone side by side */}
        <div className="hidden items-start justify-center gap-16 lg:flex xl:gap-24">
          <AnimatedSection delay={0.1} className="flex flex-col items-center gap-5">
            <DeviceMockup video={STORE.video} poster={STORE.poster} screenAlt={STORE.alt} />
            <Label kicker="THE STORE" title="Theme Store" sub="Spend coins you earn by playing" />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col items-center gap-5">
            <DeviceMockup video={t.video} videoKey={themeIndex} poster={t.poster} screenAlt={t.alt} />
            <AnimatePresence mode="wait">
              <motion.div key={themeIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                <Label kicker="THEMES & BACKGROUNDS" title={`${t.theme} Theme`} sub={`${t.background} background`} />
              </motion.div>
            </AnimatePresence>
            <ThemeChips active={themeIndex} onSelect={setThemeIndex} />
          </AnimatedSection>
        </div>

        {/* Mobile: one phone that alternates store → themes */}
        <MobileCarousel themeIndex={themeIndex} setThemeIndex={setThemeIndex} paused={paused} />
      </div>
    </section>
  );
}

function ThemeChips({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  return (
    <ul className="flex flex-wrap justify-center gap-2" aria-label="Themes">
      {themes.map((th, i) => {
        const isActive = i === active;
        return (
          <li key={th.theme}>
            <button
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(i)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${
                isActive ? "glass-neon text-snow" : "glass-neon-soft text-snow-dim hover:text-snow"
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: th.color, boxShadow: `0 0 8px ${th.color}` }} aria-hidden="true" />
              {th.theme}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function MobileCarousel({ themeIndex, setThemeIndex, paused }: { themeIndex: number; setThemeIndex: (i: number) => void; paused: boolean }) {
  const [slide, setSlide] = useState(0);
  const total = 1 + themes.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setSlide((p) => (p + 1) % total), 4500);
    return () => clearInterval(timer);
  }, [total, paused]);

  const isStore = slide === 0;
  const t = isStore ? null : themes[slide - 1];

  return (
    <div className="lg:hidden">
      <AnimatedSection delay={0.1}>
        <div className="flex flex-col items-center gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="flex w-full flex-col items-center gap-4"
            >
              {isStore ? (
                <>
                  <DeviceMockup video={STORE.video} poster={STORE.poster} screenAlt={STORE.alt} />
                  <Label kicker="THE STORE" title="Theme Store" sub="Spend coins you earn by playing" />
                </>
              ) : (
                <>
                  <DeviceMockup video={t!.video} poster={t!.poster} screenAlt={t!.alt} />
                  <Label kicker="THEMES & BACKGROUNDS" title={`${t!.theme} Theme`} sub={`${t!.background} background`} />
                </>
              )}
            </motion.div>
          </AnimatePresence>
          <NavigationDots
            count={total}
            active={slide}
            onSelect={(i) => {
              setSlide(i);
              if (i > 0) setThemeIndex(i - 1);
            }}
            label="theme"
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
