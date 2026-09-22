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
};

/**
 * Drop files into /public/media using these exact names.
 * The frames are already designed. Until a file exists, a styled
 * placeholder shows so the layout stays intact.
 */
export const mediaSlots: Record<string, MediaSlot> = {
  heroVideo: {
    id: "heroVideo",
    kind: "video",
    src: "/media/hero.mp4",
    poster: "/media/hero.jpg",
    alt: "Wildly Wealthy Woman LIVE hero film",
    caption: "Hero film",
    filename: "hero.mp4 (optional poster: hero.jpg)",
    aspect: "aspect-[4/5] md:aspect-[16/10]",
  },
  heroStill: {
    id: "heroStill",
    kind: "image",
    src: "/media/hero.jpg",
    alt: "Cinematic still from Wildly Wealthy Woman LIVE",
    caption: "Hero still",
    filename: "hero.jpg",
    aspect: "aspect-[4/5] md:aspect-[16/10]",
  },
  jackiePortrait: {
    id: "jackiePortrait",
    kind: "image",
    src: "/media/jackie-portrait.jpg",
    alt: "Jackie McDonald, host of Wildly Wealthy Woman LIVE",
    caption: "Jackie McDonald",
    filename: "jackie-portrait.jpg",
    aspect: "aspect-[3/4]",
  },
  aboutJackie: {
    id: "aboutJackie",
    kind: "image",
    src: "/media/about-jackie.jpg",
    alt: "Jackie McDonald in the LIVE room",
    caption: "The host",
    filename: "about-jackie.jpg",
    aspect: "aspect-[4/5]",
  },
  eventPhoenix: {
    id: "eventPhoenix",
    kind: "image",
    src: "/media/event-phoenix.jpg",
    alt: "Phoenix LIVE recap still",
    caption: "Phoenix",
    filename: "event-phoenix.jpg",
    aspect: "aspect-[16/10]",
  },
};

export const recapFilms: MediaSlot[] = [
  {
    id: "recap-01",
    kind: "video",
    src: "/media/recap-01.mp4",
    poster: "/media/recap-01.jpg",
    alt: "LIVE recap film one",
    caption: "The room",
    filename: "recap-01.mp4 · recap-01.jpg",
    aspect: "aspect-[9/16] md:aspect-video",
  },
  {
    id: "recap-02",
    kind: "video",
    src: "/media/recap-02.mp4",
    poster: "/media/recap-02.jpg",
    alt: "LIVE recap film two",
    caption: "On mic",
    filename: "recap-02.mp4 · recap-02.jpg",
    aspect: "aspect-[9/16] md:aspect-video",
  },
  {
    id: "recap-03",
    kind: "video",
    src: "/media/recap-03.mp4",
    poster: "/media/recap-03.jpg",
    alt: "LIVE recap film three",
    caption: "The close",
    filename: "recap-03.mp4 · recap-03.jpg",
    aspect: "aspect-[9/16] md:aspect-video",
  },
];

export const galleryStills: MediaSlot[] = [
  {
    id: "g01",
    kind: "image",
    src: "/media/gallery-01.jpg",
    alt: "LIVE gallery still 01",
    caption: "Arrival",
    filename: "gallery-01.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g02",
    kind: "image",
    src: "/media/gallery-02.jpg",
    alt: "LIVE gallery still 02",
    caption: "Gold hour",
    filename: "gallery-02.jpg",
    aspect: "aspect-square",
  },
  {
    id: "g03",
    kind: "image",
    src: "/media/gallery-03.jpg",
    alt: "LIVE gallery still 03",
    caption: "On set",
    filename: "gallery-03.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g04",
    kind: "image",
    src: "/media/gallery-04.jpg",
    alt: "LIVE gallery still 04",
    caption: "The table",
    filename: "gallery-04.jpg",
    aspect: "aspect-[3/2]",
  },
  {
    id: "g05",
    kind: "image",
    src: "/media/gallery-05.jpg",
    alt: "LIVE gallery still 05",
    caption: "In the chair",
    filename: "gallery-05.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g06",
    kind: "image",
    src: "/media/gallery-06.jpg",
    alt: "LIVE gallery still 06",
    caption: "Mic check",
    filename: "gallery-06.jpg",
    aspect: "aspect-square",
  },
  {
    id: "g07",
    kind: "image",
    src: "/media/gallery-07.jpg",
    alt: "LIVE gallery still 07",
    caption: "The look",
    filename: "gallery-07.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g08",
    kind: "image",
    src: "/media/gallery-08.jpg",
    alt: "LIVE gallery still 08",
    caption: "Afterglow",
    filename: "gallery-08.jpg",
    aspect: "aspect-[3/2]",
  },
  {
    id: "g09",
    kind: "image",
    src: "/media/gallery-09.jpg",
    alt: "LIVE gallery still 09",
    caption: "Tapping",
    filename: "gallery-09.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g10",
    kind: "image",
    src: "/media/gallery-10.jpg",
    alt: "LIVE gallery still 10",
    caption: "Details",
    filename: "gallery-10.jpg",
    aspect: "aspect-square",
  },
  {
    id: "g11",
    kind: "image",
    src: "/media/gallery-11.jpg",
    alt: "LIVE gallery still 11",
    caption: "Sisterhood",
    filename: "gallery-11.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g12",
    kind: "image",
    src: "/media/gallery-12.jpg",
    alt: "LIVE gallery still 12",
    caption: "Exit",
    filename: "gallery-12.jpg",
    aspect: "aspect-[3/2]",
  },
];
