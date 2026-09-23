import { MediaFrame } from "@/components/media-frame";
import { copy } from "@/lib/copy";
import { styleGuideStills } from "@/lib/media";
import { cn } from "@/lib/utils";

export function StyleGuideBoard({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const onDark = tone === "dark";

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[88rem] px-6 py-24 md:px-12 md:py-32",
        className,
      )}
    >
      <p
        className={cn(
          "text-[10px] tracking-[0.32em] uppercase",
          onDark ? "text-cream/55" : "text-mink",
        )}
      >
        {copy.styleGuide.heading}
      </p>
      <h2
        className={cn(
          "font-heading mt-6 max-w-3xl text-4xl leading-[1.02] font-light md:text-6xl",
          onDark ? "text-cream" : "text-chocolate",
        )}
      >
        {copy.styleGuide.body}
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 md:mt-16 md:gap-8">
        {styleGuideStills.map((slot) => (
          <MediaFrame key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
}

export function StyleGuideSection() {
  return (
    <section id="style-guide" className="bg-snow">
      <StyleGuideBoard />
    </section>
  );
}
