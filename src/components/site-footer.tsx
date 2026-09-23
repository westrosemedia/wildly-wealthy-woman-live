import Link from "next/link";

import { SiteMark } from "@/components/site-mark";
import { nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-mink/15 bg-ivory text-chocolate">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-12 md:py-16">
        <SiteMark />
        <ul className="flex flex-wrap gap-8 text-[10px] tracking-[0.26em] text-mink uppercase">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-opacity duration-500 hover:opacity-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
