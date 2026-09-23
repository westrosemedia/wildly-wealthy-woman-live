"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiteMark } from "@/components/site-mark";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHero = pathname === "/" || pathname === "/sponsors";

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[88rem] items-start justify-between gap-8 px-6 py-7 md:px-12 md:py-9">
        <SiteMark tone={onHero ? "dark" : "light"} />

        <nav className="hidden items-center gap-10 pt-1.5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[10px] tracking-[0.28em] uppercase transition-opacity duration-500",
                pathname === item.href ? "opacity-100" : "opacity-55 hover:opacity-100",
                onHero ? "text-cream" : "text-chocolate",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              "pt-1 text-[10px] tracking-[0.3em] uppercase md:hidden",
              onHero ? "text-cream" : "text-chocolate",
            )}
            aria-label="Menu"
          >
            Menu
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-mink/15 bg-ivory text-chocolate"
          >
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-2xl font-light text-chocolate">
                {site.shortName}
              </SheetTitle>
              <SheetDescription className="sr-only">Menu</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-6 px-4 pt-8">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={<Link href={item.href} />}
                  className={cn(
                    "text-left text-[12px] tracking-[0.28em] uppercase",
                    pathname === item.href ? "text-lip" : "text-mink",
                  )}
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
