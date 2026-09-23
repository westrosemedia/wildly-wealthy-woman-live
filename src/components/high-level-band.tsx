import { JoinWaitlistLink } from "@/components/join-waitlist";
import { SplitCopy, SplitPhoto, SplitRow } from "@/components/split-modules";
import { copy } from "@/lib/copy";
import { mediaSlots } from "@/lib/media";

/**
 * High-level event modules, then a solid burgundy stats field.
 * No press logos. No event essay.
 */
export function HighLevelBand() {
  return (
    <>
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

      <section
        id="reach"
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
