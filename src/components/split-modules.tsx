import type { ReactNode } from "react";

import { MediaFrame, MediaStillOrVideo } from "@/components/media-frame";
import type { MediaSlot } from "@/lib/media";
import { cn } from "@/lib/utils";

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
        "grid grid-cols-1 md:grid-cols-4",
        tall ? "md:min-h-[calc(100svh-5.25rem)]" : "md:min-h-[min(28rem,52svh)]",
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
        "flex flex-col justify-center px-8 py-16 md:px-10 md:py-20 lg:px-12",
        ink ? "bg-[#0A0708] text-[#F2EFEA]" : "bg-[#F2EFEA] text-[#4A1020]",
      )}
    >
      <Title
        className={cn(
          "font-heading max-w-[16ch] font-light tracking-[-0.03em]",
          headline.length > 48
            ? "text-[clamp(1.65rem,2.4vw,2.35rem)] leading-[1.08]"
            : "text-[clamp(2rem,3.2vw,3.15rem)] leading-[1.02]",
        )}
      >
        {headline}
        <span className="ml-3 inline-block align-middle text-[0.72em] font-light" aria-hidden>
          →
        </span>
      </Title>
      {line ? (
        <p className="mt-6 max-w-[28ch] text-[0.98rem] leading-[1.55] font-light md:text-[1.05rem]">
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
        "relative min-h-[62vh] overflow-hidden bg-[#0A0708] md:min-h-0",
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
