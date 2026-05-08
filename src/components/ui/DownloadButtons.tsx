"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

const LAUNCH_DATE = new Date("2026-06-04T12:00:00-05:00").getTime();

interface DownloadButtonsProps {
  compact?: boolean;
  variant?: "dark" | "coral";
}

export default function DownloadButtons({ compact = false, variant = "dark" }: DownloadButtonsProps) {
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const check = () => setLaunched(Date.now() >= LAUNCH_DATE);
    check();
    const id = setInterval(check, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`flex flex-col gap-4 ${compact ? "sm:flex-row sm:items-center" : "items-center"}`}>
      {/* Google Play Badge */}
      {launched ? (
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
      ) : (
        <div className="inline-block opacity-75">
          <Image
            src="/images/google-play-badge.png"
            alt="Coming soon on Google Play"
            width={200}
            height={60}
            className="h-[60px] w-auto"
          />
        </div>
      )}

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
