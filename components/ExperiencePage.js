import Link from "next/link";
import PageHero from "./PageHero";
import Facts from "./Facts";
import Itinerary from "./Itinerary";
import EnquiryActions from "./EnquiryActions";
import Img from "./Img";
import { ArrowIcon } from "./Icons";
import { EXPERIENCES } from "@/lib/experiences";
import styles from "./ExperiencePage.module.css";

function BookButton({ href, label = "Book Now", light = false }) {
  return (
    <Link href={href} className={`btn ${light ? "btn--light" : "btn--primary"}`}>
      {label}
    </Link>
  );
}

// Shared frame for the four experience pages. `booking` is either
// { book: url } for verified SimplyBook services, or { enquire: "topic" } when no
// online booking exists. Page-specific sections are passed as children/props.
export default function ExperiencePage({ slug, hero, facts, booking, intro, steps, stepsTitle, children, closing }) {
  const others = EXPERIENCES.filter((e) => e.slug !== slug);
  return (
    <>
      <PageHero image={hero.image} alt={hero.alt} position={hero.position} title={hero.title} lead={hero.lead}>
        <div className="btn-row">
          {booking.book ? (
            <BookButton href={booking.book} light />
          ) : (
            <a href="#enquire" className="btn btn--light">
              Ask about this experience
            </a>
          )}
          <Link href="/activities" className="btn btn--ghost-light">
            All activities
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container with-aside">
          <div className={styles.intro}>{intro}</div>
          <aside>
            <Facts title="At a glance" items={facts} />
            {booking.book ? (
              <div className={styles.asideCta}>
                <BookButton href={booking.book} />
                <p className={styles.asideNote}>Choose your date and time in our booking calendar.</p>
              </div>
            ) : (
              <p className={`notice ${styles.asideNotice}`}>
                <strong>Not bookable online yet.</strong> This experience is not currently listed on our booking page, so please{" "}
                <a href="#enquire">ask us</a> about dates and price.
              </p>
            )}
          </aside>
        </div>
      </section>

      {steps && (
        <section className="section section--surface" aria-labelledby="itinerary">
          <div className="container">
            <h2 id="itinerary" className={styles.stepsTitle}>
              {stepsTitle || "Your experience"}
            </h2>
            <Itinerary steps={steps} />
          </div>
        </section>
      )}

      {children}

      <section className="cta-band" id="enquire">
        <div className="container inner">
          <div>
            <h2>{closing?.title || "Join Us for an Unforgettable Experience"}</h2>
            {closing?.text && <p>{closing.text}</p>}
          </div>
          <div>
            {booking.book ? (
              <div className="btn-row">
                <BookButton href={booking.book} light />
                <Link href="/contact" className="btn btn--ghost-light">
                  Questions? Contact us
                </Link>
              </div>
            ) : (
              <EnquiryActions topic={booking.enquire} light />
            )}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="more-experiences">
        <div className="container">
          <h2 id="more-experiences" className={styles.moreTitle}>
            More experiences on the farm
          </h2>
          <ul className={styles.others}>
            {others.map((e) => (
              <li key={e.slug}>
                <Link href={e.href} className={styles.other}>
                  <div className={styles.otherPhoto}>
                    <Img src={e.image} alt="" sizes="(min-width: 760px) 30vw, 100vw" />
                  </div>
                  <span className={styles.otherTitle}>{e.short}</span>
                  <span className={styles.otherFacts}>{e.facts}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/activities" className="text-link">
            Every activity, with prices <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
