import Link from "next/link";
import type { Metadata } from "next";

import { FaqSection } from "@/components/faq-section";
import { MediaFrame, MediaStillOrVideo } from "@/components/media-frame";
import { PromiseMarquee } from "@/components/promise-marquee";
import { WaitlistSection } from "@/components/waitlist-section";
import { galleryStills, mediaSlots, recapFilms } from "@/lib/media";
import { events, pillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} · ${site.host.name}` },
  description: site.description,
};

const nextEvent = events.find((event) => event.status === "waitlist");

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden">
        <MediaStillOrVideo
          video={mediaSlots.heroVideo}
          still={mediaSlots.heroStill}
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-36 md:px-8 md:pb-20">
          <p className="text-[11px] tracking-[0.42em] text-gold uppercase">
            {site.shortName} · with {site.host.name}
          </p>
          <h1 className="font-heading mt-4 max-w-4xl text-5xl leading-[0.95] text-cream sm:text-6xl md:text-8xl">
            This is not a networking night.
            <span className="italic text-gold"> It is a visibility vortex.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            An intimate in-person experience for empire builders, coaches, and
            creatives ready to be booked, remembered, and paid. Iconic content.
            Live podcasting. A tapping activation that changes how you walk into
            the room.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/connect"
              className="inline-flex h-12 items-center justify-center bg-gold px-8 text-[11px] tracking-[0.28em] text-ink uppercase transition-colors hover:bg-champagne"
            >
              Join the waitlist
            </Link>
            <Link
              href="/events"
              className="inline-flex h-12 items-center justify-center border border-cream/30 px-8 text-[11px] tracking-[0.28em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
            >
              The night
            </Link>
          </div>
        </div>
      </section>

      <PromiseMarquee />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
          Three movements
        </p>
        <h2 className="font-heading mt-3 max-w-3xl text-4xl text-cream md:text-6xl">
          Content. Podcast. Tapping. Then you leave as her.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.roman}
              className="border-t border-gold/30 pt-6"
            >
              <p className="text-[11px] tracking-[0.32em] text-champagne uppercase">
                {pillar.roman} · {pillar.hours}
              </p>
              <h3 className="font-heading mt-3 text-3xl text-cream">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-gold/15 bg-espresso">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Next room
            </p>
            <h2 className="font-heading mt-3 text-4xl text-cream md:text-6xl">
              {nextEvent?.title}
            </h2>
            <p className="mt-4 text-sm tracking-[0.2em] text-champagne uppercase">
              {nextEvent?.city} · {nextEvent?.date}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75">
              {nextEvent?.blurb} A small room. High-frequency women. You do not
              collect business cards. You become impossible to forget.
            </p>
            <Link
              href="/connect"
              className="mt-8 inline-flex h-12 items-center bg-gold px-8 text-[11px] tracking-[0.28em] text-ink uppercase hover:bg-champagne"
            >
              {nextEvent?.ticketsLabel}
            </Link>
          </div>
          <MediaFrame slot={mediaSlots.eventPhoenix} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-28">
        <MediaFrame slot={mediaSlots.jackiePortrait} />
        <div>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            The host
          </p>
          <h2 className="font-heading mt-3 text-4xl text-cream md:text-6xl">
            {site.host.name}
          </h2>
          <p className="mt-4 text-sm tracking-[0.18em] text-champagne uppercase">
            {site.host.role}
          </p>
          <p className="mt-6 text-base leading-relaxed text-cream/75">
            Jackie built LIVE for the woman who is done waiting to be invited.
            Her work lives where money, manifestation, and the nervous system
            meet — because the next level will not land in a body still braced
            for the last one.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center border border-gold/40 px-6 text-[11px] tracking-[0.24em] text-gold uppercase hover:bg-gold hover:text-ink"
            >
              Meet Jackie
            </Link>
            <a
              href={site.host.podcast}
              className="inline-flex h-12 items-center justify-center px-6 text-[11px] tracking-[0.24em] text-cream/70 uppercase hover:text-cream"
            >
              The podcast
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/15 bg-espresso/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
                Recap film
              </p>
              <h2 className="font-heading mt-3 text-4xl text-cream md:text-5xl">
                The room, on mic, the close.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-[11px] tracking-[0.28em] text-champagne uppercase hover:text-gold"
            >
              Full gallery
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {recapFilms.map((slot) => (
              <figure key={slot.id} className="space-y-3">
                <MediaFrame slot={slot} />
                <figcaption className="text-[11px] tracking-[0.24em] text-champagne uppercase">
                  {slot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryStills.slice(0, 4).map((slot) => (
              <MediaFrame key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-28">
        <WaitlistSection />
        <FaqSection />
      </section>
    </main>
  );
}
