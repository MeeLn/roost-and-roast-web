"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { menus } from "@/lib/data/menus";
import { ArrowRight } from "lucide-react";

// Using a fallback image if local asset isn't available
const PLACEHOLDER_IMAGE = "/placeholder.png";

// --- UPDATED MENU CARD COMPONENT ---
const MenuCard = ({ item }: { item: (typeof menus)[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [imgSrc, setImgSrc] = useState(item.image || PLACEHOLDER_IMAGE);

  useEffect(() => {
    setImgSrc(item.image || PLACEHOLDER_IMAGE);
  }, [item.image]);

  useEffect(() => {
    if (window.innerWidth >= 768) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsMobileActive(entry.isIntersecting),
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const activeClass = (base: string, active: string) =>
    `${base} ${isMobileActive ? active : ""}`;
  const isDefaultGlassCard = !item.bgColor || item.bgColor === "none";

  const cardClassName = activeClass(
    `flex flex-col flex-grow rounded-3xl border transition-all duration-500 overflow-hidden py-5 px-5 hover:border-primary/80 hover:shadow-xl ${
      isDefaultGlassCard
        ? "bg-white/15 backdrop-blur-xl border-slate-400/40 shadow-2xl z-10 hover:shadow-2xl"
        : !item.bgColor
          ? "bg-background border-border shadow-sm"
          : "border-transparent shadow-sm"
    }`,
    isDefaultGlassCard
      ? "!border-primary/80 shadow-2xl"
      : "!border-primary/80 shadow-xl",
  );

  const cardStyle =
    item.bgColor && item.bgColor !== "none"
      ? { backgroundColor: item.bgColor }
      : {};

  return (
    <motion.div
      layout
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex flex-col group mx-3 md:mx-0 h-full md:max-w-[380px] mx-auto w-full md:w-full"
    >
      <div className={cardClassName} style={cardStyle}>
        <div className="relative aspect-square w-full mx-auto mb-3 overflow-hidden rounded-2xl bg-transparent">
          <Image
            src={imgSrc}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
            onError={() => setImgSrc(PLACEHOLDER_IMAGE)}
            className={activeClass(
              "object-cover transition-transform duration-700 group-hover:scale-105",
              "scale-105",
            )}
          />
        </div>

        <div className="px-5 py-3 flex flex-col items-center flex-grow text-center gap-1">
          <h3 className="font-modern text-lg md:text-xl font-black text-secondary uppercase tracking-tight leading-tight">
            {item.title}
          </h3>
          <p className="italic text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="mt-auto relative w-[calc(100%+2.5rem)] -mx-5 -mb-5 overflow-hidden">
          <div
            className={activeClass(
              "absolute inset-0 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0",
              "scale-x-100",
            )}
          />

          <div className="relative z-10 py-5 px-3 flex flex-col items-center justify-center min-h-[72px]">
            {item.variants ? (
              <div className="flex flex-wrap justify-center gap-1.5 w-full">
                {item.variants.map((variant) => (
                  <div
                    key={variant.label}
                    className="flex flex-col items-center justify-center px-3 py-1 rounded-lg min-w-[56px] transition-all duration-300 hover:bg-black/10 group/price"
                  >
                    <span
                      className={activeClass(
                        "font-artistic text-base md:text-lg text-primary -rotate-3 transition-colors duration-300 group-hover:text-white",
                        "text-white",
                      )}
                    >
                      {variant.label}
                    </span>
                    <span
                      className={activeClass(
                        "font-modern text-xs md:text-sm font-bold text-primary group-hover:text-white transition-colors duration-300",
                        "text-white",
                      )}
                    >
                      ${variant.price.toFixed(0)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-baseline gap-1.5 px-5 py-1 rounded-lg transition-all duration-300 hover:bg-black/10 group/price">
                <span
                  className={activeClass(
                    "font-artistic text-xl md:text-2xl text-primary -rotate-6 lowercase mb-0 transition-colors duration-500 group-hover:text-white",
                    "text-white",
                  )}
                >
                  only
                </span>
                <span
                  className={activeClass(
                    "font-modern text-xl md:text-2xl font-bold text-primary transition-colors duration-500 group-hover:text-white",
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
      <div className="container max-w-[1400px] mx-auto px-4 md:px-0">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-4 lg:gap-x-5 gap-y-8 sm:gap-y-10 md:gap-y-12">
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
