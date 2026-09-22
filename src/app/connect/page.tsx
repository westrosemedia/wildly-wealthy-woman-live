import type { Metadata } from "next";

import { FaqSection } from "@/components/faq-section";
import { PageIntro } from "@/components/page-intro";
import { WaitlistForm } from "@/components/waitlist-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Seat",
  description:
    "Join the Wildly Wealthy Woman LIVE waitlist. Cities, dates, and ticket links go to this list first.",
};

export default function ConnectPage() {
  return (
    <main>
      <PageIntro
        kicker="Get a seat"
        title={
          <>
            The next city finds the list{" "}
            <span className="italic text-gold">first.</span>
          </>
        }
        lede="Join the waitlist for Wildly Wealthy Woman LIVE. Tell us the city you want. When dates and ticket links open, they land here before they land anywhere else."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pt-6 pb-20 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div className="border border-gold/25 bg-espresso px-6 py-10 md:px-10">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            Waitlist
          </p>
          <h2 className="font-heading mt-3 text-4xl text-cream">
            Hold your name in the room.
          </h2>
          <p className="mt-4 mb-8 text-sm leading-relaxed text-cream/70">
            No spam. No funnel theatre. Cities, dates, and the private venue
            note only. This form is ready to connect to Kajabi or an email list
            later — until then it confirms your seat on the list.
          </p>
          <WaitlistForm />
        </div>

        <aside className="space-y-10">
          <div className="border border-gold/20 p-8">
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Direct
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-heading mt-4 block text-2xl text-cream hover:text-gold"
            >
              {site.email}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-cream/65">
              For press, partnerships, or a city you want LIVE in.
            </p>
          </div>
          <div className="border border-gold/20 p-8">
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Already in her world
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li>
                <a href={site.host.site} className="hover:text-gold">
                  JackieMcDonald.ca
                </a>
              </li>
              <li>
                <a href={site.host.podcast} className="hover:text-gold">
                  Wildly Wealthy Woman Podcast
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <FaqSection heading="What you are walking into" />
      </section>
    </main>
  );
}
