import { copy } from "@/lib/copy";

const remainder = copy.watching.beats.slice(3);

/**
 * Paragraph-scale watching copy after the four-column band.
 * Opening headlines live in the four-column cells. Human type size.
 */
export function WatchingYouLive() {
  return (
    <section
      id="watching-you-live"
      data-after-hero
      className="overflow-x-clip bg-cream"
    >
      <div className="house-wrap max-w-3xl">
        {remainder.map((beat) => (
          <p
            key={beat.text}
            data-watching-role={beat.role}
            className="body-copy mt-6 text-pretty text-burgundy/80 first:mt-0"
          >
            {beat.text}
          </p>
        ))}
      </div>
    </section>
  );
}
