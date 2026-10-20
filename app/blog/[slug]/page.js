import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/Img";
import RichText from "@/components/RichText";
import { ArrowIcon } from "@/components/Icons";
import { POSTS, excerpt, formatDate, getPost } from "@/lib/posts";
import { BLOG_ALT } from "@/lib/blogAlt";
import { og } from "@/lib/images";
import styles from "./article.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: excerpt(post, 155),
    openGraph: { type: "article", publishedTime: post.published, ...og(post.featured, BLOG_ALT[post.featured] || post.title) },
  };
}

// Groups consecutive list items into one <ul>.
function groupBlocks(blocks) {
  const out = [];
  for (const b of blocks) {
    if (b.type === "li") {
      const last = out[out.length - 1];
      if (last?.type === "ul") last.items.push(b);
      else out.push({ type: "ul", items: [b] });
    } else out.push(b);
  }
  return out;
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const index = POSTS.indexOf(post);
  const newer = POSTS[index - 1];
  const older = POSTS[index + 1];

  return (
    <article>
      <header className={`page-intro ${styles.header}`}>
        <div className="container">
          <p className={styles.crumb}>
            <Link href="/blog">Blog</Link>
          </p>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.meta}>
            Ubud Permaculture · <time dateTime={post.published}>{formatDate(post.published)}</time> · {post.minutes} min read
          </p>
        </div>
      </header>

      <div className={`container ${styles.hero}`}>
        <Img src={post.featured} alt={BLOG_ALT[post.featured] || ""} sizes="(min-width: 1240px) 1100px, 100vw" priority />
      </div>

      <div className="container">
        <div className={`prose ${styles.body}`}>
          {groupBlocks(post.blocks).map((b, i) => {
            if (b.type === "img")
              return (
                <figure key={i}>
                  <Img src={b.src} alt={BLOG_ALT[b.src] || ""} sizes="(min-width: 760px) 672px, 100vw" />
                </figure>
              );
            if (b.type === "ul")
              return (
                <ul key={i}>
                  {b.items.map((li, j) => (
                    <li key={j}>
                      <RichText text={li.text} links={li.links} />
                    </li>
                  ))}
                </ul>
              );
            const Tag = b.type === "p" ? "p" : b.type;
            return (
              <Tag key={i}>
                <RichText text={b.text} links={b.links} />
              </Tag>
            );
          })}
        </div>

        <aside className={styles.visit}>
          <h2>Visit the farm</h2>
          <p>Ubud Permaculture is a family-run organic farm 5km north of Ubud. Join a farm tour, a workshop or one of our cultural activities.</p>
          <Link href="/activities" className="btn btn--primary">
            See activities
          </Link>
        </aside>

        <nav className={styles.pager} aria-label="More articles">
          {older ? (
            <Link href={`/blog/${older.slug}`} className={styles.prev}>
              <span className={styles.dir}>Previous article</span>
              <span className={styles.pagerTitle}>{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link href={`/blog/${newer.slug}`} className={styles.next}>
              <span className={styles.dir}>Next article</span>
              <span className={styles.pagerTitle}>{newer.title}</span>
            </Link>
          )}
        </nav>
        <p className={styles.all}>
          <Link href="/blog" className="text-link">
            All articles <ArrowIcon />
          </Link>
        </p>
      </div>
    </article>
  );
}
