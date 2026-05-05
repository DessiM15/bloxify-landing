"use client";

import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:support@bloxify.app?subject=Artist%20Music%20Submission&body=Hi%20Bloxify%20team%2C%0A%0AI'd%20like%20to%20submit%20my%20music%20for%20consideration.%0A%0AContact%20email%3A%20${encodeURIComponent(email)}`;
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 px-4 bg-navy-light/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title={<><span className="text-cream">We Support </span><span className="text-gradient">Artists</span></>}
            subtitle="Great games deserve great music. We partner with independent artists to bring original soundtracks to every mode — and give creators a platform to be heard."
          />
        </AnimatedSection>

        {/* Artist submission CTA */}
        <AnimatedSection delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-xl font-bold text-cream mb-2">
              Are you an up-and-coming artist?
            </h3>
            <p className="text-cream-dim text-sm leading-relaxed mb-6">
              We&apos;re always looking for fresh talent. If you want your music featured in Bloxify, send us your submission.
            </p>

            {submitted ? (
              <p className="text-coral font-medium">
                Opening your email client — we can&apos;t wait to hear your music!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 min-w-0 rounded-lg bg-navy-light border border-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:outline-none focus:border-coral/50 transition-colors"
                />
                <a
                  href="mailto:support@bloxify.app?subject=Artist%20Music%20Submission"
                  className="rounded-lg bg-coral px-6 py-3 text-base font-semibold text-navy whitespace-nowrap transition-colors hover:bg-coral-dark text-center"
                >
                  Submit Music
                </a>
              </form>
            )}
            <p className="text-cream/40 text-xs mt-3">
              Or email us directly at{" "}
              <a href="mailto:support@bloxify.app" className="text-coral hover:underline">
                support@bloxify.app
              </a>
            </p>
          </div>
        </AnimatedSection>

        {/* Featured artist — Dubsteck */}
        <AnimatedSection delay={0.2}>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-coral font-bold text-xs uppercase tracking-widest mb-6 text-center">
              Featured Artist
            </p>

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
                    className="glass rounded-xl p-4 flex items-center gap-3 transition-all hover:border-coral/30 hover:scale-[1.01] block"
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
        </AnimatedSection>
      </div>
    </section>
  );
}
