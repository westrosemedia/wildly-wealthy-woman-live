export const site = {
  name: "Wildly Wealthy Woman LIVE",
  shortName: "WWW LIVE",
  domain: "wildlywealthywomanlive.com",
  url: "https://wildlywealthywomanlive.com",
  location: "Fairmont Banff Springs Hotel, Banff",
  venue: {
    hotel: "Fairmont Banff Springs Hotel",
    city: "Banff",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/sponsors", label: "Sponsors" },
] as const;
