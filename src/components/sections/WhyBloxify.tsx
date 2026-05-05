"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    title: "Truly Fair RNG",
    icon: "🎲",
    description:
      "Our provably fair algorithm ensures every block sequence is random and unbiased. No rigged drops to push you toward purchases.",
  },
  {
    title: "No Forced Ads",
    icon: "🚫",
    description:
      "Zero interstitials. Zero pop-ups. Optional rewarded ads only — watch one if you want a bonus, or ignore them entirely.",
  },
  {
    title: "We Support Artists",
    icon: "🎶",
    description:
      "Every in-game track is made by independent musicians. We give creators a platform and players a soundtrack worth listening to.",
  },
  {
    title: "Offline Play",
    icon: "📱",
    description:
      "Full gameplay without internet. Zen and Adventure modes work completely offline. Your progress syncs when you reconnect.",
  },
];

export default function WhyBloxify() {
  return (
    <section className="relative py-24 px-4 bg-navy-light/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Why Bloxify?"
            subtitle="We built the block puzzle game we always wanted to play."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-cream-dim text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
