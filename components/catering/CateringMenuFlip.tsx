"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useAnimation,
  PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";
import Image from "next/image";

export default function CateringMenuFlip() {
  // --- IMAGES ---
  const FRONT_IMAGE = "/catering/roostnroast-catering-page-1.jpg";
  const BACK_IMAGE = "/catering/roostnroast-catering-page-2.jpg";

  // --- MOTION STATE ---
  // "x" tracks the drag position (0 = Closed/Front, -100% = Open/Back)
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);

  // --- TRANSFORMS ---
  // Map x-drag pixels (0 to -300) to Rotation Degrees (0 to -180)
  // We use a spring for the rotation to make it feel slightly weighted but responsive
  const rotateY = useTransform(x, [0, -300], [0, -180]);

  // Lighting: Darken the page as it passes 90 degrees (perpendicular)
  const shadowOpacity = useTransform(rotateY, [-20, -90, -160], [0, 0.4, 0]);

  // Z-Index: Ensure the correct side captures clicks/hovers
  const zIndex = useTransform(rotateY, [0, -90, -180], [1, 0, 1]);

  // --- HANDLERS ---

  // 1. Handle the "Snap" after user releases the drag
  const handleDragEnd = (event: any, info: PanInfo) => {
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    const width = 300; // Drag threshold reference

    // Determine direction based on drag distance or velocity flick
    if (offset < -100 || velocity < -500) {
      // User swiped Left -> Go to Back Page
      animateToFlipped();
    } else if (offset > 100 || velocity > 500) {
      // User swiped Right -> Go to Front Page
      animateToFront();
    } else {
      // Revert to nearest state
      if (isFlipped) animateToFlipped();
      else animateToFront();
    }
  };

  // 2. Programmatic Controls (Buttons)
  const animateToFlipped = () => {
    controls.start({
      x: -300,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    });
    setIsFlipped(true);
  };

  const animateToFront = () => {
    controls.start({
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    });
    setIsFlipped(false);
  };

  // Sync motion value with animation controls
  useEffect(() => {
    const unsubscribe = x.on("change", (v) => {
      // Optional: Logic to detect strict halfway point if needed
    });
    return () => unsubscribe();
  }, [x]);

  return (
    <section className="py-20 bg-[#F5F2EB] relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <span className="text-primary font-artistic text-4xl md:text-5xl -rotate-2 inline-block mb-2">
          Discover
        </span>
        <h2 className="text-3xl md:text-5xl font-modern font-black text-secondary uppercase tracking-tighter">
          Our Catering Menu
        </h2>
        <p className="text-secondary/60 mt-4 font-medium flex items-center justify-center gap-2 text-sm md:text-base">
          <Hand size={18} className="animate-pulse" />
          Drag the page to flip
        </p>
      </div>

      {/* --- FLIP INTERACTION AREA --- */}
      <div className="relative w-full max-w-[500px] aspect-[1/1.414] px-4 md:px-0">
        {/* PERSPECTIVE WRAPPER */}
        <div
          className="relative w-full h-full perspective-[2000px]"
          style={{ cursor: "grab" }}
        >
          {/* THE FLIPPING CARD (Driven by 'x' motion value via 'rotateY') */}
          <motion.div
            className="w-full h-full relative preserve-3d shadow-2xl rounded-2xl"
            style={{
              rotateY,
              transformStyle: "preserve-3d",
              transformOrigin: "center", // Center rotation works best for single-stack flip
            }}
          >
            {/* --- FRONT PAGE (0 to -90deg) --- */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-white border-[1px] border-stone-200"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Paper Texture */}
              <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />

              {/* Dynamic Lighting Overlay (Shadow as page turns) */}
              <motion.div
                style={{ opacity: shadowOpacity }}
                className="absolute inset-0 z-20 bg-gradient-to-r from-black/5 to-black/40 pointer-events-none"
              />

              {/* Spine Highlight (Left Edge) */}
              <div className="absolute left-0 top-0 bottom-0 w-[4%] bg-gradient-to-r from-black/20 to-transparent z-20" />

              <div className="relative w-full h-full p-3 bg-white">
                <div className="relative w-full h-full border border-stone-100 rounded-lg overflow-hidden">
                  <Image
                    src={FRONT_IMAGE}
                    alt="Catering Menu Page 1"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="absolute bottom-4 right-6 z-20 text-[10px] font-bold text-gray-500 font-modern uppercase tracking-widest bg-white/90 px-2 py-1 rounded">
                Front
              </div>
            </div>

            {/* --- BACK PAGE (-90deg to -180deg) --- */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-white border-[1px] border-stone-200"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)", // Pre-rotate back face
              }}
            >
              {/* Paper Texture */}
              <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />

              {/* Dynamic Lighting Overlay */}
              <motion.div
                style={{ opacity: shadowOpacity }}
                className="absolute inset-0 z-20 bg-gradient-to-l from-black/5 to-black/40 pointer-events-none"
              />

              {/* Spine Highlight (Right Edge for Back Page) */}
              <div className="absolute right-0 top-0 bottom-0 w-[4%] bg-gradient-to-l from-black/20 to-transparent z-20" />

              <div className="relative w-full h-full p-3 bg-white">
                <div className="relative w-full h-full border border-stone-100 rounded-lg overflow-hidden">
                  <Image
                    src={BACK_IMAGE}
                    alt="Catering Menu Page 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-4 left-6 z-20 text-[10px] font-bold text-gray-500 font-modern uppercase tracking-widest bg-white/90 px-2 py-1 rounded">
                Back
              </div>
            </div>
          </motion.div>

          {/* --- DRAG PROXY (Invisible Touch Layer) --- */}
          {/* This sits on top and captures gestures. We bind its X position to the card rotation. */}
          <motion.div
            className="absolute inset-0 z-50 touch-pan-x"
            drag="x"
            dragConstraints={{ left: -300, right: 0 }} // Limits: 0 (Closed) to -300 (Open)
            dragElastic={0.05} // Minimal elastic feel
            style={{ x }} // Bind the motion value
            animate={controls} // Allow programmatic control
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          />
        </div>

        {/* --- BOOK SHADOW --- */}
        <motion.div
          className="absolute -bottom-8 left-10 right-10 h-6 bg-black/20 blur-xl rounded-[100%]"
          animate={{
            scaleX: isFlipped ? 0.9 : 1,
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* --- BUTTON CONTROLS --- */}
      <div className="mt-12 flex items-center gap-8 relative z-10">
        <button
          onClick={animateToFront}
          disabled={!isFlipped}
          className={`group flex items-center gap-2 px-6 py-3 rounded-full border border-secondary/20 transition-all duration-300
            ${
              !isFlipped
                ? "opacity-40 cursor-not-allowed bg-transparent"
                : "bg-white hover:bg-secondary hover:text-white shadow-lg cursor-pointer hover:-translate-x-1"
            }`}
        >
          <ChevronLeft size={20} />
          <span className="font-modern font-bold uppercase tracking-widest text-sm">
            Front
          </span>
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-3">
          <button
            onClick={animateToFront}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${!isFlipped ? "bg-primary scale-125" : "bg-secondary/20 hover:bg-secondary/40"}`}
          />
          <button
            onClick={animateToFlipped}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${isFlipped ? "bg-primary scale-125" : "bg-secondary/20 hover:bg-secondary/40"}`}
          />
        </div>

        <button
          onClick={animateToFlipped}
          disabled={isFlipped}
          className={`group flex items-center gap-2 px-6 py-3 rounded-full border border-secondary/20 transition-all duration-300
            ${
              isFlipped
                ? "opacity-40 cursor-not-allowed bg-transparent"
                : "bg-white hover:bg-secondary hover:text-white shadow-lg cursor-pointer hover:translate-x-1"
            }`}
        >
          <span className="font-modern font-bold uppercase tracking-widest text-sm">
            Back
          </span>
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
