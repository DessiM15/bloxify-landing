"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import NeonButton, { PlayIcon } from "./NeonButton";

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.bloxify";
export const APP_STORE_URL = "https://apps.apple.com/app/id6792413746";

/**
 * Picks the store that matches the visitor's device. Google Play during SSR and on
 * desktop/Android; the App Store on iPhone/iPad so the primary CTA never sends an
 * iOS user to a listing they can't install from. useSyncExternalStore keeps the
 * server and first client render identical, then corrects on the client.
 */
const subscribeNoop = () => () => {};
function getDeviceStoreUrl(): string {
  const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) || isIPadOS ? APP_STORE_URL : PLAY_STORE_URL;
}
const getServerStoreUrl = () => PLAY_STORE_URL;
export function useStoreUrl(): string {
  return useSyncExternalStore(subscribeNoop, getDeviceStoreUrl, getServerStoreUrl);
}

interface DownloadButtonsProps {
  /** kept for older call sites */
  compact?: boolean;
  /** kept for older call sites */
  variant?: "dark" | "coral" | "neon";
  /** kept for older call sites — the iOS waitlist is retired now that the app is on the App Store */
  showWaitlist?: boolean;
  align?: "center" | "start";
}

const badgeLinkCls =
  "inline-block rounded-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan";
const badgeImgCls = "h-[54px] w-auto drop-shadow-[0_0_16px_rgba(53,232,255,0.35)]";

export default function DownloadButtons({ align = "center" }: DownloadButtonsProps) {
  const alignCls = align === "start" ? "items-center lg:items-start" : "items-center";
  const primaryUrl = useStoreUrl();

  return (
    <div className={`flex flex-col gap-5 ${alignCls}`}>
      <NeonButton href={primaryUrl} icon={<PlayIcon className="w-6 h-6" />}>
        Download Now — Free
      </NeonButton>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={badgeLinkCls}>
          <Image
            src="/images/google-play-badge.png"
            alt="Get it on Google Play"
            width={180}
            height={54}
            className={badgeImgCls}
          />
        </a>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={badgeLinkCls}>
          <Image
            src="/images/app-store-badge.svg"
            alt="Download on the App Store"
            width={162}
            height={54}
            className={badgeImgCls}
          />
        </a>
      </div>
    </div>
  );
}
