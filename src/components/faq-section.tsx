import { faqs } from "@/lib/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <Accordion multiple className="mt-8 border-t border-gold/20">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.q}
            value={faq.q}
            className="border-gold/20 px-0"
          >
            <AccordionTrigger className="font-heading py-5 text-left text-xl font-normal text-cream hover:no-underline md:text-2xl">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-relaxed text-cream/70 md:text-base">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
