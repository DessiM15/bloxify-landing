"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import AuroraScene from "../ui/AuroraScene";
import SectionHeading from "../ui/SectionHeading";

const tracks = [
  {
    title: "Good Vibrations",
    description: "Feel-good electronic warmth. Your welcome to Bloxify.",
    spotifyUrl: "https://open.spotify.com/track/3C4cOyc2ZCyhhKqoTZBp9B?si=c9db797d67b64191",
    embedUrl: "https://open.spotify.com/embed/track/3C4cOyc2ZCyhhKqoTZBp9B?utm_source=generator&theme=0",
  },
  {
    title: "My Dear",
    description: "Driving electronic melody for the high-stakes Blitz mode.",
    spotifyUrl: "https://open.spotify.com/track/10lteau9b0rt14OXHI7Pm2?si=4c248d69abee41b7",
    embedUrl: "https://open.spotify.com/embed/track/10lteau9b0rt14OXHI7Pm2?utm_source=generator&theme=0",
  },
];

const SpotifyIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

function SpotifyModal({ track, onClose }: { track: (typeof tracks)[number]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Now playing ${track.title}`}>
      <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" />
      <div className="glass-neon relative w-full max-w-md overflow-hidden rounded-[2rem]" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-snow transition-colors hover:bg-white/20 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
          aria-label="Close"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="px-6 pb-4 pt-6">
          <p className="font-display text-xs tracking-[0.2em] text-pink text-glow-pink">NOW PLAYING</p>
          <h3 className="font-display mt-1 text-2xl text-snow">{track.title}</h3>
          <p className="text-sm text-snow-dim">Dubsteck</p>
        </div>
        <div className="px-6 pb-4">
          <iframe
            src={track.embedUrl}
            title={`Spotify player: ${track.title} by Dubsteck`}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl border-0"
          />
        </div>
        <div className="px-6 pb-6">
          <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1DB954] py-3 text-sm font-bold text-white transition-colors hover:bg-[#1ed760]"
          >
            <SpotifyIcon />
            Open in Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Soundtrack() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTrack, setActiveTrack] = useState<(typeof tracks)[number] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:support@bloxify.app?subject=Artist%20Music%20Submission&body=Hi%20Bloxify%20team%2C%0A%0AI'd%20like%20to%20submit%20my%20music%20for%20consideration.%0A%0AContact%20email%3A%20${encodeURIComponent(email)}`;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="soundtrack" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <AuroraScene
        src="/images/backgrounds/space_warp.jpg"
        alt="Streaks of white light racing toward a bright point in a purple nebula"
        dim={0.7}
        floor={false}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Original soundtrack"
            title="WE SUPPORT ARTISTS"
            tone="rainbow"
            subtitle="Great games deserve great music. We partner with independent artists to bring original soundtracks to every mode, and give creators a platform to be heard."
          />
        </AnimatedSection>

        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Featured artist */}
          <AnimatedSection delay={0.1} className="min-w-0">
            <div className="glass-neon relative rounded-[2rem] p-6 sm:p-8 lg:pr-36 xl:pr-44">
              <p className="font-display text-xs tracking-[0.2em] text-cyan text-glow-cyan">FEATURED ARTIST</p>
              <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div
                  className="relative h-40 w-40 shrink-0 overflow-hidden rounded-[1.5rem] p-[3px]"
                  style={{ background: "linear-gradient(135deg, var(--pink), var(--violet), var(--cyan))", boxShadow: "0 0 24px rgba(255,63,211,0.4)" }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
                    <Image src="/images/dubsteck.png" alt="Dubsteck, the electronic artist behind the Bloxify soundtrack" fill sizes="160px" className="object-cover" />
                  </div>
                </div>
                <div className="w-full min-w-0 flex-1">
                  <h3 className="font-display text-center text-3xl text-snow sm:text-left">Dubsteck</h3>
                  <p className="mt-1 text-center text-sm text-snow-dim sm:text-left">Two original tracks, in the game now.</p>
                  <ul className="mt-4 space-y-3">
                    {tracks.map((track) => (
                      <li key={track.title}>
                        <button
                          type="button"
                          onClick={() => setActiveTrack(track)}
                          className="glass-neon-soft flex w-full items-center gap-3 rounded-2xl p-3.5 text-left transition-all hover:bg-white/10 hover:scale-[1.01] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet text-white shadow-[0_0_14px_rgba(255,63,211,0.6)]">
                            <svg className="ml-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold text-snow">{track.title}</span>
                            <span className="block text-xs leading-snug text-snow-dim">{track.description}</span>
                          </span>
                          <SpotifyIcon className="h-5 w-5 shrink-0 text-[#1DB954]" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Image
                src="/images/mascot/blox_headphones_bloxify_t-shirt.png"
                alt="Blox wearing headphones and a Bloxify t-shirt, eyes closed, vibing to the music"
                width={216}
                height={289}
                className="pointer-events-none absolute -bottom-6 -right-4 hidden w-32 drop-shadow-[0_18px_28px_rgba(0,0,0,0.6)] lg:block xl:-right-10 xl:w-40"
              />
            </div>
          </AnimatedSection>

          {/* Artist submission */}
          <AnimatedSection delay={0.2} className="min-w-0">
            <div className="glass-neon-soft rounded-[2rem] p-6 sm:p-8">
              <p className="font-display text-xs tracking-[0.2em] text-pink text-glow-pink">CALLING ALL ARTISTS</p>
              <h3 className="font-display mt-2 text-2xl leading-tight text-snow sm:text-3xl">Want your music in Bloxify?</h3>
              <p className="mt-3 text-sm leading-relaxed text-snow-dim sm:text-base">
                We&apos;re always looking for fresh talent. If you want your music featured in the game, send us a submission.
              </p>
              {submitted ? (
                <p className="mt-6 font-semibold text-lime text-glow-lime">Opening your email client. We can&apos;t wait to hear your music!</p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="artist-email">Your email address</label>
                  <input
                    id="artist-email"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-snow placeholder:text-snow/40 transition-all focus:border-cyan focus:outline-none focus:shadow-[0_0_0_3px_rgba(53,232,255,0.2)]"
                  />
                  <button type="submit" className="btn-neon btn-neon--cyan btn-neon--sm !rounded-xl">
                    Submit music
                  </button>
                </form>
              )}
              <p className="mt-4 text-xs text-snow-dim">
                Or email us directly at{" "}
                <a href="mailto:support@bloxify.app" className="font-semibold text-cyan underline decoration-cyan/40 underline-offset-4 hover:decoration-cyan">
                  support@bloxify.app
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {activeTrack && <SpotifyModal track={activeTrack} onClose={() => setActiveTrack(null)} />}
    </section>
  );
}
