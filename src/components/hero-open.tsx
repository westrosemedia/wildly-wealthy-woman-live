import { HeroCinematic } from "@/components/media-frame";
import { mediaSlots } from "@/lib/media";

/**
 * Hero film (hero.mp4) with cactus still as poster.
 * Footage only — no headline, body, CTA, quote, or lockup on the video.
 * Home: muted autoplay loop. /sponsors: same file, sound if the browser allows,
 * otherwise a muted loop that unmutes on the first page gesture — no play plate.
 */
export function HeroOpen({ sound = false }: { sound?: boolean }) {
  return (
    <section data-hero className="hero-film">
      <HeroCinematic
        video={mediaSlots.heroVideo}
        still={mediaSlots.heroStill}
        sound={sound}
      />
    </section>
  );
}
