"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop",
    badge: "Flame Kissed Flavor",
    bgText: "FLAVOR",
    headlineLine1: "TASTE THE",
    headlineLine2: "REAL",
    highlightText: "Fire & Spice",
    description:
      "Marinated for 24 hours, slow-roasted over open flames to lock in every drop of flavor.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    badge: "Authentic & Fresh",
    bgText: "PREMIUM",
    headlineLine1: "FRESH FROM",
    headlineLine2: "THE",
    highlightText: "Grill & Chill",
    description:
      "From farm to fire. We serve only the freshest locally sourced ingredients, cooked with passion.",
  },
];

const AUTOPLAY_DELAY = 6000;

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

  // --- FIRE & CHICKEN ANIMATIONS ---
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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#faf9f6]">
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
            className="object-cover"
            priority
            quality={90}
          />
          {/* Light Overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30" />
        </motion.div>
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
              className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-stone-200 shadow-sm rounded-full text-stone-800 font-modern font-bold uppercase tracking-[0.3em] text-xs mb-8"
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
                className="block text-6xl md:text-8xl lg:text-[11rem] font-modern font-black text-black uppercase leading-[0.8] tracking-tighter blur-[2px] absolute -top-10 left-1/2 translate-y-10 -translate-x-1/2 w-full select-none pointer-events-none"
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
            className="bg-primary text-white px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-primary-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            View Menu
          </Link>

          <Link
            href="/contact"
            className="bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-800 px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-stone-900 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:border-stone-900"
          >
            Order Online
          </Link>
        </motion.div>
      </div>

      {/* --- BOTTOM LEFT MASCOT ANIMATION --- */}
      <div className="absolute bottom-0 left-4 md:left-10 z-30 w-32 h-32 md:w-48 md:h-48 pointer-events-none">
        <motion.div
          className="absolute bottom-16 -left-2 w-24 h-24 md:w-36 md:h-36 z-10"
          variants={fireAnimation}
          animate="animate"
        >
          <div className="absolute inset-0 bg-orange-500/30 blur-2xl rounded-full scale-110" />
          <Image
            src="/hero/fire.svg"
            alt="Animated Fire"
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Chicken Layer */}
        <motion.div
          className="absolute bottom-0 left-0 w-28 h-28 md:w-40 md:h-40 z-20 origin-bottom"
          variants={chickenEntrance}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ y: [-64, -60, -64] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src="/hero/chicken.svg"
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
