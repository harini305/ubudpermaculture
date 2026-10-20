"use client";

import { useEffect } from "react";

// Publishes the footer's height as --footer-h so the last section can fill the screen
// exactly together with the footer (see .fill-to-footer in globals.css).
export default function FooterHeight() {
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const set = () => document.documentElement.style.setProperty("--footer-h", `${footer.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);
  return null;
}
