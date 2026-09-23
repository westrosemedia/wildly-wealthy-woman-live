import { WaitlistForm } from "@/components/waitlist-form";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export function JoinWaitlistLink({
  href = "#waitlist",
  className,
  onWine = false,
}: {
  href?: string;
  className?: string;
  onWine?: boolean;
}) {
  return (
    <a href={href} className={cn("wine-fill", onWine && "wine-fill-on-wine", className)}>
      {copy.waitlist.cta}
    </a>
  );
}

export function WaitlistSection({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const onWine = tone === "dark";

  return (
    <div
      id="waitlist"
      tabIndex={-1}
      className={cn("max-w-xl scroll-mt-28 outline-none", className)}
    >
      <p
        className={cn(
          "mb-10 text-[1.05rem] leading-relaxed font-light md:text-xl",
          onWine ? "text-cream/88" : "text-burgundy/80",
        )}
      >
        {copy.waitlist.body}
      </p>
      <WaitlistForm tone={tone} />
    </div>
  );
}
