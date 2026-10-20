// Verified business facts (docs/source-audit/content/business-info.json, 03 §1).

export const SITE = {
  name: "Ubud Permaculture",
  domainLabel: "ubudpermaculture.com",
  phoneDisplay: "+62 822 6699 4463",
  phoneHref: "tel:+6282266994463",
  whatsapp: "https://wa.me/6282266994463",
  email: "ubudpermaculture@pm.me",
  address: ["Jl sukaluwih, Gentong", "Tegallalang, Tegallalang", "ID, 80561"],
  addressLine: "Ubud Permaculture, Jl sukaluwih, Gentong, Tegallalang, Tegallalang, ID, 80561",
  geo: { lat: -8.4850955, lng: 115.2818077 },
  maps: {
    farm: "https://maps.app.goo.gl/PuRAqkHBQwfDNKh16",
    temple: "https://maps.app.goo.gl/eBMe9WTM7QtzeJgw6",
  },
  instagram: "https://www.instagram.com/ubud.permaculture/",
  instagramHandle: "@ubud.permaculture",
  odysee: "https://odysee.com/@GentongFarmers:f",
  wwoof: "https://wwoofindependents.org/en/host/56063",
  sudamala: "https://sudamala.com/",
  booking: "https://ubudpermaculture.simplybook.asia/v2/#book",
};

// Booking happens on our own /book page, which embeds the SimplyBook calendar
// (the same iframe widget the original homepage used, audit 06).
export const BOOK_PAGE = "/book";
export const bookingCategory = (id) => `/book?category=${id}`;
export const SIMPLYBOOK_WIDGET =
  "https://ubudpermaculture.simplybook.asia/v2/?widget-type=iframe&theme=default&timeline=modern&datepicker=top_calendar";

// SimplyBook categories (audit 03 §3.1). Category 6 holds only the permaculture
// workshop, so it is not offered as "cooking" (audit F5).
export const BOOKING_CATEGORIES = [
  { id: 1, label: "Farming" },
  { id: 2, label: "Cultural" },
  { id: 3, label: "Children" },
  { id: 4, label: "Wellness" },
  { id: 5, label: "Fun" },
];

// Builds a WhatsApp link with a pre-filled message. Nothing is sent until the visitor presses send.
export const whatsappWith = (text) => `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
export const mailtoWith = (subject, body = "") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Glamping", href: "/glamping" },
  { label: "Farmer’s Market", href: "/farmer-market" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
