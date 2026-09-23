import { SplitCopy, SplitPhoto, SplitRow } from "@/components/split-modules";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

const notMoney = copy.watching.beats[1].text;
const watching = copy.watching.beats[2].text;
const fortune = copy.watching.beats[0].text;
const support = `${copy.watching.beats[4].text} ${copy.watching.beats[5].text}`;

/**
 * Home opening after the cactus hero — four equal columns
 * (text | photo | text | photo). Social reach stays on /sponsors.
 */
export function HighLevelBand() {
  return (
    <section id="high-level" className="bg-[#F2EFEA]">
      <SplitRow>
        <SplitCopy tone="ink" headline={notMoney} line={support} as="h2" />
        <SplitPhoto slot={mediaSlots.jackie} />
        <SplitCopy tone="cream" headline={watching} line={fortune} as="h2" />
        <SplitPhoto slot={mediaSlots.styleGuide02} />
      </SplitRow>
    </section>
  );
}
