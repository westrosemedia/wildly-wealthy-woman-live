import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

const remainder = copy.watching.beats.slice(3);

/**
 * Longer watching-you-live copy at normal paragraph scale.
 * Opening headlines live in the four-column template after the hero.
 */
export function WatchingYouLive() {
  return (
    <section
      id="watching-you-live"
      data-after-hero
      className="overflow-x-clip bg-cream"
    >
      <div className="house-wrap max-w-3xl">
        {remainder.map((beat) => {
          const pull =
            beat.role === "lead" || beat.role === "key" || beat.role === "close";

          return (
            <p
              key={beat.text}
              data-watching-role={beat.role}
              className={cn(
                "text-pretty first:mt-0",
                pull
                  ? "font-heading mt-8 text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.35] font-light text-burgundy"
                  : "body-copy mt-6 text-burgundy/80",
              )}
            >
              {beat.text}
            </p>
          );
        })}
      </div>
    </section>
  );
}
