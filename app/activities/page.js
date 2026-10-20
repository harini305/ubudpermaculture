import Link from "next/link";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import ServiceList from "@/components/ServiceList";
import Reveal from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/Icons";
import { EXPERIENCES } from "@/lib/experiences";
import { og } from "@/lib/images";
import styles from "./activities.module.css";

export const metadata = {
  title: "Activities",
  description:
    "Farm tours, permaculture workshops, Balinese dance, fire shows, sunset BBQs, painting, archery, yoga, sound healing and massage at Ubud Permaculture, with prices from Rp150,000.",
  openGraph: og("2025/11/IMG_0170-3-scaled.jpg", "Feeding Susu the cow at Ubud Permaculture"),
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        image="2025/11/IMG_0170-3-scaled.jpg"
        alt="Wayan and guests feeding Susu the cow in her stable"
        position="center 40%"
        title="Activities"
        lead="Tours, workshops, culture and wellness on our family farm, 5km north of Ubud."
      >
        <div className="btn-row">
          <a href="#prices" className="btn btn--light">
            Prices & booking
          </a>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="tours">
        <div className="container">
          <div className="section-head">
            <h2 id="tours">Tours & workshops</h2>
            <p className="muted">Each of these has its own page with the full programme.</p>
          </div>
          <Reveal as="ul" className={styles.tours}>
            {EXPERIENCES.map((e) => (
              <li key={e.slug} data-reveal="">
                <Link href={e.href} className={styles.tour}>
                  <div className={styles.tourPhoto}>
                    <Img src={e.image} alt={e.alt} sizes="(min-width: 1000px) 25vw, (min-width: 600px) 50vw, 100vw" />
                  </div>
                  <h3>{e.short}</h3>
                  <p className={styles.tourFacts}>{e.facts}</p>
                  <p className={styles.tourBlurb}>{e.blurb}</p>
                  <span className="text-link">
                    Details <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--surface" id="prices" aria-labelledby="prices-title">
        <div className="container">
          <div className={`section-head ${styles.priceHead}`}>
            <h2 id="prices-title">Everything you can book online</h2>
            <p>
              Choose a date and time in our booking calendar, which confirms availability. Prices are in Indonesian
              rupiah.
            </p>
            <Link href="/book" className="btn btn--primary">
              Open the booking calendar
            </Link>
          </div>
          <ServiceList />
        </div>
      </section>

      <section className="section" aria-labelledby="also">
        <div className="container">
          <h2 id="also" className={styles.alsoTitle}>
            Also at the farm
          </h2>
          <ul className={styles.also}>
            <li>
              <Link href="/glamping">
                <h3>Glamping</h3>
                <p>4 tents, each in its own private jungle clearing with a firepit.</p>
              </Link>
            </li>
            <li>
              <Link href="/farmer-market">
                <h3>Art In The Jungle</h3>
                <p>Our farmer’s market and arts festival, with free entry.</p>
              </Link>
            </li>
            <li>
              <Link href="/biodynamic-retreat">
                <h3>Biodynamic Retreat</h3>
                <p>A 3 day hands-on permaculture retreat. Dates are being confirmed.</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
