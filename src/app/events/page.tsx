import type { Metadata } from "next";

import { CopySlot } from "@/components/copy-slot";
import { VenueAddress } from "@/components/venue-address";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="relative mx-auto max-w-[92rem] space-y-6 px-5 md:px-10">
          <CopySlot
            label="Kicker"
            className="w-fit text-[11px] tracking-[0.38em] uppercase"
          />
          <CopySlot
            as="h1"
            label="H1"
            className="font-heading max-w-4xl text-5xl leading-[0.95] md:text-7xl"
          />
          <CopySlot as="p" label="Body" className="max-w-2xl text-lg" />
        </div>
        <div className="hairline mt-14" />
      </section>

      <section className="bg-espresso text-cream">
        <div className="mx-auto max-w-[92rem] px-5 py-16 md:px-10 md:py-24">
          <div className="space-y-5">
            <CopySlot
              label="Kicker"
              tone="dark"
              className="w-fit text-[11px] uppercase"
            />
            <CopySlot
              label="H2"
              tone="dark"
              as="h2"
              className="font-heading text-4xl md:text-5xl"
            />
            <VenueAddress className="text-sm leading-relaxed text-cream" />
            <CopySlot label="Body" tone="dark" as="p" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-20 md:px-10">
        <WaitlistForm />
      </section>
    </>
  );
}
