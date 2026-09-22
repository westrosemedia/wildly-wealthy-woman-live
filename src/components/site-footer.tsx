import Link from "next/link";

import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-espresso text-cream">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-heading text-3xl text-cream">
            Wildly Wealthy Woman <span className="italic text-champagne">LIVE</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {site.tagline} Hosted by {site.host.name}. Built for the woman who is
            done waiting to be invited.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] text-champagne uppercase">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>
              <Link href="/events" className="hover:text-cream">
                The Night
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-cream">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cream">
                Jackie
              </Link>
            </li>
            <li>
              <Link href="/connect" className="hover:text-cream">
                Waitlist
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] text-champagne uppercase">
            Studio
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>
              <a href={site.host.site} className="hover:text-cream">
                JackieMcDonald.ca
              </a>
            </li>
            <li>
              <a href={site.host.podcast} className="hover:text-cream">
                The Podcast
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-[11px] tracking-[0.18em] text-cream/45 uppercase md:px-10">
        © {new Date().getFullYear()} {site.name} · {site.domain}
      </div>
    </footer>
  );
}
