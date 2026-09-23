export type MediaKind = "image" | "video";

export type MediaSlot = {
  id: string;
  kind: MediaKind;
  src: string;
  poster?: string;
  alt: string;
  caption: string;
  filename: string;
  aspect: string;
  /** object-position classes so object-cover keeps the intended subject in frame */
  objectClass?: string;
};

/**
 * Drop files into /public/media using these exact names.
 * Until a file exists, a styled placeholder holds the layout.
 */
export const mediaSlots: Record<string, MediaSlot> = {
  heroVideo: {
    id: "heroVideo",
    kind: "video",
    src: "/media/hero.mp4",
    poster: "/media/hero.jpg",
    alt: "Stephanie and Jackie",
    caption: "",
    filename: "hero.mp4 (optional poster: hero.jpg)",
    aspect: "aspect-[4/5] md:aspect-[16/10]",
    objectClass: "object-[58%_60%] md:object-[52%_58%]",
  },
  heroStill: {
    id: "heroStill",
    kind: "image",
    src: "/media/hero.jpg",
    alt: "Stephanie and Jackie",
    caption: "",
    filename: "hero.jpg",
    aspect: "aspect-[4/5] md:aspect-[16/10]",
    objectClass: "object-[58%_60%] md:object-[52%_58%]",
  },
  jackie: {
    id: "jackie",
    kind: "image",
    src: "/media/jackie.jpg",
    alt: "Jackie",
    caption: "",
    filename: "jackie.jpg",
    aspect: "aspect-[2/3]",
    objectClass: "object-[50%_18%]",
  },
  jackiePortrait: {
    id: "jackiePortrait",
    kind: "image",
    src: "/media/jackie.jpg",
    alt: "Jackie",
    caption: "",
    filename: "jackie.jpg",
    aspect: "aspect-[2/3]",
    objectClass: "object-[50%_18%]",
  },
  aboutJackie: {
    id: "aboutJackie",
    kind: "image",
    src: "/media/about-jackie.jpg",
    alt: "",
    caption: "",
    filename: "about-jackie.jpg",
    aspect: "aspect-[4/5]",
  },
  event: {
    id: "event",
    kind: "image",
    src: "/media/event.jpg",
    alt: "Banff Springs Hotel",
    caption: "",
    filename: "event.jpg",
    aspect: "aspect-[16/10]",
    objectClass: "object-[52%_48%]",
  },
  banffSprings: {
    id: "banffSprings",
    kind: "image",
    src: "/media/banff-springs.jpg",
    alt: "Banff Springs Hotel",
    caption: "",
    filename: "banff-springs.jpg",
    aspect: "aspect-[16/10]",
    objectClass: "object-[52%_48%]",
  },
  eventRoom: {
    id: "eventRoom",
    kind: "image",
    src: "/media/room.jpg",
    alt: "The room",
    caption: "The room",
    filename: "room.jpg",
    aspect: "aspect-[3/2]",
  },
  speakersBridgetJackie: {
    id: "speakersBridgetJackie",
    kind: "image",
    src: "/media/speakers-bridget-jackie.jpg",
    alt: "Bridget James Ling and Jackie",
    caption: "Bridget James Ling and Jackie",
    filename: "speakers-bridget-jackie.jpg",
    aspect: "aspect-[4/5] md:aspect-[9/16]",
  },
  stephanieJackie: {
    id: "stephanieJackie",
    kind: "image",
    src: "/media/stephanie-jackie.jpg",
    alt: "Stephanie and Jackie",
    caption: "",
    filename: "stephanie-jackie.jpg",
    aspect: "aspect-[3/2]",
    objectClass: "object-[50%_38%]",
  },
  sponsors: {
    id: "sponsors",
    kind: "image",
    src: "/media/sponsors.jpg",
    alt: "A panel",
    caption: "",
    filename: "sponsors.jpg",
    aspect: "aspect-[3/2]",
    objectClass: "object-[46%_42%]",
  },
  styleGuide01: {
    id: "styleGuide01",
    kind: "image",
    src: "/media/style-guide-01.jpg",
    alt: "Woman in a white fur coat on a balcony",
    caption: "",
    filename: "style-guide-01.jpg",
    aspect: "aspect-[2/3]",
    objectClass: "object-[50%_18%]",
  },
  styleGuide02: {
    id: "styleGuide02",
    kind: "image",
    src: "/media/style-guide-02.jpg",
    alt: "Woman in a cream fur coat in an elevator",
    caption: "",
    filename: "style-guide-02.jpg",
    aspect: "aspect-[2/3]",
    objectClass: "object-[50%_42%]",
  },
  styleGuide03: {
    id: "styleGuide03",
    kind: "image",
    src: "/media/style-guide-03.jpg",
    alt: "Woman in a dark fur coat with Banff Springs Hotel behind",
    caption: "",
    filename: "style-guide-03.jpg",
    aspect: "aspect-[2/3]",
    objectClass: "object-[50%_42%]",
  },
};

mediaSlots.portrait = mediaSlots.jackiePortrait;
mediaSlots.about = mediaSlots.aboutJackie;
mediaSlots.eventPhoenix = mediaSlots.event;
mediaSlots.mediaSponsors = mediaSlots.sponsors;

export const styleGuideStills: MediaSlot[] = [
  mediaSlots.styleGuide01,
  mediaSlots.styleGuide02,
  mediaSlots.styleGuide03,
];

export const recapFilms: MediaSlot[] = [
  {
    id: "recap-01",
    kind: "video",
    src: "/media/recap-01.mp4",
    poster: "/media/recap-01.jpg",
    alt: "",
    caption: "",
    filename: "recap-01.mp4 · recap-01.jpg",
    aspect: "aspect-[9/16] md:aspect-video",
  },
  {
    id: "recap-02",
    kind: "video",
    src: "/media/recap-02.mp4",
    poster: "/media/recap-02.jpg",
    alt: "",
    caption: "",
    filename: "recap-02.mp4 · recap-02.jpg",
    aspect: "aspect-[9/16] md:aspect-video",
  },
  {
    id: "recap-03",
    kind: "video",
    src: "/media/recap-03.mp4",
    poster: "/media/recap-03.jpg",
    alt: "",
    caption: "",
    filename: "recap-03.mp4 · recap-03.jpg",
    aspect: "aspect-[9/16] md:aspect-video",
  },
];

export const galleryStills: MediaSlot[] = [
  {
    id: "g01",
    kind: "image",
    src: "/media/gallery-01.jpg",
    alt: "",
    caption: "",
    filename: "gallery-01.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g02",
    kind: "image",
    src: "/media/gallery-02.jpg",
    alt: "",
    caption: "",
    filename: "gallery-02.jpg",
    aspect: "aspect-square",
  },
  {
    id: "g03",
    kind: "image",
    src: "/media/gallery-03.jpg",
    alt: "",
    caption: "",
    filename: "gallery-03.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g04",
    kind: "image",
    src: "/media/gallery-04.jpg",
    alt: "",
    caption: "",
    filename: "gallery-04.jpg",
    aspect: "aspect-[3/2]",
  },
  {
    id: "g05",
    kind: "image",
    src: "/media/gallery-05.jpg",
    alt: "",
    caption: "",
    filename: "gallery-05.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g06",
    kind: "image",
    src: "/media/gallery-06.jpg",
    alt: "",
    caption: "",
    filename: "gallery-06.jpg",
    aspect: "aspect-square",
  },
];
