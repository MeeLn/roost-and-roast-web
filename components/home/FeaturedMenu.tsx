"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { menus } from "@/lib/data/menus";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop";

export default function FeaturedMenu() {
  const popularItems = menus.filter((item) => item.isPopular);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  // Layout State
  const [itemWidth, setItemWidth] = useState(300); // Default fallback
  const [visibleItems, setVisibleItems] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const GAP = 32; // Fixed gap in pixels (gap-8)

  // 1. Exact Size Calculation Logic
  useEffect(() => {
    const updateDimensions = () => {
      if (!carouselWrapperRef.current) return;

      const containerWidth = carouselWrapperRef.current.offsetWidth;
      const windowWidth = window.innerWidth;

      let newVisibleItems = 3;
      let calculatedWidth = 0;

      if (windowWidth < 768) {
        // Mobile: Show 1 item, but make it 85% width to show a peek of the next one
        newVisibleItems = 1;
        calculatedWidth = containerWidth * 0.85;
      } else if (windowWidth < 1024) {
        // Tablet: Show 2 items
        newVisibleItems = 2;
        // Formula: (Container - (Gap * (Items - 1))) / Items
        calculatedWidth = (containerWidth - GAP) / 2;
      } else {
        // Desktop: Show 3 items
        newVisibleItems = 3;
        calculatedWidth = (containerWidth - GAP * 2) / 3;
      }

      setVisibleItems(newVisibleItems);
      setItemWidth(calculatedWidth);
    };

    // Observer handles resize more accurately than window.resize
    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    if (carouselWrapperRef.current) {
      observer.observe(carouselWrapperRef.current);
    }

    // Initial calculation
    updateDimensions();

    return () => observer.disconnect();
  }, []);

  // 2. Logic boundaries
  const maxIndex = Math.max(0, popularItems.length - visibleItems);

  // We add 'visibleItems - 1' to maxIndex on mobile if we want to scroll to the very last item
  // effectively, but usually stopping when the last item is in view is better.
  // However, for peeking capability (85% width), allowing scroll to the very end is usually desired:
  const effectiveMaxIndex =
    window.innerWidth < 768 ? popularItems.length - 1 : maxIndex;

  const scrollTo = (index: number) => {
    const target = Math.max(0, Math.min(index, effectiveMaxIndex));
    setCurrentIndex(target);
  };

  const slideLeft = () => scrollTo(currentIndex - 1);
  const slideRight = () => scrollTo(currentIndex + 1);

  return (
    <section className="py-24 bg-surface" id="menu">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Customers' Choice
          </span>
          <h2 className="text-4xl md:text-6xl font-modern font-black text-text-main mb-2 uppercase tracking-tighter">
            Our{" "}
            <span className="font-artistic text-primary normal-case text-5xl md:text-7xl inline-block rotate-[-2deg]">
              Favorites
            </span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            The most loved dishes from our kitchen, prepared with passion and
            fire.
          </p>
        </div>

        {/* Carousel Outer Wrapper */}
        <div className="relative group/carousel max-w-[1400px] mx-auto">
          {/* DESKTOP NAV ARROWS */}
          <div className="hidden md:block absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 z-30">
            <button
              onClick={slideLeft}
              disabled={currentIndex === 0}
              className={`p-4 rounded-full bg-white shadow-xl border border-border transition-all duration-300 group
                ${
                  currentIndex === 0
                    ? "opacity-40 cursor-not-allowed bg-gray-50 text-gray-400"
                    : "hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
                }`}
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 -translate-y-1/2 z-30">
            <button
              onClick={slideRight}
              disabled={currentIndex >= effectiveMaxIndex}
              className={`p-4 rounded-full bg-white shadow-xl border border-border transition-all duration-300 group
                ${
                  currentIndex >= effectiveMaxIndex
                    ? "opacity-40 cursor-not-allowed bg-gray-50 text-gray-400"
                    : "hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
                }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Viewport (The Window) */}
          {/* We ref this to calculate widths */}
          <div ref={carouselWrapperRef} className="overflow-hidden py-4">
            <motion.div
              ref={containerRef}
              className="flex"
              // Ensure the gap in CSS matches our JS constant
              style={{ gap: `${GAP}px` }}
              animate={{
                // THE CORE FIX: Move by exactly (ItemWidth + Gap) * Index
                x: -(currentIndex * (itemWidth + GAP)),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              drag="x"
              dragConstraints={{
                left: -(effectiveMaxIndex * (itemWidth + GAP)),
                right: 0,
              }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 50;
                const dragDistance = -offset.x;

                // Logic to snap to next/prev based on swipe direction
                if (dragDistance > swipeThreshold || velocity.x < -500) {
                  scrollTo(currentIndex + 1);
                } else if (dragDistance < -swipeThreshold || velocity.x > 500) {
                  scrollTo(currentIndex - 1);
                } else {
                  scrollTo(currentIndex);
                }
              }}
            >
              {popularItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col snap-start select-none"
                  // 3. Apply the calculated width directly via inline styles
                  style={{ width: itemWidth }}
                >
                  <div className="relative w-full aspect-square md:h-[320px] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={
                        item.image && item.image.startsWith("http")
                          ? item.image
                          : PLACEHOLDER_IMAGE
                      }
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md">
                      <span className="font-bold text-primary">
                        ${item.price?.toFixed(2) || "12.00"}
                      </span>
                    </div>
                  </div>

                  <div className="px-2 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-serif text-2xl font-bold text-text-main line-clamp-1">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-text-muted leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-dashed border-border flex items-center justify-between">
                      {item.variants ? (
                        <span className="text-xs font-semibold text-text-muted bg-gray-100 px-3 py-1 rounded-full">
                          {item.variants.length} Options
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-text-muted">
                          Standard Portion
                        </span>
                      )}

                      <button className="flex items-center gap-2 text-sm font-semibold text-text-main group-hover:text-primary transition-colors">
                        Order Now
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="mt-6 flex md:hidden items-center justify-between px-2">
            <button
              onClick={slideLeft}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border border-border transition-all ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed bg-gray-50"
                  : "bg-white active:scale-95 text-primary border-primary"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {popularItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"
                  }`}
                  // Optimization: Only show dots reasonably close to current index on mobile
                  style={{
                    display:
                      Math.abs(currentIndex - idx) > 3 ? "none" : "block",
                  }}
                />
              ))}
            </div>

            <button
              onClick={slideRight}
              disabled={currentIndex >= effectiveMaxIndex}
              className={`p-3 rounded-full border border-border transition-all ${
                currentIndex >= effectiveMaxIndex
                  ? "opacity-40 cursor-not-allowed bg-gray-50"
                  : "bg-white active:scale-95 text-primary border-primary"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
