"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function FaqList() {
  return (
    <Accordion className="border-t border-gold/20">
      {faqs.map((item) => (
        <AccordionItem
          key={item.q}
          value={item.q}
          className="border-gold/20"
        >
          <AccordionTrigger className="py-6 font-heading text-left text-2xl font-normal text-cream hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-cream/70">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
