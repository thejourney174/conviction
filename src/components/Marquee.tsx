const WORDS = ["Belief", "Courage", "Discipline", "Conviction"];

export function Marquee() {
  // Duplicate so the loop is seamless
  const items = [...WORDS, ...WORDS, ...WORDS, ...WORDS];

  return (
    <div
      aria-hidden
      className="relative border-y border-border py-6 md:py-8 overflow-hidden"
    >
      <div className="marquee flex whitespace-nowrap will-change-transform">
        {items.map((word, i) => (
          <span
            key={i}
            className="font-[family-name:var(--font-playfair)] italic text-5xl md:text-7xl lg:text-8xl px-8 md:px-12 text-foreground/90"
          >
            {word}
            <span className="inline-block mx-8 md:mx-12 align-middle text-foreground/30">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
