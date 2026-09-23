import type { Metadata } from "next";

import {
  BanffStill,
  CopyParagraphs,
  SectionKicker,
  SpeakersSection,
  StorySection,
} from "@/components/editorial-sections";
import { HeroOpen } from "@/components/hero-open";
import { WaitlistSection } from "@/components/join-waitlist";
import { MediaFrame } from "@/components/media-frame";
import { StyleGuideSection } from "@/components/style-guide-section";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
};

export default function Home() {
  return (
    <>
      <HeroOpen />

      <section id="the-event" className="bg-cream">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <SectionKicker>{copy.event.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-2xl"
            paragraphs={copy.event.paragraphs}
          />
        </div>
      </section>

      <StorySection />

      <section id="why-banff" className="bg-cream">
        <BanffStill />
        <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-12 md:py-32">
          <div>
            <SectionKicker>{copy.whyBanff.heading}</SectionKicker>
            <CopyParagraphs
              className="mt-10 max-w-xl"
              paragraphs={copy.whyBanff.paragraphs}
            />
          </div>
          <figure>
            <MediaFrame slot={mediaSlots.eventRoom} />
          </figure>
        </div>
      </section>

      <section
        id="the-bigger-mission"
        className="relative min-h-[80svh] overflow-hidden bg-ink"
      >
        <MediaFrame
          slot={mediaSlots.backgroundFur}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[80svh]"
        />
        <div className="fur-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-[88rem] flex-col justify-end px-6 py-24 md:px-12 md:py-36">
          <SectionKicker tone="dark">{copy.mission.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-3xl"
            tone="dark"
            paragraphs={copy.mission.paragraphs}
          />
        </div>
      </section>

      <SpeakersSection />

      <section id="event-details" className="bg-burgundy text-cream">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <SectionKicker tone="dark">{copy.eventDetails.heading}</SectionKicker>
          <p className="font-heading mt-10 max-w-5xl text-[clamp(2.4rem,5.2vw,6.4rem)] leading-[0.96] font-light text-cream">
            {copy.eventDetails.whenWhere}
          </p>
          <p className="mt-10 max-w-2xl text-base leading-[1.75] font-light text-cream/80 md:text-lg">
            {copy.eventDetails.body}
          </p>
          <p className="font-heading mt-12 max-w-3xl text-3xl leading-[1.15] font-light text-cream italic md:text-5xl">
            {copy.eventDetails.ticket}
          </p>
        </div>
      </section>

      <StyleGuideSection />

      <section className="relative min-h-[70svh] overflow-hidden bg-ink">
        <MediaFrame
          slot={mediaSlots.backgroundStudio}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[70svh]"
        />
      </section>

      <section className="bg-burgundy text-cream">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <SectionKicker tone="dark">{copy.waitlist.heading}</SectionKicker>
          <div className="mt-10">
            <WaitlistSection tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
