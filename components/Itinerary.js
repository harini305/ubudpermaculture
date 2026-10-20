import Img from "./Img";
import Reveal from "./motion/Reveal";
import styles from "./Itinerary.module.css";

// The experience told as a walk through the day: a green path with a stop per step.
// Steps with a photo alternate sides on wide screens.
export default function Itinerary({ steps }) {
  let photoIndex = 0;
  return (
    <ol className={styles.path}>
      {steps.map((s) => {
        const flip = s.image ? photoIndex++ % 2 === 1 : false;
        return (
          <li key={s.title} className={`${styles.step} ${s.image ? styles.withImage : ""} ${flip ? styles.flip : ""}`}>
            <div className={styles.text}>
              <h3>{s.title}</h3>
              {s.body}
            </div>
            {s.image && (
              <Reveal variant="unveil" className={styles.photo}>
                <div data-reveal="">
                  <Img src={s.image} alt={s.alt} sizes="(min-width: 900px) 40vw, 100vw" position={s.position} />
                </div>
              </Reveal>
            )}
          </li>
        );
      })}
    </ol>
  );
}
