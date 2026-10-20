import Link from "next/link";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import Testimonials from "@/components/Testimonials";
import GettingHere from "@/components/GettingHere";
import Reveal from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/Icons";
import { EXPERIENCES } from "@/lib/experiences";
import { LOWEST_PRICE, formatRp } from "@/lib/services";
import { pick } from "@/lib/testimonials";
import { SITE, bookingCategory } from "@/lib/site";
import { siteUrl } from "@/lib/seo";
import { getImage } from "@/lib/images";
import styles from "./home.module.css";

export const metadata = {
  title: { absolute: "Ubud Permaculture — family-run organic farm near Ubud, Bali" },
  description:
    "Welcome to our little secret hideaway hidden in the jungle just 5km north of Ubud Bali. Farm tours, permaculture workshops, Balinese cultural activities and glamping on a family-run organic farm.",
};

// SimplyBook categories from the original homepage list. Cooking is left out because
// category 6 holds no cooking class (audit F5); durations are omitted pending Q7.
const CATEGORIES = [
  { label: "Farming Activities", id: 1 },
  { label: "Cultural Activities", id: 2 },
  { label: "Children’s Activities", id: 3 },
  { label: "Wellness Activities", id: 4 },
  { label: "Fun Activities", id: 5 },
];

const VALUES = [
  {
    title: "Family Run",
    text: "We are a locally run family organic farm using Permaculture techniques. We love to share with children and families",
  },
  {
    title: "All Levels",
    text: "Whether you are a Beginner or have been doing organic farming for years we can tailor your visit so that you can learn more !",
  },
  { title: "Super Fresh", text: "Experience the taste of freshly picked organic food" },
  { title: "Harmony", text: "Escape the tourist crowds, and enjoy being in total harmony with nature" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ubud Permaculture",
  description: "A locally run family organic farm using Permaculture techniques, 5km north of Ubud, Bali.",
  telephone: "+6282266994463",
  email: SITE.email,
  image: `${siteUrl}${getImage("2024/12/IMG_0091-copy.jpg").src}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl sukaluwih, Gentong",
    addressLocality: "Tegallalang",
    postalCode: "80561",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  sameAs: [SITE.instagram],
};

export default function HomePage() {
  const [lead, ...rest] = EXPERIENCES;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        size="tall"
        image="2024/12/IMG_0022-copy.jpg"
        alt="A stepping-stone path through the permaculture garden"
        title="We Grow Amazing Things Everyday"
        video={{ src: "/video/farm-hero-720.mp4", poster: getImage("extra/farm-hero-poster.jpg").src }}
      >
        <div className="btn-row">
          <Link href="/book" className="btn btn--primary">
            Book Now
          </Link>
          <Link href="/activities" className="btn btn--ghost-light">
            See all activities
          </Link>
        </div>
        <p className="hero-note">(no credit card needed) for one of our unique tours</p>
      </PageHero>

      <section className="section" aria-labelledby="welcome">
        <div className={`container ${styles.welcome}`}>
          <div className={styles.welcomeText}>
            <h2 id="welcome">Welcome to Ubud Permaculture!</h2>
            <p className="lead">
              Welcome to our little secret hideaway hidden in the jungle just 5km north of Ubud Bali. If you have a few hours to spare
              while you are in Ubud and don’t wish to spend hours in the car then pop in to see us.
            </p>
            <p>
              We are a locally run family organic farm using Permaculture techniques. We love to share with children and families.
              Brothers Wayan and Nyoman started Ubud Permaculture Community on their family land during COVID, and the farm now has
              over 70 varieties of fruit and vegetables to tend daily.
            </p>
            <Link href="/about" className="text-link">
              Meet our family <ArrowIcon />
            </Link>
          </div>
          <Reveal className={styles.welcomePhotos} variant="unveil">
            <div className={styles.photoMain} data-reveal="">
              <Img
                src="2024/12/IMG_0091-copy.jpg"
                alt="The Ubud Permaculture family sitting together on the steps of a wooden pavilion"
                sizes="(min-width: 900px) 40vw, 90vw"
              />
            </div>
            <div className={styles.photoSmall} data-reveal="">
              <Img
                src="2024/12/DSCF0592-scaled.jpg"
                alt="Visitors meeting Susu the cow in her stable"
                sizes="(min-width: 900px) 18vw, 40vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="experiences">
        <div className="container">
          <div className="section-head">
            <h2 id="experiences">Step back in time and learn the art of Slow Living</h2>
            <p className="muted">Tours and workshops on the farm, guided by our family.</p>
          </div>
          <Reveal className={styles.experiences}>
            <Link href={lead.href} className={`${styles.exp} ${styles.expLead}`} data-reveal="">
              <div className={styles.expPhoto}>
                <Img src={lead.image} alt={lead.alt} sizes="(min-width: 900px) 50vw, 100vw" />
              </div>
              <div className={styles.expText}>
                <h3>{lead.title}</h3>
                <p className={styles.expFacts}>{lead.facts}</p>
                <p className={styles.expBlurb}>{lead.blurb}</p>
              </div>
            </Link>
            {rest.map((e) => (
              <Link key={e.slug} href={e.href} className={styles.exp} data-reveal="">
                <div className={styles.expPhoto}>
                  <Img src={e.image} alt={e.alt} sizes="(min-width: 900px) 25vw, (min-width: 600px) 50vw, 100vw" />
                </div>
                <div className={styles.expText}>
                  <h3>{e.short}</h3>
                  <p className={styles.expFacts}>{e.facts}</p>
                </div>
              </Link>
            ))}
          </Reveal>

          <div className={styles.more}>
            <div>
              <h3>More to do on the farm</h3>
              <p className="muted">
                Book online, from {formatRp(LOWEST_PRICE)} per person. Every price and duration is listed on our{" "}
                <Link href="/activities">activities page</Link>.
              </p>
            </div>
            <ul className={styles.categories}>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link href={bookingCategory(c.id)}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`section ${styles.values}`} aria-labelledby="values">
        <div className="container">
          <h2 id="values" className={styles.valuesTitle}>
            An exceptionally unique experience tailored to you
          </h2>
          <Reveal as="ul" className={styles.valueList}>
            {VALUES.map((v) => (
              <li key={v.title} data-reveal="">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <Testimonials items={pick("florence", "phillippe", "izzi", "stela", "margaux", "julia", "sarah", "cade")} />

      <section className="section" aria-labelledby="stay">
        <div className={`container ${styles.stay}`}>
          <div className={styles.stayPhoto}>
            <Img
              src="2026/05/365828273_666075035411216_7447158558989767212_n.jpg"
              alt="Glamping tents pitched along a grassy path beside the gardens"
              sizes="(min-width: 900px) 55vw, 100vw"
            />
          </div>
          <div className={styles.stayText}>
            <h2 id="stay">Stay in the jungle</h2>
            <p className="lead">
              Why not book one of our Glamping Tents hidden in the Jungle for a truly unique rainforest adventure !
            </p>
            <p>
              Unlike most campsites we only have 4 tents, all in their own private clearing with firepit in the jungle. Our sister
              business Sudamala Villas has 2 adjacent villas, each with their own private infinity pool.
            </p>
            <div className="btn-row">
              <Link href="/glamping" className="btn btn--primary">
                Glamping at the farm
              </Link>
              <Link href="/accommodation" className="btn btn--outline">
                The villas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="events">
        <div className="container">
          <h2 id="events" className={styles.eventsTitle}>
            Gatherings on the farm
          </h2>
          <div className={styles.events}>
            <Link href="/farmer-market" className={styles.event}>
              <div className={styles.eventPhoto}>
                <Img
                  src="2026/04/Art-In-The-Jungle-2026-04-18-at-04.03.11.jpeg"
                  alt="Art In The Jungle poster listing musicians and artists"
                  sizes="(min-width: 760px) 18vw, 36vw"
                />
              </div>
              <div>
                <h3>Art In The Jungle</h3>
                <p>Our farmer’s market and arts day: live music, artists, kids’ workshops and organic fruit & vegetable stalls.</p>
                <span className="text-link">
                  Event details <ArrowIcon />
                </span>
              </div>
            </Link>
            <Link href="/biodynamic-retreat" className={styles.event}>
              <div className={styles.eventPhoto}>
                <Img
                  src="2025/11/Biodynamic-Retreat-no-Dates.jpg"
                  alt="Biodynamic Retreat, 3 days at Ubud Permaculture, Tegallalang, Bali"
                  sizes="(min-width: 760px) 18vw, 36vw"
                />
              </div>
              <div>
                <h3>Biodynamic Retreat</h3>
                <p>A 3 day deep dive into Balinese traditions, Biodynamic techniques and Permaculture principles.</p>
                <span className="text-link">
                  Retreat details <ArrowIcon />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--sand fill-to-footer" aria-label="Getting here">
        <div className="container">
          <GettingHere />
        </div>
      </section>
    </>
  );
}
