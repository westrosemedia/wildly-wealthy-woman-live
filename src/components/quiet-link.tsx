import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const quietClass =
  "quiet-link text-[13px] font-normal leading-none text-current";

export function QuietLink({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Link>) {
  return <Link className={cn(quietClass, className)} {...props} />;
}

export function QuietAnchor({
  className,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return <a className={cn(quietClass, className)} {...props} />;
}
