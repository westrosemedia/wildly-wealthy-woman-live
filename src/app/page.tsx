import type { Metadata } from "next";

import { CopySlot } from "@/components/copy-slot";
import { CaptionedFrame, HeroCinematic, MediaFrame } from "@/components/media-frame";
import { GoldLink } from "@/components/page-intro";
import { WaitlistSection } from "@/components/waitlist-section";
import { galleryStills, mediaSlots, recapFilms } from "@/lib/media";
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
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end gap-5 px-5 pb-16 pt-36 md:px-10 md:pb-20">
          <CopySlot label="Kicker" tone="dark" className="w-fit text-[11px] tracking-[0.42em] uppercase" />
          <CopySlot
            as="h1"
            label="H1"
            tone="dark"
            className="font-heading max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-[6.4rem]"
          />
          <CopySlot as="p" label="Body" tone="dark" className="max-w-xl text-lg" />
          <GoldLink href="/connect" />
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-20 md:px-10 md:py-28">
        <CopySlot
          as="blockquote"
          label="Quote"
          className="font-heading max-w-4xl text-3xl md:text-5xl"
        />
      </section>

      <section className="mx-auto max-w-[92rem] px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-10 md:grid-cols-3">
          {["01", "02", "03"].map((n) => (
            <article key={n} className="space-y-4 border-t border-mink/25 pt-6">
              <CopySlot label={`${n} · Title`} as="h3" className="font-heading text-3xl" />
              <CopySlot label="Body" as="p" className="text-sm" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-chocolate">
        <div className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div className="space-y-5">
            <CopySlot label="Kicker" tone="dark" className="w-fit text-[11px] uppercase" />
            <CopySlot label="H2" tone="dark" as="h2" className="font-heading text-4xl md:text-6xl" />
            <CopySlot label="Body" tone="dark" as="p" className="max-w-md" />
            <GoldLink href="/connect" />
          </div>
          <MediaFrame slot={mediaSlots.event} />
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-28">
        <MediaFrame slot={mediaSlots.portrait} />
        <div className="space-y-5">
          <CopySlot label="Kicker" className="w-fit text-[11px] uppercase" />
          <CopySlot label="H2" as="h2" className="font-heading text-4xl md:text-6xl" />
          <CopySlot label="Body" as="p" />
        </div>
      </section>

      <section className="border-y border-mink/15 bg-snow">
        <div className="mx-auto max-w-[92rem] px-5 py-20 md:px-10 md:py-28">
          <div className="mb-12">
            <CopySlot label="H2" as="h2" className="font-heading w-fit text-4xl md:text-5xl" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
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

      <section className="mx-auto max-w-[92rem] px-5 py-20 md:px-10 md:py-28">
        <WaitlistSection />
      </section>
    </>
  );
}
