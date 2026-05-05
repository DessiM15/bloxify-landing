"use client";

import { useState } from "react";
import Image from "next/image";

interface DownloadButtonsProps {
  compact?: boolean;
  variant?: "dark" | "coral";
}

export default function DownloadButtons({ compact = false, variant = "dark" }: DownloadButtonsProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const isCoral = variant === "coral";

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
        <p className={`text-sm font-medium mb-2 text-center lg:text-left ${isCoral ? "text-white/70" : "text-cream-dim"}`}>
          Coming soon to iOS
        </p>
        <div className={`rounded-xl p-3 ${isCoral ? "bg-white/15 border border-white/20" : "glass border border-coral/20"}`}>
          {submitted ? (
            <p className={`font-medium text-sm text-center py-1 ${isCoral ? "text-white" : "text-coral"}`}>
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
                className={`flex-1 min-w-0 rounded-lg px-4 py-3 text-base focus:outline-none transition-colors ${
                  isCoral
                    ? "bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                    : "bg-navy-light border border-cream/10 text-cream placeholder:text-cream/40 focus:border-coral/50"
                }`}
              />
              <button
                type="submit"
                className={`rounded-lg px-5 py-3 text-base font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isCoral
                    ? "bg-white text-coral hover:bg-white/90"
                    : "bg-coral text-navy hover:bg-coral-dark"
                }`}
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
