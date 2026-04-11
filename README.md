# Conviction

Marketing site for **Conviction** — premium streetwear.

> The relentless belief in yourself, the courage to act, the discipline to see it through.

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4**
- **TypeScript**
- **Google Fonts**: Playfair Display (display), Inter (UI), UnifrakturMaguntia (blackletter wordmark), JetBrains Mono (labels)
- Hosted on **Netlify**

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Outputs static site to `out/` (Netlify deploys this folder).

## Replacing the placeholder logo

The hero references `/public/logo.svg` — a placeholder rendering of "Conviction" + chess king. To swap in your real logo:

1. Drop your file into `public/` (e.g. `public/logo.svg` or `public/logo.png`).
2. If you use a different filename, update the `<img src="/logo.svg" />` reference inside `src/components/Hero.tsx` and `src/components/Header.tsx` (the wordmark in the navbar uses CSS text — leave that or swap it for an `<img>` too).

> **Tip:** PNG with transparent background works fine. SVG is best for sharpness on every device. Keep the original aspect ratio close to 1290 × 900 to avoid layout shift.

## Sections

| Section     | File                                  |
| ----------- | ------------------------------------- |
| Header      | `src/components/Header.tsx`           |
| Hero        | `src/components/Hero.tsx`             |
| Marquee     | `src/components/Marquee.tsx`          |
| Manifesto   | `src/components/Manifesto.tsx`        |
| Lookbook    | `src/components/Lookbook.tsx` _(placeholder slots)_ |
| Drop / Email signup | `src/components/Drop.tsx` _(no backend yet)_ |
| Footer      | `src/components/Footer.tsx`           |

## Wiring up the email form

`src/components/Drop.tsx` currently fakes the submission. Hook it to a real provider:

- **Buttondown** / **ConvertKit** / **Mailchimp** — use their HTML form action
- **Resend** + Netlify Function — POST to `/.netlify/functions/subscribe`
- **Netlify Forms** — add `data-netlify="true"` and `name="signup"` to the `<form>`

Replace the `setTimeout` inside `onSubmit` with a real `fetch`.

## Replacing lookbook placeholders

`src/components/Lookbook.tsx` renders 5 placeholder gradient slots labeled with item names. Swap the gradient `<div>` for an `<img>` (or `next/image` — but you'd need to disable static export for the optimizer) once you have product photography.

## Deploying to Netlify

This repo includes `netlify.toml` already configured.

**Option A — drag and drop**

```bash
npm run build
```

Then drop the `out/` folder onto https://app.netlify.com/drop.

**Option B — connect a Git repo**

1. Push this folder to GitHub/GitLab.
2. In Netlify: **Add new site → Import an existing project → pick the repo**.
3. Build command and publish directory are auto-detected from `netlify.toml` (`npm run build` → `out`).
4. Click **Deploy**.

## License

© Conviction. All rights reserved.
