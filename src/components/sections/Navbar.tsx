"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/icon.png"
            alt="Bloxify"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="text-xl font-bold text-cream tracking-tight">
            Bloxify
          </span>
        </a>

        {/* CTA */}
        <a
          href="https://play.google.com/store/apps/details?id=com.bloxify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-coral-dark"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
