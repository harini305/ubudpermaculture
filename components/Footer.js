import Link from "next/link";
import { SITE } from "@/lib/site";
import { InstagramIcon, MailIcon, PinIcon, WhatsAppIcon } from "./Icons";
import styles from "./Footer.module.css";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Book an activity", href: "/book" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Glamping", href: "/glamping" },
  { label: "Farmer’s Market", href: "/farmer-market" },
  { label: "Biodynamic Retreat", href: "/biodynamic-retreat" },
  { label: "Blog", href: "/blog" },
  { label: "Contact & directions", href: "/contact" },
];

export default function Footer() {
  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <img src="/images/logo-white-80.webp" alt="" width="40" height="60" loading="lazy" />
          <div>
            <p className={styles.name}>Ubud Permaculture</p>
            <address className={styles.address}>
              <a href={SITE.maps.farm} target="_blank" rel="noopener noreferrer">
                {SITE.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                <span className="visually-hidden"> (open in Google Maps)</span>
              </a>
            </address>
          </div>
        </div>

        <ul className={styles.contact}>
          <li>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> {SITE.phoneDisplay}
              <span className="visually-hidden"> (opens WhatsApp)</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`}>
              <MailIcon /> {SITE.email}
            </a>
          </li>
          <li>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> {SITE.instagramHandle}
              <span className="visually-hidden"> (Instagram, opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={SITE.maps.farm} target="_blank" rel="noopener noreferrer">
              <PinIcon /> Directions on Google Maps
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <nav aria-label="Footer" className={styles.links}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>© 2026 ubudpermaculture.com</p>
        </div>
      </div>
    </footer>
  );
}
