import { ParallaxPhoto } from "@/components/parallax-photo";
import { mediaSlots } from "@/lib/media";

/** Slim mountain band between The Event and Who this is for. Not a hero. */
export function MountainBreak() {
  const slot = mediaSlots.sectionBreakMountains;

  return (
    <figure
      id="section-break"
      className="section-break"
      role="separator"
      aria-label={slot.alt}
    >
      <ParallaxPhoto
        className="section-break-photo"
        src={slot.src}
        alt={slot.alt}
        position="52% 40%"
      />
      <div className="section-break-veil" aria-hidden />
    </figure>
  );
}
