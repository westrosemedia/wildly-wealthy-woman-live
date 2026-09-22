import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32 text-center">
      <p className="text-[11px] tracking-[0.28em] text-lip uppercase">404</p>
      <h1 className="font-heading mt-4 text-4xl text-chocolate md:text-6xl">
        This page is not on the list.
      </h1>
      <p className="mt-4 max-w-md text-sm text-mink">
        The room you wanted is not here. Come back to the vortex.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center bg-lip px-8 text-[11px] tracking-[0.28em] text-ivory uppercase hover:bg-chocolate"
      >
        Return home
      </Link>
    </section>
  );
}
