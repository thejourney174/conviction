"use client";

import { useEffect, useState } from "react";

// Renders the brand wordmark.
// When a real logo.png or logo.jpg exists in /public, renders it as <img>.
// Otherwise renders an inline SVG placeholder using the page's loaded fonts
// (so the blackletter font actually applies — <img src=".svg"> can't access CSS fonts).
const PREFERRED = ["/logo.png", "/logo.jpg"] as const;

interface LogoProps {
  className?: string;
  alt?: string;
}

export function Logo({ className = "", alt = "Conviction" }: LogoProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const candidate of PREFERRED) {
        try {
          const res = await fetch(candidate, { method: "HEAD" });
          if (cancelled) return;
          if (res.ok) {
            setSrc(candidate);
            return;
          }
        } catch {
          // ignore network errors and try next candidate
        }
      }
      if (!cancelled) setSrc("placeholder");
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Real image found
  if (src && src !== "placeholder") {
    /* eslint-disable-next-line @next/next/no-img-element */
    return <img src={src} alt={alt} className={className} />;
  }

  // Inline SVG placeholder — has access to CSS fonts loaded on the page
  return (
    <svg
      viewBox="0 0 1290 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={alt}
      className={className}
    >
      <defs>
        <linearGradient id="silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#d4d4d8" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="68%"
        textAnchor="middle"
        fontFamily="var(--font-blackletter), UnifrakturMaguntia, serif"
        fontSize="280"
        fill="url(#silver)"
        textLength="1240"
        lengthAdjust="spacingAndGlyphs"
      >
        Conviction
      </text>
    </svg>
  );
}
