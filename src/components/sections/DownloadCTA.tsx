"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import DownloadButtons from "../ui/DownloadButtons";

export default function DownloadCTA() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-coral to-block-orange overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center">
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

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Ready to Play?
            </h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
              Download Bloxify on Google Play or join the iOS waitlist. Your
              puzzle journey starts now.
            </p>

            <DownloadButtons variant="coral" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
