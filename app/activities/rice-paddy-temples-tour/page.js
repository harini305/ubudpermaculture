import ExperiencePage from "@/components/ExperiencePage";
import { EXPLORE_FARM, JUNGLE_TOUR, RICE_PADDY_WALK, WELCOME_JUICE, step } from "@/lib/itinerary";
import { og } from "@/lib/images";

export const metadata = {
  title: "Rainforest, Rice Paddy & Temples Tour",
  description:
    "A 2 hour Balinese cultural lifestyle tour of the 4 Temples in Gentong Village, our rainforest, rice paddies and organic farm, with a 100% organic meal. Enquire for availability.",
  openGraph: og("2025/11/10-Gate-with-sunray-scaled.png", "A carved temple gate in Gentong village"),
};

// No temples tour exists in the public SimplyBook data (audit F6 / Q6): enquiry only.
// The Pexels stock hero of the original page is replaced by a genuine village photograph.
const steps = [
  step(WELCOME_JUICE, "2024/12/IMG_0060-copy.jpg", "Two young women in kebaya carrying offerings along the garden path"),
  {
    title: "Visit our Temples",
    body: (
      <p>
        Each Balinese village has 3 temples, and every family has their own Family Temple. Wayan your tour guide will introduce to you a
        day in the life of a Balinese family including in-depth explanations of the religious significance of each temple and the
        importance of the Ancestors in Balinese culture. Throughout the tour he will educate and amuse you with anecdotes of how Balinese
        Spirituality is used on a daily basis in the village.
      </p>
    ),
    image: "2024/12/WhatsApp-Image-2024-12-19-at-12.06.37_509fd112.jpg",
    alt: "A village temple shrine lit at night",
  },
  step({ title: "Explore the Farm: A Hands-On Tour", text: EXPLORE_FARM }, "2024/12/IMG_0176-3-copy.jpg", "Leading Susu the cow along a path through the farm"),
  {
    title: "Feed the Animals !",
    body: (
      <p>
        Kids and adults of all ages love to get close up to our amazing farm animals. You will get to meet Susu & Taksu our cows, Happy &
        Lili the farm cats, Adam & Eve the ducks, our turtles, fish and the occasional monkey !
      </p>
    ),
    image: "2025/05/6.jpg",
    alt: "A cow resting in the stable with her young calf",
  },
  step(RICE_PADDY_WALK, "2024/12/DJI_20240912203855_0053_D.jpg", "Aerial view of rice paddies and jungle near the farm"),
  step(JUNGLE_TOUR, "2024/12/WhatsApp-Image-2024-11-10-at-10.13.22_272d6621.jpg", "A guest crossing the jungle stream"),
];

export default function TemplesTourPage() {
  return (
    <ExperiencePage
      slug="rice-paddy-temples-tour"
      hero={{
        image: "2025/11/10-Gate-with-sunray-scaled.png",
        alt: "A carved temple gate in Gentong village lit by morning sun",
        position: "center 35%",
        title: "Rainforest, Rice Paddy & Temples Tour",
        lead: "Experience the Essence of Bali: A Journey into Nature and Culture",
      }}
      facts={[
        { term: "Duration", value: "2 hour experience" },
        { term: "Includes", value: "100% organic meal & organic fruit basket from our food forest" },
        { term: "Your guide", value: "Wayan" },
        { term: "Price", value: "Not published yet, please ask" },
        { term: "Booking", value: "By enquiry" },
      ]}
      booking={{ enquire: "the Rainforest, Rice Paddy & Temples Tour" }}
      intro={
        <>
          <h2>Balinese Lifestyle, Rice Paddy & Jungle Tour</h2>
          <p className="lead">
            Embark on a transformative Balinese cultural lifestyle tour that weaves together the beauty of nature, the wisdom of
            tradition, and the joy of learning sustainable practices. Our curated itinerary offers a 2 hour experience designed to
            reconnect you with the earth, nourish your body, and inspire your mind.
          </p>
          <p>We would like to invite your group to accompany us on a tour of our Rainforest, our Rice Paddies, our Temples and our Farm.</p>
          <p>
            We will show you how Balinese architecture and spirituality is an integral part of our very traditional lifestyle. A tour of
            the 4 Temples in Gentong Village, our Rainforest and our Rice Paddies with an explanation of the significance of each to
            modern daily life.
          </p>
          <ul>
            <li>Refreshing Welcome: Organic Fruit Juice</li>
            <li>Balinese Temple architectural & spirituality tour</li>
            <li>Food Forest & Farm visit : Feed the Animals !</li>
            <li>Rice Paddy & Jungle Walk: compare chemical vs organic techniques</li>
            <li>Delicious 100% organic Balinese Meal</li>
          </ul>
        </>
      }
      steps={steps}
      closing={{
        text: "Our Balinese cultural tour is more than just a Tour—it’s a journey into the heart of Bali’s natural beauty and cultural wisdom. Ask us about dates and price.",
      }}
    />
  );
}
