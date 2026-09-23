import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

/**
 * Stephanie’s watching-you-live copy on the cream canvas.
 * Wine type only. No photograph — Jackie’s portrait lives in The Story.
 */
export function WatchingYouLive() {
  return (
    <section id="watching-you-live" className="bg-cream">
      <div className="house-wrap max-w-4xl">
        {copy.watching.beats.map((beat) => {
          const display =
            beat.role === "lead" || beat.role === "key" || beat.role === "close"
              ? "quote-sm"
              : "body-copy";
          return (
            <p
              key={beat.text}
              data-watching-role={beat.role}
              className={cn(
                display,
                "mt-6 first:mt-0 text-burgundy",
                display === "body-copy" && "text-burgundy/80",
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
