import { stripePaymentLink } from "@/lib/stripe";

const headingClass =
  "font-heading max-w-5xl text-4xl leading-[1.02] text-cream sm:text-6xl md:text-[4.6rem]";

export function TicketCta() {
  if (stripePaymentLink) {
    return (
      <h1 className={headingClass}>
        <a
          href={stripePaymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-lip px-8 py-3 text-[11px] tracking-[0.28em] text-cream uppercase transition-colors hover:bg-rose sm:px-10 sm:text-sm"
        >
          Tickets
        </a>
      </h1>
    );
  }

  return (
    <h1 className={headingClass}>Pre-sale tickets will be on sale soon.</h1>
  );
}
