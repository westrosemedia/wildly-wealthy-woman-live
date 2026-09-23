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

      <section id="reach" className="bg-cream">
        <div className="house-wrap">
          <h2 className="display text-burgundy">{copy.reach.heading}</h2>
          <p className="body-copy mt-8 max-w-3xl text-burgundy/80">
            {copy.reach.combined}
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {copy.reach.figures.map((stat) => (
              <article key={stat.figure + stat.label} className="space-y-4">
                <p className="stat text-burgundy">{stat.figure}</p>
                <p className="max-w-xs text-sm leading-[1.65] font-light text-burgundy/70">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <p className="body-copy mt-16 max-w-3xl text-burgundy/80 md:text-xl">
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
