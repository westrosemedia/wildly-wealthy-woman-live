import type { Metadata } from "next";
import { FestivalPhotos } from "@/components/festival-photos";
import { MediaSlot } from "@/components/media-slot";
import { pastEvents } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Past events",
  description:
    "Be Gay Do Crafts Pride Edition and the Okotoks Pride Book Club, plus photos from an Okotoks Pride festival.",
};

export default function PastEventsPage() {
  return (
    <div className="wrap">
      <header className="page-intro">
        <p className="eyebrow">Past events</p>
        <h1>Look what we made</h1>
        <p className="lede">
          Festival photos, then the two gatherings written up on the last site.
          Empty frames are ready for more photos and videos.
        </p>
      </header>

      <section className="section">
        <h2>Festival photos</h2>
        <FestivalPhotos />
      </section>

      {pastEvents.map((event) => (
        <section className="section event-block" key={event.slug} id={event.slug}>
          <article className="panel">
            <p className="eyebrow">{event.kicker}</p>
            <h2>{event.title}</h2>
            <p>
              <strong>{event.when}</strong>
              <br />
              {event.where}
            </p>
            {event.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="slot-row">
              <MediaSlot kind="photo" label={`A photo from ${event.title}.`} />
              <MediaSlot kind="photo" label={`Another photo from ${event.title}.`} />
              <MediaSlot kind="video" label={`A video from ${event.title}.`} />
            </div>
          </article>
        </section>
      ))}
    </div>
  );
}
