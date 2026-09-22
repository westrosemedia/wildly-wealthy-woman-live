export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32">
      <p className="text-[11px] tracking-[0.42em] text-lip uppercase">
        Loading the room
      </p>
      <div className="mt-6 h-px w-32 origin-left animate-pulse bg-mink/70" />
    </div>
  );
}
