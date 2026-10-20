"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, useIsoLayoutEffect } from "@/lib/gsap";

// Slow vertical drift of a hero photo while the hero scrolls away.
// The media element is oversized in CSS so no gap ever shows.
export default function Parallax({ children, className }) {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(`${MOTION_OK} and (min-width: 700px)`, () => {
      gsap.to(ref.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: ref.current.parentElement, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className} data-hero-media="">
      {children}
    </div>
  );
}
