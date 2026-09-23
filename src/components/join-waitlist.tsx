import { QuietAnchor } from "@/components/quiet-link";
import { WaitlistForm } from "@/components/waitlist-form";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export const ctaClassName = "quiet-link text-[13px] leading-none";

export function JoinWaitlistLink({
  href = "#waitlist",
  className,
  tone = "dark",
}: {
  href?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <QuietAnchor
      href={href}
      className={cn(
        tone === "dark" ? "text-cream" : "text-chocolate",
        className,
      )}
    >
      {copy.waitlist.cta}
    </QuietAnchor>
  );
}

export function WaitlistSection({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      id="waitlist"
      tabIndex={-1}
      className={cn("max-w-xl scroll-mt-28 outline-none", className)}
    >
      <p
        className={cn(
          "mb-10 text-[1.05rem] leading-relaxed font-light md:text-xl",
          tone === "dark" ? "text-ivory/86" : "text-chocolate/80",
        )}
      >
        {copy.waitlist.body}
      </p>
      <WaitlistForm tone={tone} />
    </div>
  );
}
