"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import WaitlistForm from "../ui/WaitlistForm";

const SHARE_TEXT = "Bloxify is coming soon to Google Play — join the waitlist!";

function getShareUrl() {
  if (typeof window === "undefined") return "";
  return window.location.origin + "/#countdown";
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
        {/* Native Share (mobile) */}
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

        {/* Copy Link */}
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



const blobConfigs = [
  { baseX: 10, baseY: 25, intensity: 1, color: "bg-block-red/20", size: "w-80 h-80" },
  { baseX: 80, baseY: 75, intensity: 0.7, color: "bg-block-blue/15", size: "w-96 h-96" },
  { baseX: 55, baseY: 10, intensity: 0.5, color: "bg-block-orange/12", size: "w-72 h-72" },
];

export default function Countdown() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

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
              <span className="bg-gradient-to-r from-coral via-block-orange to-block-red bg-clip-text text-transparent">Coming Soon</span>
            </h2>
            <p className="text-cream-dim text-base sm:text-lg mt-4 max-w-md mx-auto">
              We&apos;ll update you if it&apos;s sooner!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col items-center max-w-md mx-auto">
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
            <div className="flex items-center gap-3">
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
                Stay tuned!
              </p>
            </div>

            <ShareButtons />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
