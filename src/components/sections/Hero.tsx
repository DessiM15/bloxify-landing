"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FallingBlocks from "../ui/FallingBlocks";
import DownloadButtons from "../ui/DownloadButtons";
import DeviceMockup from "../ui/DeviceMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />

      {/* Falling blocks animation */}
      <FallingBlocks />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="text-cream">Block Puzzle,</span>
              <br />
              <span className="text-coral">Reimagined.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-cream-dim max-w-xl mx-auto lg:mx-0">
              Satisfying clears. Daily challenges. Six handcrafted realms.
              One premium puzzle experience — launching{" "}
              <span className="text-coral font-semibold">May 5, 2026</span> on
              Google Play.
            </p>

            <div className="mt-8">
              <DownloadButtons />
            </div>
          </motion.div>

          {/* Device mockup + mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <DeviceMockup />

            {/* Mascot */}
            <div className="absolute -bottom-4 -right-10 sm:-right-16 w-36 sm:w-48">
              <Image
                src="/images/mascot/blox_waving.png"
                alt="Blox mascot waving"
                width={200}
                height={267}
                className="drop-shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
