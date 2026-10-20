import Link from "next/link";
import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import Testimonials from "@/components/Testimonials";
import EnquiryActions from "@/components/EnquiryActions";
import ExternalLink from "@/components/ExternalLink";
import { formatRp } from "@/lib/services";
import { pick } from "@/lib/testimonials";
import { og } from "@/lib/images";
import { SITE } from "@/lib/site";
import styles from "./retreat.module.css";

export const metadata = {
  title: "Biodynamic Retreat",
  description:
    "A 3 day Biodynamic and Permaculture retreat at Ubud Permaculture: 6 modules over 20 hours of lectures, hands-on sessions and demonstrations, with Jonathan Semo (Organix Asia) and Nyoman Gunawan.",
  openGraph: og("2025/11/Biodynamic-Retreat-no-Dates.jpg", "Biodynamic Retreat, 3 days at Ubud Permaculture"),
};

const FORM = "https://docs.google.com/forms/d/e/1FAIpQLScjcwuxDD1dRQFNOqGfx62MoMb_Xsux-Dy5-pBzvwjcwc5a5A/viewform";

const MODULES = [
  ["Module 1: Biodynamic and Permaculture", "History, Ethics, and principles – Pattern understanding"],
  ["Module 2: The Permaculture Design", "Elements and functions – Zone planning – Use of Natural resources"],
  ["Module 3: Soil (where it all begins!)", "pH – soil problems – regenerating and mineralizing soil"],
  ["Module 4: Water management", "Calculating catchment – Ponds and dams – slopes, terraces and swales"],
  ["Module 5: What to plant where?", "Cool to hot climates – Climatic factors – Altitude – Prevalent winds – Maximising sunshine"],
  ["Module 6: Animals as a fundamental part of the system", "recycling manure for compost – helping control pests"],
];

const THEMES = [
  ["Concepts", "Rudolf Steiner’s Biodynamic Permaculture: History, Philosophy & Principles – Patterns in Nature – Regenerative design – Energy Storage and Resources"],
  ["Ecological themes in design", "Soil, where it all begins – Trees and Forests – Water – Climate"],
  [
    "Cultivated ecology",
    "Soil building techniques – Forest gardens – vegetable gardens – Nursery care – raised beds – renewable energy systems – waste recycling – water management – Integrated Pest Management – climate-appropriate strategies – Natural Buildings – Urban Permaculture",
  ],
  ["Design", "Intro to Design – Process and Methodologies of design – Techniques and tools for Design Strategies"],
  ["Social permaculture", "Integrating with your Community – Education in the wider Community – Embracing the Arts, Music & Dance"],
  [
    "Hands-on learning",
    "This course relies heavily on regular Hands on sessions introducing you to the basic tools & techniques of applying Permaculture to food cultivation: Soil testing – Seed Planting – Composting strategies – Organic Pesticides and Fertilizer – Farm Animals. These sessions will allow attendees to see a working farm in action and get their hands dirty !",
  ],
];

// Transcribed from the schedule image (chedule.jpg) so it is readable on every screen.
const SCHEDULE = [
  ["Breakfast", "8.30 AM", "9.00 AM"],
  ["Morning session", "9.00 AM", "01.00 PM"],
  ["Morning tea break", "11.00 AM", "11.15 AM"],
  ["Lunch", "01.00 PM", "2.00 PM"],
  ["Afternoon Session (with afternoon tea)", "2.00 PM", "5.30 PM"],
  ["Break (2hrs)", "5.30 PM", "7.30 PM"],
  ["Dinner", "7.30 PM", "8.30 PM"],
  ["Evening Session (optional)", "9.00 PM onwards", ""],
];

// FAQ text as published. The date in "When exactly is it?" conflicts with the page
// title (audit F1 / Q1), so it is withheld; the daily timetable is kept.
const FAQS = [
  [
    "Can I attend the PDC and stay in my own accommodation ?",
    <p key="a">
      Yes! Participants are free to choose their own accommodation, on or off site. However, the course begins right after breakfast at
      9am. There are many accommodation options in the area, just search for{" "}
      <ExternalLink href="https://maps.app.goo.gl/4ZwiE4DDzJYf4ELC7" label="Google Maps, opens in a new tab">
        Ubud Permaculture, Gentong
      </ExternalLink>{" "}
      on Google Maps to find our location.
    </p>,
  ],
  [
    "Do I need any prerequisites or a particular background, in order to participate in the PDC ?",
    <p key="a">
      There are no prerequisites except for a basic knowledge of the English language as this course will be taught in English. This
      Permaculture retreat is tailored for people of all ages and educational backgrounds.
    </p>,
  ],
  [
    "When exactly is it ?",
    <>
      <p>
        <strong>The retreat dates are being confirmed.</strong> Please <a href="#register">contact us</a> for the current dates before you
        register.
      </p>
      <p>
        Classes start at 9am until 1pm; lunch (free buffet) is served until 2pm; classes start again at 2pm until 5:30pm (3 pm on the
        last day). Weather-wise, outdoor activities take place after 2pm.
      </p>
    </>,
  ],
  [
    "Will I be certified at the end of the course ?",
    <p key="a">Every participant is eligible for certification provided the minimum percentage of modules are attended (80%).</p>,
  ],
  [
    "Is there any age criteria for the course ?",
    <p key="a">
      The minimum age set for this course in particular is 15 years so as to ascertain that the participant is mature enough for
      understanding and applying this knowledge. Shorter courses are available for younger permaculture enthusiasts.
    </p>,
  ],
  [
    "Is this a theoretical or practical course ?",
    <p key="a">
      A Permaculture Design Certificate course is rather theory-heavy (72 hours). This retreat therefore is practice oriented through
      workshops, hands-on and demonstrations.
    </p>,
  ],
  [
    "Are there internships and/or volunteer opportunities to build on practical knowledge after the course ?",
    <p key="a">
      Yes, there are many volunteer opportunities and internships in organisations, farms and communities across Bali. Facilitators will
      be sharing contacts by the end of the course so interested participants can deepen their practice. If you would like to volunteer
      at Ubud Permaculture please talk to Nyoman or check out the <ExternalLink href={SITE.wwoof}>WWOOFers site</ExternalLink> !
    </p>,
  ],
  [
    "Why do the course ?",
    <p key="a">
      After this 3 days biodynamic retreat, you will see the world around you with different eyes. Thousands of change-makers,
      educators, consultants and activists around the world are actively practising Biodynamic techniques and influencing the decisions
      of major corporations, small businesses and people to change the way we live. With Permaculture, we can now grow the revolution
      that our planet needs.
    </p>,
  ],
];

export default function RetreatPage() {
  return (
    <>
      <PageHero
        image="2024/12/Permaculture-Garden.jpg"
        alt="Lush permaculture garden beds on the farm"
        title="Biodynamic Retreat at Ubud Permaculture"
        lead="3 Day Workshop: a deep dive into Balinese traditions, Biodynamic techniques and Permaculture principles."
      >
        <div className="btn-row">
          <a href="#register" className="btn btn--light">
            Fees & registration
          </a>
        </div>
      </PageHero>

      <div className={`container ${styles.dateNotice}`}>
        <p className="notice" role="note">
          <strong>Retreat dates are being confirmed.</strong> Earlier versions of this page gave two different sets of dates, so none are
          shown until the family confirms them. Please <a href="#register">ask us for the dates</a> before registering.
        </p>
      </div>

      <section className="section">
        <div className="container with-aside">
          <div className={styles.text}>
            <h2>Welcome to Ubud Permaculture!</h2>
            <p className="lead">Welcome to our little secret retreat hideaway hidden in the jungle just 5km north of Ubud Bali.</p>
            <p>
              By the end of the retreat, you will have made valuable contacts with like-minded people from around the world, and have
              learnt the basics of Permaculture Design that you can take away to start your own journey as a Permaculture Ambassador !
            </p>
            <p>
              Educate yourself in regenerative land management, efficient market garden practises, agroforestry, pastured animal systems,
              forest farming, rainwater harvesting and much, much more …
            </p>
            <p>
              Permaculture offers clues and guidance on how to make your life fit to the place where you live. It isn´t a new idea.
              Indigenous cultures have been living sustainably in their ancestral territories for thousands of years. Permaculture then, is
              a way of offering to those of us not fortunate enough to have been born into a sustainable civilization a model for how to
              live sustainably in one place.
            </p>
            <p>
              After witnessing too many permaculture courses with too little meaningful hands-on experience, we are offering this retreat
              as a deep dive in to practical application of Balinese traditions, Biodynamic techniques and Permaculture principles. You
              will be guided by expert instruction from regenerative farmers, sharing what they’ve learned over decades in the field. The
              curriculum is organized around 6 modules (20 hours) combining lectures, videos, hands-on and practical demonstrations, giving
              each participant an opportunity to learn at their own pace.
            </p>
            <h3 className={styles.subhead}>This 3 days retreat offers you the opportunity to:</h3>
            <ul>
              <li>Observe and learn from numerous well-established permaculture systems in action</li>
              <li>Discover and understand our farm, rainforest and rice paddies with a new vision</li>
              <li>Connect with a network of local and international gardeners, builders and designers</li>
              <li>Participate in installations, hands-on activities and collaborative workshops</li>
              <li>Acquire a certificate and a toolbox of permaculture techniques, strategies, solutions, resources, and skills.</li>
            </ul>
            <p>
              The skills you will learn are valued all over the world, and will be needed to re-design and improve many aspects of your
              life, from your home to your livelihood, relationships, and community.
            </p>
          </div>
          <aside>
            <div className={styles.flyer}>
              <Img
                src="2025/11/Biodynamic-Retreat-no-Dates.jpg"
                alt="Organix Asia flyer: Biodynamic Retreat, 3 days at Ubud Permaculture, Tegallalang, Bali"
                sizes="(min-width: 960px) 30vw, 100vw"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="curriculum">
        <div className="container">
          <div className="section-head">
            <h2 id="curriculum">Curriculum outline</h2>
            <p>
              The curriculum is divided into 6 modules over 20 hours. Each module reinforces the knowledge gained in earlier sessions – as
              spiral learning: each subject is related to the others. By the end of the course, this whole-systems approach will give you
              regenerative tools to improve your life.
            </p>
          </div>
          <div className={styles.curriculum}>
            <ol className={styles.modules}>
              {MODULES.map(([t, d]) => (
                <li key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
            <div className="accordion">
              {THEMES.map(([t, d]) => (
                <details key={t}>
                  <summary>{t}</summary>
                  <div className="panel">
                    <p>{d}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="facilitators">
        <div className="container">
          <h2 id="facilitators" className={styles.h2gap}>
            The Facilitators
          </h2>
          <div className={styles.people}>
            <article className={styles.person}>
              <div className={styles.portrait}>
                <Img src="2025/10/Jo-Semo.png" alt="Portrait of Jonathan Semo" sizes="200px" />
              </div>
              <div>
                <h3>Jonathan Semo</h3>
                <p className={styles.role}>Permaculture ambassador, Organix Asia</p>
                <p>
                  After completing my first Permaculture Design Course in Argentina in 2001, my life shifted and I started to apply
                  permaculture principles in my work, bringing holistic management to my musical events and festivals. During the year
                  2013, I graduated in the field of Education, Design, Site Development, and Community Service at the Permaculture
                  Institute in St Louis. Being trained to be a Permaculture designer and a consultant by Scott Pittman and Larry Santoyo.
                  “It has been an amazing learning experience to complete this training among the most experienced Permaculture designers
                  and educators in the world”. For more than a decade now, I have been consulting, designing, regenerating and facilitating
                  workshops around the world (South America, North Africa, Europe and South East Asia).
                </p>
                <p className="small">
                  Organix Asia on <ExternalLink href="https://www.facebook.com/organasia">Facebook</ExternalLink> and{" "}
                  <ExternalLink href="https://www.instagram.com/organix.asia">Instagram</ExternalLink>
                </p>
              </div>
            </article>
            <article className={styles.person}>
              <div className={styles.portrait}>
                <Img src="2025/06/2-6-e1751211685616.jpg" alt="Nyoman Gunawan with freshly harvested vegetables" sizes="200px" />
              </div>
              <div>
                <h3>Nyoman Gunawan</h3>
                <p className={styles.role}>Permaculture Designer, Ubud Permaculture</p>
                <p>
                  I am Nyoman and I will be your local guide to understand how here at Ubud Permaculture, we have integrated Permaculture
                  principles with traditional Balinese life. You will be meeting “Susu & Taksu” our cows, our farm cats, our crazy chickens
                  and “Adam & Eve” with their extended duckling family.
                </p>
                <p>
                  Our farm is totally based on Permaculture Organic principles, and we usually have over 70 varieties of fruit and
                  vegetables to tend daily. A typical day starts as the sun rises by feeding the animals and watering the gardens, before
                  collecting the manure from Susu’s house to make compost. We will share with you all of the permaculture knowledge that we
                  have picked up in the last few years.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="schedule">
        <div className={`container ${styles.scheduleWrap}`}>
          <div>
            <h2 id="schedule" className={styles.h2gap}>
              Tentative daily schedule
            </h2>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Session</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map(([s, a, b]) => (
                    <tr key={s}>
                      <th scope="row">{s}</th>
                      <td>{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="small muted">
              (This might be subject to change to adjust to the audience. A detailed schedule will be given to the participants at the
              venue)
            </p>
          </div>
          <div>
            <h3 className={styles.subhead}>Food</h3>
            <p>
              The meals are fresh and locally prepared with as many homegrown ingredients as possible. It is low on chilli and of course
              made with love. If you have any specific supplements or health products that you like to use please carry your own (eg:
              Spirulina, Ayurvedic medicine, multi vitamins, etc). We are not far from Ubud so you can order food easily using Grab or
              Gojek.
            </p>
            <p>
              All the food served is strictly vegetarian with some dairy based food options for those who consume dairy. Vegan and gluten
              free items are also available. For those with other intolerances and allergies, please do specify clearly in the
              registration form and we will try our best to accommodate.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="stay">
        <div className="container">
          <div className="split">
            <div className="split__text">
              <h2 id="stay">Accommodation options</h2>
              <p className="lead">
                Just 5km north of Ubud, our farm resort consists of 2 adjacent villas each with their own private infinity pool, and 4
                comfortable Glamping Tents hidden away in the Jungle for the more adventurous (and those on a budget!)
              </p>
              <p>
                Surrounded by our extensive Permaculture Garden, backing on to a luscious tropical food forest, the whole Farm overlooks the
                beautiful Petanu River Valley and, to the rear of the Farm, extensive unspoilt rice paddies. It is the ideal spot for
                groups, families, yoga retreats and permaculture courses.
              </p>
              <p>
                Nestled in a rainforest with spectacular views of Bali’s only active volcano Mt. Agung, our Villas are built in a fusion
                Balinese/Queenslander style using only sustainably sourced Ironwood (Ulin) and Bengkarai timber from Kalimantan. With a
                spacious Yoga Shala/Dance Studio we can accommodate comfortably until 24 persons, including our 4 Glamping Tents.
              </p>
              <div className="btn-row">
                <Link href="/accommodation" className="btn btn--outline">
                  Villas and amenities
                </Link>
                <Link href="/glamping" className="btn btn--outline">
                  Glamping tents
                </Link>
              </div>
            </div>
            <div className={styles.stayPhotos}>
              <Img src="2025/10/Garden-Villa-Exterior-with-Duck.jpg" alt="A timber villa and its pool lit at dusk" sizes="(min-width: 900px) 30vw, 60vw" />
              <Img src="2025/10/IMG_0263-scaled.jpg" alt="A copper bathtub on a villa deck overlooking the jungle" sizes="(min-width: 900px) 20vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="faqs">
        <div className="container">
          <h2 id="faqs" className={styles.h2gap}>
            FAQs
          </h2>
          <div className={`accordion ${styles.faqs}`}>
            {FAQS.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <div className="panel">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        title="What participants and volunteers say"
        items={pick("judith", "dominika", "florence", "phillippe", "izzi", "stela", "sarah")}
      />

      <section className="section" id="register" aria-labelledby="register-title">
        <div className="container with-aside">
          <div className={styles.text}>
            <h2 id="register-title">Fees & registration</h2>
            <p>
              Registration is by Google Form. On completion of the Registration form participants will receive the payment details in
              their email. As the dates are still being confirmed, please message us first.
            </p>
            <div className="btn-row" style={{ margin: "1.25rem 0 1.5rem" }}>
              <ExternalLink href={FORM} className="btn btn--primary" label="Google Form, opens in a new tab">
                Registration Form
              </ExternalLink>
            </div>
            <h3 className={styles.subhead}>Questions about dates or the retreat?</h3>
            <EnquiryActions topic="the Biodynamic Retreat dates" />
          </div>
          <aside className={styles.fee}>
            <h3>Tuition fee</h3>
            <p className={styles.feeAmount}>{formatRp(5800000)}</p>
            <p className="small muted">for the 3 day retreat</p>
            <h4>The fee includes</h4>
            <ul>
              <li>3 full days of tuition (classroom and practical sessions)</li>
              <li>3 meals and drinks for lunch (vegetarian / vegan meal)</li>
              <li>Certification</li>
              <li>Printed Permaculture Course Handbook</li>
              <li>Online Dropbox including 20 of the best permaculture books and useful documentation</li>
            </ul>
            <p className="small">The fee does not include breakfast and dinner, accommodation, travel to and from the location.</p>
            <p className="small muted">
              An early-bird discount ({formatRp(5000000)}) has been offered. Its deadline and how to claim it are being confirmed, so
              please ask us before registering.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
