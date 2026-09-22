# Wildly Wealthy Woman LIVE

Site for wildlywealthywomanlive.com.

## Run

```bash
npm install
npm run dev -- --port 43127
```

## Media

Put files in `public/media`:

- `hero.mp4`, `hero.jpg`
- `portrait.jpg`, `about.jpg`, `event.jpg`
- `recap-01.mp4`, `recap-01.jpg`, `recap-02.mp4`, `recap-02.jpg`, `recap-03.mp4`, `recap-03.jpg`
- `gallery-01.jpg` … `gallery-12.jpg`

## Domain

1. Deploy on Vercel (import this repo).
2. Settings → Domains → add `wildlywealthywomanlive.com` and `www.wildlywealthywomanlive.com`.
3. At the registrar:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

4. Wait for HTTPS to show Valid.
