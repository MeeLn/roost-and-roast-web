"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    // 1. Changed base background to Warm Off-White (matches Hero)
    <section className="relative py-32 overflow-hidden bg-[#faf9f6] isolate">
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full opacity-[1] grayscale-0"
          style={{
            // Using the same texture but very subtle and grayscale so it doesn't clash
            backgroundImage: `url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* 2. Gradient matches the light background color to fade edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/60 to-[#faf9f6] opacity-80" />
      </div>

      {/* Glowing Warm Gradient - Subtle Orange/Yellow warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* --- Top Tagline --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-[2px] w-12 bg-primary/60" />
          <span className="font-modern font-bold tracking-[0.3em] text-stone-600 uppercase text-sm md:text-base">
            Don't Just Eat
          </span>
          <div className="h-[2px] w-12 bg-primary/60" />
        </motion.div>

        {/* --- Main Headline --- */}
        <div className="mb-10 px-2">
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-modern font-black text-stone-900 uppercase tracking-tighter leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="block mb-2 md:mb-4 text-teal-700/80"
            >
              Ignite Your
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
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
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-stone-600 max-w-2xl mx-auto text-lg md:text-2xl leading-relaxed font-modern font-medium italic mb-14"
        >
          "From the first crackle of the{" "}
          <span className="font-artistic text-stone-800 text-3xl md:text-4xl normal-case not-italic inline-block rotate-2 mx-1">
            Charcoal
          </span>{" "}
          to the very last{" "}
          <span className="font-artistic text-stone-800 text-3xl md:text-4xl normal-case not-italic inline-block -rotate-1 mx-1">
            Bite
          </span>
          , we promise an experience that feeds your soul."
        </motion.p>

        {/* --- Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* Primary Button */}
          <Link
            href="/menu"
            className="group flex items-center gap-2 bg-primary text-white px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-primary-light hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            View Menu
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Button - Updated for Light Theme (Bordered) */}
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-800 px-10 py-4 text-lg font-modern font-black rounded-3xl uppercase tracking-widest transition-all hover:bg-stone-900 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:border-stone-900"
          >
            Book a Table
            <Phone className="w-5 h-5 text-stone-800 group-hover:text-white group-hover:rotate-12 transition-transform" />
          </Link>
        </motion.div>

        {/* --- Floating Badge Decoration --- */}
        <motion.div
          initial={{ rotate: -12, scale: 0 }}
          whileInView={{ rotate: 12, scale: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.8 }}
          className="absolute right-[10%] top-[10%] hidden lg:flex flex-col items-center justify-center w-32 h-32 bg-stone-900 rounded-full shadow-2xl z-20"
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
