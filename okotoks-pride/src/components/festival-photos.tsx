import Image from "next/image";
import { festivalPhotos } from "@/lib/copy";

export function FestivalPhotos() {
  return (
    <div className="gallery">
      {festivalPhotos.map((photo) => (
        <figure key={photo.src} className={`shot shot-${photo.crop}`}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={
              photo.crop === "wide"
                ? "100vw"
                : photo.crop === "third"
                  ? "(max-width: 980px) 100vw, 34vw"
                  : photo.crop === "major"
                    ? "(max-width: 980px) 100vw, 58vw"
                    : "(max-width: 980px) 100vw, 42vw"
            }
          />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
