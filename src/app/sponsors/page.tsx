import type { Metadata } from "next";

import {
  CopyParagraphs,
  FoundersSection,
  SectionKicker,
  SponsorshipPackagesSection,
} from "@/components/editorial-sections";
import { HeroOpen } from "@/components/hero-open";
import { WaitlistSection } from "@/components/join-waitlist";
import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { mediaSlots, reachProofStills } from "@/lib/media";

export const metadata: Metadata = {
  title: "Sponsors",
};

export default function SponsorsPage() {
  return (
    <div className="overflow-x-clip">
      <HeroOpen sound />

      <section className="bg-cream">
        <div className="house-wrap">
          <h2 className="font-heading text-5xl leading-[0.96] font-light text-pretty text-burgundy md:text-7xl">
            {copy.brandPartners.heading}
          </h2>
          <CopyParagraphs
            className="mt-10 max-w-2xl"
            paragraphs={copy.brandPartners.paragraphs}
          />
        </div>
      </section>

      <section
        id="reach"
        className="relative min-h-[100svh] overflow-x-clip overflow-hidden bg-ink"
      >
        <MediaFrame
          slot={mediaSlots.sponsors}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/38" />
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <h2 className="font-heading text-5xl leading-[0.96] font-light text-pretty text-cream md:text-7xl">
            {copy.reach.heading}
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-[1.75] font-light text-cream/84 md:text-lg">
            {copy.reach.combined}
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-2">
            {copy.reach.figures.slice(0, 2).map((stat) => (
              <article key={stat.figure + stat.label} className="min-w-0 space-y-4">
                <p className="font-heading text-[clamp(3.6rem,10vw,8.5rem)] leading-[0.88] font-light tracking-[-0.045em] text-cream">
                  {stat.figure}
                </p>
                <p className="max-w-xs text-sm leading-[1.65] font-light text-cream/68">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {copy.reach.figures.slice(2).map((stat) => (
              <article key={stat.figure + stat.label} className="min-w-0 space-y-4">
                <p className="font-heading text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.9] font-light tracking-[-0.04em] text-cream">
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

      <section className="bg-cream" aria-label="Reach proof">
        <div className="house-wrap">
          <p className="body-copy mb-10 max-w-3xl text-pretty text-burgundy md:mb-14 md:text-xl">
            {copy.reach.proofLead}
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
            {reachProofStills.map((slot) => (
              <MediaFrame key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </section>

      <SponsorshipPackagesSection />

      <section id="why-sponsor" className="bg-cream">
        <div className="house-wrap grid min-w-0 items-start gap-12 md:grid-cols-2 md:gap-20">
          <div className="min-w-0">
            <SectionKicker>{copy.whySponsor.heading}</SectionKicker>
            <p className="quote-sm mt-8 max-w-xl text-pretty text-burgundy">
              {copy.whySponsor.body}
            </p>
          </div>
          <figure className="min-w-0">
            <MediaFrame slot={mediaSlots.whySponsorStill} />
          </figure>
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
          <p className="display mt-16 max-w-4xl text-pretty text-burgundy">
            {copy.closing.body}
          </p>
        </div>
      </section>

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
