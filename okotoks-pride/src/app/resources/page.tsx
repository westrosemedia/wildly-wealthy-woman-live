import type { Metadata } from "next";
import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";
import { about, org } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Calls for Justice, Calls to Action, and how Okotoks Pride Collective is funded.",
};

export default function ResourcesPage() {
  return (
    <div className="wrap">
      <header className="page-hero">
        <p className="kicker">Resources</p>
        <h1>Read this, then stay</h1>
        <p className="lede">
          Okotoks Pride advances community education and the arts. The links
          below are the ones named on the last site. More can be added in the
          empty frame.
        </p>
      </header>

      <section className="band">
        <div className="resources">
          <a className="resource" href={org.callsForJusticeUrl}>
            <p className="kicker">01</p>
            <h2>Calls for Justice</h2>
            <p>We invite you to read the Calls for Justice here.</p>
            <span className="resource-link">
              National Inquiry into Missing and Murdered Indigenous Women and Girls
            </span>
          </a>
          <a className="resource" href={org.callsToActionUrl}>
            <p className="kicker">02</p>
            <h2>Calls to Action</h2>
            <p>And the Calls to Action here.</p>
            <span className="resource-link">
              Truth and Reconciliation Commission of Canada
            </span>
          </a>
        </div>
      </section>

      <section className="band">
        <p className="kicker">How this work is funded</p>
        <h2>Grants, tickets, and fundraising</h2>
        <p>{about.funding}</p>
        <p>
          The full land acknowledgement is on the{" "}
          <Link href="/#acknowledgement">home page</Link>.
        </p>
        <div className="slot-row">
          <MediaSlot
            kind="photo"
            label="A resource guide or poster can be placed here later."
          />
        </div>
      </section>
    </div>
  );
}
