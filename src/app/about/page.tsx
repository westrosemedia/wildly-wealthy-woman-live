import type { Metadata } from "next";
import Link from "next/link";

import { MediaFrame } from "@/components/media-frame";
import { WaitlistSection } from "@/components/waitlist-section";
import { mediaSlots } from "@/lib/media";
import { aboutJackie, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jackie McDonald",
  description: `${site.host.name} — ${site.host.role}. Host of Wildly Wealthy Woman LIVE.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-[92rem] items-end gap-12 px-5 pt-32 pb-16 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <MediaFrame slot={mediaSlots.aboutJackie} />
        <div>
          <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
            The host
          </p>
          <h1 className="font-heading mt-4 text-5xl leading-[0.95] text-chocolate md:text-7xl">
            {site.host.name}
          </h1>
          <p className="mt-4 max-w-xl text-sm tracking-[0.16em] text-mink uppercase">
            {site.host.role}
          </p>
          <p className="font-heading mt-8 text-2xl leading-snug text-chocolate md:text-3xl">
            {aboutJackie.lead}
          </p>
        </div>
      </section>

      <section className="border-y border-mink/15 bg-snow">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-24">
          <div className="space-y-6 text-base leading-relaxed text-mink">
            {aboutJackie.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="border border-mink/20 bg-ivory p-8">
            <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
              Studio
            </p>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href={site.host.site}
                  className="font-heading text-2xl text-chocolate hover:text-lip"
                >
                  JackieMcDonald.ca
                </a>
                <p className="mt-1 text-sm text-mink">
                  Coaching, tapping, and the work behind the room.
                </p>
              </li>
              <li>
                <a
                  href={site.host.podcast}
                  className="font-heading text-2xl text-chocolate hover:text-lip"
                >
                  Wildly Wealthy Woman Podcast
                </a>
                <p className="mt-1 text-sm text-mink">
                  Money, manifestation, and leadership — on mic.
                </p>
              </li>
              <li>
                <Link
                  href="/connect"
                  className="font-heading text-2xl text-chocolate hover:text-lip"
                >
                  Get a seat at LIVE
                </Link>
                <p className="mt-1 text-sm text-mink">
                  Waitlist first. Cities follow.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10">
        <MediaFrame slot={mediaSlots.jackiePortrait} />
        <div>
          <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
            Why LIVE
          </p>
          <h2 className="font-heading mt-3 text-4xl text-chocolate md:text-5xl">
            Booked. Remembered. Paid.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mink">
            Visibility is not a content calendar. It is a nervous system that
            can be seen, a body of work that looks like the woman you already
            are, and a room that will never confuse you with someone smaller.
            That is the vortex.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 pb-20 md:px-10">
        <WaitlistSection />
      </section>
    </>
  );
}
