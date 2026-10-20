import PageHero from "@/components/PageHero";
import Facts from "@/components/Facts";
import Img from "@/components/Img";
import YouTube from "@/components/YouTube";
import GettingHere from "@/components/GettingHere";
import EventStatus from "@/components/EventStatus";
import ExternalLink from "@/components/ExternalLink";
import Reveal from "@/components/motion/Reveal";
import { og } from "@/lib/images";
import { SITE } from "@/lib/site";
import styles from "./market.module.css";

export const metadata = {
  title: "Art In The Jungle — Farmer’s Market",
  description:
    "Art In The Jungle at Ubud Permaculture: live music & DJ sets, artists, kids’ workshops, organic fruit & vegetable stalls, all-day bar and coffee shop. Free entry.",
  openGraph: og("2024/12/Harvest-2023-04-19-at-10.13.13.jpg", "Fresh organic produce from the farm"),
};

// Event details as published on 2026-10-19 (audit 03 §3.6). The page title asked for
// the event name (Q12) and the artist count (Q11) are owner questions, so the
// count "23" is not repeated: 19 artists are named.
const MUSICIANS =
  "Ras Rawon, Rizal Hadi, Elpako, Adam Alydrus, Miyoshi Masato, Gethzamani, Tigra & Isami, The Bali Rock City, Mangolarecn, Ilham Arsanto, Agustic, Dalem Saren";
const ARTISTS =
  "Ayu Murniali, Evelisa Abrahamsson, Ustina Yakovleva, Kcndisan, Lisa Arnika, Glauser, Linkan Paienewen, Ekaterina Perfilieva, Kristina Kushkush, Mogany, Lau Cabantous, Jefa, Rezky Afriza, GedeSayur, Modjo, Agung Priadi Bualo, Holy, Georgiy Popov, Fajar Kadafi";

const LIVE = [
  ["Live mural", "Jesna"],
  ["Live graffiti", "Mobas"],
  ["Live model drawing", "Bangun Tidur"],
  ["Live traditional tattoo", "Borneo Handpoke, Folk Pattern, Matasulu"],
  ["Live Art performance", "Marta Dobay, Valentina, Bali Flow Art"],
  ["Kid’s corner", "Kancil Art Bali"],
  ["Handmade paper workshop", "Leaf roof x Studio Api"],
  ["A question for you", "Pia"],
];

const VIDEOS = [
  { id: "21yt2dt2UbM", title: "Art in the Jungle : Morning Session" },
  { id: "5DTfKJyIBcE", title: "Art In The Jungle : Afternoon session" },
  { id: "OBxC6taS0a0", title: "Art In The Jungle Zeb & Chix" },
  { id: "UjdofsmI9u4", title: "Midwinter Italian Jungle Party June 21 2025" },
  { id: "Hi9BDz9uCkI", playlist: "PL9OtSx4-MQAVviYYfhpAplFDQhliHljJ_", title: "MuFest at Ubud Permaculture (playlist)" },
];

export default function FarmerMarketPage() {
  return (
    <>
      <PageHero
        image="2024/12/Harvest-2023-04-19-at-10.13.13.jpg"
        alt="Fresh organic fruit and vegetables from the farm laid out on a wall"
        title="Art In The Jungle !"
        lead="Musicians, Artists, Kid's Workshops, All day bar, Coffee Shop and much, much more"
      />

      <section className="section">
        <div className="container with-aside">
          <div className={styles.intro}>
            <h2>Something for every taste</h2>
            <p className="lead">
              Bring the Kids, Bring a Picnic, Bring Your Parents, Bring your paintbrushes, Bring your Dancing Shoes, Enjoy a Day Out In The
              Jungle !
            </p>
            <p>Fresh organic fruit & vegetables, Locally made produce, Handcrafts, Children’s Activities, music, art, farm tours.</p>
            <p>Kids and Adults of all ages are welcome to join the workshops and activities !</p>
            <p>
              A celebration of creativity, community, and culture, deep in the heart of Ubud! This is not just a festival, it’s a movement.
              A gathering of souls, creators, thinkers, and dreamers. Come as you are, and leave inspired.
            </p>
            <h3 className={styles.subhead}>What’s on</h3>
            <ul className={styles.whatson}>
              <li>Organic Fruit & Vegetable Stalls</li>
              <li>All-Day Bar & Coffee Shop !</li>
              <li>Art market: Waning Bentang, Pawon Cahaya, Crafty Ambar, Reges Art, Get Plastic Indonesia, Artist Art Merchandise, and many more</li>
              <li>3 stages & 12 Live Music & DJ sets</li>
              <li>Live mural, Live graffiti, Live model drawing, Live traditional tattoo, Live Art/Dance performance, Handmade paper workshop</li>
              <li>Kid’s corner: Kancil Art Bali : Children’s games, activities and painting workshop !</li>
              <li>Organic Farming Tour</li>
              <li>Organic Seed Swap !</li>
              <li>Meet Susu our friendly cow, Happy and Lily the Farm cats and Adam & Eve and their extended duck family</li>
            </ul>
          </div>
          <aside>
            <EventStatus
              endsAt="2026-10-25T18:00:00+08:00"
              className="notice"
              upcoming="Next event: Sunday, 25th October 2026."
              past={
                <>
                  <strong>This date has passed.</strong> The details below are from the 25 October 2026 event. Follow{" "}
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                    {SITE.instagramHandle}
                  </a>{" "}
                  for the next one.
                </>
              }
            />
            <Facts
              className={styles.facts}
              title="Event details"
              items={[
                { term: "Date", value: "Sunday, 25th October 2026" },
                { term: "Time", value: "9 AM – 6 PM, fire dance show after sunset" },
                { term: "Entry", value: "Free" },
                { term: "Where", value: "Ubud Permaculture, Gentong – Ubud, Bali" },
                { term: "Bring", value: "Your mat, reusable cup, and jungle spirit!" },
                {
                  term: "Market stalls",
                  value: (
                    <>
                      WA Fajar on{" "}
                      <a href="https://wa.me/6285338299226" target="_blank" rel="noopener noreferrer">
                        +62 853-3829-9226
                        <span className="visually-hidden"> (opens WhatsApp)</span>
                      </a>{" "}
                      for a stall or more information
                    </>
                  ),
                },
              ]}
            />
            <p className={styles.insta}>
              News and next dates:{" "}
              <ExternalLink href={SITE.instagram} label="Instagram, opens in a new tab">
                {SITE.instagramHandle}
              </ExternalLink>
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="lineup">
        <div className="container">
          <h2 id="lineup" className={styles.lineupTitle}>
            Line-up
          </h2>
          <div className={styles.lineup}>
            <div>
              <h3>12 Live Music & DJ Performances</h3>
              <p>{MUSICIANS}</p>
              <h3>Artists</h3>
              <p>{ARTISTS}</p>
            </div>
            <dl className={styles.live}>
              {LIVE.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Reveal className={styles.posters} variant="unveil">
            <figure data-reveal="">
              <Img src="2026/09/AITJ-Flyer.png" alt="Art In The Jungle Vol. 3 flyer: art, live music, art market, coming soon" sizes="(min-width: 760px) 30vw, 80vw" />
            </figure>
            <figure data-reveal="">
              <Img
                src="2026/04/Art-In-The-Jungle-2026-04-18-at-04.03.11.jpeg"
                alt="Art In The Jungle Vol. 2 poster from Sunday 26 April 2026, listing musicians and artists"
                sizes="(min-width: 760px) 30vw, 80vw"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="videos">
        <div className="container">
          <h2 id="videos" className={styles.lineupTitle}>
            From previous events
          </h2>
          <div className={styles.videos}>
            {VIDEOS.map((v) => (
              <YouTube key={v.title} id={v.id} playlist={v.playlist} title={v.title} />
            ))}
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
