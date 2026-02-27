export interface MenuItem {
  image?: string;
  simage?: string;
  rimage?: string;
  title: string;
  description: string;
  category: string;
  variants?: {
    label: string;
    price: number;
  }[];
  price?: number;
  isPopular?: boolean;
  kj?: string;
  bgColor?: string;
}

export const CATEGORY: string[] = [
  "Gourmet Rolls",
  "Gourmet Wraps",
  "Pita Pockets",
  "Baked Dinner Packs",
  "Roasts",
  "Snacks & Sauces",
  "Tasty Charcoal Chicken",
  "Chicken Chips & Salad Packs",
  "Family Deals",
  "Hot Chips",
  "Wedges",
  "Sweet Potato",
  "Hot Foods",
  "Salads",
  "Desserts",
];

// --- REUSABLE COMPONENT FOR RENDERING A MENU SECTION ---
export interface MenuSectionProps {
  category: string;
  // Optional prop to adjust card height for specific sections if needed
  isShortCard?: boolean;
}

export const menus: MenuItem[] = [
  // =====================
  // GOURMET ROLLS
  // =====================
  {
    rimage: "",
    title: "Peri Peri Chicken Roll",
    description:
      "Grilled chicken breast, lettuce, mayo, peri peri, and cheese.",
    price: 13.9,
    category: "Gourmet Rolls",
  },
  {
    rimage: "/rmenu/gourmetrolls/chicken&gravy-roll.png",
    title: "Chicken Roll with Gravy",
    description: "BBQ chicken roll served warm with rich, savoury gravy.",
    price: 12.9,
    category: "Gourmet Rolls",
  },
  {
    image: "/rmenu/gourmetrolls/bbq-chicken-roll.png",
    title: "BBQ Chicken Roll",
    description: "Shredded BBQ chicken, lettuce, and creamy mayo in a roll.",
    price: 12.9,
    category: "Gourmet Rolls",
  },
  {
    image: "/rmenu/gourmetrolls/schnitzel-roll.png",
    title: "Schnitzel Roll",
    description: "Crispy chicken schnitzel, lettuce, and mayo in a soft roll.",
    price: 12.9,
    category: "Gourmet Rolls",
  },
  {
    image: "",
    title: "Roost & Roast Chicken Roll",
    description: "Charcoal chicken, tabouli, and garlic mayo in a soft roll.",
    price: 13.9,
    category: "Gourmet Rolls",
  },
  {
    rimage: "/rmenu/gourmetrolls/pork-roll-with-gravy.png",
    title: "Pork Roll with Gravy",
    description: "Roast pork in a fresh roll with smooth, rich gravy.",
    price: 12.9,
    category: "Gourmet Rolls",
  },
  {
    image: "",
    title: "Bacon & Egg Roll",
    description: "Bacon, egg, and cheese with your choice of BBQ or tomato.",
    price: 10.0,
    category: "Gourmet Rolls",
  },
  {
    rimage: "/rmenu/gourmetrolls/chips&gravy-roll.png",
    title: "Chips & Gravy Roll",
    description: "Hot chips and savoury gravy packed inside a fresh roll.",
    price: 8.0,
    category: "Gourmet Rolls",
  },

  // =====================
  // GOURMET WRAPS
  // =====================
  {
    image: "/smenu/wrap.png",
    title: "Roost & Roast Wrap",
    description:
      "Grilled chicken breast, cheese, lettuce, mayo, and sweet chilli.",
    price: 13.9,
    category: "Gourmet Wraps",
  },
  {
    image: "",
    title: "Portuguese Wrap",
    description:
      "Grilled chicken breast, cheese, lettuce, mayo, and peri peri.",
    price: 13.9,
    category: "Gourmet Wraps",
  },
  {
    image: "",
    title: "BLAT Chicken Wrap",
    description: "Bacon, lettuce, avocado, tomato, chicken breast, and mayo.",
    price: 15.9,
    category: "Gourmet Wraps",
  },
  {
    image: "",
    title: "Schnitzel Wrap",
    description: "Chicken schnitzel, lettuce, cheese, and mayo in soft wrap.",
    price: 13.9,
    category: "Gourmet Wraps",
  },
  {
    image: "",
    title: "Breakie Wrap",
    description: "Bacon, egg, potato scallop, lettuce, BBQ sauce, and mayo.",
    price: 13.9,
    category: "Gourmet Wraps",
  },
  {
    image: "",
    title: "Falafel Wrap",
    description: "Falafel, tabouli, and hummus wrapped fresh to order daily.",
    price: 13.9,
    category: "Gourmet Wraps",
  },

  // =====================
  // PITA POCKETS
  // =====================
  {
    image: "",
    title: "Roost & Roast Pocket",
    description: "Marinated grilled chicken breast, tabouli, and garlic sauce.",
    price: 13.9,
    category: "Pita Pockets",
  },
  {
    image: "",
    title: "Portuguese Pocket",
    description:
      "Grilled chicken breast, cheese, lettuce, aioli, and peri peri.",
    price: 13.9,
    category: "Pita Pockets",
  },
  {
    image: "",
    title: "Falafel Pocket",
    description: "Falafel, tabouli, and garlic sauce in a warm pita pocket.",
    price: 13.9,
    category: "Pita Pockets",
  },

  // =====================
  // BAKED DINNER PACKS
  // =====================
  {
    image: "/smenu/bakeddinnerpacks/pork-dinner-pack.png",
    title: "Pork Dinner Pack",
    description: "220g roast pork, two vegetables, peas, and rich gravy.",
    price: 20.9,
    category: "Baked Dinner Packs",
    isPopular: true,
  },
  {
    image: "/smenu/bakeddinnerpacks/beef-dinner-pack.png",
    title: "Beef Dinner Pack",
    description: "220g roast beef, two vegetables, peas, and rich gravy.",
    price: 20.9,
    category: "Baked Dinner Packs",
  },
  {
    image: "/smenu/bakeddinnerpacks/half-chicken-dinner-pack.png",
    title: "½ Chicken Dinner Pack",
    description: "Half charcoal chicken, two vegetables, peas, and gravy.",
    price: 21.9,
    category: "Baked Dinner Packs",
    kj: "6,920",
  },
  {
    image: "/smenu/bakeddinnerpacks/quarter-chicken-dinner-pack.png",
    title: "¼ Chicken Dinner Pack",
    description: "Quarter chicken, two vegetables, peas, and rich gravy.",
    price: 19.9,
    category: "Baked Dinner Packs",
  },

  // =====================
  // ROASTS
  // =====================
  {
    image: "/smenu/roasts/pork-with-crackle.png",
    title: "Pork with Crackle",
    description: "Fresh roast pork with crackle, priced conveniently per kg.",
    price: 45,
    category: "Roasts",
  },
  {
    image: "/smenu/roasts/roast-beef.png",
    title: "Roast Beef",
    description: "Tender sliced roast beef, priced conveniently per kilogram.",
    price: 50,
    category: "Roasts",
  },

  // =====================
  // SNACKS & SAUCES
  // =====================
  {
    image: "/smenu/snacks&sauces/devil-wings.png",
    title: "Devil Wings",
    description: "Spicy devil wings, single serve, or grab five for just ten.",
    price: 2.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/smenu/snacks&sauces/sweet-chilli-tenders.png",
    title: "Sweet Chilli Tenders",
    description: "Crispy tenders with sweet chilli glaze, or five for ten.",
    price: 2.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/smenu/snacks&sauces/chicken-skewers.png",
    title: "Chicken Skewers",
    description: "Seasoned chicken skewers grilled fresh and served warm.",
    price: 3.9,
    category: "Snacks & Sauces",
  },
  {
    simage: "/smenu/snacks&sauces/spring-roll.png",
    title: "Spring Roll",
    description: "Crispy spring roll with savoury filling, cooked to golden.",
    price: 3.9,
    category: "Snacks & Sauces",
  },
  {
    image: "/smenu/snacks&sauces/curry-puff.png",
    title: "Curry Puff",
    description: "Flaky curry puff with aromatic filling and crisp pastry.",
    price: 3.0,
    category: "Snacks & Sauces",
  },
  {
    image: "/smenu/snacks&sauces/potato-scallops.png",
    title: "Potato Scallops",
    description: "Golden potato scallops, lightly seasoned and freshly fried.",
    price: 2.0,
    category: "Snacks & Sauces",
  },
  {
    image: "/menu/snacks&sauces/sauces.png",
    title: "Sauces",
    description:
      "Peri peri, garlic sauce, chilli mayo, garlic mayo, sour cream.",
    price: 2.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/menu/snacks&sauces/other-sauces.png",
    title: "Other Sauces",
    description: "Sweet chilli, tomato sauce, and BBQ sauce options served.",
    price: 1.5,
    category: "Snacks & Sauces",
  },
  {
    image: "",
    title: "Chicken Salt or Peri Peri Salt",
    description: "Classic chicken salt or peri peri salt to boost flavour.",
    price: 2.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/top-down-transparent/peri-peri-sauce.png",
    title: "Bottled Peri Peri Sauce",
    description: "Take-home bottled peri peri sauce packed with bold heat.",
    price: 10.0,
    category: "Snacks & Sauces",
  },
  {
    image: "/menu/snacks&sauces/bottled-salad-dressing.png",
    title: "Bottled Salad Dressing",
    description: "House salad dressing bottled fresh for easy home serving.",
    price: 7.0,
    category: "Snacks & Sauces",
  },

  // =====================
  // Tasty CHARCOAL CHICKEN
  // =====================
  {
    image: "/top-down-transparent/whole-chicken.png",
    title: "Whole Chicken",
    description: "Whole charcoal chicken, juicy, seasoned, and flame roasted.",
    price: 20.0,
    category: "Tasty Charcoal Chicken",
    isPopular: true,
    kj: "7,820",
  },
  {
    image: "/top-down-transparent/half-chicken.png",
    title: "Half Chicken",
    description: "Half charcoal chicken, juicy, seasoned, and flame roasted.",
    price: 12.5,
    category: "Tasty Charcoal Chicken",
    kj: "3,910",
  },
  {
    image: "/top-down-transparent/quarter-chicken.png",
    title: "Quarter Chicken",
    description: "Quarter charcoal chicken, juicy, seasoned, and flame roasted.",
    price: 7.9,
    category: "Tasty Charcoal Chicken",
    kj: "1,950",
  },

  // =====================
  // CHICKEN CHIPS & SALAD PACKS
  // =====================
  {
    image:
      "/smenu/chickenchips&saladpacks/quarter-chicken-chips-and-salads.png",
    title: "¼ Chicken chips & salad",
    description: "Quarter chicken with chips and your choice of fresh salad.",
    price: 20.9,
    category: "Chicken Chips & Salad Packs",
  },
  {
    image: "/smenu/chickenchips&saladpacks/half-chicken-chips-and-salads.png",
    title: "½ Chicken chips & salad",
    description: "Half chicken with chips and your choice of fresh salad.",
    price: 22.9,
    category: "Chicken Chips & Salad Packs",
  },
  {
    image: "/smenu/chickenchips&saladpacks/quarter-chicken-and-chips.png",
    title: "¼ Chicken & chips",
    description: "Quarter charcoal chicken served hot with a side of chips.",
    price: 15.9,
    category: "Chicken Chips & Salad Packs",
  },
  {
    image: "/smenu/chickenchips&saladpacks/half-chicken-and-chips.png",
    title: "½ Chicken & Chips",
    description: "Half charcoal chicken with crispy chips and warm gravy.",
    price: 19.9,
    category: "Chicken Chips & Salad Packs",
    isPopular: true,
    kj: "5,410",
  },
  {
    simage: "/smenu/chickenchips&saladpacks/schnitzel-chips-salad.png",
    title: "Schnitzel & Chips",
    description: "Chicken schnitzel with chips and one fresh salad choice.",
    price: 19.9,
    category: "Chicken Chips & Salad Packs",
  },

  // =====================
  // FAMILY DEALS
  // =====================
  {
    image: "/menu/familydeals/chicken-and-chips-deals.png",
    title: "Chicken & Chips Deal",
    description:
      "XL charcoal chicken, large chips, plus drink or small gravy.",
    price: 33,
    category: "Family Deals",
  },
  {
    image: "/menu/familydeals/chicken&salad-deal.png",
    title: "Chicken & Salad Deal",
    description:
      "XL charcoal chicken, large salad, plus drink or small gravy.",
    price: 35,
    category: "Family Deals",
  },
  {
    image: "/menu/familydeals/family-deal.png",
    title: "Family Deal",
    description:
      "XL chicken, large chips, salad or veggies, and small gravy.",
    price: 45,
    category: "Family Deals",
  },
  {
    image: "/smenu/familydeals/r&r-deal.png",
    title: "R&R Deal",
    description:
      "Two chickens, two large chips, large gravy, and a 1.25L drink.",
    price: 65,
    category: "Family Deals",
  },
  {
    image: "/smenu/familydeals/big-roost-deal.png",
    title: "Big Roost Deal",
    description:
      "Two XL chickens, chips, salad or veggies, drink, and gravy.",
    price: 92,
    category: "Family Deals",
  },
  {
    image: "/menu/familydeals/roost&roast-deal.png",
    title: "Roost & Roast Deal",
    description:
      "Half kg pork, XL chicken, chips, veggie, salad, and gravy.",
    price: 85,
    category: "Family Deals",
  },

  // =====================
  // HOT CHIPS
  // =====================
  {
    image: "",
    title: "Hot Chips",
    description: "Hot chips with plain, chicken salt, or peri peri seasoning.",
    variants: [
      { label: "Small", price: 7.0 },
      { label: "Regular", price: 9.0 },
      { label: "Large", price: 12.0 },
    ],
    category: "Hot Chips",
  },
  {
    image: "",
    title: "Hot Chips with Gravy",
    description: "Hot chips and rich gravy with your preferred salt option.",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 10.5 },
      { label: "Large", price: 14.0 },
    ],
    category: "Hot Chips",
    isPopular: true,
  },

  // =====================
  // WEDGES
  // =====================
  {
    image: "",
    title: "Wedges",
    description: "Crispy wedges; add sour cream or sweet chilli for extra.",
    variants: [
      { label: "Small", price: 8.0 },
      { label: "Medium", price: 10.0 },
      { label: "Large", price: 14.0 },
    ],
    category: "Wedges",
    isPopular: true,
  },

  // =====================
  // SWEET POTATO
  // =====================
  {
    image: "",
    title: "Sweet Potato",
    description: "Crispy sweet potato with optional chilli sauce add-on.",
    variants: [
      { label: "Small", price: 8.0 },
      { label: "Medium", price: 10.0 },
      { label: "Large", price: 14.0 },
    ],
    category: "Sweet Potato",
  },

  // =====================
  // HOT FOODS
  // =====================
  {
    image: "/smenu/hotfoods/baked-honey-mustard-vegetables.png",
    title: "Baked Honey Mustard Vegetables",
    description:
      "Seasonal vegetables oven baked in a sweet honey mustard glaze.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/hotfoods/roast-potato.png",
    title: "Roast Potato",
    description: "Crispy roast potatoes seasoned with herbs and sea salt.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/hotfoods/baked-pumpkin.png",
    title: "Baked Pumpkin",
    description: "Tender baked pumpkin finished with light savoury seasoning.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/hotfoods/steamed-vegetables-with-mornay-sauce.png",
    title: "Steamed Vegetables with Mornay Sauce",
    description: "Fresh steamed vegetables topped with smooth mornay sauce.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/hotfoods/creamy-potato-bake.png",
    title: "Creamy Potato Bake",
    description: "Layered potato bake finished in a rich creamy sauce.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/hotfoods/creamy-chicken-pasta-with-bacon-&-mushroom.png",
    title: "Creamy Chicken Pasta with Bacon & Mushroom",
    description: "Creamy pasta with chicken, bacon, and mushroom pieces.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/hotfoods/fried-rice.png",
    title: "Fried Rice",
    description: "Classic fried rice with vegetables and balanced seasoning.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "",
    title: "Stir Fried Hokkien Noodle",
    description: "Stir-fried hokkien noodles with vegetables and savoury sauce.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },

  // =====================
  // SALADS
  // =====================
  {
    simage: "/smenu/salads/chicken-caesar.png",
    title: "Chicken Caesar",
    description: "Classic Caesar salad topped with tender grilled chicken.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/rocket-avocado.png",
    title: "Rocket Avocado",
    description: "Fresh rocket leaves tossed with creamy avocado pieces.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/fresh-garden-salad.png",
    title: "Fresh Garden Salad",
    description: "Seasonal garden vegetables with a light house dressing.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/lemon-grass-chicken-salad.png",
    title: "Lemongrass Chicken Salad",
    description: "Lemongrass chicken with crisp greens and fresh herbs.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/chicken-pesto-pasta.png",
    title: "Chicken Pesto Pasta",
    description: "Pasta salad with chicken, basil pesto, and fresh greens.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/coleslaw.png",
    title: "Coleslaw",
    description: "Creamy coleslaw with fresh cabbage and carrot ribbons.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/tabouli.png",
    title: "Tabouli",
    description: "Traditional tabouli with parsley, tomato, and bulgur wheat.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/potato-salad.png",
    title: "Potato Salad",
    description: "Creamy potato salad blended with herbs and light dressing.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/fruit-salad.png",
    title: "Fruit Salad",
    description: "Seasonal fruit salad with a fresh, naturally sweet mix.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/seafood-salad.png",
    title: "Seafood Salad",
    description: "Mixed seafood served with crisp salad greens and dressing.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/salads/baked-vegetable-with-fetta-salad.png",
    title: "Baked Vegetable with Fetta Salad",
    description: "Roasted vegetables with fetta cheese and fresh salad mix.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "",
    title: "Rocket Chickpea & Pumpkin Salad",
    description: "Rocket, chickpea, and roasted pumpkin tossed fresh daily.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "",
    title: "Mango Chicken Salad",
    description: "Grilled chicken salad with fresh mango and crisp greens.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/snitzel-slaw.png",
    title: "Snitzel Slaw",
    description: "Crispy chicken schnitzel paired with crunchy fresh slaw.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/japanese-slaw.png",
    title: "Japanese Slaw",
    description: "Japanese-style slaw with crisp vegetables and light dressing.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/salads/beetroot-feta&pumpkin.png",
    title: "Beetroot Feta & Pumpkin",
    description: "Beetroot, fetta, and roasted pumpkin in a fresh salad mix.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  //==================
  // DESERTS
  //==================
  {
    image: "/menu/desserts/rice-pudding.png",
    title: "Rice Pudding",
    description:
      "Creamy slow-cooked rice pudding with vanilla and cinnamon notes.",
    price: 5.5,
    category: "Desserts",
  },
  {
    image: "/menu/desserts/sago-pudding.png",
    title: "Sago Pudding",
    description:
      "Soft sago pearls in coconut milk with a touch of palm sugar.",
    price: 5.5,
    category: "Desserts",
  },
  {
    image: "/menu/desserts/apple-custard.png",
    title: "Apple Pudding",
    description:
      "Warm spiced apple pudding layered with silky vanilla custard.",
    price: 5.5,
    category: "Desserts",
  },
  {
    image: "/menu/desserts/banoffee-pie.png",
    title: "Banoffee Pie",
    description:
      "Biscuit base with toffee, banana slices, and whipped cream top.",
    price: 7.9,
    category: "Desserts",
  },
  {
    image: "/menu/desserts/chocolate-mousse.png",
    title: "Chocolate Mousse",
    description:
      "Rich dark chocolate mousse finished with cocoa and berries.",
    price: 7.9,
    category: "Desserts",
  },
];
