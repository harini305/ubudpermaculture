"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, ScrollTrigger, useIsoLayoutEffect } from "@/lib/gsap";

// Reveals [data-reveal] descendants (or the wrapper itself) once, as they scroll into view.
// variant "up": gentle rise; "unveil": photo uncovered from the bottom edge.
// Content already on screen at load is left alone, so nothing flickers or hides.
export default function Reveal({ children, className, variant = "up", stagger = 0.08, as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    const root = ref.current;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const found = root.querySelectorAll("[data-reveal]");
      const targets = (found.length ? [...found] : [root]).filter((el) => !ScrollTrigger.isInViewport(el, 0.05));
      if (!targets.length) return;
      if (variant === "unveil") {
        targets.forEach((el) => {
          const img = el.querySelector("img");
          const tl = gsap.timeline({ paused: true });
          tl.fromTo(el, { clipPath: "inset(18% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power3.out" });
          if (img) tl.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: "power2.out" }, 0);
          const play = () => tl.play();
          ScrollTrigger.create({ trigger: el, start: "top 88%", once: true, onEnter: play, onLeave: play, onEnterBack: play });
        });
        return;
      }
      gsap.set(targets, { autoAlpha: 0, y: 28 });
      const show = (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out", stagger, overwrite: true });
      // onLeave/onEnterBack cover fast scrolls and anchor jumps that skip past an item.
      ScrollTrigger.batch(targets, { start: "top 90%", once: true, onEnter: show, onLeave: show, onEnterBack: show });
    });
    return () => mm.revert();
  }, [variant, stagger]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
