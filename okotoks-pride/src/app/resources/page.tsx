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
      <header className="page-intro">
        <p className="eyebrow">Resources</p>
        <h1>Read this, then stay</h1>
        <p className="lede">
          Okotoks Pride advances community education and the arts. The links
          below are the ones named on the last site. More can be added in the
          empty frame.
        </p>
      </header>

      <section className="section cards">
        <article className="card">
          <h2>Calls for Justice</h2>
          <p>We invite you to read the Calls for Justice here.</p>
          <a href={org.callsForJusticeUrl}>
            National Inquiry into Missing and Murdered Indigenous Women and Girls
          </a>
        </article>
        <article className="card">
          <h2>Calls to Action</h2>
          <p>And the Calls to Action here.</p>
          <a href={org.callsToActionUrl}>
            Truth and Reconciliation Commission of Canada
          </a>
        </article>
      </section>

      <section className="section">
        <article className="panel">
          <p className="eyebrow">How this work is funded</p>
          <h2>Grants, tickets, and fundraising</h2>
          <p>{about.funding}</p>
          <p>
            The full land acknowledgement is on the{" "}
            <Link href="/#acknowledgement">home page</Link>.
          </p>
          <MediaSlot
            kind="photo"
            label="A resource guide or poster can be placed here later."
          />
        </article>
      </section>
    </div>
  );
}
