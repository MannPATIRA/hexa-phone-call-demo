"use client";

import { cn } from "@/lib/utils";

interface HexaLogoProps {
  size?: number;
  showText?: boolean;
  textClassName?: string;
}

export default function HexaLogo({ size = 32, showText = false, textClassName = "" }: HexaLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-lg bg-primary"
        style={{
          width: size,
          height: size,
        }}
      >
        <svg
          width={size * 0.55}
          height={size * 0.55}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" />
        </svg>
      </div>
      {showText && (
        <span className={cn("font-semibold tracking-tight", textClassName)}>Hexa</span>
      )}
    </div>
  );
}
