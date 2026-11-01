"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#tickets", label: "Tickets" },
  { href: "/sponsors", label: "Sponsors" },
] as const;

export function WixHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="wix-display text-[13px] tracking-[0.22em] uppercase">
          Wildly Wealthy Woman
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] tracking-[0.16em] uppercase"
            >
              {item.label}
            </Link>
          ))}
          <Link href="#tickets" className="wix-btn wix-btn-gold">
            Get your tickets
          </Link>
        </nav>
        <button
          type="button"
          className="text-[12px] tracking-[0.18em] uppercase md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-4 border-t border-black/5 px-5 py-5 md:hidden">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-[0.16em] uppercase"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="#tickets" className="wix-btn wix-btn-gold w-fit" onClick={() => setOpen(false)}>
            Get your tickets
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
