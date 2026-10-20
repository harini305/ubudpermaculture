"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./Icons";
import styles from "./Testimonials.module.css";

// Horizontally scrolling quotes with native swipe/scroll plus previous/next buttons.
export default function Testimonials({ items, title = "Words from people who have stayed and worked with us", dark = true }) {
  const track = useRef(null);
  const [open, setOpen] = useState({});
  const [cut, setCut] = useState({});

  // Only offer "Read more" where the 7-line clamp actually hides text.
  useEffect(() => {
    const measure = () => {
      const next = {};
      track.current?.querySelectorAll("[data-quote]").forEach((p) => {
        if (p.scrollHeight > p.clientHeight + 2) next[p.dataset.quote] = true;
      });
      setCut(next);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const step = (dir) => {
    const el = track.current;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * (card ? card.offsetWidth + 32 : el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className={`section ${dark ? "section--green" : "section--sand"} ${styles.section}`} aria-labelledby="testimonials-title">
      <div className={`container ${styles.head}`}>
        <h2 id="testimonials-title">{title}</h2>
        {items.length > 2 && (
          <div className={styles.controls}>
            <button type="button" onClick={() => step(-1)} className={styles.ctrl}>
              <ArrowIcon style={{ transform: "rotate(180deg)" }} />
              <span className="visually-hidden">Previous testimonials</span>
            </button>
            <button type="button" onClick={() => step(1)} className={styles.ctrl}>
              <ArrowIcon />
              <span className="visually-hidden">Next testimonials</span>
            </button>
          </div>
        )}
      </div>
      <div className="container">
        <ul ref={track} className={styles.track} tabIndex={0} aria-label="Testimonials, scroll horizontally">
          {items.map((t) => (
            <li key={t.id} className={styles.card}>
              <figure>
                <blockquote>
                  <p id={`q-${t.id}`} data-quote={t.id} className={open[t.id] ? undefined : styles.clamped}>
                    “{t.quote}”
                  </p>
                </blockquote>
                {(cut[t.id] || open[t.id]) && (
                  <button
                    type="button"
                    className={styles.more}
                    aria-expanded={!!open[t.id]}
                    aria-controls={`q-${t.id}`}
                    onClick={() => setOpen((o) => ({ ...o, [t.id]: !o[t.id] }))}
                  >
                    {open[t.id] ? "Show less" : "Read more"}
                  </button>
                )}
                <figcaption>
                  <span className={styles.name}>{t.name}</span>, {t.from}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
