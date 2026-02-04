"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Utensils } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Hook to track scroll progress for generic animations
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 group"
        >
          {/* --- THE BUTTON --- */}
          <button
            onClick={scrollToTop}
            className="relative w-12 h-12 flex items-center justify-center outline-none focus:outline-none"
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/40 group-hover:border-primary group-hover:opacity-100 transition-all duration-300"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 bg-white rounded-full shadow-lg border-2 border-primary/10 group-hover:border-primary flex items-center justify-center overflow-hidden transition-colors duration-300"
            >
              {/* Hover Fill Effect */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative z-10">
                <ArrowUp
                  className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors duration-300"
                  strokeWidth={2.5}
                />
              </div>
            </motion.div>

            {/* 3. Tiny Decorative Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white rounded-full flex items-center justify-center shadow-sm text-[10px] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
              <Utensils size={10} />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
