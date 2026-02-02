"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menus } from "@/lib/data/menus";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop";

export default function FeaturedMenu() {
  const popularItems = menus.filter((item) => item.isPopular);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate total scrollable width: scrollWidth - clientWidth
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      );
    }
  }, []);

  const slideLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-surface" id="menu">
      <div className="container mx-auto px-4">
        {/* Header with Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
              Our Favorites
            </h2>
            <p className="text-text-muted text-lg">
              Most loved dishes chosen by you
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={slideLeft}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={slideRight}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Next Slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <motion.div
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          ref={carouselRef}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
            style={{ width: "max-content" }} // Ensure inner width grows to fit items
          >
            {popularItems.map((item, index) => (
              <motion.div
                key={index}
                className="w-[300px] sm:w-[350px] flex-shrink-0 flex flex-col h-full bg-background rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 select-none"
              >
                <div className="relative w-full h-64 bg-gray-100 pointer-events-none">
                  <Image
                    src={
                      item.image && item.image.startsWith("http")
                        ? item.image
                        : PLACEHOLDER_IMAGE
                    }
                    alt={item.title}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <div className="flex flex-col flex-grow p-6 gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl font-semibold text-text-main line-clamp-1">
                      {item.title}
                    </h3>
                    <span className="font-bold text-primary text-lg whitespace-nowrap ml-2">
                      ${item.price?.toFixed(2) || "12.00"}
                    </span>
                  </div>
                  <p className="text-text-muted text-[0.95rem] leading-relaxed line-clamp-3 text-wrap">
                    {item.description}
                  </p>
                  {item.variants && (
                    <span className="text-xs font-bold uppercase tracking-wider text-primary pt-2 border-t border-border/50">
                      Available in multiple sizes
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
