"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-text-main">
      {/* Background Image - Unsplash */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          alt="Roost and Roast Restaurant"
          fill
          className="object-cover opacity-80"
          priority
          quality={90}
        />
      </div>

      {/* Overlay - White gradient to ensure navbar visibility and text readability */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-white/90 via-white/40 to-white/60" />

      <div className="relative z-20 text-center max-w-4xl px-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-[1.1] text-shadow-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="block text-sm md:text-lg font-sans font-normal tracking-[0.2em] uppercase text-primary mb-2"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Est. 2024
          </motion.span>
          Roost & Roast
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-text-main/90 mb-10 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the finest charcoal chicken and gourmet roasts. Where
          tradition meets modern flavor.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/menu"
            className="bg-primary text-white px-10 py-4 text-lg font-semibold rounded-md uppercase tracking-wide transition-all hover:bg-primary-light hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
          >
            View Menu
          </Link>
          <Link
            href="/contact"
            className="bg-transparent text-text-main border-2 border-text-main px-10 py-4 text-lg font-semibold rounded-md uppercase tracking-wide transition-all hover:bg-black hover:text-white hover:-translate-y-1"
          >
            Order Online
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
