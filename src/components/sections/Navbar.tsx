"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../ui/Logo";
import NeonButton, { PlayIcon } from "../ui/NeonButton";
import SocialLinks from "../ui/SocialLinks";
import { useStoreUrl } from "../ui/DownloadButtons";

const NAV_LINKS = [
  { label: "Modes", href: "/#modes" },
  { label: "Adventure", href: "/#adventure" },
  { label: "Music", href: "/#soundtrack" },
  { label: "Artists", href: "/artists" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const storeUrl = useStoreUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full py-2 pl-3 pr-2 transition-all duration-500 sm:pl-4 ${
          scrolled || menuOpen ? "glass-neon" : "glass-neon-clear"
        }`}
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-pill">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden items-center gap-2 lg:flex">
          <SocialLinks className="hidden xl:flex" />
          <NeonButton href={storeUrl} size="sm" icon={<PlayIcon className="w-4 h-4" />}>
            Download
          </NeonButton>
        </div>

        {/* Mobile right */}
        <div className="flex items-center gap-2 lg:hidden">
          <NeonButton href={storeUrl} size="sm" icon={<PlayIcon className="w-4 h-4" />}>
            Get it
          </NeonButton>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-snow transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[3px] w-6 rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6.5px] h-[3px] w-6 rounded-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[13px] h-[3px] w-6 rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="glass-neon mx-auto mt-2 max-w-7xl rounded-[2rem] p-3 lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display flex items-center justify-between rounded-2xl px-4 py-3 text-2xl text-snow transition-colors hover:bg-white/8 hover:text-cyan"
                  >
                    {l.label}
                    <span aria-hidden="true" className="text-pink text-glow-pink">
                      →
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between border-t border-white/10 px-2 pt-3">
              <SocialLinks iconClass="w-6 h-6" />
              <span className="text-xs font-semibold uppercase tracking-wider text-snow-dim">Free on Android &amp; iOS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
