"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menus, CATEGORY } from "@/lib/data/menus";

const PLACEHOLDER_IMAGE = "/placeholder.png";

const CATEGORY_EMOJIS: Record<string, string> = {
  All: "🍽️",
  "Gourmet Rolls": "🥖",
  "Gourmet Wraps": "🌯",
  "Pita Pockets": "🥙",
  "Baked Dinner Packs": "🍱",
  Roasts: "🍖",
  "Snacks & Sauces": "🥟",
  "Tasty Charcoal Chicken": "🍗",
  "Chicken Chips & Salad Packs": "🥗",
  "Family Deals": "👨‍👩‍👧‍👦",
  "Hot Chips": "🍟",
  Wedges: "🥔",
  "Sweet Potato": "🍠",
  "Hot Foods": "🥘",
  Salads: "🥗",
  default: "🍴",
};

// Interface for shape configuration
interface ShapeConfig {
  src: string;
  sizeClass: string;
  roundedClass: string;
  rxValue: string;
}

const MenuCard = ({ item }: { item: (typeof menus)[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobileActive, setIsMobileActive] = useState(false);

  // --- 1. Determine Shape, Size & Source Priority ---
  const shapeConfig: ShapeConfig = useMemo(() => {
    // 1. RECTANGLE (rimage)
    if (item.rimage && item.rimage.trim() !== "") {
      return {
        src: item.rimage,
        sizeClass: "w-64 h-44",
        roundedClass: "rounded-[2rem]",
        rxValue: "32",
      };
    }
    // 2. SQUARE (simage)
    if (item.simage && item.simage.trim() !== "") {
      return {
        src: item.simage,
        sizeClass: "w-54 h-54",
        roundedClass: "rounded-[2rem]",
        rxValue: "32",
      };
    }
    // 3. CIRCLE (default image)
    return {
      src: item.image || PLACEHOLDER_IMAGE,
      sizeClass: "w-54 h-54",
      roundedClass: "rounded-full",
      rxValue: "50%",
    };
  }, [item]);

  // --- 2. Image State Management ---
  const [imgSrc, setImgSrc] = useState(shapeConfig.src);

  useEffect(() => {
    setImgSrc(shapeConfig.src);
  }, [shapeConfig.src]);

  // --- 3. Intersection Observer (Mobile) ---
  useEffect(() => {
    if (window.innerWidth >= 768) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsMobileActive(entry.isIntersecting),
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const activeClass = (base: string, active: string) =>
    `${base} ${isMobileActive ? active : ""}`;

  return (
    <motion.div
      layout
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="relative flex flex-col group mx-2 md:mx-0 mt-12 md:mt-0"
    >
      {/* --- IMAGE CONTAINER --- */}
      <div
        className={activeClass(
          `absolute -top-40 left-1/2 -translate-x-1/2 z-20 transition-transform duration-500 ease-out group-hover:-translate-y-6 ${shapeConfig.sizeClass}`,
          "-translate-y-6",
        )}
      >
        {/* --- SVG MARCHING ANTS BORDER --- */}
        <svg
          className={activeClass(
            "absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "opacity-100",
          )}
        >
          <motion.rect
            x="2"
            y="2"
            width="calc(100% - 4px)"
            height="calc(100% - 4px)"
            rx={shapeConfig.rxValue}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="text-primary"
            animate={{ strokeDashoffset: [0, -12] }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        {/* --- ACTUAL IMAGE WRAPPER --- */}
        <div
          className={`relative w-full h-full border border-gray-100/20 shadow-lg overflow-hidden bg-gray-400/40 z-10 ${shapeConfig.roundedClass}`}
        >
          <Image
            src={imgSrc}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            onError={() => setImgSrc(PLACEHOLDER_IMAGE)}
            className={activeClass(
              "object-cover transition-transform duration-500 scale-80 group-hover:scale-110",
              "scale-110",
            )}
          />
        </div>
      </div>

      {/* --- CARD CONTENT --- */}
      <div className="relative z-10 bg-background rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all overflow-hidden flex flex-col flex-grow pt-24">
        <div className="px-6 pb-4 flex flex-col items-center flex-grow text-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-modern text-xl font-black text-secondary uppercase tracking-tight leading-tight">
              {item.title}
            </h3>
            <p className="italic text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>

        <div className="mt-auto w-full relative">
          <div
            className={activeClass(
              "absolute inset-0 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0",
              "scale-x-100",
            )}
          />

          <div className="relative z-10 py-3 px-4 flex flex-col items-center justify-center min-h-[70px]">
            {item.variants ? (
              <div className="flex flex-wrap justify-center gap-2 w-full">
                {item.variants.map((variant) => (
                  <div
                    key={variant.label}
                    className="flex flex-col items-center justify-center px-6 py-1 rounded-lg min-w-[60px] transition-all duration-300"
                  >
                    <span
                      className={activeClass(
                        "font-artistic text-lg text-primary -rotate-3 group-hover:text-white transition-colors duration-300",
                        "text-white",
                      )}
                    >
                      {variant.label}
                    </span>
                    <span
                      className={activeClass(
                        "font-modern text-sm font-bold text-primary group-hover:text-white transition-colors duration-300",
                        "text-white",
                      )}
                    >
                      ${variant.price.toFixed(0)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-baseline gap-2">
                <span
                  className={activeClass(
                    "font-artistic text-2xl text-primary -rotate-6 lowercase mb-0 transition-colors duration-500 group-hover:text-white",
                    "text-white",
                  )}
                >
                  only
                </span>
                <span
                  className={activeClass(
                    "font-modern text-2xl font-bold text-primary transition-colors duration-500 group-hover:text-white",
                    "text-white",
                  )}
                >
                  ${item.price?.toFixed(2) || "12.00"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function MenuFilters() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  // REMOVED: isFirstRender ref (no longer needed)

  const sectionRef = useRef<HTMLElement>(null);
  const initialTopRef = useRef<number>(0);

  // 1. Sticky Header Logic
  useEffect(() => {
    if (sectionRef.current) {
      initialTopRef.current = sectionRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        if (isSticky) setIsSticky(false);
        return;
      }

      const navOffset = 100;
      const buffer = 30;
      const scrollY = window.scrollY;
      const triggerPoint = initialTopRef.current - navOffset;

      if (!isSticky && scrollY > triggerPoint) {
        setIsSticky(true);
      } else if (isSticky && scrollY < triggerPoint - buffer) {
        setIsSticky(false);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSticky]);

  // 2. HELPER: Scroll to section ONLY when called explicitly
  const scrollToMenu = () => {
    if (sectionRef.current) {
      const headerOffset = window.innerWidth < 768 ? 100 : 120;
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 3. HANDLERS: Combine state update + scroll trigger
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    // Only scroll if we are not already sticky (meaning we are high up on the page)
    // Or just always scroll to ensure focus
    scrollToMenu();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Optional: Scroll when typing starts? Usually better to stay put or scroll only if far away.
    if (window.scrollY < initialTopRef.current - 200) {
      scrollToMenu();
    }
  };

  // 4. Filtering Logic
  const menuGroups = useMemo(() => {
    const filteredItems = menus.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    const groups: { category: string; items: typeof menus }[] = [];
    const categoriesToUse =
      activeCategory === "All" ? CATEGORY : [activeCategory];

    categoriesToUse.forEach((cat) => {
      const itemsInCat = filteredItems.filter((item) => item.category === cat);
      if (itemsInCat.length > 0) {
        groups.push({ category: cat, items: itemsInCat });
      }
    });

    return groups;
  }, [activeCategory, searchTerm]);

  return (
    <section ref={sectionRef} className="relative px-4 pb-20 mt-10 z-30">
      {/* Filter Bar */}
      <motion.div
        layout
        transition={{
          layout: { duration: 0.3, ease: "easeInOut" },
        }}
        className={`bg-background/95 backdrop-blur-sm mx-auto transition-all duration-500 mb-20 ease-in-out flex ${
          isSticky
            ? "sticky z-30 w-full md:w-[98%] max-w-[1590px] rounded-0 md:rounded-2xl shadow-sm border-b md:border border-border flex-row items-center justify-between py-4 px-4 md:px-6 top-[80px] md:top-[120px]"
            : "relative z-40 w-[calc(100%-2rem)] md:w-[99%] max-w-[1600px] rounded-3xl shadow-lg border border-white/20 flex-col items-center gap-8 py-6 px-4 top-2"
        }`}
      >
        {/* Category Tabs */}
        <motion.div
          layout
          className={`flex items-center gap-2 transition-all ${
            isSticky
              ? "flex-1 justify-start overflow-x-auto no-scrollbar"
              : "w-full flex-wrap justify-center"
          }`}
        >
          {["All", ...CATEGORY].map((cat) => {
            const emoji = CATEGORY_EMOJIS[cat] || CATEGORY_EMOJIS.default;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                // UPDATED: Use the handler instead of direct setState
                onClick={() => handleCategoryChange(cat)}
                title={cat}
                className={`relative transition-all z-0 border flex items-center justify-center group flex-shrink-0 ${
                  isSticky
                    ? "w-12 h-12 rounded-xl bg-secondary/5 hover:bg-secondary/10"
                    : "px-4 py-2 rounded-full"
                } ${
                  isActive
                    ? "border-transparent text-white"
                    : "border-border text-text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategory"
                    className={`absolute inset-0 bg-primary -z-10 shadow-md ${
                      isSticky ? "rounded-xl" : "rounded-full"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <span
                  className={`leading-none filter drop-shadow-sm transition-transform ${
                    isSticky ? "text-2xl group-hover:scale-110" : "text-lg mr-2"
                  }`}
                >
                  {emoji}
                </span>

                {!isSticky && (
                  <span className="text-sm font-modern font-bold uppercase tracking-wider hidden md:inline-block">
                    {cat}
                  </span>
                )}
                {!isSticky && (
                  <span className="text-sm font-modern font-bold uppercase tracking-wider md:hidden">
                    {cat}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          layout
          className={`relative transition-all duration-500 ${
            isSticky
              ? "w-12 md:w-80 flex-shrink-0 ml-auto group"
              : "w-full md:w-[800px] mx-auto"
          }`}
        >
          <Search
            className={`absolute top-1/2 -translate-y-1/2 text-text-muted z-10 ${
              isSticky
                ? "left-1/2 -translate-x-1/2 md:left-3 md:translate-x-0"
                : "left-3"
            }`}
            size={18}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            // UPDATED: Use the handler
            onChange={handleSearchChange}
            className={`w-full py-3 rounded-[20px] border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm ${
              isSticky
                ? "pl-10 pr-4 opacity-0 w-0 md:w-full md:opacity-100 pointer-events-none md:pointer-events-auto"
                : "pl-10 pr-4"
            } md:block`}
            style={
              isSticky
                ? { opacity: 1, width: "100%", paddingLeft: "2.5rem" }
                : {}
            }
          />
        </motion.div>
      </motion.div>

      {/* Grid Results */}
      <div className="container mx-auto px-0 md:px-4 min-h-[50vh]">
        <AnimatePresence mode="popLayout">
          {menuGroups.map((group) => (
            <div key={group.category} className="mb-16">
              <div className="flex justify-center w-full">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="text-4xl md:text-7xl font-artistic text-secondary mb-22 md:mb-28 inline-block relative text-center mt-0 md:mt-8 px-2"
                >
                  <span className="relative z-10">{group.category}</span>
                  <span className="absolute bottom-2 left-0 w-full h-2 md:h-3 bg-primary/20 -z-0 -rotate-1 rounded-full"></span>
                </motion.h2>
              </div>

              {/* Reduced gap-y for tighter layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-46 md:gap-y-60 pt-24 md:pt-32">
                {group.items.map((item) => (
                  <MenuCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          ))}
        </AnimatePresence>

        {menuGroups.length === 0 && (
          <div className="col-span-full text-center py-20 text-text-muted">
            <p className="text-xl font-serif">
              No items found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
