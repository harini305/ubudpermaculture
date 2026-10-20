import Link from "next/link";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import EnquiryActions from "@/components/EnquiryActions";
import Reveal from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/Icons";
import { og } from "@/lib/images";
import styles from "./glamping.module.css";

export const metadata = {
  title: "Glamping",
  description:
    "Only 4 glamping tents, each in its own private jungle clearing with a firepit, on our organic permaculture farm overlooking the river with views of Mt Agung. 10 minutes from Ubud. Enquire for price and availability.",
  openGraph: og("2026/05/WhatsApp-Image-2025-11-28-at-07.46.36_521d1768.jpg", "A glamping tent in a jungle clearing"),
};

// No price, availability or booking channel was published for glamping (audit F14 / Q13),
// so the page offers an enquiry only.
const KEY_FACTS = [
  ["Only 4 tents", "each in its own private clearing"],
  ["A firepit", "in every clearing"],
  ["Balinese Breakfast", "shared with the family"],
  ["10 minutes", "to Ubud and to Tegallalang"],
];

const TENT = [
  "15cm thick foam mattresses",
  "Sheets and pillow",
  "Tables and chairs",
  "Lots of privacy from the other campers",
  "Basic camping facilities",
];

const TILES = [
  {
    title: "Shower under a waterfall",
    text: "Use our beautiful outdoor jungle shower (cold water only I am afraid!) or stand under our waterfall fed by the water from the Holy Spring !",
    image: "2026/05/WhatsApp-Image-2026-05-10-at-06.47.09.jpeg",
    alt: "An old water wheel turning in the spring-fed stream",
  },
  {
    title: "The whole farm is yours",
    text: "Guests will have full access to our Farm & Jungle areas, our Art Space, Firepits and our natural pool.",
    image: "2026/05/Sculpture-in-Pond.jpeg",
    alt: "Guests beside the natural pool with its fountain sculpture",
  },
  {
    title: "Breakfast together",
    text: "We will be sharing breakfast with you in one of the many outbuildings dotted around the site. Stargazing is fantastic.",
    image: "2026/05/WhatsApp-Image-2025-11-28-at-07.46.35_e55eaaf0.jpg",
    alt: "A quiet clearing among tall trees near the tents",
  },
];

export default function GlampingPage() {
  return (
    <>
      <PageHero
        size="tall"
        image="2026/05/WhatsApp-Image-2025-11-28-at-07.46.36_521d1768.jpg"
        alt="A glamping tent beside a thatched shelter in the jungle"
        position="center 60%"
        title="Glamping at Ubud Permaculture"
        lead="Why not book one of our Glamping Tents hidden in the Jungle for a truly unique rainforest adventure !"
      >
        <div className="btn-row">
          <a href="#enquire" className="btn btn--light">
            Ask about a stay
          </a>
        </div>
      </PageHero>

      <section className={styles.facts} aria-label="Glamping at a glance">
        <ul className="container">
          {KEY_FACTS.map(([big, small]) => (
            <li key={big}>
              <strong>{big}</strong>
              <span>{small}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className={`container ${styles.intro}`}>
          <h2 className={styles.statement}>Nestled between a forest and the river, you will find total peace and calm.</h2>
          <div>
            <p className="lead">
              Overlooking the river with views of the Mt Agung volcano we welcome you to our little Organic Permaculture Farm.
            </p>
            <p>
              Our low budget option for those wishing to be totally connected to Nature hidden away in our lush, tropical rainforest. Unlike
              most campsites we only have 4 tents all in their own private clearing with firepit in the jungle, so the space is all yours to
              enjoy !
            </p>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="tent">
        <div className={`container ${styles.tent}`}>
          <Reveal className={styles.tentPhotos} variant="unveil">
            <div className={styles.tp1} data-reveal="">
              <Img src="2026/05/IMG_2806-scaled.jpg" alt="A tent with a folding table and chairs under the jungle canopy" sizes="(min-width: 900px) 30vw, 60vw" />
            </div>
            <div className={styles.tp2} data-reveal="">
              <Img
                src="2026/05/365828273_666075035411216_7447158558989767212_n.jpg"
                alt="Tents pitched along a grassy path by the gardens"
                sizes="(min-width: 900px) 22vw, 40vw"
              />
            </div>
          </Reveal>
          <div className={styles.tentText}>
            <h2 id="tent">Your tent</h2>
            <p>
              You will be sleeping in one of our 4 large tents, each hidden away in the jungle with lots of privacy from the other campers.
              They are fully equipped and ready for you.
            </p>
            <ul className={styles.ticks}>
              {TENT.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Life at the campsite">
        <div className="container">
          <Reveal as="ul" className={styles.tiles}>
            {TILES.map((t) => (
              <li key={t.title} data-reveal="">
                <div className={styles.tilePhoto}>
                  <Img src={t.image} alt={t.alt} sizes="(min-width: 900px) 33vw, 100vw" />
                </div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.mission} aria-labelledby="mission">
        <div className={`container ${styles.missionGrid}`}>
          <h2 id="mission">More than a campsite</h2>
          <div>
            <p className={styles.missionLead}>
              We are primarily an Educational Institution rather than a commercial farm so your contribution will also help us in our
              mission to encourage local Balinese farmers to learn and adopt Permaculture principles.
            </p>
            <p>
              While you are staying with us you will have lots of opportunities to learn about Balinese culture, Balinese cooking and of
              course getting a deep insight into the joys and pains of tropical permaculture living. You will be meeting Susu our friendly
              cow, Happy & Lili our farm cats, Adam & Eve and our extended duckling family, turtles, fish and the occasional monkey !
            </p>
            <p>
              We are surrounded by beautiful traditional rice paddies where you can walk or cycle for miles, away from the busy centre of
              Ubud. If you wish to experience the many alternative healing and yoga options (and of course the vibrant nightlife!) of Ubud it
              is only 10 minutes away by motorbike.
            </p>
            <div className={styles.missionLinks}>
              <Link href="/activities" className="text-link">
                Activities and Classes while you are here <ArrowIcon />
              </Link>
              <Link href="/about" className="text-link">
                Meet the family <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="host">
        <div className={`container ${styles.host}`}>
          <div className={styles.hostPhoto}>
            <Img src="2024/12/IMG_0176-3-copy.jpg" alt="Leading Susu the cow along a path through the farm" sizes="200px" />
          </div>
          <div>
            <h2 id="host" className={styles.hostTitle}>
              Your hosts
            </h2>
            <p className={styles.hostQuote}>
              “My name is Wayan and I run the Community with my brother Nyoman and our extended families. I live in the village just 500m
              away so will be there to help should you need anything.”
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band" id="enquire">
        <div className="container inner">
          <div>
            <h2>Ask about a stay</h2>
            <p>
              Glamping is not booked online. Message us with your dates and number of guests and we will reply with price and availability.
            </p>
            <p className="small">
              Prefer a villa with a private infinity pool? <Link href="/accommodation">See our accommodation</Link>
            </p>
          </div>
          <EnquiryActions topic="a glamping stay" light />
        </div>
      </section>
    </>
  );
}
