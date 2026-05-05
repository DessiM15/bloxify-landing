"use client";

interface FloatingBlockProps {
  color: "red" | "orange" | "blue";
  size?: number;
  className?: string;
  animation?: "float" | "float-slow" | "float-delayed";
}

const colorMap = {
  red: "#E24B4A",
  orange: "#EF9F27",
  blue: "#378ADD",
};

export default function FloatingBlock({
  color,
  size = 40,
  className = "",
  animation = "float",
}: FloatingBlockProps) {
  const animationStyle = {
    animation: `${animation} ${animation === "float" ? "6s" : animation === "float-slow" ? "8s" : "10s"} ease-in-out infinite`,
  };

  return (
    <div
      className={`absolute rounded-lg opacity-80 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: colorMap[color],
        boxShadow: `0 0 20px ${colorMap[color]}40, inset 0 -3px 0 rgba(0,0,0,0.2)`,
        ...animationStyle,
      }}
    />
  );
}
