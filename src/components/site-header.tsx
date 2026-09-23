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

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-burgundy text-cream">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-6 py-5 md:px-12 md:py-6">
        <SiteMark tone="dark" />

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[10px] tracking-[0.28em] text-cream uppercase",
                pathname === item.href ? "opacity-100" : "opacity-60 hover:opacity-100",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="text-[10px] tracking-[0.3em] text-cream uppercase md:hidden"
            aria-label="Menu"
          >
            Menu
          </SheetTrigger>
          <SheetContent side="right" className="border-none bg-burgundy text-cream">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-2xl font-light text-cream italic">
                {site.name}
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
                    "text-left text-[12px] tracking-[0.28em] text-cream uppercase",
                    pathname === item.href ? "opacity-100" : "opacity-65",
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
