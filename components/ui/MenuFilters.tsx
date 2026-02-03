"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menus, CATEGORY } from "@/lib/data/menus";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop";

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

export default function MenuFilters() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const initialTopRef = useRef<number>(0);

  useEffect(() => {
    if (sectionRef.current) {
      initialTopRef.current = sectionRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        if (isSticky) setIsSticky(false);
        return;
      }

      // 2. Desktop Sticky Logic
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

    // Add resize listener to handle orientation changes or window resizing
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
      {/* Note: 'sticky' class is conditional in the logic below, effectively handled by motion.div */}
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
                onClick={() => setActiveCategory(cat)}
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
                {/* Mobile-only text label when not sticky (since we hid the one above on mobile to save space, or keep it if you prefer) */}
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
              ? "w-12 md:w-80 flex-shrink-0 ml-auto group" // Compact on sticky
              : "w-full md:w-[800px] mx-auto" // Full width on non-sticky
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
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full py-3 rounded-[20px] border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-sm ${
              isSticky
                ? "pl-10 pr-4 opacity-0 w-0 md:w-full md:opacity-100 pointer-events-none md:pointer-events-auto" // Hide input text on desktop sticky small mode if needed, or keep standard
                : "pl-10 pr-4"
            } ${
              // Force input to be visible and standard on mobile since isSticky is always false there
              "md:block"
            }`}
            // Fix for search bar input visibility in sticky mode
            style={
              isSticky
                ? { opacity: 1, width: "100%", paddingLeft: "2.5rem" }
                : {}
            }
          />
        </motion.div>
      </motion.div>

      {/* Grid Results Grouped by Category */}
      <div className="container mx-auto px-0 md:px-4 min-h-[50vh]">
        <AnimatePresence mode="popLayout">
          {menuGroups.map((group) => (
            <div key={group.category} className="mb-16">
              <div className="flex justify-center w-full">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-7xl font-artistic text-secondary mb-12 inline-block relative text-center mt-8 px-2"
                >
                  <span className="relative z-10">{group.category}</span>
                  <span className="absolute bottom-2 left-0 w-full h-2 md:h-3 bg-primary/20 -z-0 -rotate-1 rounded-full"></span>
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-60 md:gap-y-72 pt-40 md:pt-60">
                {group.items.map((item) => (
                  <motion.div
                    layout
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex flex-col bg-background rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group mx-2 md:mx-0"
                  >
                    <div className="absolute -top-40 md:-top-60 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="relative w-full h-full rounded-full border-4 border-background shadow-lg overflow-hidden bg-background transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={PLACEHOLDER_IMAGE}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <div className="pt-16 pb-8 px-6 flex flex-col items-center flex-grow text-center gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <h3 className="font-modern text-xl font-black text-secondary uppercase tracking-tight">
                          {item.title}
                        </h3>
                        <p className="font-serif italic text-base text-text-muted leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-auto w-full flex flex-col items-center justify-center pt-4">
                        {item.variants ? (
                          <div className="flex flex-wrap justify-center gap-4 w-full">
                            {item.variants.map((variant) => (
                              <div
                                key={variant.label}
                                className="flex flex-col items-center gap-1 p-2 rounded-lg bg-secondary/5 border border-border/50 min-w-[80px] group/variant relative overflow-hidden transition-all duration-300 hover:border-primary"
                              >
                                {/* Variant Fill Effect */}
                                <div className="absolute inset-0 bg-primary origin-left scale-x-0 group-hover/variant:scale-x-100 transition-transform duration-500 ease-out" />

                                <span className="relative z-10 font-artistic text-2xl text-primary -rotate-3 group-hover/variant:text-white transition-colors duration-300">
                                  {variant.label}
                                </span>
                                <span className="relative z-10 font-modern text-xl font-bold text-primary group-hover/variant:text-white transition-colors duration-300">
                                  ${variant.price.toFixed(0)}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="w-full relative mt-4">
                            {/* Full Width Loading Bar Container */}
                            <div className="relative w-full overflow-hidden rounded-full py-2 bg-secondary/5 group-hover:bg-transparent transition-colors duration-500">
                              {/* Red Filling Overlay */}
                              <div className="absolute inset-0 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                              <div className="relative z-10 flex flex-col items-center justify-center">
                                <span className="font-artistic text-3xl text-primary -rotate-6 lowercase mb-0 transition-colors duration-500 group-hover:text-white">
                                  price
                                </span>
                                <span className="font-modern text-3xl font-bold text-primary transition-colors duration-500 group-hover:text-white">
                                  ${item.price?.toFixed(2) || "12.00"}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
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
