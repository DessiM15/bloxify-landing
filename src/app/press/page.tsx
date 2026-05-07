import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press Kit — Bloxify",
  description:
    "Bloxify press kit — logos, screenshots, game info, and media assets for journalists, bloggers, and content creators.",
};

const brandColors = [
  { name: "Navy", hex: "#0F1220" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Cream", hex: "#FFE4D6" },
  { name: "Block Red", hex: "#E24B4A" },
  { name: "Block Orange", hex: "#EF9F27" },
  { name: "Block Blue", hex: "#378ADD" },
];

const screenshots = [
  { src: "/images/screenshots/zen-mode.jpg", alt: "Zen Mode gameplay" },
  { src: "/images/screenshots/blitz-mode.jpg", alt: "Blitz Mode gameplay" },
  { src: "/images/screenshots/adventure-mode.jpg", alt: "Adventure Mode gameplay" },
];

const realms = [
  { src: "/images/realms/realm1.png", alt: "Realm 1 — Enchanted Forest" },
  { src: "/images/realms/realm2.png", alt: "Realm 2 — Crystal Caves" },
  { src: "/images/realms/realm3.png", alt: "Realm 3 — Sky Citadel" },
  { src: "/images/realms/realm4.png", alt: "Realm 4 — Lava Kingdom" },
  { src: "/images/realms/realm5.png", alt: "Realm 5 — Ocean Depths" },
  { src: "/images/realms/realm6.png", alt: "Realm 6 — Cosmic Realm" },
];

export default function PressKit() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="border-b border-cream/10 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/images/icon.png" alt="Bloxify" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold text-cream">Bloxify</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Title + Quick Facts */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-coral mb-3">
              Press Kit
            </h1>
            <p className="text-cream-dim text-lg max-w-xl mb-6">
              Everything journalists, bloggers, and content creators need to cover Bloxify — logos, screenshots, game info, and media assets.
            </p>
            <a
              href="/bloxify-presskit.zip"
              download
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-dark text-navy font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download All Assets (.zip)
            </a>
          </div>

          <div className="glass rounded-2xl p-6 shrink-0 lg:w-72">
            <h2 className="text-sm font-bold text-cream/60 uppercase tracking-wider mb-4">Quick Facts</h2>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-cream/50">Platform</dt>
                <dd className="text-cream font-semibold">Android (Google Play)</dd>
              </div>
              <div>
                <dt className="text-cream/50">Launch Date</dt>
                <dd className="text-cream font-semibold">May 9, 2026</dd>
              </div>
              <div>
                <dt className="text-cream/50">Studio</dt>
                <dd className="text-cream font-semibold">Steady Games Studio</dd>
              </div>
              <div>
                <dt className="text-cream/50">Genre</dt>
                <dd className="text-cream font-semibold">Block Puzzle / Adventure</dd>
              </div>
              <div>
                <dt className="text-cream/50">Price</dt>
                <dd className="text-cream font-semibold">Free to play</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Game Description */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-4">About Bloxify</h2>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-cream-dim leading-relaxed mb-6">
              Bloxify is a premium mobile block puzzle game that reimagines the classic genre with adventure mode, daily challenges, competitive leaderboards, and a handcrafted original soundtrack. Designed for quick sessions and deep replayability, Bloxify brings together satisfying puzzle mechanics with rich visual worlds.
            </p>
            <h3 className="text-lg font-semibold text-cream mb-3">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-cream-dim">
              <li><strong className="text-cream">Three Game Modes</strong> — Zen Mode for relaxed play, Blitz Mode for timed challenges, and Adventure Mode with a 6-realm story campaign.</li>
              <li><strong className="text-cream">Daily Challenges</strong> — New puzzles every day with streak rewards and global leaderboards.</li>
              <li><strong className="text-cream">Adventure Mode</strong> — Journey through 6 handcrafted realms, each with unique art, mechanics, and boss puzzles.</li>
              <li><strong className="text-cream">Original Soundtrack</strong> — Handcrafted music by featured artist Dubsteck, with unique tracks for each realm.</li>
              <li><strong className="text-cream">Season Pass</strong> — Unlockable cosmetic themes, board skins, and exclusive content.</li>
              <li><strong className="text-cream">Social Features</strong> — Friend referrals, leaderboards, and shareable stats.</li>
            </ul>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-4">Screenshots</h2>
          <p className="text-cream-dim text-sm mb-6">Click any image to view full size in a new tab.</p>

          <h3 className="text-lg font-semibold text-cream mb-3">Game Modes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {screenshots.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl overflow-hidden hover:border-coral/30 transition-colors block"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
                <p className="text-cream-dim text-xs text-center py-2">{img.alt}</p>
              </a>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-cream mb-3">Adventure Realms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {realms.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl overflow-hidden hover:border-coral/30 transition-colors block"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
                <p className="text-cream-dim text-xs text-center py-2">{img.alt}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Branding / Logo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-4">Branding &amp; Logo</h2>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {/* App Icon */}
              <div>
                <h3 className="text-lg font-semibold text-cream mb-3">App Icon</h3>
                <a href="/images/icon.png" target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src="/images/icon.png"
                    alt="Bloxify app icon"
                    width={128}
                    height={128}
                    className="rounded-2xl"
                  />
                </a>
                <p className="text-cream-dim text-xs mt-2">512 &times; 512 PNG — click to download</p>
              </div>

              {/* Wordmark */}
              <div>
                <h3 className="text-lg font-semibold text-cream mb-3">Wordmark</h3>
                <a href="/images/bloxify-wordmark.png" target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src="/images/bloxify-wordmark.png"
                    alt="Bloxify wordmark"
                    width={280}
                    height={64}
                    className="h-16 w-auto"
                  />
                </a>
                <p className="text-cream-dim text-xs mt-2">PNG — click to download</p>
              </div>
            </div>

            {/* Brand Colors */}
            <h3 className="text-lg font-semibold text-cream mb-3">Brand Colors</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {brandColors.map((color) => (
                <div key={color.hex} className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl border border-cream/10 mb-2"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-cream text-xs font-semibold">{color.name}</p>
                  <p className="text-cream-dim text-xs">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soundtrack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-4">Soundtrack</h2>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Image
                src="/images/dubsteck.png"
                alt="Dubsteck — featured artist"
                width={120}
                height={120}
                className="rounded-xl shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-cream mb-2">Featured Artist: Dubsteck</h3>
                <p className="text-cream-dim leading-relaxed">
                  Bloxify&apos;s original soundtrack is composed by Dubsteck, blending electronic beats with ambient textures to create a unique audio identity for each of the game&apos;s six adventure realms. The soundtrack enhances the puzzle experience with music that adapts to gameplay intensity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Studio */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-cream mb-4">About the Studio</h2>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-cream-dim leading-relaxed mb-4">
              Steady Games Studio is an independent game development studio focused on crafting polished mobile puzzle experiences. Bloxify is the studio&apos;s debut title.
            </p>
            <p className="text-cream-dim">
              <strong className="text-cream">Press contact:</strong>{" "}
              <a href="mailto:support@bloxify.app" className="text-coral hover:underline">
                support@bloxify.app
              </a>
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <Link href="/" className="text-coral hover:underline text-sm">
            &larr; Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
