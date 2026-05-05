"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";

const LAUNCH_DATE = new Date("2026-05-05T00:00:00-04:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, LAUNCH_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const blockColors = ["bg-block-red", "bg-block-orange", "bg-block-blue", "bg-coral"] as const;

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section id="countdown" className="relative py-20 sm:py-28 px-4 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-block-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-block-blue/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-block-orange/8 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-coral font-bold text-sm uppercase tracking-widest mb-3">
              Launching on Google Play
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-cream">May 5, </span>
              <span className="bg-gradient-to-r from-coral via-block-orange to-block-red bg-clip-text text-transparent">2026</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex justify-center gap-3 sm:gap-5">
            {units.map((unit, i) => (
              <div key={unit.label} className="text-center">
                <div
                  className={`${blockColors[i]} rounded-2xl w-[72px] h-[80px] sm:w-[100px] sm:h-[110px] lg:w-[120px] lg:h-[130px] flex items-center justify-center shadow-lg relative`}
                  style={{ boxShadow: `0 6px 0 rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.3)` }}
                >
                  {/* Block shine effect */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-white/15 rounded-t-2xl" />
                  <span className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold relative z-10 tabular-nums">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-cream-dim text-xs sm:text-sm font-semibold mt-3 uppercase tracking-wider">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/mascot/blox_celebrating.png"
                  alt="Blox"
                  width={48}
                  height={48}
                  className="drop-shadow-md"
                />
              </div>
              <p className="text-cream-dim text-sm">
                Share this page and count down with us!
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
