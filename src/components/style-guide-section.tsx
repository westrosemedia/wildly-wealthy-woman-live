import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { styleGuideStills } from "@/lib/media";
import { cn } from "@/lib/utils";

export function StyleGuideBoard({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[92rem] px-5 py-20 md:px-10 md:py-24", className)}>
      <h2 className="font-heading text-4xl leading-[0.95] text-cream md:text-6xl">
        {copy.styleGuide.heading}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/88 md:text-lg">
        {copy.styleGuide.body}
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 md:mt-12 md:gap-6">
        {styleGuideStills.map((slot) => (
          <MediaFrame
            key={slot.id}
            slot={slot}
            className="border border-cream/15"
          />
        ))}
      </div>
    </div>
  );
}

export function StyleGuideSection() {
  return (
    <section id="style-guide" className="bg-velvet">
      <StyleGuideBoard />
    </section>
  );
}
