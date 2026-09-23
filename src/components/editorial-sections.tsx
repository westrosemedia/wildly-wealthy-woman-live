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
    <p className={cn("kicker", tone === "dark" ? "text-cream/70" : "text-burgundy")}>
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
            "body-copy",
            tone === "dark" ? "text-cream/86" : "text-burgundy/80",
          )}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

const jackieStory = copy.story.paragraphs.slice(0, 5);
const stephanieStory = copy.story.paragraphs[5];
const melissaStory = copy.story.paragraphs[6];

/** Cream Story: Jackie essay + isolated portrait, then Stephanie / Melissa columns. */
export function StorySection() {
  return (
    <section id="the-story" className="bg-cream">
      <div className="house-wrap">
        <SectionKicker>{copy.story.heading}</SectionKicker>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-20">
          <figure className="w-full max-w-[16rem]">
            <MediaFrame slot={mediaSlots.jackie} />
          </figure>
          <CopyParagraphs className="max-w-2xl" paragraphs={jackieStory} />
        </div>

        <div className="mt-24 grid items-start gap-16 md:mt-28 md:grid-cols-2 md:gap-24">
          <article className="min-w-0">
            <h3 className="font-heading text-3xl leading-none font-light text-burgundy md:text-4xl">
              {copy.founders.stephanie.name}
            </h3>
            <p className="body-copy mt-6 text-burgundy/80">{stephanieStory}</p>
          </article>
          <article className="min-w-0">
            <h3 className="font-heading text-3xl leading-none font-light text-burgundy md:text-4xl">
              {copy.founders.melissa.name}
            </h3>
            <p className="body-copy mt-6 text-burgundy/80">{melissaStory}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

/** Why Banff: wine quote on the hotel still. Bleed, no second image in the frame. */
export function WhyBanffSection() {
  const [lead, support] = copy.whyBanff.paragraphs;

  return (
    <section
      id="why-banff"
      className="relative min-h-[100svh] overflow-hidden bg-cream"
    >
      <MediaFrame
        slot={mediaSlots.event}
        fill
        quiet
        className="absolute inset-0 aspect-auto min-h-[100svh]"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-end px-6 py-24 md:px-12 md:py-32">
        <SectionKicker>{copy.whyBanff.heading}</SectionKicker>
        <p className="quote-sm mt-8 max-w-4xl text-burgundy md:text-[clamp(2rem,4vw,3.6rem)]">
          {lead}
        </p>
        <p className="body-copy mt-8 max-w-xl text-burgundy/80">{support}</p>
      </div>
    </section>
  );
}

export function SpeakersSection({ className }: { className?: string }) {
  return (
    <section id="speakers" className={cn("bg-cream", className)}>
      <div className="house-wrap grid items-start gap-12 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-20">
        <figure className="order-2 w-full md:sticky md:top-28">
          <MediaFrame slot={mediaSlots.speakersBridgetJackie} />
          {mediaSlots.speakersBridgetJackie.caption ? (
            <figcaption className="kicker mt-4 text-burgundy">
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
          <p className="body-copy mt-10 max-w-2xl text-burgundy/80 md:text-xl">
            {copy.speakers.body}
          </p>
        </div>
      </div>
    </section>
  );
}

const founderCards = [
  copy.founders.stephanie,
  copy.founders.jackie,
  copy.founders.melissa,
] as const;

/** Sponsors: three isolated cream columns. Portrait inset, never behind type. */
export function FoundersSection() {
  return (
    <section id="founders" className="bg-cream">
      <div className="house-wrap">
        <h2 className="display max-w-3xl text-pretty text-burgundy">{copy.founders.heading}</h2>
        <div className="mt-16 grid grid-cols-1 items-start gap-x-16 gap-y-20 lg:grid-cols-3">
          {founderCards.map((founder) => (
            <article key={founder.name} className="min-w-0 space-y-6">
              <h3 className="font-heading text-3xl leading-none font-light text-burgundy md:text-4xl">
                {founder.name}
              </h3>
              <p className="body-copy text-burgundy/80">{founder.body}</p>
            </article>
          ))}
        </div>
        <p className="quote-sm mt-20 max-w-4xl text-pretty text-burgundy">{copy.founders.closer}</p>
      </div>
    </section>
  );
}
