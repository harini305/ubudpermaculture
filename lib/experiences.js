import { SERVICES, formatRp } from "./services";

// The four experiences with their own pages. Cooking class and temples tour have no
// verified SimplyBook service or price (audit Q5, Q6), so they are enquiry-only.
export const EXPERIENCES = [
  {
    slug: "farm-tour",
    title: "Farm Tour",
    short: "Farm Tour",
    href: "/activities/farm-tour",
    image: "2025/11/2-feed-the-animals-scaled.png",
    alt: "Guests feeding Susu the cow in her stable",
    facts: `${SERVICES.farmTour.duration} · ${formatRp(SERVICES.farmTour.price)} per person`,
    blurb: "Join our fast and friendly 1 hour Farm Tour. Meet our animals and help us feed them.",
  },
  {
    slug: "permaculture-workshop",
    title: "Organic / Regenerative Farming Permaculture Workshop",
    short: "Permaculture Workshop",
    href: "/activities/permaculture-workshop",
    image: "2025/11/3-nyoman-scaled.png",
    alt: "Nyoman holding freshly picked papayas in the food forest",
    facts: `${SERVICES.workshop.duration} · ${formatRp(SERVICES.workshop.price)} per person`,
    blurb: "Composting, organic pesticides and fertilisers, and the essentials of Permaculture Design.",
  },
  {
    slug: "cooking-class",
    title: "“Farm to Table” Cooking Workshop",
    short: "“Farm to Table” Cooking Workshop",
    href: "/activities/cooking-class",
    image: "2024/12/WhatsApp-Image-2025-08-25-at-11.05.31_0a4b98fc.jpg",
    alt: "The open-air farm kitchen set up for a cooking class",
    facts: "Ask us about availability",
    blurb: "Collect ingredients on the farm, then cook and share a traditional Balinese meal.",
  },
  {
    slug: "rice-paddy-temples-tour",
    title: "Rainforest, Rice Paddy & Temples Tour",
    short: "Rainforest, Rice Paddy & Temples Tour",
    href: "/activities/rice-paddy-temples-tour",
    image: "2025/11/10-Gate-with-sunray-scaled.png",
    alt: "A carved temple gate in Gentong village with morning sun",
    facts: "2 hour experience · ask us about availability",
    blurb: "The 4 Temples in Gentong Village, our rainforest, rice paddies and farm.",
  },
];
