export const site = {
  name: "Wildly Wealthy Woman LIVE",
  shortName: "WWW LIVE",
  domain: "wildlywealthywomanlive.com",
  url: "https://wildlywealthywomanlive.com",
  venue: {
    hotel: "Fairmont Banff Springs Hotel",
    city: "Banff",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/connect", label: "Connect" },
] as const;
