"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- MASCOT ANIMATIONS ---
const chickenSequence: Variants = {
  initial: {
    x: -250,
    opacity: 0,
    rotate: -20,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const fireSequence: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: [0, 1, 0.8, 1, 0.7, 1],
    scale: [0.5, 1.1, 0.95, 1.05, 0.98, 1.1],
    x: [0, 2, -2, 1, -1, 0],
    transition: {
      delay: 0.8,
      duration: 3,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const glowSequence: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0, 0.6, 0.4, 0.7],
    scale: [0.8, 1.2, 1, 1.1],
    transition: {
      delay: 0.8, // Syncs with fire delay
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function CTA2Section() {
  return (
    <section className="relative w-full max-w-full bg-orange-400 overflow-x-clip z-40">
      {/* Decorative Text Stamp */}
      <div className="absolute right-0 translate-x-[4%] top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none select-none z-0 hidden lg:flex items-center justify-center w-[500px] h-[500px]">
        {/* Spinning Outer Ring */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]"
        >
          <path
            id="curve"
            d="M 100 20 a 80 80 0 1 1 0 160 a 80 80 0 1 1 0 -160"
            fill="transparent"
          />
          <text
            fill="black"
            className="font-bold font-modern text-[18px] uppercase tracking-widest"
          >
            <textPath href="#curve" startOffset="0" textLength="502">
              THERE ARE 2 TYPES OF PEOPLE &middot; ROOST &amp; ROAST PEOPLE
              &middot; AND THE REST &middot;
            </textPath>
          </text>
        </svg>

        {/* Static Center Content */}
        <div className="absolute flex flex-col items-center justify-center text-black rotate-12">
          <span className="font-artistic font-black text-7xl leading-none tracking-tight">
            ROOST
          </span>
          <span className="font-black font-artistic text-6xl leading-tight">
            &amp;
          </span>
          <span className="font-artistic font-black text-7xl leading-none tracking-tight">
            ROAST
          </span>
        </div>
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl md:mx-auto gap-4 md:gap-8">
          {/* --- LEFT SIDE: ANIMATED MASCOT --- */}
          <div className="w-full md:w-1/2 relative flex items-center justify-center h-[180px] md:h-[20px] z-50">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[320px] md:h-[320px] pointer-events-none select-none flex items-center justify-center"
            >
              {/* Fire Layer (Background) */}
              <motion.div
                className="absolute inset-0 z-10 flex items-center justify-center -translate-y-4 md:-translate-y-4 -translate-x-6 md:-translate-x-8"
                variants={fireSequence}
              >
                {/* Animated Glow Blob */}
                <motion.div
                  variants={glowSequence}
                  className="absolute inset-10 bg-yellow-500/40 blur-3xl rounded-full"
                />

                <Image
                  src="/home/fire.svg"
                  alt="Animated Fire"
                  width={480}
                  height={480}
                  className="object-contain drop-shadow-[0_0_20px_rgba(255,200,0,0.5)] w-full h-full"
                />
              </motion.div>

              {/* Chicken Layer (Foreground) */}
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center origin-bottom mt-12 md:mt-0"
                variants={chickenSequence}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    delay: 0.8,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src="/home/chicken.svg"
                    alt="Mascot Chicken"
                    width={320}
                    height={320}
                    className="object-contain drop-shadow-2xl w-full h-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: CALL TO ACTION --- */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-30 py-8 md:py-12">
            <h2 className="text-[3rem] md:text-6xl lg:text-[5rem] font-artistic font-black uppercase tracking-tight leading-[0.9] text-gray-900 drop-shadow-sm">
              FLAME-KISSED
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-modern font-black uppercase tracking-tight leading-[0.9] text-gray-900 mt-2">
              PERFECTION
            </h3>

            <div className="mt-6">
              <button className="px-8 py-3 border-2 border-black text-black rounded-lg font-bold uppercase tracking-wider text-sm md:text-base hover:bg-black hover:text-[#f26522] transition-all duration-300">
                VIEW FULL MENU
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
