import type { ReactNode } from "react";
import Text3D, { type Text3DTone } from "./Text3D";

interface SectionHeadingProps {
  /** Small neon pill above the title, e.g. "Adventure mode" */
  eyebrow?: string;
  /** One or two short lines of chunky display text. Pass an array for a two-line title. */
  title: string | [string, string];
  tone?: Text3DTone;
  /** Tone for the second line when a two-line title is given */
  tone2?: Text3DTone;
  subtitle?: ReactNode;
  align?: "center" | "left";
  /** Kept for older call sites; the neon heading has a single look. */
  variant?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  tone = "sun",
  tone2,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];
  const alignCls = align === "center" ? "text-center items-center" : "text-center items-center lg:text-left lg:items-start";

  return (
    <div className={`mb-12 flex flex-col gap-4 sm:mb-14 ${alignCls} ${className}`}>
      {eyebrow && (
        <span className="badge-neon font-display text-xs tracking-[0.14em] uppercase text-snow sm:text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="leading-none">
        {lines.map((line, i) => (
          <Text3D
            key={line}
            tone={i === 1 && tone2 ? tone2 : tone}
            className={`block text-[length:min(2.6rem,10vw)] sm:text-5xl lg:text-6xl ${i > 0 ? "-mt-1" : ""}`}
          >
            {line}
          </Text3D>
        ))}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-snow-dim sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
