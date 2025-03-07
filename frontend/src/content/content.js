// Import preview image
import preview from "../img/preview.png";
import login from "../img/login.png";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import bg from "../img/bg.png";
// Export images
export const previewImage = preview;
export const loginImage = login;
export const bgImage = bg;
// Hero section data structure
export const heroData = {
  // Main title split into three lines for animated/styled display
  title: {
    line1: "UNISEX",
    line2: "SALON",
    line3: "FOR MEN AND WOMEN",
  },

  // Main hero description text
  description:
    "We provide a range of services for men and women, including haircuts, styling, coloring, and more.",

  // Social proof section with follower count and avatars
  followers: {
    count: "112K+",
    text: "Achieved 112K+ followers",
    avatars: [avatar1, avatar2, avatar3],
  },

  // Brand name displayed in navigation
  brandName: "HAIRPORT",

  // Navigation menu items
  navigation: [
    {
      id: 1,
      name: "ABOUT",
      href: "#aboutus",
    },
    {
      id: 2,
      name: "SERVICES",
      href: "#services",
    },
    {
      id: 3,
      name: "APPOINTMENTS",
      href: "/appointments",
    },
  ],
};

// About section data
export const aboutData = {
  logo: {
    text: "HAIRPORT®",
    submark: "B", // for the circular submark
  },
  description:
    "Hairport was founded in 2006 by Jamie Stephen who still runs the agency today. A former lead business director for a global advertising network with connections throughout the industry, he created an agency designed to serve the creative needs of clients across the world. Now representing over 50 artists and with a team of 15 in Australia.",
  version: "(1.1)", // version number in top right
};

export const serviceItems = [
  {
    title: "Korean Treatment",
    description:
      "Experience the secrets of Korean skincare with our advanced 10-step facial treatment, combining traditional herbs and modern technology for glass-like skin.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1470&auto=format&fit=crop",
    price: "₹5,000",
  },
  {
    title: "HydraFacial",
    description:
      "Deep cleansing and hydration using patented vortex technology. Removes impurities while delivering moisturizing serums for an instant glow.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop",
    price: "₹5,000",
  },
  {
    title: "BB Glow",
    description:
      "Semi-permanent BB cream treatment that evens out skin tone, reduces dark spots, and gives you a natural, luminous complexion that lasts months.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1471&auto=format&fit=crop",
    price: "₹5,000",
  },
  {
    title: "Lip Blush",
    description:
      "Enhance your natural lip color with our semi-permanent lip blush treatment. Creates perfectly tinted, defined lips that look naturally beautiful.",
    image:
      "https://images.unsplash.com/photo-1592574083647-6d7c37d81535?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹5,000",
  },
  {
    title: "Lip Pigmentation",
    description:
      "Advanced lip color correction and enhancement. Perfect for achieving that perfect lip tone and correcting uneven pigmentation.",
    image:
      "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?q=80&w=1474&auto=format&fit=crop",
    price: "₹5,000",
  },
  {
    title: "Korean Peel",
    description:
      "Gentle yet effective Korean peeling treatment that removes dead skin cells and promotes cell renewal for brighter, smoother skin.",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1435&auto=format&fit=crop",
    price: "₹5,000",
  },
  {
    title: "O3+ Facial",
    description:
      "Premium ozone therapy facial that detoxifies, purifies, and rejuvenates your skin. Perfect for treating acne and aging concerns.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1470&auto=format&fit=crop",
    price: "₹5,000",
  },
  {
    title: "Hair Treatments",
    description:
      "Comprehensive hair care solutions including Korean hair treatments, protein therapy, and scalp treatments for healthier, shinier hair.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGFpciUyMFRyZWF0bWVudHN8ZW58MHx8MHx8fDA%3D",
    price: "₹5,000",
  },
];

// Footer section data
export const footerData = {
  // Stay in the know section
  stayInKnow: {
    title: "STAY IN THE KNOW",
    description: "We collaborate with ambitious brands and people.",
  },

  // Footer links sections
  links: {
    social: {
      title: "SOCIAL",
      items: [
        { id: 1, name: "Instagram", href: "#" },
        { id: 2, name: "Twitter", href: "#" },
        { id: 3, name: "LinkedIn", href: "#" },
        { id: 4, name: "Facebook", href: "#" },
      ],
    },
    pages: {
      title: "PAGES",
      items: [
        { id: 1, name: "Home", href: "#" },
        { id: 2, name: "About", href: "#about" },
        { id: 3, name: "Services", href: "#services" },
        { id: 4, name: "Contact", href: "#contact" },
      ],
    },
    offices: {
      title: "OFFICES",
      items: [
        { id: 1, name: "New York", href: "#" },
        { id: 2, name: "London", href: "#" },
        { id: 3, name: "Tokyo", href: "#" },
        { id: 4, name: "Paris", href: "#" },
      ],
    },
  },
};
