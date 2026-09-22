"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32">
      <button
        type="button"
        onClick={reset}
        className="inline-flex h-12 items-center bg-lip px-8 text-[11px] tracking-[0.28em] text-ivory uppercase"
      >
        →
      </button>
    </section>
  );
}
