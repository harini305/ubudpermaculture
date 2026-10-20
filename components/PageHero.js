import Img from "./Img";
import HeroIntro from "./motion/HeroIntro";
import Parallax from "./motion/Parallax";
import HeroVideo from "./HeroVideo";
import styles from "./Hero.module.css";

// Full-bleed photographic hero used by the main pages. `size` controls height.
export default function PageHero({ image, alt, position = "center", title, lead, children, size = "medium", video }) {
  return (
    <section className={`${styles.hero} ${styles[size]}`}>
      <HeroIntro className={styles.inner}>
        <Parallax className={styles.media}>
          <Img src={image} alt={alt} sizes="100vw" priority position={position} />
        </Parallax>
        {video && <HeroVideo src={video.src} poster={video.poster} />}
        <div className={styles.shade} aria-hidden="true" />
        <div className={`container ${styles.content}`}>
          <h1 data-hero-item="">{title}</h1>
          {lead && (
            <p className={styles.lead} data-hero-item="">
              {lead}
            </p>
          )}
          {children && <div data-hero-item="">{children}</div>}
        </div>
      </HeroIntro>
    </section>
  );
}
