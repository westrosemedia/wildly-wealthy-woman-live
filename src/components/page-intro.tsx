import Link from "next/link";
import type { ReactNode } from "react";

import { CopySlot } from "@/components/copy-slot";

export function PageIntro({
  titleSlot = "H1",
}: {
  titleSlot?: string;
  kicker?: string;
  title?: ReactNode;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="relative mx-auto max-w-[92rem] space-y-6 px-5 md:px-10">
        <CopySlot label="Kicker" className="w-fit text-[11px] tracking-[0.38em] uppercase" />
        <CopySlot
          as="h1"
          label={titleSlot}
          className="font-heading max-w-4xl text-5xl leading-[0.95] md:text-7xl"
        />
        <CopySlot as="p" label="Body" className="max-w-2xl text-lg" />
      </div>
      <div className="hairline mt-14" />
    </section>
  );
}

export function GoldLink({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 items-center bg-lip px-7 text-[11px] tracking-[0.24em] text-ivory uppercase transition-colors hover:bg-chocolate"
    >
      {children ?? "→"}
    </Link>
  );
}
