import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { org } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Email ${org.email}. Okotoks Pride Collective is at ${org.address}.`,
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <header className="page-intro">
        <p className="eyebrow">Contact us</p>
        <h1>Say hello</h1>
        <p className="lede">
          Write to Okotoks Pride Collective. The note opens in your email app.
        </p>
      </header>
      <section className="section split">
        <div className="panel">
          <ContactForm />
        </div>
        <dl className="fact-list panel">
          <div>
            <dt>Email</dt>
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
          <div>
            <dt>Organization</dt>
            <dd>{org.legalName}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
