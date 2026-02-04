"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GridMenuSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-zinc-50">
      <div className="container mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-modern font-black text-secondary uppercase tracking-tighter">
            Experience{" "}
            <span className="text-primary font-artistic normal-case text-5xl md:text-7xl">
              The Roost
            </span>
          </h2>
          <p className="text-text-muted mt-4 text-lg font-serif italic">
            From our charcoal pits to your family table.
          </p>
        </div>
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 min-h-[800px] md:min-h-[700px]">
          {/* --- ITEM 1: MAIN MENU (Full Width Top) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative group rounded-[32px] overflow-hidden h-[300px] md:h-[380px]"
          >
            <Link href="/menu" className="block w-full h-full relative">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                  alt="Restaurant Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              </div>

              {/* Floating Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                {/* Top Left Text Blocks */}
                <div className="flex flex-col items-start gap-2">
                  <span className="bg-black text-white px-4 py-2 text-2xl md:text-4xl font-modern font-black uppercase tracking-tighter -rotate-1">
                    EXPLORE
                  </span>
                  <span className="bg-black text-white px-4 py-2 text-2xl md:text-4xl font-modern font-black uppercase tracking-tighter rotate-1">
                    OUR WORLD
                  </span>
                </div>

                {/* Bottom Row: Neon Text + Button */}
                <div className="flex items-end justify-between w-full mt-auto">
                  {/* Neon Script Text */}
                  <span className="hidden md:block font-artistic text-6xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] -rotate-6 translate-y-4 ml-20">
                    Taste the fire
                  </span>

                  {/* Button */}
                  <div className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2 font-modern font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    View Menu
                    <ArrowRight
                      size={20}
                      className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* --- ITEM 2: CATERING (Bottom Left) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group rounded-[32px] overflow-hidden h-[180px] md:h-[300px]"
          >
            <Link href="/catering" className="block w-full h-full relative">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                  alt="Catering Feast"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-8 left-6 md:left-8 flex flex-col items-start gap-3">
                <span className="bg-black text-white px-3 py-1 text-2xl md:text-3xl font-modern font-black translate-y-0 md:translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-0 uppercase tracking-tighter">
                  OUR CATERING
                </span>
                <span className="flex items-center gap-2 text-white font-serif italic text-lg opacity-100 px-2 md:opacity-0 translate-y-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200">
                  Plan your event <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* --- ITEM 3: ABOUT US (Bottom Right) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group rounded-[32px] overflow-hidden h-[180px] md:h-[300px]"
          >
            <Link href="/about" className="block w-full h-full relative">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-8 left-6 md:left-8 flex flex-col items-start gap-3">
                <span className="bg-black text-white px-3 py-1 text-2xl md:text-3xl font-modern font-black translate-y-0 md:translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-0 uppercase tracking-tighter">
                  ABOUT US
                </span>
                <span className="flex items-center gap-2 text-white font-serif italic text-lg opacity-100 px-2 md:opacity-0 translate-y-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200">
                  Meet the team <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
