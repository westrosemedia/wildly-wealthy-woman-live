import { WaitlistForm } from "@/components/waitlist-form";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export const ctaClassName =
  "inline-flex h-12 w-fit shrink-0 self-start items-center justify-center bg-lip px-8 text-[11px] tracking-[0.28em] text-cream uppercase transition-colors hover:bg-rose sm:px-10";

export function JoinWaitlistLink({
  href = "#waitlist",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={cn(ctaClassName, className)}>
      {copy.waitlist.cta}
    </a>
  );
}

export function WaitlistSection({ className }: { className?: string }) {
  return (
    <div
      id="waitlist"
      tabIndex={-1}
      className={cn("max-w-xl scroll-mt-28 outline-none", className)}
    >
      <p className="mb-5 text-sm leading-relaxed text-ivory/85 md:text-base">
        {copy.waitlist.body}
      </p>
      <WaitlistForm />
    </div>
  );
}
