"use client";

import { useEffect, useState } from "react";

// Renders the brand wordmark.
// SSR uses the placeholder SVG (which always exists in /public/logo.svg).
// On mount, the client checks if a real PNG or JPG was dropped into /public —
// if so, swaps to that. This avoids SSR/hydration mismatches AND avoids
// flashing 404s on every page load.
//
// To use your real logo: drop /public/logo.png (or .jpg) into the project.
// No code changes needed.
const PREFERRED = ["/logo.png", "/logo.jpg"] as const;
const FALLBACK = "/logo.svg";

interface LogoProps {
  className?: string;
  alt?: string;
}

export function Logo({ className = "", alt = "Conviction" }: LogoProps) {
  const [src, setSrc] = useState<string>(FALLBACK);

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
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src={src} alt={alt} className={className} />
  );
}
