"use client";

import Image from "next/image";
import NeonButton, { PlayIcon } from "./NeonButton";
import WaitlistForm from "./WaitlistForm";

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.bloxify";

interface DownloadButtonsProps {
  /** kept for older call sites */
  compact?: boolean;
  variant?: "dark" | "coral" | "neon";
  showWaitlist?: boolean;
  align?: "center" | "start";
}

export default function DownloadButtons({ showWaitlist = true, align = "center" }: DownloadButtonsProps) {
  const alignCls = align === "start" ? "items-center lg:items-start" : "items-center";

  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <NeonButton href={PLAY_STORE_URL} icon={<PlayIcon className="w-6 h-6" />}>
          Download Now — Free
        </NeonButton>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
        >
          <Image
            src="/images/google-play-badge.png"
            alt="Get it on Google Play"
            width={180}
            height={54}
            className="h-[54px] w-auto drop-shadow-[0_0_16px_rgba(53,232,255,0.35)]"
          />
        </a>
      </div>

      {showWaitlist && (
        <div className="w-full max-w-md">
          <WaitlistForm
            variant="neon"
            label="Coming soon to iOS"
            placeholder="Enter your email"
            buttonText="Notify Me"
            successMessage="You're on the iOS waitlist!"
          />
        </div>
      )}
    </div>
  );
}
