import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 pt-32 text-center">
      <h1 className="font-heading text-4xl font-light text-burgundy md:text-6xl">
        404
      </h1>
      <Link href="/" className="quiet-link mt-10 text-[13px] text-burgundy">
        Home
      </Link>
    </section>
  );
}
