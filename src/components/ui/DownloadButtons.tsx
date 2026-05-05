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
      <div className={compact ? "" : "w-full max-w-sm"}>
        {submitted ? (
          <p className="text-coral font-medium text-sm">
            You&apos;re on the iOS waitlist!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="iOS waitlist — enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 min-w-0 rounded-lg bg-navy-light border border-cream/10 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-coral/50 transition-colors"
            />
            <button
              type="submit"
              className="rounded-lg bg-coral px-4 py-2.5 text-sm font-semibold text-navy whitespace-nowrap transition-colors hover:bg-coral-dark cursor-pointer"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
