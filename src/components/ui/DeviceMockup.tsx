"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface DeviceMockupProps {
  screenshot?: string;
  video?: string;
  videoKey?: number;
  poster?: string;
  /** Describe what is on the screen */
  screenAlt?: string;
  className?: string;
}

const DEFAULT_ALT =
  "Bloxify gameplay: glossy colored blocks dropped onto a dark grid as full rows flash and clear for points";

/**
 * A Pixel-style Android phone drawn in CSS with real proportions:
 * 20:9 display, thin uniform bezel, centered hole-punch camera, graphite body with a
 * polished rail, and physical buttons on the right edge. The neon lives in a glow
 * behind the device rather than on its frame so it still reads as hardware.
 */
export default function DeviceMockup({
  screenshot,
  video,
  videoKey,
  poster,
  screenAlt = DEFAULT_ALT,
  className = "",
}: DeviceMockupProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      {/* Neon glow behind the device */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-14%] rounded-[45%] blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(255,63,211,0.45) 0%, rgba(123,63,242,0.35) 40%, rgba(53,232,255,0.18) 65%, transparent 80%)",
        }}
      />

      {/* Polished rail (the metal edge you see around a phone) */}
      <div
        className="relative rounded-[13.5%/6.2%] p-[2px]"
        style={{
          background:
            "linear-gradient(160deg, #8d8fa3 0%, #3b3d4d 22%, #1c1d27 50%, #3b3d4d 78%, #9a9cb0 100%)",
          boxShadow:
            "0 30px 60px rgba(0,0,0,0.6), 0 10px 22px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Body */}
        <div
          className="rounded-[13.2%/6.05%] p-[9px]"
          style={{
            background: "linear-gradient(170deg, #15161d 0%, #0b0b10 100%)",
          }}
        >
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[10.5%/4.8%] bg-black">
            <div className="relative aspect-[9/20] w-full overflow-hidden bg-black">
              {screenshot ? (
                <Image src={screenshot} alt={screenAlt} fill sizes="280px" className="object-cover" />
              ) : video && videoKey !== undefined ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={videoKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster={poster}
                      role="img"
                      aria-label={screenAlt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              ) : (
                <video
                  src={video || "/videos/hero-gameplay.mp4"}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={poster || "/videos/hero-gameplay-poster.jpg"}
                  role="img"
                  aria-label={screenAlt}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            {/* Hole-punch front camera */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[2.4%] z-20 h-[10px] w-[10px] -translate-x-1/2 rounded-full"
              style={{
                background: "radial-gradient(circle at 40% 35%, #2a2f45 0%, #05060a 60%)",
                boxShadow: "0 0 0 2px rgba(0,0,0,0.9), inset 0 0 2px rgba(255,255,255,0.25)",
              }}
            />

            {/* Gesture bar */}
            <div
              aria-hidden="true"
              className="absolute bottom-[1.6%] left-1/2 z-20 h-[3px] w-[34%] -translate-x-1/2 rounded-full bg-white/70"
            />

            {/* Glass reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(112deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 22%, transparent 38%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Right-edge buttons: power above volume rocker, as on a Pixel */}
      <div
        aria-hidden="true"
        className="absolute right-[-3px] top-[17%] h-[6.5%] w-[3px] rounded-r-[2px]"
        style={{ background: "linear-gradient(to right, #2a2b36, #6e7085)" }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[-3px] top-[26%] h-[12%] w-[3px] rounded-r-[2px]"
        style={{ background: "linear-gradient(to right, #2a2b36, #6e7085)" }}
      />
    </div>
  );
}
