"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { menus } from "@/lib/data/menus";
import { ArrowRight } from "lucide-react";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop";

// --- REUSABLE MENU CARD COMPONENT ---
const MenuCard = ({ item }: { item: (typeof menus)[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobileActive, setIsMobileActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMobileActive(entry.isIntersecting);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col group mx-2 md:mx-0"
    >
      {/* Floating Image Section */}
      <div
        className={activeClass(
          "absolute -top-40 left-1/2 -translate-x-1/2 w-54 h-54 z-20 transition-transform duration-500 ease-out group-hover:-translate-y-6",
          "-translate-y-6",
        )}
      >
        {/* Spinning Dashed Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className={activeClass(
            "absolute -inset-2 rounded-full border-2 border-dashed border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0",
            "opacity-100",
          )}
        />

        {/* Image Container */}
        <div className="relative w-full h-full rounded-full border border-gray-100/5 shadow-lg overflow-hidden bg-background z-10">
          <Image
            src={
              item.image && item.image.startsWith("http")
                ? item.image
                : PLACEHOLDER_IMAGE
            }
            alt={item.title}
            fill
            className={activeClass(
              "object-cover transition-transform duration-500 group-hover:scale-110",
              "scale-110",
            )}
          />
        </div>
      </div>

      {/* Content Card */}
      <div className="relative z-10 bg-background rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all overflow-hidden flex flex-col flex-grow pt-20">
        <div className="px-6 pb-4 flex flex-col items-center flex-grow text-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-modern text-xl font-black text-secondary uppercase tracking-tight leading-tight">
              {item.title}
            </h3>
            <p className="italic text-sm text-text-muted leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>

        {/* Bottom Pricing/Order Section */}
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

// --- MAIN FEATURED SECTION ---
export default function FeaturedMenu() {
  // Logic: Get popular items, then slice strictly to the first 3
  const featuredItems = menus.filter((item) => item.isPopular).slice(0, 3);

  return (
    <section className="py-24 bg-surface" id="featured-menu">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <span className="text-primary-light font-bold tracking-wider uppercase text-sm mb-2 block">
            Customers&apos; Choice
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

        {/* Grid Layout - Fixed 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-56 md:gap-y-60 pt-30">
          {featuredItems.map((item) => (
            <MenuCard key={item.title} item={item} />
          ))}
        </div>

        {/* View Menu Button (Redirects to /menu) */}
        <div className="mt-10 md:mt-16 text-center">
          <Link
            href="/menu"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border border-primary/20 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />

            <span className="relative z-10 font-modern font-bold uppercase tracking-widest text-primary group-hover:text-white transition-colors duration-300">
              View Full Menu
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
