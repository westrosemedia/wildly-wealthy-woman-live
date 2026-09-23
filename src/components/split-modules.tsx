import type { ReactNode } from "react";

import { MediaFrame, MediaStillOrVideo } from "@/components/media-frame";
import type { MediaSlot } from "@/lib/media";
import { cn } from "@/lib/utils";

/**
 * Stephanie’s four-column template: text | photo | text | photo.
 * Equal columns on desktop, stacked on mobile. Medium type — not a billboard.
 */
export function SplitRow({
  children,
  className,
  tall = false,
}: {
  children: ReactNode;
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-stretch md:grid-cols-4",
        tall ? "md:min-h-[calc(100svh-5.25rem)]" : "md:min-h-[min(36rem,62svh)]",
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
        "flex h-full flex-col justify-center px-8 py-16 md:px-9 md:py-20 lg:px-11",
        ink ? "bg-[#0A0708] text-[#F2EFEA]" : "bg-[#F2EFEA] text-[#4A1020]",
      )}
    >
      <Title className="font-heading max-w-[14ch] text-[1.7rem] leading-[1.12] font-light tracking-[-0.03em] md:text-[1.85rem] lg:text-[2.05rem]">
        {headline}
        <span
          className="ml-3 inline-block align-middle text-[0.7em] font-light"
          aria-hidden
        >
          →
        </span>
      </Title>
      {line ? (
        <p className="mt-6 max-w-[28ch] text-[0.95rem] leading-[1.55] font-light md:text-[1rem]">
          {line}
        </p>
      ) : null}
      {action ? <div className="mt-10">{action}</div> : null}
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
        "relative min-h-[58vh] overflow-hidden bg-[#0A0708] md:min-h-0 md:h-full",
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
