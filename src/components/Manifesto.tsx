import { Reveal } from "./Reveal";

const PILLARS = [
  {
    number: "I",
    title: "Belief",
    body:
      "It begins inside. Before the work, before the witnesses, before the win — there is the quiet, unshakable knowing that you are the one who will see this through.",
  },
  {
    number: "II",
    title: "Courage",
    body:
      "Belief without action is daydreaming. Courage is the bridge — the moment you step out, exposed, willing to be wrong, willing to be seen.",
  },
  {
    number: "III",
    title: "Discipline",
    body:
      "What courage starts, discipline finishes. Showing up on the days nobody is watching. Choosing the harder right over the easier wrong. Again. And again. And again.",
  },
];

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-28 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden><polygon points="4,0 8,4 4,8 0,4"/></svg>
            The Manifesto
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
            We don&apos;t make clothes for spectators.
            <span className="block italic text-foreground/60 mt-2">
              We make armor for the ones who decide.
            </span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10 mt-20 md:mt-28">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="border-t border-border pt-8">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-[family-name:var(--font-playfair)] italic text-2xl text-muted-foreground">
                    {p.number}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                    Pillar {p.number}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6 tracking-tight">
                  {p.title}.
                </h3>
                <p className="text-base leading-relaxed text-foreground/75">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
