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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [xOffset, setXOffset] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
        );
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [popularItems.length]);

  const slideLeft = () => {
    const newX = Math.min(0, xOffset + (carouselRef.current?.offsetWidth || 0));
    setXOffset(newX);
  };

  const slideRight = () => {
    const newX = Math.max(
      -width,
      xOffset - (carouselRef.current?.offsetWidth || 0),
    );
    setXOffset(newX);
  };

  return (
    <section className="py-24 bg-surface" id="menu">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Carousel Container */}
        <div className="relative group/carousel max-w-[1400px] mx-auto px-4 md:px-20">
          {/* Navigation Buttons - Left and Right */}
          <div
            className={`absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-30 transition-all duration-300 ${xOffset >= 0 ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/carousel:opacity-100"}`}
          >
            <button
              onClick={slideLeft}
              className="p-4 rounded-full bg-white shadow-xl border border-border hover:bg-primary hover:text-white transition-all duration-300 group"
              aria-label="Previous Slide"
            >
              <ChevronLeft
                size={24}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </button>
          </div>

          <div
            className={`absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-30 transition-all duration-300 ${xOffset <= -width + 10 ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/carousel:opacity-100"}`}
          >
            <button
              onClick={slideRight}
              className="p-4 rounded-full bg-white shadow-xl border border-border hover:bg-primary hover:text-white transition-all duration-300 group"
              aria-label="Next Slide"
            >
              <ChevronRight
                size={24}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>

          {/* Carousel Area */}
          <div
            className="overflow-hidden no-scrollbar"
            ref={carouselRef}
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            <style jsx global>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              dragElastic={0}
              animate={{ x: xOffset }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onDragEnd={(e, info) => {
                setXOffset(info.offset.x + xOffset);
              }}
              className="flex gap-8 pb-12 pt-4 cursor-grab active:cursor-grabbing"
              style={{ width: "max-content" }}
            >
              {popularItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col w-[320px] md:w-[calc((100vw-min(100vw,1400px)+min(100vw,1400px)-160px-64px)/3)] lg:w-[calc((min(1400px,100vw)-160px-64px)/3)] flex-shrink-0 snap-start select-none"
                  style={{ width: "calc((min(1400px, 100vw) - 224px) / 3)" }}
                >
                  <div className="relative w-full h-[320px] rounded-2xl overflow-hidden mb-6 bg-gray-100">
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
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
