import type { Metadata } from "next";

import { CopySlot } from "@/components/copy-slot";
import { MediaFrame } from "@/components/media-frame";
import { WaitlistSection } from "@/components/waitlist-section";
import { mediaSlots } from "@/lib/media";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-[92rem] items-end gap-12 px-5 pt-32 pb-16 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <MediaFrame slot={mediaSlots.about} />
        <div className="space-y-5">
          <CopySlot label="Kicker" className="w-fit text-[11px] uppercase" />
          <CopySlot label="H1" as="h1" className="font-heading text-5xl md:text-7xl" />
          <CopySlot label="Body" as="p" />
        </div>
      </section>

      <section className="border-y border-mink/15 bg-snow">
        <div className="mx-auto max-w-[92rem] space-y-5 px-5 py-16 md:px-10 md:py-24">
          <CopySlot label="Body" as="p" className="max-w-3xl" />
          <CopySlot label="Body" as="p" className="max-w-3xl" />
          <CopySlot label="Body" as="p" className="max-w-3xl" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10">
        <MediaFrame slot={mediaSlots.portrait} />
        <div className="space-y-5">
          <CopySlot label="H2" as="h2" className="font-heading text-4xl" />
          <CopySlot label="Body" as="p" />
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 pb-20 md:px-10">
        <WaitlistSection />
      </section>
    </>
  );
}
