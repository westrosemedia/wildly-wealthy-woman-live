import type { Metadata } from "next";
import Link from "next/link";

import { MediaFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { WaitlistSection } from "@/components/waitlist-section";
import { mediaSlots, recapFilms } from "@/lib/media";
import { events, nightFlow, pillars, schedule, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Night",
  description:
    "What happens at Wildly Wealthy Woman LIVE: iconic content, live podcasting, and a tapping activation with Jackie McDonald.",
};

export default function EventsPage() {
  const nextEvent = events.find((event) => event.status === "waitlist");
  const past = events.filter((event) => event.status === "past");

  return (
    <main>
      <PageIntro
        kicker="The night"
        title={
          <>
            Four hours. One room.{" "}
            <span className="italic text-gold">Then you are her.</span>
          </>
        }
        lede={`${site.tagline} ${site.description}`}
      />

      <section className="border-y border-gold/15 bg-espresso">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Next
            </p>
            <h2 className="font-heading mt-3 text-4xl text-cream md:text-5xl">
              {nextEvent?.title}
            </h2>
            <p className="mt-4 text-sm tracking-[0.2em] text-champagne uppercase">
              {nextEvent?.city} · {nextEvent?.date}
            </p>
            <p className="mt-2 text-sm text-cream/60">{nextEvent?.venue}</p>
            <p className="mt-6 text-base leading-relaxed text-cream/75">
              {nextEvent?.blurb} Cities, dates, and ticket links go to the
              waitlist first. If you want LIVE in your city, say so when you
              join.
            </p>
            <Link
              href="/connect"
              className="mt-8 inline-flex h-12 items-center bg-gold px-8 text-[11px] tracking-[0.28em] text-ink uppercase hover:bg-champagne"
            >
              {nextEvent?.ticketsLabel}
            </Link>
          </div>
          <MediaFrame slot={mediaSlots.heroStill} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
          How the night moves
        </p>
        <h2 className="font-heading mt-3 text-4xl text-cream md:text-5xl">
          You will be on camera, on mic, and in the close.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {nightFlow.map((beat, index) => (
            <li key={beat.title} className="border-t border-gold/30 pt-6">
              <p className="text-[11px] tracking-[0.32em] text-champagne uppercase">
                0{index + 1} · {beat.time}
              </p>
              <h3 className="font-heading mt-3 text-3xl text-cream">
                {beat.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                {beat.body}
              </p>
            </li>
          ))}
        </ol>
        <ol className="mt-16 space-y-0 border-t border-gold/20">
          {schedule.map((beat) => (
            <li
              key={beat.title}
              className="grid gap-3 border-b border-gold/20 py-6 md:grid-cols-[8rem_1fr_2fr] md:items-baseline"
            >
              <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
                {beat.time}
              </p>
              <h3 className="font-heading text-2xl text-cream">{beat.title}</h3>
              <p className="text-sm leading-relaxed text-cream/70">{beat.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-8 border border-gold/20 p-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <p
              key={pillar.title}
              className="text-[11px] tracking-[0.28em] text-gold uppercase"
            >
              {pillar.title}
            </p>
          ))}
        </div>
      </section>

      {past.map((event) => (
        <section
          key={event.slug}
          className="border-t border-gold/15 bg-espresso/70"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
            <MediaFrame slot={mediaSlots.eventPhoenix} />
            <div>
              <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
                Recap · {event.status}
              </p>
              <h2 className="font-heading mt-3 text-4xl text-cream md:text-5xl">
                {event.title}
              </h2>
              <p className="mt-4 text-sm tracking-[0.2em] text-champagne uppercase">
                {event.city} · {event.date}
              </p>
              <p className="mt-6 text-base leading-relaxed text-cream/75">
                {event.blurb} Drop recap stills and film into{" "}
                <span className="text-gold">public/media</span> and this page
                fills itself.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {recapFilms.map((slot) => (
                  <MediaFrame key={slot.id} slot={slot} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <WaitlistSection />
      </section>
    </main>
  );
}
