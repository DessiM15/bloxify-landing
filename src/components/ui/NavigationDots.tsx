"use client";

interface NavigationDotsProps {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  /** Kept for older call sites */
  variant?: "dark" | "light";
  className?: string;
  label?: string;
}

export default function NavigationDots({ count, active, onSelect, className = "", label = "slide" }: NavigationDotsProps) {
  return (
    <div className={`flex justify-center gap-2 ${className}`} role="tablist" aria-label={`Choose ${label}`}>
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(i)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${
              isActive
                ? "w-8 bg-pink shadow-[0_0_12px_rgba(255,63,211,0.9)]"
                : "w-2.5 bg-white/25 hover:bg-white/50"
            }`}
            aria-label={`Go to ${label} ${i + 1}`}
          />
        );
      })}
    </div>
  );
}
