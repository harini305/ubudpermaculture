import Link from "next/link";
import EnquiryComposer from "@/components/EnquiryComposer";
import GettingHere from "@/components/GettingHere";
import ExternalLink from "@/components/ExternalLink";
import { InstagramIcon, MailIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact & directions",
  description:
    "Contact Ubud Permaculture on WhatsApp (+62 822 6699 4463) or by email, and find directions to the farm in Gentong, Tegallalang, 5km north of Ubud.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section page-top">
        <h1 className="visually-hidden">Contact & directions</h1>
        <div className={`container ${styles.grid}`}>
          <div>
            <h2 className={styles.h2}>Get in touch</h2>
            <p className={styles.note}>
              The quickest way to reach the family is WhatsApp. Activities can be booked in our <Link href="/book">booking calendar</Link>.
            </p>
            <ul className={styles.channels}>
              <li>
                <WhatsAppIcon />
                <div>
                  <span className={styles.label}>WhatsApp & phone</span>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                    {SITE.phoneDisplay}
                    <span className="visually-hidden"> (opens WhatsApp)</span>
                  </a>
                  <a href={SITE.phoneHref} className={styles.secondary}>
                    Call instead
                  </a>
                </div>
              </li>
              <li>
                <MailIcon />
                <div>
                  <span className={styles.label}>Email</span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li>
                <InstagramIcon />
                <div>
                  <span className={styles.label}>Instagram</span>
                  <ExternalLink href={SITE.instagram} icon={false}>
                    {SITE.instagramHandle}
                  </ExternalLink>
                </div>
              </li>
              <li>
                <PinIcon />
                <div>
                  <span className={styles.label}>Address</span>
                  <address>
                    Ubud Permaculture
                    <br />
                    Jl sukaluwih, Gentong
                    <br />
                    Tegallalang, Tegallalang
                    <br />
                    ID, 80561
                  </address>
                  <ExternalLink href={SITE.maps.farm} className={styles.secondary} label="Google Maps, opens in a new tab">
                    Open in Google Maps
                  </ExternalLink>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.h2}>Write us a message</h2>
            <EnquiryComposer />
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
