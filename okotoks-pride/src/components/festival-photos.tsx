import Image from "next/image";
import { festivalPhotos } from "@/lib/copy";

export function FestivalPhotos() {
  return (
    <div className="photo-bento">
      {festivalPhotos.map((photo) => (
        <figure key={photo.src} className={photo.wide ? "shot wide" : "shot"}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={photo.wide ? "100vw" : "(max-width: 860px) 100vw, 360px"}
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
