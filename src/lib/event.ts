import { ticketPaymentLinks } from "@/lib/stripe";
import { site } from "@/lib/site";

const offers = [
  {
    name: "General Admission",
    price: "697",
    url: ticketPaymentLinks["General admission"],
  },
  {
    name: "Mother-Daughter Duo",
    price: "777",
    url: ticketPaymentLinks["Mother & Daughter"],
  },
  {
    name: "VIP Experience",
    price: "1497",
    url: ticketPaymentLinks.VIP,
  },
  {
    name: "Mother-Daughter Duo VIP",
    price: "1997",
    url: ticketPaymentLinks["Mother & Daughter VIP"],
  },
] as const;

/** Search title and description. */
export const eventSeo = {
  title: "Wildly Wealthy Woman Live | Banff, March 4–6, 2027",
  description:
    "Tickets for Wildly Wealthy Woman Live, March 4–6, 2027 at the Fairmont Banff Springs. A three-day event for women on wealth, motherhood, and legacy. From $697 USD.",
} as const;

export function eventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Wildly Wealthy Woman Live",
    description: eventSeo.description,
    url: site.url,
    image: [`${site.url}/wix/hero-poster.jpg`],
    startDate: "2027-03-04",
    endDate: "2027-03-06",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Fairmont Banff Springs",
      address: {
        "@type": "PostalAddress",
        streetAddress: "405 Spray Avenue",
        addressLocality: "Banff",
        addressRegion: "AB",
        postalCode: "T1L 1J4",
        addressCountry: "CA",
      },
    },
    organizer: {
      "@type": "Person",
      name: "Jackie McDonald",
      url: "https://www.jackiemcdonald.ca",
    },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: offer.url,
    })),
  };
}
