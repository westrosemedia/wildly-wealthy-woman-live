"use client";

import { Camera, Clapperboard } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { MediaSlot } from "@/lib/media";

function Placeholder({
  slot,
  status = "empty",
  className,
}: {
  slot: MediaSlot;
  status?: "loading" | "empty" | "error";
  className?: string;
}) {
  const Icon = slot.kind === "video" ? Clapperboard : Camera;
  const label =
    status === "loading"
      ? "Loading the frame"
      : status === "error"
        ? "This file could not be read"
        : `Drop in ${slot.filename}`;

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(160deg,rgba(92,36,51,0.35),rgba(17,12,10,0.9)_45%,rgba(201,164,108,0.18))]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-6 border border-gold/25" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(232,213,163,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(196,137,123,0.2),transparent_40%)]" />
      <Icon
        className={cn(
          "mb-4 size-7 text-gold/80",
          status === "loading" && "animate-pulse",
        )}
        strokeWidth={1.25}
      />
      <p className="font-heading text-2xl tracking-wide text-cream/90">
        {slot.caption}
      </p>
      <p className="mt-2 max-w-[18rem] px-4 text-center text-[11px] tracking-[0.22em] text-champagne/70 uppercase">
        {label}
      </p>
    </div>
  );
}

export function MediaFrame({
  slot,
  className,
  priority = false,
  controls = true,
  fill = false,
}: {
  slot: MediaSlot;
  className?: string;
  priority?: boolean;
  controls?: boolean;
  fill?: boolean;
}) {
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading",
  );
  const [posterFailed, setPosterFailed] = useState(false);

  const frameClass = fill
    ? cn("absolute inset-0 overflow-hidden bg-ink", className)
    : cn("relative overflow-hidden bg-ink", slot.aspect, className);

  if (slot.kind === "video") {
    if (status === "empty" || status === "error") {
      return (
        <div className={frameClass}>
          <Placeholder slot={slot} status={status} />
        </div>
      );
    }

    return (
      <div className={frameClass}>
        <video
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            status === "ready" ? "opacity-100" : "opacity-0",
          )}
          poster={posterFailed ? undefined : slot.poster}
          controls={controls}
          playsInline
          preload={priority ? "auto" : "metadata"}
          onLoadedData={() => setStatus("ready")}
          onError={() => setStatus("empty")}
        >
          <source
            src={slot.src}
            type="video/mp4"
            onError={() => setStatus("empty")}
          />
        </video>
        {slot.poster ? (
          // Hidden probe so a missing poster does not flash a broken image.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={slot.poster}
            alt=""
            className="hidden"
            onError={() => setPosterFailed(true)}
          />
        ) : null}
        {status !== "ready" ? (
          <div className="absolute inset-0">
            <Placeholder slot={slot} status="loading" />
          </div>
        ) : null}
      </div>
    );
  }

  if (status === "empty" || status === "error") {
    return (
      <div className={frameClass}>
        <Placeholder slot={slot} status={status} />
      </div>
    );
  }

  return (
    <div className={frameClass}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slot.src}
        alt={slot.alt}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          status === "ready" ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("empty")}
      />
      {status !== "ready" ? (
        <div className="absolute inset-0">
          <Placeholder slot={slot} status="loading" />
        </div>
      ) : null}
    </div>
  );
}

export function MediaStillOrVideo({
  video,
  still,
  className,
  fill = false,
}: {
  video: MediaSlot;
  still: MediaSlot;
  className?: string;
  fill?: boolean;
}) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [ready, setReady] = useState(false);

  if (videoFailed) {
    return <MediaFrame slot={still} className={className} priority fill={fill} />;
  }

  const frameClass = fill
    ? cn("absolute inset-0 overflow-hidden bg-ink", className)
    : cn("relative overflow-hidden bg-ink", video.aspect, className);

  return (
    <div className={frameClass}>
      <video
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        )}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setReady(true)}
        onError={() => setVideoFailed(true)}
      >
        <source
          src={video.src}
          type="video/mp4"
          onError={() => setVideoFailed(true)}
        />
      </video>
      {!ready ? (
        <div className="absolute inset-0">
          <Placeholder slot={video} status="loading" />
        </div>
      ) : null}
    </div>
  );
}
