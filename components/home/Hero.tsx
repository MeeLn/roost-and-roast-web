"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const HERO_CONTENT = [
  {
    id: 1,
    images: [
      "/home/hero/meat-1.png",
      "/home/hero/meat-2.png",
      "/home/hero/meat-3.png",
      "/home/hero/meat-4.png",
    ],
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
    images: [
      "/home/hero/salads-1.png",
      "/home/hero/salads-2.png",
      "/home/hero/salads-3.png",
      "/home/hero/salads-4.png",
    ],
    badge: "Fresh From The Earth",
    bgText: "FRESH",
    headlineLine1: "CRUNCH THE",
    headlineLine2: "PURE",
    highlightText: "Garden Greens",
    description:
      "Hand-picked daily. A vibrant mix of organic greens, crisp veggies, and house-made dressings for a guilt-free crunch.",
  },
  {
    id: 3,
    images: [
      "/home/hero/snacks-1.png",
      "/home/hero/snacks-2.png",
      "/home/hero/snacks-3.png",
      "/home/hero/snacks-4.png",
    ],
    badge: "The Perfect Sidekick",
    bgText: "CRISPY",
    headlineLine1: "GOLDEN FRIED",
    headlineLine2: "BITES OF",
    highlightText: "Comfort Food",
    description:
      "The ultimate treat. Golden-fried to perfection and seasoned with our secret spice blend. Impossible to eat just one.",
  },
];

const AUTOPLAY_DELAY = 6000;

const IMAGE_POSITIONS = [
  // Top Left (Huge)
  {
    className:
      "absolute top-[5%] -left-[10%] md:-left-[5%] w-64 md:w-[28rem] z-10",
    rotation: -15,
  },
  // Top Right (Large)
  {
    className:
      "absolute top-[0%] -right-[15%] md:-right-[2%] w-48 md:w-[22rem] z-10",
    rotation: 12,
  },
  // Bottom Left
  {
    className:
      "absolute bottom-[15%] -left-[8%] md:left-[16%] w-40 md:w-[18rem] z-10",
    rotation: -8,
  },
  // Bottom Right (Huge)
  {
    className:
      "absolute bottom-[2%] -right-[15%] md:-right-[6%] w-56 md:w-[32rem] z-10",
    rotation: 10,
  },
];

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

  // --- TEXT ANIMATIONS ---
  const fadeUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.9, rotate: -5 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: -3,
      transition: { duration: 0.8, ease: "backOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      rotate: 0,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  // --- FLOATING FOOD ITEM ANIMATION ---
  const floatingImage: Variants = {
    initial: { opacity: 0, scale: 0.5, y: 50 },
    animate: (custom) => ({
      opacity: 1,
      scale: 1,
      y: [0, -10, 0],
      rotate: [custom.rotation, custom.rotation + 5, custom.rotation],
      transition: {
        y: {
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 5 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.5 },
    },
  };

  // --- MASCOT ANIMATIONS ---
  const fireAnimation: Variants = {
    animate: {
      opacity: [0.6, 1, 0.7, 0.9, 0.6],
      scale: [1, 1.1, 0.95, 1.05, 1],
      x: [-1, 1, -2, 0, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const chickenEntrance: Variants = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-100">
      {/* --- ROUGHER PAPER TEXTURE BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* --- FLOATING CORNER IMAGES (DOUBLED SIZE) --- */}
      <AnimatePresence mode="wait">
        <div
          key={`images-${currentSlide.id}`}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          {currentSlide.images.map((src, idx) => {
            const positionConfig = IMAGE_POSITIONS[idx] || IMAGE_POSITIONS[0];
            return (
              <motion.div
                key={`${currentSlide.id}-img-${idx}`}
                custom={{ rotation: positionConfig.rotation }}
                variants={floatingImage}
                initial="initial"
                animate="animate"
                exit="exit"
                className={positionConfig.className}
              >
                <Image
                  src={src}
                  alt="Food Highlight"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>

      {/* --- TEXT CONTENT --- */}
      <div className="relative z-20 text-center max-w-5xl px-4 mt-12 md:mt-0">
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
              className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-md border border-stone-300 shadow-sm rounded-full text-stone-800 font-modern font-bold uppercase tracking-[0.3em] text-xs mb-8"
            >
              {currentSlide.badge}
            </motion.span>

            {/* HEADLINE GROUP */}
            <div className="relative w-full">
              {/* Giant Background Text */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.08, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1 }}
                className="block text-6xl md:text-8xl lg:text-[11rem] font-modern font-black text-black uppercase leading-[0.8] tracking-tighter blur-[2px] absolute top-4 left-1/2 translate-y-10 -translate-x-1/2 w-full select-none pointer-events-none"
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
                  className="block text-4xl md:text-6xl lg:text-7xl font-modern font-black text-stone-900 uppercase leading-none tracking-tighter"
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
              className="text-lg md:text-2xl text-stone-800 font-medium mb-12 max-w-2xl mx-auto font-modern tracking-tight mt-6 leading-relaxed"
            >
              {currentSlide.description}
            </motion.p>
          </div>
        </AnimatePresence>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/menu"
            className="bg-primary text-white px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-primary-light hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 z-30"
          >
            View Menu
          </Link>

          <Link
            href="/contact"
            className="bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-800 px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-stone-900 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:border-stone-900 z-30"
          >
            Order Online
          </Link>
        </motion.div>
      </div>

      {/* --- BOTTOM LEFT MASCOT ANIMATION --- */}
      <div className="absolute bottom-0 left-4 md:left-10 z-30 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
        {/* Fire Layer */}
        <motion.div
          className="absolute bottom-9 left-1 w-24 h-24 md:bottom-18 md:-left-2 md:w-36 md:h-36 z-10"
          variants={fireAnimation}
          animate="animate"
        >
          <div className="absolute inset-0 bg-orange-500/30 blur-2xl rounded-full scale-110" />
          <Image
            src="/home/fire.svg"
            alt="Animated Fire"
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Chicken Layer */}
        <motion.div
          className="absolute bottom-8 left-2 w-28 h-28 md:bottom-16 md:left-0 md:w-40 md:h-40 z-20 origin-bottom"
          variants={chickenEntrance}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src="/home/chicken.svg"
              alt="Mascot Chicken"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* --- PROGRESS INDICATORS --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {HERO_CONTENT.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer shadow-sm ${
              idx === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-stone-400/50 hover:bg-stone-600"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
