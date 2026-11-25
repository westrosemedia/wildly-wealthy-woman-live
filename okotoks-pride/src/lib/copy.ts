export const org = {
  publicName: "Okotoks Pride",
  legalName: "Okotoks Pride Collective Ltd.",
  email: "admin@okotokspride.ca",
  address: "30 Robinson Dr, Okotoks, Alberta, T1S1C4",
  corporateAccessNumber: "5128382131",
  mapsUrl:
    "https://maps.google.com/?q=30+Robinson+Dr,+Okotoks,+Alberta+T1S1C4",
  callsForJusticeUrl:
    "https://www.mmiwg-ffada.ca/wp-content/uploads/2019/06/Calls_for_Justice.pdf",
  callsToActionUrl:
    "https://www.rcaanc-cirnac.gc.ca/eng/1524494530110/1557511412801",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/past-events", label: "Past events" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact us" },
] as const;

export const about = {
  intro:
    "We are a team of community members striving to create queer lead safe, inclusive, educational, creative and happy spaces in Okotoks Alberta.",
  objectives:
    "Our Objectives: To advance community education and the arts by providing an annual pride festival, monthly creative spaces, an annual book club, and dedicated performance platforms that highlight queer history, lived experiences, and the systemic challenges faced by the queer community to queer youth, adults, and artists experiencing social isolation, historical erasure, or a lack of accessible platforms for representation.",
  funding:
    "The activities of the organization shall be funded through government and private grants, individual and corporate donations, the sale of tickets for performances and events, and the proceeds from fundraising initiatives including raffles and silent auctions.",
};

export const landAcknowledgement = [
  "Okotoks Pride Collective acknowledges the original stewards of this land that we know and call Treaty 7 Territory, which includes the Blackfoot Confederacy First Nations, the Kainai, Siksika and Piikani. The Stoney Nakoda First Nations, which includes the Bearspaw, Chiniki and Goodstoney, the Dene First Nation of Tsuut'ina and the Métis Nation of Alberta. We vow to continue honouring and respecting the Indigenous Peoples Sacred and Traditional ways of life and will carry on this special relationship with the land so that generations to come can enjoy, use and live off the land as their ancestors did. We honour and respect this space, the water, the animals and all the beings who have a spirit and have been here long before us.",
];

export const festivalPhotos = [
  {
    src: "/photos/team-rainbow-wall.jpg",
    width: 1600,
    height: 1373,
    alt: "Seven people from Okotoks Pride posing under a tent in front of a rainbow-striped wall, wearing lanyards and smiling.",
    caption: "The team",
    wide: true,
  },
  {
    src: "/photos/stage-performance.jpg",
    width: 554,
    height: 926,
    alt: "Performers on an outdoor stage at an Okotoks Pride festival, with a crowd sitting on the grass and a trans pride flag beside the stage.",
    caption: "On stage",
    wide: false,
  },
  {
    src: "/photos/lawn-crowd.jpg",
    width: 542,
    height: 864,
    alt: "Aerial view of an Okotoks Pride festival lawn, with people sitting in small groups, an orange canopy, a white tent, and a small stage.",
    caption: "On the lawn",
    wide: false,
  },
  {
    src: "/photos/market-tents.jpg",
    width: 570,
    height: 1010,
    alt: "Aerial view of Okotoks Pride market tents along a paved walk, with a lawn gathering on the grass behind them.",
    caption: "Market tents",
    wide: false,
  },
  {
    src: "/photos/bubble-performer.jpg",
    width: 1067,
    height: 1600,
    alt: "A performer in a blue top hat, white shirt, and suspenders making a giant soap bubble for children at an Okotoks Pride festival.",
    caption: "Bubbles",
    wide: false,
  },
  {
    src: "/photos/butterfly-wings.jpg",
    width: 1600,
    height: 1067,
    alt: "A performer on red stilts with arms spread, wearing large rainbow butterfly wings at an Okotoks Pride festival.",
    caption: "Butterfly wings",
    wide: false,
  },
  {
    src: "/photos/disco-heads.jpg",
    width: 1600,
    height: 1067,
    alt: "Two performers in silver sequined outfits with mirrored disco-ball heads, holding a boombox beside a flower arch.",
    caption: "Disco heads",
    wide: false,
  },
  {
    src: "/photos/performer-in-white.jpg",
    width: 1600,
    height: 1067,
    alt: "A performer in a white suit and white sunglasses dancing above a crowd at an Okotoks Pride festival.",
    caption: "In white",
    wide: false,
  },
  {
    src: "/photos/group-photo.jpg",
    width: 1600,
    height: 1066,
    alt: "A group of people posing together at an Okotoks Pride festival in front of a black backdrop and a flower arch.",
    caption: "Group photo",
    wide: false,
  },
  {
    src: "/photos/stage-fur.jpg",
    width: 1600,
    height: 1067,
    alt: "A performer in a long grey fur coat kneeling on an outdoor stage, with a rainbow brick wall and pride flags behind them.",
    caption: "Fur on stage",
    wide: false,
  },
] as const;

export const pastEvents = [
  {
    slug: "be-gay-do-crafts",
    title: "Be Gay Do Crafts",
    kicker: "Pride Edition",
    when: "June 10, 7:00 pm",
    where: "McMan Family Resource Network, 72 N Railway Street, Okotoks",
    paragraphs: [
      "This monthly event is a crowd favourite. Join us June 10th at 7 PM for a special pride month night.",
      "Be Gay Do Crafts are normally the first Wednesday of every month at 7 PM - 9 PM. Join us any time!",
    ],
  },
  {
    slug: "book-club",
    title: "Okotoks Pride Book Club",
    kicker: "Loveless by Alice Oseman",
    when: "June 17, 7:00 pm",
    where: "McMan Family Resource Network, 72 N Railway Street, Okotoks",
    paragraphs: [
      "Reading banned books have never been more important. Join us June 17th at the Okotoks McMan Centre for a discussion about the book. Get your copy from Yooneek in Okotoks!",
      "10% discount on physical copies ordered through Yooneek Books.",
    ],
  },
] as const;

export const questions = [
  {
    q: "Who is Okotoks Pride?",
    a: "We are a team of community members striving to create queer lead safe, inclusive, educational, creative and happy spaces in Okotoks Alberta. The organization is Okotoks Pride Collective Ltd.",
  },
  {
    q: "What are your objectives?",
    a: about.objectives,
  },
  {
    q: "Pride started as a protest. What do you want people to remember?",
    a: "Now more than ever, we celebrate, and we also remember that we have so far to go. Alberta has introduced laws and legislation limiting the freedoms and safety of our queer community that must continue to be challenged. None of us are free until all of us are free.",
  },
  {
    q: "Is Pride political?",
    a: "Your vote matters. Even as an ally, who you vote for directly impacts the safety of our community. We don’t take that lightly. Use your vote, your voice and your place in our community to speak for us, even if we are not in the room.",
  },
  {
    q: "What does the 2S in 2SLGBTQIA+ stand for here?",
    a: "June is also National Indigenous History Month. 2S in the 2SLGBTQIA+ stands for Two-Spirit. And it’s how our communities honour one another. It honors the embodiment of both masculine and feminine spirits, blending Indigenous cultural, spiritual, and gender identities. All people deserve love, respect, freedom and safety in our province, and in our celebrations.",
  },
  {
    q: "How is the work funded?",
    a: about.funding,
  },
] as const;
