"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Transition, Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  UtensilsCrossed,
  Flame,
  Leaf,
  PartyPopper,
  ArrowRight,
  X,
  Download,
} from "lucide-react";

const menuOptions = [
  {
    id: 1,
    title: "Hot Roast Feasts",
    subtitle: "Trays & Roasts",
    description:
      "From our signature whole roast chickens to slow-cooked roast beef and pork. We offer large foil trays of creamy potato bake, fried rice, and hokkien noodles perfect for feeding a crowd.",
    serves: "Large Groups",
    includes: [
      "Whole Roast Chickens",
      "Roast Beef & Pork",
      "Creamy Potato Bake",
      "Hokkien Noodles",
    ],
    image: "/catering/catering-1.png",
    icon: <Flame />,
  },
  {
    id: 2,
    title: "Gourmet Salads",
    subtitle: "Fresh & Healthy",
    description:
      "A huge selection of fresh salads prepared daily. Favorites include Chicken Caesar, Rocket Avocado, Seafood Salad, and Pesto Pasta. Available in Regular, Large, and Family sized trays.",
    serves: "Sides & Mains",
    includes: [
      "Chicken Caesar",
      "Seafood Salad",
      "Pesto Pasta",
      "Rocket & Pumpkin",
    ],
    image: "/catering/catering-2.jpg",
    icon: <Leaf />,
  },
  {
    id: 3,
    title: "Party & Kids Packs",
    subtitle: "Events Made Easy",
    description:
      "Stress-free catering for birthdays and functions. Our Kids Party packs include nuggets, spring rolls, and tenders. For adults, we offer fresh Wrap & Roll platters starting from just $10ea.",
    serves: "10-50+ Kids/Adults",
    includes: [
      "Nuggets & Chips",
      "Spring Rolls",
      "Chicken Wraps",
      "Fresh Roll Platters",
    ],
    image: "/catering/catering-3.avif",
    icon: <PartyPopper />,
  },
];

const PDF_PATH = "/catering/roostnroast-catering.pdf";

export default function CateringOptions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isPdfOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isPdfOpen]);

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
    <div
      className="py-20 md:py-28 bg-[#faf9f6] relative overflow-hidden"
      id="menu-slider"
    >
      {/* Background Decor */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
        }}
      />

      <div className="container mx-auto px-4 max-w-[1540px] relative z-10">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-modern font-black text-text-main uppercase tracking-tighter leading-[0.9]">
              Explore Our <br />
              <span className="font-artistic text-primary normal-case text-5xl md:text-7xl inline-block -rotate-2 mt-2">
                Catering Menu
              </span>
            </h2>
            <p className="mt-4 text-text-muted max-w-md font-medium text-lg">
              From hot trays to fresh salads and kids' party packs. We have
              everything you need to feed your guests.
            </p>
          </div>

          <div className="flex items-center gap-4 hidden md:flex">
            <div className="font-modern font-black text-text-muted/30 text-xl tracking-widest mr-4">
              0{currentIndex + 1} <span className="text-text-muted/10">/</span>{" "}
              0{menuOptions.length}
            </div>
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-text-muted/20 flex items-center justify-center text-text-muted hover:bg-text-main hover:text-white transition-all hover:scale-105 active:scale-95"
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
        <div className="relative min-h-[650px] md:min-h-[500px]">
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
              {/* Image */}
              <div className="lg:col-span-7 relative group order-1 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10 border-2 border-slate-50">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={currentMenu.image}
                    alt={currentMenu.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-primary-light">
                      {currentMenu.icon}
                    </span>
                    <span className="font-modern font-bold text-xs uppercase tracking-widest text-text-main">
                      {currentMenu.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-4 text-primary-light font-bold">
                    <Users size={20} />
                    <span className="text-sm font-modern uppercase tracking-wider">
                      {currentMenu.serves}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-modern font-black text-text-main uppercase leading-none mb-6">
                    {currentMenu.title}
                  </h3>

                  <p className="text-lg text-text-muted leading-relaxed mb-8 border-l-4 border-primary-light pl-6">
                    {currentMenu.description}
                  </p>

                  <div className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-border">
                    <h4 className="font-modern font-black text-xs text-text-muted/60 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <UtensilsCrossed size={14} /> Popular Items
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {currentMenu.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                          <span className="text-sm font-medium text-text-main">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* --- BUTTON TRIGGERS PDF MODAL --- */}
                  <button
                    onClick={() => setIsPdfOpen(true)}
                    className="w-fit group flex items-center gap-3 bg-text-main text-white px-8 py-4 rounded-full font-modern font-bold uppercase tracking-widest text-sm hover:bg-primary transition-all shadow-lg hover:shadow-primary/30"
                  >
                    See Full Menu PDF{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden justify-between p-2 items-center mt-[260px]">
          <div className="font-modern font-black text-text-muted/30 text-xl tracking-widest">
            0{currentIndex + 1} <span className="text-text-muted/10">/</span> 0
            {menuOptions.length}
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-text-muted/20 flex items-center justify-center text-text-muted"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* --- STYLISH PDF MODAL --- */}
      <AnimatePresence>
        {isPdfOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsPdfOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white shrink-0 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <UtensilsCrossed size={20} />
                  </div>
                  <h3 className="font-artistic text-2xl text-primary uppercase">
                    Catering Menu
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={PDF_PATH}
                    download
                    className="hidden md:flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
                  >
                    <Download size={18} /> Download
                  </a>
                  <button
                    onClick={() => setIsPdfOpen(false)}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div
                className="flex-1 bg-gray-100 relative w-full h-full overflow-y-auto scrollbar-fire-modal"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <iframe
                  src={`${PDF_PATH}#toolbar=0&view=FitH`}
                  className="w-full h-full block"
                  title="Menu PDF"
                />
                <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-center p-6">
                  <p className="text-text-muted mb-4">PDF loading...</p>
                  <a
                    href={PDF_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg"
                  >
                    View PDF Externally
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
