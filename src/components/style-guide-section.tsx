import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { styleGuideStills } from "@/lib/media";
import { cn } from "@/lib/utils";

export function StyleGuideBoard({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("house-wrap", className)}>
      <h2 className="kicker text-burgundy">{copy.styleGuide.heading}</h2>
      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12">
        {styleGuideStills.map((slot) => (
          <MediaFrame key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
}

export function StyleGuideSection() {
  return (
    <section id="style-guide" className="bg-cream">
      <StyleGuideBoard />
    </section>
  );
}
