import type { Metadata } from "next";

import { WaitlistForm } from "@/components/waitlist-form";
import { HeroCinematic } from "@/components/media-frame";
import { VenueAddress } from "@/components/venue-address";
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
        <h1 className="font-heading max-w-5xl text-4xl leading-[1.02] text-cream sm:text-6xl md:text-[4.6rem]">
          Pre-sale tickets will be on sale soon.
        </h1>
        <VenueAddress className="mt-6 text-[11px] tracking-[0.28em] text-cream/75 uppercase" />
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
