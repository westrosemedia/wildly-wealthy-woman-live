import { QuietAnchor } from "@/components/quiet-link";
import { HeroCinematic } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

/**
 * Locked cactus still. Optional hero.mp4 when the file arrives.
 * No giant What if on the photo. Video not received yet.
 */
export function HeroOpen() {
  return (
    <section
      data-hero
      className="relative min-h-[100svh] overflow-x-clip overflow-hidden bg-cream"
    >
      <HeroCinematic
        video={mediaSlots.heroVideo}
        still={mediaSlots.heroStill}
        className="absolute inset-0 aspect-auto min-h-[100svh] w-full"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full min-w-0 max-w-[88rem] flex-col justify-end px-6 pt-32 pb-16 md:px-12 md:pb-24">
        <h1 className="font-heading max-w-[16ch] text-[clamp(1.6rem,3.2vw,2.35rem)] leading-[1.12] font-light text-burgundy">
          {copy.hero.title}
        </h1>
        <p className="mt-4 max-w-md text-[1.05rem] leading-[1.65] font-light text-burgundy/80 md:text-lg">
          {copy.hero.body}
        </p>
        <div className="mt-8">
          <QuietAnchor href="#waitlist" className="text-burgundy">
            {copy.hero.cta}
          </QuietAnchor>
        </div>
      </div>
    </section>
  );
}
