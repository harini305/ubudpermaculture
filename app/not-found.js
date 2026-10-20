import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="page-intro section--sand" style={{ paddingBottom: "var(--section)" }}>
      <div className="container">
        <h1>We couldn’t find that page</h1>
        <p className="lead">
          It may have moved when the website was rebuilt. These are good places to start:
        </p>
        <div className="btn-row" style={{ marginTop: "1.5rem" }}>
          <Link href="/" className="btn btn--primary">Home</Link>
          <Link href="/activities" className="btn btn--outline">Activities</Link>
          <Link href="/blog" className="btn btn--outline">Blog</Link>
          <Link href="/contact" className="btn btn--outline">Contact</Link>
        </div>
      </div>
    </section>
  );
}
