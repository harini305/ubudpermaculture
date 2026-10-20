import Link from "next/link";
import ExperiencePage from "@/components/ExperiencePage";
import ExternalLink from "@/components/ExternalLink";
import Img from "@/components/Img";
import YouTube from "@/components/YouTube";
import { ArrowIcon } from "@/components/Icons";
import { SERVICES, formatRp } from "@/lib/services";
import { JUNGLE_TOUR, RICE_PADDY_WALK, WELCOME_JUICE, step } from "@/lib/itinerary";
import { og } from "@/lib/images";
import { SITE } from "@/lib/site";
import styles from "./workshop.module.css";

const s = SERVICES.workshop;

export const metadata = {
  title: "Organic / Regenerative Farming Permaculture Workshop",
  description:
    "A 4 hour hands-on permaculture workshop near Ubud: composting, organic pesticides and fertilisers, permaculture design, a 100% organic Balinese meal and a Permaculture Ambassador Certificate. Rp500,000 per person.",
  openGraph: og("2024/12/IMG_0076-scaled.jpg", "Nyoman preparing seedlings in the farm nursery"),
};

const steps = [
  step(WELCOME_JUICE, "2025/06/2-4.jpg", "Fresh juice and a Balinese spread laid out on a wooden table"),
  {
    title: "Explore the Farm: Permaculture can be fun !",
    body: (
      <p>
        Next, take a guided tour of our sprawling organic farm. Throughout the tour Nyoman will educate and amuse you with anecdotes of
        how Balinese Spirituality is used on a daily basis to improve productivity on the farm. Learn about traditional and modern
        farming techniques as you stroll through lush vegetable patches, fruit orchards, and herb gardens.
      </p>
    ),
    image: "2024/12/IMG_0077.jpg",
    alt: "Nyoman working at the potting bench among banana trees",
  },
  {
    title: "Feed the Animals !",
    body: (
      <p>
        Kids and adults of all ages love to get close up to our beautiful farm animals. Nyoman will show you how to feed our amazing
        family of ducks, chickens, cows and cats !
      </p>
    ),
    image: "2024/12/Duck-Closeup-scaled.jpg",
    alt: "A white muscovy duck with ducklings on the farm",
  },
  {
    title: "Dive into Permaculture: Workshops and Demos",
    body: (
      <>
        <p>
          During this segment of the tour, you’ll be introduced to the principles of permaculture—a sustainable design philosophy that
          mimics natural ecosystems. Participate in hands-on workshops where you’ll:
        </p>
        <ul>
          <li>Learn the art of composting, turning kitchen scraps and garden waste into nutrient-rich soil.</li>
          <li>Create your own organic pesticides and fertilizers using simple, natural ingredients.</li>
        </ul>
        <p>This empowering session will equip you with practical skills to start your own sustainable garden at home.</p>
      </>
    ),
    image: "2025/06/2-3-e1750777027347.jpg",
    alt: "Nyoman crouching beside young plants and a bucket of compost",
  },
  step(RICE_PADDY_WALK, "2025/06/2-7.jpg", "A group walking single file along a path through the farm"),
  step(JUNGLE_TOUR, "2024/12/WhatsApp-Image-2024-11-10-at-10.13.22_5a9b548c.jpg", "A stream running through the jungle below the farm"),
  {
    title: "Savor a Balinese Meal",
    body: (
      <p>
        After a day of exploration, delight in a traditional Balinese meal prepared with ingredients fresh from the farm. Enjoy dishes
        bursting with authentic flavors, lovingly crafted to provide a culinary experience as rich as the culture itself.
      </p>
    ),
    image: "2024/12/WhatsApp-Image-2025-08-25-at-12.20.41_440b8e55.jpg",
    alt: "Guests sharing a meal at a table in the garden",
  },
  {
    title: "Earn Your Permaculture Ambassador Certificate",
    body: (
      <p>
        As the day concludes, receive your Permaculture Ambassador Certificate, a symbol of your commitment to sustainable living. This
        token serves as both a memento of your journey and an inspiration to share what you’ve learned with your community.
      </p>
    ),
  },
];

export default function WorkshopPage() {
  return (
    <ExperiencePage
      slug="permaculture-workshop"
      hero={{
        image: "2024/12/IMG_0076-scaled.jpg",
        alt: "Nyoman preparing seedlings at the potting bench",
        title: "Organic / Regenerative Farming Permaculture Workshop",
        lead: "Ideal for those planning an organic garden or farm back home !",
      }}
      facts={[
        { term: "Duration", value: s.duration },
        { term: "Price", value: `${formatRp(s.price)} per person` },
        { term: "Includes", value: "100% organic Balinese meal + Permaculture Ambassador Certificate" },
        { term: "Guide", value: "Nyoman" },
      ]}
      booking={{ book: s.book }}
      intro={
        <>
          <h2>Unveil the Wisdom of Regenerative Permaculture Principles</h2>
          <blockquote className={styles.quote}>
            <p>
              “Sitting at our back doorsteps, all we need to live a good life lies about us. Sun, wind, people, buildings, stones, sea,
              birds and plants surround us. Cooperation with all these things brings harmony, opposition to them brings disaster and
              chaos.”
            </p>
            <footer>
              Bill Mollison,{" "}
              <ExternalLink href="https://www.goodreads.com/work/quotes/371799" icon={false}>
                Introduction to Permaculture
              </ExternalLink>
            </footer>
          </blockquote>
          <p>
            Join us for a Hands-On Organic Garden Experience. Learn the secrets of organic growing using Permaculture techniques. Deep
            dive into Composting recipes, how to make your own organic pesticides and fertilisers, and the essentials of Permaculture
            Design. Get your hands in the earth and discover the rhythm of local farm life!
          </p>
          <Link href="/blog/a-guide-to-creating-your-own-permaculture-garden-in-ubud" className="text-link">
            Read: A Guide to Creating Your Own Permaculture Garden in Ubud <ArrowIcon />
          </Link>
        </>
      }
      steps={steps}
      closing={{ title: "Book Your Group", text: "Includes 100% organic Balinese meal + Permaculture Ambassador Certificate !" }}
    >
      <section className="section" aria-labelledby="what-is">
        <div className="container">
          <div className="split">
            <div className="split__text">
              <h2 id="what-is">What is Permaculture?</h2>
              <p>The term “Permaculture” combines two Latin words :</p>
              <ul>
                <li>“permanens” = to persist indefinitely</li>
                <li>“culture,” = the practices and traditions of human occupation</li>
              </ul>
              <p>Permaculture emphasizes long-term, regenerative practices rather than short-term exploitation.</p>
              <p>
                The concept was developed in the late 1960s by Bill Mollison and David Holmgren as an alternative to modern
                industrialized methods of agriculture. The core ethics of permaculture revolve around caring for the Earth, caring for
                people, and fair resource distribution.
              </p>
              <p>
                Permaculture applies a holistic approach to personal gardens, farms, or even larger-scale urban community projects.
                Designing a permaculture garden involves placing plants, animals, and water systems in ways that maximize efficiency
                while minimizing environmental impact. By encouraging collaboration with natural processes, permaculture promotes a way
                of living that is both sustainable and regenerative, offering a practical response to climate change and resource
                depletion.
              </p>
              <p>
                Find out more on our <ExternalLink href={SITE.odysee}>Odysee Channel</ExternalLink>.
              </p>
            </div>
            <div className={styles.media}>
              <YouTube id="QBLKuYDh5S8" title="What is Permaculture? By Bill Mollison, David Holmgren" />
              <figure className={styles.zones}>
                <Img src="2024/12/5-Permaculture-Zones.jpeg" alt="Illustrated map of the five permaculture zones, from house to wilderness" sizes="(min-width: 900px) 40vw, 100vw" />
                <figcaption>The permaculture zones</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="encouragement">
        <div className="container">
          <h2 id="encouragement" className={styles.encTitle}>
            Some words of encouragement
          </h2>
          <div className={styles.enc}>
            <p>
              Don’t worry about being able to identify each of these plants. The world is full of botanists and horticulturists. All you
              have to do is design. You don’t have to be a botanist; you don’t have to be a bulldozer driver; you don’t have to be a
              fence builder; you don’t have to be an architect.
            </p>
            <p>
              The exquisite sight, sound, and smell of wilderness is many times more powerful if it is earned through physical
              achievement, if it comes at the end of a long and fatiguing trip for which vigorous good health is necessary.
            </p>
          </div>
        </div>
      </section>
    </ExperiencePage>
  );
}
