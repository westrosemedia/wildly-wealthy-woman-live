import { SplitCopy, SplitPhoto, SplitRow } from "@/components/split-modules";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

const notMoney = copy.watching.beats[1].text;
const watching = copy.watching.beats[2].text;
const fortune = copy.watching.beats[0].text;
const support = `${copy.watching.beats[4].text} ${copy.watching.beats[5].text}`;

/**
 * Home opening after the cactus hero — Stephanie’s two templates only.
 * Module A: four equal columns (text | photo | text | photo).
 * Module B: full-bleed burgundy stats. No fake press logos.
 */
export function HighLevelBand() {
  return (
    <>
      <section id="high-level" className="bg-[#F2EFEA]">
        <SplitRow>
          <SplitCopy tone="ink" headline={notMoney} line={support} as="h2" />
          <SplitPhoto slot={mediaSlots.jackie} />
          <SplitCopy tone="cream" headline={watching} line={fortune} as="h2" />
          <SplitPhoto slot={mediaSlots.styleGuide02} />
        </SplitRow>
      </section>

      <section
        id="reach-home"
        className="bg-[#4A1020] text-[#F2EFEA]"
        style={{ backgroundColor: "#4A1020", color: "#F2EFEA" }}
      >
        <div className="mx-auto flex max-w-[88rem] flex-col items-center px-6 py-24 md:px-12 md:py-36 lg:py-44">
          <p className="font-heading text-center text-[1.15rem] font-light tracking-[0.04em] text-[#F2EFEA] italic md:text-[1.35rem]">
            {copy.title}
          </p>
          <div className="mt-16 grid w-full grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-8 md:mt-24 md:gap-12">
            {copy.reach.headline.map((stat) => (
              <article key={stat.figure} className="text-center">
                <p className="font-heading text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.88] font-light tracking-[-0.045em] text-[#F2EFEA]">
                  {stat.figure}
                </p>
                <p className="mt-5 text-[0.95rem] leading-snug font-light text-[#F2EFEA] md:text-[1.05rem]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
