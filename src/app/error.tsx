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
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ivory px-6 pt-36 text-center">
      <h1 className="font-heading text-4xl font-light text-chocolate">Error</h1>
      <button
        type="button"
        onClick={reset}
        className="quiet-link mt-10 text-[13px] text-chocolate"
      >
        →
      </button>
    </section>
  );
}
