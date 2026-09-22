import type { Metadata } from "next";

import { MediaFrame } from "@/components/media-frame";
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
    <main>
      <PageIntro
        kicker="Gallery"
        title={
          <>
            The room, as it looked.{" "}
            <span className="italic text-gold">As it felt.</span>
          </>
        }
        lede="Frames are already cut for your stills and recap films. Until a file lives in public/media, each slot holds a styled placeholder so the layout stays intact. Use the exact filenames listed on every frame."
      />

      <section className="mx-auto max-w-7xl px-5 pt-6 pb-16 md:px-8">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
          Recap films
        </p>
        <h2 className="font-heading mt-3 text-3xl text-cream md:text-4xl">
          Three movements, on film.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {recapFilms.map((slot) => (
            <figure key={slot.id} className="space-y-3">
              <MediaFrame slot={slot} />
              <figcaption className="flex items-baseline justify-between gap-3 text-[11px] tracking-[0.2em] text-champagne uppercase">
                <span>{slot.caption}</span>
                <span className="text-cream/40">{slot.filename}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
          Stills
        </p>
        <h2 className="font-heading mt-3 text-3xl text-cream md:text-4xl">
          Twelve drop-in portraits and details.
        </h2>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryStills.map((slot) => (
            <figure key={slot.id} className="mb-4 break-inside-avoid">
              <MediaFrame slot={slot} />
              <figcaption className="mt-2 flex items-baseline justify-between gap-3 text-[11px] tracking-[0.2em] text-champagne uppercase">
                <span>{slot.caption}</span>
                <span className="text-cream/40">{slot.filename}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <WaitlistSection compact />
      </section>
    </main>
  );
}
