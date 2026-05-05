"use client";

interface NavigationDotsProps {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  variant?: "dark" | "light";
}

export default function NavigationDots({ count, active, onSelect, variant = "dark" }: NavigationDotsProps) {
  const inactiveColor = variant === "light" ? "bg-navy/20 hover:bg-navy/40" : "bg-cream/30 hover:bg-cream/50";

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
            i === active
              ? "bg-coral w-6"
              : inactiveColor
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
