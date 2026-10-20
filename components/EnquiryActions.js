import Link from "next/link";
import { mailtoWith, whatsappWith } from "@/lib/site";
import { MailIcon, WhatsAppIcon } from "./Icons";
import styles from "./EnquiryActions.module.css";

// Honest enquiry options for things that cannot be booked online.
// Both buttons only open a draft in the visitor's own app.
export default function EnquiryActions({ topic, light = false, showContact = true }) {
  const message = `Hello Ubud Permaculture, I would like to ask about ${topic}.`;
  return (
    <div className={`${styles.wrap} ${light ? styles.light : ""}`}>
      <div className="btn-row">
        <a href={whatsappWith(message)} target="_blank" rel="noopener noreferrer" className={`btn ${light ? "btn--light" : "btn--primary"}`}>
          <WhatsAppIcon /> Ask on WhatsApp
          <span className="visually-hidden"> (opens WhatsApp)</span>
        </a>
        <a href={mailtoWith(`Enquiry: ${topic}`)} className={`btn ${light ? "btn--ghost-light" : "btn--outline"}`}>
          <MailIcon /> Email us
        </a>
      </div>
      <p className={styles.note}>
        Opens WhatsApp or your email app with a draft message; nothing is sent until you press send. An enquiry is not a confirmed booking.
        {showContact && (
          <>
            {" "}
            <Link href="/contact">All contact details</Link>
          </>
        )}
      </p>
    </div>
  );
}
