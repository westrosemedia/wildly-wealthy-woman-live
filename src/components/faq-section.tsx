import { FaqList } from "@/components/faq-list";

export function FaqSection({
  heading = "Before you walk in",
}: {
  heading?: string;
}) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-gold uppercase">FAQ</p>
      <h2 className="font-heading mt-3 text-4xl text-cream md:text-5xl">
        {heading}
      </h2>
      <div className="mt-8">
        <FaqList />
      </div>
    </div>
  );
}
