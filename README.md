# Wildly Wealthy Woman LIVE

The official site for **Wildly Wealthy Woman LIVE** — an intimate in-person visibility vortex hosted by Jackie McDonald. Iconic content. Live podcasting. A tapping activation. Built for empire builders, coaches, and creatives ready to be booked, remembered, and paid.

Live domain: [wildlywealthywomanlive.com](https://wildlywealthywomanlive.com)

This is a Next.js 16 app with Tailwind CSS v4 and shadcn/ui. There is no database and no auth. The waitlist API validates name and email, then returns success so you can wire Kajabi (or another list) later.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Add images and videos

Drop files into `public/media` using the **exact filenames** listed in [`public/media/README.md`](public/media/README.md).

The frames are already designed. Until a file exists, a luxury placeholder holds the layout — including empty, loading, and missing-file states.

Required names:

- `hero.mp4`, `hero.jpg`
- `jackie-portrait.jpg`, `about-jackie.jpg`
- `event-phoenix.jpg`
- `recap-01.mp4` + `recap-01.jpg`, `recap-02.mp4` + `recap-02.jpg`, `recap-03.mp4` + `recap-03.jpg`
- `gallery-01.jpg` through `gallery-12.jpg`

Then commit and redeploy. No code change is required.

## Connect wildlywealthywomanlive.com

Use Vercel (this is a Next.js app) and point the domain's DNS at the deployment.

### 1. Deploy on Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave the defaults: Framework **Next.js**, build command `next build`, output as detected.
4. Click **Deploy**. Wait until the first production URL is green.

No environment variables are required for the current waitlist mock.

### 2. Add the domain in Vercel

1. Open the project → **Settings** → **Domains**.
2. Add `wildlywealthywomanlive.com`.
3. Add `www.wildlywealthywomanlive.com` and redirect it to the apex (or the reverse, if you prefer www).

Vercel will show the exact DNS records to create. They look like this:

### 3. DNS at your registrar

In the DNS panel for `wildlywealthywomanlive.com` (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.):

**Apex (`wildlywealthywomanlive.com`)**

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `10.0.1.2` |

Vercel currently publishes `10.0.1.2` for apex domains. If the Domains page shows a different IP, use that one.

**WWW**

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `cname.vercel-dns.com` |

Remove any old A / AAAA / CNAME records that still point the domain at a parked page, Squarespace, or another host.

If the domain uses **Cloudflare**, set the records to **DNS only** (grey cloud) until SSL is issued, then you can proxy if you want.

**Nameserver option:** you can also change the domain's nameservers to the ones Vercel provides. Then Vercel manages the records and you can skip the A / CNAME rows above.

### 4. SSL

Vercel provisions a Let's Encrypt certificate automatically once DNS resolves. Give it a few minutes after the records propagate (sometimes up to an hour). The Domains page will change from "Invalid Configuration" to "Valid".

Visit `https://wildlywealthywomanlive.com` and confirm the lock icon.

### 5. After it is live

- Drop media into `public/media` and redeploy.
- Connect the waitlist in `src/app/api/waitlist/route.ts` to Kajabi or your email tool when you are ready. Until then, a valid name and email still return success.

## Pages

- `/` — cinematic home
- `/events` — the night
- `/gallery` — recap films and stills
- `/about` — Jackie McDonald
- `/connect` — waitlist
- `POST /api/waitlist` — name + email validation
