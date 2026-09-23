import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { styleGuideStills } from "@/lib/media";
import { cn } from "@/lib/utils";

export function StyleGuideBoard({
  className,
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32",
        className,
      )}
    >
      <h2 className="text-[10px] tracking-[0.32em] text-burgundy uppercase">
        {copy.styleGuide.heading}
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-16 md:gap-12">
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
