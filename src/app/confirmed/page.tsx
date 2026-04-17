import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";

export const metadata = {
  title: "You're In — CONVICTION",
  description: "You've confirmed your spot on the Conviction first drop list.",
};

export default function ConfirmedPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[100svh] px-6 bg-background overflow-hidden relative">

        {/* Ghost backdrop wordmark */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span
            className="font-[family-name:var(--font-blackletter)] text-[32vw] leading-none whitespace-nowrap"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(250,250,249,0.04)",
            }}
          >
            Conviction
          </span>
        </div>

        {/* Corner brackets */}
        <div aria-hidden className="absolute top-6 left-6 w-10 h-10 border-l border-t border-foreground/[0.11] pointer-events-none" />
        <div aria-hidden className="absolute top-6 right-6 w-10 h-10 border-r border-t border-foreground/[0.11] pointer-events-none" />
        <div aria-hidden className="absolute bottom-6 left-6 w-10 h-10 border-l border-b border-foreground/[0.11] pointer-events-none" />
        <div aria-hidden className="absolute bottom-6 right-6 w-10 h-10 border-r border-b border-foreground/[0.11] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-xl">

          <p className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.45em] text-foreground/30 mb-8">
            Vol.&nbsp;01&nbsp;──&nbsp;First Drop
          </p>

          <div className="w-full max-w-[320px] mx-auto mb-8 opacity-90">
            <Logo className="w-full h-full object-contain" />
          </div>

          <div className="rule-draw mx-auto mb-10" aria-hidden />

          <div className="flex items-center justify-center gap-2 mb-6 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
              <polygon points="4,0 8,4 4,8 0,4" />
            </svg>
            You&apos;re confirmed
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl leading-[0.95] mb-8">
            You know what
            <span className="italic text-foreground/60"> you want.</span>
          </h1>

          <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-12 font-[family-name:var(--font-playfair)] italic">
            You&apos;re on the list. When the first drop lands,<br className="hidden md:block" /> you&apos;ll be the first to know.
          </p>

          <a
            href="/"
            className="group inline-flex items-center justify-center min-h-[48px] px-10 bg-transparent border border-foreground/40 text-foreground text-xs uppercase tracking-[0.25em] font-medium hover:border-foreground hover:bg-foreground/10 transition-all duration-300"
          >
            Back to Conviction
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
        </div>
      </main>
      <Footer />
    </>
  );
}
