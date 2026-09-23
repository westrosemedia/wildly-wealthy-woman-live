import { copy } from "@/lib/copy";

const remainder = copy.watching.beats.slice(3);

/**
 * Longer watching-you-live copy at normal paragraph scale.
 * Opening headlines live in the four-column template after the hero.
 */
export function WatchingYouLive() {
  return (
    <section id="watching-you-live" className="bg-[#F2EFEA]">
      <div className="house-wrap max-w-3xl">
        {remainder.map((beat) => (
          <p
            key={beat.text}
            data-watching-role={beat.role}
            className="body-copy mt-6 first:mt-0 text-burgundy/80"
          >
            {beat.text}
          </p>
        ))}
      </div>
    </section>
  );
}
