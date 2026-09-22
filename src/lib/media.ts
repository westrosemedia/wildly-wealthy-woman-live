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

export const mediaSlots: Record<string, MediaSlot> = {
  heroVideo: {
    id: "heroVideo",
    kind: "video",
    src: "/media/hero.mp4",
    poster: "/media/hero.jpg",
    alt: "",
    caption: "",
    filename: "hero.mp4",
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
  portrait: {
    id: "portrait",
    kind: "image",
    src: "/media/portrait.jpg",
    alt: "",
    caption: "",
    filename: "portrait.jpg",
    aspect: "aspect-[3/4]",
  },
  about: {
    id: "about",
    kind: "image",
    src: "/media/about.jpg",
    alt: "",
    caption: "",
    filename: "about.jpg",
    aspect: "aspect-[4/5]",
  },
  event: {
    id: "event",
    kind: "image",
    src: "/media/event.jpg",
    alt: "",
    caption: "",
    filename: "event.jpg",
    aspect: "aspect-[16/10]",
  },
};

export const recapFilms: MediaSlot[] = [1, 2, 3].map((n) => ({
  id: `recap-0${n}`,
  kind: "video" as const,
  src: `/media/recap-0${n}.mp4`,
  poster: `/media/recap-0${n}.jpg`,
  alt: "",
  caption: "",
  filename: `recap-0${n}.mp4`,
  aspect: "aspect-[9/16] md:aspect-video",
}));

export const galleryStills: MediaSlot[] = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const aspects = [
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[3/2]",
  ];
  return {
    id: `g${n}`,
    kind: "image" as const,
    src: `/media/gallery-${n}.jpg`,
    alt: "",
    caption: "",
    filename: `gallery-${n}.jpg`,
    aspect: aspects[i % aspects.length],
  };
});
