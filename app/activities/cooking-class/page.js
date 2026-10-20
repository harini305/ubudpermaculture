import ExperiencePage from "@/components/ExperiencePage";
import ExternalLink from "@/components/ExternalLink";
import YouTube from "@/components/YouTube";
import { JUNGLE_TOUR, RICE_PADDY_WALK, WELCOME_JUICE, step } from "@/lib/itinerary";
import { og } from "@/lib/images";

export const metadata = {
  title: "“Farm to Table” Cooking Workshop",
  description:
    "Collect ingredients on our organic farm near Ubud, learn to cook sate lilit and nasi campur, walk the rice paddies and jungle, then enjoy the Balinese meal you prepared. Enquire for availability.",
  openGraph: og("2024/12/WhatsApp-Image-2025-08-25-at-11.05.31_0a4b98fc.jpg", "The open-air farm kitchen"),
};

// No cooking class exists in the public SimplyBook data (audit F5 / Q5): enquiry only.
const steps = [
  step(WELCOME_JUICE, "2024/12/IMG20230521134608-scaled.jpg", "A basket of freshly picked greens and vegetables"),
  {
    title: "Explore the Farm: A Hands-On Tour",
    body: (
      <p>
        Next, take a guided tour of our sprawling organic farm. Here, you’ll discover the harmony of a thriving ecosystem that sustains
        itself without the need for harmful chemicals. Learn about traditional and modern farming techniques as you stroll through lush
        vegetable patches, fruit orchards, and herb gardens, whilst collecting the ingredients for your cooking experience !
      </p>
    ),
    image: "2024/12/IMG20230527103147-scaled.jpg",
    alt: "Harvested fruit and vegetables laid out beside the natural pool",
  },
  {
    title: "Hands-on Balinese Cooking !",
    body: (
      <>
        <p>During this segment of the tour, you’ll learn how to prepare one or more of the following dishes, depending on seasonal availability :</p>
        <ul>
          <li>
            <strong>Sate lilit.</strong> Made from either minced beef, chicken, fish, pork, or even turtle meat, it’s mixed with coconut,
            coconut milk, and a rich blend of vegetables and spices. The satay is then wrapped around bamboo, sugarcane or lemongrass
            sticks before it’s grilled over charcoal. You can enjoy sate lilit with or without dipping sauce.
          </li>
          <li>
            <strong>Nasi ayam and nasi campur.</strong> A plate of rice comes with different elements of Balinese food, such as a portion
            of betutu (spiced chicken or duck), mixed vegetables, and a dab of spicy sambal matah (Balinese sauce). Nasi ayam and nasi
            campur are sometimes served with a bowl of soup. For those who do not want it too spicy, simply ask to reduce the amount of
            chilli !
          </li>
        </ul>
        <p>This empowering session will equip you with practical skills to start your own Balinese cooking at home.</p>
      </>
    ),
    image: "2024/12/WhatsApp-Image-2025-08-25-at-11.05.30_f7e4dc16.jpg",
    alt: "A cooking station with a gas burner and fresh ingredients in the open-air kitchen",
  },
  step(RICE_PADDY_WALK, "2025/06/1-7.jpg", "Terraced rice paddies near the farm"),
  step(JUNGLE_TOUR, "2024/12/WhatsApp-Image-2024-11-10-at-10.13.22_272d6621.jpg", "A guest crossing the jungle stream below the farm"),
  {
    title: "Savor a Balinese Meal",
    body: (
      <p>
        After a day of exploration, enjoy the traditional Balinese meal you have prepared with ingredients fresh from the farm. Enjoy
        dishes bursting with authentic flavors, lovingly crafted to provide a culinary experience as rich as the culture itself.
      </p>
    ),
    image: "2024/12/WhatsApp-Image-2025-08-25-at-12.20.41_440b8e55.jpg",
    alt: "Guests sitting down to their meal at a table in the garden",
  },
];

export default function CookingClassPage() {
  return (
    <ExperiencePage
      slug="cooking-class"
      hero={{
        image: "2024/12/WhatsApp-Image-2025-08-25-at-11.05.31_0a4b98fc.jpg",
        alt: "The open-air farm kitchen set up for a cooking class",
        position: "center 60%",
        title: "“Farm to Table” Cooking Workshop",
        lead: "More than just a cooking class—a journey into the heart of Bali’s natural beauty and cultural wisdom.",
      }}
      facts={[
        { term: "What you cook", value: "Sate lilit, nasi ayam or nasi campur (seasonal)" },
        { term: "Spice level", value: "Ask us to reduce the chilli" },
        { term: "Price", value: "Not published yet, please ask" },
        { term: "Booking", value: "By enquiry" },
      ]}
      booking={{ enquire: "the “Farm to Table” Cooking Workshop" }}
      intro={
        <>
          <h2>Explore Balinese Culture through its Cuisine</h2>
          <p>
            In{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Balinese_Hinduism" icon={false} label="Wikipedia, opens in a new tab">
              Hindu Balinese
            </ExternalLink>{" "}
            traditions, certain foodstuffs are served in religious rituals, used as an offering for gods. During religious ceremony,
            festively decorated fruits and foodstuff are brought to the temple as an offering. Balinese believed that certain foodstuff is
            an appropriate offering for certain deities. For example, ducks are favoured by Hindu gods, such as Brahma.
          </p>
        </>
      }
      steps={steps}
      closing={{
        text: "Our “Farm to Table” Cooking Workshop is more than just a cooking class—it’s a journey into the heart of Bali’s natural beauty and cultural wisdom. Ask us about dates and price.",
      }}
    >
      <section className="section" aria-labelledby="videos">
        <div className="container">
          <h2 id="videos" style={{ marginBottom: "1.5rem" }}>
            In the farm kitchen
          </h2>
          <div className="split" style={{ alignItems: "start" }}>
            <YouTube id="rFMMEe_qKqs" title="Farm to Table Promo Video" />
            <YouTube id="NsLBWGTBTyA" title="Cooking with Maaike" />
          </div>
        </div>
      </section>
    </ExperiencePage>
  );
}
