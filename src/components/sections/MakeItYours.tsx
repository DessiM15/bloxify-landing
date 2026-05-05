"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import GameGridBg from "../ui/GameGridBg";
import DeviceMockup from "../ui/DeviceMockup";

const themes = [
  {
    theme: "Galaxy Theme",
    background: "Neon City Background",
    video: "/videos/galaxy-neon-city.mp4",
  },
  {
    theme: "Nature & Zen Theme",
    background: "Quiet Stone Background",
    video: "/videos/nature-zen-quiet-stone.mp4",
  },
  {
    theme: "Unstoppable Theme",
    background: "Deep Ocean Background",
    video: "/videos/unstoppable-deep-ocean.mp4",
  },
];

const coinColors = ["#FFD700", "#FFC107", "#FFB300", "#FFCA28"] as const;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const coins = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  color: coinColors[i % 4],
  size: Math.round(randomBetween(24, 40)),
  left: `${randomBetween(0, 95)}%`,
  duration: `${randomBetween(10, 18)}s`,
  delay: `${randomBetween(0, 10)}s`,
  opacity: randomBetween(0.15, 0.3),
}));

export default function MakeItYours() {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % themes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      <GameGridBg variant={2} />

      {/* Falling coins */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="absolute rounded-full"
            style={{
              width: coin.size,
              height: coin.size,
              left: coin.left,
              top: -30,
              backgroundColor: coin.color,
              opacity: coin.opacity,
              boxShadow: `inset -2px -2px 0 rgba(0,0,0,0.15), 0 0 8px ${coin.color}40`,
              animation: `fall-coin ${coin.duration} ${coin.delay} linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-block-orange/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-block-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title={<><span className="text-navy">Make It </span><span className="text-gradient">Yours</span></>}
            subtitle="Earn coins, unlock themes, backgrounds, and block skins. Express your style in every game."
            variant="light"
          />
        </AnimatedSection>

        {/* Desktop: side by side, spread apart */}
        <div className="hidden lg:flex items-start justify-between max-w-5xl mx-auto">
          {/* Left: Phone mockup with store recording */}
          <AnimatedSection delay={0.1}>
            <DeviceMockup video="/videos/theme-store-recording.mp4" />
          </AnimatedSection>

          {/* Right: Theme video carousel in same phone mockup */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              <DeviceMockup video={themes[themeIndex].video} videoKey={themeIndex} />

              {/* Theme & Background labels */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={themeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <p className="text-navy font-bold text-base">{themes[themeIndex].theme}</p>
                  <p className="text-navy/50 text-sm">{themes[themeIndex].background}</p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex gap-2 justify-center">
                {themes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setThemeIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === themeIndex
                        ? "bg-coral w-6"
                        : "bg-navy/20 hover:bg-navy/40 w-2"
                    }`}
                    aria-label={`Theme ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile: Single alternating view */}
        <MobileCarousel themeIndex={themeIndex} setThemeIndex={setThemeIndex} />
      </div>
    </section>
  );
}

/* ─── Mobile Carousel: Alternates store + themes ─── */
function MobileCarousel({
  themeIndex,
  setThemeIndex,
}: {
  themeIndex: number;
  setThemeIndex: (i: number) => void;
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 1 + themes.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const isStore = slideIndex === 0;
  const currentTheme = !isStore ? themes[slideIndex - 1] : null;

  return (
    <div className="lg:hidden">
      <AnimatedSection delay={0.1} className="w-full">
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              {isStore ? (
                <div className="text-center space-y-3">
                  <p className="text-navy/40 text-xs font-semibold uppercase tracking-widest">
                    Theme Store
                  </p>
                  <DeviceMockup video="/videos/theme-store-recording.mp4" />
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <p className="text-navy/40 text-xs font-semibold uppercase tracking-widest">
                    Themes & Backgrounds
                  </p>
                  <DeviceMockup video={currentTheme!.video} />
                  <p className="text-navy font-bold text-base">{currentTheme!.theme}</p>
                  <p className="text-navy/50 text-sm">{currentTheme!.background}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex gap-2 justify-center mt-4">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === slideIndex
                    ? "bg-coral w-6"
                    : "bg-navy/20 hover:bg-navy/40 w-2"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
