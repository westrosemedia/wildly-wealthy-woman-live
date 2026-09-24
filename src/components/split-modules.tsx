import type { ReactNode } from "react";

import { MediaFrame, MediaStillOrVideo } from "@/components/media-frame";
import type { MediaSlot } from "@/lib/media";
import { cn } from "@/lib/utils";

/**
 * Home four-column band: text | photo | text | photo.
 * Four 1:1 tiles — 2×2 on small screens, one full-width row from md up.
 */
export function SplitRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 gap-0 md:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SplitCopy({
  tone,
  headline,
  line,
  action,
  as = "p",
}: {
  tone: "ink" | "cream";
  headline: string;
  line?: string;
  action?: ReactNode;
  as?: "h1" | "h2" | "p";
}) {
  const Title = as;
  const ink = tone === "ink";

  return (
    <div
      className={cn(
        "@container flex aspect-square min-h-0 w-full flex-col justify-center overflow-hidden px-[7%] py-[8%]",
        ink ? "bg-[#0A0708] text-[#F2EFEA]" : "bg-[#F2EFEA] text-[#4A1020]",
      )}
    >
      <Title className="font-heading max-w-[16ch] text-[clamp(1.05rem,9.5cqi,1.85rem)] leading-[1.12] font-light tracking-[-0.03em]">
        {headline}
        {"\u00a0"}
        <span
          className="inline-block align-middle text-[0.7em] font-light"
          aria-hidden
        >
          →
        </span>
      </Title>
      {line ? (
        <p className="mt-[0.55em] max-w-[28ch] text-[clamp(0.68rem,4.4cqi,0.92rem)] leading-[1.35] font-light">
          {line}
        </p>
      ) : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

export function SplitPhoto({
  slot,
  video,
  still,
  className,
}: {
  slot?: MediaSlot;
  video?: MediaSlot;
  still?: MediaSlot;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square min-h-0 w-full overflow-hidden bg-[#0A0708]",
        className,
      )}
    >
      {video && still ? (
        <MediaStillOrVideo video={video} still={still} fill />
      ) : slot ? (
        <MediaFrame slot={slot} fill quiet priority />
      ) : null}
    </div>
  );
}
