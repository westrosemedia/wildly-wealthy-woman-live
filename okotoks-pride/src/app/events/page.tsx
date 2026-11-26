import type { Metadata } from "next";
import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Be Gay Do Crafts meets on the first Wednesday of the month. The next dated Okotoks Pride listing will be posted when it is shared.",
};

export default function EventsPage() {
  return (
    <>
      <header className="wrap page-hero">
        <p className="kicker">Events</p>
        <h1>What&apos;s on</h1>
        <p className="lede">
          The next dated gathering will show up here when Okotoks Pride posts
          it. The monthly craft night is the standing plan.
        </p>
      </header>

      <section className="band ground-blush">
        <div className="wrap event-block">
          <p className="kicker">Monthly</p>
          <h2>Be Gay Do Crafts</h2>
          <p>
            Be Gay Do Crafts are normally the first Wednesday of every month at
            7 PM - 9 PM. Join us any time!
          </p>
          <p>
            The Pride Edition was June 10 at 7 PM. That night, and the June 17
            book club, are on <Link href="/past-events">Past events</Link>.
          </p>
          <div className="slot-row">
            <MediaSlot kind="photo" label="A photo for the next craft night." />
            <MediaSlot kind="photo" label="Another photo for an upcoming event." />
            <MediaSlot kind="video" label="A video for an upcoming event." />
          </div>
        </div>
      </section>
    </>
  );
}
