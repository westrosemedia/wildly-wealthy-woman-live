import type { Metadata } from "next";

import { CopySlot } from "@/components/copy-slot";
import { HeroCinematic } from "@/components/media-frame";
import { TicketCta } from "@/components/ticket-cta";
import { VenueAddress } from "@/components/venue-address";
import { WaitlistForm } from "@/components/waitlist-form";
import { mediaSlots } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <HeroCinematic
          video={mediaSlots.heroVideo}
          still={mediaSlots.heroStill}
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-5 pb-16 pt-36 md:px-10 md:pb-20">
          <TicketCta />
          <VenueAddress className="mt-6 text-sm leading-relaxed text-cream/75" />
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section className="bg-espresso text-cream">
        <div className="mx-auto max-w-[92rem] px-5 py-20 md:px-10 md:py-28">
          <div className="space-y-5">
            <CopySlot
              label="Kicker"
              className="w-fit text-[11px] uppercase"
            />
            <CopySlot
              label="H2"
              as="h2"
              className="font-heading text-4xl md:text-6xl"
            />
            <VenueAddress className="text-sm leading-relaxed text-cream" />
            <CopySlot label="Body" as="p" className="max-w-md" />
          </div>
        </div>
      </section>
    </>
  );
}
