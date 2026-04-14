import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* ── Atmospheric layers ───────────────────────────────── */}

      {/* Original center glow — kept */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_60%)]"
      />

      {/* Arena uplight — harsh light from the floor, like a gym spotlight */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[75%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,255,255,0.05)_0%,transparent_55%)]"
      />

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      />

      {/* ── Ghost backdrop ───────────────────────────────────── */}
      {/* Oversized stroke-only wordmark sits behind everything — fills dead
          space and reinforces brand identity without competing with the logo */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-[family-name:var(--font-blackletter)] text-[32vw] leading-none whitespace-nowrap"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(250,250,249,0.064)",
          }}
        >
          Conviction
        </span>
      </div>

      {/* ── Viewport corner brackets ─────────────────────────── */}
      {/* Thin L-shaped marks at the viewport corners — "limited edition drop"
          framing used by Represent, Palace, and other premium apparel brands */}
      <div
        aria-hidden
        className="absolute top-6 left-6 w-10 h-10 border-l border-t border-foreground/[0.11] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-6 right-6 w-10 h-10 border-r border-t border-foreground/[0.11] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-20 left-6 w-10 h-10 border-l border-b border-foreground/[0.11] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-20 right-6 w-10 h-10 border-r border-b border-foreground/[0.11] pointer-events-none"
      />

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">

        {/* Edition kicker — hierarchy above the mark, signals this is a
            deliberate, numbered release rather than a generic launch page */}
        <p className="mb-6 md:mb-8 font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.45em] text-foreground/30">
          Vol.&nbsp;01&nbsp;──&nbsp;Chapter&nbsp;I
        </p>

        {/* Logo block */}
        <div className="relative w-full max-w-[900px] mx-auto aspect-[1290/500] flex items-center justify-center">
          <Logo className="relative z-10 w-full h-full object-contain" />
        </div>

        {/* Self-drawing rule — animates outward from center on load,
            grounds the wordmark and makes it feel stamped / official */}
        <div className="rule-draw mx-auto mt-2" aria-hidden />

        {/* Tagline */}
        <p className="mt-8 md:mt-10 max-w-xl font-[family-name:var(--font-playfair)] text-lg md:text-xl leading-relaxed text-foreground/85">
          The relentless belief in yourself,
          <br />
          the courage to act,
          <br />
          the discipline to see it through.
        </p>

        {/* CTA */}
        <div className="mt-10 md:mt-12 flex flex-col items-center gap-5">
          <a
            href="#drop"
            className="group inline-flex items-center justify-center min-h-[52px] px-10 bg-transparent border border-foreground/40 text-foreground text-xs uppercase tracking-[0.25em] font-medium hover:border-foreground hover:bg-foreground/10 transition-all duration-300"
          >
            Join the First Drop
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="square" />
            </svg>
          </a>
          <a
            href="#manifesto"
            className="text-xs uppercase tracking-[0.25em] text-foreground/50 hover:text-foreground/90 transition-colors border-b border-foreground/20 hover:border-foreground/60 pb-px"
          >
            Read the Manifesto
          </a>
        </div>
      </div>

      {/* Scroll cue — line only on mobile, label + line on desktop */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="hidden md:block">Scroll</span>
        <span className="block w-px h-8 md:h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
