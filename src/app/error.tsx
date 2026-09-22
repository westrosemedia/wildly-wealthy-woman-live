"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32 text-center">
      <p className="text-[11px] tracking-[0.28em] text-lip uppercase">
        Something slipped
      </p>
      <h1 className="font-heading mt-4 text-4xl text-chocolate md:text-5xl">
        The room could not load.
      </h1>
      <p className="mt-4 max-w-md text-sm text-mink">
        Please try again. If the frame is still empty, refresh the page.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex h-12 items-center bg-lip px-8 text-[11px] tracking-[0.28em] text-ivory uppercase hover:bg-chocolate"
      >
        Try again
      </button>
    </section>
  );
}
