"use client";

import { useEffect, useState } from "react";
import { BOOKING_CATEGORIES, SIMPLYBOOK_WIDGET } from "@/lib/site";
import styles from "./BookingWidget.module.css";

// Embeds the SimplyBook calendar on our own page. SimplyBook handles availability,
// confirmation and payment; this site never processes a booking itself.
export default function BookingWidget() {
  const [category, setCategory] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = Number(new URLSearchParams(window.location.search).get("category"));
    if (BOOKING_CATEGORIES.some((c) => c.id === id)) setCategory(id);
  }, []);

  const choose = (id) => {
    setCategory(id);
    setLoaded(false);
    const url = new URL(window.location.href);
    if (id) url.searchParams.set("category", id);
    else url.searchParams.delete("category");
    window.history.replaceState(null, "", url);
  };

  const src = `${SIMPLYBOOK_WIDGET}${category ? `#book/category/${category}/` : "#book"}`;

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs} role="group" aria-label="Show activities by category">
        <button type="button" aria-pressed={!category} onClick={() => choose(null)}>
          All activities
        </button>
        {BOOKING_CATEGORIES.map((c) => (
          <button key={c.id} type="button" aria-pressed={category === c.id} onClick={() => choose(c.id)}>
            {c.label}
          </button>
        ))}
      </div>
      <div className={styles.frame}>
        {!loaded && <p className={styles.loading}>Loading the booking calendar…</p>}
        <iframe
          key={src}
          src={src}
          title="Ubud Permaculture booking calendar (SimplyBook)"
          onLoad={() => setLoaded(true)}
          allow="payment"
        />
      </div>
    </div>
  );
}
