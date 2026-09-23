"use client";

import { Camera, Clapperboard } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { MediaSlot } from "@/lib/media";

type MediaStatus = "loading" | "ready" | "empty" | "error";

function Placeholder({
  slot,
  status = "empty",
  quiet = false,
  className,
}: {
  slot: MediaSlot;
  status?: "loading" | "empty" | "error";
  quiet?: boolean;
  className?: string;
}) {
  const Icon = slot.kind === "video" ? Clapperboard : Camera;
  const label = slot.filename;

  return (
    <div className={cn("satin-plate relative flex h-full w-full flex-col items-center justify-center overflow-hidden", className)}>
      <div className="satin-veil pointer-events-none absolute inset-0 opacity-80" />
      <div className="pointer-events-none absolute inset-5 border border-cream/30" />
      {quiet ? (
        <p className="absolute right-6 bottom-6 text-[10px] tracking-[0.22em] text-cream/70 uppercase">
          {label}
        </p>
      ) : (
        <>
          <Icon
            className={cn(
            "mb-4 size-7 text-cream/80",
              status === "loading" && "animate-pulse",
            )}
            strokeWidth={1.25}
          />
          {slot.caption ? (
            <p className="font-heading relative text-2xl tracking-wide text-cream">
              {slot.caption}
            </p>
          ) : null}
          <p className="relative mt-2 max-w-[18rem] px-4 text-center text-[11px] tracking-[0.22em] text-cream/75 uppercase">
            {label}
          </p>
        </>
      )}
    </div>
  );
}

async function probeMedia(src: string, signal: AbortSignal) {
  const response = await fetch(src, {
    method: "GET",
    headers: { Range: "bytes=0-0" },
    cache: "no-store",
    signal,
  });
  const type = response.headers.get("content-type") || "";
  return response.ok && !type.includes("text/html");
}

function useMediaExists(src: string) {
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    probeMedia(src, controller.signal)
      .then((ok) => {
        if (!cancelled) setExists(ok);
      })
      .catch(() => {
        if (!cancelled) setExists(false);
      });

    const timeout = window.setTimeout(() => {
      setExists((current) => current ?? false);
    }, 2500);

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [src]);

  return exists;
}

export function MediaFrame({
  slot,
  className,
  priority = false,
  controls = true,
  fill = false,
  quiet = false,
}: {
  slot: MediaSlot;
  className?: string;
  priority?: boolean;
  controls?: boolean;
  fill?: boolean;
  quiet?: boolean;
}) {
  const exists = useMediaExists(slot.src);
  const [status, setStatus] = useState<MediaStatus>("loading");
  const [posterFailed, setPosterFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const resolved = exists === false ? "empty" : status;

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setStatus("ready");
    }
  }, [slot.src]);

  const frameClass = fill
    ? cn("absolute inset-0 overflow-hidden bg-espresso", className)
    : cn("relative overflow-hidden bg-espresso", slot.aspect, className);

  if (resolved === "empty" || resolved === "error") {
    return (
      <div className={frameClass}>
        <Placeholder
          slot={slot}
          status={resolved === "error" ? "error" : "empty"}
          quiet={quiet || fill}
        />
      </div>
    );
  }

  if (slot.kind === "video") {
    return (
      <div className={frameClass}>
        <video
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            slot.objectClass,
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
            <Placeholder
              slot={slot}
              status="loading"
              quiet={quiet || fill}
            />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={frameClass}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imageRef}
        src={slot.src}
        alt={slot.alt}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          slot.objectClass,
          status === "ready" || exists === true ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("empty")}
      />
      {status !== "ready" && exists !== true ? (
        <div className="absolute inset-0">
          <Placeholder slot={slot} status="loading" quiet={quiet || fill} />
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
  const videoExists = useMediaExists(video.src);
  const [ready, setReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  if (videoExists === false || videoFailed) {
    return (
      <MediaFrame
        slot={still}
        className={className}
        priority
        fill={fill}
        quiet={fill}
      />
    );
  }

  const frameClass = fill
    ? cn("absolute inset-0 overflow-hidden bg-espresso", className)
    : cn("relative overflow-hidden bg-espresso", video.aspect, className);

  return (
    <div className={frameClass}>
      <video
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          video.objectClass ?? still.objectClass,
          ready ? "opacity-100" : "opacity-0",
        )}
        poster={still.src}
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
          <Placeholder
            slot={video}
            status={videoExists === null ? "loading" : "empty"}
            quiet={fill}
          />
        </div>
      ) : null}
    </div>
  );
}

export function HeroCinematic({
  video,
  still,
  className,
}: {
  video: MediaSlot;
  still: MediaSlot;
  className?: string;
}) {
  return (
    <MediaStillOrVideo video={video} still={still} className={className} fill />
  );
}

export function CaptionedFrame({
  slot,
  index,
  controls,
}: {
  slot: MediaSlot;
  index?: string;
  controls?: boolean;
}) {
  return (
    <figure className="group">
      <MediaFrame slot={slot} controls={controls} />
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[10px] tracking-[0.22em] text-mink uppercase">
        <span>{slot.caption}</span>
        <span className="text-lip">{index ?? slot.id}</span>
      </figcaption>
    </figure>
  );
}
