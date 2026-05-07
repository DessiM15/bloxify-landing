"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import WaitlistForm from "../ui/WaitlistForm";

// Houston (America/Chicago) is UTC-5 during May (CDT). Launch: May 9, 2026 at noon local.
const LAUNCH_DATE = new Date("2026-05-09T12:00:00-05:00").getTime();

const SHARE_TEXT = "Bloxify drops May 9 — count down with us!";

function getShareUrl() {
  if (typeof window === "undefined") return "";
  return window.location.origin + "/#countdown";
}

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

function isLaunched() {
  return Date.now() >= LAUNCH_DATE;
}

function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  const shareUrl = getShareUrl();

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const nativeShare = async () => {
    try {
      await navigator.share({
        title: "Bloxify",
        text: SHARE_TEXT,
        url: shareUrl,
      });
    } catch {
      // User cancelled or API unavailable — fall through silently
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(`${SHARE_TEXT} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-cream-dim text-sm font-medium uppercase tracking-widest">Spread the Word</p>
      <div className="flex flex-wrap justify-center gap-3">
        {canNativeShare && (
          <button
            onClick={nativeShare}
            className="group flex items-center gap-2 bg-coral hover:bg-coral-dark text-navy font-bold text-sm px-5 py-3 rounded-full transition-all hover:scale-105 cursor-pointer shadow-lg shadow-coral/25"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M12 15V3m0 0l-3 3m3-3l3 3" />
            </svg>
            Share
          </button>
        )}

        <button
          onClick={copyLink}
          className="group flex items-center gap-2 bg-cream/10 hover:bg-cream/20 text-cream font-bold text-sm px-5 py-3 rounded-full transition-all hover:scale-105 cursor-pointer border border-cream/20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            )}
          </svg>
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}

const CONFETTI_COLORS = ["#FF7F50", "#E24B4A", "#EF9F27", "#378ADD", "#FFE4D6", "#34C759", "#FF6B9D", "#6C5CE7"];
const confettiParticles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 3,
  duration: 2.5 + Math.random() * 2,
  size: 6 + Math.random() * 8,
  rotation: Math.random() * 360,
  drift: (Math.random() - 0.5) * 120,
}));

function CelebrationView() {
  return (
    <div className="text-center relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confettiParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-sm"
            style={{
              left: p.left,
              top: -20,
              width: p.size,
              height: p.size * 0.6,
              backgroundColor: p.color,
              rotate: p.rotation,
            }}
            animate={{
              y: [0, 600],
              x: [0, p.drift],
              rotate: [p.rotation, p.rotation + 360],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
      >
        <p className="text-5xl sm:text-6xl mb-4">🎉🎮🎉</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-coral via-block-orange to-block-red bg-clip-text text-transparent">
            We&apos;re Live!
          </span>
        </h2>
        <p className="text-cream-dim text-lg sm:text-xl mb-8 max-w-md mx-auto">
          Bloxify is officially available on Google Play. The puzzle adventure starts now!
        </p>
      </motion.div>

      <motion.a
        href="https://play.google.com/store/apps/details?id=app.bloxify"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-coral hover:bg-coral-dark text-navy font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg shadow-coral/25"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 1.16L13.7 11.7 3.55 22.13c-.47-.36-.55-.98-.55-1.57V2.44c0-.49.06-1 .18-1.28zM14.65 12.65l2.58 2.58-9.87 5.63 7.29-8.21zm3.53-1.9l3.2 1.83c.63.36.63 1.21 0 1.57l-3.54 2.02-2.83-2.83 3.17-2.59zM5.03.26L14.65 5.7l-2.58 2.58L5.03.26z"/>
        </svg>
        Download on Google Play
      </motion.a>

      <div className="flex items-center justify-center gap-3 mt-10">
        <div className="w-28 h-28 relative">
          <Image
            src="/images/mascot/blox_celebrating.png"
            alt="Blox celebrating"
            width={112}
            height={112}
            className="drop-shadow-md"
          />
        </div>
        <p className="text-cream-dim text-lg sm:text-xl font-medium">
          Let&apos;s go! 🥳
        </p>
      </div>
    </div>
  );
}

const blockColors = ["bg-block-red", "bg-block-orange", "bg-block-blue", "bg-coral"] as const;

const blobConfigs = [
  { baseX: 10, baseY: 25, intensity: 1, color: "bg-block-red/20", size: "w-80 h-80" },
  { baseX: 80, baseY: 75, intensity: 0.7, color: "bg-block-blue/15", size: "w-96 h-96" },
  { baseX: 55, baseY: 10, intensity: 0.5, color: "bg-block-orange/12", size: "w-72 h-72" },
];

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  const [launched, setLaunched] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setLaunched(isLaunched());
    const timer = setInterval(() => {
      setTime(getTimeLeft());
      if (isLaunched()) setLaunched(true);
    }, 1000);
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

      {/* Blox in the left empty space — desktop only. Hidden on launch. */}
      {!launched && (
        <div className="hidden lg:block absolute left-0 xl:left-8 top-1/2 -translate-y-1/2 w-[448px] h-[448px] pointer-events-none z-0">
          <Image
            src="/images/mascot/blox_presenting-removebg-preview.png"
            alt="Blox presenting"
            width={448}
            height={448}
            className="drop-shadow-md"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        {launched ? (
          <CelebrationView />
        ) : (
          <>
            <AnimatedSection>
              <div className="text-center mb-10">
                <p className="text-coral font-bold text-sm uppercase tracking-widest mb-3">
                  Launching on Google Play
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  <span className="text-cream">May 9, </span>
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

            <AnimatedSection delay={0.25}>
              <div className="flex flex-col items-center mt-10 max-w-md mx-auto">
                <p className="text-cream text-lg sm:text-xl font-bold mb-3 text-center">
                  Get notified when we launch
                </p>
                <WaitlistForm
                  variant="glass"
                  placeholder="Enter your email"
                  buttonText="Notify Me"
                  successMessage="You're on the list! We'll email you on launch day."
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col items-center mt-10 gap-6">
                {/* Mobile only: small inline Blox + caption. On desktop the big Blox sits in the left margin instead. */}
                <div className="flex items-center gap-3 lg:hidden">
                  <div className="w-28 h-28 relative">
                    <Image
                      src="/images/mascot/blox_celebrating.png"
                      alt="Blox"
                      width={112}
                      height={112}
                      className="drop-shadow-md"
                    />
                  </div>
                  <p className="text-cream-dim text-lg sm:text-xl font-medium">
                    Count down with us!
                  </p>
                </div>
                <p className="hidden lg:block text-cream-dim text-lg sm:text-xl font-medium">
                  Count down with us!
                </p>

                <ShareButtons />

                {/* Social Links */}
                <div className="flex items-center gap-5 mt-2">
                  <a
                    href="https://www.instagram.com/bloxify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-dim hover:text-coral transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@bloxify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-dim hover:text-coral transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.45a4.85 4.85 0 01-2.65-.78 4.83 4.83 0 01-1.35-1.24V6.69h3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </>
        )}
      </div>
    </section>
  );
}
