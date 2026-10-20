"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Every new page opens at the top (links to an #anchor are left to the browser).
export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
