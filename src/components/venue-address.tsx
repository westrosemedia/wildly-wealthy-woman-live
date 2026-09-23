import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export function VenueAddress({ className }: { className?: string }) {
  return (
    <address className={cn("not-italic", className)}>
      {copy.event.whenWhere}
    </address>
  );
}
