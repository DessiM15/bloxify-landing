"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const tracks = [
  {
    title: "Zen Flow",
    description: "Ambient puzzle soundtrack for focused play",
    spotifyUrl: "https://open.spotify.com/search/dubsteck",
  },
  {
    title: "Blitz Rush",
    description: "High-energy beats for competitive sessions",
    spotifyUrl: "https://open.spotify.com/search/dubsteck",
  },
];

export default function Soundtrack() {
  return (
    <section className="relative py-24 px-4 bg-navy-light/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="A Soundtrack Worth Listening To"
            subtitle="Every track handcrafted by Dubsteck to match the mood of each game mode."
          />
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Artist image */}
          <AnimatedSection delay={0.1} className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/dubsteck.png"
                alt="Dubsteck — Bloxify soundtrack artist"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-coral font-bold text-sm uppercase tracking-widest">
                  Music by
                </p>
                <h3 className="text-2xl font-extrabold text-cream">
                  Dubsteck
                </h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Track list */}
          <AnimatedSection delay={0.2} className="flex-1 w-full">
            <div className="space-y-4">
              {tracks.map((track) => (
                <a
                  key={track.title}
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-5 flex items-center gap-4 transition-all hover:border-coral/30 hover:scale-[1.01] block"
                >
                  {/* Play icon */}
                  <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-coral ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-cream font-semibold">{track.title}</h4>
                    <p className="text-cream-dim text-sm">{track.description}</p>
                  </div>
                  {/* Spotify icon */}
                  <div className="ml-auto text-cream/40">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
