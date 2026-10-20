"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

// The farm video only loads on wider screens, without reduced-motion or Save-Data.
// Everyone else keeps the still photograph rendered underneath.
export default function HeroVideo({ src, poster }) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = navigator.connection?.saveData;
    const update = () => setEnabled(wide.matches && !calm.matches && !saveData);
    update();
    wide.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (enabled) ref.current?.play().catch(() => {});
  }, [enabled]);

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      className={styles.video}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
