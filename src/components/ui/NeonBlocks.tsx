"use client";

import { useEffect, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const SHAPES = {
  single: [[1]],
  square: [
    [1, 1],
    [1, 1],
  ],
  l: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  line: [[1, 1, 1]],
  t: [
    [1, 1, 1],
    [0, 1, 0],
  ],
  z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
} as const;

const PALETTES = {
  rainbow: ["#FF3FD3", "#FFD63A", "#35E8FF", "#7DFF55", "#FF8F2E", "#D23BFF"],
  pink: ["#FF3FD3"],
  cyan: ["#35E8FF"],
  yellow: ["#FFD63A"],
  lime: ["#7DFF55"],
  orange: ["#FF8F2E"],
  violet: ["#D23BFF"],
  blue: ["#3D5AFE"],
} as const;

export type BlockShape = keyof typeof SHAPES;
export type BlockPalette = keyof typeof PALETTES;

export interface BlockSpec {
  shape: BlockShape;
  palette: BlockPalette;
  /** CSS left / top (percent strings work best) */
  x: string;
  y: string;
  /** cell size in px */
  cell: number;
  rot?: number;
  /** 0 (far, slow) → 1 (near, fast) */
  depth?: number;
  /** 0–1: how far through its fall the piece is when the page loads */
  delay?: number;
  hide?: "mobile";
}

interface GlossyBlockProps {
  shape: BlockShape;
  palette: BlockPalette;
  cell: number;
  className?: string;
  style?: CSSProperties;
}

/** A glossy rainbow puzzle piece built from CSS cells. Purely decorative. */
export function GlossyBlock({ shape, palette, cell, className = "", style }: GlossyBlockProps) {
  const grid = SHAPES[shape];
  const colors = PALETTES[palette];
  let colorIndex = 0;

  return (
    <div
      className={`grid pointer-events-none ${className}`}
      style={{
        gridTemplateColumns: `repeat(${grid[0].length}, ${cell}px)`,
        gap: Math.max(2, Math.round(cell * 0.08)),
        ...style,
      }}
      aria-hidden="true"
    >
      {grid.map((row, y) =>
        row.map((on, x) => {
          if (!on) return <div key={`${x}-${y}`} style={{ width: cell, height: cell }} />;
          const c = colors[colorIndex++ % colors.length];
          return (
            <div
              key={`${x}-${y}`}
              className="block-cell relative"
              style={{ width: cell, height: cell, "--c": c } as CSSProperties}
            />
          );
        })
      )}
    </div>
  );
}

interface ParallaxBlockProps {
  spec: BlockSpec;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  reduceMotion: boolean;
}

function ParallaxBlock({ spec, mx, my, reduceMotion }: ParallaxBlockProps) {
  const depth = spec.depth ?? 0.5;
  const { scrollY } = useScroll();
  const scrollShift = useTransform(scrollY, [0, 1200], [0, -320 * depth]);
  const pointerX = useSpring(useTransform(mx, (v) => v * 70 * depth), { stiffness: 50, damping: 18 });
  const pointerY = useSpring(useTransform(my, (v) => v * 50 * depth), { stiffness: 50, damping: 18 });
  const y = useTransform([scrollShift, pointerY], ([a, b]) => (a as number) + (b as number));

  // Near pieces fall faster than far ones. A negative delay starts each piece mid-fall so the
  // sky is already populated on load instead of everything dropping in from the top at once.
  const fallDur = 11 + (1 - depth) * 13;
  const fallDelay = -(spec.delay ?? 0) * fallDur;

  return (
    <motion.div
      className={`absolute ${spec.hide === "mobile" ? "hidden md:block" : ""}`}
      style={{ left: spec.x, top: reduceMotion ? spec.y : 0, x: pointerX, y }}
    >
      <div
        style={
          {
            "--rot": `${spec.rot ?? 0}deg`,
            transform: `rotate(${spec.rot ?? 0}deg)`,
            animation: reduceMotion
              ? undefined
              : `fall-block ${fallDur.toFixed(1)}s linear ${fallDelay.toFixed(2)}s infinite`,
            opacity: 0.55 + depth * 0.45,
            filter: depth < 0.45 ? `blur(${(0.45 - depth) * 3}px)` : undefined,
          } as CSSProperties
        }
      >
        <GlossyBlock shape={spec.shape} palette={spec.palette} cell={spec.cell} />
      </div>
    </motion.div>
  );
}

interface NeonBlocksProps {
  blocks: BlockSpec[];
  className?: string;
}

/** A field of falling glossy blocks with scroll + pointer parallax. */
export default function NeonBlocks({ blocks, className = "" }: NeonBlocksProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduceMotion]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {blocks.map((b, i) => (
        <ParallaxBlock key={i} spec={b} mx={mx} my={my} reduceMotion={!!reduceMotion} />
      ))}
    </div>
  );
}
