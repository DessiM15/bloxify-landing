"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import WaitlistForm from "../ui/WaitlistForm";

const LAUNCH_DATE = new Date("2026-05-13T12:00:00-05:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, LAUNCH_DATE - Date.now());
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

function getShareText(daysLeft: number): string {
  if (daysLeft <= 0) return "Bloxify is LIVE! Block puzzle, reimagined. Download now!";
  if (daysLeft === 1) return "Bloxify drops TOMORROW! Block puzzle, reimagined. Join the countdown!";
  return `Bloxify drops in ${daysLeft} days! Block puzzle, reimagined. Join the countdown!`;
}

function getShareUrl() {
  if (typeof window === "undefined") return "https://bloxify.app";
  return window.location.origin + "/#countdown";
}

/* ── Toast ─────────────────────────────────────── */
function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-navy-light border border-cream/20 text-cream text-sm font-medium px-5 py-3 rounded-full shadow-xl"
    >
      {message}
    </motion.div>
  );
}

/* ── Share Buttons ─────────────────────────────── */
function ShareButtons({ daysLeft }: { daysLeft: number }) {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const shareUrl = getShareUrl();
  const text = getShareText(daysLeft);
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(shareUrl);

  const copyToClipboard = (msg: string, toastMsg: string) => {
    navigator.clipboard.writeText(`${msg} ${shareUrl}`);
    setToast(toastMsg);
  };

  const buttons = [
    {
      label: "Twitter",
      bg: "bg-black",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      bg: "bg-[#1877F2]",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      bg: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      onClick: () => {
        copyToClipboard(text, "Caption copied! Opening Instagram...");
        setTimeout(() => window.open("https://instagram.com", "_blank"), 800);
      },
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      bg: "bg-black",
      onClick: () => {
        copyToClipboard(text, "Caption copied! Opening TikTok...");
        setTimeout(() => window.open("https://tiktok.com", "_blank"), 800);
      },
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.45a4.85 4.85 0 01-2.65-.78 4.83 4.83 0 01-1.35-1.24V6.69h3z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      bg: "bg-[#25D366]",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "Discord",
      bg: "bg-[#5865F2]",
      href: "https://discord.gg/4XHj2VVNMZ",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
      ),
    },
    {
      label: "Text",
      bg: "bg-[#34C759]",
      href: `sms:?&body=${encodedText}%20${encodedUrl}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 11.25c0 4.97-4.03 9-9 9a9.864 9.864 0 01-3.397-.602L3 21.75l1.102-5.603A8.962 8.962 0 013 11.25c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
        </svg>
      ),
    },
    {
      label: copied ? "Copied!" : "Copy Link",
      bg: "bg-coral",
      onClick: () => {
        navigator.clipboard.writeText(`${text} ${shareUrl}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {copied ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          )}
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-cream-dim text-sm font-medium uppercase tracking-widest">Spread the Word</p>
      <div className="flex flex-wrap justify-center gap-3">
        {buttons.map((btn) =>
          btn.href ? (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 ${btn.bg} text-white font-bold text-sm px-4 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg`}
            >
              {btn.icon}
              <span className="hidden sm:inline">{btn.label}</span>
            </a>
          ) : (
            <button
              key={btn.label}
              onClick={btn.onClick}
              className={`group flex items-center gap-2 ${btn.bg} text-white font-bold text-sm px-4 py-2.5 rounded-full transition-all hover:scale-105 cursor-pointer shadow-lg`}
            >
              {btn.icon}
              <span className="hidden sm:inline">{btn.label}</span>
            </button>
          )
        )}
      </div>

      {/* Download countdown image links */}
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        <a
          href="/api/countdown-image?format=story"
          download
          className="text-cream-dim hover:text-coral text-xs underline transition-colors"
        >
          Download Story Image (9:16)
        </a>
        <a
          href="/api/countdown-image?format=square"
          download
          className="text-cream-dim hover:text-coral text-xs underline transition-colors"
        >
          Download Square Image (1:1)
        </a>
      </div>

      <AnimatePresence>
        {toast && <Toast message={toast} onDone={() => setToast(null)} />}
      </AnimatePresence>
    </div>
  );
}

/* ── Confetti ─────────────────────────────────── */
const confettiColors = ["#E24B4A", "#EF9F27", "#378ADD", "#FF7F50", "#FFE4D6", "#34C759"];

function Confetti() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    size: 6 + Math.random() * 8,
    color: confettiColors[i % confettiColors.length],
    drift: (Math.random() - 0.5) * 80,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, typeof window !== "undefined" ? window.innerHeight + 100 : 1100],
            x: [0, p.drift],
            rotate: [p.rotation, p.rotation + 360],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ── CelebrationView ──────────────────────────── */
function CelebrationView() {
  return (
    <div className="relative text-center">
      <Confetti />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
          <span className="bg-gradient-to-r from-coral via-block-orange to-block-red bg-clip-text text-transparent">
            We&apos;re Live!
          </span>
        </h2>
        <p className="text-cream-dim text-lg">Available now on Google Play</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.bloxify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-coral hover:bg-coral-dark text-navy font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg shadow-coral/25"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.4 12l2.298-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
          </svg>
          Download on Google Play
        </a>
        <div className="flex items-center gap-3 mt-4">
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
            Let&apos;s go!
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Countdown blocks ──────────────────────────── */
const blockColors = [
  { bg: "bg-block-red", shadow: "shadow-block-red/30" },
  { bg: "bg-block-orange", shadow: "shadow-block-orange/30" },
  { bg: "bg-block-blue", shadow: "shadow-block-blue/30" },
  { bg: "bg-coral", shadow: "shadow-coral/30" },
];
const blockLabels = ["Days", "Hours", "Minutes", "Seconds"];

function CountdownBlocks({ time }: { time: ReturnType<typeof getTimeLeft> }) {
  const values = [time.days, time.hours, time.minutes, time.seconds];

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {values.map((val, i) => (
        <div key={blockLabels[i]} className="flex flex-col items-center">
          <div
            className={`relative ${blockColors[i].bg} rounded-xl sm:rounded-2xl w-16 h-[72px] sm:w-24 sm:h-[104px] lg:w-[120px] lg:h-[130px] flex items-center justify-center shadow-lg ${blockColors[i].shadow} overflow-hidden`}
          >
            {/* Shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl pointer-events-none" />
            <span className="relative text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold tabular-nums">
              {String(val).padStart(2, "0")}
            </span>
          </div>
          <span className="text-cream-dim text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-2">
            {blockLabels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Interactive blobs ─────────────────────────── */
const blobConfigs = [
  { baseX: 10, baseY: 25, intensity: 1, color: "bg-block-red/20", size: "w-80 h-80" },
  { baseX: 80, baseY: 75, intensity: 0.7, color: "bg-block-blue/15", size: "w-96 h-96" },
  { baseX: 55, baseY: 10, intensity: 0.5, color: "bg-block-orange/12", size: "w-72 h-72" },
];

/* ── Main Component ────────────────────────────── */
export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  const [launched, setLaunched] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tick = () => {
      setTime(getTimeLeft());
      setLaunched(isLaunched());
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
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

  return (
    <section
      id="countdown"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-20 sm:py-28 px-4 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden"
    >
      {/* Interactive spotlight blobs */}
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
          <AnimatedSection>
            <CelebrationView />
            <div className="mt-10">
              <ShareButtons daysLeft={0} />
            </div>
          </AnimatedSection>
        ) : (
          <>
            <AnimatedSection>
              <div className="text-center mb-10">
                <p className="text-coral font-bold text-sm uppercase tracking-widest mb-3">
                  Launching on Google Play
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream">
                  May 13, 2026
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <CountdownBlocks time={time} />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center max-w-md mx-auto mt-12">
                <p className="text-cream text-lg sm:text-xl font-bold mb-3 text-center">
                  Get notified when we launch
                </p>
                <WaitlistForm
                  variant="glass"
                  placeholder="Enter your email"
                  buttonText="Notify Me"
                  successMessage="You're on the list! We'll notify you when we launch."
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
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

                <ShareButtons daysLeft={time.days} />
              </div>
            </AnimatedSection>
          </>
        )}
      </div>
    </section>
  );
}
