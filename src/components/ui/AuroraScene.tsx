import Image from "next/image";

interface AuroraSceneProps {
  src: string;
  /** Describe the scene; it is real artwork, not just a tint. */
  alt: string;
  priority?: boolean;
  /** 0–1 overall darkening */
  dim?: number;
  position?: string;
  aurora?: boolean;
  stars?: boolean;
  floor?: boolean;
  className?: string;
}

/**
 * Full-bleed scene background: artwork + dark gradient + animated aurora,
 * twinkling stars and a neon floor reflection.
 */
export default function AuroraScene({
  src,
  alt,
  priority = false,
  dim = 0.55,
  position = "center",
  aurora = true,
  stars = true,
  floor = true,
  className = "",
}: AuroraSceneProps) {
  const top = Math.min(1, dim + 0.25);
  const mid = Math.max(0, dim - 0.2);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(6,5,26,${top}) 0%, rgba(6,5,26,${mid}) 32%, rgba(6,5,26,${dim}) 72%, var(--void) 100%)`,
        }}
      />
      {aurora && <div className="aurora-layer" />}
      {stars && <div className="stars-layer" />}
      {floor && <div className="floor-glow" />}
    </div>
  );
}
