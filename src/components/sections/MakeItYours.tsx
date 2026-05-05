"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import GameGridBg from "../ui/GameGridBg";

// Placeholder theme previews — replace with real screenshots later
const themes = [
  { name: "Aurora Night", color: "from-indigo-900 to-purple-800" },
  { name: "Neo-Tokyo", color: "from-pink-900 to-gray-900" },
  { name: "Emerald Forest", color: "from-green-900 to-emerald-800" },
  { name: "Sunset Beach", color: "from-orange-800 to-rose-700" },
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
    }, 3000);
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

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Video placeholder — store browsing recording */}
          <AnimatedSection delay={0.1} className="flex-1 w-full">
            <div className="relative w-full aspect-[9/16] max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-navy-light border-2 border-navy/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-navy-light to-navy">
                {/* Placeholder content */}
                <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-coral ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-cream/50 text-sm font-medium text-center px-4">
                  Store browsing video
                </p>
                <p className="text-cream/30 text-xs">
                  (Recording placeholder)
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Auto-changing theme gallery */}
          <AnimatedSection delay={0.2} className="flex-1 w-full">
            <div className="space-y-4">
              <p className="text-navy/40 text-xs font-semibold uppercase tracking-widest mb-2">
                Themes Preview
              </p>

              <div className="h-[280px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={themeIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    {/* Placeholder theme image — replace with real screenshots */}
                    <div className={`w-full h-full rounded-xl bg-gradient-to-br ${themes[themeIndex].color} flex items-center justify-center relative overflow-hidden`}>
                      {/* Fake grid overlay */}
                      <div className="absolute inset-4 grid grid-cols-8 grid-rows-8 gap-0.5 opacity-30">
                        {Array.from({ length: 64 }, (_, i) => (
                          <div key={i} className="bg-white/10 rounded-sm" />
                        ))}
                      </div>
                      <div className="relative z-10 text-center">
                        <p className="text-white font-bold text-lg">{themes[themeIndex].name}</p>
                        <p className="text-white/60 text-xs mt-1">Theme Preview</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Theme dots */}
              <div className="flex gap-2">
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

              <p className="text-navy/40 text-sm mt-4">
                New music packages coming soon — unlock exclusive soundtracks by your favorite indie artists.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
