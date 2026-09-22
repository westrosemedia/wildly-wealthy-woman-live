import Link from "next/link";

import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-lip/25 bg-ink text-cream">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-heading text-xl text-cream">
          Wildly Wealthy Woman <span className="italic text-lip">LIVE</span>
        </p>
        <ul className="flex flex-wrap gap-6 text-[11px] tracking-[0.24em] text-cream/65 uppercase">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-cream">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
