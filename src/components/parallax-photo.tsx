"use client";

import { useEffect, useRef } from "react";

type Layer = {
  clip: HTMLElement;
  layer: HTMLElement;
};

const layers = new Set<Layer>();
let frame = 0;
let io: IntersectionObserver | null = null;
let reduceMq: MediaQueryList | null = null;
let bound = false;

function reducedMotion() {
  return Boolean(reduceMq?.matches);
}

function paint() {
  frame = 0;
  if (reducedMotion()) {
    for (const { layer } of layers) {
      layer.style.willChange = "auto";
      layer.style.transform = "translate3d(0,0,0)";
    }
    return;
  }

  const vh = window.innerHeight || 1;

  for (const { clip, layer } of layers) {
    const rect = clip.getBoundingClientRect();
    const onScreen = rect.bottom > 0 && rect.top < vh;
    if (!onScreen) {
      layer.style.willChange = "auto";
      continue;
    }

    const overflow = Math.max(0, (layer.offsetHeight - clip.offsetHeight) / 2);
    if (overflow === 0) continue;

    // Band rising through the viewport → layer shifts down, so the photo lags.
    const mid = rect.top + rect.height / 2;
    const y = Math.max(-overflow, Math.min(overflow, (0.5 - mid / vh) * overflow * 2));
    layer.style.willChange = "transform";
    layer.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
  }
}

function requestPaint() {
  if (frame) return;
  frame = window.requestAnimationFrame(paint);
}

function ensureIo() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) requestPaint();
    },
    { rootMargin: "25% 0px" },
  );
  return io;
}

function onScroll() {
  requestPaint();
}

function bind() {
  if (bound) return;
  bound = true;
  reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  reduceMq.addEventListener("change", requestPaint);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", requestPaint);
  window.visualViewport?.addEventListener("resize", requestPaint);
  window.visualViewport?.addEventListener("scroll", onScroll);
}

function unbind() {
  if (!bound || layers.size) return;
  bound = false;
  reduceMq?.removeEventListener("change", requestPaint);
  reduceMq = null;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", requestPaint);
  window.visualViewport?.removeEventListener("resize", requestPaint);
  window.visualViewport?.removeEventListener("scroll", onScroll);
  io?.disconnect();
  io = null;
  if (frame) window.cancelAnimationFrame(frame);
  frame = 0;
}

function register(clip: HTMLElement, layer: HTMLElement) {
  const item = { clip, layer };
  layers.add(item);
  ensureIo().observe(clip);
  bind();
  requestPaint();
  return () => {
    layers.delete(item);
    io?.unobserve(clip);
    layer.style.willChange = "auto";
    unbind();
  };
}

/**
 * Slim-clip photo layer. Taller than the band; translated on scroll so the
 * still moves slower than the page. Avoids background-attachment:fixed (broken
 * on iOS). Static when prefers-reduced-motion: reduce.
 */
export function ParallaxPhoto({
  src,
  alt,
  className,
  position = "50% 42%",
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
}) {
  const clipRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clip = clipRef.current;
    const layer = layerRef.current;
    if (!clip || !layer) return;
    return register(clip, layer);
  }, []);

  return (
    <div ref={clipRef} className={className} data-parallax-clip="">
      <div
        ref={layerRef}
        className="parallax-layer"
        data-parallax-layer=""
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: position,
        }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
