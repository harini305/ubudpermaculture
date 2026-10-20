import Link from "next/link";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import EnquiryActions from "@/components/EnquiryActions";
import ExternalLink from "@/components/ExternalLink";
import Reveal from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/Icons";
import { og } from "@/lib/images";
import { SITE } from "@/lib/site";
import styles from "./accommodation.module.css";

export const metadata = {
  title: "Accommodation",
  description:
    "Stay at the farm, 5km north of Ubud: 2 adjacent villas each with their own private infinity pool, and 4 glamping tents hidden away in the jungle. Up to 24 guests.",
  openGraph: og("2025/10/Garden-Villa-Exterior-with-Duck.jpg", "A timber villa and its pool at dusk"),
};

// Text from the Accommodation Options section of the original retreat page (audit 03 §3.5).
// No villa rates or booking channel were published, so stays are by enquiry.
export default function AccommodationPage() {
  return (
    <>
      <PageHero
        size="tall"
        image="2025/10/Garden-Villa-Exterior-with-Duck.jpg"
        alt="A two-storey timber villa beside its pool, lit at dusk"
        title="Stay at the farm"
        lead="2 adjacent villas each with their own private infinity pool, and 4 comfortable Glamping Tents hidden away in the Jungle for the more adventurous (and those on a budget!)"
      >
        <div className="btn-row">
          <a href="#enquire" className="btn btn--light">
            Ask about a stay
          </a>
          <a href="#options" className="btn btn--ghost-light">
            Compare the options
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className={`container ${styles.intro}`}>
          <p className={styles.statement}>
            As a family run Luxury Farm Retreat our mission is to provide a unique Balinese experience for each of our guests, embracing
            the tranquility of the rainforest and our traditional lifestyle.
          </p>
          <div className={styles.introText}>
            <p>
              Just 5km north of Ubud and surrounded by our extensive Permaculture Garden, backing on to a luscious tropical food forest,
              the whole Farm overlooks the beautiful Petanu River Valley and, to the rear of the Farm, extensive unspoilt rice paddies.
            </p>
            <p>It is the ideal spot for groups, families, yoga retreats and permaculture courses, and can accommodate comfortably until 24 persons.</p>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="options" aria-labelledby="options-title">
        <div className="container">
          <h2 id="options-title" className={styles.h2}>
            Two ways to stay
          </h2>
          <Reveal className={styles.options}>
            <article className={styles.option} data-reveal="">
              <div className={styles.optionPhoto}>
                <Img src="2025/06/5.jpg" alt="The wide timber veranda of a villa looking out to the jungle" sizes="(min-width: 900px) 50vw, 100vw" />
              </div>
              <div className={styles.optionBody}>
                <h3>The Villas</h3>
                <p>Two adjacent villas, each with their own private infinity pool, with views of Mt. Agung.</p>
                <ul className={styles.ticks}>
                  <li>Private infinity pool</li>
                  <li>Copper bathtub and open-air deck</li>
                  <li>Spacious Yoga Shala / Dance Studio</li>
                  <li>Massage in the privacy of the Villa, by booking</li>
                </ul>
                <ExternalLink href={SITE.sudamala} className="text-link" label="Sudamala Villas website, opens in a new tab">
                  Full description of the Villas and Amenities
                </ExternalLink>
              </div>
            </article>
            <article className={styles.option} data-reveal="">
              <div className={styles.optionPhoto}>
                <Img src="2025/10/IMG_2805-scaled.jpg" alt="A glamping tent with table and chairs in a private jungle clearing" sizes="(min-width: 900px) 50vw, 100vw" />
              </div>
              <div className={styles.optionBody}>
                <h3>Glamping Tents</h3>
                <p>Our low budget option: only 4 tents, each in its own private clearing in the jungle.</p>
                <ul className={styles.ticks}>
                  <li>Firepit in every clearing</li>
                  <li>15cm thick foam mattresses, sheets and pillow</li>
                  <li>Balinese Breakfast</li>
                  <li>Outdoor jungle shower or waterfall</li>
                </ul>
                <Link href="/glamping" className="text-link">
                  More about glamping <ArrowIcon />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="villas">
        <div className={`container ${styles.villas}`}>
          <div className={styles.villaText}>
            <h2 id="villas" className={styles.h2}>
              Built from the forest, facing the volcano
            </h2>
            <p className="lead">
              Nestled in a rainforest with spectacular views of Bali’s only active volcano Mt. Agung, our Villas are built in a fusion
              Balinese/Queenslander style using only sustainably sourced Ironwood (Ulin) and Bengkarai timber from Kalimantan, each corner
              of the Villa is aligned with the natural environment that surrounds it.
            </p>
            <p>
              Surrounding the Villas are our beautifully laid out <Link href="/activities/permaculture-workshop">Permaculture Gardens</Link>,
              designed around the ancient rice terraces and making extensive use of the traditional Subak water system. Our Villas back on
              to an unspoilt fruit forest packed with mango, coconut, cacao, coffee, rambutan and durian trees.
            </p>
            <p>
              You will learn the value of Slow Living amongst the peace and calm of raw nature, in the company of our little family of
              ducks, cows and cats.
            </p>
          </div>
          <div className={styles.villaPhotos}>
            <div className={styles.vpTall}>
              <Img src="2025/09/DJI_20240913201954_0072_D.jpg" alt="Aerial view of the villas among rice terraces and jungle" sizes="(min-width: 900px) 24vw, 50vw" />
            </div>
            <div>
              <Img src="2025/10/Mt-Agung-July-7.jpeg" alt="Mt Agung at sunset seen from the farm" sizes="(min-width: 900px) 20vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.band} aria-label="Evenings at the villas">
        <Img src="2025/10/IMG_0263-scaled.jpg" alt="A copper bathtub on a villa deck overlooking the jungle at dusk" sizes="100vw" />
        <div className={styles.bandShade} aria-hidden="true" />
        <div className={`container ${styles.bandText}`}>
          <p>
            A soak in our Copper bathtub watching the sunset, followed by a gentle yoga session on an open-air deck, an herbal-infused
            massage to melt the day’s thoughts away, or simply sitting with a cup of lemongrass tea as the sky turns shades of fire and
            gold—whatever you choose, the experience is one of deep relaxation.
          </p>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="while">
        <div className={`container ${styles.while}`}>
          <h2 id="while" className={styles.h2}>
            While you are here
          </h2>
          <ul className={styles.whileList}>
            <li>
              <Link href="/activities">
                <strong>Tours & workshops</strong>
                <span>Farm tour, permaculture workshop, cooking and temples tours</span>
              </Link>
            </li>
            <li>
              <Link href="/activities#prices">
                <strong>Culture & wellness</strong>
                <span>Balinese dance, fire show, sunset BBQ, yoga, sound healing and massage</span>
              </Link>
            </li>
            <li>
              <Link href="/farmer-market">
                <strong>Art In The Jungle</strong>
                <span>Our farmer’s market and arts festival</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-band" id="enquire">
        <div className="container inner">
          <div>
            <h2>Ask about a stay</h2>
            <p>Tell us your dates, number of guests and whether you would like a villa or a tent, and we will reply with price and availability.</p>
          </div>
          <EnquiryActions topic="a stay at the villas or glamping tents" light />
        </div>
      </section>
    </>
  );
}
