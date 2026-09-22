import type { Metadata } from "next";

import { CopySlot } from "@/components/copy-slot";
import { MediaFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { WaitlistSection } from "@/components/waitlist-section";
import { mediaSlots, recapFilms } from "@/lib/media";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <>
      <PageIntro titleSlot="H1" />

      <section className="bg-chocolate">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div className="space-y-5">
            <CopySlot label="Kicker" tone="dark" className="w-fit text-[11px] uppercase" />
            <CopySlot label="H2" tone="dark" as="h2" className="font-heading text-4xl md:text-5xl" />
            <CopySlot label="Body" tone="dark" as="p" />
          </div>
          <MediaFrame slot={mediaSlots.heroStill} />
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-20 md:px-10 md:py-28">
        <ol className="grid gap-10 md:grid-cols-3">
          {["01", "02", "03"].map((n) => (
            <li key={n} className="space-y-4 border-t border-mink/25 pt-6">
              <CopySlot label={`${n} · Title`} as="h3" className="font-heading text-3xl" />
              <CopySlot label="Body" as="p" className="text-sm" />
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-mink/15 bg-snow">
        <div className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <MediaFrame slot={mediaSlots.event} />
          <div className="space-y-5">
            <CopySlot label="H2" as="h2" className="font-heading text-4xl" />
            <CopySlot label="Body" as="p" />
            <div className="grid grid-cols-3 gap-3">
              {recapFilms.map((slot) => (
                <MediaFrame key={slot.id} slot={slot} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-20 md:px-10">
        <WaitlistSection />
      </section>
    </>
  );
}
