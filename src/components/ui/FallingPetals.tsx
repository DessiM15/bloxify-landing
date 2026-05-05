"use client";

const petalColors = ["#FFB7C5", "#FF9EAF", "#FFDDE5"] as const;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generatePetals() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    color: petalColors[i % 3],
    size: Math.round(randomBetween(10, 20)),
    left: `${randomBetween(0, 95)}%`,
    duration: `${randomBetween(10, 18)}s`,
    delay: `${randomBetween(0, 10)}s`,
    opacity: randomBetween(0.2, 0.4),
  }));
}

const petals = generatePetals();

export default function FallingPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            width: petal.size,
            height: petal.size,
            left: petal.left,
            top: -30,
            backgroundColor: petal.color,
            opacity: petal.opacity,
            borderRadius: "50% 0 50% 0",
            animation: `drift-petal ${petal.duration} ${petal.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
