/** Stripe Payment Link URL. Empty until set in env. No Stripe SDK. */
export const stripePaymentLink = (
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? ""
).trim();

/**
 * Checkout URL for each ticket on /tickets.
 * Empty until that tier has a Stripe Payment Link.
 */
export const ticketPaymentLinks = {
  "General admission": "https://buy.stripe.com/bJefZgcyS0pYfvMch7dEs00",
  "Mother & Daughter": "https://buy.stripe.com/5kQ3cu42mgoW6Zg2GxdEs02",
  VIP: "https://buy.stripe.com/dRm00i42mdcKgzQ80RdEs01",
} as const;
