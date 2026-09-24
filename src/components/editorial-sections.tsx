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
            <div className="grid items-start gap-8 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] sm:gap-10">
              <figure className="w-full max-w-[16rem]">
                <MediaFrame slot={mediaSlots.stephanie} />
              </figure>
              <div className="min-w-0">
                <h3 className="font-heading text-3xl leading-none font-light text-burgundy md:text-4xl">
                  {copy.founders.stephanie.name}
                </h3>
                <p className="body-copy mt-6 text-burgundy/80">{stephanieStory}</p>
              </div>
            </div>
          </article>
          <article className="min-w-0">
            <div className="grid items-start gap-8 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] sm:gap-10">
              <figure className="w-full max-w-[16rem]">
                <MediaFrame slot={mediaSlots.melissa} />
              </figure>
              <div className="min-w-0">
                <h3 className="font-heading text-3xl leading-none font-light text-burgundy md:text-4xl">
                  {copy.founders.melissa.name}
                </h3>
                <p className="body-copy mt-6 text-burgundy/80">{melissaStory}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/**
 * Why Banff: hotel still as a photo plate. Body never sits on the snow.
 * Desktop: cream copy beside the image. Mobile: cream copy below.
 */
export function WhyBanffSection() {
  return (
    <section id="why-banff" className="bg-cream">
      <div className="grid items-stretch lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)]">
        <figure className="relative min-h-[62svh] overflow-hidden bg-espresso md:min-h-[78svh] lg:min-h-[88svh]">
          <MediaFrame
            slot={mediaSlots.event}
            fill
            quiet
            className="absolute inset-0 aspect-auto h-full min-h-[62svh]"
          />
        </figure>
        <div className="flex flex-col justify-center bg-cream px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <SectionKicker>{copy.whyBanff.heading}</SectionKicker>
          <CopyParagraphs
            className="mt-10 max-w-xl"
            paragraphs={copy.whyBanff.paragraphs}
          />
        </div>
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

/**
 * Sponsors deck: four named seats. Empty until Stephanie fills prices/perks.
 * Platinum is wine-filled; the rest stay cream with a hairline. Not a pricing grid.
 */
export function SponsorshipPackagesSection() {
  return (
    <section id="sponsorship-packages" className="bg-cream">
      <div className="house-wrap">
        <h2 className="font-heading text-5xl leading-[0.96] font-light text-pretty text-burgundy md:text-7xl">
          {copy.packages.heading}
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {copy.packages.tiers.map((tier) => {
            const elevated = tier === "Platinum";
            return (
              <article
                key={tier}
                className={cn(
                  "flex min-h-[16.5rem] flex-col justify-between px-7 py-8 md:min-h-[19rem] md:px-8 md:py-10",
                  elevated
                    ? "border border-burgundy bg-burgundy text-cream"
                    : "border border-burgundy/22 bg-cream text-burgundy",
                )}
              >
                <h3 className="font-heading text-3xl leading-none font-light md:text-4xl">
                  {tier}
                </h3>
                <p
                  className={cn(
                    "text-sm font-light tracking-[0.04em]",
                    elevated ? "text-cream/58" : "text-burgundy/42",
                  )}
                >
                  {copy.packages.empty}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Sponsors: three isolated cream columns. Portraits stay on home Story only. */
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
