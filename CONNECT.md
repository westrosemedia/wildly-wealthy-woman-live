# Go live (GitHub + Vercel)

You already have GitHub and Vercel from another site. This project is **not** that site. Create a **new** GitHub repo and a **new** Vercel project.

Firebase is **not** used. Images and video go in `public/media` (see `public/media/README.md`).

Origin (Cursor git) is the current `origin` remote. Your personal GitHub remote should be named `github`.

---

## 1. Create a new GitHub repo (empty, no README)

1. Open [github.com/new](https://github.com/new).
2. Repository name: `wildly-wealthy-woman-live` (or any name you like).
3. Public (or Private).
4. **Do not** check “Add a README file”.
5. **Do not** add a .gitignore or license.
6. Click **Create repository**.

---

## 2. Push this project to GitHub

On your computer, in this project folder (the one that already has `package.json`):

```bash
git remote add github https://github.com/YOUR_GITHUB_USERNAME/wildly-wealthy-woman-live.git
git branch -M main
git push -u github main
```

Replace `YOUR_GITHUB_USERNAME` and the repo name if you used a different name.

If you use GitHub CLI instead of the website in step 1:

```bash
gh repo create wildly-wealthy-woman-live --public --source=. --remote=github --push
```

---

## 3. Deploy on Vercel

1. Open [vercel.com/dashboard](https://vercel.com/dashboard) (the same account as your other site).
2. Click **Add New…** → **Project**.
3. **Import** the GitHub repo from step 1 (`wildly-wealthy-woman-live`).
4. Leave the defaults: Framework **Next.js**, Build Command `next build`.
5. Click **Deploy**.
6. Wait until the production URL is green (`*.vercel.app`).

No environment variables are required yet.

---

## 4. Attach the domain in Vercel

1. Open that new project → **Settings** → **Domains**.
2. Add `wildlywealthywomanlive.com`.
3. Add `www.wildlywealthywomanlive.com`.

---

## 5. DNS at your registrar

At whatever registrar holds `wildlywealthywomanlive.com`:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Wait until Vercel → Domains shows HTTPS **Valid**.

---

## 6. Later: Stripe ticket button

When you have a ticket price:

1. Stripe Dashboard → **Payment Links** → create a link.
2. Copy the Payment Link URL.
3. Vercel → this project → **Settings** → **Environment Variables**.
4. Add `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` = that URL (Production).
5. **Redeploy** the production deployment.

The homepage line “Pre-sale tickets will be on sale soon.” becomes a **Tickets** button that opens Stripe in a new tab. No Stripe SDK. Firebase is still unused.
