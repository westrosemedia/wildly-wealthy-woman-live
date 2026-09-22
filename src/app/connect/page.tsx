import type { Metadata } from "next";

import { CopySlot } from "@/components/copy-slot";
import { VenueAddress } from "@/components/venue-address";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Connect",
};

export default function ConnectPage() {
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

      <section className="mx-auto max-w-[92rem] px-5 pt-6 pb-20 md:px-10">
        <div className="border border-cream/15 bg-espresso px-6 py-10 md:max-w-2xl md:px-10">
          <CopySlot
            label="H2"
            as="h2"
            className="font-heading mb-8 text-4xl"
          />
          <VenueAddress className="mb-8 text-sm leading-relaxed text-cream" />
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
