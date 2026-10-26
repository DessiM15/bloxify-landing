import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "md" | "lg";
  className?: string;
}

/**
 * The original Bloxify pixel-block wordmark.
 * The source PNG is 309x74, so it is kept at navbar scale where it stays crisp on 2x screens.
 */
export default function Logo({ size = "md", className = "" }: LogoProps) {
  const height = size === "lg" ? 44 : 34;
  const width = Math.round(height * (309 / 74));

  return (
    <Link
      href="/"
      className={`group inline-flex items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${className}`}
      aria-label="Bloxify home"
    >
      <Image
        src="/images/bloxify-wordmark.png"
        alt="Bloxify"
        width={width}
        height={height}
        priority
        className="h-auto w-auto drop-shadow-[0_0_14px_rgba(255,63,211,0.35)] transition-transform duration-300 group-hover:scale-[1.04]"
        style={{ height, width }}
      />
    </Link>
  );
}
