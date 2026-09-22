# Wildly Wealthy Woman LIVE

Site for [wildlywealthywomanlive.com](https://wildlywealthywomanlive.com).

Next.js. No database, no auth, **no Firebase**. Images and video go in `public/media`.

## Run locally

```bash
npm install
npm run dev
```

Dev server: port **43127**.

| Script | What it does |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

Copy `.env.example` to `.env.local` if you want a local Stripe Payment Link. Leave `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` empty until you have a ticket URL.

## Pages

- `/` — pre-sale homepage
- `/sponsors` — sponsor pitch deck
- `/events`
- `/connect`
- `POST /api/waitlist` — email validation

## Images and video (not Firebase)

Drop files into `public/media` using the **exact filenames** in [`public/media/README.md`](public/media/README.md). Until a file exists, a styled placeholder holds the layout. Firebase is unused.

## Go live

Click-by-click for someone who already has GitHub + Vercel: **[`CONNECT.md`](CONNECT.md)**.

Stripe later: Payment Links → paste the URL into Vercel env `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` → Redeploy. The homepage ticket spot becomes a button.
