import Link from "next/link";
import type { ReactNode } from "react";

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: ReactNode;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-32 pb-16 md:pt-40 md:pb-20">
      <p className="pointer-events-none absolute -right-6 top-24 font-heading text-[28vw] leading-none text-mink/10 italic select-none">
        LIVE
      </p>
      <div className="relative mx-auto max-w-[92rem] px-5 md:px-10">
        <p className="text-[11px] tracking-[0.38em] text-lip uppercase">{kicker}</p>
        <h1 className="font-heading mt-4 max-w-4xl text-5xl leading-[0.95] text-chocolate md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mink">{lede}</p>
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
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 items-center bg-lip px-7 text-[11px] tracking-[0.24em] text-ivory uppercase transition-colors hover:bg-chocolate"
    >
      {children}
    </Link>
  );
}
