import type { MediaSlot } from "@/lib/media";
import { cn } from "@/lib/utils";
import { ParallaxPhoto } from "@/components/parallax-photo";

/**
 * Thin full-bleed photo quote strip.
 * Scroll-driven transform parallax (no background-attachment:fixed).
 * Reduced motion: static cover.
 */
export function QuoteBand({
  slot,
  quote,
  id,
  size = "long",
  position = "50% 42%",
}: {
  slot: MediaSlot;
  quote: string;
  id?: string;
  size?: "long" | "short";
  position?: string;
}) {
  return (
    <section id={id} className="quote-band" aria-label="Quote">
      <ParallaxPhoto
        className="quote-band-photo"
        src={slot.src}
        alt={slot.alt}
        position={position}
      />
      <div className="quote-band-veil" aria-hidden />
      <blockquote className="quote-band-copy">
        <p
          className={cn(
            "text-pretty",
            size === "short" ? "quote-band-line" : "quote-band-takeaway",
          )}
        >
          {quote}
        </p>
      </blockquote>
    </section>
  );
}
