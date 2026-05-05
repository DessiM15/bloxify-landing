"use client";

interface NavigationDotsProps {
  count: number;
  active: number;
  onSelect: (index: number) => void;
}

export default function NavigationDots({ count, active, onSelect }: NavigationDotsProps) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
            i === active
              ? "bg-coral w-6"
              : "bg-cream/30 hover:bg-cream/50"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
