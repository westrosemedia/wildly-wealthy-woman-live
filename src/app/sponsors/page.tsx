import type { Metadata } from "next";
import type { ComponentProps, ReactNode } from "react";

import {
  BanffStill,
  CopyParagraphs,
  FoundersSection,
  SectionKicker,
} from "@/components/editorial-sections";
import { HeroOpen } from "@/components/hero-open";
import { WaitlistSection } from "@/components/join-waitlist";
import { MediaFrame } from "@/components/media-frame";
import { StyleGuideBoard } from "@/components/style-guide-section";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sponsors",
};

function Section({
  children,
  className,
  id,
  ...props
}: {
  children: ReactNode;
  className?: string;
  id?: string;
} & ComponentProps<"section">) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default function SponsorsPage() {
  const leadStats = copy.reach.figures.slice(0, 2);
  const restStats = copy.reach.figures.slice(2);

  return (
    <div>
      <HeroOpen cinematic={false} />

      <BanffStill />

      <Section id="why-partners" className="bg-cream">
        <div className="mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <SectionKicker>{copy.brandPartners.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-2xl"
            paragraphs={copy.brandPartners.paragraphs}
          />
        </div>
      </Section>

      <figure className="relative min-h-[80svh] overflow-hidden bg-ink">
        <MediaFrame
          slot={mediaSlots.stephanieJackie}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[80svh]"
        />
      </figure>

      <FoundersSection />

      <figure className="relative min-h-[80svh] overflow-hidden bg-ink">
        <MediaFrame
          slot={mediaSlots.sponsors}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[80svh]"
        />
      </figure>

      <Section id="reach" className="bg-cream">
        <div className="mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <h2 className="font-heading text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-light text-burgundy">
            {copy.reach.heading}
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-[1.75] font-light text-burgundy/80 md:text-lg">
            {copy.reach.combined}
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-2">
            {leadStats.map((stat) => (
              <article key={stat.figure + stat.label} className="space-y-4">
                <p className="font-heading text-[clamp(3.4rem,8vw,7.5rem)] leading-none font-light text-burgundy">
                  {stat.figure}
                </p>
                <p className="max-w-xs text-sm leading-[1.65] text-burgundy/70">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {restStats.map((stat) => (
              <article key={stat.figure + stat.label} className="space-y-4">
                <p className="font-heading text-[clamp(2.8rem,6vw,5.5rem)] leading-none font-light text-burgundy">
                  {stat.figure}
                </p>
                <p className="max-w-xs text-sm leading-[1.65] text-burgundy/70">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-16 max-w-3xl text-base leading-[1.75] font-light text-burgundy/80 md:text-xl">
            {copy.reach.who}
          </p>
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <figure>
            <MediaFrame slot={mediaSlots.eventRoom} />
            {mediaSlots.eventRoom.caption ? (
              <figcaption className="mt-4 text-[10px] tracking-[0.22em] text-burgundy uppercase">
                {mediaSlots.eventRoom.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      </Section>

      <Section id="style-guide" className="bg-cream">
        <StyleGuideBoard />
      </Section>

      <Section id="why-sponsor" className="bg-burgundy text-cream">
        <div className="mx-auto grid w-full max-w-[88rem] items-center gap-12 px-6 py-28 md:grid-cols-[1.15fr_0.85fr] md:gap-20 md:px-12 md:py-36">
          <figure>
            <MediaFrame slot={mediaSlots.sponsors} />
          </figure>
          <div>
            <SectionKicker tone="dark">{copy.whySponsor.heading}</SectionKicker>
            <p className="font-heading mt-8 max-w-xl text-3xl leading-[1.12] font-light text-cream italic md:text-5xl">
              {copy.whySponsor.body}
            </p>
          </div>
        </div>
      </Section>

      <Section id="the-invitation" className="min-h-[80svh] bg-ink">
        <MediaFrame
          slot={mediaSlots.aboutJackie}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[80svh]"
        />
        <div className="slide-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[80svh] w-full max-w-[88rem] flex-col items-start justify-end px-6 py-24 pt-36 md:px-12">
          <SectionKicker tone="dark">{copy.invitation.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-3xl"
            tone="dark"
            paragraphs={copy.invitation.paragraphs}
          />
          <p className="font-heading mt-16 max-w-4xl text-3xl leading-[1.12] font-light text-cream md:text-6xl">
            {copy.closing.body}
          </p>
        </div>
      </Section>

      <Section id="waitlist-slide" className="bg-burgundy text-cream">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col items-start justify-center px-6 py-24 md:px-12 md:py-32">
          <SectionKicker tone="dark">{copy.waitlist.heading}</SectionKicker>
          <div className="mt-10">
            <WaitlistSection tone="dark" />
          </div>
        </div>
      </Section>
    </div>
  );
}
