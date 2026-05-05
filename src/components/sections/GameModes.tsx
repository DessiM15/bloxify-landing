"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const modes = [
  {
    title: "Zen Mode",
    emoji: "🧘",
    description:
      "No timer. No pressure. Just you and the board. Place blocks, clear lines, and lose yourself in the flow. Unlock premium backgrounds as you level up.",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Blitz Mode",
    emoji: "⚡",
    description:
      "Race the clock in 90-second rounds. Chain combos, hit multipliers, and climb the leaderboard. Every session is a fresh shot at your personal best.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Adventure Mode",
    emoji: "🗺️",
    description:
      "Journey through six handcrafted realms — each with unique block mechanics, boss puzzles, and unlock rewards. 150+ levels of puzzle mastery.",
    gradient: "from-green-500/20 to-teal-500/20",
  },
];

export default function GameModes() {
  return (
    <section id="modes" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Three Ways to Play"
            subtitle="Whether you have 90 seconds or 90 minutes, there's a mode that fits."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {modes.map((mode, i) => (
            <AnimatedSection key={mode.title} delay={i * 0.15}>
              <div className="glass rounded-2xl p-8 h-full transition-transform hover:scale-[1.02] hover:border-coral/20">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mode.gradient} flex items-center justify-center text-2xl mb-6`}
                >
                  {mode.emoji}
                </div>
                <h3 className="text-xl font-bold text-cream mb-3">
                  {mode.title}
                </h3>
                <p className="text-cream-dim text-sm leading-relaxed">
                  {mode.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
