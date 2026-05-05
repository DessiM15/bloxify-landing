"use client";

interface GameGridBgProps {
  variant?: 1 | 2 | 3;
}

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
};

const colors: Record<number, string> = {
  1: "rgba(226, 75, 74, 0.18)",
  2: "rgba(239, 159, 39, 0.18)",
  3: "rgba(55, 138, 221, 0.18)",
};

export default function GameGridBg({ variant = 1 }: GameGridBgProps) {
  const cellSize = 36;
  const gridSize = cellSize * 8;
  const grid1 = grids[1];
  const grid2 = grids[variant === 1 ? 2 : 1];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid 1 — wanders across the full section */}
      <svg
        className="absolute"
        width={gridSize}
        height={gridSize}
        viewBox={`0 0 ${gridSize} ${gridSize}`}
        style={{
          top: "10%",
          left: "5%",
          animation: "gridWander1 80s ease-in-out infinite, gridPulse 6s ease-in-out infinite",
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <g key={`l1-${i}`}>
            <line x1={i * cellSize} y1={0} x2={i * cellSize} y2={gridSize} stroke="rgba(15, 18, 32, 0.08)" strokeWidth="1" />
            <line x1={0} y1={i * cellSize} x2={gridSize} y2={i * cellSize} stroke="rgba(15, 18, 32, 0.08)" strokeWidth="1" />
          </g>
        ))}
        {grid1.map((row, y) =>
          row.map((cell, x) =>
            cell > 0 ? (
              <rect key={`a-${x}-${y}`} x={x * cellSize + 1} y={y * cellSize + 1} width={cellSize - 2} height={cellSize - 2} rx={4} fill={colors[cell]} />
            ) : null
          )
        )}
      </svg>

      {/* Grid 2 — wanders independently on its own path */}
      <svg
        className="absolute"
        width={gridSize}
        height={gridSize}
        viewBox={`0 0 ${gridSize} ${gridSize}`}
        style={{
          top: "60%",
          right: "5%",
          animation: "gridWander2 90s ease-in-out infinite, gridPulse 8s ease-in-out 3s infinite",
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <g key={`l2-${i}`}>
            <line x1={i * cellSize} y1={0} x2={i * cellSize} y2={gridSize} stroke="rgba(15, 18, 32, 0.06)" strokeWidth="1" />
            <line x1={0} y1={i * cellSize} x2={gridSize} y2={i * cellSize} stroke="rgba(15, 18, 32, 0.06)" strokeWidth="1" />
          </g>
        ))}
        {grid2.map((row, y) =>
          row.map((cell, x) =>
            cell > 0 ? (
              <rect key={`b-${x}-${y}`} x={x * cellSize + 1} y={y * cellSize + 1} width={cellSize - 2} height={cellSize - 2} rx={4} fill={colors[cell]} />
            ) : null
          )
        )}
      </svg>
    </div>
  );
}
