import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../ui/SocialLinks";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Press Kit", href: "/press" },
  { label: "Artists", href: "/artists" },
  { label: "Support", href: "mailto:support@bloxify.app" },
  { label: "Delete Account", href: "/delete-account" },
];

export default function Footer() {
  return (
    <footer className="relative px-4 py-12 sm:px-6">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, var(--pink), var(--violet), var(--cyan), transparent)" }} />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan" aria-label="Bloxify home">
              <Image src="/images/bloxify-wordmark.png" alt="Bloxify" width={150} height={36} className="h-9 w-auto drop-shadow-[0_0_14px_rgba(255,63,211,0.35)]" />
            </Link>
            <p className="mt-3 text-sm text-snow-dim">Built by Steady Games Studio</p>
            <p className="text-sm text-snow-dim">
              Contact:{" "}
              <a href="mailto:support@bloxify.app" className="font-semibold text-cyan underline decoration-cyan/40 underline-offset-4 hover:decoration-cyan">
                support@bloxify.app
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <SocialLinks iconClass="h-6 w-6" />
            <nav aria-label="Footer">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:justify-end">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-snow-dim transition-all hover:text-snow hover:text-glow-cyan">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-snow-dim/70">
            &copy; {new Date().getFullYear()} Steady Games Studio. All rights reserved. Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
          <p className="text-xs text-snow-dim/70">
            Website built by{" "}
            <a
              href="https://smartscaleagent.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Smart Scale, LLC — custom web, mobile, and AI software development"
              className="text-snow-dim underline decoration-white/20 underline-offset-2 transition-colors hover:text-cyan hover:decoration-cyan"
            >
              Smart Scale, LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
