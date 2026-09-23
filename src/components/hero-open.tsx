import { JoinWaitlistLink } from "@/components/join-waitlist";
import { HeroCinematic, MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

export function HeroOpen({
  cinematic = true,
}: {
  cinematic?: boolean;
}) {
  return (
    <section data-hero className="relative min-h-[100svh] overflow-hidden bg-cream">
      {cinematic ? (
        <HeroCinematic
          video={mediaSlots.heroVideo}
          still={mediaSlots.heroStill}
          className="hero-living absolute inset-0 aspect-auto min-h-[100svh]"
        />
      ) : (
        <MediaFrame
          slot={mediaSlots.heroStill}
          fill
          quiet
          className="hero-living absolute inset-0 aspect-auto min-h-[100svh]"
        />
      )}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-start px-6 pt-32 pb-16 md:justify-center md:px-12 md:pt-36 md:pb-24">
        <h1 className="font-heading rise max-w-[19ch] text-[clamp(2.35rem,5.6vw,7.4rem)] leading-[0.94] font-light text-burgundy italic">
          {copy.takeaway}
        </h1>
        <div className="rise-delay mt-10 md:mt-14">
          <JoinWaitlistLink href="#waitlist" />
        </div>
      </div>
    </section>
  );
}
