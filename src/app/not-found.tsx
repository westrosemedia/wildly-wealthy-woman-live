import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32 text-center">
      <h1 className="font-heading text-4xl text-cream md:text-6xl">404</h1>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center bg-lip px-8 text-[11px] tracking-[0.28em] text-cream uppercase hover:bg-rose"
      >
        Home
      </Link>
    </section>
  );
}
