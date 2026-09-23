import Link from "next/link";

import { copy } from "@/lib/copy";
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
    <Link href={href} className={cn("min-w-0", className)} aria-label={copy.title}>
      <span
        className={cn(
          "font-heading block text-[1.02rem] leading-[1.15] font-light tracking-[0.04em] italic sm:text-[1.2rem] sm:whitespace-nowrap",
          tone === "dark" ? "text-cream" : "text-burgundy",
        )}
      >
        {copy.title}
      </span>
    </Link>
  );
}
