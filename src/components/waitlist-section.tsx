import { WaitlistForm } from "@/components/waitlist-form";
import { site } from "@/lib/site";

export function WaitlistSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="border border-mink/20 bg-snow px-6 py-10 md:px-10">
      <p className="text-[11px] tracking-[0.28em] text-lip uppercase">The list</p>
      <h2 className="font-heading mt-3 text-4xl text-chocolate md:text-5xl">
        Be first when the next city opens.
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-mink">
        Dates, ticket links, and the private venue note go to this list first.
        Hosted by {site.host.name}. Built for the woman who is ready to be
        booked, remembered, and paid.
      </p>
      <div className="mt-8">
        <WaitlistForm compact={compact} />
      </div>
    </div>
  );
}
