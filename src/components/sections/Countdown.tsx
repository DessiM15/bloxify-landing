"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";

const LAUNCH_DATE = new Date("2026-05-05T12:00:00-05:00").getTime();

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

const blobConfigs = [
  { baseX: 10, baseY: 25, intensity: 1, color: "bg-block-red/20", size: "w-80 h-80" },
  { baseX: 80, baseY: 75, intensity: 0.7, color: "bg-block-blue/15", size: "w-96 h-96" },
  { baseX: 55, baseY: 10, intensity: 0.5, color: "bg-block-orange/12", size: "w-72 h-72" },
];

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  const sectionRef = useRef<HTMLElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Direct DOM manipulation for smooth 60fps mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

    blobRefs.current.forEach((el, i) => {
      if (!el) return;
      const blob = blobConfigs[i];
      const offsetX = (mouseX - 50) * 3 * blob.intensity;
      const offsetY = (mouseY - 50) * 3 * blob.intensity;
      el.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    });
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section
      id="countdown"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-20 sm:py-28 px-4 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden"
    >
      {/* Interactive spotlight blobs — follow mouse on desktop, static on mobile */}
      {blobConfigs.map((blob, i) => (
        <div
          key={i}
          ref={(el) => { blobRefs.current[i] = el; }}
          className={`absolute ${blob.color} ${blob.size} rounded-full blur-3xl pointer-events-none`}
          style={{
            left: `${blob.baseX}%`,
            top: `${blob.baseY}%`,
            transform: "translate(-50%, -50%)",
            transition: "transform 0.3s ease-out",
          }}
        />
      ))}

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
          <div className="flex flex-col items-center mt-10 gap-4">
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
                Count down with us!
              </p>
            </div>

            <button
              onClick={() => {
                const url = window.location.origin + "/#countdown";
                const text = "Bloxify drops May 5 — count down with us!";
                if (navigator.share) {
                  navigator.share({ title: "Bloxify Countdown", text, url });
                } else {
                  navigator.clipboard.writeText(`${text} ${url}`);
                  alert("Link copied!");
                }
              }}
              className="group flex items-center gap-2.5 bg-coral hover:bg-coral-dark text-navy font-bold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 cursor-pointer shadow-lg shadow-coral/25"
            >
              <svg className="w-4.5 h-4.5 transition-transform group-hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              Share the Countdown
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
