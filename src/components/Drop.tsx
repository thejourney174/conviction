"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function Drop() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // No backend yet — simulate. Replace with real handler (Resend, Buttondown, etc.)
    setTimeout(() => setStatus("success"), 700);
  }

  return (
    <section
      id="drop"
      className="relative py-28 md:py-40 px-6 md:px-10 bg-background overflow-hidden"
    >
      {/* Big background type */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-[family-name:var(--font-blackletter)] text-[20vw] md:text-[14vw] leading-none text-foreground/[0.04] whitespace-nowrap">
          Conviction
        </span>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            ✦ The First Drop
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
            Be there
            <span className="italic text-foreground/60"> when it lands.</span>
          </h2>
          <p className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl mx-auto leading-relaxed">
            Limited quantities. Members get first access, behind-the-scenes,
            and the founder&apos;s notes from the road.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="mt-12 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            noValidate
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              disabled={status === "submitting" || status === "success"}
              aria-invalid={status === "error"}
              className="flex-1 min-h-[48px] px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="min-h-[48px] px-8 bg-foreground text-background text-xs uppercase tracking-[0.25em] font-medium hover:bg-foreground/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting"
                ? "Joining…"
                : status === "success"
                ? "You're in"
                : "Notify Me"}
            </button>
          </form>

          <div className="mt-4 min-h-[1.25rem]" aria-live="polite">
            {status === "error" && (
              <p className="text-xs text-red-400">
                Enter a valid email address.
              </p>
            )}
            {status === "success" && (
              <p className="text-xs text-foreground/70">
                Welcome. We&apos;ll be in touch when the first drop is ready.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
