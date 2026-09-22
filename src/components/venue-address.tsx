import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function VenueAddress({ className }: { className?: string }) {
  return (
    <address className={cn("not-italic", className)}>{site.location}</address>
  );
}
