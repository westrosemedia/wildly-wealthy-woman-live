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
              "text-[10px] tracking-[0.42em] uppercase",
              onHero ? "text-champagne" : "text-mink",
            )}
          >
            Jackie McDonald
          </p>
          <p
            className={cn(
              "font-heading text-[1.4rem] leading-none sm:text-[1.75rem]",
              onHero ? "text-cream" : "text-chocolate",
            )}
          >
            Wildly Wealthy Woman{" "}
            <span className={cn("italic", onHero ? "text-champagne" : "text-lip")}>
              LIVE
            </span>
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
                    ? "text-cream/80 hover:text-cream"
                    : "text-mink hover:text-chocolate",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/connect"
          className="hidden h-11 items-center bg-lip px-6 text-[11px] tracking-[0.24em] text-ivory uppercase transition-colors hover:bg-chocolate lg:inline-flex"
        >
          Get a seat
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              "inline-flex size-11 items-center justify-center border lg:hidden",
              onHero
                ? "border-cream/30 text-cream"
                : "border-mink/30 text-chocolate",
            )}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="border-mink/20 bg-ivory text-chocolate">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-2xl font-normal text-chocolate">
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
                    pathname === item.href ? "text-lip" : "text-mink",
                  )}
                >
                  {item.label}
                </SheetClose>
              ))}
              <SheetClose
                nativeButton={false}
                render={<Link href="/connect" />}
                className="mt-4 inline-flex h-12 items-center justify-center bg-lip text-[11px] tracking-[0.24em] text-ivory uppercase"
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
