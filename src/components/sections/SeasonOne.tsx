"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import FallingPetals from "../ui/FallingPetals";

const seasonFeatures = [
  {
    title: "Spring-Themed Backgrounds",
    description: "Exclusive cherry blossom and garden-inspired board backgrounds that transform your gameplay experience.",
  },
  {
    title: "Seasonal Block Skins",
    description: "Limited-edition block skins and particle effects — sakura petals trail every clear you make.",
  },
  {
    title: "Challenge Levels",
    description: "Time-limited challenge levels with unique modifiers and leaderboards. Compete for seasonal rankings.",
  },
  {
    title: "Season Pass — 30 Tiers",
    description: "Unlock cosmetics, XP boosts, and exclusive rewards as you progress through 30 tiers of the season pass.",
  },
  {
    title: "Cherry Blossom Effects",
    description: "Beautiful particle effects cascade across your screen with every combo and line clear.",
  },
  {
    title: "Bonus XP All Season",
    description: "Earn boosted XP multipliers throughout the entire season to level up faster.",
  },
];

export default function SeasonOne() {
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % seasonFeatures.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-4 bg-navy-light/50 overflow-hidden">
      {/* Falling petals */}
      <FallingPetals />

      {/* Spring corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 opacity-30">
        <Image
          src="/images/spring/bigcorner.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div
        className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-30"
        style={{ transform: "scaleX(-1) scaleY(-1)" }}
      >
        <Image
          src="/images/spring/bigcorner.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title={<><span className="text-cream">Season One: </span><span className="text-gradient">First Bloom</span></>}
            subtitle="Our inaugural season celebrates spring with exclusive rewards, challenges, and cosmetics."
          />
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Season visual */}
          <AnimatedSection delay={0.1} className="flex-1">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/images/backgrounds/season_pass_bg_option1.png"
                alt="Season One: First Bloom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-coral font-bold text-sm uppercase tracking-widest mb-2">
                    Season 1
                  </p>
                  <h3 className="text-3xl font-extrabold text-cream">
                    First Bloom
                  </h3>
                  <p className="text-cream-dim text-sm mt-2">
                    30 Tiers of Rewards
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature carousel */}
          <AnimatedSection delay={0.2} className="flex-1">
            <div className="h-[140px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <h4 className="text-lg font-bold text-cream mb-2">
                    {seasonFeatures[featureIndex].title}
                  </h4>
                  <p className="text-cream-dim text-sm leading-relaxed">
                    {seasonFeatures[featureIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-4">
              {seasonFeatures.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFeatureIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === featureIndex
                      ? "bg-coral w-6"
                      : "bg-cream/30 hover:bg-cream/50 w-2"
                  }`}
                  aria-label={`Feature ${i + 1}`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
