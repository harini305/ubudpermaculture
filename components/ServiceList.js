import Link from "next/link";
import { SERVICES, SERVICE_GROUPS, formatRp } from "@/lib/services";
import Img from "./Img";
import Reveal from "./motion/Reveal";
import styles from "./ServiceList.module.css";

// Price list of the 12 SimplyBook services, laid out like a farm-stall menu.
export default function ServiceList() {
  return (
    <div className={styles.groups}>
      {SERVICE_GROUPS.map((group) => (
        <section key={group.title} className={styles.group} aria-labelledby={`g-${group.title}`}>
          <div className={styles.photo}>
            <Img src={group.image} alt={group.alt} sizes="(min-width: 960px) 30vw, 100vw" />
          </div>
          <div>
            <h3 id={`g-${group.title}`} className={styles.groupTitle}>
              {group.title}
            </h3>
            <Reveal as="ul" className={styles.items} stagger={0.06}>
              {group.items.map((key) => {
                const s = SERVICES[key];
                return (
                  <li key={key} className={styles.item} data-reveal="">
                    <div className={styles.line}>
                      <h4 className={styles.name}>{s.name}</h4>
                      <span className={styles.leader} aria-hidden="true" />
                      <p className={styles.price}>
                        {formatRp(s.price)}
                        {s.unit && <span> {s.unit}</span>}
                      </p>
                    </div>
                    <p className={styles.meta}>
                      {[s.duration, s.people, s.priceNote, s.notice].filter(Boolean).join(" · ")}
                    </p>
                    <p className={styles.summary}>{s.summary}</p>
                    <div className={styles.links}>
                      {s.page && (
                        <Link href={s.page} className="text-link">
                          Details
                        </Link>
                      )}
                      <Link href={s.book} className="text-link">
                        Book now
                      </Link>
                    </div>
                  </li>
                );
              })}
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}
