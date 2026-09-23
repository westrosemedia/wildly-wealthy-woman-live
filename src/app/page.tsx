import type { Metadata } from "next";

import {
  BanffTakeaway,
  CopyParagraphs,
  SectionKicker,
  SpeakersSection,
  StorySection,
} from "@/components/editorial-sections";
import { JoinWaitlistLink, WaitlistSection } from "@/components/join-waitlist";
import { HeroCinematic, MediaFrame } from "@/components/media-frame";
import { StyleGuideSection } from "@/components/style-guide-section";
import { TicketCta } from "@/components/ticket-cta";
import { VenueAddress } from "@/components/venue-address";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
};

export default function Home() {
  return (
    <>
      <section data-hero className="relative min-h-[100svh] overflow-hidden bg-ink">
        <HeroCinematic
          video={mediaSlots.heroVideo}
          still={mediaSlots.heroStill}
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-end px-6 pb-16 pt-36 md:px-12 md:pb-24">
          <VenueAddress className="rise text-[10px] tracking-[0.3em] text-cream/70 uppercase" />
          <h1 className="font-heading rise-delay mt-7 max-w-5xl text-[3.15rem] leading-[0.96] font-light text-cream sm:text-6xl md:text-[6.4rem]">
            {copy.hero.title}
          </h1>
          <p className="rise-late mt-8 max-w-xl text-base leading-[1.7] font-light text-ivory/88 md:text-[1.2rem]">
            {copy.hero.body}
          </p>
          <div className="rise-late mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            <JoinWaitlistLink href="#waitlist" />
            <TicketCta />
          </div>
        </div>
      </section>

      <StorySection />

      <section id="the-event" className="bg-snow">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <SectionKicker>{copy.event.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-2xl"
            paragraphs={copy.event.paragraphs}
          />
        </div>
      </section>

      <section id="why-banff" className="bg-ivory">
        <BanffTakeaway />
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

      <section id="event-details" className="bg-ivory">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <SectionKicker>{copy.eventDetails.heading}</SectionKicker>
          <p className="font-heading mt-8 max-w-4xl text-3xl leading-[1.12] font-light text-chocolate md:text-6xl">
            {copy.eventDetails.whenWhere}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-[1.75] font-light text-chocolate/80 md:text-lg">
            {copy.eventDetails.body}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-[1.75] font-light text-chocolate/80 md:text-lg">
            {copy.eventDetails.ticket}
          </p>
        </div>
      </section>

      <StyleGuideSection />

      <section className="relative min-h-[80svh] overflow-hidden bg-ink">
        <MediaFrame
          slot={mediaSlots.backgroundStudio}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[80svh]"
        />
        <div className="studio-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-[88rem] flex-col justify-end px-6 py-24 md:px-12 md:py-32">
          <SectionKicker tone="dark">{copy.waitlist.heading}</SectionKicker>
          <div className="mt-10">
            <WaitlistSection tone="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
