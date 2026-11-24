import Link from "next/link";
import { FestivalPhotos } from "@/components/festival-photos";
import { HeroVideo } from "@/components/hero-video";
import { MediaSlot } from "@/components/media-slot";
import { about, landAcknowledgement, org, pastEvents, questions } from "@/lib/copy";

export default function HomePage() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <p className="eyebrow">Okotoks Pride</p>
          <h1>Your place in the community is valid.</h1>
          <p className="lede">
            Everyone experiences life and queerness differently. You are welcome
            in our community as you are, and as you change and grow. Okotoks
            Pride is a place for you to feel accepted, loved and supported.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/events">
              Events
            </Link>
            <Link className="button secondary" href="/past-events">
              Past events
            </Link>
          </div>
        </div>
        <HeroVideo />
      </section>

      <section className="section" id="acknowledgement">
        <div className="wrap panel ack">
          <p className="eyebrow">Land acknowledgement</p>
          <h2>Treaty 7 Territory</h2>
          {landAcknowledgement.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <div className="ack-links">
            <a href={org.callsForJusticeUrl}>
              We invite you to read the Calls for Justice here
            </a>
            <a href={org.callsToActionUrl}>And the Calls to Action here</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{org.legalName}</p>
            <h2>About us</h2>
            <p>{about.intro}</p>
            <p>{about.objectives}</p>
            <p>{about.funding}</p>
          </div>
          <dl className="fact-list panel">
            <div>
              <dt>Contact</dt>
              <dd>
                <a href={`mailto:${org.email}`}>{org.email}</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                <a href={org.mapsUrl}>{org.address}</a>
              </dd>
            </div>
            <div>
              <dt>Corporate access number</dt>
              <dd>{org.corporateAccessNumber}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">From the festival</p>
          <h2>The real thing</h2>
          <p className="lede">
            Photos from an Okotoks Pride festival. More can be added in the
            empty frames.
          </p>
          <FestivalPhotos />
          <div className="slot-row">
            <MediaSlot kind="photo" label="Another festival photo goes here." />
            <MediaSlot kind="photo" label="Another festival photo goes here." />
            <MediaSlot kind="video" label="A festival video goes here." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Some things to remember</p>
          <h2>Questions</h2>
          <div className="qa">
            {questions.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Already on the calendar</p>
          <h2>Past gatherings</h2>
          <div className="cards">
            {pastEvents.map((event) => (
              <article className="card" key={event.slug}>
                <p className="eyebrow">{event.kicker}</p>
                <h3>{event.title}</h3>
                <p>
                  {event.when}
                  <br />
                  {event.where}
                </p>
                <Link href="/past-events">See past events</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
