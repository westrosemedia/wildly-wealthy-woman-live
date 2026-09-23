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
 * Until a file exists, a styled placeholder holds the layout.
 */
export const mediaSlots: Record<string, MediaSlot> = {
  heroVideo: {
    id: "heroVideo",
    kind: "video",
    src: "/media/hero.mp4",
    poster: "/media/hero.jpg",
    alt: "",
    caption: "",
    filename: "hero.mp4 (optional poster: hero.jpg)",
    aspect: "aspect-[4/5] md:aspect-[16/10]",
  },
  heroStill: {
    id: "heroStill",
    kind: "image",
    src: "/media/hero.jpg",
    alt: "",
    caption: "",
    filename: "hero.jpg",
    aspect: "aspect-[4/5] md:aspect-[16/10]",
  },
  jackiePortrait: {
    id: "jackiePortrait",
    kind: "image",
    src: "/media/jackie-portrait.jpg",
    alt: "",
    caption: "",
    filename: "jackie-portrait.jpg",
    aspect: "aspect-[3/4]",
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
  eventPhoenix: {
    id: "eventPhoenix",
    kind: "image",
    src: "/media/event-phoenix.jpg",
    alt: "",
    caption: "",
    filename: "event-phoenix.jpg",
    aspect: "aspect-[16/10]",
  },
  speakersBridgetJackie: {
    id: "speakersBridgetJackie",
    kind: "image",
    src: "/media/speakers-bridget-jackie.jpg",
    alt: "Bridget James Ling and Jackie",
    caption: "Bridget James Ling and Jackie",
    filename: "speakers-bridget-jackie.jpg",
    aspect: "aspect-[9/16]",
  },
};

mediaSlots.portrait = mediaSlots.jackiePortrait;
mediaSlots.about = mediaSlots.aboutJackie;
mediaSlots.event = mediaSlots.eventPhoenix;

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
