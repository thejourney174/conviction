"use client";

import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function DropPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[100svh] flex items-center justify-center py-28 md:py-40 px-6 md:px-10 bg-background overflow-hidden">

          {/* Ghost backdrop wordmark */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          >
            <span
              className="font-[family-name:var(--font-blackletter)] text-[20vw] md:text-[14vw] leading-none whitespace-nowrap"
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
          <div className="relative z-10 max-w-3xl mx-auto text-center w-full">

            <Reveal>
              <p className="flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
                  <polygon points="4,0 8,4 4,8 0,4" />
                </svg>
                The First Drop
              </p>

              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
                Be there
                <span className="italic text-foreground/60"> when it lands.</span>
              </h1>

              <p className="text-base md:text-lg text-foreground/75 max-w-xl mx-auto leading-relaxed mb-4">
                Limited quantities. Members get first access, behind-the-scenes,
                and the founder&apos;s notes from the road.
              </p>

              <p className="font-[family-name:var(--font-jetbrains)] text-[0.6rem] uppercase tracking-[0.4em] text-foreground/30 mb-12">
                Vol.&nbsp;01&nbsp;──&nbsp;Dropping Soon
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="max-w-md mx-auto">
                <form
                  action="https://app.kit.com/forms/9338887/subscriptions"
                  className="seva-form formkit-form"
                  method="post"
                  data-sv-form="9338887"
                  data-uid="e01ff4574d"
                  data-format="inline"
                  data-version="5"
                  min-width="400 500 600 700 800"
                >
                  <div data-style="clean">
                    <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />
                    <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields">
                      <div className="formkit-field">
                        <input
                          className="formkit-input w-full min-h-[48px] px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                          aria-label="First Name"
                          name="fields[first_name]"
                          required
                          placeholder="First Name"
                          type="text"
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input w-full min-h-[48px] px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                          name="email_address"
                          aria-label="Email Address"
                          placeholder="Email Address"
                          required
                          type="email"
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input w-full min-h-[48px] px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                          aria-label="Phone"
                          name="fields[phone]"
                          required
                          placeholder="Phone"
                          type="text"
                        />
                      </div>
                      <button data-element="submit" className="formkit-submit w-full min-h-[48px] px-8 bg-foreground text-background text-xs uppercase tracking-[0.25em] font-medium hover:bg-foreground/90 transition-colors cursor-pointer">
                        <div className="formkit-spinner">
                          <div /><div /><div />
                        </div>
                        <span>Notify Me</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-10 text-xs text-foreground/30 tracking-wider">
                No spam. No noise. Just the drop.
              </p>
            </Reveal>

          </div>
        </section>
      </main>
      <Footer />

      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />
    </>
  );
}
