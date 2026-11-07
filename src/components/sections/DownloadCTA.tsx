"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import AuroraScene from "../ui/AuroraScene";
import Text3D from "../ui/Text3D";
import DownloadButtons from "../ui/DownloadButtons";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <AuroraScene
        src="/images/backgrounds/floating_lanterns.jpg"
        alt="Hundreds of warm paper lanterns rising into a night sky"
        dim={0.5}
        position="center 60%"
        aurora={false}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <AnimatedSection className="flex flex-col items-center">
          <Image
            src="/images/mascot/blox_pointing_upward.png"
            alt="Blox pointing upward with a surprised, excited look"
            width={186}
            height={334}
            className="w-28 drop-shadow-[0_18px_28px_rgba(0,0,0,0.6)] sm:w-36"
          />
          <h2 className="mt-4 leading-none">
            <Text3D tone="ice" className="block text-[length:min(2.4rem,9vw)] sm:text-5xl">
              WHAT ARE YOU
            </Text3D>
            <Text3D tone="sun" className="-mt-1 block text-[length:min(3.6rem,13.5vw)] sm:text-7xl lg:text-8xl">
              WAITING FOR?
            </Text3D>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-snow-dim sm:text-xl">
            Bloxify is live right now on Google Play and the App Store. Download it free on Android or iPhone and
            start your puzzle journey.
          </p>
          <div className="mt-9 w-full">
            <DownloadButtons />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
