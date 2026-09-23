import type { Metadata } from "next";

import {
  CopyParagraphs,
  FoundersSection,
  SectionKicker,
} from "@/components/editorial-sections";
import { WaitlistSection } from "@/components/join-waitlist";
import { MediaFrame } from "@/components/media-frame";
import { StyleGuideSection } from "@/components/style-guide-section";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

export const metadata: Metadata = {
  title: "Sponsors",
};

export default function SponsorsPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="house-wrap pt-36 md:pt-44">
          <SectionKicker>{copy.brandPartners.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-2xl"
            paragraphs={copy.brandPartners.paragraphs}
          />
        </div>
      </section>

      <section
        id="reach"
        className="relative min-h-[100svh] overflow-hidden bg-ink"
      >
        <MediaFrame
          slot={mediaSlots.sponsors}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/38" />
        <div className="relative z-10 mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <h2 className="font-heading text-5xl leading-[0.96] font-light text-cream md:text-7xl">
            {copy.reach.heading}
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-[1.75] font-light text-cream/84 md:text-lg">
            {copy.reach.combined}
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {copy.reach.figures.map((stat) => (
              <article key={stat.figure + stat.label} className="space-y-4">
                <p className="font-heading text-5xl leading-none font-light text-cream md:text-7xl">
                  {stat.figure}
                </p>
                <p className="max-w-xs text-sm leading-[1.65] font-light text-cream/68">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-16 max-w-3xl text-base leading-[1.75] font-light text-cream/84 md:text-xl">
            {copy.reach.who}
          </p>
        </div>
      </section>

      <section id="why-sponsor" className="bg-cream">
        <div className="house-wrap grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <figure>
            <MediaFrame slot={mediaSlots.sponsors} />
          </figure>
          <div>
            <SectionKicker>{copy.whySponsor.heading}</SectionKicker>
            <p className="quote-sm mt-8 max-w-xl text-burgundy">
              {copy.whySponsor.body}
            </p>
          </div>
        </div>
      </section>

      <FoundersSection />

      <section id="the-invitation" className="bg-cream">
        <div className="house-wrap">
          <SectionKicker>{copy.invitation.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-2xl"
            paragraphs={copy.invitation.paragraphs}
          />
          <p className="display mt-16 max-w-4xl text-burgundy">
            {copy.closing.body}
          </p>
        </div>
      </section>

      <StyleGuideSection />

      <section id="waitlist-slide" className="bg-cream">
        <div className="house-wrap">
          <SectionKicker>{copy.waitlist.heading}</SectionKicker>
          <div className="mt-10">
            <WaitlistSection />
          </div>
        </div>
      </section>
    </div>
  );
}
