import { SplitCopy, SplitPhoto, SplitRow } from "@/components/split-modules";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

const fortune = copy.watching.beats[0].text;
const notMoney = copy.watching.beats[1].text;
const watching = copy.watching.beats[2].text;

/**
 * First screen as split modules — short headline, one line, popping still.
 * Dark + cream + her photographs. If hero.mp4 exists it plays in the cactus panel.
 */
export function HeroOpen() {
  return (
    <section data-hero className="bg-[#0A0708]">
      <div className="h-[4.75rem] bg-[#4A1020] md:h-[5.25rem]" aria-hidden />
      <h1 className="sr-only">{copy.hero.title}</h1>
      <SplitRow tall>
        <SplitCopy tone="ink" headline={fortune} as="h2" />
        <SplitPhoto
          video={mediaSlots.heroVideo}
          still={mediaSlots.heroStill}
        />
        <SplitCopy tone="cream" headline={notMoney} line={watching} as="h2" />
        <SplitPhoto slot={mediaSlots.jackie} />
      </SplitRow>
    </section>
  );
}
