import type { Metadata } from "next";

import { SectionKicker } from "@/components/editorial-sections";
import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { hotelRoomStills } from "@/lib/media";
import { ticketPaymentLinks } from "@/lib/stripe";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tickets",
};

export default function TicketsPage() {
  return (
    <div className="overflow-x-clip pt-24 md:pt-28">
      <section className="bg-cream">
        <div className="house-wrap">
          <h1 className="font-heading text-5xl leading-[0.96] font-light text-pretty text-burgundy md:text-7xl">
            {copy.tickets.heading}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.75] font-light text-burgundy/70 md:text-lg">
            {copy.tickets.note}
          </p>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
            {copy.tickets.types.map((ticket) => {
              const elevated = ticket.name === "VIP";
              const href = ticketPaymentLinks[ticket.name];
              return (
                <article
                  key={ticket.name}
                  className={cn(
                    "flex flex-col justify-between px-7 py-8 md:min-h-[16rem] md:px-8 md:py-10",
                    elevated
                      ? "border border-burgundy bg-burgundy text-cream"
                      : "border border-burgundy/22 bg-cream text-burgundy",
                  )}
                >
                  <div>
                    <h2 className="font-heading text-3xl leading-none font-light md:text-4xl">
                      {ticket.name}
                    </h2>
                    <p
                      className={cn(
                        "mt-4 text-sm font-light tracking-[0.04em]",
                        elevated ? "text-cream/58" : "text-burgundy/42",
                      )}
                    >
                      {ticket.price}
                    </p>
                    {ticket.detail ? (
                      <p
                        className={cn(
                          "mt-5 text-sm leading-[1.65] font-light",
                          elevated ? "text-cream/86" : "text-burgundy/80",
                        )}
                      >
                        {ticket.detail}
                      </p>
                    ) : null}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "wine-fill mt-10 inline-flex",
                        elevated && "wine-fill-on-wine",
                      )}
                    >
                      {copy.tickets.buy}
                    </a>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="rooms" className="bg-cream">
        <div className="house-wrap">
          <div className="max-w-3xl">
            <SectionKicker>{copy.tickets.rooms.heading}</SectionKicker>
            <h2 className="font-heading mt-8 text-4xl leading-[1.05] font-light text-pretty text-burgundy md:text-5xl">
              {copy.tickets.rooms.hotel}
            </h2>
            <p className="mt-4 text-sm font-light tracking-[0.04em] text-burgundy/42">
              {copy.tickets.rooms.when}
            </p>
            <p className="body-copy mt-8 text-burgundy/80">{copy.tickets.rooms.body}</p>
            <p className="wine-fill pointer-events-none mt-10 max-w-full text-center leading-relaxed whitespace-normal">
              {copy.tickets.rooms.cta}
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {hotelRoomStills.map((slot) => (
              <figure key={slot.id} className="min-w-0">
                <MediaFrame slot={slot} />
              </figure>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
