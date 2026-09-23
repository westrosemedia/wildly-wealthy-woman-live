import type { Metadata } from "next";

import {
  CopyParagraphs,
  SectionKicker,
  SpeakersSection,
  StorySection,
  WhyBanffSection,
} from "@/components/editorial-sections";
import { HeroOpen } from "@/components/hero-open";
import { WaitlistSection } from "@/components/join-waitlist";
import { MediaFrame } from "@/components/media-frame";
import { StyleGuideSection } from "@/components/style-guide-section";
import { WatchingYouLive } from "@/components/watching-you-live";
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


      <WatchingYouLive />

      <section id="the-event" className="bg-cream">
        <div className="house-wrap">
          <SectionKicker>{copy.event.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-2xl"
            paragraphs={copy.event.paragraphs}
          />
        </div>
      </section>

      <section id="who-this-is-for" className="bg-cream">
        <div className="house-wrap">
          <SectionKicker>{copy.whoThisIsFor.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-2xl"
            paragraphs={copy.whoThisIsFor.paragraphs}
          />
        </div>
      </section>

      <StorySection />

      <WhyBanffSection />

      <section id="the-bigger-mission" className="bg-cream">
        <div className="house-wrap grid min-w-0 items-start gap-12 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-20">
          <figure className="w-full min-w-0">
            <MediaFrame slot={mediaSlots.backgroundFur} />
          </figure>
          <div className="min-w-0">
            <SectionKicker>{copy.mission.heading}</SectionKicker>
            <CopyParagraphs
              className="mt-10 max-w-2xl"
              paragraphs={copy.mission.paragraphs}
            />
          </div>
        </div>
      </section>

      <SpeakersSection />

      <section id="event-details" className="bg-cream">
        <div className="house-wrap grid min-w-0 items-start gap-12 md:grid-cols-2 md:gap-20">
          <div className="min-w-0">
            <SectionKicker>{copy.eventDetails.heading}</SectionKicker>
            <p className="display mt-8 max-w-xl text-pretty text-burgundy">
              {copy.eventDetails.whenWhere}
            </p>
            <p className="body-copy mt-8 max-w-xl text-burgundy/80">
              {copy.eventDetails.body}
            </p>
            <p className="quote-sm mt-10 max-w-xl text-pretty text-burgundy">
              {copy.eventDetails.ticket}
            </p>
          </div>
          <figure className="min-w-0">
            <MediaFrame slot={mediaSlots.eventRoom} />
            {mediaSlots.eventRoom.caption ? (
              <figcaption className="kicker mt-4 text-burgundy">
                {mediaSlots.eventRoom.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      </section>

      <StyleGuideSection />

      <section className="bg-cream">
        <div className="house-wrap">
          <SectionKicker>{copy.waitlist.heading}</SectionKicker>
          <div className="mt-10">
            <WaitlistSection />
          </div>
        </div>
      </section>
    </>
  );
}
