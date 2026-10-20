import { SITE } from "@/lib/site";
import ExternalLink from "./ExternalLink";
import Img from "./Img";
import { PinIcon, WhatsAppIcon } from "./Icons";
import styles from "./GettingHere.module.css";

// Directions (03 §1), laid out as one compact strip so it sits on screen together with
// the footer. The motorbike search term differs between pages on the original site
// (audit Q10), so the verified Google Maps pin is offered instead of either term.
export default function GettingHere({ heading = "Getting here", headingLevel = 2, image = true }) {
  const H = `h${headingLevel}`;
  const Sub = `h${headingLevel + 1}`;
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <H>{heading}</H>
        <p>
          Just 5km north of Ubud, on the right hand side as you drive to Tegallalang Rice Paddies. We recommend Gojek (for some reason we
          are not shown on Grab Maps !)
        </p>
      </div>
      <div className={`${styles.grid} ${image ? styles.withImage : ""}`}>
        {image && (
          <div className={styles.photo}>
            <Img
              src="2025/09/DJI_20240912203456_0049_D-Copy.jpg"
              alt="Aerial view of the farm buildings among jungle and gardens"
              sizes="(min-width: 1000px) 25vw, 100vw"
            />
          </div>
        )}
        <div className={styles.card}>
          <Sub>By motorbike</Sub>
          <p>Open our pin in Google Maps and you will find us.</p>
          <ExternalLink href={SITE.maps.farm} className="text-link" label="Google Maps, opens in a new tab">
            Open in Google Maps
          </ExternalLink>
        </div>
        <div className={styles.card}>
          <Sub>By car</Sub>
          <p>
            Search for “Pura Dalem Gentong”. Take the path to the left of the temple and then follow the signs as we are 300 metres up a
            small track !
          </p>
          <ExternalLink href={SITE.maps.temple} className="text-link" label="Google Maps, opens in a new tab">
            Find the temple on Google Maps
          </ExternalLink>
        </div>
        <div className={styles.card}>
          <Sub>Address</Sub>
          <address>
            <PinIcon /> Jl sukaluwih, Gentong, Tegallalang, Tegallalang, ID, 80561
          </address>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-link">
            <WhatsAppIcon /> Ask us for directions
            <span className="visually-hidden"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
