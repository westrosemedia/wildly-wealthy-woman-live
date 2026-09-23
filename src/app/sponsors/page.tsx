import type { Metadata } from "next";
import type { ReactNode } from "react";

import { JoinWaitlistLink, WaitlistSection } from "@/components/join-waitlist";
import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sponsors",
};

function Slide({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-[100svh] snap-start flex-col justify-center overflow-hidden bg-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}

function SlideKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.42em] text-lip uppercase">{children}</p>
  );
}

export default function SponsorsPage() {
  const founders = [
    copy.founders.stephanie,
    copy.founders.jackie,
    copy.founders.melissa,
  ];

  return (
    <div className="snap-y snap-mandatory">
      <Slide>
        <MediaFrame
          slot={mediaSlots.heroStill}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col items-start justify-end gap-6 px-5 py-20 pt-36 md:px-10">
          <h1 className="font-heading max-w-5xl text-5xl leading-[0.92] text-cream sm:text-6xl md:text-[6rem]">
            {copy.hero.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ivory/90 md:text-xl">
            {copy.hero.body}
          </p>
          <div className="w-full">
            <JoinWaitlistLink href="#waitlist" />
          </div>
        </div>
      </Slide>

      <Slide className="bg-espresso">
        <div className="mx-auto grid w-full max-w-[92rem] items-center gap-12 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <MediaFrame slot={mediaSlots.eventPhoenix} />
          <div className="space-y-6">
            <SlideKicker>{copy.event.whenWhere}</SlideKicker>
            <h2 className="font-heading text-4xl leading-[0.95] text-cream md:text-6xl">
              {copy.event.title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ivory/88 md:text-lg">
              {copy.event.body}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ivory/88 md:text-lg">
              {copy.event.movement}
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-cream/75 md:text-base">
              {copy.event.tickets}
            </p>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 md:px-10">
          <SlideKicker>{copy.speakers.heading}</SlideKicker>
          <div className="mt-8 grid gap-8 border-t border-cream/15 pt-10 md:grid-cols-3">
            {copy.speakers.names.map((name) => (
              <h3
                key={name}
                className="font-heading text-3xl leading-tight text-cream md:text-4xl"
              >
                {name}
              </h3>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ivory/88 md:text-xl">
            {copy.speakers.body}
          </p>
        </div>
      </Slide>

      <Slide className="bg-velvet">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-16 md:px-10">
          <h2 className="font-heading max-w-3xl text-4xl leading-[0.95] text-cream md:text-6xl">
            {copy.founders.heading}
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-10">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="space-y-4 border-t border-cream/20 pt-6"
              >
                <h3 className="font-heading text-3xl text-cream md:text-4xl">
                  {founder.name}
                </h3>
                <p className="text-sm leading-relaxed text-ivory/85 md:text-base">
                  {founder.body}
                </p>
              </article>
            ))}
          </div>
          <p className="font-heading mt-12 max-w-4xl text-2xl leading-snug text-ivory md:text-3xl">
            {copy.founders.closer}
          </p>
        </div>
      </Slide>

      <Slide className="bg-wine">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-16 md:px-10">
          <h2 className="font-heading text-4xl text-cream md:text-6xl">
            {copy.reach.heading}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ivory/88 md:text-lg">
            {copy.reach.combined}
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {copy.reach.figures.map((stat) => (
              <article key={stat.figure + stat.label} className="space-y-3">
                <p className="font-heading text-5xl leading-none text-ivory md:text-7xl">
                  {stat.figure}
                </p>
                <p className="max-w-xs text-sm leading-relaxed text-cream/80">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ivory/88 md:text-xl">
            {copy.reach.who}
          </p>
        </div>
      </Slide>

      <Slide>
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 md:px-10">
          <SlideKicker>{copy.tickets.heading}</SlideKicker>
          <p className="font-heading mt-8 max-w-4xl text-3xl leading-tight text-cream md:text-6xl">
            {copy.tickets.range}
          </p>
        </div>
      </Slide>

      <Slide className="bg-espresso">
        <div className="mx-auto flex w-full max-w-[92rem] flex-col justify-center px-5 py-24 md:px-10">
          <h2 className="font-heading text-4xl text-cream md:text-6xl">
            {copy.whySponsor.heading}
          </h2>
          <p className="font-heading mt-8 max-w-4xl text-2xl leading-snug text-ivory md:text-5xl">
            {copy.whySponsor.body}
          </p>
        </div>
      </Slide>

      <Slide>
        <MediaFrame
          slot={mediaSlots.aboutJackie}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[100svh]"
        />
        <div className="slide-veil absolute inset-0" />
        <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col items-start gap-6 px-5 py-24 pt-36 md:px-10">
          <p className="font-heading max-w-4xl text-3xl leading-tight text-cream md:text-6xl">
            {copy.closing.body}
          </p>
        </div>
      </Slide>

      <Slide id="waitlist-slide" className="bg-chocolate">
        <div className="mx-auto flex w-full max-w-[92rem] flex-col items-start justify-center gap-8 px-5 py-24 pt-36 md:px-10">
          <WaitlistSection />
        </div>
      </Slide>
    </div>
  );
}
