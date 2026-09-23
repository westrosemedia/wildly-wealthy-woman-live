import type { Metadata } from "next";

import { JoinWaitlistLink, WaitlistSection } from "@/components/join-waitlist";
import { HeroCinematic } from "@/components/media-frame";
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
    <section className="relative min-h-[100svh] overflow-hidden">
      <HeroCinematic
        video={mediaSlots.heroVideo}
        still={mediaSlots.heroStill}
        className="absolute inset-0 aspect-auto min-h-[100svh]"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-5 pb-16 pt-36 md:px-10 md:pb-20">
        <VenueAddress className="text-[11px] tracking-[0.28em] text-cream/75 uppercase" />
        <h1 className="font-heading mt-5 max-w-5xl text-5xl leading-[0.92] text-cream sm:text-6xl md:text-[4.8rem]">
          {copy.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/90 md:text-xl">
          {copy.hero.body}
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base">
          {copy.event.tickets}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <JoinWaitlistLink href="#waitlist" />
          <TicketCta />
        </div>
        <WaitlistSection className="mt-12" />
      </div>
    </section>
  );
}
