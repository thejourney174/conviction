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
          <form
            action="https://ricoxjourney.us17.list-manage.com/subscribe/post?u=e7867d133d3dbbd6fec873e83&amp;id=aca39b0e15&amp;f_id=00fac3e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate mt-12 max-w-md mx-auto"
            target="_blank"
            noValidate
          >
            <div className="flex flex-col gap-3">

              {/* Email */}
              <label htmlFor="mce-EMAIL" className="sr-only">Email Address</label>
              <input
                type="email"
                name="EMAIL"
                className="required email w-full min-h-[48px] px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                id="mce-EMAIL"
                required
                placeholder="your@email.com"
              />

              {/* Phone */}
              <label htmlFor="mce-PHONE" className="sr-only">Phone Number</label>
              <input
                type="tel"
                name="PHONE"
                className="REQ_CSS w-full min-h-[48px] px-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                id="mce-PHONE"
                required
                placeholder="+1 000 000 0000"
              />

              {/* Mailchimp validation response containers */}
              <div id="mce-responses" className="min-h-[1.25rem]" aria-live="polite">
                <div
                  id="mce-error-response"
                  className="response text-xs text-red-400"
                  style={{ display: "none" }}
                />
                <div
                  id="mce-success-response"
                  className="response text-xs text-foreground/70"
                  style={{ display: "none" }}
                />
              </div>

              {/* Anti-bot honeypot — must stay hidden */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                <input
                  type="text"
                  name="b_e7867d133d3dbbd6fec873e83_aca39b0e15"
                  tabIndex={-1}
                  defaultValue=""
                  readOnly
                />
              </div>

              {/* Submit */}
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                value="Notify Me"
                className="w-full min-h-[48px] px-8 bg-foreground text-background text-xs uppercase tracking-[0.25em] font-medium hover:bg-foreground/90 transition-colors cursor-pointer"
              />

            </div>
          </form>
        </Reveal>
      </div>

      {/* Mailchimp validation — bundles its own jQuery, loads after hydration */}
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="afterInteractive"
        onLoad={() => {
          const jq = (window as unknown as Record<string, unknown>).jQuery as ((...args: unknown[]) => unknown) & { noConflict: (removeAll?: boolean) => unknown };
          if (typeof jq !== "undefined") {
            (function ($: unknown) {
              void $;
              (window as unknown as Record<string, unknown>).fnames = ["EMAIL", "", "FNAME", "LNAME", "", "PHONE"];
              (window as unknown as Record<string, unknown>).ftypes = ["email", "", "text", "text", "", "phone"];
            })(jq);
            (window as unknown as Record<string, unknown>).$mcj = jq.noConflict(true);
          }
        }}
      />
    </section>
  );
}
