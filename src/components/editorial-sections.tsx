import type { ReactNode } from "react";

import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";
import { cn } from "@/lib/utils";

export function SectionKicker({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "text-[10px] tracking-[0.32em] uppercase",
        tone === "dark" ? "text-cream/60" : "text-burgundy",
      )}
    >
      {children}
    </p>
  );
}

export function CopyParagraphs({
  paragraphs,
  className,
  tone = "light",
}: {
  paragraphs: readonly string[];
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("space-y-6", className)}>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className={cn(
            "text-base leading-[1.75] font-light md:text-lg",
            tone === "dark" ? "text-cream/86" : "text-burgundy/80",
          )}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function Takeaway({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "font-quote max-w-4xl text-3xl leading-[1.15] font-light italic md:text-5xl",
        tone === "dark" ? "text-cream" : "text-burgundy",
        className,
      )}
    >
      {copy.takeaway}
    </p>
  );
}

export function BeliefLine({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "font-quote max-w-3xl text-2xl leading-[1.2] font-light text-burgundy italic md:text-[2.35rem]",
        className,
      )}
    >
      {copy.hero.body}
    </p>
  );
}

/** Banff Springs still — photograph only. Quote lives in the hero / cream panels. */
export function BanffStill({ className }: { className?: string }) {
  return (
    <figure
      id="takeaway"
      className={cn("relative min-h-[88svh] overflow-hidden bg-ink", className)}
    >
      <MediaFrame
        slot={mediaSlots.event}
        fill
        quiet
        className="absolute inset-0 aspect-auto min-h-[88svh]"
      />
    </figure>
  );
}

/** @deprecated Use BanffStill — quote is no longer set on the photograph. */
export function BanffTakeaway({ className }: { className?: string }) {
  return <BanffStill className={className} />;
}

export function SpeakersSection({ className }: { className?: string }) {
  return (
    <section
      id="speakers"
      className={cn("relative overflow-hidden bg-cream", className)}
    >
      <div className="mx-auto grid w-full max-w-[88rem] items-start gap-12 px-6 py-24 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-20 md:px-12 md:py-32">
        <figure className="order-2 w-full md:sticky md:top-28">
          <MediaFrame slot={mediaSlots.speakersBridgetJackie} />
          {mediaSlots.speakersBridgetJackie.caption ? (
            <figcaption className="mt-4 text-[10px] tracking-[0.22em] text-burgundy uppercase">
              {mediaSlots.speakersBridgetJackie.caption}
            </figcaption>
          ) : null}
        </figure>
        <div className="order-1 md:order-2">
          <SectionKicker>{copy.speakers.heading}</SectionKicker>
          <div className="mt-8 space-y-3 border-t border-burgundy/15 pt-10">
            {copy.speakers.names.map((name) => (
              <h3
                key={name}
                className="font-heading text-4xl leading-[1.05] font-light text-burgundy md:text-6xl"
              >
                {name}
              </h3>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-base leading-[1.75] text-burgundy/80 md:text-xl">
            {copy.speakers.body}
          </p>
        </div>
      </div>
    </section>
  );
}

const jackieStory = copy.story.paragraphs.slice(0, 5);
const partnerStory = copy.story.paragraphs.slice(5);

export function StorySection() {
  return (
    <section id="the-story" className="scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-[88rem] px-6 pt-24 md:px-12 md:pt-32">
        <BeliefLine />
      </div>
      <div className="mx-auto grid max-w-[88rem] items-start gap-12 px-6 py-24 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-20 md:px-12 md:py-32">
        <figure className="w-full max-w-[18rem] md:sticky md:top-28">
          <MediaFrame slot={mediaSlots.jackie} />
        </figure>
        <div>
          <SectionKicker>{copy.story.heading}</SectionKicker>
          <CopyParagraphs className="mt-10 max-w-2xl" paragraphs={jackieStory} />
        </div>
      </div>

      <figure className="relative min-h-[70svh] overflow-hidden bg-ink">
        <MediaFrame
          slot={mediaSlots.stephanieJackie}
          fill
          quiet
          className="absolute inset-0 aspect-auto min-h-[70svh]"
        />
      </figure>

      <div className="mx-auto max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
        <CopyParagraphs className="max-w-2xl" paragraphs={partnerStory} />
      </div>
    </section>
  );
}

export function FoundersSection() {
  const founders = [
    copy.founders.stephanie,
    copy.founders.jackie,
    copy.founders.melissa,
  ];

  return (
    <section id="founders" className="scroll-mt-28 bg-cream">
      <div className="mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32">
        <h2 className="font-heading max-w-3xl text-4xl leading-[1.02] font-light text-burgundy md:text-6xl">
          {copy.founders.heading}
        </h2>
        <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-12">
          {founders.map((founder) => {
            const isJackie = founder.name === copy.founders.jackie.name;
            return (
              <article
                key={founder.name}
                className={cn(
                  "space-y-5 border-t border-burgundy/20 pt-8",
                  isJackie && "md:col-span-2",
                )}
              >
                <h3 className="font-heading text-3xl font-light text-burgundy md:text-4xl">
                  {founder.name}
                </h3>
                {isJackie ? (
                  <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,13rem)_1fr] md:grid-cols-[minmax(0,16rem)_1fr] md:gap-8">
                    <MediaFrame slot={mediaSlots.jackie} />
                    <p className="text-[15px] leading-[1.75] text-burgundy/80">
                      {founder.body}
                    </p>
                  </div>
                ) : (
                  <p className="text-[15px] leading-[1.75] text-burgundy/80">
                    {founder.body}
                  </p>
                )}
              </article>
            );
          })}
        </div>
        <p className="font-heading mt-20 max-w-4xl text-2xl leading-snug font-light text-burgundy italic md:text-4xl">
          {copy.founders.closer}
        </p>
      </div>
    </section>
  );
}
