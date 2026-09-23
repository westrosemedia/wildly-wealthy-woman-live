"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);
  const onHero = pathname === "/" || pathname === "/sponsors";
  const darkType = onHero && !scrolled;

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) {
      setScrolled(true);
      return;
    }

    const sync = () => {
      const top = hero.getBoundingClientRect().bottom;
      setScrolled(top <= 72);
    };
    sync();

    const observer = new IntersectionObserver(sync, {
      threshold: [0, 0.08, 1],
      rootMargin: "-72px 0px 0px 0px",
    });
    observer.observe(hero);
    window.addEventListener("scroll", sync, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", sync);
    };
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter] duration-500",
        scrolled ? "bg-ivory/90 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[88rem] items-start justify-between gap-8 px-6 py-6 md:px-12 md:py-8">
        <SiteMark tone={darkType ? "dark" : "light"} />

        <nav className="hidden items-center gap-10 pt-1.5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[10px] tracking-[0.28em] uppercase transition-opacity duration-500",
                pathname === item.href ? "opacity-100" : "opacity-55 hover:opacity-100",
                darkType ? "text-cream" : "text-chocolate",
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
              darkType ? "text-cream" : "text-chocolate",
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
