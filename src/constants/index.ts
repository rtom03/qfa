import type { Brand } from "./_index";

const news = [
  {
    title: "QFA Expands to Abuja with Multiple Store Openings",
    date: "April 2023",
    category: "Expansion",
    image: "🏪",
  },
  {
    title: "Burger Nation Launches New Menu Items",
    date: "March 2023",
    category: "Product Launch",
    image: "🍔",
  },
  {
    title: "QFA Sustainability Initiative: 100K Meals Donated",
    date: "February 2023",
    category: "Community",
    image: "🌱",
  },
];

const brands: Brand[] = [
  {
    id: "dodo",
    name: "DODO PIZZA",
    tagline: "Digital Pizza Experience",
    description:
      "Our world-famous pizza brand where you can order fast, fresh pizza with real-time preparation tracking. A modern approach to pizza making with premium ingredients and cutting-edge technology.",
    color: "#FF6B35",
    linear: "from-orange-500 to-red-500",
    textColor: "text-orange-600",
    icon: "🍕",
    link: "https://dodopizza.ng",
  },
  {
    id: "krispy",
    name: "Krispy Kreme",
    tagline: "Original Glazed & More",
    description:
      "The world's favourite doughnut brand bringing you fresh, delicious Original Glazed doughnuts and a wide variety of flavors. Experience the joy that is Krispy Kreme.",
    color: "#006341",
    linear: "from-green-600 to-emerald-700",
    textColor: "text-green-700",
    icon: "🍩",
    link: "https://krispykreme.ng",
  },
  {
    id: "scoop",
    name: "Scoop'd",
    tagline: "Scoops of Happiness",
    description:
      "Your favourite artisan ice cream bar bringing premium ice cream and desserts to cool off and enjoy life's sweet moments. Made with the finest ingredients for pure indulgence.",
    color: "#00A9A5",
    linear: "from-teal-500 to-cyan-600",
    textColor: "text-teal-600",
    icon: "🍦",
    link: "https://scoopd.ng",
  },
  {
    id: "burger",
    name: "Burger Nation",
    tagline: "Gourmet Burgers Since 2005",
    description:
      "Premium gourmet burgers crafted with quality ingredients and bold flavors. A homegrown favorite serving up the nation's best burgers with a side of excellence.",
    color: "#FF9F1C",
    linear: "from-amber-500 to-orange-600",
    textColor: "text-amber-600",
    icon: "🍔",
    link: "https://burgernation.ng",
  },
];

const links = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about-us" },
  { name: "Our Brands", to: "/our-brands" },
  { name: "ESG", to: "/esg" },
  { name: "Join Us", to: "/join-us" },
  { name: "News", to: "/news" },
];

export { news, brands, links };
