import { ctaClassName } from "@/components/join-waitlist";
import { stripePaymentLink } from "@/lib/stripe";

export function TicketCta() {
  if (!stripePaymentLink) {
    return null;
  }

  return (
    <a
      href={stripePaymentLink}
      target="_blank"
      rel="noopener noreferrer"
      className={ctaClassName}
    >
      Tickets
    </a>
  );
}
