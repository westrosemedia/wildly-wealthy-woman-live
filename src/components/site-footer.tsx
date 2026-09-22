import Link from "next/link";

import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-chocolate text-cream">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-heading text-2xl text-cream">{site.name}</p>
        <ul className="flex flex-wrap gap-6 text-[11px] tracking-[0.24em] text-cream/70 uppercase">
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
