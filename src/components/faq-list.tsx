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
    <Accordion multiple className="border-t border-mink/20">
      {faqs.map((item) => (
        <AccordionItem key={item.q} value={item.q} className="border-mink/20">
          <AccordionTrigger className="py-6 font-heading text-left text-2xl font-normal text-chocolate hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-mink">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
