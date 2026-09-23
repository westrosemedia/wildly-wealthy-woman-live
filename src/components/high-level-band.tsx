import { JoinWaitlistLink } from "@/components/join-waitlist";
import { SplitCopy, SplitPhoto, SplitRow } from "@/components/split-modules";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

/**
 * High-level event facts after the hero.
 * Social reach stays on /sponsors — no wine stats band on home.
 */
export function HighLevelBand() {
  return (
    <section id="the-event" className="bg-[#F2EFEA]">
      <SplitRow>
        <SplitCopy
          tone="ink"
          headline={copy.eventDetails.whenWhere}
          line={copy.eventDetails.body}
          as="h2"
        />
        <SplitPhoto slot={mediaSlots.banffSprings} />
        <SplitCopy
          tone="cream"
          headline={copy.eventDetails.ticket}
          as="h2"
          action={<JoinWaitlistLink />}
        />
        <SplitPhoto slot={mediaSlots.styleGuide02} />
      </SplitRow>
    </section>
  );
}
