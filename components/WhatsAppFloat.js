"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./WhatsAppFloat.module.css";

// Floating chat button (replaces the "Click to Chat" plugin). It steps aside while the
// footer is on screen so it never covers footer links or the last call to action.
export default function WhatsAppFloat() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { rootMargin: "0px 0px 40px 0px" });
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.float} ${hidden ? styles.hidden : ""}`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <WhatsAppIcon width={26} height={26} />
      <span className="visually-hidden">Chat with us on WhatsApp (opens WhatsApp)</span>
    </a>
  );
}
