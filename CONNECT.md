# Go live (GitHub + Vercel)

The site code is already on GitHub:

https://github.com/westrosemedia/wildly-wealthy-woman-live

This project is **not** your other live site. In Vercel, **Import** that GitHub repo. Do **not** create an empty Vercel project first.

Firebase is **not** used. Images and video go in `public/media` (see `public/media/README.md`).

---

## 1. Import the GitHub repo on Vercel

1. Open [vercel.com/new](https://vercel.com/new) while logged into the same Vercel account as your other site.
2. If GitHub is not connected yet: **Adjust GitHub App Permissions** (or **Connect GitHub**) and allow `westrosemedia/wildly-wealthy-woman-live`.
3. **Import** `westrosemedia/wildly-wealthy-woman-live`.
4. Leave the defaults: Framework **Next.js**, Build Command `next build`.
5. Click **Deploy**.
6. Wait until the production URL is green (`*.vercel.app`).

No environment variables are required yet.

---

## 2. Attach the domain in Vercel

1. Open that project → **Settings** → **Domains**.
2. Add `wildlywealthywomanlive.com`.
3. Add `www.wildlywealthywomanlive.com`.

---

## 3. DNS at your registrar

At whatever registrar holds `wildlywealthywomanlive.com`:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Wait until Vercel → Domains shows HTTPS **Valid**.

---

## 4. Later: Stripe ticket button

When you have a ticket price:

1. Stripe Dashboard → **Payment Links** → create a link.
2. Copy the Payment Link URL.
3. Vercel → this project → **Settings** → **Environment Variables**.
4. Add `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` = that URL (Production).
5. **Redeploy** the production deployment.

Once set, a **Tickets** button appears on the homepage and opens Stripe in a new tab. Until then, the waitlist is the CTA. No Stripe SDK. Firebase is still unused.
