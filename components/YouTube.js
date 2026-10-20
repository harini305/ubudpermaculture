"use client";

import { useState } from "react";
import { PlayIcon } from "./Icons";
import styles from "./YouTube.module.css";

// Click-to-load YouTube player: only a thumbnail is fetched until the visitor presses play.
export default function YouTube({ id, playlist, title }) {
  const [active, setActive] = useState(false);
  const embed = playlist
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${playlist}&autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

  return (
    <figure className={styles.wrap}>
      <div className={styles.frame}>
        {active ? (
          <iframe
            src={embed}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className={styles.facade} onClick={() => setActive(true)}>
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" decoding="async" width="480" height="360" />
            <span className={styles.play}>
              <PlayIcon width={26} height={26} />
            </span>
            <span className="visually-hidden">Play video: {title} (loads YouTube)</span>
          </button>
        )}
      </div>
      <figcaption className={styles.caption}>{title}</figcaption>
    </figure>
  );
}
