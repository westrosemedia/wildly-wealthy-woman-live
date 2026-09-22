/** Stripe Payment Link URL. Empty until set in env. No Stripe SDK. */
export const stripePaymentLink = (
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? ""
).trim();
