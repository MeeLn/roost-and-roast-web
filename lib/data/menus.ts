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
    rimage: "/rmenu/rolls/periperi-chicken-roll.jpg",
    title: "Peri Peri Chicken Roll",
    description:
      "marinated grilled chicken breast, lettuce, mayo, peri peri sauce, cheese",
    price: 13.9,
    category: "Gourmet Rolls",
  },
  {
    rimage: "/rmenu/rolls/chicken&gravy-roll.jpg",
    title: "Chicken Roll with Gravy",
    description: "bbq chicken roll with gravy",
    price: 12.9,
    category: "Gourmet Rolls",
  },
  {
    image: "/menu/gourmetrolls/bbq-chicken-roll.png",
    title: "BBQ Chicken Roll",
    description: "shredded bbq chicken with lettuce, mayo",
    price: 12.9,
    category: "Gourmet Rolls",
  },
  {
    image: "/top-down-transparent/schnitzel-roll.png",
    title: "Schnitzel Roll",
    description: "chicken schnitzel with lettuce & mayo",
    price: 12.9,
    category: "Gourmet Rolls",
  },
  {
    image: "/menu/gourmetrolls/roost-n-roost-chicken-roll.png",
    title: "Roost & Roast Chicken Roll",
    description: "charcoal chicken, tabouli, garlic mayo",
    price: 13.9,
    category: "Gourmet Rolls",
  },
  {
    rimage: "/rmenu/rolls/pork-roll-with-gravy.jpg",
    title: "Pork Roll with Gravy",
    description: "roast pork & gravy",
    price: 12.9,
    category: "Gourmet Rolls",
  },
  {
    image: "/menu/gourmetrolls/bacon-and-egg-roll.png",
    title: "Bacon & Egg Roll",
    description: "bacon, egg, cheese, bbq sauce or tomato sauce",
    price: 10.0,
    category: "Gourmet Rolls",
  },
  {
    rimage: "/rmenu/rolls/chips&gravy-roll.jpg",
    title: "Chips & Gravy Roll",
    description: "chips & gravy in a roll",
    price: 8.0,
    category: "Gourmet Rolls",
  },

  // =====================
  // GOURMET WRAPS
  // =====================
  {
    image: "/menu/gourmetwraps/roost-n-roast.png",
    title: "Roost & Roast Wrap",
    description:
      "Marinated & grilled chicken breast, cheese, lettuce, Mayo, Sweet chilli Sauce",
    price: 13.9,
    category: "Gourmet Wraps",
  },
  {
    image: "/menu/gourmetwraps/portugese-warp.png",
    title: "Portuguese Wrap",
    description:
      "Marinated & Grilled chicken breast, cheese, lettuce, Mayo, Peri-Peri Sauce",
    price: 13.9,
    category: "Gourmet Wraps",
  },
  {
    image: "/menu/gourmetwraps/chicken.png",
    title: "BLAT Chicken Wrap",
    description: "Bacon, Lettuce, Avocado, Tomato, Chicken Breast, Mayo",
    price: 15.9,
    category: "Gourmet Wraps",
  },
  {
    image: "/menu/gourmetwraps/chicken-schnitzel.png",
    title: "Schnitzel Wrap",
    description: "Chicken Schnitzel, lettuce, Cheese, Mayo",
    price: 13.9,
    category: "Gourmet Wraps",
  },
  {
    image: "/menu/gourmetwraps/veges.png",
    title: "Breakie Wrap",
    description: "Bacon, Egg, Potato Scallop, Lettuce, BBQ & Mayo",
    price: 13.9,
    category: "Gourmet Wraps",
  },
  {
    image: "/menu/gourmetwraps/falafel-wraps.png",
    title: "Falafel Wrap",
    description: "Falafel, Tabouli, Hummus",
    price: 13.9,
    category: "Gourmet Wraps",
  },

  // =====================
  // PITA POCKETS
  // =====================
  {
    image: "/menu/pitapockets/roost&roast-pocket.png",
    title: "Roost & Roast Pocket",
    description: "Marinated & Grilled Breast, Tabouli, Garlic Sauce",
    price: 13.9,
    category: "Pita Pockets",
  },
  {
    image: "/menu/pitapockets/portuguese-pocket.png",
    title: "Portuguese Pocket",
    description:
      "Marinated & Grilled Breast, Cheese, Lettuce, Aioli, Peri-Peri Sauce",
    price: 13.9,
    category: "Pita Pockets",
  },
  {
    image: "/menu/pitapockets/falafel-pocket.png",
    title: "Falafel Pocket",
    description: "Falafel, Tabouli, Garlic sauce",
    price: 13.9,
    category: "Pita Pockets",
  },

  // =====================
  // BAKED DINNER PACKS
  // =====================
  {
    image: "/top-down-transparent/pork-dinner-pack.png",
    title: "Pork Dinner Pack",
    description: "220gms Roast pork, 2 choices of vegetables, Peas & Gravy",
    price: 20.9,
    category: "Baked Dinner Packs",
    isPopular: true,
  },
  {
    image: "/top-down-transparent/beef-dinner-pack.png",
    title: "Beef Dinner Pack",
    description: "220gms Roast Beef, 2 choices of vegetables, Peas & Gravy",
    price: 20.9,
    category: "Baked Dinner Packs",
  },
  {
    image: "/top-down-transparent/half-chicken-dinner-pack.png",
    title: "½ Chicken Dinner Pack",
    description: "½ Charcoal Chicken, 2 choices of vegetables, Peas & Gravy",
    price: 21.9,
    category: "Baked Dinner Packs",
    kj: "6,920",
  },
  {
    image: "/top-down-transparent/quarter-chicken-dinner-pack.png",
    title: "¼ Chicken Dinner Pack",
    description: "¼ Chicken, 2 choices of vegetables, Peas & Gravy",
    price: 19.9,
    category: "Baked Dinner Packs",
  },

  // =====================
  // ROASTS
  // =====================
  {
    image: "/menu/roasts/pork-with-crackle.png",
    title: "Pork with Crackle",
    description: "Price per kg",
    price: 45,
    category: "Roasts",
  },
  {
    image: "/top-down-transparent/beef-roast.png",
    title: "Roast Beef",
    description: "Price per kg",
    price: 50,
    category: "Roasts",
  },

  // =====================
  // SNACKS & SAUCES
  // =====================
  {
    image: "/top-down-transparent/devil-wings.png",
    title: "Devil Wings",
    description: "or 5 for $10",
    price: 2.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/top-down-transparent/chicken-tenders.png",
    title: "Sweet Chilli Tenders",
    description: "or 5 for $10",
    price: 2.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/top-down-transparent/chicken-skewers.png",
    title: "Chicken Skewers",
    description: "",
    price: 3.9,
    category: "Snacks & Sauces",
  },
  {
    simage: "/smenu/springroll.jpg",
    title: "Spring Roll",
    description: "",
    price: 3.9,
    category: "Snacks & Sauces",
  },
  {
    image: "/top-down-transparent/curry-puff.png",
    title: "Curry Puff",
    description: "",
    price: 3.0,
    category: "Snacks & Sauces",
  },
  {
    image: "/top-down-transparent/potato-scallops.png",
    title: "Potato Scallops",
    description: "",
    price: 2.0,
    category: "Snacks & Sauces",
  },
  {
    image: "/menu/snacks&sauces/sauces.png",
    title: "Sauces",
    description:
      "Peri Peri | Garlic Sauce | Chilli Mayo | Garlic Mayo | Sour Cream",
    price: 2.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/menu/snacks&sauces/other-sauces.png",
    title: "Other Sauces",
    description: "Sweet Chilli | Tomato Sauce | BBQ Sauce",
    price: 1.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/menu/snacks&sauces/chicken-salt.png",
    title: "Chicken Salt or Peri Peri Salt",
    description: "",
    price: 2.5,
    category: "Snacks & Sauces",
  },
  {
    image: "/top-down-transparent/peri-peri-sauce.png",
    title: "Bottled Peri Peri Sauce",
    description: "",
    price: 10.0,
    category: "Snacks & Sauces",
  },
  {
    image: "/menu/snacks&sauces/bottled-salad-dressing.png",
    title: "Bottled Salad Dressing",
    description: "",
    price: 7.0,
    category: "Snacks & Sauces",
  },

  // =====================
  // Tasty CHARCOAL CHICKEN
  // =====================
  {
    image: "/top-down-transparent/whole-chicken.png",
    title: "Whole Chicken",
    description: "Charcoal Chicken",
    price: 20.0,
    category: "Tasty Charcoal Chicken",
    isPopular: true,
    kj: "7,820",
  },
  {
    image: "/top-down-transparent/half-chicken.png",
    title: "Half Chicken",
    description: "Charcoal Chicken",
    price: 12.5,
    category: "Tasty Charcoal Chicken",
    kj: "3,910",
  },
  {
    image: "/top-down-transparent/quarter-chicken.png",
    title: "Quarter Chicken",
    description: "Charcoal Chicken",
    price: 7.9,
    category: "Tasty Charcoal Chicken",
    kj: "1,950",
  },

  // =====================
  // CHICKEN CHIPS & SALAD PACKS
  // =====================
  {
    image: "/top-down-transparent/quarter-chicken-chips-salad.png",
    title: "¼ Chicken chips & salad",
    description: "¼ chicken, choice of a salad & Chips",
    price: 20.9,
    category: "Chicken Chips & Salad Packs",
  },
  {
    image: "/top-down-transparent/half-chicken-chips-salad.png",
    title: "½ Chicken chips & salad",
    description: "½ chicken, choice of a salad & Chips",
    price: 22.9,
    category: "Chicken Chips & Salad Packs",
  },
  {
    image: "/top-down-transparent/quarter-chicken-chips.png",
    // rimage: "/rmenu/quarter-chicken-dinner-pack.png",
    title: "¼ Chicken & chips",
    description: "¼ chicken & Chips",
    price: 15.9,
    category: "Chicken Chips & Salad Packs",
  },
  {
    image: "/top-down-transparent/half-chicken-chips.png",
    title: "½ Chicken & Chips",
    description: "½ Chicken Chips & Gravy",
    price: 19.9,
    category: "Chicken Chips & Salad Packs",
    isPopular: true,
    kj: "5,410",
  },
  {
    simage: "/smenu/schnitzel-chips-salad.png",
    title: "Schnitzel & Chips",
    description: "Chicken Schnitzel & chips & 1 choice of Salad",
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
      "1* XL Charcoal Chicken, 1* Large Chips, 1* Large Drink (1.25L) or Small Gravy",
    price: 33,
    category: "Family Deals",
  },
  {
    image: "/menu/familydeals/chicken&salad-deal.png",
    title: "Chicken & Salad Deal",
    description:
      "1* XL Charcoal Chicken, 1* Large Salad, 1* Large Drink (1.25L) or Small Gravy",
    price: 35,
    category: "Family Deals",
  },
  {
    image: "/menu/familydeals/family-deal.png",
    title: "Family Deal",
    description:
      "1* XL Charcoal Chicken, 1* Large Chips, 1* Large Salad or Large Veggies, 1* Small Gravy",
    price: 45,
    category: "Family Deals",
  },
  {
    image: "/menu/familydeals/r-and-r-deal.png",
    title: "R&R Deal",
    description:
      "2* Charcoal Chickens, 2* Large Chips, 1* Large Gravy, 1* 1.25 ltr Drink",
    price: 65,
    category: "Family Deals",
  },
  {
    image: "/menu/familydeals/big-roost-deal.png",
    title: "Big Roost Deal",
    description:
      "2* XL Charcoal Chickens, 2* Large Chips, 2* Large Salad or Large Veggies, 1* Large Drink (1.25L), 1* Large Gravy",
    price: 92,
    category: "Family Deals",
  },
  {
    image: "/menu/familydeals/roost&roast-deal.png",
    title: "Roost & Roast Deal",
    description:
      "1/2 Kg Pork, 1* XL Charcoal Chicken, 1* Large Chips, 1* Regular Veggie, 1* Regular Salad, 1* Large Gravy",
    price: 85,
    category: "Family Deals",
  },

  // =====================
  // HOT CHIPS
  // =====================
  {
    image: "/top-down-transparent/chips.png",
    title: "Hot Chips",
    description: "Choice of chicken, plain, or peri peri salt.",
    variants: [
      { label: "Small", price: 7.0 },
      { label: "Regular", price: 9.0 },
      { label: "Large", price: 12.0 },
    ],
    category: "Hot Chips",
  },
  {
    image: "/top-down-transparent/chips-with-gravy.png",
    title: "Hot Chips with Gravy",
    description: "Choice of chicken, plain, or peri peri salt.",
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
    image: "/top-down-transparent/wedges.png",
    title: "Wedges",
    description: "Sauces ($1.5 ea): Sour cream or sweet chilli.",
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
    image: "/menu/sweetpotato/sweet-potato.png",
    title: "Sweet Potato",
    description: "Chilli sauce available for $1.5 ea.",
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
    image: "/menu/hotfoods/baked-honey-mustard-veggies.png",
    title: "Baked Honey Mustard Vegetables",
    description:
      "Oven-baked seasonal vegetables in a sweet honey mustard glaze.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/menu/hotfoods/roast-potatoes.png",
    title: "Roast Potato",
    description: "Crispy roasted potatoes seasoned with herbs.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/menu/hotfoods/baked-pumpkin.png",
    title: "Baked Pumpkin",
    description: "Tender baked pumpkin with light seasoning.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/menu/steamed-vegetables-with-mornay-sauce.png",
    title: "Steamed Vegetables with Mornay Sauce",
    description: "Fresh steamed vegetables topped with creamy mornay sauce.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/menu/hotfoods/creamy-potato-bake.png",
    title: "Creamy Potato Bake",
    description: "Baked potatoes in a rich and creamy sauce.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/menu/creamy-chicken-mushroon-bacon-pasta.png",
    title: "Creamy Chicken Pasta with Bacon & Mushroom",
    description: "Creamy pasta with chicken, bacon, and mushrooms.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/menu/hotfoods/fried-rice.png",
    title: "Fried Rice",
    description: "Classic fried rice with vegetables and seasoning.",
    category: "Hot Foods",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/menu/hotfoods/stir-fried-hokkien-noodle.png",
    title: "Stir Fried Hokkien Noodle",
    description: "Stir-fried hokkien noodles with vegetables and sauce.",
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
    simage: "/smenu/sample/1.png",
    title: "Chicken Caesar",
    description: "Classic Caesar salad with grilled chicken.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "none",
  },
  {
    simage: "/smenu/sample/2.png",
    title: "Rocket Avocado",
    description: "Fresh rocket leaves with creamy avocado.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "#FEF9C3",
  },
  {
    simage: "/smenu/sample/3.png",
    title: "Fresh Garden Salad",
    description: "Seasonal fresh vegetables with light dressing.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "#EBE4E4",
  },
  {
    simage: "/smenu/sample/4.png",
    title: "Lemongrass Chicken Salad",
    description: "Lemongrass-marinated chicken with fresh herbs.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "#9A908D",
  },
  {
    simage: "/smenu/sample/5.png",
    title: "Chicken Pesto Pasta",
    description: "Pasta salad with chicken and basil pesto.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "#FFCACA",
  },
  {
    simage: "/smenu/sample/6.png",
    title: "Coleslaw",
    description: "Creamy coleslaw with fresh cabbage.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "#FFB97C",
  },
  {
    simage: "/smenu/sample/7.png",
    title: "Tabouli",
    description: "Traditional parsley, tomato, and bulgur salad.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "#EDE5D8",
  },
  {
    simage: "/smenu/sample/1.png",
    title: "Potato Salad",
    description: "Creamy potato salad with herbs.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/sample/2.png",
    title: "Fruit Salad",
    description: "Seasonal fresh fruit mix.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/sample/3.png",
    title: "Seafood Salad",
    description: "Mixed seafood with crisp salad greens.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/sample/4.png",
    title: "Baked Vegetable with Fetta Salad",
    description: "Roasted vegetables with fetta cheese.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/sample/5.png",
    title: "Rocket Chickpea & Pumpkin Salad",
    description: "Rocket leaves with chickpea and roasted pumpkin.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    image: "/smenu/sample/6.png",
    title: "Mango Chicken Salad",
    description: "Grilled chicken with fresh mango slices.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/sample/7.png",
    title: "Snitzel Slaw",
    description: "Crispy chicken schnitzel with fresh slaw.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/sample/8.png",
    title: "Japanese Slaw",
    description: "Crispy chicken schnitzel with fresh slaw.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/sample/8.png",
    title: "Beetroot Feta & Pumpkin",
    description: "Crispy chicken schnitzel with fresh slaw.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "#EFEEED",
  },
  {
    simage: "/smenu/sample/9.png",
    title: "Beetroot Feta & Pumpkin",
    description: "Crispy chicken schnitzel with fresh slaw.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
  },
  {
    simage: "/smenu/sample/9.png",
    title: "Beetroot Feta & Pumpkin",
    description: "Crispy chicken schnitzel with fresh slaw.",
    category: "Salads",
    variants: [
      { label: "Small", price: 7.9 },
      { label: "Regular", price: 12.9 },
      { label: "Large", price: 14.9 },
      { label: "Family", price: 20.0 },
    ],
    bgColor: "#fd8902",
  },
  //==================
  // DESERTS
  //==================
  {
    image: "/menu/desserts/rice-pudding.png",
    title: "Rice Pudding",
    description:
      "Classic, creamy, and comforting slow-cooked rice blended with rich milk, a hint of vanilla, and a gentle sprinkle of cinnamon.",
    price: 5.5,
    category: "Desserts",
  },
  {
    image: "/menu/desserts/sago-pudding.png",
    title: "Sago Pudding",
    description:
      "A delightful and refreshing treat made with delicate sago pearls, rich coconut milk, and sweetened with a touch of palm sugar syrup.",
    price: 5.5,
    category: "Desserts",
  },
  {
    image: "/menu/desserts/apple-custard.png",
    title: "Apple Pudding",
    description:
      "Warm, spiced baked apples blanketed in a rich, silky vanilla custard and topped with a light dusting of cinnamon.",
    price: 5.5,
    category: "Desserts",
  },
  {
    image: "/menu/desserts/banoffee-pie.png",
    title: "Banoffee Pie",
    description:
      "A heavenly dessert featuring a buttery biscuit base, sticky caramel toffee, fresh sliced bananas, and a generous mound of whipped cream.",
    price: 7.9,
    category: "Desserts",
  },
  {
    image: "/menu/desserts/chocolate-mousse.png",
    title: "Chocolate Mousse",
    description:
      "Decadent, airy, and rich dark chocolate mousse finished with a light dusting of cocoa powder and fresh seasonal berries.",
    price: 7.9,
    category: "Desserts",
  },
];
