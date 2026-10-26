"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import AuroraScene from "../ui/AuroraScene";
import NeonBlocks, { type BlockSpec } from "../ui/NeonBlocks";
import Text3D from "../ui/Text3D";
import DownloadButtons, { PLAY_STORE_URL } from "../ui/DownloadButtons";

const SHARE_URL = "https://bloxify.app/#countdown";
const SHARE_TEXT = "Bloxify is LIVE! Block puzzle, reimagined. Download now!";

const CONFETTI: BlockSpec[] = [
  { shape: "single", palette: "pink", x: "4%", y: "0", cell: 14, rot: 10, depth: 0.7, delay: 0.2 },
  { shape: "single", palette: "cyan", x: "14%", y: "0", cell: 10, rot: -20, depth: 0.4, delay: 0.7, hide: "mobile" },
  { shape: "square", palette: "rainbow", x: "24%", y: "0", cell: 12, rot: 25, depth: 0.55, delay: 0.45 },
  { shape: "single", palette: "yellow", x: "36%", y: "0", cell: 16, rot: 0, depth: 0.8, delay: 0.9, hide: "mobile" },
  { shape: "single", palette: "lime", x: "48%", y: "0", cell: 11, rot: 40, depth: 0.35, delay: 0.1 },
  { shape: "line", palette: "violet", x: "60%", y: "0", cell: 9, rot: 70, depth: 0.45, delay: 0.6, hide: "mobile" },
  { shape: "single", palette: "orange", x: "72%", y: "0", cell: 15, rot: -15, depth: 0.75, delay: 0.3 },
  { shape: "single", palette: "pink", x: "84%", y: "0", cell: 10, rot: 30, depth: 0.4, delay: 0.85, hide: "mobile" },
  { shape: "square", palette: "cyan", x: "94%", y: "0", cell: 11, rot: -35, depth: 0.6, delay: 0.5 },
];

/* ── Store listing card ─────────────────────────── */
function StoreListingCard() {
  const shots = [
    { src: "adventure-mode.jpg", alt: "Adventure mode: a realm map with glowing level nodes" },
    { src: "zen-mode.jpg", alt: "Zen mode: a calm board with no timer" },
    { src: "blitz-mode.jpg", alt: "Blitz mode: a 60-second round with a combo counter" },
  ];
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass-neon block w-full max-w-md overflow-hidden rounded-[2rem] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
    >
      <div className="flex gap-2 p-3 pb-0">
        {shots.map((s) => (
          <div key={s.src} className="flex-1 overflow-hidden rounded-xl bg-black/40">
            <Image
              src={`/images/screenshots/${s.src}`}
              alt={s.alt}
              width={160}
              height={284}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 p-4">
        <Image
          src="/images/icon.png"
          alt="Bloxify app icon"
          width={48}
          height={48}
          className="rounded-xl shadow-[0_0_14px_rgba(255,63,211,0.45)]"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-snow">Bloxify — Block Puzzle, Reimagined</p>
          <p className="text-xs text-snow-dim">Steady Games Studio · Free</p>
        </div>
        <Image
          src="/images/google-play-badge.png"
          alt="Get it on Google Play"
          width={120}
          height={36}
          className="h-9 w-auto shrink-0"
        />
      </div>
    </a>
  );
}

/* ── Toast ──────────────────────────────────────── */
function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      className="glass-neon fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-5 py-3 text-sm font-semibold text-snow"
    >
      {message}
    </motion.div>
  );
}

/* ── Share buttons ──────────────────────────────── */
function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const encodedText = encodeURIComponent(SHARE_TEXT);
  const encodedUrl = encodeURIComponent(SHARE_URL);

  const copyCaption = (toastMsg: string) => {
    navigator.clipboard.writeText(`${SHARE_TEXT} ${SHARE_URL}`);
    setToast(toastMsg);
  };

  const pill =
    "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-[0_6px_18px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan";

  const buttons = [
    {
      label: "X",
      bg: "bg-black ring-1 ring-white/20",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    },
    {
      label: "Facebook",
      bg: "bg-[#1877F2]",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
    },
    {
      label: "Instagram",
      bg: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      onClick: () => {
        copyCaption("Caption copied! Opening Instagram…");
        setTimeout(() => window.open("https://instagram.com", "_blank"), 800);
      },
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
    },
    {
      label: "TikTok",
      bg: "bg-black ring-1 ring-white/20",
      onClick: () => {
        copyCaption("Caption copied! Opening TikTok…");
        setTimeout(() => window.open("https://tiktok.com", "_blank"), 800);
      },
      icon: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.45a4.85 4.85 0 01-2.65-.78 4.83 4.83 0 01-1.35-1.24V6.69h3z" />,
    },
    {
      label: "WhatsApp",
      bg: "bg-[#25D366]",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />,
    },
    {
      label: "Discord",
      bg: "bg-[#5865F2]",
      href: "https://discord.gg/4XHj2VVNMZ",
      icon: <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />,
    },
    {
      label: "Text",
      bg: "bg-[#34C759]",
      href: `sms:?&body=${encodedText}%20${encodedUrl}`,
      icon: <path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 11.25c0 4.97-4.03 9-9 9a9.864 9.864 0 01-3.397-.602L3 21.75l1.102-5.603A8.962 8.962 0 013 11.25c0-4.97 4.03-9 9-9s9 4.03 9 9z" />,
      stroke: true,
    },
    {
      label: copied ? "Copied!" : "Copy link",
      bg: "bg-gradient-to-r from-pink to-violet",
      onClick: () => {
        navigator.clipboard.writeText(`${SHARE_TEXT} ${SHARE_URL}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      icon: copied ? (
        <path d="M4.5 12.75l6 6 9-13.5" />
      ) : (
        <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      ),
      stroke: true,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 lg:items-start">
      <p className="font-display text-sm tracking-[0.18em] text-cyan text-glow-cyan">SPREAD THE WORD</p>
      <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
        {buttons.map((btn) => (
          <li key={btn.label}>
            {btn.href ? (
              <a href={btn.href} target="_blank" rel="noopener noreferrer" className={`${pill} ${btn.bg}`} aria-label={`Share on ${btn.label}`}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill={btn.stroke ? "none" : "currentColor"} stroke={btn.stroke ? "currentColor" : undefined} strokeWidth={btn.stroke ? 2 : undefined} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {btn.icon}
                </svg>
                <span className="hidden sm:inline">{btn.label}</span>
              </a>
            ) : (
              <button type="button" onClick={btn.onClick} className={`${pill} ${btn.bg} cursor-pointer`} aria-label={btn.label}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill={btn.stroke ? "none" : "currentColor"} stroke={btn.stroke ? "currentColor" : undefined} strokeWidth={btn.stroke ? 2 : undefined} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {btn.icon}
                </svg>
                <span className="hidden sm:inline">{btn.label}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
      <AnimatePresence>{toast && <Toast message={toast} onDone={() => setToast(null)} />}</AnimatePresence>
    </div>
  );
}

/* ── Shareable image ────────────────────────────── */
function ShareImage() {
  const [format, setFormat] = useState<"story" | "square">("story");
  return (
    <div className="glass-neon-soft flex flex-col items-center gap-3 rounded-[1.75rem] p-4 sm:flex-row sm:items-center sm:gap-5">
      <div className="overflow-hidden rounded-xl bg-black/40 shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={format}
          src={`/api/countdown-image?format=${format}&inline=true`}
          alt={`"Bloxify is live" share graphic in ${format === "story" ? "9:16 story" : "square"} format`}
          className={format === "story" ? "w-24" : "w-32"}
        />
      </div>
      <div className="flex flex-col items-center gap-3 sm:items-start">
        <p className="font-display text-sm tracking-[0.18em] text-snow">SHARE GRAPHIC</p>
        <div className="flex gap-2" role="radiogroup" aria-label="Image format">
          {(["story", "square"] as const).map((f) => (
            <button
              key={f}
              type="button"
              role="radio"
              aria-checked={format === f}
              onClick={() => setFormat(f)}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                format === f ? "bg-pink text-white shadow-[0_0_12px_rgba(255,63,211,0.8)]" : "bg-white/10 text-snow-dim hover:bg-white/20"
              }`}
            >
              {f === "story" ? "Story 9:16" : "Square 1:1"}
            </button>
          ))}
        </div>
        <a href={`/api/countdown-image?format=${format}`} download className="btn-neon btn-neon--cyan btn-neon--sm">
          Download image
        </a>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────── */
export default function LiveNow() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="countdown" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <AuroraScene
        src="/images/backgrounds/neon_city.jpg"
        alt="Rain-slicked streets of a neon-lit city seen from above, signs glowing pink and cyan"
        dim={0.62}
        position="center 30%"
        floor={false}
      />
      <NeonBlocks blocks={CONFETTI} />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <AnimatedSection className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="badge-neon font-display text-xs tracking-[0.14em] uppercase sm:text-sm">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
            </span>
            <span className="text-snow">Out now on Google Play</span>
          </span>

          <h2 className="mt-6 leading-none">
            <Text3D tone="ice" className="block text-[length:min(3rem,12vw)] sm:text-6xl lg:text-7xl">
              WE&apos;RE
            </Text3D>
            <Text3D tone="candy" className="-mt-1 block text-[length:min(4.4rem,17vw)] sm:text-8xl lg:text-[7.5rem]">
              LIVE!
            </Text3D>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-snow-dim sm:text-xl">
            Bloxify is officially out. Grab it free, pick a mode, and start clearing lines. Then tell a friend
            who needs a new favorite puzzle game.
          </p>

          <div className="mt-9">
            <DownloadButtons showWaitlist={false} align="start" />
          </div>

          <div className="mt-10">
            <ShareButtons />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="relative flex flex-col items-center gap-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", bounce: 0.35, duration: 1 }}
            className="relative w-full max-w-md"
          >
            <StoreListingCard />
            <Image
              src="/images/mascot/blox_celebrating.png"
              alt="Blox, the coral cube mascot, throwing both arms up in celebration"
              width={216}
              height={289}
              className="pointer-events-none absolute -right-6 -top-24 w-28 drop-shadow-[0_18px_28px_rgba(0,0,0,0.6)] sm:-right-14 sm:-top-28 sm:w-40 lg:-right-16"
            />
          </motion.div>
          <ShareImage />
        </AnimatedSection>
      </div>
    </section>
  );
}
