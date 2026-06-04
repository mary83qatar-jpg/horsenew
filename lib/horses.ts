export type Horse = {
  id: string;
  name: string;
  breed: string;
  age: number;
  discipline: string;
  image: string;
  blurb: string;
};

export const horses: Horse[] = [
  {
    id: "aurora",
    name: "Aurora",
    breed: "Andalusian",
    age: 7,
    discipline: "Dressage",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=900&q=80",
    blurb:
      "A graceful mare with effortless collection and a calm, willing temperament.",
  },
  {
    id: "thunder",
    name: "Thunder",
    breed: "Dutch Warmblood",
    age: 9,
    discipline: "Show Jumping",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80",
    blurb:
      "Bold, powerful, and careful over fences — a true competitor with heart.",
  },
  {
    id: "willow",
    name: "Willow",
    breed: "Quarter Horse",
    age: 6,
    discipline: "Trail & Western",
    image:
      "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?auto=format&fit=crop&w=900&q=80",
    blurb:
      "Sure-footed and unflappable, the perfect partner for long days on the trail.",
  },
  {
    id: "milo",
    name: "Milo",
    breed: "Friesian",
    age: 8,
    discipline: "Driving & Dressage",
    image:
      "https://images.unsplash.com/photo-1599587900303-fd6c4b46a07d?auto=format&fit=crop&w=900&q=80",
    blurb:
      "An elegant black gelding with flowing feathers and a showstopping presence.",
  },
  {
    id: "sage",
    name: "Sage",
    breed: "Arabian",
    age: 5,
    discipline: "Endurance",
    image:
      "https://images.unsplash.com/photo-1452508631827-3cbeb8b6a3ab?auto=format&fit=crop&w=900&q=80",
    blurb:
      "Spirited and tireless, with the stamina and refinement of the desert bred.",
  },
  {
    id: "duke",
    name: "Duke",
    breed: "Hanoverian",
    age: 10,
    discipline: "Eventing",
    image:
      "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?auto=format&fit=crop&w=900&q=80",
    blurb:
      "Versatile and brave across all three phases — dressage, cross-country, and stadium.",
  },
];
