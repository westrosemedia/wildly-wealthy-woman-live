import { promises } from "@/lib/site";

export function PromiseMarquee() {
  const loop = [...promises, ...promises, ...promises];

  return (
    <div className="marquee-track overflow-hidden border-y border-mink/15 bg-chocolate py-4">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[11px] tracking-[0.42em] text-champagne uppercase"
          >
            {item}
            <span className="ml-10 text-lip">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
