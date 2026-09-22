import { WaitlistForm } from "@/components/waitlist-form";

export function WaitlistSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="border border-mink/20 bg-snow px-6 py-10 md:px-10">
      <WaitlistForm compact={compact} />
    </div>
  );
}
