"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    title: "Daily Streaks",
    icon: "🔥",
    description:
      "Log in every day to build your streak. Consecutive days unlock escalating rewards — coins, skins, and exclusive badges.",
  },
  {
    title: "Daily Challenges",
    icon: "🎯",
    description:
      "Three fresh puzzles every 24 hours. Complete them all for bonus XP and climb the daily leaderboard.",
  },
  {
    title: "Leaderboards",
    icon: "🏆",
    description:
      "Compete globally or with friends. Weekly, monthly, and all-time rankings across all game modes.",
  },
  {
    title: "Friends & Referrals",
    icon: "👥",
    description:
      "Invite friends and both earn rewards. See their scores, challenge their records, and share achievements.",
  },
];

export default function DailyRewards() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Play Every Day, Earn Every Day"
            subtitle="A living game with fresh content, competitive rankings, and social features that keep you coming back."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full flex gap-4">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-cream mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-cream-dim text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
