import { promises } from "@/lib/site";

export function PromiseMarquee() {
  const loop = [...promises, ...promises, ...promises];

  return (
    <div className="marquee-track overflow-hidden border-y border-gold/20 bg-ink py-4">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[11px] tracking-[0.42em] text-gold uppercase"
          >
            {item}
            <span className="ml-10 text-cream/30">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
