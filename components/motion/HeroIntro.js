"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, useIsoLayoutEffect } from "@/lib/gsap";

// Entrance for hero copy ([data-hero-item]) and a slow settle of the hero media.
// Items are hidden by CSS only when JS runs (see globals.css fallback).
export default function HeroIntro({ children, className }) {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const items = ref.current.querySelectorAll("[data-hero-item]");
      const media = ref.current.querySelector("[data-hero-media]");
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (media) tl.fromTo(media, { scale: 1.06 }, { scale: 1, duration: 2.2, ease: "power2.out" }, 0);
      tl.fromTo(items, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 }, 0.15);
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
