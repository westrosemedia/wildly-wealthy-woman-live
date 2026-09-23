import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

type Beat = (typeof copy.watching.beats)[number];
type Role = Beat["role"];

const WINE = "text-[#4A1020]";

function groupBeats(beats: readonly Beat[]) {
  const groups: { role: Role; lines: string[] }[] = [];

  for (const beat of beats) {
    const last = groups[groups.length - 1];
    const stackable = beat.role === "key" || beat.role === "stack";
    if (last && last.role === beat.role && stackable) {
      last.lines.push(beat.text);
      continue;
    }
    groups.push({ role: beat.role, lines: [beat.text] });
  }

  return groups;
}

const groups = groupBeats(copy.watching.beats);

/**
 * First scroll after the hero. Short lines at Newsreader display scale.
 * Cream field, wine type, no photograph, no wash.
 */
export function WatchingYouLive() {
  return (
    <section
      id="watching-you-live"
      data-after-hero
      className="relative isolate overflow-hidden bg-[#F2EFEA]"
    >
      <div className="mx-auto flex max-w-[88rem] flex-col gap-20 px-6 py-28 md:gap-28 md:px-12 md:py-40 lg:gap-36 lg:py-48">
        {groups.map((group, index) => (
          <WatchingGroup key={`${group.role}-${index}`} group={group} />
        ))}
      </div>
    </section>
  );
}

function WatchingGroup({
  group,
}: {
  group: { role: Role; lines: string[] };
}) {
  if (group.role === "lead") {
    return (
      <p
        className={cn(
          "font-heading max-w-[16ch] min-w-0 text-balance text-[clamp(2.35rem,6.4vw,5.4rem)] leading-[0.98] font-light tracking-[-0.035em]",
          WINE,
        )}
      >
        {group.lines[0]}
      </p>
    );
  }

  if (group.role === "key") {
    return (
      <div className="flex max-w-[20ch] min-w-0 flex-col gap-8 md:gap-10">
        {group.lines.map((line) => (
          <p
            key={line}
            className={cn(
              "font-heading text-balance text-[clamp(2.7rem,8.6vw,7.4rem)] leading-[0.92] font-light tracking-[-0.04em] italic",
              WINE,
            )}
          >
            {line}
          </p>
        ))}
      </div>
    );
  }

  if (group.role === "stack") {
    return (
      <div className="flex max-w-[22ch] min-w-0 flex-col gap-6 md:max-w-[24ch] md:gap-8">
        {group.lines.map((line) => (
          <p
            key={line}
            className={cn(
              "font-heading text-balance text-[clamp(2.55rem,7.8vw,6.8rem)] leading-[0.94] font-light tracking-[-0.04em]",
              WINE,
            )}
          >
            {line}
          </p>
        ))}
      </div>
    );
  }

  if (group.role === "close") {
    return (
      <p
        className={cn(
          "font-heading max-w-[15ch] min-w-0 text-balance text-[clamp(2.4rem,6.8vw,5.8rem)] leading-[0.98] font-light tracking-[-0.035em]",
          WINE,
        )}
      >
        {group.lines[0]}
      </p>
    );
  }

  return (
    <p
      className={cn(
        "font-heading max-w-xl min-w-0 text-pretty text-[clamp(1.35rem,2.5vw,2.05rem)] leading-[1.35] font-light tracking-[-0.02em] md:max-w-2xl",
        WINE,
      )}
    >
      {group.lines[0]}
    </p>
  );
}
