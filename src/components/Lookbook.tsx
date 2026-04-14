import { Reveal } from "./Reveal";

// Placeholder gradient slots — replace with real product photography later.
// Each slot has a numeric label and a category tag so the layout reads as a
// finished editorial even before imagery exists.
//
// Grid layout (md and up): 4 columns, 3 rows. Spans add up cleanly per row.
//   Row 1: [ 01 col-span-2 ][ 02 ][ 03 ]
//   Row 2: [ 04 col-span-2 ][ 05 col-span-2 ]
//   Row 3: [ 06 col-span-4 (full bleed banner) ]
const SLOTS = [
  { id: "01", label: "The King Tee",   tone: "Black / Bone",   span: "md:col-span-2 aspect-[4/3]" },
  { id: "02", label: "Pawn Hoodie",    tone: "Heavyweight",    span: "aspect-[4/5]" },
  { id: "03", label: "Discipline Cap", tone: "Embroidered",    span: "aspect-[4/5]" },
  { id: "04", label: "Manifesto Crew", tone: "Cream / Ink",    span: "md:col-span-2 aspect-[4/3]" },
  { id: "05", label: "Courage Tote",   tone: "Canvas",         span: "md:col-span-2 aspect-[4/3]" },
  { id: "06", label: "Vol. 01 Lookbook", tone: "Editorial",    span: "md:col-span-4 aspect-[4/3] md:aspect-[21/9]" },
];

export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="relative py-28 md:py-40 px-6 md:px-10 bg-muted/40 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
            <div>
              <p className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden><polygon points="4,0 8,4 4,8 0,4"/></svg>
                Vol. 01 / Lookbook
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
                Built for the
                <span className="italic text-foreground/60"> long game.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Heavyweight cotton. Considered cuts. Made in small runs. Every
              piece carries the same question: what are you willing to do for
              what you say you want?
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {SLOTS.map((slot, i) => (
            <Reveal
              key={slot.id}
              delay={i * 80}
              className={`relative group ${slot.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black overflow-hidden ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
                {/* placeholder ornament */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-25 transition-opacity duration-500">
                  <span className="font-[family-name:var(--font-blackletter)] text-[8rem] md:text-[12rem] text-foreground select-none leading-none">
                    C
                  </span>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
              </div>

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <span className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] tracking-[0.3em] text-white/30">
                  {slot.id}
                </span>
                <div className="border-t border-white/10 pt-4">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-foreground leading-tight">
                    {slot.label}
                  </h3>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/40 mt-2">
                    {slot.tone}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Full collection — soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
