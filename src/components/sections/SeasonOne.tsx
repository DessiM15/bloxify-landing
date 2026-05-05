"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const seasonFeatures = [
  "Exclusive spring-themed backgrounds",
  "Seasonal block skins and effects",
  "Limited-time challenge levels",
  "Season pass with 30 tiers of rewards",
  "Cherry blossom particle effects",
  "Bonus XP multipliers all season",
];

export default function SeasonOne() {
  return (
    <section className="relative py-24 px-4 bg-navy-light/50 overflow-hidden">
      {/* Spring corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 opacity-30">
        <Image
          src="/images/spring/bigcorner.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-30 rotate-180">
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
            title="Season One: First Bloom"
            subtitle="Our inaugural season celebrates spring with exclusive rewards, challenges, and cosmetics."
          />
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Season visual */}
          <AnimatedSection delay={0.1} className="flex-1">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-green-900/40 to-pink-900/40">
                <Image
                  src="/images/backgrounds/season_pass_bg_option1.png"
                  alt="Season One: First Bloom"
                  fill
                  className="object-cover opacity-80"
                />
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
            </div>
          </AnimatedSection>

          {/* Features list */}
          <AnimatedSection delay={0.2} className="flex-1">
            <ul className="space-y-4">
              {seasonFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-coral" />
                  </span>
                  <span className="text-cream-dim">{feature}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
