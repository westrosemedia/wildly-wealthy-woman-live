import { SplitCopy, SplitPhoto, SplitRow } from "@/components/split-modules";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

const fortune = copy.watching.beats[0].text;
const notMoney = copy.watching.beats[1].text;
const watching = copy.watching.beats[2].text;

/**
 * After the hero film: fortune lead, then four 1:1 tiles
 * (text | photo | text | photo). No copy on the video.
 */
export function HighLevelBand() {
  return (
    <section id="high-level" className="w-full bg-[#F2EFEA]">
      <div className="high-level-lead mx-auto max-w-[88rem] px-[var(--gutter)] pt-[clamp(2.25rem,4.5vw,3.25rem)] pb-[clamp(1.5rem,3vw,2.25rem)] md:px-12">
        <p className="font-heading max-w-3xl text-pretty text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.35] font-light text-burgundy">
          {fortune}
        </p>
      </div>
      <SplitRow>
        <SplitCopy tone="ink" headline={notMoney} as="h2" />
        <SplitPhoto slot={mediaSlots.highLevel01} />
        <SplitCopy tone="cream" headline={watching} as="h2" />
        <SplitPhoto slot={mediaSlots.highLevel02} />
      </SplitRow>
    </section>
  );
}
