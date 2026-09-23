import { QuietAnchor } from "@/components/quiet-link";
import { stripePaymentLink } from "@/lib/stripe";
import { cn } from "@/lib/utils";

export function TicketCta({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  if (!stripePaymentLink) {
    return null;
  }

  return (
    <QuietAnchor
      href={stripePaymentLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        tone === "dark" ? "text-cream" : "text-chocolate",
        className,
      )}
    >
      Tickets
    </QuietAnchor>
  );
}
