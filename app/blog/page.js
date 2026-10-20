import Link from "next/link";
import Img from "@/components/Img";
import Reveal from "@/components/motion/Reveal";
import { POSTS, excerpt, formatDate } from "@/lib/posts";
import { BLOG_ALT } from "@/lib/blogAlt";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog",
  description:
    "Articles from Ubud Permaculture on permaculture in the tropics, composting, slow living, Balinese culture, food and the landscapes around Ubud.",
};

// At most 9 images load on this page (audit 09: no more than 10 initially);
// older articles are listed as text.
export default function BlogIndex() {
  const [lead, ...others] = POSTS;
  const grid = others.slice(0, 8);
  const archive = others.slice(8);

  return (
    <>
      <section className="section page-top">
        <div className="container">
          <h1 className="visually-hidden">Ubud Permaculture News</h1>
          <Link href={`/blog/${lead.slug}`} className={styles.lead}>
            <div className={styles.leadPhoto}>
              <Img src={lead.featured} alt={BLOG_ALT[lead.featured] || ""} sizes="(min-width: 900px) 58vw, 100vw" priority />
            </div>
            <div>
              <p className={styles.meta}>
                {formatDate(lead.published)} · {lead.minutes} min read
              </p>
              <h2>{lead.title}</h2>
              <p className={styles.excerpt}>{excerpt(lead, 240)}</p>
              <span className="text-link">Read the article</span>
            </div>
          </Link>

          <Reveal as="ul" className={styles.grid}>
            {grid.map((p) => (
              <li key={p.slug} data-reveal="">
                <Link href={`/blog/${p.slug}`} className={styles.card}>
                  <div className={styles.cardPhoto}>
                    <Img src={p.featured} alt="" sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw" />
                  </div>
                  <p className={styles.meta}>{formatDate(p.published)}</p>
                  <h3>{p.title}</h3>
                </Link>
              </li>
            ))}
          </Reveal>

          <h2 className={styles.archiveTitle}>Earlier articles</h2>
          <ul className={styles.archive}>
            {archive.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>
                  <span className={styles.archiveName}>{p.title}</span>
                  <span className={styles.archiveDate}>{formatDate(p.published)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
