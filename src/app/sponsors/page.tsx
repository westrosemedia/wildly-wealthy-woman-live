import type { Metadata } from "next";
import type { ComponentProps, ReactNode } from "react";

import {
  CopyParagraphs,
  SectionKicker,
  Takeaway,
} from "@/components/editorial-sections";
import { JoinWaitlistLink, WaitlistSection } from "@/components/join-waitlist";
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
  const founders = [
    copy.founders.stephanie,
    copy.founders.jackie,
    copy.founders.melissa,
  ];
  const leadStats = copy.reach.figures.slice(0, 2);
  const restStats = copy.reach.figures.slice(2);

  return (
    <div>
      <Section data-hero className="min-h-[100svh] bg-ink">
        <MediaFrame
          slot={mediaSlots.heroStill}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[88rem] flex-col items-start justify-end px-6 py-20 pt-36 md:px-12 md:pb-24">
          <h1 className="font-heading rise max-w-5xl text-[3.15rem] leading-[0.96] font-light text-cream sm:text-6xl md:text-[6.6rem]">
            {copy.hero.title}
          </h1>
          <p className="rise-delay mt-8 max-w-xl text-base leading-[1.7] font-light text-ivory/88 md:text-[1.2rem]">
            {copy.hero.body}
          </p>
          <div className="rise-late mt-10">
            <JoinWaitlistLink href="#waitlist" />
          </div>
        </div>
      </Section>

      <Section className="bg-ivory">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <Takeaway className="rise" />
        </div>
      </Section>

      <Section id="why-partners" className="bg-ivory">
        <div className="mx-auto grid w-full max-w-[88rem] items-center gap-14 px-6 pb-24 md:grid-cols-[0.95fr_1.05fr] md:gap-20 md:px-12 md:pb-32">
          <MediaFrame slot={mediaSlots.event} />
          <div>
            <SectionKicker>{copy.brandPartners.heading}</SectionKicker>
            <CopyParagraphs
              className="mt-10 max-w-2xl"
              paragraphs={copy.brandPartners.paragraphs}
            />
          </div>
        </div>
      </Section>

      <Section id="founders" className="bg-ink">
        <MediaFrame
          slot={mediaSlots.stephanieJackie}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="founders-veil absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <h2 className="font-heading max-w-3xl text-4xl leading-[1.02] font-light text-cream md:text-6xl">
            {copy.founders.heading}
          </h2>
          <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-12">
            {founders.map((founder) => {
              const isJackie = founder.name === copy.founders.jackie.name;
              return (
                <article
                  key={founder.name}
                  className={cn(
                    "space-y-5 border-t border-cream/20 pt-8",
                    isJackie && "md:col-span-2",
                  )}
                >
                  <h3 className="font-heading text-3xl font-light text-cream md:text-4xl">
                    {founder.name}
                  </h3>
                  {isJackie ? (
                    <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,13rem)_1fr] md:grid-cols-[minmax(0,16rem)_1fr] md:gap-8">
                      <MediaFrame slot={mediaSlots.jackie} />
                      <p className="text-[15px] leading-[1.75] text-ivory/86">
                        {founder.body}
                      </p>
                    </div>
                  ) : (
                    <p className="text-[15px] leading-[1.75] text-ivory/86">
                      {founder.body}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
          <p className="font-heading mt-20 max-w-4xl text-2xl leading-snug font-light text-cream italic md:text-4xl">
            {copy.founders.closer}
          </p>
        </div>
      </Section>

      <Section id="reach" className="min-h-[100svh] bg-ink">
        <MediaFrame
          slot={mediaSlots.sponsors}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="absolute inset-0 bg-ink/38" />
        <div className="hero-veil absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <h2 className="font-heading text-5xl leading-[0.96] font-light text-cream md:text-7xl">
            {copy.reach.heading}
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-[1.75] font-light text-ivory/84 md:text-lg">
            {copy.reach.combined}
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-2">
            {leadStats.map((stat) => (
              <article key={stat.figure + stat.label} className="space-y-4">
                <p className="font-heading text-5xl leading-none font-light text-ivory md:text-7xl">
                  {stat.figure}
                </p>
                <p className="max-w-xs text-sm leading-[1.65] text-cream/68">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {restStats.map((stat) => (
              <article key={stat.figure + stat.label} className="space-y-4">
                <p className="font-heading text-5xl leading-none font-light text-ivory md:text-7xl">
                  {stat.figure}
                </p>
                <p className="max-w-xs text-sm leading-[1.65] text-cream/68">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-16 max-w-3xl text-base leading-[1.75] font-light text-ivory/84 md:text-xl">
            {copy.reach.who}
          </p>
        </div>
      </Section>

      <Section className="bg-ivory">
        <div className="mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
          <figure>
            <MediaFrame slot={mediaSlots.eventRoom} />
            {mediaSlots.eventRoom.caption ? (
              <figcaption className="mt-4 text-[10px] tracking-[0.22em] text-mink uppercase">
                {mediaSlots.eventRoom.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      </Section>

      <Section id="style-guide" className="bg-snow">
        <StyleGuideBoard />
      </Section>

      <Section id="why-sponsor" className="bg-ivory">
        <div className="mx-auto grid w-full max-w-[88rem] items-center gap-12 px-6 py-28 md:grid-cols-[1.15fr_0.85fr] md:gap-20 md:px-12 md:py-36">
          <figure>
            <MediaFrame slot={mediaSlots.sponsors} />
          </figure>
          <div>
            <SectionKicker>{copy.whySponsor.heading}</SectionKicker>
            <p className="font-heading mt-8 max-w-xl text-3xl leading-[1.12] font-light text-chocolate italic md:text-5xl">
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

      <Section id="waitlist-slide" className="bg-ivory">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col items-start justify-center px-6 py-24 md:px-12 md:py-32">
          <SectionKicker>{copy.waitlist.heading}</SectionKicker>
          <div className="mt-10">
            <WaitlistSection />
          </div>
        </div>
      </Section>
    </div>
  );
}
