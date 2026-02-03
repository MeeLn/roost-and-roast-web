"use client";

import { useState } from "react";
import { motion, AnimatePresence, Transition, Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Utensils,
  Flame,
  Soup,
  ArrowRight,
} from "lucide-react";

// --- Menu Data with Unsplash Images ---
const menuOptions = [
  {
    id: 1,
    title: "The Signature Roast",
    subtitle: "Crowd Favorite",
    description:
      "Our legendary charcoal-roasted chicken served with golden rosemary potatoes, seasonal roasted root vegetables, and our house-made gravy. The perfect comfort feast for any gathering.",
    serves: "20-100+",
    includes: [
      "Charcoal Chicken",
      "Rosemary Potatoes",
      "Seasonal Veg",
      "Gravy",
    ],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    icon: <Flame />,
  },
  {
    id: 2,
    title: "The BBQ Feast",
    subtitle: "Smoky & Bold",
    description:
      "Low and slow brisket, sticky pork ribs, and charcoal wings. Accompanied by our famous apple slaw, buttery corn on the cob, and brioche buns.",
    serves: "30-150+",
    includes: ["Beef Brisket", "Sticky Ribs", "Apple Slaw", "Corn on Cob"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    icon: <Utensils />,
  },
  {
    id: 3,
    title: "Garden Grazing",
    subtitle: "Fresh & Vegetarian",
    description:
      "A vibrant selection of grilled halloumi, roasted pumpkin salads, quinoa tabbouleh, and fresh sourdough with dips. Light, healthy, and absolutely delicious.",
    serves: "15-80+",
    includes: [
      "Grilled Halloumi",
      "Pumpkin Salad",
      "Tabbouleh",
      "Artisan Bread",
    ],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    icon: <Soup />,
  },
];

export default function CateringOptions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // --- Logic & Types ---

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // FIXED: Explicitly typed as 'Transition' to solve the TypeScript error
  const swipeTransition: Transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === menuOptions.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? menuOptions.length - 1 : prev - 1,
    );
  };

  const currentMenu = menuOptions[currentIndex];

  return (
    <div className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1540px] relative z-10">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-modern font-black text-secondary uppercase tracking-tighter leading-[0.9]">
              Curated{" "}
              <span className="font-artistic text-primary normal-case text-5xl md:text-7xl inline-block -rotate-2">
                Menus
              </span>
            </h2>
            <p className="mt-4 text-secondary/60 max-w-md font-medium">
              Choose from our most popular catering packages, or mix and match
              to create your perfect event menu.
            </p>
          </div>

          {/* Controls (Top Right on Desktop) */}
          <div className="flex items-center gap-4 hidden md:flex">
            {/* Progress Indicator */}
            <div className="font-modern font-black text-secondary/30 text-xl tracking-widest mr-4">
              0{currentIndex + 1} <span className="text-secondary/10">/</span> 0
              {menuOptions.length}
            </div>

            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all hover:scale-105 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* --- Slider Area --- */}
        <div className="relative min-h-[600px] md:min-h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={swipeTransition}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full absolute top-0 left-0"
            >
              {/* Left: Image (Takes 7 Cols) */}
              <div className="lg:col-span-7 relative group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={currentMenu.image}
                    alt={currentMenu.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-primary">{currentMenu.icon}</span>
                    <span className="font-modern font-bold text-xs uppercase tracking-widest text-secondary">
                      {currentMenu.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Content (Takes 5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                    <Users size={20} />
                    <span className="text-sm font-modern uppercase tracking-wider">
                      Serves {currentMenu.serves}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-modern font-black text-secondary uppercase leading-none mb-6">
                    {currentMenu.title}
                  </h3>

                  <p className="text-lg text-secondary/70 leading-relaxed mb-8 border-l-2 border-primary/30 pl-6">
                    {currentMenu.description}
                  </p>

                  {/* Ingredients/Includes List */}
                  <div className="mb-10">
                    <h4 className="font-modern font-black text-xs text-secondary/40 uppercase tracking-[0.2em] mb-4">
                      Package Includes
                    </h4>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                      {currentMenu.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm font-medium text-secondary">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="group flex items-center gap-3 text-primary font-modern font-black uppercase tracking-widest text-sm hover:gap-5 transition-all">
                    View Full Menu <ArrowRight size={18} />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Mobile Controls (Visible only on small screens) --- */}
        <div className="flex md:hidden justify-between items-center mt-[184px] sm:mt-[184px]">
          <div className="font-modern font-black text-secondary/30 text-xl tracking-widest">
            0{currentIndex + 1} <span className="text-secondary/10">/</span> 0
            {menuOptions.length}
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary active:bg-secondary active:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
