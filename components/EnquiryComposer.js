"use client";

import { useId, useState } from "react";
import { mailtoWith, whatsappWith } from "@/lib/site";
import { MailIcon, WhatsAppIcon } from "./Icons";
import styles from "./EnquiryComposer.module.css";

const TOPICS = [
  "A farm tour or workshop",
  "The “Farm to Table” Cooking Workshop",
  "The Rainforest, Rice Paddy & Temples Tour",
  "A glamping stay",
  "The Biodynamic Retreat",
  "Art In The Jungle",
  "Something else",
];

// Drafts a message for WhatsApp or email. This site has no backend: the message is
// only sent if the visitor presses send in their own app.
export default function EnquiryComposer() {
  const id = useId();
  const [topic, setTopic] = useState(TOPICS[0]);
  const [name, setName] = useState("");
  const [when, setWhen] = useState("");
  const [people, setPeople] = useState("");
  const [message, setMessage] = useState("");

  const body = [
    `Hello Ubud Permaculture,`,
    ``,
    `I would like to ask about: ${topic}.`,
    when && `Preferred date(s): ${when}`,
    people && `Number of people: ${people}`,
    message && `\n${message}`,
    name && `\n${name}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()} aria-describedby={`${id}-note`}>
      <div className={styles.field}>
        <label htmlFor={`${id}-topic`}>What would you like to ask about?</label>
        <select id={`${id}-topic`} value={topic} onChange={(e) => setTopic(e.target.value)}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${id}-when`}>Preferred date(s)</label>
          <input id={`${id}-when`} value={when} onChange={(e) => setWhen(e.target.value)} autoComplete="off" />
        </div>
        <div className={styles.field}>
          <label htmlFor={`${id}-people`}>Number of people</label>
          <input id={`${id}-people`} inputMode="numeric" value={people} onChange={(e) => setPeople(e.target.value)} autoComplete="off" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor={`${id}-name`}>Your name</label>
        <input id={`${id}-name`} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </div>
      <div className={styles.field}>
        <label htmlFor={`${id}-msg`}>Message</label>
        <textarea id={`${id}-msg`} rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div className="btn-row">
        <a href={whatsappWith(body)} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          <WhatsAppIcon /> Continue in WhatsApp
          <span className="visually-hidden"> (opens WhatsApp with your message)</span>
        </a>
        <a href={mailtoWith(`Enquiry: ${topic}`, body)} className="btn btn--outline">
          <MailIcon /> Continue by email
        </a>
      </div>
      <p id={`${id}-note`} className={styles.note}>
        Your message opens as a draft in WhatsApp or your email app. Nothing is sent from this website, and an enquiry is not a
        confirmed booking: we will reply to confirm.
      </p>
    </form>
  );
}
