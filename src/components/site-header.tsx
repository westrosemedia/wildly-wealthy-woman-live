"use client";

import { Menu } from "lucide-react";
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
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHero = pathname === "/";

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-5 py-6 md:px-10">
        <Link href="/" className="min-w-0">
          <p
            className={cn(
              "font-heading text-[1.4rem] leading-none sm:text-[1.75rem]",
              onHero ? "text-ivory" : "text-chocolate",
            )}
          >
            {site.name}
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
                  ? "text-lip"
                  : onHero
                    ? "text-ivory/80 hover:text-ivory"
                    : "text-mink hover:text-chocolate",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              "inline-flex size-11 items-center justify-center border lg:hidden",
              onHero
                ? "border-ivory/30 text-ivory"
                : "border-mink/30 text-chocolate",
            )}
            aria-label="Menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="border-mink/20 bg-ivory text-chocolate">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-2xl font-normal text-chocolate">
                {site.shortName}
              </SheetTitle>
              <SheetDescription className="sr-only">Menu</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-5 px-4 pt-6">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={<Link href={item.href} />}
                  className={cn(
                    "text-left text-sm tracking-[0.28em] uppercase",
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
