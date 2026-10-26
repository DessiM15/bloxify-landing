"use client";

import { motion, useReducedMotion } from "framer-motion";
import AuroraScene from "../ui/AuroraScene";
import NeonBlocks, { type BlockSpec } from "../ui/NeonBlocks";
import Text3D from "../ui/Text3D";
import Image from "next/image";
import DeviceMockup from "../ui/DeviceMockup";
import DownloadButtons from "../ui/DownloadButtons";

const BLOCKS: BlockSpec[] = [
  { shape: "square", palette: "rainbow", x: "3%", y: "17%", cell: 26, rot: -12, depth: 0.7, delay: 0.55 },
  { shape: "l", palette: "cyan", x: "88%", y: "18%", cell: 22, rot: 18, depth: 0.5, delay: 0.1, hide: "mobile" },
  { shape: "single", palette: "yellow", x: "9%", y: "66%", cell: 36, rot: 8, depth: 0.9, delay: 0.8 },
  { shape: "line", palette: "pink", x: "74%", y: "82%", cell: 20, rot: -20, depth: 0.6, delay: 0.35, hide: "mobile" },
  { shape: "t", palette: "rainbow", x: "56%", y: "15%", cell: 18, rot: 10, depth: 0.4, delay: 0.9, hide: "mobile" },
  { shape: "single", palette: "lime", x: "92%", y: "50%", cell: 30, rot: -6, depth: 0.8, delay: 0.25 },
  { shape: "z", palette: "orange", x: "28%", y: "90%", cell: 18, rot: 14, depth: 0.35, delay: 0.65, hide: "mobile" },
  { shape: "square", palette: "violet", x: "47%", y: "58%", cell: 15, rot: -16, depth: 0.3, delay: 0.45, hide: "mobile" },
  { shape: "single", palette: "pink", x: "84%", y: "28%", cell: 14, rot: 22, depth: 0.25, delay: 0.15 },
  { shape: "l", palette: "yellow", x: "18%", y: "40%", cell: 16, rot: 30, depth: 0.45, delay: 0.05, hide: "mobile" },
  { shape: "single", palette: "cyan", x: "38%", y: "30%", cell: 22, rot: -10, depth: 0.65, delay: 0.7 },
  { shape: "t", palette: "lime", x: "65%", y: "45%", cell: 14, rot: 40, depth: 0.3, delay: 0.3, hide: "mobile" },
  { shape: "square", palette: "cyan", x: "96%", y: "75%", cell: 18, rot: 12, depth: 0.55, delay: 0.95 },
  { shape: "line", palette: "violet", x: "0%", y: "85%", cell: 16, rot: 70, depth: 0.4, delay: 0.5, hide: "mobile" },
  { shape: "single", palette: "orange", x: "52%", y: "75%", cell: 28, rot: -24, depth: 0.85, delay: 0.4 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const pop = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, bounce: 0.45, duration: 0.9 } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:pb-24 lg:pt-36"
    >
      <AuroraScene
        src="/images/backgrounds/aurora_lake.jpg"
        alt="A neon aurora ripples across a starry night sky above a still mountain lake"
        priority
        dim={0.5}
        position="center 40%"
      />
      <NeonBlocks blocks={BLOCKS} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_1fr] lg:gap-6">
        {/* ── Copy ── */}
        <motion.div
          variants={container}
          initial={reduceMotion ? "show" : "hidden"}
          animate="show"
          className="min-w-0 text-center lg:text-left"
        >
          <motion.div variants={pop} className="flex justify-center lg:justify-start">
            <span className="badge-neon font-display text-sm tracking-[0.12em] sm:text-base">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
              </span>
              <span className="text-snow">NOW ON</span>
              <span className="text-lime text-glow-lime">ANDROID</span>
            </span>
          </motion.div>

          <motion.h1 variants={pop} className="mt-6 leading-none break-words">
            <Text3D tone="ice" className="block text-[length:min(2.75rem,11vw)] sm:text-6xl lg:text-7xl">
              PLAY
            </Text3D>
            <Text3D
              tone="sun"
              className="-mt-1 block text-[length:min(4.6rem,15.5vw)] sm:text-[6.5rem] lg:text-[7.5rem] xl:text-[8.75rem]"
            >
              BLOXIFY
            </Text3D>
          </motion.h1>

          <motion.p
            variants={pop}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-snow-dim sm:text-xl lg:mx-0"
          >
            Block puzzle, <span className="font-bold text-snow">reimagined</span>. Satisfying clears,
            daily challenges, six handcrafted realms and a soundtrack from real artists. Free on Google Play,
            no forced ads.
          </motion.p>

          <motion.div variants={pop} className="mt-9">
            <DownloadButtons showWaitlist={false} align="start" />
          </motion.div>

          <motion.p variants={pop} className="mt-5 text-sm text-snow-dim">
            On iPhone?{" "}
            <a
              href="#download"
              className="font-semibold text-cyan underline decoration-cyan/40 underline-offset-4 transition hover:decoration-cyan"
            >
              Join the iOS waitlist
            </a>
          </motion.p>
        </motion.div>

        {/* ── Visual ── */}
        <div className="relative mx-auto w-full min-w-0 max-w-[600px]">
          {/* Spotlight behind the pair */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,63,211,0.42) 0%, rgba(123,63,242,0.28) 38%, rgba(53,232,255,0.14) 58%, transparent 72%)",
              animation: "glow-pulse 5.5s ease-in-out infinite",
            }}
          />

          <div className="relative flex items-end justify-center">
            {/* Blox */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 50, scale: 0.85, rotate: -7 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: -7 }}
              transition={{ delay: 0.55, type: "spring", bounce: 0.5, duration: 1 }}
              className="relative z-10 -mr-14 w-[72%] translate-y-[20%] sm:-mr-24 sm:w-[78%]"
              style={{ transformOrigin: "50% 75%" }}
            >
              {/* The render has empty space below the feet, so the shadow sits at the feet (~25% up), not at the image edge. */}
              <div
                aria-hidden="true"
                className="absolute bottom-[23%] left-1/2 h-[7%] w-[58%] -translate-x-1/2 rounded-full bg-black/65 blur-md"
              />
              <div className="relative">
                <Image
                  src="/images/mascot/blox_presenting.png"
                  alt="Blox, Bloxify's smiling coral cube mascot, gesturing proudly toward the phone beside him"
                  width={432}
                  height={578}
                  priority
                  className="relative h-auto w-full drop-shadow-[0_22px_34px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.3, duration: 1.1 }}
              className="relative w-[50%] sm:w-[48%]"
            >
              <DeviceMockup />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#modes"
        aria-label="Scroll to game modes"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-snow-dim transition hover:text-cyan sm:flex"
      >
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
          style={{ animation: "bob 2.2s ease-in-out infinite" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
