"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "#menu" },
  { name: "Our Story", path: "#story" },
  { name: "Location", path: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm py-2"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          <Logo variant="full" width={180} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative font-medium text-sm text-text-main uppercase tracking-wider opacity-80 transition-opacity hover:opacity-100 hover:text-primary group"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#order"
              className="bg-primary text-white px-6 py-3 font-semibold rounded-md uppercase tracking-wider transition-all hover:bg-primary-light hover:-translate-y-0.5"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="block md:hidden z-[60] relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-primary" />
            ) : (
              // Using text-text-main (blackish) for light mode visibility on scroll or hero
              // If hero is dark, we might need white. But user asked for light mode and Unsplash images.
              // Assuming generic visibility, we'll use conditional or just dark color if background is light.
              // But on top of hero image (if dark), we need white.
              // Let's use conditional logic based on scroll, OR inverted color.
              <Menu
                size={28}
                className={`transition-colors ${isScrolled ? "text-black" : "text-white"}`}
              />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen bg-background flex flex-col justify-center items-center gap-8 z-55"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-3xl font-serif text-text-main"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#order"
                className="bg-primary text-white px-6 py-3 font-semibold rounded-md uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
