"use client";

import type { ReactNode } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import AuroraScene from "../ui/AuroraScene";
import SectionHeading from "../ui/SectionHeading";

const features: { title: string; description: string; color: string; icon: ReactNode }[] = [
  {
    title: "Daily streaks",
    color: "#FF8F2E",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 4.499a7.502 7.502 0 016.362.715z" />
      </svg>
    ),
    description: "Log in every day to build your streak. Consecutive days unlock escalating rewards: coins, skins, and exclusive badges.",
  },
  {
    title: "Daily challenges",
    color: "#35E8FF",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Three fresh challenges every 24 hours. Complete them all for bonus XP and climb the daily leaderboard.",
  },
  {
    title: "Leaderboards",
    color: "#FFD63A",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5H11.25A3.375 3.375 0 007.5 14.25v4.5m9 0h-9M12 2.25l2.25 3.75H9.75L12 2.25z" />
      </svg>
    ),
    description: "Get ranked globally or with friends. Weekly leaderboards keep the competition fresh across all game modes.",
  },
  {
    title: "Friends & referrals",
    color: "#7DFF55",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    description: "Invite friends and both earn rewards. See their scores, challenge their records, and share achievements.",
  },
];

export default function DailyRewards() {
  return (
    <section id="daily" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <AuroraScene
        src="/images/backgrounds/thunder_storm.jpg"
        alt="Lightning forking through dark storm clouds over a night landscape"
        dim={0.72}
        floor={false}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Always something new"
            title={["PLAY EVERY DAY.", "EARN EVERY DAY."]}
            tone="lime"
            tone2="sun"
            subtitle="A living game with fresh content, competitive rankings, and social features that keep you coming back."
          />
        </AnimatedSection>

        <ul className="grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <li key={f.title}>
              <AnimatedSection delay={i * 0.08} className="glass-neon-soft flex h-full gap-4 rounded-[1.75rem] p-6 transition-colors hover:bg-white/10">
                <span
                  className="block-cell relative flex h-12 w-12 shrink-0 items-center justify-center text-[#06051A]"
                  style={{ "--c": f.color } as React.CSSProperties}
                >
                  <span className="relative z-10">{f.icon}</span>
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-snow">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-snow-dim sm:text-base">{f.description}</p>
                </div>
              </AnimatedSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
