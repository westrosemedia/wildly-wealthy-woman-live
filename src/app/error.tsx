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
      <h1 className="font-heading text-4xl text-cream">Error</h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex h-12 items-center bg-lip px-8 text-[11px] tracking-[0.28em] text-cream uppercase hover:bg-rose"
      >
        →
      </button>
    </section>
  );
}
