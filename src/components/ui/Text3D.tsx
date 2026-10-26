import type { CSSProperties, ElementType, ReactNode } from "react";

export type Text3DTone = "sun" | "rainbow" | "ice" | "candy" | "lime";

interface Text3DProps {
  children: ReactNode;
  tone?: Text3DTone;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
}

/**
 * Chunky extruded headline text. Renders two stacked layers:
 * a dark "side" layer (outline + extrusion + glow) and a gradient fill on top.
 * The shadow layer is aria-hidden so screen readers read the text once.
 */
export default function Text3D({
  children,
  tone = "sun",
  className = "",
  as: Tag = "span",
  style,
}: Text3DProps) {
  return (
    <Tag className={`t3d font-display fill-${tone} ${className}`} style={style}>
      <span className="t3d__shadow" aria-hidden="true">
        {children}
      </span>
      <span className="t3d__fill">{children}</span>
    </Tag>
  );
}
