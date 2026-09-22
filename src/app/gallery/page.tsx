import type { Metadata } from "next";

import { CaptionedFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { WaitlistSection } from "@/components/waitlist-section";
import { galleryStills, recapFilms } from "@/lib/media";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro titleSlot="H1" />

      <section className="mx-auto max-w-[92rem] px-5 pt-6 pb-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {recapFilms.map((slot, index) => (
            <CaptionedFrame
              key={slot.id}
              slot={slot}
              index={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 pb-20 md:px-10">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryStills.map((slot, index) => (
            <div key={slot.id} className="mb-4 break-inside-avoid">
              <CaptionedFrame
                slot={slot}
                index={String(index + 1).padStart(2, "0")}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 pb-20 md:px-10">
        <WaitlistSection compact />
      </section>
    </>
  );
}
