import { SplitCopy, SplitPhoto, SplitRow } from "@/components/split-modules";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

const notMoney = copy.watching.beats[1].text;
const watching = copy.watching.beats[2].text;
const fortune = copy.watching.beats[0].text;

/**
 * Home four-column band: text | photo | text | photo.
 * Unique stills only. Social reach stays on /sponsors.
 */
export function HighLevelBand() {
  return (
    <section id="high-level" className="bg-[#F2EFEA]">
      <SplitRow>
        <SplitCopy tone="ink" headline={notMoney} as="h2" />
        <SplitPhoto slot={mediaSlots.highLevel01} />
        <SplitCopy tone="cream" headline={watching} line={fortune} as="h2" />
        <SplitPhoto slot={mediaSlots.highLevel02} />
      </SplitRow>
    </section>
  );
}
