import { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "dark" | "light";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  variant = "dark",
}: SectionHeadingProps) {
  const subtitleColor = variant === "light" ? "text-navy/60" : "text-cream-dim";

  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
