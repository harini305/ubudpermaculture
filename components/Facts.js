import styles from "./Facts.module.css";

// Compact "at a glance" definition list: [{ term, value }].
export default function Facts({ items, title, className = "" }) {
  return (
    <div className={`${styles.wrap} ${className}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <dl className={styles.list}>
        {items.map((f) => (
          <div key={f.term} className={styles.row}>
            <dt>{f.term}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
