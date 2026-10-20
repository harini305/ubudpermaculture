import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import ExternalLink from "@/components/ExternalLink";
import { SITE } from "@/lib/site";
import styles from "./book.module.css";

export const metadata = {
  title: "Book an activity",
  description:
    "Book a farm tour, permaculture workshop, Balinese dance, sunset BBQ, painting, archery, yoga, sound healing or massage at Ubud Permaculture.",
};

export default function BookPage() {
  return (
    <>
      <section className={`page-top ${styles.calendar}`}>
        <h1 className="visually-hidden">Book an activity</h1>
        <div className="container">
          <BookingWidget />
          <ul className={styles.notes}>
            <li>
              Prices and durations for every activity are on the <Link href="/activities#prices">activities page</Link>.
            </li>
            <li>
              The <Link href="/activities/cooking-class">“Farm to Table” Cooking Workshop</Link> and the{" "}
              <Link href="/activities/rice-paddy-temples-tour">Temples Tour</Link> are not in the calendar yet, so please{" "}
              <Link href="/contact">ask us</Link>.
            </li>
            <li>
              Questions? WhatsApp{" "}
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                {SITE.phoneDisplay}
                <span className="visually-hidden"> (opens WhatsApp)</span>
              </a>
            </li>
          </ul>
          <p className={styles.fallback}>
            Calendar not loading?{" "}
            <ExternalLink href={SITE.booking} label="SimplyBook, opens in a new tab">
              Open the booking calendar in a new tab
            </ExternalLink>
          </p>
        </div>
      </section>
    </>
  );
}
