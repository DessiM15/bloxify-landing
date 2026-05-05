"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import DownloadButtons from "../ui/DownloadButtons";

export default function DownloadCTA() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="glass-strong rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Mascot */}
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image
                  src="/images/mascot/blox_celebrating.png"
                  alt="Blox celebrating"
                  width={96}
                  height={96}
                  className="drop-shadow-lg"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cream mb-4">
                Ready to Play?
              </h2>
              <p className="text-cream-dim text-lg max-w-lg mx-auto mb-8">
                Download Bloxify on Google Play or join the iOS waitlist. Your
                puzzle journey starts now.
              </p>

              <DownloadButtons />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
