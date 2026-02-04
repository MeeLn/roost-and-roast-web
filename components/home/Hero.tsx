"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- DYNAMIC CONTENT CONFIGURATION ---
const HERO_CONTENT = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    badge: "The Charcoal Specialists",
    bgText: "CHARCOAL",
    headlineLine1: "CRAFTING THE",
    headlineLine2: "PERFECT",
    highlightText: "Roost & Roast",
    description:
      "Where traditional oak fire meets modern culinary flair. Experience the smokiest, juiciest roast in town.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop", // Roast Chicken Image
    badge: "Flame Kissed Flavor",
    bgText: "FLAVOR",
    headlineLine1: "TASTE THE",
    headlineLine2: "REAL",
    highlightText: "Fire & Spice",
    description:
      " marinated for 24 hours, slow-roasted over open flames to lock in every drop of flavor.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop", // BBQ/Grill Image
    badge: "Authentic & Fresh",
    bgText: "PREMIUM",
    headlineLine1: "FRESH FROM",
    headlineLine2: "THE",
    highlightText: "Grill & Chill",
    description:
      "From farm to fire. We serve only the freshest locally sourced ingredients, cooked with passion.",
  },
];

const AUTOPLAY_DELAY = 6000; // 6 Seconds per slide

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- AUTO-PLAY EFFECT ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_CONTENT[currentIndex];

  // --- ANIMATION VARIANTS ---
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9, rotate: -5 },
    animate: { opacity: 1, scale: 1, rotate: -3 },
    exit: { opacity: 0, scale: 1.1, rotate: 0 },
    transition: { duration: 0.8, ease: "backOut" },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-text-main bg-black">
      {/* --- BACKGROUND IMAGE SLIDER --- */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide.id}
          className="absolute top-0 left-0 w-full h-full z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={currentSlide.image}
            alt="Hero Background"
            fill
            className="object-cover opacity-80"
            priority
            quality={90}
          />
          {/* Dark Overlay inside the motion div to fade with image */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* --- STATIC OVERLAY (Optional for extra darkness if needed) --- */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/20" /> */}

      {/* --- TEXT CONTENT --- */}
      <div className="relative z-20 text-center max-w-5xl px-4">
        <AnimatePresence mode="wait">
          <div
            key={currentSlide.id}
            className="mb-6 flex flex-col items-center"
          >
            {/* BADGE */}
            <motion.span
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
              className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-modern font-bold uppercase tracking-[0.3em] text-xs mb-8"
            >
              {currentSlide.badge}
            </motion.span>

            {/* HEADLINE GROUP */}
            <div className="relative w-full">
              {/* Giant Background Text */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1 }}
                className="block text-6xl md:text-8xl lg:text-[11rem] font-modern font-black text-white uppercase leading-[0.8] tracking-tighter blur-[2px] absolute -top-10 left-1/2 translate-y-10 -translate-x-1/2 w-full select-none pointer-events-none"
              >
                {currentSlide.bgText}
              </motion.span>

              {/* Main Headline */}
              <h1 className="relative z-10">
                <motion.span
                  variants={fadeUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: 0.1 }}
                  className="block text-4xl md:text-6xl lg:text-7xl font-modern font-black text-white uppercase leading-none tracking-tighter"
                >
                  {currentSlide.headlineLine1} <br />{" "}
                  {currentSlide.headlineLine2}
                </motion.span>

                {/* Artistic Highlight */}
                <motion.span
                  variants={scaleIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: 0.2 }}
                  className="block font-artistic text-primary text-7xl md:text-9xl lg:text-[11rem] normal-case leading-none -mt-4 md:-mt-8 relative z-20 drop-shadow-2xl"
                >
                  {currentSlide.highlightText}
                </motion.span>
              </h1>
            </div>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0.3 }}
              className="text-lg md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-modern font-medium tracking-tight mt-6"
            >
              {currentSlide.description}
            </motion.p>
          </div>
        </AnimatePresence>

        {/* --- BUTTONS (Static, so they don't flash on slide change) --- */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/menu"
            className="bg-primary text-white px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-primary-light hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            View Menu
          </Link>
          <Link
            href="/contact"
            className="bg-white text-text-main px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl hover:bg-text-main hover:text-white shadow-md"
          >
            Order Online
          </Link>
        </motion.div>
      </div>
      {/* --- PROGRESS INDICATORS --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {HERO_CONTENT.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
