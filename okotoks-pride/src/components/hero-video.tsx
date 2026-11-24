"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <figure className="hero-film">
      <video
        ref={ref}
        src="/video/pride-2026-hero.mp4"
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <p>Okotoks Pride 2026 hero video. Sound stays off until you turn it on.</p>
    </figure>
  );
}
