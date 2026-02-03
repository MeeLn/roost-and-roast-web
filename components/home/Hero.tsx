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
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/50" />

      <div className="relative z-20 text-center max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-modern font-bold uppercase tracking-[0.3em] text-xs mb-8">
            The Charcoal Specialists
          </span>
          <h1 className="relative">
            <span className="block text-6xl md:text-8xl lg:text-[11rem] font-modern font-black text-white uppercase leading-[0.8] tracking-tighter opacity-20 blur-[2px] absolute -top-10 left-1/2 translate-y-10 -translate-x-1/2 w-full select-none">
              CHARCOAL
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-modern font-black text-white uppercase leading-none tracking-tighter relative z-10">
              CRAFTING THE <br /> PERFECT
            </span>
            <span className="block font-artistic text-primary text-7xl md:text-9xl lg:text-[11rem] normal-case leading-none -mt-4 md:-mt-8 relative z-20 drop-shadow-2xl rotate-[-3deg]">
              Roost & Roast
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-modern font-medium tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Where traditional oak fire meets modern culinary flair. <br />
          Experience the smokiest, juiciest roast in town.
        </motion.p>

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
    </section>
  );
}
