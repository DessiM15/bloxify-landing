"use client";

const colors = ["#E24B4A", "#EF9F27", "#378ADD"] as const;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generateBlocks() {
  return Array.from({ length: 14 }, (_, i) => ({
    id: i,
    color: colors[i % 3],
    size: Math.round(randomBetween(16, 44)),
    left: `${randomBetween(0, 95)}%`,
    duration: `${randomBetween(8, 16)}s`,
    delay: `${randomBetween(0, 12)}s`,
    opacity: randomBetween(0.4, 0.7),
  }));
}

const blocks = generateBlocks();

export default function FallingBlocks() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute rounded-lg"
          style={{
            width: block.size,
            height: block.size,
            left: block.left,
            top: -60,
            backgroundColor: block.color,
            opacity: block.opacity,
            boxShadow: `0 0 15px ${block.color}30, inset 0 -3px 0 rgba(0,0,0,0.2)`,
            animation: `fall ${block.duration} ${block.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
