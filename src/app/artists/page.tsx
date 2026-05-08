import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArtistSubmissionForm from "@/components/sections/ArtistSubmissionForm";

export const metadata: Metadata = {
  title: "Artists — Bloxify",
  description:
    "Join Bloxify as a featured artist. Get your music heard by thousands of players in a premium mobile puzzle game.",
  openGraph: {
    title: "Artists — Bloxify",
    description:
      "Submit your music to be featured in a premium mobile puzzle game. Join the Bloxify soundtrack.",
    url: "https://bloxify.app/artists",
    siteName: "Bloxify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artists — Bloxify",
    description:
      "Submit your music to be featured in Bloxify, a premium mobile puzzle game.",
  },
};

const benefits = [
  {
    title: "In-Game Credits",
    description: "Your name and music credited directly in the game",
    icon: (
      <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Exposure to Players",
    description: "Thousands of players hear your tracks during gameplay",
    icon: (
      <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Featured Artist Spotlight",
    description: "Get highlighted on our website and social channels",
    icon: (
      <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Join a Growing Community",
    description: "Be part of the creative team shaping Bloxify's sound",
    icon: (
      <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "1",
    title: "Submit Your Music",
    description: "Fill out the form below with a link to your music on Spotify, SoundCloud, YouTube, or any platform.",
  },
  {
    number: "2",
    title: "We Listen & Connect",
    description: "We reach out to discuss fit, terms, and next steps.",
  },
  {
    number: "3",
    title: "Get Featured",
    description: "Your music goes live with full artist credit.",
  },
];

const tracks = [
  {
    title: "Good Vibrations",
    description: "Ambient puzzle soundtrack for focused play",
    spotifyUrl: "https://open.spotify.com/track/3C4cOyc2ZCyhhKqoTZBp9B?si=c9db797d67b64191",
  },
  {
    title: "My Dear",
    description: "High-energy beats for competitive sessions",
    spotifyUrl: "https://open.spotify.com/track/10lteau9b0rt14OXHI7Pm2?si=4c248d69abee41b7",
  },
];

/* Floating music notes config — rendered once at SSR, animated via CSS */
const notes = [
  { char: "♪", left: 5, size: 40, opacity: 0.12, duration: 18, delay: 0 },
  { char: "♫", left: 12, size: 34, opacity: 0.10, duration: 22, delay: 3 },
  { char: "♬", left: 20, size: 48, opacity: 0.14, duration: 16, delay: 7 },
  { char: "♪", left: 30, size: 32, opacity: 0.11, duration: 20, delay: 2 },
  { char: "♫", left: 40, size: 52, opacity: 0.12, duration: 24, delay: 5 },
  { char: "♪", left: 50, size: 36, opacity: 0.10, duration: 19, delay: 8 },
  { char: "♬", left: 58, size: 44, opacity: 0.14, duration: 17, delay: 1 },
  { char: "♫", left: 65, size: 34, opacity: 0.11, duration: 21, delay: 4 },
  { char: "♪", left: 75, size: 50, opacity: 0.12, duration: 23, delay: 6 },
  { char: "♬", left: 82, size: 32, opacity: 0.10, duration: 18, delay: 9 },
  { char: "♫", left: 88, size: 40, opacity: 0.14, duration: 20, delay: 3 },
  { char: "♪", left: 95, size: 36, opacity: 0.11, duration: 22, delay: 7 },
  { char: "♬", left: 8, size: 44, opacity: 0.11, duration: 25, delay: 10 },
  { char: "♪", left: 35, size: 34, opacity: 0.10, duration: 19, delay: 11 },
  { char: "♫", left: 55, size: 48, opacity: 0.12, duration: 21, delay: 13 },
  { char: "♬", left: 72, size: 36, opacity: 0.11, duration: 17, delay: 12 },
  { char: "♪", left: 92, size: 32, opacity: 0.10, duration: 23, delay: 14 },
  { char: "♫", left: 18, size: 40, opacity: 0.12, duration: 20, delay: 15 },
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-navy relative overflow-hidden">
      {/* Floating music notes keyframes */}
      <style>{`
        @keyframes float-note {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--note-opacity);
          }
          90% {
            opacity: var(--note-opacity);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Floating music notes background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {notes.map((note, i) => (
          <span
            key={i}
            className="absolute text-coral"
            style={{
              left: `${note.left}%`,
              fontSize: note.size,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ["--note-opacity" as any]: note.opacity,
              opacity: 0,
              animation: `float-note ${note.duration}s ${note.delay}s linear infinite`,
            }}
          >
            {note.char}
          </span>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cream/10 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/bloxify-wordmark.png" alt="Bloxify" width={200} height={56} className="h-[52px] w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Hero with Blox mascot */}
        <div className="text-center mb-16 relative">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center gap-6 sm:gap-10">
            {/* Mascot — left side on desktop, above text on mobile */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex-shrink-0">
              <Image
                src="/images/mascot/blox_presenting.png"
                alt="Blox presenting"
                width={160}
                height={160}
                className="drop-shadow-lg"
              />
            </div>

            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                <span className="bg-gradient-to-r from-coral via-block-orange to-block-red bg-clip-text text-transparent">
                  Be Part of Something Special
                </span>
              </h1>
              <p className="text-cream-dim text-lg sm:text-xl leading-relaxed">
                We&apos;re building a game that celebrates independent artists. If your music could soundtrack a puzzle adventure, we want to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass rounded-2xl p-6 flex flex-col items-start gap-3"
              >
                {benefit.icon}
                <h3 className="text-cream font-bold text-lg">{benefit.title}</h3>
                <p className="text-cream-dim text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-coral font-extrabold text-xl">{step.number}</span>
                </div>
                <h3 className="text-cream font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-cream-dim text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-cream/40 text-xs text-center max-w-lg mx-auto">
            We&apos;ll always reach out to discuss and come to an agreement before using any music. Nothing is used without your consent.
          </p>
        </section>

        {/* Featured Artist */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream text-center mb-8">Featured Artist</h2>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Artist image */}
              <div className="relative w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/images/dubsteck.png"
                  alt="Dubsteck — Featured artist"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h4 className="text-lg font-extrabold text-cream">Dubsteck</h4>
                </div>
              </div>

              {/* Tracks */}
              <div className="flex-1 w-full space-y-3">
                {tracks.map((track) => (
                  <a
                    key={track.title}
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl p-4 flex items-center gap-3 transition-all hover:border-coral/30 hover:scale-[1.01] w-full text-left block"
                  >
                    <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-coral ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-cream font-semibold text-sm">{track.title}</h4>
                      <p className="text-cream-dim text-xs">{track.description}</p>
                    </div>
                    <div className="ml-auto text-cream/40">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Submission Form + FAQ with Blox mascot */}
        <section className="mb-16 max-w-2xl mx-auto">
          <div className="flex items-start gap-6">
            {/* Mascot — desktop only, left side of form */}
            <div className="hidden lg:flex flex-col items-center gap-3 flex-shrink-0 sticky top-32">
              <div className="w-28 h-28 relative">
                <Image
                  src="/images/mascot/blox_presenting.png"
                  alt="Blox presenting"
                  width={112}
                  height={112}
                  className="drop-shadow-md"
                />
              </div>
              <p className="text-cream-dim text-sm font-medium text-center max-w-[120px]">
                We&apos;d love to hear your music!
              </p>
            </div>

            <div className="flex-1 min-w-0">
              {/* Mobile mascot — inline above form */}
              <div className="flex items-center gap-3 mb-6 lg:hidden justify-center">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/images/mascot/blox_presenting.png"
                    alt="Blox presenting"
                    width={80}
                    height={80}
                    className="drop-shadow-md"
                  />
                </div>
                <p className="text-cream-dim text-sm font-medium">
                  We&apos;d love to hear your music!
                </p>
              </div>

              <ArtistSubmissionForm />
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <Link href="/" className="text-coral hover:underline text-sm">
            &larr; Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
