import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Check Your Email — CONVICTION",
  description: "One more step to secure your spot on the Conviction first drop list.",
};

const STEPS = [
  {
    number: "01",
    heading: "Check your email",
    body: "We just sent you a confirmation. It should land in your inbox within a minute.",
  },
  {
    number: "02",
    heading: "Hit \"Confirm Your Spot\"",
    body: "Open the email and click the button to lock in your place on the list.",
  },
  {
    number: "03",
    heading: "You're in",
    body: "You'll receive a welcome email and be first to know when the drop lands.",
  },
];

export default function CheckEmailPage() {
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
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

          <p className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.45em] text-foreground/30 mb-8">
            Vol.&nbsp;01&nbsp;──&nbsp;First Drop
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl leading-[0.95] mb-4">
            Almost
            <span className="italic text-foreground/60"> there.</span>
          </h1>

          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-16">
            Complete your registration in 3 steps
          </p>

          {/* Steps */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {STEPS.map((step) => (
              <div key={step.number} className="bg-background px-8 py-10 text-left">
                <p className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.4em] text-foreground/25 mb-4">
                  {step.number}
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl leading-snug mb-3">
                  {step.heading}
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Troubleshooting */}
          <div className="mt-12 w-full border-t border-border pt-10 flex flex-col items-center gap-6">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
              Didn&apos;t get it?
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="/#drop"
                className="inline-flex items-center justify-center min-h-[44px] px-8 bg-foreground text-background text-xs uppercase tracking-[0.25em] font-medium hover:bg-foreground/90 transition-colors"
              >
                Try a different email
              </a>
              <a
                href="/#drop"
                className="inline-flex items-center justify-center min-h-[44px] px-8 bg-transparent border border-foreground/30 text-foreground text-xs uppercase tracking-[0.25em] font-medium hover:border-foreground transition-colors"
              >
                Resend confirmation
              </a>
            </div>
            <p className="text-xs text-foreground/40 tracking-wider">
              Also check your spam or promotions folder.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
