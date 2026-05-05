"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    title: "Truly Fair RNG",
    icon: (
      <svg className="w-7 h-7 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    description:
      "Our provably fair algorithm ensures every block sequence is random and unbiased. No rigged drops to push you toward purchases.",
  },
  {
    title: "No Forced Ads",
    icon: (
      <svg className="w-7 h-7 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    description:
      "Zero interstitials. Zero pop-ups. Optional rewarded ads only — watch one if you want a bonus, or ignore them entirely.",
  },
  {
    title: "We Support Artists",
    icon: (
      <svg className="w-7 h-7 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    description:
      "Every in-game track is made by independent musicians. We give creators a platform and players a soundtrack worth listening to.",
  },
  {
    title: "Offline Play",
    icon: (
      <svg className="w-7 h-7 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    description:
      "Full gameplay without internet. Zen and Adventure modes work completely offline. Your progress syncs when you reconnect.",
  },
];

export default function WhyBloxify() {
  return (
    <section className="relative py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Why Bloxify?"
            subtitle="We built the block puzzle game we always wanted to play."
            variant="light"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="rounded-2xl p-6 h-full text-center border border-navy/8 bg-gray-50/50">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-navy/55 text-sm leading-relaxed">
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
