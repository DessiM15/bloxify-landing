"use client";

interface GameGridBgProps {
  variant?: 1 | 2 | 3;
}

// Each variant shows a different "state" of a game board
const grids: Record<number, number[][]> = {
  1: [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,0,0,0,2,2,0],
    [0,3,0,0,2,2,0,0],
    [1,1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2],
  ],
  2: [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,3,3,0,0,0,0],
    [0,0,0,3,0,1,0,0],
    [0,2,0,0,1,1,0,0],
    [3,3,3,3,3,3,3,3],
    [1,1,1,1,1,1,1,1],
  ],
  3: [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0],
    [0,0,0,2,2,0,0,0],
    [0,1,0,0,0,0,3,0],
    [1,1,0,0,0,3,3,0],
    [2,2,2,2,2,2,2,2],
    [3,3,3,3,3,3,3,3],
  ],
};

const colors: Record<number, string> = {
  1: "rgba(226, 75, 74, 0.18)",
  2: "rgba(239, 159, 39, 0.18)",
  3: "rgba(55, 138, 221, 0.18)",
};

// Scattered grid positions across the section
const gridPlacements = [
  { top: "-5%",  left: "-3%",  rotation: 6,   anim: "gridDrift1", pulse: "gridPulse", pulseDur: "3s",  delay: "0s" },
  { top: "-8%",  right: "-3%", rotation: -4,  anim: "gridDrift2", pulse: "gridPulse", pulseDur: "3.5s", delay: "0.5s" },
  { top: "30%",  left: "15%",  rotation: 12,  anim: "gridDrift3", pulse: "gridPulse", pulseDur: "4s",  delay: "1s" },
  { top: "25%",  right: "10%", rotation: -8,  anim: "gridDrift4", pulse: "gridPulse", pulseDur: "3s",  delay: "1.5s" },
  { top: "60%",  left: "5%",   rotation: -10, anim: "gridDrift2", pulse: "gridPulse", pulseDur: "3.5s", delay: "0.8s" },
  { top: "55%",  right: "2%",  rotation: 8,   anim: "gridDrift1", pulse: "gridPulse", pulseDur: "4s",  delay: "0.3s" },
  { top: "85%",  left: "25%",  rotation: -6,  anim: "gridDrift4", pulse: "gridPulse", pulseDur: "3s",  delay: "1.2s" },
  { top: "80%",  right: "20%", rotation: 10,  anim: "gridDrift3", pulse: "gridPulse", pulseDur: "3.5s", delay: "0.6s" },
];

function GridSvg({ grid, cellSize, gridSize, lineOpacity }: { grid: number[][]; cellSize: number; gridSize: number; lineOpacity: string }) {
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => (
        <g key={`l-${i}`}>
          <line x1={i * cellSize} y1={0} x2={i * cellSize} y2={gridSize} stroke={`rgba(15, 18, 32, ${lineOpacity})`} strokeWidth="1" />
          <line x1={0} y1={i * cellSize} x2={gridSize} y2={i * cellSize} stroke={`rgba(15, 18, 32, ${lineOpacity})`} strokeWidth="1" />
        </g>
      ))}
      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell > 0 ? (
            <rect
              key={`${x}-${y}`}
              x={x * cellSize + 1}
              y={y * cellSize + 1}
              width={cellSize - 2}
              height={cellSize - 2}
              rx={4}
              fill={colors[cell]}
            />
          ) : null
        )
      )}
    </>
  );
}

export default function GameGridBg({ variant = 1 }: GameGridBgProps) {
  const cellSize = 36;
  const gridSize = cellSize * 8;
  const allGrids = [grids[1], grids[2], grids[3]];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {gridPlacements.map((p, i) => {
        const grid = allGrids[i % 3];
        const pos: React.CSSProperties = {
          position: "absolute",
          top: p.top,
          ...(p.left ? { left: p.left } : {}),
          ...(p.right ? { right: p.right } : {}),
          animation: `${p.anim} ${10 + i * 2}s ease-in-out infinite, ${p.pulse} ${p.pulseDur} ease-in-out ${p.delay} infinite`,
        };
        return (
          <svg
            key={i}
            width={gridSize}
            height={gridSize}
            viewBox={`0 0 ${gridSize} ${gridSize}`}
            style={pos}
          >
            <GridSvg grid={grid} cellSize={cellSize} gridSize={gridSize} lineOpacity={i < 4 ? "0.07" : "0.05"} />
          </svg>
        );
      })}
    </div>
  );
}
