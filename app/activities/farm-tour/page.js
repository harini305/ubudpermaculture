import ExperiencePage from "@/components/ExperiencePage";
import Img from "@/components/Img";
import Reveal from "@/components/motion/Reveal";
import { SERVICES, formatRp } from "@/lib/services";
import { og } from "@/lib/images";

const s = SERVICES.farmTour;

export const metadata = {
  title: "Farm Tour",
  description:
    "Join our fast and friendly 1 hour Farm Tour, 5km north of Ubud: a welcome organic drink, 70+ varieties of fruit and vegetables, our farm animals and a rice paddy & jungle walk. Rp150,000 per person.",
  openGraph: og("2025/06/1-6.jpg", "Guests on the farm tour with Susu the cow"),
};

export default function FarmTourPage() {
  return (
    <ExperiencePage
      slug="farm-tour"
      hero={{
        image: "2025/06/1-6.jpg",
        alt: "Guests on the farm tour learning to feed Susu the cow",
        title: "Farm Tour",
        lead: "Join our fast and friendly 1 hour Farm Tour.",
      }}
      facts={[
        { term: "Duration", value: s.duration },
        { term: "Price", value: `${formatRp(s.price)} per person` },
        { term: "Group size", value: "2–10 people" },
        { term: "Booking", value: s.notice },
        { term: "Where", value: "5km north of Ubud, on the way to Tegallalang" },
      ]}
      booking={{ book: s.book }}
      intro={
        <>
          <h2>We are just 5km north of Ubud on the right hand side as you are driving to Tegallalang Rice Paddies !</h2>
          <h3 style={{ margin: "1.5rem 0 0.5rem" }}>Tour includes :</h3>
          <ul>
            <li>Welcome Organic Drink</li>
            <li>Tour of our Organic Permaculture Farm with 70+ varieties of fruit and vegetables</li>
            <li>
              Meet our Furry Friends – get to know Susu & Taksu our family cows, Happy & Lily the Farm cats, Adam & Eve our friendly
              ducks and our assorted family of chickens, turtles and fish
            </li>
            <li>
              Rice Paddy & Jungle walk – guided walk through our local rice paddies & jungle, where Nyoman will explain to you all of
              the Balinese traditions that go into improving and maintaining the land and water
            </li>
          </ul>
        </>
      }
      closing={{ title: "Come and meet the family", text: "Available for groups of 2 - 10 people. Please book 1 day ahead if possible !" }}
    >
      <section className="section section--surface" aria-label="The farm from above">
        <div className="container">
          <Reveal className="split" variant="unveil">
            <div className="split__photo" data-reveal="">
              <Img
                src="2025/09/DJI_20240912203456_0049_D-Copy.jpg"
                alt="Aerial view of the farm: gardens, pavilions and jungle"
                sizes="(min-width: 900px) 50vw, 100vw"
              />
            </div>
            <div className="split__photo" data-reveal="">
              <Img
                src="2024/12/DJI_20240912203855_0053_D.jpg"
                alt="Aerial view of the rice paddies and jungle around the farm"
                sizes="(min-width: 900px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </ExperiencePage>
  );
}
