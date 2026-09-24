import type { MediaSlot } from "@/lib/media";

/**
 * Thin full-bleed photo quote strip.
 * Desktop: background-attachment fixed. Mobile / reduced motion: static cover.
 */
export function QuoteBand({
  slot,
  quote,
  id,
  position = "50% 42%",
}: {
  slot: MediaSlot;
  quote: string;
  id?: string;
  position?: string;
}) {
  return (
    <section id={id} className="quote-band" aria-label="Quote">
      <div
        className="quote-band-photo"
        style={{
          backgroundImage: `url(${slot.src})`,
          backgroundPosition: position,
        }}
        role="img"
        aria-label={slot.alt}
      />
      <div className="quote-band-veil" aria-hidden />
      <blockquote className="quote-band-copy">
        <p className="quote-band-takeaway text-pretty">{quote}</p>
      </blockquote>
    </section>
  );
}
