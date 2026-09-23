import { JoinWaitlistLink } from "@/components/join-waitlist";
import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

/** Cactus still, huge What if, Join the Waitlist. Wine type on the light wall. */
export function HeroOpen() {
  return (
    <section
      data-hero
      className="relative min-h-[100svh] overflow-hidden bg-cream"
    >
      <MediaFrame
        slot={mediaSlots.heroStill}
        fill
        quiet
        priority
        className="hero-living absolute inset-0 aspect-auto min-h-[100svh]"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-start px-6 pt-32 pb-16 md:justify-center md:px-12 md:pt-36 md:pb-24">
        <h1 className="quote rise max-w-[14ch] text-burgundy md:max-w-[15ch]">{copy.takeaway}</h1>
        <div className="rise-delay mt-10 md:mt-14">
          <JoinWaitlistLink href="#waitlist" />
        </div>
      </div>
    </section>
  );
}
