"use client";

import { useState } from "react";
import Image from "next/image";

interface DownloadButtonsProps {
  compact?: boolean;
}

export default function DownloadButtons({ compact = false }: DownloadButtonsProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${compact ? "sm:flex-row sm:items-center" : "items-center"}`}>
      {/* Google Play Badge */}
      <a
        href="https://play.google.com/store/apps/details?id=com.bloxify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform hover:scale-105"
      >
        <Image
          src="/images/google-play-badge.png"
          alt="Get it on Google Play"
          width={200}
          height={60}
          className="h-[60px] w-auto"
        />
      </a>

      {/* iOS Waitlist */}
      <div className={compact ? "" : "w-full max-w-md"}>
        <p className="text-cream-dim text-sm font-medium mb-2 text-center lg:text-left">
          Coming soon to iOS
        </p>
        <div className="glass rounded-xl p-3 border border-coral/20">
          {submitted ? (
            <p className="text-coral font-medium text-sm text-center py-1">
              You&apos;re on the iOS waitlist!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 min-w-0 rounded-lg bg-navy-light border border-cream/10 px-4 py-3 text-base text-cream placeholder:text-cream/40 focus:outline-none focus:border-coral/50 transition-colors"
              />
              <button
                type="submit"
                className="rounded-lg bg-coral px-5 py-3 text-base font-semibold text-navy whitespace-nowrap transition-colors hover:bg-coral-dark cursor-pointer"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
