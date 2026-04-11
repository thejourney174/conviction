const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-background px-6 md:px-10 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:items-end justify-between">
          <div>
            <a
              href="#top"
              className="font-[family-name:var(--font-blackletter)] text-4xl md:text-5xl tracking-wide block"
              aria-label="Conviction"
            >
              Conviction
            </a>
            <p className="mt-4 max-w-sm text-sm text-foreground/70 italic font-[family-name:var(--font-playfair)] leading-relaxed">
              The relentless belief in yourself, the courage to act, the
              discipline to see it through.
            </p>
          </div>

          <nav aria-label="Social">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em]">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="hover:text-foreground/60 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-4 md:items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Conviction. All rights reserved.</p>
          <p className="font-[family-name:var(--font-jetbrains)] tracking-wider">
            ✦ Vol. 01
          </p>
        </div>
      </div>
    </footer>
  );
}
