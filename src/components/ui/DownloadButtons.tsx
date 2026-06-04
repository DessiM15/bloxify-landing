"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

const LAUNCH_DATE = new Date("2026-06-04T12:00:00-05:00").getTime();
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.bloxify";

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
        <div className="flex flex-col items-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 ${
              variant === "coral"
                ? "bg-navy hover:bg-navy-light text-cream"
                : "bg-coral hover:bg-coral-dark text-navy"
            } font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg`}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.4 12l2.298-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            Download Now — Free
          </a>
          <a
            href={PLAY_STORE_URL}
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
        </div>
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
