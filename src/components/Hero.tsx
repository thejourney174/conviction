import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background gradient + radial vignette */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Logo block */}
        <div className="relative w-full max-w-[900px] mx-auto aspect-[1290/500] flex items-center justify-center">
          <Logo className="relative z-10 w-full h-full object-contain" />
        </div>

        {/* Tagline */}
        <p className="mt-6 md:mt-8 max-w-xl font-[family-name:var(--font-playfair)] text-lg md:text-xl leading-relaxed text-foreground/85">
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
            className="group inline-flex items-center justify-center min-h-[52px] px-10 bg-foreground text-background text-xs uppercase tracking-[0.25em] font-medium hover:bg-foreground/90 transition-colors"
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

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        <span>Scroll</span>
        <span className="block w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
