// Itinerary steps repeated across the tour pages on the original site (03 §8),
// kept once here and reused. Text is as published.

export const WELCOME_JUICE = {
  title: "A Refreshing Welcome: Organic Fruit Juice",
  text: "Your adventure begins with a warm Balinese welcome and a refreshing glass of organic fruit juice. Sourced from local farms, this delightful beverage is a taste of the tropical paradise that surrounds you. Sip slowly and let the vibrant flavors awaken your senses.",
};

export const RICE_PADDY_WALK = {
  title: "Rice Paddy Walk: A Journey Through Tradition",
  text: "Bali’s iconic rice paddies are a sight to behold, and a guided walk through these emerald terraces offers insight into the island’s agricultural heritage. Discover the Subak irrigation system, a UNESCO-recognized tradition that reflects the Balinese philosophy of harmony between humans, nature, and spirit.",
};

export const JUNGLE_TOUR = {
  title: "Jungle Tour: Reconnect with Nature",
  text: "Venture into the heart of Bali’s lush jungle, where towering trees, vibrant flora, and melodious bird songs create a serene escape. Learn about the native plants and their traditional uses in Balinese medicine and daily life. This tour is a meditative experience, inviting you to reconnect with the natural world.",
};

export const EXPLORE_FARM =
  "Next, take a guided tour of our sprawling organic farm. Here, you’ll discover the harmony of a thriving ecosystem that sustains itself without the need for harmful chemicals. Learn about traditional and modern farming techniques as you stroll through lush vegetable patches, fruit orchards, and herb gardens.";

// Turns { title, text } into an Itinerary step with a photo.
export const step = ({ title, text }, image, alt, extra = {}) => ({
  title,
  body: <p>{text}</p>,
  image,
  alt,
  ...extra,
});
