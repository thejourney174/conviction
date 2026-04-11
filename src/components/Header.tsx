"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#drop", label: "First Drop" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="font-[family-name:var(--font-blackletter)] text-2xl md:text-3xl tracking-wide hover:opacity-80 transition-opacity"
          aria-label="Conviction — home"
        >
          Conviction
        </a>

        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-medium">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-white/60 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-11 h-11 -mr-2 flex flex-col items-center justify-center gap-1.5"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm uppercase tracking-[0.2em] hover:bg-muted transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
