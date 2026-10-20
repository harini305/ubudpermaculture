import Link from "next/link";
import Img from "@/components/Img";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/motion/Reveal";
import HeroIntro from "@/components/motion/HeroIntro";
import { ArrowIcon } from "@/components/Icons";
import { pick } from "@/lib/testimonials";
import { og } from "@/lib/images";
import styles from "./about.module.css";

export const metadata = {
  title: "Meet our Family",
  description:
    "Wayan, his brother Nyoman and their extended family started Ubud Permaculture Community on their family land during COVID. Meet the family, the animals and the farm.",
  openGraph: og("2024/12/IMG_0091-copy.jpg", "The Ubud Permaculture family"),
};

// Portraits from the original About gallery. Names are not given because the
// source does not identify who is in each photo.
const PORTRAITS = [
  ["2024/12/IMG_0197-3-copy.jpg", "A smiling family member in a traditional udeng headdress"],
  ["2024/12/IMG_0229-scaled.jpg", "A woman of the family in a lilac kebaya"],
  ["2024/12/IMG_0198-3-scaled.jpg", "A young man in an udeng headdress"],
  ["2024/12/IMG_0231-scaled.jpg", "A woman of the family in a red kebaya"],
  ["2024/12/IMG_0199-3-scaled.jpg", "A young man dressed in white for a ceremony"],
  ["2024/12/IMG_0230-scaled.jpg", "A woman in a green lace kebaya"],
  ["2024/12/IMG_0233-scaled.jpg", "A smiling young woman in a lace kebaya"],
  ["2024/12/IMG_0232-scaled.jpg", "A young woman in a red kebaya"],
];

const ANIMALS = [
  { name: "Susu & Taksu", kind: "our friendly cows", image: "2025/05/6.jpg", alt: "A cow resting in the stable with her calf" },
  { name: "Happy & Lili", kind: "our farm cats", image: "2024/12/IMG_0202-scaled.jpg", alt: "A boy in white ceremonial dress holding one of the farm cats" },
  { name: "Adam & Eve", kind: "and our extended duckling family", image: "2024/12/Duck-Closeup-scaled.jpg", alt: "A white duck with her ducklings" },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.opening}>
        <HeroIntro className={`container ${styles.openingGrid}`}>
          <div className={styles.openingText}>
            <h1 data-hero-item="">Why We’re The Most Awesome Family !</h1>
            <p className="lead" data-hero-item="">
              We started Ubud Permaculture Community on our family land during COVID as we all lost our jobs in tourism.
            </p>
          </div>
          <div className={styles.openingPhoto} data-hero-media="">
            <Img
              src="2024/12/IMG_0091-copy.jpg"
              alt="The Ubud Permaculture family sitting together on the steps of a wooden pavilion"
              sizes="(min-width: 960px) 58vw, 100vw"
              priority
            />
          </div>
        </HeroIntro>
      </section>

      <section className="section" aria-labelledby="story">
        <div className={`container ${styles.story}`}>
          <h2 id="story" className="visually-hidden">
            Our Story
          </h2>
          <div className={styles.letter}>
            <p className={styles.letterOpen}>
              My name is Wayan and I run the Community with my brother Nyoman and our extended families.
            </p>
            <p>
              Next time you are in Ubud please pop in to see us and I would love to share with you the inside story of a day in the life of
              our very traditional Balinese village.
            </p>
            <p className={styles.sign}>— Wayan</p>
          </div>
          <div className={styles.storyAside}>
            <p>
              Why not try one of our unique <Link href="/activities">Tours and Cooking Classes</Link> ?
            </p>
            <p>
              If you would like to stay with us in one of our new Villas you can find out more on our{" "}
              <Link href="/accommodation">accommodation page</Link>, or read{" "}
              <Link href="/blog/a-day-in-the-life-of-serenity-experiencing-ubud-through-the-lens-of-sudamala-villas">
                A Day in the Life of Serenity
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className={styles.family} aria-labelledby="family">
        <div className="container">
          <h2 id="family" className={styles.h2}>
            The family
          </h2>
        </div>
        <ul className={styles.portraits} tabIndex={0} aria-label="Portraits of the family, scroll horizontally">
          {PORTRAITS.map(([src, alt]) => (
            <li key={src}>
              <Img src={src} alt={alt} sizes="(min-width: 760px) 260px, 62vw" />
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.nyoman} aria-labelledby="nyoman">
        <div className={`container ${styles.nyomanGrid}`}>
          <Reveal className={styles.nyomanPhoto} variant="unveil">
            <div data-reveal="">
              <Img src="2025/06/2-3-e1750777027347.jpg" alt="Nyoman crouching beside young plants in the garden" sizes="(min-width: 900px) 40vw, 100vw" />
            </div>
          </Reveal>
          <div className={styles.nyomanText}>
            <h2 id="nyoman">Hi everyone – I am Nyoman and I will be guiding your tour.</h2>
            <p>
              Our farm is totally based on Permaculture Organic principles and we have over 70 varieties of fruit and vegetables to tend
              daily.
            </p>
            <p>
              A typical day starts as the sun rises by feeding the animals and watering the gardens, before collecting the manure from
              Susu’s house to make compost. I will share with you all of the permaculture knowledge that we have picked up in the last few
              years.
            </p>
            <p>Take a look around and don’t be shy.</p>
            <Link href="/activities/farm-tour" className="btn btn--light">
              Join a Farm Tour
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="animals">
        <div className="container">
          <div className={styles.animalsHead}>
            <h2 id="animals" className={styles.h2}>
              You will be meeting…
            </h2>
            <p className="muted">…our turtles, fish and the occasional monkey too !</p>
          </div>
          <Reveal as="ul" className={styles.animals}>
            {ANIMALS.map((a) => (
              <li key={a.name} data-reveal="">
                <div className={styles.animalPhoto}>
                  <Img src={a.image} alt={a.alt} sizes="(min-width: 760px) 30vw, 100vw" />
                </div>
                <h3>{a.name}</h3>
                <p>{a.kind}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="village">
        <div className="container">
          <h2 id="village" className={styles.h2}>
            Life in our village
          </h2>
          <Reveal className={styles.mosaic} variant="unveil">
            <div className={styles.mA} data-reveal="">
              <Img src="2024/12/IMG_0227-scaled.jpg" alt="The family gathered beside the villa pool at dusk" sizes="(min-width: 900px) 50vw, 100vw" />
            </div>
            <div className={styles.mB} data-reveal="">
              <Img src="2024/12/IMG_0250-scaled.jpg" alt="Dancers in traditional dress performing on the deck" sizes="(min-width: 900px) 25vw, 50vw" />
            </div>
            <div className={styles.mC} data-reveal="">
              <Img src="2024/12/IMG_0060-copy.jpg" alt="Two young women in kebaya carrying offerings along a garden path" sizes="(min-width: 900px) 25vw, 50vw" />
            </div>
            <div className={styles.mD} data-reveal="">
              <Img src="2024/12/Blessing-Ceremony-3.jpeg" alt="Family and guests seated together at a blessing ceremony" sizes="(min-width: 900px) 25vw, 50vw" />
            </div>
            <div className={styles.mE} data-reveal="">
              <Img src="2024/12/IMG_0068-copy.jpg" alt="A boy feeding the ducks at the duck pond" sizes="(min-width: 900px) 25vw, 50vw" />
            </div>
          </Reveal>
          <div className={styles.next}>
            <Link href="/activities" className="text-link">
              Visit us: see all activities <ArrowIcon />
            </Link>
            <Link href="/accommodation" className="text-link">
              Stay with us <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials items={pick("florence", "phillippe")} title="What our volunteers say" />
    </>
  );
}
