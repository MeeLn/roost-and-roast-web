"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menus, CATEGORY } from "@/lib/data/menus";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop";

export default function MenuFilters() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Group items by category based on current filters
  const menuGroups = useMemo(() => {
    // 1. Filter items first
    const filteredItems = menus.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // 2. Group by category
    const groups: Record<string, typeof filteredItems> = {};

    // If "All" or a specific category is selected, we want to maintain the specific order of CATEGORY array
    // so we iterate through the specific categories found in the filtered items.

    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });

    // Return visible categories in the order defined in CATEGORY constant
    return CATEGORY.filter((cat) => groups[cat]).map((cat) => ({
      category: cat,
      items: groups[cat],
    }));
  }, [activeCategory, searchTerm]);

  return (
    <div className="w-full">
      {/* Search and Filter Controls */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm py-4 mb-8 border-b border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === "All"
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-text-muted border-border hover:border-primary hover:text-primary"
              }`}
            >
              All
            </button>
            {CATEGORY.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-text-muted border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar - Widened to md:w-96 */}
          <div className="relative w-full md:w-96 shrink-0">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              size={18}
            />
          </div>
        </div>
      </div>

      {/* Grid Results Grouped by Category */}
      <div className="container mx-auto px-4 min-h-[50vh]">
        <AnimatePresence mode="popLayout">
          {menuGroups.map((group) => (
            <div key={group.category} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-modern font-black text-primary mb-8 border-b border-border/50 pb-2 uppercase tracking-tighter"
              >
                {group.category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((item) => (
                  <motion.div
                    layout
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-full bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="relative w-full h-56 bg-gray-100">
                      <Image
                        src={
                          item.image && item.image.startsWith("http")
                            ? item.image
                            : PLACEHOLDER_IMAGE
                        }
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow gap-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-modern text-lg font-black text-secondary uppercase tracking-tight line-clamp-2">
                          {item.title}
                        </h3>
                        <span className="font-bold text-primary shrink-0 ml-2">
                          ${item.price?.toFixed(2) || "12.00"}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed line-clamp-3 mb-2 flex-grow">
                        {item.description}
                      </p>
                      {item.variants && (
                        <div className="mt-auto pt-3 border-t border-border/50">
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {item.variants.length} Sizes Available
                          </span>
                        </div>
                      )}
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
    </div>
  );
}
