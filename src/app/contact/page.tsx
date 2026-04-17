import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact — CONVICTION",
  description: "Get in touch with Conviction.",
};

export default function ContactPage() {
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
        <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full">

          <p className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.45em] text-foreground/30 mb-8">
            Get in touch
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl leading-[0.95] mb-6">
            Say
            <span className="italic text-foreground/60"> something.</span>
          </h1>

          <p className="text-sm text-foreground/60 leading-relaxed mb-16 max-w-sm">
            For wholesale inquiries, press, collaborations, or anything else —
            reach out directly.
          </p>

          <div className="w-full border-t border-border pt-12 flex flex-col items-center gap-8">

            <a
              href="mailto:team@cnvctn.co"
              className="group flex flex-col items-center gap-2"
            >
              <span className="text-[0.6rem] uppercase tracking-[0.35em] text-foreground/30 font-[family-name:var(--font-jetbrains)]">
                Email
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl group-hover:text-foreground/70 transition-colors duration-200">
                team@cnvctn.co
              </span>
            </a>

            <div className="flex items-center gap-8 text-xs uppercase tracking-[0.25em]">
              <a
                href="https://www.instagram.com/cnvctn.co"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-[width] after:duration-300 hover:after:w-full"
              >
                Instagram
              </a>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
