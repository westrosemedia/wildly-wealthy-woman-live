export const site = {
  name: "Wildly Wealthy Woman LIVE",
  shortName: "WWW LIVE",
  domain: "wildlywealthywomanlive.com",
  url: "https://wildlywealthywomanlive.com",
  tagline: "This is not a networking night. It is a visibility vortex.",
  description:
    "An intimate in-person experience for empire builders, coaches, and creatives ready to be booked, remembered, and paid. Iconic content. Live podcasting. A tapping activation that changes how you walk into the room.",
  host: {
    name: "Jackie McDonald",
    role: "EFT tapping coach, somatic business mentor, and host of the Wildly Wealthy Woman Podcast",
    site: "https://www.jackiemcdonald.ca",
    podcast:
      "https://jackie-mcdonald.mykajabi.com/podcasts/wildly-wealthy-woman-podcast",
  },
  email: "hello@wildlywealthywomanlive.com",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/events", label: "The Night" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Jackie" },
  { href: "/connect", label: "Get a Seat" },
] as const;

export const pillars = [
  {
    roman: "I",
    title: "Iconic content",
    hours: "Two hours",
    body: "Directed stills and film that look like the woman you are becoming. Not a lobby selfie station. Editorial work you can sell from all season.",
  },
  {
    roman: "II",
    title: "Live podcasting",
    hours: "Two hours",
    body: "Sit with industry leaders and speak about money, manifestation, and leadership on mic. You do not collect business cards. You become someone people already know.",
  },
  {
    roman: "III",
    title: "Tapping activation",
    hours: "The close",
    body: "A live EFT activation to unlock your Wildly Wealthy Woman identity, so you walk, sell, and lead from a body that can hold the next level.",
  },
] as const;

export const promises = [
  "Booked",
  "Remembered",
  "Paid",
  "Seen",
  "Sovereign",
  "In the room",
];

export const differences = [
  {
    label: "The room",
    conference: "Five hundred lanyards in a ballroom.",
    live: "A private room. Every woman is in the work.",
  },
  {
    label: "The media",
    conference: "Talking-head stations squeezed into a break.",
    live: "Two hours of directed editorial. You leave with a season of content.",
  },
  {
    label: "The close",
    conference: "An afterparty and a tote bag.",
    live: "A tapping activation. You walk out in a different body.",
  },
];

export const schedule = [
  {
    time: "Arrival",
    title: "The door opens",
    body: "No registration maze. You walk into a room that already knows why you came.",
  },
  {
    time: "Act I",
    title: "Iconic content",
    body: "Hair, light, direction. Stills and film made to be remembered — not content you forget by Monday.",
  },
  {
    time: "Act II",
    title: "Live podcasting",
    body: "On mic with industry leaders. Money, manifestation, leadership. Your voice, captured.",
  },
  {
    time: "Act III",
    title: "Tapping activation",
    body: "Jackie closes the night in the body. The identity work that makes the content true.",
  },
  {
    time: "After",
    title: "You leave different",
    body: "No lanyard photo. A woman who is booked, remembered, and paid.",
  },
];

export const events = [
  {
    slug: "next",
    status: "waitlist" as const,
    city: "Next city",
    date: "Dates to the list first",
    venue: "Intimate venue, shared privately",
    title: "Wildly Wealthy Woman LIVE",
    blurb:
      "The next visibility vortex. A small room. High-frequency women. Content, conversation, and a close you will feel in your body for months.",
    ticketsLabel: "Join the waitlist",
  },
  {
    slug: "phoenix",
    status: "past" as const,
    city: "Phoenix, Arizona",
    date: "August 14",
    venue: "Private studio",
    title: "Wildly Wealthy Woman LIVE · Phoenix",
    blurb:
      "The first LIVE: two hours of iconic content, two hours of podcasting with industry leaders, and a tapping activation that closed the night.",
    ticketsLabel: "Recap coming",
  },
];

export const quotes = [
  {
    text: "You will not sit in the back of a ballroom. You will be on camera, on mic, and in the work.",
    by: "The LIVE standard",
  },
  {
    text: "This is not a networking night. It is a visibility vortex.",
    by: "Jackie McDonald",
  },
];

export const nightFlow = [
  {
    time: "Hours one and two",
    title: "Iconic content",
    body: "A private set, a real photographer, and film that looks like the woman you are becoming. You do not leave with phone photos. You leave with stills and clips you can sell from all season.",
  },
  {
    time: "Hours three and four",
    title: "Live podcasting",
    body: "Sit with industry leaders and speak about money, manifestation, and leadership on mic. The room hears you. The internet can hear you later. You become someone people already know.",
  },
  {
    time: "The close",
    title: "Tapping activation",
    body: "Jackie leads a live EFT activation to unlock the Wildly Wealthy Woman identity. The point is not a nice feeling. The point is walking out in a body that can hold the next level.",
  },
] as const;

export const aboutJackie = {
  lead: "Jackie McDonald built LIVE for the woman who is done waiting to be invited.",
  paragraphs: [
    "She is an EFT tapping coach, a somatic business mentor, and the host of the Wildly Wealthy Woman Podcast. Her work sits where money, manifestation, and the nervous system meet — because the next level of a business will not land in a body that is still braced for the last one.",
    "LIVE is her in-person room. Two hours of iconic content. Two hours of live podcasting with industry leaders. A tapping activation that closes the night. You leave booked in people's minds, remembered in their bodies, and paid because you finally look and sound like the woman who can hold it.",
    "This is not a networking night. It is a visibility vortex. Empire builders, disruptors, coaches, and creatives come to be seen — and to see themselves — at the frequency they have been privately claiming.",
  ],
} as const;

export const faqs = [
  {
    q: "Who is this for?",
    a: "Empire builders, disruptors, coaches, creatives, and female entrepreneurs who are done with ordinary networking and ready to be booked, remembered, and paid.",
  },
  {
    q: "Is this a conference?",
    a: "No. LIVE is intimate on purpose. You will be on camera, on mic, and in a tapping activation. You will not sit in the back of a ballroom with a lanyard.",
  },
  {
    q: "Do I need to already know how to tap?",
    a: "No. Jackie leads the activation. Come as you are. Leave as the woman who can hold more.",
  },
  {
    q: "What do I leave with?",
    a: "Editorial stills and film, a recorded conversation, and a nervous system that can actually hold the visibility you just created.",
  },
  {
    q: "How do I get a seat?",
    a: "Join the waitlist. Cities, dates, and ticket links go to that list first. If you have a city you want LIVE in, tell us when you join.",
  },
];
