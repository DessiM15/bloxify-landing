"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const realms = [
  { name: "Sunlit Meadow", image: "/images/realms/realm1.png", levels: "25" },
  { name: "Crystal Caverns", image: "/images/realms/realm2.png", levels: "25" },
  { name: "Floating Isles", image: "/images/realms/realm3.png", levels: "25" },
  { name: "Volcanic Core", image: "/images/realms/realm4.png", levels: "25" },
  { name: "Frozen Peaks", image: "/images/realms/realm5.png", levels: "25" },
  { name: "Starlight Ruins", image: "/images/realms/realm6.png", levels: "25" },
];

const stats = [
  { label: "Realms", value: "6" },
  { label: "Levels", value: "150+" },
  { label: "Boss Puzzles", value: "18" },
  { label: "Unlockables", value: "50+" },
];

export default function AdventureMode() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Six Handcrafted Realms"
            subtitle="Each realm introduces new block types, mechanics, and challenges. Master them all to become the ultimate Bloxify champion."
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

        {/* Realm cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {realms.map((realm, i) => (
            <AnimatedSection key={realm.name} delay={i * 0.1}>
              <div className="flex-shrink-0 w-[260px] lg:w-auto glass rounded-2xl overflow-hidden transition-transform hover:scale-[1.03]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={realm.image}
                    alt={realm.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-bold text-cream">
                      {realm.name}
                    </h3>
                    <p className="text-cream-dim text-xs">
                      {realm.levels} levels
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
