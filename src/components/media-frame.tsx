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
  const [status, setStatus] = useState<MediaStatus>(priority ? "ready" : "loading");
  const [posterFailed, setPosterFailed] = useState(false);
  const resolved = exists === false ? "empty" : status;

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
        src={slot.src}
        alt={slot.alt}
        className={cn("h-full w-full object-cover", slot.objectClass)}
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("empty")}
      />
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
  // Native poster holds hero.jpg until the first frame. Do not overlay the
  // still or start at opacity-0 — loadeddata can fire before hydration and
  // leave the cactus still covering a playing film. Skip the Range probe;
  // a large hero.mp4 can miss that timeout.
  if (videoFailed) {
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
          "h-full w-full object-cover",
          video.objectClass ?? still.objectClass,
        )}
        poster={still.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={() => setVideoFailed(true)}
      >
        <source
          src={video.src}
          type="video/mp4"
          onError={() => setVideoFailed(true)}
        />
      </video>
    </div>
  );
}

const soundChoiceKey = "www-hero-sound";

function readSoundChoice(): "muted" | "on" | null {
  try {
    const value = sessionStorage.getItem(soundChoiceKey);
    if (value === "muted" || value === "on") return value;
  } catch {
    /* Private browsing can block storage. */
  }
  return null;
}

function writeSoundChoice(choice: "muted" | "on") {
  try {
    sessionStorage.setItem(soundChoiceKey, choice);
  } catch {
    /* Private browsing can block storage. */
  }
}

export function HeroCinematic({
  video,
  still,
  className,
  sound = false,
}: {
  video: MediaSlot;
  still: MediaSlot;
  className?: string;
  /** Home and /sponsors: try sound without a play plate. */
  sound?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true);
  const userChoseRef = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    let disposed = false;
    const gestures = ["pointerdown", "touchstart", "keydown"] as const;
    const saved = sound ? readSoundChoice() : null;
    if (saved === "muted") {
      userChoseRef.current = true;
      mutedRef.current = true;
    } else if (saved === "on") {
      userChoseRef.current = true;
      mutedRef.current = false;
      queueMicrotask(() => {
        if (!disposed) setMuted(false);
      });
    }

    const apply = () => {
      if (disposed) return;
      const shouldMute = !sound || mutedRef.current;
      el.muted = shouldMute;
      el.defaultMuted = shouldMute;
      el.playsInline = true;
      if (!shouldMute) el.volume = 1;
      void el.play().catch(() => {
        if (disposed || shouldMute) return;
        // Autoplay with sound was blocked. Keep the film moving, muted.
        el.muted = true;
        el.defaultMuted = true;
        mutedRef.current = true;
        setMuted(true);
        void el.play().catch(() => {});
      });
    };

    // Always start from the saved or muted state. Unmuting immediately is
    // what stops the film in Safari.
    apply();
    el.addEventListener("loadeddata", apply);
    el.addEventListener("canplay", apply);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) apply();
      },
      { threshold: 0.1 },
    );
    io.observe(el);

    const onVisible = () => {
      if (document.visibilityState === "visible") apply();
    };
    document.addEventListener("visibilitychange", onVisible);

    const unmute = (event: Event) => {
      if (!sound || disposed || userChoseRef.current) return;
      const target = event.target;
      if (target instanceof Element && target.closest("[data-sound-toggle]")) {
        return;
      }
      userChoseRef.current = true;
      mutedRef.current = false;
      setMuted(false);
      writeSoundChoice("on");
      apply();
      for (const eventName of gestures) {
        window.removeEventListener(eventName, unmute);
      }
    };
    if (sound && !userChoseRef.current) {
      for (const eventName of gestures) {
        window.addEventListener(eventName, unmute);
      }
    }

    return () => {
      disposed = true;
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
      el.removeEventListener("loadeddata", apply);
      el.removeEventListener("canplay", apply);
      for (const eventName of gestures) {
        window.removeEventListener(eventName, unmute);
      }
    };
  }, [sound]);

  function toggleSound(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    userChoseRef.current = true;
    setMuted((current) => {
      const next = !current;
      mutedRef.current = next;
      writeSoundChoice(next ? "muted" : "on");
      const el = videoRef.current;
      if (el) {
        el.muted = next || !sound;
        el.defaultMuted = el.muted;
        if (!el.muted) {
          el.volume = 1;
          void el.play().catch(() => {});
        }
      }
      return next;
    });
  }

  // Full-width 16:9 contain — never fill/cover. Native poster uses the same box.
  if (videoFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={still.src}
        alt={still.alt}
        className={cn("hero-film-media", className)}
      />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        className={cn("hero-film-media", className)}
        poster={still.src}
        autoPlay
        muted={muted || !sound}
        loop
        playsInline
        preload="auto"
        onError={() => setVideoFailed(true)}
      >
        <source
          src={video.src}
          type="video/mp4"
          onError={() => setVideoFailed(true)}
        />
      </video>
      {sound ? (
        <button
          type="button"
          data-sound-toggle
          className="fixed right-5 bottom-5 z-40 bg-burgundy px-4 py-3 text-[10px] tracking-[0.28em] text-cream uppercase transition-opacity duration-500 hover:opacity-60 md:right-8 md:bottom-8"
          aria-pressed={!muted}
          aria-label={muted ? "Play music" : "Mute music"}
          onPointerDown={(event) => event.stopPropagation()}
          onTouchStart={(event) => event.stopPropagation()}
          onClick={toggleSound}
        >
          {muted ? "Sound" : "Mute"}
        </button>
      ) : null}
    </>
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
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[10px] tracking-[0.22em] text-burgundy uppercase">
        <span>{slot.caption}</span>
        <span className="text-burgundy">{index ?? slot.id}</span>
      </figcaption>
    </figure>
  );
}
