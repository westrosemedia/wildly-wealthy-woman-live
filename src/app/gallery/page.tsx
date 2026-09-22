import type { Metadata } from "next";

import { CaptionedFrame } from "@/components/media-frame";
import { PageIntro } from "@/components/page-intro";
import { WaitlistSection } from "@/components/waitlist-section";
import { galleryStills, recapFilms } from "@/lib/media";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Stills and recap film from Wildly Wealthy Woman LIVE. Drop files into public/media using the listed filenames.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        kicker="Gallery"
        title={
          <>
            The lookbook is already framed.{" "}
            <span className="italic text-lip">Add the fur later.</span>
          </>
        }
        lede="Frames are cut for stills and recap films. Until a file lives in public/media, each plate holds a mink-and-snow placeholder so the site never looks empty."
      />

      <section className="mx-auto max-w-[92rem] px-5 pt-6 pb-16 md:px-10">
        <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
          Recap films
        </p>
        <h2 className="font-heading mt-3 text-3xl text-chocolate md:text-4xl">
          Three movements, on film.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
        <p className="text-[11px] tracking-[0.28em] text-lip uppercase">Stills</p>
        <h2 className="font-heading mt-3 text-3xl text-chocolate md:text-4xl">
          Twelve drop-in portraits and details.
        </h2>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
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
