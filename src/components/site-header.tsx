"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-6 md:px-8">
        <Link href="/" className="min-w-0">
          <p className="text-[10px] tracking-[0.42em] text-champagne uppercase">
            Jackie McDonald
          </p>
          <p className="font-heading text-[1.35rem] leading-none text-cream sm:text-2xl">
            Wildly Wealthy Woman{" "}
            <span className="italic text-gold">LIVE</span>
          </p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[11px] tracking-[0.28em] uppercase transition-colors",
                pathname === item.href
                  ? "text-gold"
                  : "text-cream/75 hover:text-cream",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/connect"
          className="hidden h-10 items-center bg-gold px-5 text-[11px] tracking-[0.24em] text-ink uppercase transition-colors hover:bg-champagne lg:inline-flex"
        >
          Get a seat
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center border border-cream/20 text-cream lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-gold/20 bg-ink text-cream"
          >
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-2xl font-normal text-cream">
                {site.shortName}
              </SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation for {site.name}
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-5 px-4 pt-6">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={<Link href={item.href} />}
                  className={cn(
                    "text-left text-sm tracking-[0.28em] uppercase",
                    pathname === item.href ? "text-gold" : "text-cream/80",
                  )}
                >
                  {item.label}
                </SheetClose>
              ))}
              <SheetClose
                nativeButton={false}
                render={<Link href="/connect" />}
                className="mt-4 inline-flex h-11 items-center justify-center bg-gold text-[11px] tracking-[0.24em] text-ink uppercase"
              >
                Get a seat
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
