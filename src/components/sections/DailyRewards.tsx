"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import GameGridBg from "../ui/GameGridBg";

const features = [
  {
    title: "Daily Streaks",
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 4.499a7.502 7.502 0 016.362.715z" />
      </svg>
    ),
    description:
      "Log in every day to build your streak. Consecutive days unlock escalating rewards — coins, skins, and exclusive badges.",
  },
  {
    title: "Daily Challenges",
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description:
      "3 fresh challenges every 24 hours. Complete them all for bonus XP and climb the daily leaderboard.",
  },
  {
    title: "Leaderboards",
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5H11.25A3.375 3.375 0 007.5 14.25v4.5m9 0h-9M12 2.25l2.25 3.75H9.75L12 2.25z" />
      </svg>
    ),
    description:
      "Get ranked globally or with friends. Weekly leaderboards keep the competition fresh across all game modes.",
  },
  {
    title: "Friends & Referrals",
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    description:
      "Invite friends and both earn rewards. See their scores, challenge their records, and share achievements.",
  },
];

export default function DailyRewards() {
  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      <GameGridBg variant={3} />
      <div className="absolute -top-16 left-1/3 w-80 h-80 bg-block-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-coral/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            title={<><span className="text-navy">Play Every Day, </span><span className="text-gradient">Earn Every Day</span></>}
            subtitle="A living game with fresh content, competitive rankings, and social features that keep you coming back."
            variant="light"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="rounded-2xl p-6 h-full flex gap-4 border border-navy/8 bg-gray-50/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-navy/55 text-sm leading-relaxed">
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
