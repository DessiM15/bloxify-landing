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
  1: "rgba(226, 75, 74, 0.18)",   // block-red - more visible
  2: "rgba(239, 159, 39, 0.18)",  // block-orange - more visible
  3: "rgba(55, 138, 221, 0.18)",  // block-blue - more visible
};

export default function GameGridBg({ variant = 1 }: GameGridBgProps) {
  const grid = grids[variant];
  const cellSize = 36;
  const gridSize = cellSize * 8;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-right grid, floating and pulsing */}
      <svg
        className="absolute -top-8 -right-8"
        width={gridSize}
        height={gridSize}
        viewBox={`0 0 ${gridSize} ${gridSize}`}
        style={{
          animation: "gridFloat 8s ease-in-out infinite, gridPulse 3s ease-in-out infinite",
        }}
      >
        {/* Grid lines */}
        {Array.from({ length: 9 }, (_, i) => (
          <g key={`lines-${i}`}>
            <line x1={i * cellSize} y1={0} x2={i * cellSize} y2={gridSize} stroke="rgba(15, 18, 32, 0.08)" strokeWidth="1" />
            <line x1={0} y1={i * cellSize} x2={gridSize} y2={i * cellSize} stroke="rgba(15, 18, 32, 0.08)" strokeWidth="1" />
          </g>
        ))}
        {/* Filled cells */}
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
      </svg>

      {/* Bottom-left grid, floating (offset timing) and pulsing */}
      <svg
        className="absolute -bottom-12 -left-12"
        width={gridSize}
        height={gridSize}
        viewBox={`0 0 ${gridSize} ${gridSize}`}
        style={{
          animation: "gridFloat2 10s ease-in-out infinite, gridPulse 4s ease-in-out 1.5s infinite",
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <g key={`lines2-${i}`}>
            <line x1={i * cellSize} y1={0} x2={i * cellSize} y2={gridSize} stroke="rgba(15, 18, 32, 0.06)" strokeWidth="1" />
            <line x1={0} y1={i * cellSize} x2={gridSize} y2={i * cellSize} stroke="rgba(15, 18, 32, 0.06)" strokeWidth="1" />
          </g>
        ))}
        {grids[variant === 1 ? 2 : 1].map((row, y) =>
          row.map((cell, x) =>
            cell > 0 ? (
              <rect
                key={`bl-${x}-${y}`}
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
      </svg>
    </div>
  );
}
