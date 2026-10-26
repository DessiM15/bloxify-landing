"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const shots = [
  { src: "/images/screenshots/zen-mode.jpg", caption: "Zen mode", alt: "Zen mode: a calm board on a soft background with no timer" },
  { src: "/images/screenshots/blitz-mode.jpg", caption: "Blitz mode", alt: "Blitz mode: a 60-second round with a combo multiplier lit up" },
  { src: "/images/screenshots/adventure-mode.jpg", caption: "Adventure map", alt: "Adventure mode map with glowing level nodes across a realm" },
  { src: "/images/realms/realm1_gameplay.png", caption: "Emerald Forest", alt: "The Emerald Forest realm backdrop in-game: a moonlit pond ringed by giant glowing trees" },
  { src: "/images/realms/realm2_gameplay.png", caption: "Shifting Sands", alt: "The Shifting Sands realm backdrop in-game: a winding path over amber dunes under a starry sky" },
  { src: "/images/realms/realm3_gameplay.png", caption: "Abyssal Ocean", alt: "The Abyssal Ocean realm backdrop in-game: a dark sea floor lit by faint blue light" },
  { src: "/images/realms/realm4_gameplay.png", caption: "Molten Caldera", alt: "The Molten Caldera realm backdrop in-game: an obsidian monolith above rivers of lava" },
  { src: "/images/realms/realm5_gameplay.png", caption: "Cosmic Drift", alt: "The Cosmic Drift realm backdrop in-game: a quiet field of stars and distant purple nebula" },
  { src: "/images/realms/realm6_gameplay.png", caption: "The Void", alt: "The Void realm backdrop in-game: a slow black vortex with no light" },
];

/** Lightweight phone frame for the gallery strip (the full DeviceMockup is used elsewhere). */
function Shot({ src, alt, caption, index }: { src: string; alt: string; caption: string; index: number }) {
  return (
    <li className="w-[200px] shrink-0 snap-center sm:w-[220px]">
      <figure className="group">
        <div
          className="rounded-[1.6rem] p-[2px] transition-transform duration-300 group-hover:-translate-y-1"
          style={{
            background: "linear-gradient(160deg, #8d8fa3 0%, #3b3d4d 30%, #1c1d27 60%, #9a9cb0 100%)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.55), 0 0 24px rgba(255,63,211,0.12)",
          }}
        >
          <div className="rounded-[1.5rem] bg-[#0b0b10] p-[6px]">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.15rem] bg-black">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="220px"
                className="object-cover"
                loading={index < 3 ? "eager" : "lazy"}
              />
            </div>
          </div>
        </div>
        <figcaption className="mt-3 text-center text-sm font-bold text-snow-dim">{caption}</figcaption>
      </figure>
    </li>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(123,63,242,0.28), transparent 70%), radial-gradient(40% 40% at 10% 100%, rgba(53,232,255,0.16), transparent 70%), radial-gradient(40% 40% at 90% 100%, rgba(255,63,211,0.16), transparent 70%)",
        }}
      />
      <div className="relative z-10">
        <AnimatedSection className="px-4 sm:px-6">
          <SectionHeading
            eyebrow="Gallery"
            title="SEE IT IN ACTION"
            tone="rainbow"
            subtitle="Real screens from the game: the three modes, then the backdrop of every realm."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-void to-transparent sm:w-16" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-void to-transparent sm:w-16" />
            <ul
              className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 pt-2 sm:gap-7 sm:px-10 lg:justify-center lg:overflow-x-visible lg:flex-wrap"
              aria-label="Gameplay screenshots"
            >
              {shots.map((s, i) => (
                <Shot key={s.src} {...s} index={i} />
              ))}
            </ul>
          </div>
          <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-snow-dim lg:hidden">Swipe to see more</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
