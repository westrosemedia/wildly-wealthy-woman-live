import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { org } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Email ${org.email}.`,
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <header className="page-hero">
        <p className="kicker">Contact us</p>
        <h1>Say hello</h1>
        <p className="lede">
          Write to Okotoks Pride Collective. The note opens in your email app.
        </p>
      </header>
      <section className="band split">
        <ContactForm />
        <dl className="facts">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${org.email}`}>{org.email}</a>
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
