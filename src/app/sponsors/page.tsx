import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CopySlot } from "@/components/copy-slot";
import { MediaFrame } from "@/components/media-frame";
import { VenueAddress } from "@/components/venue-address";
import { galleryStills, mediaSlots, recapFilms } from "@/lib/media";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sponsors",
};

function Slide({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex min-h-[100svh] snap-start flex-col justify-center overflow-hidden bg-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}

export default function SponsorsPage() {
  return (
    <div className="snap-y snap-mandatory">
      <Slide>
        <MediaFrame
          slot={mediaSlots.heroStill}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col justify-end gap-6 px-5 py-20 pt-36 md:px-10">
          <CopySlot
            tone="dark"
            label="Kicker"
            className="w-fit text-[11px] tracking-[0.42em] uppercase"
          />
          <CopySlot
            tone="dark"
            as="h1"
            label="H1"
            className="font-heading max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-[6rem]"
          />
          <VenueAddress className="text-sm leading-relaxed text-cream/80" />
        </div>
      </Slide>

      <Slide className="bg-espresso">
        <div className="mx-auto grid w-full max-w-[92rem] items-center gap-12 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <MediaFrame slot={mediaSlots.jackiePortrait} />
          <div className="space-y-5">
            <CopySlot
            tone="dark"
              label="Kicker"
              className="w-fit text-[11px] tracking-[0.28em] uppercase"
            />
            <CopySlot
            tone="dark"
              as="h2"
              label="H2"
              className="font-heading text-4xl md:text-6xl"
            />
            <CopySlot
            tone="dark" as="p" label="Body" className="max-w-xl text-base" />
            <CopySlot
            tone="dark" as="p" label="Body" className="max-w-xl text-base" />
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 md:px-10">
          <CopySlot
            tone="dark"
            as="h2"
            label="H2"
            className="font-heading mb-12 w-fit text-4xl md:text-6xl"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {["01", "02", "03"].map((n) => (
              <article key={n} className="space-y-4 border-t border-cream/15 pt-6">
                <CopySlot
            tone="dark"
                  label={`${n} · Title`}
                  as="h3"
                  className="font-heading text-3xl"
                />
                <CopySlot
            tone="dark" label="Body" as="p" className="text-sm" />
                <CopySlot
            tone="dark" label="Body" as="p" className="text-sm" />
              </article>
            ))}
          </div>
        </div>
      </Slide>

      <Slide className="bg-burgundy">
        <div className="mx-auto grid w-full max-w-[92rem] items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10">
          <div className="space-y-5">
            <CopySlot
            tone="dark"
              label="Kicker"
              className="w-fit text-[11px] tracking-[0.28em] uppercase"
            />
            <CopySlot
            tone="dark"
              as="h2"
              label="H2"
              className="font-heading text-4xl md:text-6xl"
            />
            <VenueAddress className="text-sm leading-relaxed text-cream/80" />
            <CopySlot
            tone="dark" as="p" label="Body" className="max-w-md text-base" />
          </div>
          <MediaFrame slot={mediaSlots.eventPhoenix} />
        </div>
      </Slide>

      <Slide>
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 md:px-10">
          <CopySlot
            tone="dark"
            as="h2"
            label="H2"
            className="font-heading mb-12 w-fit text-4xl md:text-6xl"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {recapFilms.map((slot) => (
              <MediaFrame key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </Slide>

      <Slide className="bg-espresso">
        <div className="mx-auto grid w-full max-w-[92rem] items-center gap-12 px-5 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div className="grid grid-cols-2 gap-4">
            {galleryStills.slice(0, 4).map((slot) => (
              <MediaFrame key={slot.id} slot={slot} />
            ))}
          </div>
          <div className="space-y-5">
            <CopySlot
            tone="dark"
              as="h2"
              label="H2"
              className="font-heading text-4xl md:text-6xl"
            />
            <CopySlot
            tone="dark" as="p" label="Body" className="text-base" />
            <CopySlot
            tone="dark" as="p" label="Body" className="text-base" />
            <CopySlot
            tone="dark" as="p" label="Body" className="text-base" />
          </div>
        </div>
      </Slide>

      <Slide>
        <MediaFrame
          slot={mediaSlots.aboutJackie}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="slide-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col gap-6 px-5 py-24 pt-36 md:px-10">
          <CopySlot
            tone="dark"
            as="h1"
            label="H1"
            className="font-heading max-w-4xl text-5xl md:text-7xl"
          />
          <CopySlot
            tone="dark" as="p" label="Body" className="max-w-xl text-lg" />
          <VenueAddress className="text-sm leading-relaxed text-cream/80" />
        </div>
      </Slide>
    </div>
  );
}
