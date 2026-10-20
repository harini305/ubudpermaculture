// The 12 public SimplyBook services, verified 2026-10-19
// (docs/source-audit/content/simplybook-services.json, 03 §3.1).
// Names have the duration/price suffix removed for display; prices, durations,
// group sizes and notice periods are unchanged. Descriptions quote the SimplyBook text.

import { bookingCategory } from "./site";

export const formatRp = (n) => `Rp${n.toLocaleString("en-US")}`;

export const SERVICES = {
  farmTour: {
    name: "Farm Tour & Feed the Animals",
    price: 150000,
    unit: "per person",
    duration: "1 hr",
    people: "Groups of 2–10",
    notice: "Please book 1 day ahead if possible",
    summary:
      "Join our fast and friendly 1 hour Farm Tour. Meet our animals and help us feed them, then take a guided Rice Paddy & Jungle walk.",
    page: "/activities/farm-tour",
    book: bookingCategory(1),
  },
  handsOn: {
    name: "“Hands On” Organic Farming experience",
    price: 300000,
    unit: "",
    duration: "2 hr",
    people: "Groups of 2–10",
    notice: "Please book 1 day ahead if possible",
    summary:
      "Ideal for those planning an organic garden or farm back home! Get your hands in the earth: planting or harvesting, composting recipes, organic fertilisers and pesticides, picking or pruning mango, avocado, coffee or cacao, planting ginger or turmeric (depending on season).",
    book: bookingCategory(1),
  },
  workshop: {
    name: "Organic / Regenerative Farming Permaculture Workshop",
    price: 500000,
    unit: "per person",
    duration: "4 hrs",
    people: null,
    notice: null,
    summary:
      "Deep dive into composting recipes, how to make your own organic pesticides and fertilisers, and the essentials of Permaculture Design. Includes a 100% organic Balinese meal and a Permaculture Ambassador Certificate.",
    page: "/activities/permaculture-workshop",
    book: bookingCategory(1),
  },
  dance: {
    name: "Balinese Traditional Dance (with Chix)",
    price: 450000,
    unit: "per person",
    duration: "2.5 hrs",
    people: "Minimum 2 participants",
    notice: "Please book at least 1 day in advance",
    summary:
      "Sarong etiquette and symbolism, hands-on dressing, an introduction to sacred and non-sacred masks, and foundational dance movements culminating in a short choreography. Learn to feel, not perform—the presence and sacredness of Bali.",
    book: bookingCategory(2),
  },
  fireShow: {
    name: "Balinese Fire Show / Learn how to swing Fire!",
    price: 400000,
    unit: "per person",
    duration: "90 mins",
    people: "Groups of 2–10",
    notice: "Please book 1 day ahead if possible",
    summary:
      "Chix performs a fireshow based on an ancient Balinese story, then the story is explained and you learn the basics of fireswinging with Poi.",
    book: bookingCategory(2),
  },
  bbq: {
    name: "Sunset BBQ & Marshmallows!",
    price: 300000,
    unit: "per person",
    priceNote: "Kids half price",
    duration: "2 hrs",
    people: "Groups of 2–20",
    notice: "Please book 1 day ahead if possible",
    summary:
      "Watch the sunset over the jungle around our firepit. Organic chicken or vegetarian BBQ on an open firepit, side salad and soft drink, plus marshmallows. Ask about adding a DJ, fireshow, mime artist or acoustic band.",
    book: bookingCategory(2),
  },
  music: {
    name: "A Private Musical Event",
    price: 3000000,
    unit: "fixed price",
    duration: null,
    people: "No minimum or maximum attendees",
    notice: "Please book 2 days ahead if possible",
    summary:
      "Book a band or DJ to play the style of your choice. Includes a full sound system with 16 channel mixer, band or DJ of your choice, BBQ & firepit.",
    book: bookingCategory(5),
  },
  painting: {
    name: "Painting Workshop",
    price: 300000,
    unit: "per person",
    priceNote: "Kids half price",
    duration: "2 hrs",
    people: "Groups of 2–10",
    notice: "Please book 1 day ahead if possible",
    summary:
      "Paint a still life or landscape using traditional Batuan techniques, or an abstract contemporary piece, with local artists. Canvas, paints, brushes and Balinese cakes included. No experience needed.",
    book: bookingCategory(3),
  },
  archery: {
    name: "Drop In Archery Class",
    price: 300000,
    unit: "per person",
    duration: "90 mins",
    people: "Groups of 2–15",
    notice: "Please book 1 day ahead if possible",
    summary: "Classes for all ages with qualified instructors from Bali International Archery.",
    book: bookingCategory(3),
  },
  yoga: {
    name: "Yoga Workshop",
    price: 350000,
    unit: "per person",
    duration: "1 hr",
    people: "Classes of 4–10",
    notice: "Please book 2 days ahead if possible",
    summary:
      "Personalised workshops in our on-site Yoga Shala: Vinyasa, Hatha, Yin, Iyengar, Ashtanga or Restorative. Mats and blocks provided.",
    book: bookingCategory(4),
  },
  soundHealing: {
    name: "Sound Healing",
    price: 350000,
    unit: "per person",
    duration: "2 hrs",
    people: "4–10 guests",
    notice: "Please book 2 days in advance",
    summary: "Soak your body and soul in the resonant sound of gongs, bells and didgeridoo on a guided 2 hour meditation.",
    book: bookingCategory(4),
  },
  massage: {
    name: "Massage Service",
    price: 350000,
    unit: "",
    duration: "1 hr",
    people: "Minimum 1 guest",
    notice: "Please book one day ahead",
    summary:
      "A 1 hour massage in the privacy of the Villa: Balinese, Swedish, Deep Tissue, Aromatherapy, Shiatsu, Thai and Reflexology.",
    book: bookingCategory(4),
  },
};

export const SERVICE_GROUPS = [
  {
    title: "Farm & permaculture",
    image: "2025/11/1-farming-scaled.png",
    alt: "Nyoman preparing seedlings at a potting bench in the farm garden",
    items: ["farmTour", "handsOn", "workshop"],
  },
  {
    title: "Balinese culture",
    image: "2025/11/9-chix-dance-scaled.png",
    alt: "Guests learning a Balinese dance in traditional costume on a poolside deck",
    items: ["dance", "fireShow"],
  },
  {
    title: "Evenings, art & family fun",
    image: "2024/12/BBQ-JUl-23-2023-07-26-at-19.07.56.jpg",
    alt: "Guests gathered around a table at an evening BBQ on the farm",
    items: ["bbq", "music", "painting", "archery"],
  },
  {
    title: "Wellness",
    image: "2025/11/6-sound-healing-scaled.png",
    alt: "A sound healing session with singing bowls in the yoga shala",
    items: ["yoga", "soundHealing", "massage"],
  },
];

export const LOWEST_PRICE = Math.min(...Object.values(SERVICES).map((s) => s.price));
