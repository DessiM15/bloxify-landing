"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface DeviceMockupProps {
  screenshot?: string;
  video?: string;
  videoKey?: number;
}

export default function DeviceMockup({ screenshot, video, videoKey }: DeviceMockupProps) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      {/* Outer bezel — thick dark navy frame */}
      <div
        className="rounded-[3rem] p-[6px] shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
        style={{ background: "linear-gradient(145deg, #2a2d3e, #1a1d2e)" }}
      >
        {/* Inner bezel ring */}
        <div
          className="rounded-[2.6rem] p-[2px]"
          style={{ background: "linear-gradient(145deg, #3a3d4e, #22253a)" }}
        >
          {/* Screen area */}
          <div className="rounded-[2.4rem] overflow-hidden relative bg-black">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[120px] h-[28px] bg-black rounded-b-[1rem] flex items-center justify-center gap-2">
              <div className="w-[10px] h-[10px] rounded-full bg-[#1a1d2e] border border-[#2a2d3e]" />
              <div className="w-[6px] h-[6px] rounded-full bg-[#1a1d2e]" />
            </div>

            {/* Content */}
            <div className="aspect-[9/19] w-full bg-black relative overflow-hidden">
              {screenshot ? (
                <Image
                  src={screenshot}
                  alt="Bloxify gameplay screenshot"
                  fill
                  className="object-cover"
                />
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
                      className="w-full h-full object-cover"
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
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Bottom home bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-28 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right side button (power) */}
      <div
        className="absolute top-24 -right-[3px] w-[4px] h-12 rounded-r-sm"
        style={{ background: "linear-gradient(to bottom, #3a3d4e, #2a2d3e)" }}
      />
      {/* Left side buttons (volume) */}
      <div
        className="absolute top-20 -left-[3px] w-[4px] h-7 rounded-l-sm"
        style={{ background: "linear-gradient(to bottom, #3a3d4e, #2a2d3e)" }}
      />
      <div
        className="absolute top-30 -left-[3px] w-[4px] h-12 rounded-l-sm"
        style={{ background: "linear-gradient(to bottom, #3a3d4e, #2a2d3e)" }}
      />
    </div>
  );
}
