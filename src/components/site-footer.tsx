import Link from "next/link";

import { SiteMark } from "@/components/site-mark";
import { nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-burgundy text-cream">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-12 md:py-16">
        <SiteMark tone="dark" />
        <ul className="flex flex-wrap gap-8 text-[10px] tracking-[0.26em] text-cream uppercase">
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
