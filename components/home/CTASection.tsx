"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const floatingImage: Variants = {
  initial: (custom) => ({
    y: 0,
    rotate: custom.rotation,
  }),
  animate: (custom) => ({
    // y: [0, -20, 0],
    // rotate: [
    //   custom.rotation,
    //   custom.rotation + 3,
    //   custom.rotation - 3,
    //   custom.rotation,
    // ],
    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom.delay,
      },
      rotate: {
        duration: 7.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom.delay,
      },
    },
  }),
};

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-stone-100 isolate flex items-center justify-center">
      {/* --- IMPROVED PROCEDURAL PAPER SVG --- */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="roughPaper">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#roughPaper)" />
        </svg>
      </div>

      {/* --- DECORATIVE IMAGES --- */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        {/* 1. Square Image (Top Left) */}
        <motion.div
          custom={{ rotation: -10, delay: 0 }}
          variants={floatingImage}
          initial="initial"
          animate="animate"
          className="absolute -top-4 -left-10 md:top-10 md:left-10 w-60 md:w-106 opacity-90"
        >
          <Image
            src="/home/cta/cta-s.png"
            alt="Delicious Square"
            width={300}
            height={300}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* 2. Vertical Image (Right Side) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-2/3 md:top-1/2 -translate-y-1/2 -right-16 md:-right-24 w-64 md:w-128 h-[60%] md:h-[80%]"
        >
          <Image
            src="/home/cta/cta-v.png"
            alt="Side Menu Item"
            fill
            className="object-contain h-full w-full object-right drop-shadow-2xl"
          />
        </motion.div>

        {/* 3. Horizontal Image (Bottom Center - Anchoring the section) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute -bottom-20 md:-bottom-48 left-1/2 md:left-4/5 -translate-x-1/2 w-[90%] md:w-[600px] h-70 md:h-164"
        >
          <Image
            src="/home/cta/cta-h.png"
            alt="Platter"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
          />
        </motion.div>

        {/* 4. Circle 1 (Top Right / Mid) */}
        <motion.div
          custom={{ rotation: 15, delay: 1.5 }} // Added delay offset
          variants={floatingImage}
          initial="initial"
          animate="animate"
          className="absolute top-6 md:top-20 left-50 md:left-[23%] w-34 md:w-68"
        >
          <Image
            src="/home/cta/cta-c1.png"
            alt="Garnish Circle"
            width={200}
            height={200}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* 5. Circle 2 (Bottom Left / Mid) */}
        <motion.div
          custom={{ rotation: -5, delay: 0.5 }} // Added delay offset
          variants={floatingImage}
          initial="initial"
          animate="animate"
          className="absolute bottom-15/31 md:bottom-34 -left-5 md:left-[5%] w-48 md:w-84"
        >
          <Image
            src="/home/cta/cta-c2.png"
            alt="Garnish Circle 2"
            width={200}
            height={200}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        {/* --- Top Tagline --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-[2px] w-12 bg-primary/60" />
          <span className="font-modern font-bold tracking-[0.3em] text-black uppercase text-sm md:text-base">
            Don't Just Eat
          </span>
          <div className="h-[2px] w-12 bg-primary/60" />
        </motion.div>

        {/* --- Main Headline --- */}
        <div className="mb-10 px-2 relative">
          {/* Subtle background text behind headline for depth */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] font-modern font-black text-black/30 opacity-40 uppercase tracking-tighter pointer-events-none blur-[3px] -z-10">
            CRAVE
          </span>

          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-modern font-black text-stone-900 uppercase tracking-tighter leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block mb-2 md:mb-4 text-teal-800/90"
            >
              Ignite Your
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-artistic text-primary font-bold normal-case text-7xl md:text-9xl lg:text-[11rem] inline-block -rotate-2 filter drop-shadow-lg z-10 relative"
            >
              Cravings
            </motion.span>
          </h2>
        </div>

        {/* --- Descriptive Text --- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-stone-700 max-w-2xl mx-auto text-lg md:text-2xl leading-relaxed font-modern font-medium italic mb-14 bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-stone-200/50 shadow-sm"
        >
          "From the first crackle of the{" "}
          <span className="font-artistic text-primary text-3xl md:text-4xl normal-case not-italic inline-block rotate-2 mx-1">
            Charcoal
          </span>{" "}
          to the very last{" "}
          <span className="font-artistic text-primary text-3xl md:text-4xl normal-case not-italic inline-block -rotate-1 mx-1">
            Bite
          </span>
          , we promise an experience that feeds your soul."
        </motion.p>

        {/* --- Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-30"
        >
          {/* Primary Button */}
          <Link
            href="/menu"
            className="group flex items-center gap-2 bg-primary text-white px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-primary-light hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            View Menu
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/catering#catering"
            className="group flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-stone-300 text-stone-800 px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-stone-900 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:border-stone-900"
          >
            Order Catering
            <Phone className="w-5 h-5 text-stone-800 group-hover:text-white group-hover:rotate-12 transition-transform" />
          </Link>
        </motion.div>

        {/* --- Floating Badge Decoration (Top Right) --- */}
        <motion.div
          initial={{ rotate: -12, scale: 0 }}
          whileInView={{ rotate: 12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.8 }}
          className="absolute right-[5%] top-0 hidden lg:flex flex-col items-center justify-center w-32 h-32 bg-stone-900 rounded-full shadow-2xl z-30"
        >
          <div className="absolute inset-1 border-2 border-dashed border-stone-600 rounded-full animate-spin-slow" />
          <span className="font-modern font-black text-white text-3xl leading-none">
            OPEN
          </span>
          <span className="font-artistic text-primary text-2xl font-black -rotate-6">
            7 Days
          </span>
        </motion.div>
      </div>
    </section>
  );
}
