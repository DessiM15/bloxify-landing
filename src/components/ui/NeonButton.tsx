import Link from "next/link";
import type { ReactNode } from "react";

export function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.4 12l2.298-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
    </svg>
  );
}

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  tone?: "pink" | "lime" | "cyan";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function NeonButton({
  href,
  children,
  tone = "pink",
  size = "md",
  external,
  className = "",
  icon,
  onClick,
}: NeonButtonProps) {
  const cls = [
    "btn-neon",
    tone !== "pink" ? `btn-neon--${tone}` : "",
    size === "sm" ? "btn-neon--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {icon}
      {children}
    </Link>
  );
}
