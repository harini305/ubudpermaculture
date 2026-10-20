// Verbatim quotes from content/testimonials.json. Dates are omitted on purpose:
// several quotes were published with conflicting years (audit 08, F8 / Q8).

export const TESTIMONIALS = {
  florence: {
    name: "Florence & Andy",
    from: "UK",
    quote:
      "We had such a fantastic time helping Nyoman at the farm. It felt like Nyoman had been a friend for years ! It was a learning experience as Nyoman always explained about different permaculture methods, the plants and their uses as well as sharing Balinese culture with us.",
  },
  phillippe: {
    name: "Phillippe",
    from: "France",
    quote:
      "I arrived at Ubud permaculture knowing nothing about Permaculture, but after a few hours with Nyoman I am inspired to start my own Permaculture garden when I get home.",
  },
  izzi: {
    name: "Izzi",
    from: "UK",
    quote:
      "My time at Ubud Permaculture was absolutely fantastic—I cannot recommend it enough! Learning about the different elements of permaculture and agriculture with Nyoman was incredibly educational. Being surrounded by the secluded jungle, away from the rest of the world, felt like stepping into a sanctuary—an experience I am eternally grateful for. I felt so welcomed and cared for by everyone, truly part of the community. Thank you so much for having me—I will definitely return!",
  },
  stela: {
    name: "Stela & Micha",
    from: "Czech Republic",
    quote:
      "Ubud Permaculture was a wonderful experience for me. Nyoman, Wayan and their family welcomed us with open hearts. Nyoman, who is in charge of the volunteers, loves farming and that is why the farm is beautiful and full of various plants. Nyoman's family prepared traditional Balinese food for us and I must say that I have never tasted better in Bali. I recommend checking out their Instagram page to learn more about permaculture. from preparing compost to gardening to planting rice. Nyoman and Wayan are amazing people with their hearts in the right place. I will definitely be back to the farm soon. Thank you for everything!",
  },
  sarah: {
    name: "Sarah",
    from: "Switzerland",
    quote:
      "Nyoman explained a lot to me about plants and permaculture. I got an insight into different jobs and appreciated the variety: growing seedlings, creating new garden beds, producing compost, weeding, cementing Susu's stable, preparing duck food, collecting and processing bamboo poles, etc. I also learned a lot about Balinese culture and was able to get to know various local dishes. Thank you very much for this unique experience!",
  },
  margaux: {
    name: "Margaux & Djero",
    from: "France",
    quote:
      "It was a wonderful experience in a magnificent setting. A farm that respects the environment and the woofers, with a desire to share their culture and expertise. It was a real pleasure to spend time with such caring people on a permaculture project that quickly became a favorite. An unforgettable week, one we can't recommend enough! A big thank you to them!",
  },
  julia: {
    name: "Julia",
    from: "UK",
    quote:
      "I had such a wonderful time at Ubud Permaculture. It was an amazing opportunity to get to know about the highlights and the struggles around setting up a permaculture farm in a tropical climate. The family were so kind and the wellbeing of the WWOOF volunteers was their first priority. This was a real highlight of my travels and I would highly recommend a visit!",
  },
  yoichi: {
    name: "Yoichi",
    from: "Japan",
    quote:
      "I have really enjoyed working with Wayan and Nyoman through my stay, making a sort of gazebo, digging for a pond (again following my previous WWOOF experience) , seeding and weeding. Nyoman who practically lead us almost everyday made plan in a very considerately and flexibly to come up with new or suitable tasks for the day, which was to change almost everyday due to lasting rainy season. I ended up staying in the room of a warehouse nearby the farm.Thank you very much, Wayan and Nyoman.",
  },
  cade: {
    name: "Cade",
    from: "USA",
    quote:
      "Right when I arrived, Nyoman and Wayan ensured that I felt right at home and integrated with the small community they have living on the farm. The other wwoofers and I helped with planting seedlings, weeding flower beds, and constructing a new fish pond. Nyoman was very conscious about not overworking us and incorporated breaks throughout the day to rest. A huge thank you to Nyoman & Wayan and the rest of the Ubud Permaculture community for making my first wwoofing experience such an amazing time. This is truly something I will cherish for the rest of my life.",
  },
  judith: {
    name: "Judith",
    from: "Switzerland",
    quote:
      "Ubud was the perfect place to put the theory learned into practice every day in the afternoon hands-on lessons. Highly Recommended! Jo is a wholeheartedly wonderful teacher and thus an environmental activist in its purest form, sharing his knowledge and love for mother earth",
  },
  dominika: {
    name: "Dominika",
    from: "Germany",
    quote:
      "During these 10 days an incredible amount of knowledge is imparted, combined with Jo’s years of practical experience. His passion is contagious and inspiring. At the same time, we received a whole lot of documentation and further information for our self-study. The course was absolutely enriching and I was able to apply what I had learned immediately. This course is the optimal start for a life with permaculture, on a small scale or for the professional future.",
  },
};

export const pick = (...keys) => keys.map((k) => ({ id: k, ...TESTIMONIALS[k] }));
