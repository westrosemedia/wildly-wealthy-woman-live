import Link from "next/link";
import type { Metadata } from "next";

import { FaqSection } from "@/components/faq-section";
import { CaptionedFrame, HeroCinematic, MediaFrame } from "@/components/media-frame";
import { GoldLink } from "@/components/page-intro";
import { PromiseMarquee } from "@/components/promise-marquee";
import { WaitlistSection } from "@/components/waitlist-section";
import { galleryStills, mediaSlots, recapFilms } from "@/lib/media";
import { differences, events, pillars, quotes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} · ${site.host.name}` },
  description: site.description,
};

const nextEvent = events.find((event) => event.status === "waitlist");

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <HeroCinematic
          video={mediaSlots.heroVideo}
          still={mediaSlots.heroStill}
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-5 pb-16 pt-36 md:px-10 md:pb-20">
          <p className="text-[11px] tracking-[0.42em] text-champagne uppercase">
            {site.shortName} · with {site.host.name}
          </p>
          <h1 className="font-heading mt-4 max-w-5xl text-5xl leading-[0.92] text-ivory sm:text-6xl md:text-[6.4rem]">
            Be booked.
            <br />
            Be remembered.
            <span className="italic text-champagne"> Be paid.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg">
            Fur-coat energy. Directed film. Champagne in the snow. LIVE is the
            intimate night for the woman who is done sitting in the back of a
            ballroom.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GoldLink href="/connect">Join the waitlist</GoldLink>
            <Link
              href="/events"
              className="inline-flex h-12 items-center justify-center border border-ivory/40 px-8 text-[11px] tracking-[0.28em] text-ivory uppercase transition-colors hover:border-champagne hover:text-champagne"
            >
              The night
            </Link>
          </div>
        </div>
      </section>

      <PromiseMarquee />

      <section className="mx-auto max-w-[92rem] px-5 py-20 md:px-10 md:py-28">
        <blockquote className="max-w-4xl">
          <p className="font-heading text-3xl leading-tight text-chocolate md:text-5xl">
            “{quotes[0].text}”
          </p>
          <footer className="mt-6 text-[11px] tracking-[0.28em] text-lip uppercase">
            {quotes[0].by}
          </footer>
        </blockquote>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 pb-20 md:px-10 md:pb-28">
        <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
          Three movements
        </p>
        <h2 className="font-heading mt-3 max-w-3xl text-4xl text-chocolate md:text-6xl">
          Content. Podcast. Tapping. Then you leave as her.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.roman} className="border-t border-mink/25 pt-6">
              <p className="text-[11px] tracking-[0.32em] text-mink uppercase">
                {pillar.roman} · {pillar.hours}
              </p>
              <h3 className="font-heading mt-3 text-3xl text-chocolate">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mink">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-mink/15 bg-snow">
        <div className="mx-auto max-w-[92rem] px-5 py-20 md:px-10 md:py-24">
          <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
            Not a conference
          </p>
          <h2 className="font-heading mt-3 max-w-3xl text-4xl text-chocolate md:text-5xl">
            {quotes[1].text}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {differences.map((item) => (
              <article key={item.label} className="border-t border-mink/25 pt-6">
                <p className="text-[11px] tracking-[0.28em] text-mink uppercase">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-mink/50 line-through decoration-mink/30">
                  {item.conference}
                </p>
                <p className="mt-3 text-base leading-relaxed text-chocolate">
                  {item.live}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-chocolate text-cream">
        <div className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-champagne uppercase">
              Next room
            </p>
            <h2 className="font-heading mt-3 text-4xl md:text-6xl">
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
              className="mt-8 inline-flex h-12 items-center bg-lip px-8 text-[11px] tracking-[0.28em] text-ivory uppercase hover:bg-ivory hover:text-chocolate"
            >
              {nextEvent?.ticketsLabel}
            </Link>
          </div>
          <MediaFrame slot={mediaSlots.eventPhoenix} />
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-28">
        <MediaFrame slot={mediaSlots.jackiePortrait} />
        <div>
          <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
            The host
          </p>
          <h2 className="font-heading mt-3 text-4xl text-chocolate md:text-6xl">
            {site.host.name}
          </h2>
          <p className="mt-4 text-sm tracking-[0.18em] text-mink uppercase">
            {site.host.role}
          </p>
          <p className="mt-6 text-base leading-relaxed text-mink">
            Jackie built LIVE for the woman who is done waiting to be invited.
            Her work lives where money, manifestation, and the nervous system
            meet — because the next level will not land in a body still braced
            for the last one.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center border border-mink/40 px-6 text-[11px] tracking-[0.24em] text-mink uppercase hover:border-lip hover:text-lip"
            >
              Meet Jackie
            </Link>
            <a
              href={site.host.podcast}
              className="inline-flex h-12 items-center justify-center px-6 text-[11px] tracking-[0.24em] text-mink uppercase hover:text-chocolate"
            >
              The podcast
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-mink/15 bg-snow">
        <div className="mx-auto max-w-[92rem] px-5 py-20 md:px-10 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
                The look
              </p>
              <h2 className="font-heading mt-3 text-4xl text-chocolate md:text-5xl">
                Après-ski editorial. Drop your film in.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-[11px] tracking-[0.28em] text-mink uppercase hover:text-lip"
            >
              Full gallery
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {recapFilms.map((slot, index) => (
              <CaptionedFrame
                key={slot.id}
                slot={slot}
                index={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryStills.slice(0, 4).map((slot, index) => (
              <CaptionedFrame
                key={slot.id}
                slot={slot}
                index={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] gap-16 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-28">
        <WaitlistSection />
        <FaqSection />
      </section>
    </>
  );
}
