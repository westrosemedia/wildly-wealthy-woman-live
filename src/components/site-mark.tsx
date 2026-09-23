import Link from "next/link";

import { cn } from "@/lib/utils";

export function SiteMark({
  href = "/",
  tone = "light",
  className,
}: {
  href?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link href={href} className={cn("min-w-0", className)}>
      <span
        className={cn(
          "font-heading block text-[1.2rem] leading-none font-light tracking-[-0.02em] sm:text-[1.45rem]",
          tone === "dark" ? "text-cream" : "text-chocolate",
        )}
      >
        Wildly Wealthy Woman
      </span>
      <span
        className={cn(
          "mt-1.5 block text-[9px] tracking-[0.34em] uppercase",
          tone === "dark" ? "text-cream/62" : "text-mink/80",
        )}
      >
        Live
      </span>
    </Link>
  );
}
