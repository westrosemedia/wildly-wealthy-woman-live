import { HeroCinematic } from "@/components/media-frame";
import { mediaSlots } from "@/lib/media";

/**
 * Hero film (hero.mp4) with cactus still as poster.
 * Footage only — no headline, body, CTA, quote, or lockup on the video.
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
    </section>
  );
}
