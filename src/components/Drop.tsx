"use client";

import Script from "next/script";
import { Reveal } from "./Reveal";

export function Drop() {
  return (
    <section
      id="drop"
      className="relative py-28 md:py-40 px-6 md:px-10 bg-background overflow-hidden scroll-mt-16 md:scroll-mt-20"
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
          <p className="flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
              <polygon points="4,0 8,4 4,8 0,4" />
            </svg>
            The First Drop
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
          <div className="mt-12 max-w-md mx-auto">
            <form
              action="https://app.kit.com/forms/9338887/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form="9338887"
              data-uid="e01ff4574d"
              data-format="inline"
              data-version="5"
              data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;redirect&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;https://cnvctn.co/check-email&quot;}}}"
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
      </div>

      {/* Kit embed script — loads after hydration */}
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
