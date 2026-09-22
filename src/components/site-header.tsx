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
  const onDark = pathname === "/" || pathname === "/sponsors";

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-5 py-6 md:px-10">
        <Link href="/" className="min-w-0">
          <p
            className={cn(
              "font-heading text-[1.35rem] leading-none sm:text-[1.7rem]",
              onDark ? "text-cream" : "text-chocolate",
            )}
          >
            Wildly Wealthy Woman <span className="italic text-lip">LIVE</span>
          </p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[11px] tracking-[0.28em] uppercase transition-colors",
                pathname === item.href
                  ? "text-lip"
                  : onDark
                    ? "text-cream/75 hover:text-cream"
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
              "inline-flex size-11 items-center justify-center border md:hidden",
              onDark
                ? "border-cream/30 text-cream"
                : "border-mink/30 text-chocolate",
            )}
            aria-label="Menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className={
              onDark
                ? "border-lip/25 bg-ink text-cream"
                : "border-mink/20 bg-ivory text-chocolate"
            }
          >
            <SheetHeader>
              <SheetTitle
                className={cn(
                  "font-heading text-left text-2xl font-normal",
                  onDark ? "text-cream" : "text-chocolate",
                )}
              >
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
                    pathname === item.href
                      ? "text-lip"
                      : onDark
                        ? "text-cream/70"
                        : "text-mink",
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
