"use client";

import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

interface DownloadButtonsProps {
  compact?: boolean;
  variant?: "dark" | "coral";
}

export default function DownloadButtons({ compact = false, variant = "dark" }: DownloadButtonsProps) {
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
        <WaitlistForm
          variant={variant}
          label="Coming soon to iOS"
          placeholder="Enter your email"
          buttonText="Notify Me"
          successMessage="You're on the iOS waitlist!"
        />
      </div>
    </div>
  );
}
