import type { Metadata } from "next";

import { JoinWaitlistLink, WaitlistSection } from "@/components/join-waitlist";
import { HeroCinematic, MediaFrame } from "@/components/media-frame";
import { StyleGuideSection } from "@/components/style-guide-section";
import { TicketCta } from "@/components/ticket-cta";
import { VenueAddress } from "@/components/venue-address";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
};

export default function Home() {
  return (
    <>
      <section data-hero className="relative min-h-[100svh] overflow-hidden bg-ink">
        <HeroCinematic
          video={mediaSlots.heroVideo}
          still={mediaSlots.heroStill}
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-end px-6 pb-16 pt-36 md:px-12 md:pb-24">
          <VenueAddress className="rise text-[10px] tracking-[0.3em] text-cream/70 uppercase" />
          <h1 className="font-heading rise-delay mt-7 max-w-5xl text-[3.15rem] leading-[0.96] font-light text-cream sm:text-6xl md:text-[6.4rem]">
            {copy.hero.title}
          </h1>
          <p className="rise-late mt-8 max-w-xl text-base leading-[1.7] font-light text-ivory/88 md:text-[1.2rem]">
            {copy.hero.body}
          </p>
          <div className="rise-late mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            <JoinWaitlistLink href="#waitlist" />
            <TicketCta />
          </div>
        </div>
      </section>

      <section className="relative min-h-[80svh] overflow-hidden bg-ink">
        <MediaFrame
          slot={mediaSlots.event}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[80svh]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative z-10 mx-auto grid min-h-[80svh] max-w-[88rem] content-end gap-16 px-6 py-24 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-24 md:px-12 md:py-36">
          <p className="text-[10px] tracking-[0.3em] text-cream/70 uppercase">
            {copy.event.whenWhere}
          </p>
          <div className="space-y-10">
            <p className="font-heading text-3xl leading-[1.15] font-light text-cream md:text-5xl">
              {copy.event.movement}
            </p>
            <p className="max-w-xl text-[15px] leading-[1.75] text-ivory/86">
              {copy.event.tickets}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-36">
          <figure>
            <MediaFrame slot={mediaSlots.eventRoom} />
            <figcaption className="mt-4 text-[10px] tracking-[0.22em] text-mink uppercase">
              {mediaSlots.eventRoom.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <StyleGuideSection />

      <section className="bg-ivory">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <WaitlistSection />
        </div>
      </section>
    </>
  );
}
